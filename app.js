const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require("bcryptjs");
const db = require("./mysql"); // Ensure mysql.js is configured correctly
const fs = require("fs");
const multer = require("multer");
const session = require("express-session");
const PDFDocument = require('pdfkit');
const QRCode = require("qrcode"); // Import QRCode module

const app = express();
app.use(
  session({
    secret: "a45A7ZMpVby14qNkWxlSwYGaSUv1d64x",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 2 * 60 * 1000, // 30 minutes session expiration 
    },
  })
);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "uploads");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


// Handle registration
app.post("/register", upload.single("picture"), (req, res) => {
  let {
      generatedNumber,
      confirmationRank, // Rank from frontend
      fullName,
      dateOfBirth,
      gender,
      phoneNumber,
      email,
      zone,
      local_government,
      ward,
      pollingUnit
  } = req.body;

  // ✅ Convert fullName to uppercase and trim spaces
  fullName = fullName.trim().toUpperCase();

  // Ensure email is stored as null if not provided
  email = email && email.trim() !== "" ? email.trim() : null;

  const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

  // Insert into database
  const sql = `INSERT INTO members 
      (membershipNumber, rank, fullName, dateOfBirth, gender, phoneNumber, email, zone, local_government, ward, pollingUnit, imagePath)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [
      generatedNumber, confirmationRank, fullName, dateOfBirth, gender, phoneNumber, email, zone, local_government, ward, pollingUnit, imagePath
  ], (err, result) => {
      if (err) {
          console.error("Database error:", err);
          return res.json({ success: false, message: "Database error" });
      }

      res.json({
          success: true,
          message: "Registration successful",
          data: {
              fullName,
              local_government,
              ward,
              phoneNumber,
              pollingUnit,
              rank: confirmationRank,
              membershipNumber: generatedNumber,
              imagePath: imagePath,
          }
      });
  });
});


// Download Acknowledgment Letter

// Download Acknowledgment Letter
app.get("/download/:membershipNumber", async (req, res) => {
  const membershipNumber = decodeURIComponent(req.params.membershipNumber);

  // Fetch user details from the database
  const sql = `SELECT * FROM members WHERE membershipNumber = ?`;
  db.query(sql, [membershipNumber], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).send("User not found");
    }

    const user = results[0];

    // Encode membershipNumber for QR URL
    const encodedMembershipNumber = encodeURIComponent(user.membershipNumber);
    const qrContent = `https://masmo-1.onrender.com/verify/${encodedMembershipNumber}`;

    // Generate QR Code as a Data URL
    const qrCodeDataURL = await QRCode.toDataURL(qrContent);

    // Create a PDF in memory
    const doc = new PDFDocument();
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="Acknowledgment_${user.membershipNumber}.pdf"`
    );
    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);

    // Title in sky blue and bold
    doc.fontSize(17).fillColor("#87CEEB").font("Helvetica-Bold").text(
      "Maliya Shitu Media Organization (Rundunar-Maliya)",
      { align: "center" }
    );

    // Address
    doc.moveDown(0);
    doc.fontSize(14).fillColor("#87CEEB").font("Helvetica").text(
      "Address: Kano-Nigeria",
      { align: "center" }
    );

    // Reset color and font for other content
    doc.fillColor("black").font("Helvetica");
    doc.moveDown(0);

    // Logo with Circular Mask
    const logoPath = path.join(__dirname, "Masmo.jpg");
    if (fs.existsSync(logoPath)) {
      doc.save();
      doc.circle(280, doc.y + 50, 50).clip();
      doc.image(logoPath, 230, doc.y, { width: 100, height: 100 });
      doc.restore();
    }

    doc.moveDown(7);
    doc.font("Helvetica-Bold").text("Acknowledgment of Membership", {
      align: "center",
      underline: true,
    });
    doc.moveDown(0);

    // Acknowledgment Statement
    doc.fontSize(12).font("Helvetica").text(
      `This is to formally acknowledge that ${user.fullName} is a recognized member of the Maliya Shitu Media Organization (Rundunar-Maliya). Their dedication and commitment to the organization are highly valued.`,
      { align: "center" }
    );
    doc.moveDown(1);

    // User Image (if uploaded) with Circular Mask
    if (user.imagePath) {
      const imgPath = path.join(__dirname, "uploads", user.imagePath);
      if (fs.existsSync(imgPath)) {
        doc.save();
        doc.circle(280, doc.y + 45, 50).clip();
        doc.image(imgPath, 230, doc.y, { width: 100, height: 100 });
        doc.restore();
      }
    }
    doc.moveDown(7);

    // User Details Section
    doc.fontSize(12).text(`Full Name: ${user.fullName}`);
    doc.moveDown();
    doc.text(`Role in the Organization: ${user.rank}`);
    doc.moveDown();
    doc.text(`Local Government Area (LGA): ${user.local_government}`);
    doc.moveDown();
    doc.text(`Ward: ${user.ward}`);
    doc.moveDown();
    doc.text(`Polling Unit: ${user.pollingUnit}`);
    doc.moveDown();
    doc.text(`Contact Phone Number: ${user.phoneNumber}`);
    doc.moveDown();
    doc.text(`Membership Number: ${user.membershipNumber}`);
    doc.moveDown(0);

    // Insert QR Code
    doc.text("Scan the QR Code to verify membership:", { align: "center" });
    doc.moveDown(0);

    // Convert Base64 QR Code to Buffer and Add to PDF
    const qrImageBuffer = Buffer.from(qrCodeDataURL.split(",")[1], "base64");
    doc.image(qrImageBuffer, 200, doc.y, { width: 200, height: 200 });

    doc.moveDown(0);

    doc.end(); // Finalize PDF
  });
});

// Verification Page Route
app.get("/verify/:membershipNumber", async (req, res) => {
  const membershipNumber = decodeURIComponent(req.params.membershipNumber);

  // Fetch user details from the database
  const sql = `SELECT * FROM members WHERE membershipNumber = ?`;
  db.query(sql, [membershipNumber], (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).send("User not found");
    }

    const user = results[0];

    // Send the verification page with user details
    res.send(`
      <html>
      <head>
        <title>Member Verification</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4; }
          .container { max-width: 500px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
          img { border-radius: 50%; width: 150px; height: 150px; object-fit: cover; margin-bottom: 10px; }
          h2 { color:rgb(13, 146, 183); }
          p { font-size: 16px; color: #555; margin: 5px 0; }
          #address { color:rgb(13, 146, 183); }
          .label { font-weight: bold; color: #333; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Maliya Shitu Media Organization</h2>
          <p id="address">Kano-Nigeria</P>
          ${
            user.imagePath
              ? `<img src="https://masmo-1.onrender.com/verify/uploads/${user.imagePath}" alt="Member Photo">`
              : `<p>No Image Available</p>`
          }
          <p class="label">Full Name:</p> <p>${user.fullName}</p>
          <p class="label">Role:</p> <p>${user.rank}</p>
          <p class="label">Local Government Area (LGA):</p> <p>${user.local_government}</p>
          <p class="label">Ward:</p> <p>${user.ward}</p>
          <p class="label">Polling Unit:</p> <p>${user.pollingUnit}</p>
          <p class="label">Contact:</p> <p>${user.phoneNumber}</p>
          <p class="label">Membership Number:</p> <p>${user.membershipNumber}</p>
        </div>
      </body>
      </html>
    `);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
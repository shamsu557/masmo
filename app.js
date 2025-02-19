const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require("bcryptjs");
const db = require("./mysql"); // Ensure mysql.js is configured correctly
const fs = require("fs");
const multer = require("multer");
const session = require("express-session");
const PDFDocument = require('pdfkit');

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
// 🔥 Download Acknowledgment Letter (No Folder Creation)
app.get("/download/:membershipNumber", (req, res) => {
  const membershipNumber = decodeURIComponent(req.params.membershipNumber);

  // Fetch user details from the database
  const sql = `SELECT * FROM members WHERE membershipNumber = ?`;
  db.query(sql, [membershipNumber], (err, results) => {
      if (err || results.length === 0) {
          return res.status(404).send("User not found");
      }

      const user = results[0];

      // Create a PDF in memory (No file creation)
      const doc = new PDFDocument();
      res.setHeader("Content-Disposition", `attachment; filename="Acknowledgment_${user.membershipNumber}.pdf"`);
      res.setHeader("Content-Type", "application/pdf");

      doc.pipe(res);

      // Header with Logo
      const logoPath = path.join(__dirname, "Masmo.jpg"); // Ensure "Masmo.jpg" is in the same directory
      if (fs.existsSync(logoPath)) {
          doc.image(logoPath, 230, 20, { width: 150 });
      }
      doc.moveDown(3);
      doc.fontSize(20).text("Maliya Shitu Media Organization (Rundunar-Maliya)", { align: "center" });
      doc.moveDown();
      doc.fontSize(16).text("Acknowledgment of Membership", { align: "center" });
      doc.moveDown();

      // User Details
      doc.fontSize(12).text(`Name: ${user.fullName}`);
      doc.text(`Role: ${user.rank}`);
      doc.text(`LGA: ${user.local_government}`);
      doc.text(`Ward: ${user.ward}`);
      doc.text(`Polling Unit: ${user.pollingUnit}`);
      doc.text(`Phone: ${user.phoneNumber}`);
      doc.text(`Membership Number: ${user.membershipNumber}`);
      doc.moveDown();

      // User Image (if uploaded)
      if (user.imagePath) {
          const imgPath = path.join(__dirname, user.imagePath);
          if (fs.existsSync(imgPath)) {
              doc.image(imgPath, 150, doc.y, { width: 100, height: 100 });
          }
      }

      doc.end(); // Finalize PDF
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
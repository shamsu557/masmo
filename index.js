let images = document.querySelectorAll('.hero img');
let index = 0;

function changeImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}

setInterval(changeImage, 5000);

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const navClose = document.getElementById("navClose");
    const navbarNav = document.getElementById("navbarNav");
    const navLinks = document.querySelectorAll("#navbarNav a"); // Select all navbar items

    navToggle.addEventListener("click", function () {
        navbarNav.classList.add("show");
        navToggle.style.display = "none";
    });

    navClose.addEventListener("click", function () {
        navbarNav.classList.remove("show");
        navToggle.style.display = "block";
    });

    // Collapse navbar when a nav item is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navbarNav.classList.remove("show");
            navToggle.style.display = "block";
        });
    });
});
const wardsByLGA = {
    'ALB': {
'ALC': 'Albasu Central',
'BAT': 'Bataiya',
'CHA': 'Chamarana',
'DAH': 'Daho',
'FAN': 'Fanda',
'FAR': 'Faragai',
'GAG': 'Gagarame',
'HUN': 'Hungu',
'SAY': 'Saya-Saya',
'TSA': 'Tsangaya'
},
'BGW': {
'BAG': 'Bagwai',
'DAN': 'Dangada',
'GAD': 'Gadanya',
'GOG': 'Gogori',
'KIY': 'Kiyawa',
'KWA': 'Kwajali',
'RID': 'Rimin Dako',
'ROM': 'Romo',
'SAR': 'Sare-Sare',
'WUB': 'Wuro Bagga'
},
'BBJ': {
'ANA': 'Anadariya',
'BAG': 'Baguda',
'BEB': 'Bebeji',
'DAM': 'Damau',
'DUR': 'Durmawa',
'GAR': 'Gargai',
'GWA': 'Gwarmai',
'KOF': 'Kofa',
'KUK': 'Kuki',
'RAH': 'Rahama',
'RAN': 'Ranka',
'RAN2': 'Rantan',
'TAR': 'Tariwa',
'WAK': 'Wak'
},
'BIC': {
'BAD': 'Badume',
'BIC': 'Bichi',
'DAN': 'Danzabuwa',
'FAG': 'Fagwalawa',
'KAU': 'Kaukau',
'KWA': 'Kwamarawa',
'KYA': 'Kyalli',
'MUN': 'Muntsira',
'SAY': 'Saye',
'WAI': 'Waire',
'YAL': 'Yallami'
},
'BNK': {
'BAR': 'Barkum',
'BON': 'Bono',
'CHI': 'Chirin',
'GAF': 'Gafan',
'GUR': 'Gurjiya',
'GWA': 'Gwamma',
'KUL': 'Kulluwa',
'KUM': 'Kumurya',
'SAN': 'Sanda'
},
'DAL': {
'ADA': 'Adakawa',
'BAK': 'Bakin Ruwa',
'DAL': 'Dala',
'DOG': 'Dogon Nama',
'GOB': 'Gobirawa',
'GWA': 'Gwammaja',
'KAB': 'Kabuwaya',
'KAN': 'Kantudu',
'KFM': 'Kofar Mazugal',
'KFR': 'Kofar Ruwa',
'MAD': 'Madigawa',
'YAL': 'Yalwa'
},
'DBT': {
'AJU': 'Ajumawa',
'DBE': 'Danbatta East',
'DBW': 'Danbatta West',
'FAG': 'Fagwalawa',
'GMA': 'Goron Maje',
'GWA': 'Gwanda',
'GWB': 'Gwarabjawa',
'KOR': 'Kore',
'SAI': 'Saidawa',
'SAN': 'Sansan'
},
'DKD': {
'DAB': 'Dabar Kwari',
'DAN': 'Danbagiwa',
'DAW': 'Dawaki',
'DAJ': 'Dawakiji',
'DOS': 'Dosan',
'FAJ': 'Fajewa',
'GAN': 'Gano',
'GOT': 'Goron Tudu',
'KAD': 'Kademi',
'TAM': 'Tamburawa',
'TSA': 'Tsakuwa',
'UND': 'Unguwar Dabai',
'UNG': 'Unguwar Gano',
'YAN': 'Yankatsari',
'YAR': 'Yargaya'
},
'DAWAKI TOFA': {
'DAN': 'DAN GUGUWA',
'DAW': 'DAWAKI EAST',
'DAW2': 'DAWAKI WEST',
'DAW3': 'DAWANAU',
'GAN': 'GANDUJE',
'GAR': 'GARGARI',
'JAL': 'JALLI',
'KWA': 'KWA',
'MAR': 'MARKE',
'TAT': 'TATTARAWA',
'TUM': 'TUMFAFI'
},
'DOG': {
'DAR': 'DARIYA',
'DGK': 'DOGON KAWO',
'DUG': 'DUGUWA',
'FAL': 'FALGORE',
'MAR': 'MARAKU',
'RAG': 'RAGADA',
'RIR': 'RIRIWAI',
'TAG': 'TAGWAYE',
'UNG': 'UNGUWAR NATSOHUWA',
'ZAI': 'ZAINABI'
},
'FGE': {
'FGA': 'FAGGE A',
'FGB': 'FAGGE B',
'FGC': 'FAGGE C',
'FGD': 'FAGGE D',
'FEE': 'FAGGE E',
'KWA': 'KWACHIRI',
'RIJ': 'RIJIYAR LEMO',
'SAB': 'SABONGARI EAST',
'SAW': 'SABONGARI WEST',
'YAM': 'YAMMATA'
},
'GBS': {
'GAB': 'GABASAWA',
'GAR1': 'GARUN DANGA',
'JOD': 'JODA',
'KAR': 'KARMAKI',
'MEK': 'MEKIYA',
'TAR': 'TARAUNI',
'YAN': 'YANTAR AREWWA',
'YAU': 'YAUTAR KUDU',
'YUM': 'YUMBU',
'ZAK': 'ZAKIRAI',
'ZUG': 'ZUGACHI'
},
'GRK': {
'DAL': 'DAL',
'GAR': 'GARIN ALI',
'GRK': 'GARKO',
'GUR': 'GURJIYA',
'KAF': 'KAFIN MALAMAI',
'KAT': 'KATUMARI',
'KWA': 'KWAS',
'RAB': 'RABA',
'SAR': 'SARINA',
'ZAK': 'ZAKARAWA'
},
'GML': {
'CHI': 'CHIROMAWA',
'DOR': 'DORAWAR-SALLAU',
'FAN': 'FANKURUN',
'GRB': 'GARUN BABBA',
'GRM': 'GARUN MALAM',
'JOB': 'JOBAWA',
'KAD': 'KADAWA',
'MAK': 'MAKWARO',
'YAD': 'YAD AKWARI',
'YAL': 'YALWAN YADAKWARI'
},
'GAY': {
'BAL': 'BALAN',
'GAM': 'GAMARYA',
'GAJ': 'GAMOJI',
'GYA': 'GAYA AREWA',
'GYK': 'GAYA KUDU',
'KAD': 'KADEMI',
'KAZ': 'KAZURAWA',
'MAI': 'MAIMAKAWA',
'SHA': 'SHAGOGO',
'WUD': 'WUDILAWA'
},
'GZW': {
'BAB': 'BABAWA',
'GAW': 'GAWO',
'GEZ': 'GEZAWA',
'JOG': 'JOGANA',
'KET': 'KETAWA',
'MES': 'MESAR-TUDU',
'SAR': 'SARARIN-GEZAWA',
'TSA': 'TSAMIYA-BABBA',
'TUM': 'TUMBAU',
'WAN': 'WANGARA',
'ZAN': 'ZANGO'
},
'GWL': {
'DAN': 'DANDAGO',
'DIS': 'DISO',
'DOR': 'DORAYI',
'GAL': 'GALADANCHI',
'GOR': 'GORON DUTSE',
'GWA': 'GWALE',
'GYA': 'GYARANYA',
'KAB': 'KABUGA',
'MAN': 'MANDAWARI',
'SAN': 'SANI MAI MAGGE'
},
'GWR': {
'GET': 'GETSO',
'GWA': 'GWARZO',
'JAM': 'JAMA’ A',
'KAR': 'KARA',
'KUT': 'KUTAMA',
'LAK': 'LAKWAYA',
'MAD': 'MADADI',
'MAI': 'MAINIKA',
'SAB': 'SABON BIRNI',
'UNG': 'UNGUWAR TUDU'
},
'KAB': {
'DUG': 'DUGABAU',
'DUR': 'DURUN',
'GAM': 'GAMMO',
'GAR': 'GARO',
'GOD': 'GODIYA',
'GUD': 'GUDE',
'HAU': 'HAUWADE',
'KAB': 'KABO',
'KAN': 'KANWA',
'MAS': 'MASANAWA'
},
'KMC': {
'CHE': 'CHEDI',
'DAN': 'DAN’AGUNDI',
'GAN': 'GANDUN ALBASA',
'JAK': 'JAKARA',
'KAN': 'KANKAROFI',
'SHC': 'SHAHUCHI',
'SHD': 'SHARADA',
'SHE': 'SHESHE',
'TUN': 'TUDUN NUFAWA',
'TUW': 'TUDUN WAZIRCHI',
'YAK': 'YAKASAI',
'ZAI': 'ZAITAWA',
'ZAN': 'ZANGO'
},
'KAR': {
'DAU': 'DAURA',
'KAF': 'KAFIN DAFGA',
'KAR': 'KARAYE',
'KUR': 'KURUGU',
'KWA': 'KWANYAWA',
'TUK': 'TUDUN KAYA',
'TUR': 'TURAWA',
'UNG': 'UNGUWAR HAJJI',
'YAM': 'YAMMEDI',
'YOL': 'YOLA'
},
'KBY': {
'DUR': 'DURBA',
'FAM': 'FAMMAR',
'FAS': 'FASSI',
'KAD': 'KADIGAWA',
'KAH': 'KAHU',
'KIB1': 'KIBIYA I',
'KIB2': 'KIBIYA II',
'NAR': 'NARIYA',
'TAR': 'TARAI',
'UGA': 'UNGUWAR GAI'
},
'KIR': {
'BAA': 'BA’AWA',
'BAD': 'BADAFI',
'BAR': 'BARGONI',
'BAU': 'BAUDA',
'DAN': 'DANGORA',
'DAN2': 'DANSOHIYA',
'DAS': 'DASHI',
'GAL': 'GALADIMAWA',
'KIR': 'KIRU',
'KOG': 'KOGO',
'MAR': 'MARAKU',
'TSA': 'TSAUDAWA',
'YAK': 'YAKO',
'YAL': 'YALWA',
'ZUW': 'ZUWO'
},
'KBS': {
'CHA': 'CHALLAWA',
'CHI': 'CHIRANCHI',
'DAN': 'DANBARE',
'DAM': 'DANMALIKI',
'GUR': 'GURINGAWA',
'KUM': 'KUMBOTSO',
'KUR': 'KUREKEN SANI',
'MAR': 'MARIRI',
'NAI': 'NA’IBAWA',
'PAN': 'PANSHEKARA',
'UNG': 'UNGUWAR RIMI'
},
'KCH': {
'BUM': 'BUMAI',
'GAR': 'GARIN SHEME',
'GWA': 'GWARMAI',
'KAS': 'KASUWAR KUKA',
'KUN': 'KUNCHI',
'MAT': 'MATAN FADA',
'RID': 'RIDAWA',
'SHA': 'SHAMAKAWA',
'SHU': 'SHUWAKI',
'YAN': 'YANDADI'
},
'KUR': {
'DAL': 'DALILI',
'DAN': 'DAN HASSAN',
'DUK': 'DUKAWA',
'GUN': 'GUNDUTSE',
'KAR': 'KARFI',
'KOS': 'KOSAWA',
'KRA': 'KURA',
'KRS': 'KURUNSUMAU',
'RIG': 'RIGAR DUKA',
'TAN': 'TANAWA'
},
'MDB': {
'BUR': 'BURJI',
'CIN': 'CINKOSO',
'GAL': 'GALINJA',
'GOR': 'GORA',
'KAF': 'KAFIN AGUR',
'KAN': 'KANWA',
'KAU': 'KAURA MATA',
'KUB': 'KUBARACI',
'KWA': 'KWANKWASO',
'MAD': 'MADOBI',
'RIK': 'RIKADAWA'
},
'MKD': {
'BAB': 'BABBAR RIGA',
'DUR': 'DURMA',
'JIB': 'JIBGA',
'KAD': 'KADANDANI',
'KOG': 'KOGUNA',
'KOT': 'KOREN TATSO',
'MAI': 'MAITSIDAU',
'MAK': 'MAKODA',
'SAT': 'SATAME',
'TAN': 'TANGAJI',
'WAI': 'WAILARE'
},
'MJB': {
'AZO': 'AZORE',
'GAN': 'GANDURWAWA',
'KAN': 'KANTAMA',
'KUN': 'KUNYA',
'KUR': 'KURU',
'KWA': 'KWARKIYA',
'MIN': 'MINJIBIR',
'SAR': 'SARBI',
'TSY':'TSAKIYA',
'TSK': 'TSAKUWA',
'WAS': 'WASAI'
},
'NSR': {
'DAK': 'DAKATA',
'GAM': 'GAMA',
'GAW': 'GAWUNA',
'GIG': 'GIGINYU',
'GWA': 'GWAGWARWA',
'HTN': 'HOTORO NORTH',
'HTS': 'HOTORO SOUTH',
'KGO': 'KAURA GOJE',
'KAW': 'KAWAJI',
'TDM': 'TUDUN MURTALA',
'TDW': 'TUDUN WADA'
},
'RAN': {
'DAW': 'DAWAKI',
'LAU': 'LAUSU',
'MAD': 'MADACHI',
'RAN': 'RANO',
'RSG': 'RURUM SABON-GARI',
'RTG': 'RURUM TSOHON-GARI',
'SAJ': 'SAJI',
'YAL': 'YALWA',
'ZIN': 'ZINYAU',
'ZUR': 'ZURGU'
},
'RMD': {
'BUT': 'BUTU-BUTU',
'DAW': 'DAWAKI GULU',
'DOK': 'DOKA DAWA',
'DUG': 'DUGURAWA',
'GUL': 'GULU',
'JIL': 'JILI',
'KAR': 'KAROFIN YASHI',
'RIM': 'RIMIN GADO',
'SAK': 'SAKARATSA',
'TAM': 'TAMAWA',
'YAL': 'YALWAN DANZIYAL',
'ZAN': 'ZANGO DAN ABDU'
},
'ROG': {
'BEL': 'BELI',
'FAL': 'FALGORE',
'FUL': 'FULATAN',
'GWA': 'GWANGWAN',
'JAJ': 'JAJAYE',
'RGR': 'ROGO RUMA',
'RGS': 'ROGO SABON GARI',
'RUW': 'RUWAN BAGO',
'ZAR': 'ZAREWA',
'ZOZ': 'ZOZA'
},
'SHN': {
'ALA': 'ALAJAWA',
'DUT': 'DUTSEN-BAKOSHI',
'FAR': 'FARURUWA',
'GOR': 'GORON DUTSE',
'KAD': 'KADAMU',
'KOK': 'KOKIYA',
'LEN': 'LENI',
'SHA': 'SHAKOGI',
'SHA2': 'SHANONO',
'TSU': 'TSAURE'
},
'SML': {
'GAL': 'GALA',
'GAN': 'GANI',
'GAR': 'GARFA',
'GED': 'GEDIYA',
'KAN': 'KANAWA',
'MAG': 'MAGAMI',
'MAS': 'MASU',
'RIM': 'RIMI',
'RUM': 'RUMO',
'SIT': 'SITTI',
'SUM': 'SUMAILA'
},
'TKI': {
'BAG': 'BAGWARO',
'DUR': 'DURBUNDE',
'FAJ': 'FAJEWA',
'FAL': 'FALALI',
'FAR': 'FARURUWA',
'KAC': 'KACHAKO',
'KAR': 'KARFI',
'KUK': 'KUKA',
'TAK': 'TAKAI',
'ZUG': 'ZUGA'
},
'TRN': {
'BAB': 'BABBAN GIJI',
'DAR': 'DARMANAWA',
'DAU': 'DAURAWA',
'GYA1': 'GYADI-GYADI AREWA',
'GYA2': 'GYADI-GYADI KUDU',
'HOT1': 'HOTORO (NNPC)',
'KAU': 'KAUYEN ALU',
'TAR': 'TARAUNI',
'UNK1': 'UNGUWA UKU',
'UNK2': 'UNGUWAR GANO'
},
'TFA': {
'DIN': 'DINDERE',
'DOK': 'DOKA',
'GAJ': 'GAJIDA',
'GIN': 'GINSAWA',
'JAN': 'JANGUZA',
'JAU': 'JAUBEN KUDU',
'KWA': 'KWAMI',
'LAM': 'LAMBU',
'LAN': 'LANGEL',
'TOF': 'TOFA',
'UNR': 'UNGUWAR RIMI',
'WAN': 'WANGARA',
'YAL': 'YALWA KARAMA',
'YAN': 'YANOKO',
'YAR': 'YARIMAWA',
'TSA': 'TSANYAWA'
},
'TSW': {
'DAD': 'DADDARAWA',
'DUN': 'DUNBULUN',
'GOZ': 'GOZAKI',
'GUR': 'GURUN',
'KAB': 'KABAGIWA',
'TAT': 'TATSAN',
'TSA': 'TSANYAWA',
'YAN': 'YANGANAU',
'YKM': 'YANKAMAYE',
'ZAR': 'ZAROGI'
},
'TDW': {
'BAB': 'BABURI',
'BUR': 'BURUMBURUM',
'DAL': 'DALAWA',
'JAN': 'JANDUTSE',
'JIT': 'JITA',
'KAR': 'KAREFA',
'NAT': 'NATA’ALA',
'SAB': 'SABON GARI',
'SHU': 'SHUWAKI',
'TSO': 'TSOHOGARI'
},
'UNG': {
'BAC': 'BACHIRAWA',
'GAY': 'GAYAWA',
'KAD': 'KADAWA',
'KAR': 'KARO',
'PAN': 'PANISAU',
'RAN': 'RANGAZA',
'RIJ': 'RIJIYAR ZAKI',
'TDF': 'TUDUN FULANI',
'UNG': 'UNGOGO',
'YAD': 'YADAKUNYA',
'ZAN': 'ZANGO'
},
'WRW': {
'AMA': 'AMARAWA',
'DAN': 'DANLASAN',
'GAR': 'GARIN DAU',
'GOG': 'GOGEL',
'IMA': 'IMAWA',
'JGA': 'J/GALADIMA',
'JEM': 'JEMAGU',
'JIG': 'JIGAWA',
'KAT': 'KATARKAWA',
'MAD': 'MADARI MATA',
'TAM': 'TAMBURAWAR GABAS',
'TAN': 'TANGAR',
'WAR': 'WARAWA',
'YDA': '‘YAN DALLA',
'YGI': '‘YANGIZO'
},
'WDL': {
'ACH': 'ACHIKA',
'DAG': 'DAGUMAWA',
'DAN': 'DANKAZA',
'DAR': 'DARKI',
'IND': 'INDABO',
'KAU': 'KAUSANI',
'LAJ': 'LAJAWA',
'SAB': 'SABON GARI',
'UTA': 'UTAI',
'WUD': 'WUDIL'
}
};

const ranks = {
'state': {
'01': 'State Chairman',
'02': 'State Vice Chairman',
'03': 'State Secretary',
'04': 'State Assistant Secretary',
'05': 'State DG Media',
'06': 'State Organizing Secretary',
'07': 'State Assistant Organizing Secretary',
'08': 'State Financial Secretary',
'09': 'State Youth Leader',
'10': 'State Deputy Youth Leader',
'11': 'State Woman Leader',
'12': 'State Deputy Woman Leader',
'13': 'State PRO',
'14': 'State Welfare Director',
'15': 'State Deputy Welfare Director',
'16': 'State Treasurer',
'17': 'State Auditor',
'18': 'State Kano-Central Chairman',
'19': 'State Kano-Central Woman Leader',
'20': 'State Kano-North Chairman',
'21': 'State Kano-North Woman Leader',
'22': 'State Kano-South Chairman',
'23': 'State Kano-South Woman Leader',
'24': 'State TikTok Leader',
'25': 'State Deputy TikTok Leader',
'26': 'State Deputy Instagram Leader'
},
'lga': {
'01': 'LGA Chairman',
'02': 'LGA Vice Chairman',
'03': 'LGA Secretary',
'04': 'LGA Assistant Secretary',
'05': 'LGA DG Media',
'06': 'LGA Organizing Secretary',
'07': 'LGA Assistant Organizing Secretary',
'08': 'LGA Financial Secretary',
'09': 'LGA Youth Leader',
'10': 'LGA Deputy Youth Leader',
'11': 'LGA Woman Leader',
'12': 'LGA Deputy Woman Leader',
'13': 'LGA PRO',
'14': 'LGA Welfare Director',
'15': 'LGA Deputy Welfare Director',
'16': 'LGA Treasurer',
'17': 'LGA Auditor',
'18': 'LGA TikTok Leader',
'19': 'LGA Deputy TikTok Leader',
'20': 'LGA Deputy Instagram Leader'
},
'ward': {
'01': 'Ward Chairman',
'02': 'Ward Vice Chairman',
'03': 'Ward Secretary',
'04': 'Ward Assistant Secretary',
'05': 'Ward DG Media',
'06': 'Ward Organizing Secretary',
'07': 'Ward Assistant Organizing Secretary',
'08': 'Ward Financial Secretary',
'09': 'Ward Youth Leader',
'10': 'Ward Deputy Youth Leader',
'11': 'Ward Woman Leader',
'12': 'Ward Deputy Woman Leader',
'13': 'Ward PRO',
'14': 'Ward Welfare Director',
'15': 'Ward Deputy Welfare Director',
'16': 'Ward Treasurer',
'17': 'Ward Auditor',
'18': 'Ward TikTok Leader',
'19': 'Ward Deputy TikTok Leader',
'20': 'Ward Deputy Instagram Leader'
}
};


$(document).ready(function() {
    $('#level').change(function() {
        let level = $(this).val();
        $('#lgaGroup, #wardRow').hide();
        $('#rank').empty().append('<option value="">Choose...</option>');

        if (level === 'lga') {
            $('#lgaGroup').show();
        } else if (level === 'ward') {
            $('#lgaGroup, #wardRow').show();
        }

        if (ranks[level]) {
            for (const [code, name] of Object.entries(ranks[level])) {
                $('#rank').append(`<option value="${code}">${name}</option>`);
            }
        }

        generateMembershipNumber();
    });

    $('#lga').change(function() {
        let selectedLGA = $(this).val();
        $('#ward').empty().append('<option value="">Choose...</option>');

        if (wardsByLGA[selectedLGA]) {
            for (const [abbr, name] of Object.entries(wardsByLGA[selectedLGA])) {
                $('#ward').append(`<option value="${abbr}">${name} (${abbr})</option>`);
            }
        }
        generateMembershipNumber();
    });

    $('#ward, #rank').change(function() {
        generateMembershipNumber();
    });

    function generateMembershipNumber() {
        let level = $('#level').val();
        let lga = $('#lga').val();
        let ward = $('#ward').val();
        let rank = $('#rank').val();
        let membershipNumber = 'MASMO/25/KN';

        if (level === 'lga' && lga) {
            membershipNumber += `/${lga}`;
        }
        if (level === 'ward' && lga && ward) {
            membershipNumber += `/${lga}/${ward}`;
        }
        if (rank) {
            membershipNumber += `/${rank}`;
        }

        $('#membershipNumber').val(membershipNumber);
    }
});

// Back to top button functionality
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

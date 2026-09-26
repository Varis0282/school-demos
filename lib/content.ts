// Shared bilingual content consumed by all 5 school themes.
// Same content, different design — that's the pitch.

export type Lang = "en" | "hi";

export const academics = [
  { icon: "Blocks", en: { title: "Pre-Primary (Nursery – KG2)", desc: "Play-way learning with phonics, rhymes and motor-skill activities — in bright, air-conditioned classrooms with trained female staff." }, hi: { title: "प्री-प्राइमरी (नर्सरी – KG2)", desc: "फोनिक्स, राइम्स और मोटर-स्किल गतिविधियों के साथ खेल-खेल में पढ़ाई — प्रशिक्षित महिला स्टाफ वाली उजली, वातानुकूलित कक्षाओं में।" } },
  { icon: "BookOpen", en: { title: "Primary (Class 1 – 5)", desc: "CBSE-pattern curriculum with activity-based learning, spoken English focus and no-bag days every month." }, hi: { title: "प्राइमरी (कक्षा 1 – 5)", desc: "एक्टिविटी-आधारित पढ़ाई, स्पोकन इंग्लिश पर ज़ोर और हर महीने नो-बैग डे के साथ CBSE पैटर्न पाठ्यक्रम।" } },
  { icon: "GraduationCap", en: { title: "Middle School (Class 6 – 8)", desc: "Concept-first Maths & Science, Olympiad preparation and career-awareness sessions — a strong base for Class 9 onwards." }, hi: { title: "मिडिल स्कूल (कक्षा 6 – 8)", desc: "कॉन्सेप्ट-आधारित गणित व विज्ञान, ओलंपियाड तैयारी और करियर-जागरूकता सत्र — कक्षा 9 से आगे की मज़बूत नींव।" } },
  { icon: "MonitorPlay", en: { title: "Smart Classes", desc: "Every classroom has a smart board with animated lessons — children see concepts, not just read them." }, hi: { title: "स्मार्ट क्लासेस", desc: "हर कक्षा में एनिमेटेड पाठों वाला स्मार्ट बोर्ड — बच्चे कॉन्सेप्ट देखकर समझते हैं, सिर्फ रटते नहीं।" } },
  { icon: "FlaskConical", en: { title: "Science & Computer Labs", desc: "Hands-on experiments from Class 3 and a 40-computer lab with coding basics from Class 5." }, hi: { title: "साइंस व कंप्यूटर लैब", desc: "कक्षा 3 से प्रयोगशाला में हाथों-हाथ प्रयोग और कक्षा 5 से कोडिंग बेसिक्स वाली 40-कंप्यूटर लैब।" } },
  { icon: "Library", en: { title: "Library & Reading Program", desc: "8,000+ books, a daily reading period and an annual reading challenge with prizes." }, hi: { title: "लाइब्रेरी व रीडिंग प्रोग्राम", desc: "8,000+ किताबें, रोज़ाना रीडिंग पीरियड और पुरस्कारों वाला वार्षिक रीडिंग चैलेंज।" } },
  { icon: "Trophy", en: { title: "Sports & Fitness", desc: "Big playground, cricket nets, basketball court, skating rink and indoor games — with district-level coaching." }, hi: { title: "खेल व फिटनेस", desc: "बड़ा मैदान, क्रिकेट नेट्स, बास्केटबॉल कोर्ट, स्केटिंग रिंक और इनडोर गेम्स — ज़िला-स्तरीय कोचिंग के साथ।" } },
  { icon: "Music", en: { title: "Music, Dance, Art & Karate", desc: "Weekly periods for music, classical & western dance, art and karate — every child performs on stage every year." }, hi: { title: "संगीत, नृत्य, कला व कराटे", desc: "संगीत, शास्त्रीय व वेस्टर्न डांस, कला और कराटे के साप्ताहिक पीरियड — हर बच्चा हर साल मंच पर प्रस्तुति देता है।" } },
];

export const staff = [
  { id: "principal", photo: 0, en: { name: "Mrs. Sunita Agrawal", spec: "Principal", qual: "M.A., M.Ed. — 25 years in education", exp: "Leading Sunrise since 2008", bio: "A firm believer that every child learns differently. Personally meets every new parent and reviews every class's progress monthly." }, hi: { name: "श्रीमती सुनीता अग्रवाल", spec: "प्राचार्या", qual: "M.A., M.Ed. — शिक्षा में 25 वर्ष", exp: "2008 से सनराइज़ का नेतृत्व", bio: "मानती हैं कि हर बच्चा अलग तरह से सीखता है। हर नए अभिभावक से स्वयं मिलती हैं और हर कक्षा की मासिक प्रगति देखती हैं।" } },
  { id: "preprimary", photo: 1, en: { name: "Mrs. Kavita Joshi", spec: "Pre-Primary Head", qual: "B.Ed., ECCE Certified", exp: "14 years with young learners", bio: "Runs the play-way program. Parents say children cry on holidays because they miss school." }, hi: { name: "श्रीमती कविता जोशी", spec: "प्री-प्राइमरी प्रमुख", qual: "B.Ed., ECCE प्रमाणित", exp: "छोटे बच्चों के साथ 14 वर्ष", bio: "प्ले-वे प्रोग्राम चलाती हैं। अभिभावक कहते हैं कि छुट्टी के दिन बच्चे स्कूल याद करके रोते हैं।" } },
  { id: "academic", photo: 2, en: { name: "Mr. Alok Nair", spec: "Academic Coordinator", qual: "M.Sc., B.Ed.", exp: "16 years teaching Maths & Science", bio: "Designs the Olympiad program and teacher training. Believes in concepts over cramming." }, hi: { name: "श्री आलोक नायर", spec: "एकेडमिक कोऑर्डिनेटर", qual: "M.Sc., B.Ed.", exp: "गणित-विज्ञान पढ़ाने का 16 वर्ष का अनुभव", bio: "ओलंपियाड प्रोग्राम व शिक्षक प्रशिक्षण की रूपरेखा बनाते हैं। रटने की जगह समझने में विश्वास।" } },
  { id: "sports", photo: 3, en: { name: "Mr. Vijay Thakur", spec: "Sports Head", qual: "B.P.Ed., NIS Certified", exp: "District-level cricket coach", bio: "Under him our U-14 cricket team became district champions and 30+ students hold karate belts." }, hi: { name: "श्री विजय ठाकुर", spec: "स्पोर्ट्स प्रमुख", qual: "B.P.Ed., NIS प्रमाणित", exp: "ज़िला-स्तरीय क्रिकेट कोच", bio: "इनके नेतृत्व में U-14 क्रिकेट टीम ज़िला चैंपियन बनी और 30+ छात्रों के पास कराटे बेल्ट हैं।" } },
];

export const achievements = [
  { photo: 0, name: "Aarav Mehta", en: { field: "Intl. Maths Olympiad 2025", result: "Gold Medal", detail: "Class 7 — Zonal Rank 2" }, hi: { field: "अंतर्राष्ट्रीय गणित ओलंपियाड 2025", result: "गोल्ड मेडल", detail: "कक्षा 7 — ज़ोनल रैंक 2" } },
  { photo: 1, name: "Ishita Patel", en: { field: "National Science Olympiad", result: "Zonal Rank 3", detail: "Class 6" }, hi: { field: "राष्ट्रीय विज्ञान ओलंपियाड", result: "ज़ोनल रैंक 3", detail: "कक्षा 6" } },
  { photo: 2, name: "Kabir Sharma", en: { field: "State Abacus Championship", result: "1st Place", detail: "Class 3" }, hi: { field: "राज्य अबेकस चैंपियनशिप", result: "प्रथम स्थान", detail: "कक्षा 3" } },
  { photo: 3, name: "U-14 Cricket Team", en: { field: "District Tournament 2025", result: "Champions", detail: "Unbeaten all season" }, hi: { field: "ज़िला टूर्नामेंट 2025", result: "चैंपियन", detail: "पूरे सीज़न अपराजित" } },
  { photo: 4, name: "Zoya Khan", en: { field: "State Karate (U-12)", result: "Gold Medal", detail: "Class 5" }, hi: { field: "राज्य कराटे (U-12)", result: "गोल्ड मेडल", detail: "कक्षा 5" } },
  { photo: 5, name: "School Choir", en: { field: "District Youth Festival", result: "Winners", detail: "3rd year in a row" }, hi: { field: "ज़िला युवा उत्सव", result: "विजेता", detail: "लगातार तीसरा वर्ष" } },
];

export const admissionSteps = [
  { en: { title: "Book a Campus Visit", desc: "Fill the form on this website — visit slots run 9 AM to 1 PM, Monday to Saturday." }, hi: { title: "कैंपस विज़िट बुक करें", desc: "इसी वेबसाइट पर फॉर्म भरें — विज़िट स्लॉट सोम–शनि, सुबह 9 से दोपहर 1 बजे तक।" } },
  { en: { title: "Tour & Interaction", desc: "See classrooms, labs and the playground; meet the Principal with your child. No test for Nursery–KG." }, hi: { title: "टूर व मुलाकात", desc: "कक्षाएँ, लैब और मैदान देखें; बच्चे के साथ प्राचार्या से मिलें। नर्सरी–KG के लिए कोई टेस्ट नहीं।" } },
  { en: { title: "Simple Interaction / Written Round", desc: "Class 1–8: a friendly, age-appropriate interaction so we place your child correctly." }, hi: { title: "सरल इंटरैक्शन / लिखित राउंड", desc: "कक्षा 1–8: बच्चे की सही कक्षा-तैयारी समझने के लिए उम्र के अनुसार सरल इंटरैक्शन।" } },
  { en: { title: "Confirm the Seat", desc: "Submit documents and fees (installments available). Uniform & book set from campus store." }, hi: { title: "सीट पक्की करें", desc: "दस्तावेज़ और फीस जमा करें (किस्तें उपलब्ध)। यूनिफॉर्म व बुक सेट कैंपस स्टोर से।" } },
];

export const ageCriteria = [
  { cls: "Nursery", en: "3+ years (as on 31 March)", hi: "3+ वर्ष (31 मार्च तक)" },
  { cls: "KG-1", en: "4+ years", hi: "4+ वर्ष" },
  { cls: "KG-2", en: "5+ years", hi: "5+ वर्ष" },
  { cls: "Class 1", en: "6+ years", hi: "6+ वर्ष" },
  { cls: "Class 2–8", en: "Previous class passed + age accordingly", hi: "पिछली कक्षा उत्तीर्ण + उसी अनुसार आयु" },
];

export const documents = [
  { en: "Birth certificate (photocopy)", hi: "जन्म प्रमाण पत्र (फोटोकॉपी)" },
  { en: "2 passport-size photos of child", hi: "बच्चे की 2 पासपोर्ट साइज़ फोटो" },
  { en: "Aadhaar card of child & parents", hi: "बच्चे व अभिभावकों का आधार कार्ड" },
  { en: "Previous class report card (Class 1 onwards)", hi: "पिछली कक्षा की रिपोर्ट कार्ड (कक्षा 1 से)" },
  { en: "Transfer certificate (Class 2 onwards)", hi: "स्थानांतरण प्रमाण पत्र (कक्षा 2 से)" },
];

export const classOptions = [
  { value: "Nursery", en: "Nursery", hi: "नर्सरी" },
  { value: "KG-1", en: "KG-1", hi: "KG-1" },
  { value: "KG-2", en: "KG-2", hi: "KG-2" },
  { value: "Class 1", en: "Class 1", hi: "कक्षा 1" },
  { value: "Class 2", en: "Class 2", hi: "कक्षा 2" },
  { value: "Class 3", en: "Class 3", hi: "कक्षा 3" },
  { value: "Class 4", en: "Class 4", hi: "कक्षा 4" },
  { value: "Class 5", en: "Class 5", hi: "कक्षा 5" },
  { value: "Class 6", en: "Class 6", hi: "कक्षा 6" },
  { value: "Class 7", en: "Class 7", hi: "कक्षा 7" },
  { value: "Class 8", en: "Class 8", hi: "कक्षा 8" },
];

export const reviews = [
  { name: "Neha Bansal (Parent, KG-2)", area: "Nipania, Indore", stars: 5, en: "My daughter started speaking English sentences within 6 months. The pre-primary teachers are like second mothers.", hi: "मेरी बेटी 6 महीने में अंग्रेज़ी वाक्य बोलने लगी। प्री-प्राइमरी की शिक्षिकाएँ दूसरी माँ जैसी हैं।" },
  { name: "Rajesh Solanki (Parent, Class 4)", area: "Vijay Nagar, Indore", stars: 5, en: "GPS on the bus, CCTV in class, and the app tells me when my son enters school. As a working parent this peace of mind is priceless.", hi: "बस में GPS, कक्षा में CCTV और बेटा स्कूल पहुँचते ही ऐप पर सूचना। कामकाजी अभिभावक के लिए यह निश्चिंतता अनमोल है।" },
  { name: "Pooja Trivedi (Parent, Class 7)", area: "Scheme 114, Indore", stars: 5, en: "Shifted from a 'big brand' school. Here teachers actually know my child by name and call me personally about her progress.", hi: "एक 'बड़े ब्रांड' स्कूल से शिफ्ट किया। यहाँ शिक्षक सच में बच्ची को नाम से जानते हैं और प्रगति पर खुद फोन करते हैं।" },
  { name: "Imran Qureshi (Parent, Class 2)", area: "Khajrana, Indore", stars: 4, en: "Fees are reasonable and completely transparent — the full structure was given in writing on day one. No surprise charges ever.", hi: "फीस वाजिब और पूरी तरह पारदर्शी — पहले ही दिन पूरा स्ट्रक्चर लिखित में मिला। कभी कोई छिपा शुल्क नहीं।" },
  { name: "Seema Yadav (Parent, Nursery)", area: "Bicholi Mardana, Indore", stars: 5, en: "I visited 6 schools before choosing. Sunrise was the only one where the Principal herself met us and answered every question.", hi: "चुनने से पहले 6 स्कूल देखे। सनराइज़ अकेला था जहाँ प्राचार्या ने स्वयं मिलकर हर सवाल का जवाब दिया।" },
  { name: "Amit Deshpande (Parent, Class 6)", area: "Nipania, Indore", stars: 5, en: "My son won an Olympiad medal this year. The school prepares them for it inside school hours — no extra coaching needed yet.", hi: "बेटे ने इस साल ओलंपियाड मेडल जीता। स्कूल समय में ही तैयारी हो जाती है — अभी कोई अलग कोचिंग नहीं लगानी पड़ी।" },
];

export const faqs = [
  { en: { q: "What is the teacher-student ratio?", a: "1 teacher for every 20 students, plus a helper aunty in every pre-primary class. Maximum 30 children per section." }, hi: { q: "शिक्षक-छात्र अनुपात क्या है?", a: "हर 20 छात्रों पर 1 शिक्षक, और हर प्री-प्राइमरी कक्षा में एक सहायिका। प्रति सेक्शन अधिकतम 30 बच्चे।" } },
  { en: { q: "Is transport available? Is it safe?", a: "Yes — GPS-tracked buses with a lady attendant on every route cover most of Indore. Parents get pickup/drop alerts on the app." }, hi: { q: "क्या ट्रांसपोर्ट है? क्या वह सुरक्षित है?", a: "हाँ — हर रूट पर महिला परिचारिका के साथ GPS-ट्रैक्ड बसें इंदौर के अधिकांश क्षेत्र कवर करती हैं। पिक-अप/ड्रॉप की सूचना ऐप पर मिलती है।" } },
  { en: { q: "Can fees be paid in installments?", a: "Yes, annual fees can be paid in 4 quarterly installments. The complete fee structure is shared in writing during your campus visit." }, hi: { q: "क्या फीस किस्तों में दे सकते हैं?", a: "हाँ, वार्षिक फीस 4 त्रैमासिक किस्तों में दी जा सकती है। पूरा फी स्ट्रक्चर कैंपस विज़िट पर लिखित में दिया जाता है।" } },
  { en: { q: "Is there an admission test for small children?", a: "No test for Nursery to KG-2 — only a friendly interaction. Class 1–8 have a simple age-appropriate interaction/written round." }, hi: { q: "क्या छोटे बच्चों के लिए एडमिशन टेस्ट है?", a: "नर्सरी से KG-2 तक कोई टेस्ट नहीं — सिर्फ एक दोस्ताना मुलाकात। कक्षा 1–8 के लिए उम्र के अनुसार सरल इंटरैक्शन/लिखित राउंड।" } },
  { en: { q: "How do parents track their child's progress?", a: "Monthly progress updates on the parent app, two PTMs per term, and the class teacher is reachable on school WhatsApp during office hours." }, hi: { q: "अभिभावक बच्चे की प्रगति कैसे देखें?", a: "पैरेंट ऐप पर मासिक प्रगति, हर टर्म में दो PTM, और कक्षा शिक्षक कार्यालय समय में स्कूल WhatsApp पर उपलब्ध।" } },
  { en: { q: "What about safety inside the campus?", a: "CCTV in every classroom and corridor, verified staff only, gated entry with visitor passes, and a full-time nurse on campus." }, hi: { q: "कैंपस के अंदर सुरक्षा कैसी है?", a: "हर कक्षा व गलियारे में CCTV, केवल सत्यापित स्टाफ, विज़िटर पास के साथ गेटेड एंट्री और कैंपस में पूर्णकालिक नर्स।" } },
];

export const stats = [
  { value: "1,500+", en: "Happy Students", hi: "खुशहाल छात्र" },
  { value: "20", en: "Years of Excellence", hi: "वर्षों की उत्कृष्टता" },
  { value: "1:20", en: "Teacher-Student Ratio", hi: "शिक्षक-छात्र अनुपात" },
  { value: "4.7★", en: "Parent Rating", hi: "अभिभावक रेटिंग" },
];

export const whyUs = [
  { icon: "Users", en: { title: "Every Child is Known by Name", desc: "1:20 ratio and max 30 per section — your child is a name here, not a roll number." }, hi: { title: "हर बच्चा नाम से जाना जाता है", desc: "1:20 अनुपात और प्रति सेक्शन अधिकतम 30 — यहाँ आपका बच्चा नाम है, रोल नंबर नहीं।" } },
  { icon: "ShieldCheck", en: { title: "Safety Parents Can See", desc: "CCTV classrooms, GPS buses with lady attendants, gated campus, app alerts on entry and exit." }, hi: { title: "ऐसी सुरक्षा जो दिखती है", desc: "CCTV कक्षाएँ, महिला परिचारिका सहित GPS बसें, गेटेड कैंपस, आने-जाने पर ऐप अलर्ट।" } },
  { icon: "Lightbulb", en: { title: "Concepts, Not Cramming", desc: "Smart classes, labs from Class 3 and Olympiad training inside school hours." }, hi: { title: "रटना नहीं, समझना", desc: "स्मार्ट क्लासेस, कक्षा 3 से लैब और स्कूल समय में ही ओलंपियाड प्रशिक्षण।" } },
  { icon: "IndianRupee", en: { title: "Honest, Written Fees", desc: "Complete fee structure in writing on day one. Quarterly installments. No hidden charges, ever." }, hi: { title: "ईमानदार, लिखित फीस", desc: "पहले दिन पूरा फी स्ट्रक्चर लिखित में। त्रैमासिक किस्तें। कभी कोई छिपा शुल्क नहीं।" } },
];

export const ui = {
  en: {
    nav: { home: "Home", about: "About Us", academics: "Academics", admissions: "Admissions", gallery: "Gallery", contact: "Contact & Visit", book: "Book Campus Visit" },
    hero: {
      badge: "Nurturing Indore's children since 2005",
      title: "Where Little Minds",
      titleAccent: "Grow Big Dreams",
      sub: "CBSE-pattern learning, 1:20 teacher ratio, CCTV-safe campus and GPS transport — Nursery to Class 8 in Nipania, Indore. Book a campus visit on WhatsApp in 30 seconds.",
      cta1: "Book Campus Visit",
      cta2: "Call Now",
      open: "Admissions Open · Nursery – Class 8",
    },
    sections: {
      academicsTitle: "Learning at Sunrise",
      academicsSub: "From play-way Nursery to Olympiad-ready Class 8 — one campus, one caring team.",
      staffTitle: "The People Behind Sunrise",
      staffSub: "Educators who treat your child like their own.",
      whyTitle: "Why Parents Choose Sunrise",
      whySub: "20 years, 1,500+ students, one promise — every child is known by name.",
      achievementsTitle: "Our Stars",
      achievementsSub: "Olympiad medals, district trophies and stage winners — all from this campus.",
      reviewsTitle: "What Parents Say",
      reviewsSub: "Honest words from Sunrise families.",
      faqTitle: "Questions Parents Ask",
      faqSub: "Everything you want to know before visiting.",
      galleryTitle: "Life at Sunrise",
      gallerySub: "Classrooms, labs, playground and celebrations — a peek inside.",
      visitTitle: "Visit Our Campus",
      visitSub: "On Nipania Main Road — GPS bus routes across Indore.",
      ctaTitle: "The right school changes everything.",
      ctaSub: "Book a campus visit — meet the Principal, see the classrooms, then decide.",
      admissionsTitle: "Admissions — Simple & Transparent",
      admissionsSub: "Four easy steps from visit to first day of school.",
      ageTitle: "Age Criteria",
      docsTitle: "Documents Required",
    },
    booking: {
      title: "Book a Campus Visit",
      sub: "Fill this form — your request goes directly to our WhatsApp. The admission office confirms your visit within 15 minutes.",
      name: "Parent's Name", namePh: "e.g. Rajesh Solanki",
      phone: "Mobile Number", phonePh: "e.g. 92024 20455",
      doctor: "Class Seeking Admission", anyDoctor: "Not decided yet",
      date: "Preferred Visit Date", slot: "Preferred Time (9 AM – 1 PM)",
      note: "Child's Name & Age (optional)", notePh: "e.g. Aarav, 4 years",
      submit: "Book Visit on WhatsApp",
      or: "or",
      call: "Call the admission office",
      success: "Opening WhatsApp… your campus-visit request is ready to send!",
      morning: "Visit Slots", evening: "",
    },
    footer: { rights: "All rights reserved.", quick: "Quick Links", contact: "Contact", hours: "Timings", tagline: "Every child is known by name here." },
    misc: { viewAll: "Explore Academics", bookWith: "Book a visit", experience: "Experience", readMore: "Know More", getDirections: "Get Directions", emergency: "Admission Helpline (9 AM – 1 PM)" },
    about: {
      title: "About Sunrise Public School",
      sub: "20 years of honest education in Indore.",
      story1: "Sunrise Public School was started in 2005 by a group of Indore educators with one belief — a good school is not the one with the tallest building, but the one where every child is known by name.",
      story2: "From 60 students in a single wing, Sunrise has grown into a full Nursery–Class 8 campus in Nipania with smart classrooms, science and computer labs, a big playground and GPS transport across Indore — while keeping sections capped at 30 children.",
      story3: "Our promise to every parent is written, not spoken: transparent fees, monthly progress updates, and a Principal whose door is always open.",
      missionTitle: "Our Mission",
      mission: "To give every child of Indore a safe, joyful, concept-first education — at fees an honest middle-class family can afford.",
      values: [
        { title: "Safety First", desc: "CCTV, GPS buses, verified staff, gated campus — visible, verifiable safety." },
        { title: "Joyful Learning", desc: "Children should run INTO school, not out of it. Play-way juniors, activity-based seniors." },
        { title: "Transparent Fees", desc: "Written fee structure, quarterly installments, zero hidden charges." },
        { title: "Parents as Partners", desc: "Monthly updates, two PTMs a term, teachers reachable on WhatsApp." },
      ],
    },
  },
  hi: {
    nav: { home: "होम", about: "हमारे बारे में", academics: "पढ़ाई", admissions: "एडमिशन", gallery: "गैलरी", contact: "संपर्क व विज़िट", book: "कैंपस विज़िट बुक करें" },
    hero: {
      badge: "2005 से इंदौर के बच्चों का पालन-पोषण",
      title: "जहाँ नन्हे मन देखते हैं",
      titleAccent: "बड़े सपने",
      sub: "CBSE पैटर्न पढ़ाई, 1:20 शिक्षक अनुपात, CCTV-सुरक्षित कैंपस और GPS ट्रांसपोर्ट — निपानिया, इंदौर में नर्सरी से कक्षा 8 तक। WhatsApp पर 30 सेकंड में कैंपस विज़िट बुक करें।",
      cta1: "कैंपस विज़िट बुक करें",
      cta2: "अभी कॉल करें",
      open: "एडमिशन चालू · नर्सरी – कक्षा 8",
    },
    sections: {
      academicsTitle: "सनराइज़ में पढ़ाई",
      academicsSub: "प्ले-वे नर्सरी से ओलंपियाड-तैयार कक्षा 8 तक — एक कैंपस, एक स्नेही टीम।",
      staffTitle: "सनराइज़ के पीछे के लोग",
      staffSub: "ऐसे शिक्षक जो आपके बच्चे को अपना मानते हैं।",
      whyTitle: "अभिभावक सनराइज़ क्यों चुनते हैं",
      whySub: "20 साल, 1,500+ छात्र, एक वादा — हर बच्चा नाम से जाना जाता है।",
      achievementsTitle: "हमारे सितारे",
      achievementsSub: "ओलंपियाड मेडल, ज़िला ट्रॉफियाँ और मंच के विजेता — सब इसी कैंपस से।",
      reviewsTitle: "अभिभावक क्या कहते हैं",
      reviewsSub: "सनराइज़ परिवारों की सच्ची राय।",
      faqTitle: "अभिभावकों के सवाल",
      faqSub: "विज़िट से पहले हर ज़रूरी जानकारी।",
      galleryTitle: "सनराइज़ की ज़िंदगी",
      gallerySub: "कक्षाएँ, लैब, मैदान और उत्सव — एक झलक।",
      visitTitle: "कैंपस देखने आइए",
      visitSub: "निपानिया मेन रोड पर — पूरे इंदौर में GPS बस रूट।",
      ctaTitle: "सही स्कूल सब कुछ बदल देता है।",
      ctaSub: "कैंपस विज़िट बुक करें — प्राचार्या से मिलें, कक्षाएँ देखें, फिर निर्णय लें।",
      admissionsTitle: "एडमिशन — सरल व पारदर्शी",
      admissionsSub: "विज़िट से पहले दिन तक — चार आसान कदम।",
      ageTitle: "आयु मापदंड",
      docsTitle: "आवश्यक दस्तावेज़",
    },
    booking: {
      title: "कैंपस विज़िट बुक करें",
      sub: "यह फॉर्म भरें — आपकी रिक्वेस्ट सीधे हमारे WhatsApp पर पहुँचेगी। एडमिशन ऑफिस 15 मिनट में विज़िट कन्फर्म करेगा।",
      name: "अभिभावक का नाम", namePh: "जैसे: राजेश सोलंकी",
      phone: "मोबाइल नंबर", phonePh: "जैसे: 92024 20455",
      doctor: "किस कक्षा में एडमिशन चाहिए", anyDoctor: "अभी तय नहीं",
      date: "पसंदीदा विज़िट तारीख", slot: "पसंदीदा समय (सुबह 9 – दोपहर 1)",
      note: "बच्चे का नाम व उम्र (वैकल्पिक)", notePh: "जैसे: आरव, 4 वर्ष",
      submit: "WhatsApp पर विज़िट बुक करें",
      or: "या",
      call: "एडमिशन ऑफिस को कॉल करें",
      success: "WhatsApp खुल रहा है… आपकी कैंपस-विज़िट रिक्वेस्ट भेजने के लिए तैयार है!",
      morning: "विज़िट स्लॉट", evening: "",
    },
    footer: { rights: "सर्वाधिकार सुरक्षित।", quick: "क्विक लिंक्स", contact: "संपर्क", hours: "समय", tagline: "यहाँ हर बच्चा नाम से जाना जाता है।" },
    misc: { viewAll: "पढ़ाई के बारे में जानें", bookWith: "विज़िट बुक करें", experience: "अनुभव", readMore: "और जानें", getDirections: "रास्ता देखें", emergency: "एडमिशन हेल्पलाइन (सुबह 9 – दोपहर 1)" },
    about: {
      title: "सनराइज़ पब्लिक स्कूल के बारे में",
      sub: "इंदौर में 20 साल की ईमानदार शिक्षा।",
      story1: "सनराइज़ पब्लिक स्कूल की शुरुआत 2005 में इंदौर के कुछ शिक्षकों ने एक विश्वास के साथ की — अच्छा स्कूल वह नहीं जिसकी इमारत सबसे ऊँची हो, बल्कि वह जहाँ हर बच्चा नाम से जाना जाए।",
      story2: "एक विंग के 60 छात्रों से शुरू होकर सनराइज़ आज निपानिया में नर्सरी–कक्षा 8 का पूर्ण कैंपस है — स्मार्ट क्लासरूम, साइंस व कंप्यूटर लैब, बड़ा मैदान और पूरे इंदौर में GPS ट्रांसपोर्ट के साथ — और हर सेक्शन आज भी 30 बच्चों तक सीमित है।",
      story3: "हर अभिभावक से हमारा वादा लिखित है, ज़ुबानी नहीं: पारदर्शी फीस, मासिक प्रगति रिपोर्ट, और प्राचार्या जिनका दरवाज़ा हमेशा खुला है।",
      missionTitle: "हमारा मिशन",
      mission: "इंदौर के हर बच्चे को सुरक्षित, आनंदमय, समझ-आधारित शिक्षा — ऐसी फीस पर जो एक ईमानदार मध्यमवर्गीय परिवार दे सके।",
      values: [
        { title: "सुरक्षा सर्वोपरि", desc: "CCTV, GPS बसें, सत्यापित स्टाफ, गेटेड कैंपस — दिखने वाली, जाँचने योग्य सुरक्षा।" },
        { title: "आनंदमय पढ़ाई", desc: "बच्चे स्कूल की ओर दौड़ें, स्कूल से नहीं। जूनियर्स के लिए प्ले-वे, सीनियर्स के लिए एक्टिविटी-आधारित।" },
        { title: "पारदर्शी फीस", desc: "लिखित फी स्ट्रक्चर, त्रैमासिक किस्तें, शून्य छिपे शुल्क।" },
        { title: "अभिभावक साझेदार हैं", desc: "मासिक अपडेट, हर टर्म में दो PTM, शिक्षक WhatsApp पर उपलब्ध।" },
      ],
    },
  },
};

// ponytail: copy this folder for a new clinic, edit only this file + swap images/
window.CLINIC = {
  brand: {
    name: "Al Nahda Medical Center",
    logo: "Al Nahda Medical",
    seoTitle: "Al Nahda Medical Center | Healthcare — Al Nahda, Sharjah, UAE",
    seoDesc: "Accessible medical consultations, dental care, laboratory testing, and preventive care at Al Nahda Medical Center in Hay Al Nahda, Sharjah.",
  },
  doctor: {
    name: "Dr. Rebijith",
    shortName: "Dr. Rebijith",
    bio1: "Dr. Rebijith is a skilled, soft-spoken dentist at Al Nahda Medical Center in Hay Al Nahda, Sharjah. Patients consistently describe his calm approach, clear explanations, and kind bedside manner.",
    bio2: "From fillings and scaling to root canal treatment, Dr. Rebijith focuses on comfortable care and making every step understandable. Reviewers highlight his technical skill, patience, and stress-free treatment experience.",
    tags: ["General Dentistry", "Gentle Care", "Clear Explanations"],
    photo: "images/doctor.jpg",
  },
  contact: {
    phone: "+97165384466",
    whatsapp: "97165384466",
    email: "",
    address: "Bukhara St · Hay Al Nahda · Al Daghaya Tower · Sharjah, UAE",
    city: "Al Nahda, Sharjah",
    mapsUrl: "https://www.google.com/maps/place/Al+Nahda+Medical+Center/@25.3037845,55.3834048,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5c0b829f9a41:0x940dc8e29c93693a!8m2!3d25.3037845!4d55.3834048!16s%2Fg%2F11bzq3bm36?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D",
  },
  hours: [
    "Sunday – Thursday: 7:00 AM – 10:00 PM",
    "Friday: 7:00 AM – 12:00 PM · 2:00 PM – 10:00 PM",
    "Saturday: 7:00 AM – 10:00 PM",
  ],
  reviews: { rating: 5, count: 3 },
  stats: [
    { num: "15+", label: "Hours Open Daily" },
    { num: "7", label: "Days a Week" },
    { num: "AED", label: "Health Packages" },
    { num: "5★", label: "Google Rating" },
  ],
  marquee: [
    "· Al Nahda, Sharjah", "· Open evenings daily", "· General consultations",
    "· Laboratory testing", "· Women's health screening", "· PCOS profile available",
    "· Preventive health packages", "· Friday split hours", "· Open all week",
  ],
  trust: [
    { h: "Convenient Hours", p: "Open every day, with evening hours through 10 PM and a split Friday schedule for added flexibility." },
    { h: "Community Healthcare", p: "A neighborhood medical center serving Hay Al Nahda and the surrounding Sharjah community." },
    { h: "Practical Screening", p: "General consultations, laboratory profiles, and women's health testing in one accessible location." },
  ],
  services: [
    { key: "whitening", name: "General Consultation", price: "After consultation", tag: "CONSULTATION", title: "General Consultation", desc: "Practical primary healthcare for routine concerns, health questions, and next-step guidance.", features: ["Licensed medical care", "Routine assessment", "Clear next steps", "Family-friendly access"] },
    { key: "veneers", name: "Laboratory Tests", price: "After consultation", tag: "LABORATORY", title: "Laboratory Tests", desc: "Convenient diagnostic testing and health profiles to support informed medical decisions.", features: ["Wide test selection", "Convenient location", "Clear reporting", "Call to confirm availability"] },
    { key: "implants", name: "Women's Health", price: "After consultation", tag: "WOMEN'S HEALTH", title: "Women's Health", desc: "Focused screening and consultation support for women's health needs.", features: ["Private consultations", "Screening guidance", "PCOS profile", "Professional care"] },
    { key: "braces", name: "PCOS Profile", price: "After consultation", tag: "SCREENING", title: "PCOS Profile", desc: "A focused laboratory profile designed to support PCOS-related evaluation and follow-up.", features: ["Hormone testing", "Convenient profile", "Clear results", "Clinician guidance"] },
    { key: "scaling", name: "Health Packages", price: "After consultation", tag: "PACKAGES", title: "Health Packages", desc: "Value-focused screening packages for routine monitoring and preventive care.", features: ["Flexible packages", "Routine screening", "Transparent options", "Useful for check-ups"] },
    { key: "rootcanal", name: "Preventive Care", price: "After consultation", tag: "PREVENTION", title: "Preventive Care", desc: "Support for regular check-ups, early detection, and healthier everyday routines.", features: ["Routine monitoring", "Early guidance", "Personalized advice", "Accessible follow-up"] },
  ],
  pricing: [
    { name: "General Consultation", price: "After consultation", sub: "per visit", popular: true, items: ["Routine assessment", "Clear next steps", "Professional guidance"] },
    { name: "Laboratory Profile", price: "After consultation", sub: "per profile", popular: false, items: ["Selected tests", "Clear reporting", "Clinician guidance"] },
    { name: "Health Package", price: "After consultation", sub: "per package", popular: false, items: ["Preventive screening", "Flexible options", "Value-focused care"] },
  ],
  heroTags: "Al Nahda, Sharjah · General Healthcare · Open daily",
  ctaTags: "Al Nahda, Sharjah · Same-day appointments available",
  testimonials: [
    { quote: "Had a really good experience here for my dental appointment with Dr. Rebijith. The entire process was very smooth. He explained everything clearly, and I never felt rushed. It was a very comfortable experience overall. Definitely recommend!!", name: "Poornima Mallikarjun", sub: "Local Guide" },
    { quote: "Amazing experience with Dr. Rebijith. He is a very skilled and soft-spoken dentist. The scaling and polishing were done perfectly with no discomfort. If you are looking for a reliable dentist in Al Nahda, he is the one!", name: "Jobin George", sub: "Local Guide" },
    { quote: "Had my root canal done by Dr. Rebijit and it was a great experience. He is calm, patient, and explains everything clearly. The procedure was smooth and almost painless. Very happy with the treatment. Highly recommend him.", name: "Anonymous Google reviewer" },
  ],
};

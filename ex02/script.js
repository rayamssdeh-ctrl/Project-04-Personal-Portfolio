// قاموس الترجمة المنظم (Translation Dictionary)
const translations = {
    en: {
        logo: "My Portfolio",
        welcome: "Welcome to my Portfolio",
        description: "This is an internationalized portfolio demonstrating bidirectional layout (RTL and LTR) support using native JavaScript and semantic HTML5.",
        btnText: "العربية"
    },
    ar: {
        logo: "محفظتي الشخصية",
        welcome: "مرحباً بك في محفظتي",
        description: "هذه محفظة متعددة اللغات تدعم الاتجاهين (من اليمين لليسار ومن اليسار ليمين) باستخدام جافاسكريبت و HTML5.",
        btnText: "English"
    }
};

const langToggleBtn = document.getElementById("lang-toggle");
let currentLang = "en";

langToggleBtn.addEventListener("click", () => {
    // تبديل اللغة بين الإنجليزية والعربية
    currentLang = currentLang === "en" ? "ar" : "en";
    
    // ضبط اتجاه الصفحة واللغة ديناميكياً (dir="rtl" / dir="ltr")
    if (currentLang === "ar") {
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.setAttribute("lang", "ar");
    } else {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.setAttribute("lang", "en");
    }
    
    // تحديث النصوص داخل عناصر الـ DOM بناءً على القاموس
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // تحديث نص زر التبديل نفسه
    langToggleBtn.textContent = translations[currentLang].btnText;
});

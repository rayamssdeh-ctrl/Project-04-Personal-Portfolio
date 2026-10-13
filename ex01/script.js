const avatarImg = document.getElementById("avatar-img");
const switchBtn = document.getElementById("switch-btn");

// مصفوفة تحتوي على مسارات الصور وصفاتها لتغييرها تفاعلياً بدون إعادة تحميل الصفحة
const photos = [
    { src: "assets/avatar1.jpg", alt: "Casual Photo" },
    { src: "assets/avatar2.jpg", alt: "Professional Photo" }
];

let currentIndex = 0;

switchBtn.addEventListener("click", () => {
    // الانتقال للصورة التالية في المصفوفة بالتبادل (Toggle)
    currentIndex = (currentIndex + 1) % photos.length;
    
    // التعديل الديناميكي لخاصيتي src و alt عبر الـ DOM
    avatarImg.src = photos[currentIndex].src;
    avatarImg.alt = photos[currentIndex].alt;
});

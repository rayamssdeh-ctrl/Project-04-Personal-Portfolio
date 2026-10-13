const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    
    if (document.body.classList.contains("dark-theme")) {
        themeToggleBtn.textContent = "Light Mode";
    } else {
        themeToggleBtn.textContent = "Toggle Theme";
    }
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for your message! (Simulated submission)");
    contactForm.reset();
});

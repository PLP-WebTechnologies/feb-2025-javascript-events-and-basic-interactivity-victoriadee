// EVENT: Button click to change color
const colorBtn = document.getElementById("colorBtn");
const colorText = document.getElementById("colorText");

colorBtn.addEventListener("click", () => {
  const colors = ["red", "green", "blue", "purple"];
  const random = colors[Math.floor(Math.random() * colors.length)];
  colorText.style.color = random;
});

// EVENT: Hover effect on colorText
colorText.addEventListener("mouseover", () => {
  colorText.textContent = "You hovered over me!";
});

colorText.addEventListener("mouseout", () => {
  colorText.textContent = "Watch me change color.";
});

// EVENT: Keypress detection
document.addEventListener("keydown", (e) => {
  if (e.key === "h") alert("You pressed 'h'!");
});

// BONUS: Double-click secret
colorText.addEventListener("dblclick", () => {
  alert("You discovered the double-click secret! 🕵️‍♂️");
});

// INTERACTIVE: Simple image gallery
const galleryImages = [
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200/ff7f7f",
  "https://via.placeholder.com/300x200/7fbfff"
];
let currentIndex = 0;
const galleryImage = document.getElementById("galleryImage");
const nextBtn = document.getElementById("nextImage");

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  galleryImage.src = galleryImages[currentIndex];
});

// INTERACTIVE: Tabs
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabContents.forEach(c => c.classList.add("hidden"));
    const target = document.getElementById(tab.dataset.target);
    target.classList.remove("hidden");
  });
});

// FORM VALIDATION
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("signupForm");
const emailFeedback = document.getElementById("emailFeedback");
const passwordFeedback = document.getElementById("passwordFeedback");

email.addEventListener("input", () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailFeedback.textContent = emailPattern.test(email.value) ? "" : "Invalid email format";
});

password.addEventListener("input", () => {
  passwordFeedback.textContent = password.value.length >= 8 ? "" : "Password must be at least 8 characters.";
});

form.addEventListener("submit", (e) => {
  if (!email.value || !password.value || password.value.length < 8) {
    e.preventDefault();
    alert("Please fix the errors before submitting.");
  }
});

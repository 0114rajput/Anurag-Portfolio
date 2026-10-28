const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close the mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});

// Display the current year automatically
document.getElementById("year").textContent =
  new Date().getFullYear();

// Warn if a project or social link has not been added yet
document.querySelectorAll(".placeholder-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert(
        "Please add the real URL for: " +
        link.dataset.label
      );
    }
  });
});

const contactEmail = "0114anurag@gmail.com";
const emailLink = document.getElementById("email-link");

emailLink.href = "mailto:" + contactEmail;


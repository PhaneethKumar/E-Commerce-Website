// // Mobile Menu Toggle
// document.addEventListener("DOMContentLoaded", function () {
//   const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
//   const navMenu = document.querySelector(".nav-menu");

//   if (mobileMenuToggle) {
//     mobileMenuToggle.addEventListener("click", function () {
//       navMenu.classList.toggle("active");

//       // Toggle between hamburger and close icon
//       if (navMenu.classList.contains("active")) {
//         mobileMenuToggle.textContent = "✕";
//       } else {
//         mobileMenuToggle.textContent = "☰";
//       }
//     });
//   }

//   // Smooth scroll for anchor links
//   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       const href = this.getAttribute("href");
//       if (href !== "#") {
//         e.preventDefault();
//         const target = document.querySelector(href);
//         if (target) {
//           target.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       }
//     });
//   });

//   // Add animation on scroll
//   const observerOptions = {
//     threshold: 0.1,
//     rootMargin: "0px 0px -50px 0px",
//   };

//   const observer = new IntersectionObserver(function (entries) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.style.opacity = "1";
//         entry.target.style.transform = "translateY(0)";
//       }
//     });
//   }, observerOptions);

//   // Observe product cards
//   const productCards = document.querySelectorAll(".product-card");
//   productCards.forEach((card, index) => {
//     card.style.opacity = "0";
//     card.style.transform = "translateY(20px)";
//     card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
//     observer.observe(card);
//   });

//   // Observe category cards
//   const categoryCards = document.querySelectorAll(".category-card");
//   categoryCards.forEach((card, index) => {
//     card.style.opacity = "0";
//     card.style.transform = "translateY(20px)";
//     card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
//     observer.observe(card);
//   });

//   // Add to cart functionality (demo)
//   const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
//   addToCartBtns.forEach((btn) => {
//     btn.addEventListener("click", function (e) {
//       e.preventDefault();

//       // Animate button
//       const originalText = this.textContent;
//       this.textContent = "ADDED ✓";
//       this.style.background = "#2DC071";

//       // Update cart count
//       const cartCount = document.querySelector(".cart-count");
//       if (cartCount) {
//         const currentCount = parseInt(cartCount.textContent);
//         cartCount.textContent = currentCount + 1;

//         // Animate cart icon
//         const cartLink = document.querySelector(".cart-link");
//         cartLink.style.transform = "scale(1.2)";
//         setTimeout(() => {
//           cartLink.style.transform = "scale(1)";
//         }, 300);
//       }

//       // Reset button after 2 seconds
//       setTimeout(() => {
//         this.textContent = originalText;
//         this.style.background = "";
//       }, 2000);
//     });
//   });

//   // Color selector functionality
//   const colorDots = document.querySelectorAll(".color-dot");
//   colorDots.forEach((dot) => {
//     dot.addEventListener("click", function () {
//       // Remove active class from siblings
//       const siblings = this.parentElement.querySelectorAll(".color-dot");
//       siblings.forEach((sibling) => {
//         sibling.style.border = "none";
//       });

//       // Add active state to clicked dot
//       this.style.border = "2px solid #252B42";
//       this.style.boxShadow = "0 0 0 2px white, 0 0 0 4px #252B42";
//     });
//   });

//   // Newsletter subscription
//   const subscribeForm = document.querySelector(".subscribe-form");
//   if (subscribeForm) {
//     subscribeForm.addEventListener("submit", function (e) {
//       e.preventDefault();
//       const input = this.querySelector("input");
//       const button = this.querySelector("button");
//       const originalText = button.textContent;

//       if (input.value) {
//         button.textContent = "Subscribed!";
//         button.style.background = "#2DC071";
//         input.value = "";

//         setTimeout(() => {
//           button.textContent = originalText;
//           button.style.background = "";
//         }, 3000);
//       }
//     });
//   }

//   // Sticky navigation
//   let lastScroll = 0;
//   const nav = document.querySelector(".main-nav");

//   window.addEventListener("scroll", function () {
//     const currentScroll = window.pageYOffset;

//     if (currentScroll <= 0) {
//       nav.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)";
//     } else {
//       nav.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
//     }

//     lastScroll = currentScroll;
//   });
// });

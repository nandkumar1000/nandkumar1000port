// // gsap code
// // Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // Animate the nav__menu when the page scrolls
// // gsap.from(".nav__menu", {
// //   y: -100,               // Start from above the viewport
// //   opacity: 0,            // Start invisible
// //   duration: 0.5,         // Animation duration
// //   ease: "power1.out",    // Smooth easing
// //   scrollTrigger: {
// //     trigger: ".landing-page",   // Element triggering the animation
// //     start: "top top",           // Animation starts when the top of landing-page hits top of the viewport
// //     end: "bottom top",          // Animation ends when the bottom of the section reaches the top of the viewport
// //     toggleActions: "play none none none",  // Play animation on scroll, no resets
// //     scrub: 1                    // Smooth scrolling animation
// //   }
// // });

// // Animating social media links
// gsap.from(".home-sci a", {
//   opacity: 0,            // Start invisible
//   scale: 0.8,            // Slightly smaller size
//   stagger: 0.2,          // Stagger the animations for each social icon
//   duration: 0.5,         // Animation duration
//   delay: 0.8,            // Delay the animation
//   ease: "power1.out"     // Smooth easing
// });

// // Animating the person's image when scrolled into view
// gsap.from(".person", {
//   x: 200,                // Start 200px to the right of the screen
//   opacity: 0,            // Start invisible
//   duration: 1,           // Animation duration
//   ease: "power1.out",    // Smooth easing
//   scrollTrigger: {
//     trigger: ".landing-page",
//     start: "top center",   // Trigger when section is at the center of the viewport
//     toggleActions: "play none none none"  // Play animation when triggered
//   }
// });

// // Additional animations for text elements to come from the bottom
// gsap.from(".text h1", {
//   y: 50,
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.2,
//   ease: "power1.out"
// });

// gsap.from(".text p", {
//   y: 30,
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.4,
//   ease: "power1.out"
// });

// gsap.from(".btn-box", {
//   y: 20,
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.6,
//   ease: "power1.out"
// });


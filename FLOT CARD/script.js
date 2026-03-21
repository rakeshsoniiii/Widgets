const items = document.querySelectorAll('.project-item');
const reveal = document.querySelector('.hover-reveal');
const revealImg = document.querySelector('.reveal-img');
const cursor = document.querySelector('.cursor');

// quickTo is a high-performance way to update GSAP properties on mousemove
const cursorX = gsap.quickTo(cursor, "x", {duration: 0.2, ease: "power3.out"});
const cursorY = gsap.quickTo(cursor, "y", {duration: 0.2, ease: "power3.out"});

const revealX = gsap.quickTo(reveal, "x", {duration: 0.5, ease: "power3.out"});
const revealY = gsap.quickTo(reveal, "y", {duration: 0.5, ease: "power3.out"});

window.addEventListener('mousemove', (e) => {
  cursorX(e.clientX);
  cursorY(e.clientY);
  
  // Offset the reveal box so it's centered or slightly off-center from the mouse
  revealX(e.clientX - 160); // 160 is half the width
  revealY(e.clientY - 210); // 210 is half the height
});

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const imgUrl = item.getAttribute('data-img');
    revealImg.src = imgUrl;
    
    // Show the reveal container
    gsap.to(reveal, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });
    
    // Zoom effect on the image itself
    gsap.fromTo(revealImg,
      { scale: 1.4 },
      { scale: 1, duration: 0.4 }
    );
    
    // Grow the cursor
    gsap.to(cursor, {
      scale: 4,
      duration: 0.2
    });
  });
  
  item.addEventListener('mouseleave', () => {
    // Hide the reveal container
    gsap.to(reveal, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.out"
    });
    
    // Reset the cursor
    gsap.to(cursor, {
      scale: 1,
      duration: 0.2
    });
  });
});
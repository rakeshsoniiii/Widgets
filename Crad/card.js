document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;

  document.addEventListener('scroll', () => {
    const container = document.querySelector('.stack-cards-container');
    const cards = document.querySelectorAll('.stack-cards__item');
    const containerRect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight + 300;
    const scrollPosition = window.scrollY;
    const scrollDown = scrollPosition > lastScrollTop;
    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;

    const progress = Math.max(0, (scrollPosition - containerRect.top + windowHeight) / (windowHeight * 2));

    // Apply transformations in reverse order
    const numCards = cards.length;
    for (let index = numCards - 1; index >= 0; index--) {
      const card = cards[index];
      if (index === numCards - 1) { // Apply to the last card only so it scrolls faster
        if (scrollPosition > containerRect.top - windowHeight * 0.2) {
          card.classList.add('slide-up');
        } else {
          card.classList.remove('slide-up');
        }
      } else {
        if (scrollDown) {
          if (index >= numCards - progress && index !== numCards - 1) { // Exclude the last card
            card.classList.add('slide-up');
          } else {
            card.classList.remove('slide-up');
          }
        } else {
          if (index > numCards - progress - 1 && index !== numCards - 1) { // Exclude the last card
            card.classList.add('slide-up');
          } else {
            card.classList.remove('slide-up');
          }
        }
      }
    }
  });
});

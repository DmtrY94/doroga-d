import Vue from 'vue';
const animateOnScrollObserver = new IntersectionObserver(
  (entries, animateOnScrollObserver) => {
    entries.forEach(entry => {
      // If element is in view
      if (entry.isIntersecting) {
        // Add class 'enter'
        entry.target.classList.add('enter');
        // Unobserve element
        animateOnScrollObserver.unobserve(entry.target);
      }
    });
  },
);

Vue.directive('animate-on-scroll', {
  bind: el => {
    el.classList.add('before-enter');
    animateOnScrollObserver.observe(el);
  },
});

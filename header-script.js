console.log("This is running as expected");

const headingTags = document.querySelectorAll('a.title-link');
const target = document.querySelectorAll('a.title-link');

headingTags.forEach((headerTag) => {
    console.log(headerTag);
})

let options = {
    // root: document.querySelector('#scrollArea'),
    // rootMargin: '0px',
    // threshold: 1.0
}
  
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          let elem = entry.target;
    
          if (entry.intersectionRatio >= 0.75) {
            intersectionCounter++;
          }
        }
    });
}, options);

observer.observe(target);

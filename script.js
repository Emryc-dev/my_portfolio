function animateProgressBars(){
    document.querySelectorAll(".progress-bar").forEach(bar =>{
        const max = parseInt(bar.parentElement.getAttribute("aria-valuemax"));
        let current = 0;
        let interval = setInterval(() => {
            if(current >= max){
                clearInterval(interval);
            }else{
                current++;
                bar.style.width = current + '%';
                bar.textContent = current + '%';
                bar.setAttribute("aria-valuenow", current);
            }
        }, 15);
    });
}

const skillsSection = document.getElementById("skills");
let animated = false;
 window.addEventListener("scroll", () => {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(sectionTop < windowHeight && !animated){
        animateProgressBars();
        animated = true;
    }
 });

 // premier évènement scroll
 const blocs = document.querySelectorAll('.bloc');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 1 });

    blocs.forEach(bloc => observer.observe(bloc));

// deuxième évènement scroll
const block = document.querySelectorAll('.block');
const observe = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.3 });

  block.forEach(bloc => observe.observe(bloc));

  

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursr",{
        left:dets.x,
        top:dets.y
    })
})

function scrollToContact() {
    var contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}
const texts = ["Full Stack Developer", "UI UX Designer"];
let index = 0;
let textIndex = 0;
const typingTextElement = document.getElementById("typed-text");

function type() {
    const text = texts[textIndex];
    typingTextElement.textContent += text[index];
    index++;
    if (index === text.length) {
        clearInterval(typingInterval);
        setTimeout(erase, 1000);
    }
}

function erase() {
    const text = texts[textIndex];
    typingTextElement.textContent = text.substring(0, index);
    index--;
    if (index === 0) {
        clearInterval(typingInterval);
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}

const typingInterval = setInterval(type, 150);

function animateSkills() {
    gsap.from("#my-intro .gsap-eff", {
        x: 500,
        delay: 0.5,
        opacity: 0,
        stagger: 2
    });

    gsap.from(".icons-row-1 .img-1", {
        x: -500,
        opacity: 0,
        stagger: 0.7,
    });

    gsap.from(".icons-row-2", {
        x: -500,
        opacity: 0,
        delay: 2,
        stagger: 0.7
    });

    gsap.from(".icons-row-3 .img-3", {
        x: -300,
        opacity: 0,
        stagger: 0.7
    });
}

// Intersection Observer setup
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If section is intersecting with viewport, start animation
            animateSkills();
            // Unobserve after triggering animation once
            observer.unobserve(entry.target);
        }
    });
});

// Observe the section
observer.observe(document.querySelector('#Work'));


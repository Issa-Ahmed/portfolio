gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

const sections = document.querySelectorAll("section");
const sideNav = document.querySelector('.sidenav');
const menuBtn = document.querySelector('.menu-btn');

// const scrolling = {
//     enabled: true,
//     events: "scroll,wheel,touchmove,pointermove".split(","),
//     prevent: e => e.preventDefault(),
//     disable() {
//       if (scrolling.enabled) {
//         scrolling.enabled = false;
//         window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
//         scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false}));
//       }
//     },
//     enable() {
//       if (!scrolling.enabled) {
//         scrolling.enabled = true;
//         window.removeEventListener("scroll", gsap.ticker.tick);
//         scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
//       }
//     }
//   };


// function goToSection(section, anim, i) {
//   if (scrolling.enabled) { // skip if a scroll tween is in progress
//     scrolling.disable();
//     gsap.to(window, {
//       scrollTo: {y: section, autoKill: false},
//       onComplete: scrolling.enable,
//       duration: .5
//     });

//     anim && anim.restart();
//   }
// }

// sections.forEach((section, i) => {
  
//   ScrollTrigger.create({
//     trigger: section,
//     start: "top bottom-=1",
//     end: "bottom top+=1",
//     onEnter: () => goToSection(section),
//     onEnterBack: () => goToSection(section)
//   });
 
// });





// menuBtn.addEventListener('click', function(){
//     sideNav.classList.toggle('-left-full');
//     sideNav.classList.toggle('left-0');
//     menuBtn.children[0].classList.toggle('translate-y-full');
//     menuBtn.children[0].classList.toggle('rotate-45');
//     menuBtn.children[1].classList.toggle('-translate-y-full');
//     menuBtn.children[1].classList.toggle('-rotate-45');
// });



document.addEventListener('DOMContentLoaded', function(){
    let introName = document.querySelector('.name');

    gsap.from(introName, {
         opacity: 1,
          left: '50%',
          translateX: '50%',
          duration: 1, 
          delay: 2 , 
          color: 'white'
        });

    gsap.fromTo("body", {
         backgroundColor: "#111" }
         ,{
         backgroundColor: "white",
          duration: 1,
           delay: 2
         });

    gsap.from (".logo", {
        fontSize: 0,
        duration:1,
        ease:"power2.out",
        delay:2,
    }); 
    
    gsap.from(".nav-items", {
        opacity: 0,
        rotateX:100,
        delay: 2.5,
        duration:1,
    });
    
    gsap.from(".title", {
        opacity: 0,
        rotateX:100,
        delay: 2.5,
        duration:1,
    });
    
    gsap.from(".divider-1", {
        scaleX:0,
        transformOrigin: 'left' ,
        delay: 2.5,
        duration:1,
    });
    
    gsap.from(".divider-2", {
        scaleX: 0,
        transformOrigin: 'right',
        delay: 2.5,
        duration:1,
    });
    
    gsap.to(".barcode", {
        text: {value: "DEVELOPER"}, 
        duration:1,
        delay: 2.5,
        scaleY: 1,
    });

    gsap.to('.container', {
        opacity:1,
        delay: 2.7,
        duration:1,
    });

    gsap.to(".hero", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=100%",
            pin: true,
            pinSpacing: false,
        }
    });

    gsap.to(".about-title", {
        scrollTrigger: {
            trigger: '.about',
            start: 50,
            end: "bottom center",

        },
        text: {value: "BEHIND THE SCREEN"}, 
        duration:1,
        delay: 0.5,
        scaleY: 1,
    });

    gsap.fromTo(".about-me", {
        y: "100%", // Move text off-screen initially
      }, {
        duration: 1,
        delay:0.6,
        y: 0, // Move text to the top
        ease: "power2.out", // Ease-out animation
        scrollTrigger: {
          trigger: ".about",
          start: "top top", 
          end: "bottom 90", 
        }
      });


    let projects = gsap.utils.toArray(".project");

    gsap.to(projects, {
    xPercent: -100 * (projects.length - 1),
    // ease: "power2.out", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".projects",
      pin: true,
      scrub: 0.1,
      end: "+=3000"
    }
  });


  gsap.to(".blog", {
    width: "100%", // Expand to 100% width
    scrollTrigger: {
        trigger: ".blog",
        start: "top bottom",
        end: "top 20%",
        scrub: true, // Smoothly scrub through animations
    }
});

gsap.to(".blog-title", {
    scrollTrigger: {
        trigger: '.blog',
        start: 'top bottom',
        end: "bottom center",
    },
    text: {value: "FEATURED ARTICLES"}, 
    duration:1,
    delay: 0.5,
    scaleY: 1,
    scrub: true,
});

gsap.fromTo(".contact-title", {
    y: "100%", // Move text off-screen initially
  }, {
    duration: 1,
    delay:0.6,
    y: 0, // Move text to the top
    ease: "power2.out", // Ease-out animation
    scrollTrigger: {
      trigger: ".contact",
      start: "top top", 
      end: "bottom 90", 
    },
  });

gsap.fromTo(".contact-form", {
    y: "100%", // Move text off-screen initially
  }, {
    duration: 1,
    delay:0.6,
    y: 0, // Move text to the top
    ease: "power2.out", // Ease-out animation
    scrollTrigger: {
      trigger: ".contact",
      start: "top top", 
      end: "bottom 90", 
    },
  });
    
});
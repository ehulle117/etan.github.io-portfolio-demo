// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Reveal Elements on Scroll ---
    const revealElements = document.querySelectorAll(".reveal");

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // --- 2. Navbar Hide/Show on Scroll ---
    const navbar = document.getElementById("navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY && window.scrollY > 100) {
            // Scrolling down & past 100px - hide navbar
            navbar.classList.add("nav-hidden");
        } else {
            // Scrolling up - show navbar
            navbar.classList.remove("nav-hidden");
        }
        lastScrollY = window.scrollY;
    });

    // --- 3. Initial Hero Animation Trigger ---
    // Manually trigger reveal for hero section if needed, 
    // or just let the IntersectionObserver handle it if hero is classed with 'reveal'
    // Currently hero isn't set to reveal, it just shows up.
});

//THIS PROJECT WAS FOLLOWED ALONG A TUTORIAL WHILE LEARNING HOW TO BUILD A WEBSITE.

const slideNav = () =>
{
    const layers = document.querySelector(".layers");
    const nav = document.querySelector(".navigation-links");
    const navLinks = document.querySelectorAll(".navigation-links li");

    layers.addEventListener("click", () => 
    {
        nav.classList.toggle("nav-active");
    });

    navLinks.forEach((link, index) => 
    {
        link.style.animation = `navFade 0.5s ease forwards ${index/5+1.5}s`;
    });
}

slideNav();
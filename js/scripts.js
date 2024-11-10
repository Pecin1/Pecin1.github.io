const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

function toggleMenu() {
    hamburgerMenu.classList.toggle('open');
    menu.classList.toggle('open');
}

window.addEventListener("scroll", function() {
    const sipka = document.getElementById("sipkaNahoru");

    // Show the arrow
    if (window.scrollY > window.innerHeight / 2) {
        sipka.classList.add("zobrazeno");
    } else {
        sipka.classList.remove("zobrazeno");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.onload = function() {
    document.body.classList.add('loaded');
};
const projects = [
    {
        name: "Jindra",
        image: "veci/lepsijindra.png",
        description: "With my team named BeerGuys, we made our first, simple 2d game. Made in Unity and BUGFREE!!"
    },
    {
        name: "HorrorMaker",
        image: "veci/horrormaker.png",
        description: "Our second game, more complex with 3d models and enemies. It is also made in Unity and bugfree!"
    }
];

let currentIndex = 0;
let intervalId;
const projectImage = document.getElementById("projectImage");
const projectDescription = document.getElementById("projectDescription");
const nazvyProjektuStyly = document.querySelectorAll(".nazvyProjektuStyly");



function updateProject(index) {

    nazvyProjektuStyly.forEach((project, idx) => {
        project.classList.remove("active");
        project.style.transform = "scale(1)";
        if (idx === index) {
            project.classList.add("active"); //PROJEKT ZVYRANIT KDYZ SE ZMENI
            project.style.transform = "scale(1.05)";
            
        }
    });

    projectImage.style.transition = 'opacity 0.5s ease';
    projectDescription.style.transition = 'opacity 0.5s ease';


    projectImage.style.opacity = '0';// popis a obrazek pryc
    projectDescription.style.opacity = '0'; // popis a obrazek pryc

    
    setTimeout(() => {
        projectImage.src = projects[index].image;
        projectDescription.textContent = projects[index].description;

        projectImage.style.opacity = '1'; //popis a obrazek in
        projectDescription.style.opacity = '1';//popis a obrazek in
    }, 500);
}

function startAutoSwitch() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % projects.length;//DAlsi projekt
        updateProject(currentIndex);
    }, 10000);//10sekund
}

updateProject(currentIndex);
startAutoSwitch();




// Event listener pro kliknutí na tlačítka projektu
nazvyProjektuStyly.forEach(project => {
    project.addEventListener('click', () => {
        const index = parseInt(project.getAttribute('data-index'));
        clearInterval(intervalId); // Zastavte automatické přepínání
        currentIndex = index; // Aktualizujte aktuální index
        updateProject(currentIndex); // Aktualizujte na vybraný projekt
    });
});

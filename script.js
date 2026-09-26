/* PAGE LOADING */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


/* SECTION REVEAL */

const sections = document.querySelectorAll("section");

function revealSections() {

    const triggerPoint = window.innerHeight * 0.8;

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add("show");
        }

    });
}

window.addEventListener("scroll", revealSections);

revealSections();


/* HERO MOUSE MOVEMENT */

const hero = document.querySelector(".hero");

document.addEventListener("mousemove", (event) => {

    if (!hero) return;

    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;

    hero.style.setProperty("--mouse-x", `${x}px`);
    hero.style.setProperty("--mouse-y", `${y}px`);

});


/* ACTIVE NAVIGATION */

const navLinks = document.querySelectorAll(".nav-links a");
const pageSections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    pageSections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* PROJECT VIEWER */

const projects = document.querySelectorAll(".project");
/* PROJECT FILTER */

const filterButtons = document.querySelectorAll(".filter-btn");

if (filterButtons.length > 0 && projects.length > 0) {

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            /* Remove active state from all buttons */

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            /* Activate clicked button */

            button.classList.add("active");

            /* Get selected category */

            const filter = button.getAttribute("data-filter");

            /* Show or hide projects */

            projects.forEach(project => {

                const category = project.getAttribute("data-category");

                if (filter === "all" || category === filter) {

    project.classList.remove("filter-hidden");

    project.classList.remove("filter-visible");

    void project.offsetWidth;

    project.classList.add("filter-visible");

} else {

    project.classList.remove("filter-visible");

    project.classList.add("filter-hidden");

}

            });

        });

    });

}

const projectViewer = document.getElementById("projectViewer");
const viewerImage = document.getElementById("viewerImage");
const viewerNumber = document.getElementById("viewerNumber");
const viewerTitle = document.getElementById("viewerTitle");
const viewerCategory = document.getElementById("viewerCategory");
const viewerClose = document.getElementById("viewerClose");


if (
    projects.length > 0 &&
    projectViewer &&
    viewerImage &&
    viewerNumber &&
    viewerTitle &&
    viewerCategory &&
    viewerClose
) {

    projects.forEach((project) => {

        project.addEventListener("click", () => {

            const image = project.querySelector("img");
            const title = project.querySelector("h3");
            const category = project.querySelector(".project-info p");
            const number = project.querySelector(".project-number");

            if (!image || !title || !category || !number) return;

            viewerImage.src = image.src;
            viewerImage.alt = image.alt;

            viewerNumber.textContent = number.textContent;
            viewerTitle.textContent = title.textContent;
            viewerCategory.textContent = category.textContent;

            projectViewer.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    /* CLOSE BUTTON */

    viewerClose.addEventListener("click", () => {

        projectViewer.classList.remove("active");

        document.body.style.overflow = "";

    });


    /* CLICK OUTSIDE */

    projectViewer.addEventListener("click", (event) => {

        if (event.target === projectViewer) {

            projectViewer.classList.remove("active");

            document.body.style.overflow = "";

        }

    });


    /* ESCAPE KEY */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            projectViewer.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}
/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const navLinksMenu = document.getElementById("navLinks");

if (menuToggle && navLinksMenu) {

    menuToggle.addEventListener("click", () => {

        navLinksMenu.classList.toggle("active");

    });

    navLinksMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinksMenu.classList.remove("active");

        });

    });

}
/* CUSTOM CURSOR */

const customCursor = document.querySelector(".custom-cursor");

if (customCursor) {

    document.addEventListener("mousemove", (event) => {

        customCursor.style.left = `${event.clientX}px`;
        customCursor.style.top = `${event.clientY}px`;

    });

    const cursorTargets = document.querySelectorAll(
        "a, button, .project, .skill-card"
    );

    cursorTargets.forEach(target => {

        target.addEventListener("mouseenter", () => {
            customCursor.classList.add("cursor-hover");
        });

        target.addEventListener("mouseleave", () => {
            customCursor.classList.remove("cursor-hover");
        });

    });

}
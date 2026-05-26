window.onload = () => {

    const firstButton =
        document.querySelector(".nav-btn");

    firstButton.classList.add("active");
};

function showSection(index, element) {

    const container =
        document.getElementById("container");

    /* Desktop Slide */

    if(window.innerWidth > 768){

        container.style.transform =
            `translateX(-${index * 100}vw)`;
    }

    /* Mobile Scroll */

    else{

        const sections =
            document.querySelectorAll(".section");

        sections[index].scrollIntoView({
            behavior:"smooth"
        });
    }

    /* Active Button */

    const buttons =
        document.querySelectorAll(".nav-btn");

    buttons.forEach((btn) => {
        btn.classList.remove("active");
    });

    element.classList.add("active");
}

/* RESET DESKTOP/MOBILE VIEW */

window.addEventListener("resize", () => {

    const container =
        document.getElementById("container");

    if(window.innerWidth <= 768){

        container.style.transform = "none";
    }
});
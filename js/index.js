console.log("Hello World");

const uls = document.querySelectorAll("nav ul");
const links = [...document.querySelectorAll("nav a")];
const light = document.querySelector("nav .tubelight");

let activeIndex = 0;
let cursorIndex = 0;
let increment = 1;
links.forEach((link, index) => {
    if (links[index].classList.containes("active")) {
        light.style.left= `${links[index].offsetLeft + light.offset.Width / 4}px`;
    }

    link.addEventListener("click", (e) => {
        activeIndex = index;
        console.log(activeIndex);

        let t = setInterval(() => {
            if (activeIndex > cursorIndex) increment = 1;
            else if (activeIndex < cursorIndex) increment = -1;
        });
    });
});

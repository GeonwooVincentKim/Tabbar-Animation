// console.log("Hello World");

const uls = document.querySelectorAll("nav ul");
const links = [...document.querySelectorAll("nav a")];
const light = document.querySelector("nav .tube-light");
console.log(light);
// document.querySelectByClassname()

let activeIndex = 0;
let cursorIndex = 0;
let increment = 1;

links.forEach((link, index) => {
    if (links[index].classList.contains("active")) {
        light.style.left= `${links[index].offsetLeft + light.offset.Width / 4}px`;
    }

    link.addEventListener("click", (e) => {
        activeIndex = index;
        console.log(activeIndex);

        let t = setInterval(() => {
            if (activeIndex > cursorIndex) increment = 1;
            else if (activeIndex < cursorIndex) increment = -1;
            
            cursorIndex += increment;
            links[cursorIndex].classList.add("active");

            if(cursorIndex != -1)
            links[cursorIndex -increment].classList.remove("active");

            if(cursorIndex == activeIndex) {
                e.target.classList.add("active");
                increment = 0;
                clearInterval(t);
            }
        }, 50);

        light.style.left = `${e.target.offsetLeft + light.offset.Width / 4}px`;
    });
});

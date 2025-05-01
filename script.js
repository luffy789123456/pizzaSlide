const slider = document.querySelector(".circular-slide");
const images = document.querySelectorAll(".slide img");
const imageContainer = document.querySelector(".image");
const indicator = document.querySelector(".indicator");
const menuItems = document.querySelectorAll(".menu span");
const descriptions = document.querySelectorAll(".text");

const rotationValues = [-58, -32, 0, 32, 58];

const colors = [
    "radial-gradient(#a74255, #440412)",
    "radial-gradient(#ff4b5f, #a40b16)",
    "radial-gradient(#fdb76d, #f08a00)",
    "radial-gradient(#849ade, #42395f)",
    "radial-gradient(#e7ad59, #883e2a)",
];

let itemIndex = 2;

function rotate(rotationValues){
    imageContainer.style.transform = `rotate(${rotationValues}deg)`;
    indicator.style.transform = `translate(-50%, -50%) rotate(${rotationValues}deg)`;
}

menuItems.forEach((menuItem, i) => {
    menuItem.addEventListener("click", () => {
        images.forEach(img => img.style.opacity = "0");
        images[i].style.opacity = "1";
        slider.style.background = colors[i];

        if(i > itemIndex) {
            rotate(rotationValues[itemIndex] -10);
        }else if(i < itemIndex) {
            rotate(rotationValues[itemIndex] +10);
        }else {
            return "";
        };

        rotate(rotationValues[i]);
        descriptions.forEach(text => text.style.display = "none");
        descriptions[i].style.display = "block";

        itemIndex = i;
    });
});
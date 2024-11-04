const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", () => {
	left.classList.add("showBigger");
	right.classList.add("showLess");
});

left.addEventListener("mouseleave", () => {
	left.classList.remove("showBigger");
	right.classList.remove("showLess");
});

right.addEventListener("mouseenter", () => {
	right.classList.add("showBigger");
	left.classList.add("showLess");
});

right.addEventListener("mouseleave", () => {
	right.classList.remove("showBigger");
	left.classList.remove("showLess");
});

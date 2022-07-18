const login = document.querySelector(".login");
const loginLink = document.querySelector(".login-signup");
loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (login.style.display === "block") {
        login.style.display = "none";
    } else {
        login.style.display = "block";
    }
})
const allReviews = document.querySelectorAll(".review");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");
var flag = 0;
allReviews[flag].style.display = "block";
function changeReview(num) {
    if (num === 1) {
        flag = flag + num;

    }
    if (num === -1) {
        flag = flag - num;
    }
    if (flag === allReviews.length) {
        flag = 0;
    }

    for (let review of allReviews) {
        review.style.display = "none";
    }
    allReviews[flag].style.display = "block";

}
// for benefit section
let ourStoryBtn = document.querySelector(".story-btn");
let technologyBtn = document.querySelector(".tech-btn");
let benefitBtn = document.querySelector(".benefit-btn");


let ourStoryContent = document.querySelector(".our-story-content");
let technologyContent = document.querySelector(".technology-content");
let benefitContent = document.querySelector(".benefit-content");
ourStoryContent.style.display = "flex";
ourStoryBtn.style.backgroundColor = "rgb(202, 202, 202)";

technologyContent.style.display = "none";

benefitContent.style.display = "none";
technologyBtn.addEventListener("click", () => {
    technologyBtn.style.backgroundColor = "rgb(202, 202, 202)";
    benefitBtn.style.backgroundColor = "#fff";
    ourStoryBtn.style.backgroundColor = "#fff";
    technologyContent.style.display = "flex";

    benefitContent.style.display = "none";
    ourStoryContent.style.display = "none";

})
benefitBtn.addEventListener("click", () => {
    benefitBtn.style.backgroundColor = "rgb(202, 202, 202)";
    technologyBtn.style.backgroundColor = "#fff";
    ourStoryBtn.style.backgroundColor = "#fff";
    benefitContent.style.display = "flex";

    technologyContent.style.display = "none";
    ourStoryContent.style.display = "none";

})
ourStoryBtn.addEventListener("click", () => {
    ourStoryBtn.style.backgroundColor = "rgb(202, 202, 202)";
    technologyBtn.style.backgroundColor = "#fff";
    benefitBtn.style.backgroundColor = "#fff";
    ourStoryContent.style.display = "flex";

    technologyContent.style.display = "none";
    benefitContent.style.display = "none";

})
const tl = gsap.timeline({
    duration: .5,
    ease: "power2.out"
});
tl.fromTo(".hexagon", { opacity: 0 }, { opacity: 1 });
document.querySelector("#department").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".all-departments").style.display = "block";
})



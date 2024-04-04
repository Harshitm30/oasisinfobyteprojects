const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const projectSlider = document.querySelector(".project-slider");

let scrollPosition = 0;

nextBtn.addEventListener("click", () => {
  scrollPosition += 320;
  if (scrollPosition > projectSlider.scrollWidth - projectSlider.clientWidth) {
    scrollPosition = projectSlider.scrollWidth - projectSlider.clientWidth;
  }
  projectSlider.scrollTo({
    left: scrollPosition,
    behavior: "smooth"
  });
});

prevBtn.addEventListener("click", () => {
  scrollPosition -= 320;
  if (scrollPosition < 0) {
    scrollPosition = 0;
  }
  projectSlider.scrollTo({
    left: scrollPosition,
    behavior: "smooth"
  });
});




document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    
    alert("Form submitted!"); 
  });
  
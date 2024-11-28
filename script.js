document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to Samved's Resume and Bio-Data Webpage!")
})

document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.querySelector(".greeting");
    const hour = new Date().getHours();
    let greeting;
  
    if (hour < 12) {
      greeting = "Good Morning!";
    } else if (hour < 18) {
      greeting = "Good Afternoon!";
    } else {
      greeting = "Good Evening!";
    }
  
    greetingElement.textContent = greeting;
});
  
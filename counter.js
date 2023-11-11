document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.getElementById("counter");
  let counter = 5;
  counterElement.style.fontSize = "2rem";
  counterElement.style.fontWeight = "bold";
  const imageGrid = document.getElementById("imageGrid");

  imageGrid.addEventListener("click", function (event) {

    if (counter > 0) {
      // Check if the clicked element is an image

      if (event.target.tagName === "CANVAS") {
        counter--;
        console.log(counter);

        // Update the counter display
        counterElement.innerText = (counter + " turns left");

        if (counter < 0) {
          // Disable further clicks
          imageGrid.removeEventListener("click", clickHandler);
          alert("All 5 tries used!");
        }
      }
    } else {
      // Display a message on the 6th click (counter is already 0)
      alert("All 5 tries used!");
    }
  });

 imageGrid.addEventListener

});

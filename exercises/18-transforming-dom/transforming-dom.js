/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  const img = document.querySelector("img");
  img.src = "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";

  const mozillaLink = document.querySelector(".mozillaLink");
  mozillaLink.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  const victory = document.querySelector('[class="alert alert-success"]');
  victory.textContent = "I am victorious!";

  const colorChange1 = document.querySelector('[class="alert alert-info"]');
  colorChange1.style.backgroundColor = "teal";

  const classChange = document.querySelector('[class="alert alert-danger2"]');
  classChange.className = "p-3 mb-2 bg-info text-white";

 const hiddenstyle = document.querySelector('[class="alert alert-warning2"]');
 hiddenstyle.style.display = "none";

 const unhide = document.querySelector('[class="alert alert-success hidden"]');
 unhide.className = "alert alert-success";

 const buttondiv = document.querySelector('.my-button');

  if (buttondiv.classList.contains("btn-primary")){
    buttondiv.textContent = "✓ blue"
  }

  
})();

/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here
  console.log( document.querySelector("li") );
  console.log( document.querySelector('#myId') );

  const bgWarning = document.querySelectorAll('[class=bg-warning]');
  bgWarning.forEach( (warning) => {
    console.log(warning)
  });

  console.log(document.querySelector('[class="btn btn-secondary2"]'))

  const targetSocialMedia = document.querySelectorAll('[class="socialMedia"]');
  targetSocialMedia.forEach ((target) => {
    console.log(target)
  });

  const greenCells = document.querySelectorAll('[class="row bg-success text-white"], [id="myRow"], [class="col col-xs border"]');
  greenCells.forEach ((cell) => {
    console.log(cell)
  });
})();

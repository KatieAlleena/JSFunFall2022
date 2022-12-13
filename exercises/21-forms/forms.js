(function () {
  /**
   * You have three challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Rendering what a user is typing on the page.
   *
   * When the user types inside the textbook labeled "Enter mystery text here",
   * it should display what the user is typing in the <div></div> tags below.
   */
  // Write your answer here
  document.querySelector("#someText").addEventListener("input", event => {
    const typed = event.target.value;
    document.querySelector("#displaySomeText").textContent = typed;

  });
  /**
   * Problem 2: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  // Write your answer here
  document.querySelector("#oceanForm").addEventListener("submit", event => {
    event.preventDefault();
    
    const searchOceans = document.querySelector("#searchOceans");

    const oceanResults = document.querySelector("#oceanResults");
    oceanResults.textContent = `Sorry. There were no results for "${searchOceans.value}" found.`;
  });
  /**
   * Problem 3: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your answer here
  document.querySelector("#form1").addEventListener("submit", event => {

    event.preventDefault();

    const terms = document.querySelector("#terms");

    const agreementError = document.querySelector("#agreementError");

    const agreementSuccess = document.querySelector("#agreementSuccess");

    const showAgreementError = () => {
      if (!terms.classList.contains("is-invalid")) {

        terms.classList.add("is-invalid");

      }

      if (!agreementSuccess.classList.contains("hidden")) {

        agreementSuccess.classList.add("hidden");

      }

      if (agreementError.classList.contains("hidden")) {
        agreementError.classList.remove("hidden");
      }
    };

    const showAgreementSuccess = () => {
  
      if (terms.classList.contains("is-invalid")) {
        terms.classList.remove("is-invalid");
      }

      if (agreementSuccess.classList.contains("hidden")) {
        agreementSuccess.classList.remove("hidden");
      }

      if (!agreementError.classList.contains("hidden")) {
        agreementError.classList.add("hidden");
      }
    };

    const checkbox = document.querySelector("#terms");
    if (checkbox.checked) showAgreementSuccess();
    else showAgreementError();

    // this isn't working yet, sorry. Will work on it soon.
  });

})();

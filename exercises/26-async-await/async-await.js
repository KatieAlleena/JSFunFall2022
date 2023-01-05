(function () {
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */
/* axios ({
  method: GET,
  url: 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
}) */

const button = document.querySelector("#button");
button.addEventListener('click', async () => {
//ajax request
  const response = await axios ({
    method: 'GET',
    url: 'https://ron-swanson-quotes.herokuapp.com/v2/quotes',
  });
  const data = response.data[0];
//add quote into the html
  const quote = document.querySelector('#quote');
  quote.textContent = data;
});

})();

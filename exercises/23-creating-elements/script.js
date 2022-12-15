const button = document.querySelector("#button");
  const link = document.querySelector('#link');

  button.addEventListener("click", () => {
    if (link.classList.contains('hidden')) {
    link.classList.remove('hidden');
    } else {
      link.classList.add('hidden');
    }
  
});
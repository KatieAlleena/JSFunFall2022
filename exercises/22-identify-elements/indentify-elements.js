!(function () {
  /**
   * When the user clicks on one of the "Select" buttons to select a plan,
   * display the following message in the aqua green notification at the top of the screen,
   * where "Premium" is the name of the plan that user selected:
   * "Thank you for purchasing the Premium plan!"
   *
   * You must use "document.querySelectorAll" to solve this problem.
   *
   * You can edit the HTML on the page to solve this problem.
   *
   * As a bonus, you can hide the notification before the user selects a plan.
   * You can also make the "x" icon dismiss the notification.
   */
  // Write your answer here
  const buttonCommunity = document.querySelector('#selectCommunity')
  const buttonProfessional = document.querySelector('#selectProfessional')
  const buttonEnterprise = document.querySelector('#selectEnterprise')
  const notification = document.querySelector('#notification')
  const note = document.querySelector('#note')
  const close = document.querySelector('#close')
  const dismiss = () => {
    notification.style.display = 'none'
  }

  

  buttonCommunity.addEventListener("click", () => {
    if (notification.classList.contains('hidden')) {
      notification.classList.remove('hidden')
      note.textContent = "Thanks for choosing the Community plan!"
    }
    

  });

  buttonProfessional.addEventListener("click", () => {
    if (notification.classList.contains('hidden')) {
      notification.classList.remove('hidden')
      note.textContent = "Thanks for choosing the Professional plan!"
    }
    

  });

  buttonEnterprise.addEventListener("click", () => {
    if (notification.classList.contains('hidden')) {
      notification.classList.remove('hidden')
      note.textContent = "Thanks for choosing the Enterprise plan!"
    }
    

  });

  if (notification.classList.contains('hidden')) {
    close.addEventListener("click", (dismiss));
    
  }

  /* confused as to how to make each button clickable, but... each time the page refreshes each of these work once... lol */
})();

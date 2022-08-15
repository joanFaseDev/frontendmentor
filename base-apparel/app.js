const form = document.querySelector(`.coming__form`);
const input = document.querySelector(`.form__mail`);

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();
  checkEmail();
});

/*Check if user's input is a legit email address */
function checkEmail() {
  const emailInput = input.value;
  console.log(emailInput);
}

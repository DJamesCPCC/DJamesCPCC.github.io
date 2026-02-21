// ensures that the page has fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
  /*
   *  event listener for the submit button that will change the 
   *  greeting message to a personalized one based on the name 
   *  the user submitted.
    */
  document.getElementById("fizzbuzz3_form").addEventListener('submit', function (event) {

    // stops the form from taking the default action (submitting and refreshing the page)
    event.preventDefault();

    const firstName = document.getElementById("first_name").value.trim();
    const middleInitial = document.getElementById("middle_initial").value.trim();
    const lastName = document.getElementById("last_name").value.trim();

    let fullName = firstName;
    if (middleInitial) {
      fullName += ` ${middleInitial}.`;
    }
    if (lastName) {
      fullName += ` ${lastName}`;
    }

    document.getElementById("greeting").innerHTML = `Welcome to Jackal Repairs, ${fullName}!`;
    console.log("Message has been changed");
  });

  /*
   * event listener for the submit button that will add another box 
   * for the output of the fizzbuzz lines
   *
   */

  document.getElementById("fizzbuzz3_form").addEventListener('submit', function (event) {

    const main = document.getElementsByClassName("main-text")[0];
    const newBox = document.createElement('div');
    const list = document.createElement("ol");

    newBox.classList.add("box");
    newBox.classList.add("box");
    newBox.id = "fizzbuzz3_list";
    list.id = "data3";

    main.appendChild(newBox);
    newBox.appendChild(list);

  }, { once: true });

  /*
   * function to run the modulo checks instead of using a direct modulo 
   * if the event listener
   */
  function checkDivisable(dividend, divisor) {

    let divisable = (dividend % divisor === 0) ? true : false;

    return divisable;
  }

  /*
  * event listener for the submit button that will output a numbered lists from 1 to 140
  * with a themed word, every multiple of 3 will output and special word instead of the standard
  * every multiple of 5 will output a different special word instead of the standard
  * if a number is a multiple of 3 and 5 both special words will be prented
  */
  document.getElementById("fizzbuzz3_form").addEventListener('submit', function (event) {

    var text = document.getElementById("data3");
    text.innerHTML = "";

    const COUNT = 140;
    const divisors = { 3: "RUFF!", 5: " BARK!", 7: " BANG!" };

    for (let i = 1; i <= COUNT; i++) {
      var entries = document.createElement('li');
      for (const [divisor, word] of Object.entries(divisors)) {
        if (checkDivisable(i, divisor)) {
          entries.innerHTML = entries.innerHTML + word;
          text.appendChild(entries);
          console.log(`${i} was divisable by ${divisor}; ${word}`);
        }
      }
      if (entries.innerHTML === '') {
        entries.innerHTML = 'woof!';
        text.appendChild(entries);
        console.log(`${i} was not divisable by any divisor`);
      }
    }
  });
});

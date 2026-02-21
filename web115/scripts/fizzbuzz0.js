// ensures that the page has fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
  /*
   *  event listener for the submit button that will change the 
   *  greeting message to a personalized one based on the name 
   *  the user submitted.
    */
  document.getElementById("fizzbuzz0_form").addEventListener('submit', function (event) {

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

  document.getElementById("fizzbuzz0_form").addEventListener('submit', function (event) {

    const main = document.getElementsByClassName("main-text")[0];
    const newBox = document.createElement('div');
    const list = document.createElement("ol");

    newBox.classList.add("box");
    newBox.classList.add("box");
    newBox.id = "fizzbuzz0_list";
    list.id = "data0";

    main.appendChild(newBox);
    newBox.appendChild(list);

  }, { once: true });

  /*
   * event lisenter for the submit button that will prompt the user for
   * how many lines the fizzbuzz game should go for and then adds the 
   * required number of lines to the box
   */
  document.getElementById("fizzbuzz0_form").addEventListener('submit', function (event) {

    const firstName = document.getElementById("first_name").value.trim();
    var text = document.getElementById('data0');
    text.innerHTML = "";

    let limit = prompt(`How high do you want to count, ${firstName}?`);
    for (let i = 1; i <= limit; i++) {
      var entries = document.createElement("li");

      if (i % 2 === 0) {
        entries.innerHTML = "Cleaver Circuits! - the number is even";
        text.appendChild(entries);
        console.log(`${i} - even number added`);
      }
      else {
        entries.innerHTML = "Cleaver Circuits! - the number is odd";
        text.appendChild(entries);
        console.log(`${i} - odd number added`);
      }
    }

  });
});

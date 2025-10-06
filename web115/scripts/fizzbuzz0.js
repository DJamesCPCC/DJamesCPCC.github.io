document.getElementById("user_info_form").addEventListener('submit', function (event) {
    const main = document.getElementById('maintext');
    const newBox = document.createElement("div");
    const list = document.createElement("ol");
    
    newBox.classList.add("box");
    newBox.id = "fizzbuzz_list";
    list.id = "data";
    
    main.appendChild(newBox);
    newBox.appendChild(list);
    
}, { once: true });

document.getElementById("user_info_form").addEventListener('submit', function (event) {
    
    /* Stops the form from taking it's default action (submitting and refreshing the page) */
    event.preventDefault();
    
    const first_name = document.getElementById('first_name').value.trim();
    const middle_initial = document.getElementById("middle_initial").value.trim();
    const last_name = document.getElementById("last_name").value.trim();
    
    let full_name = first_name;
    if (middle_initial) {
        full_name += ` ${middle_initial}.`;
    }
    full_name += ` ${last_name}`;
    
    document.getElementById("welcome_message").innerHTML = `🐺WELCOME TO JACKAL GAMING, ${full_name}`;

    var text = document.getElementById("data");
    
    var count = prompt(`How high would you like to go, ${first_name}`);
    for (let i = 1; i <= count; i++) {
        var entries = document.createElement("li");
        if (i % 2 === 0) {
        
            entries.innerHTML = "Jumping Jackals! - this number is even";
            console.log(`${i}even number added`);
            text.appendChild(entries);
        }
        else {
           
            entries.innerHTML = "Jumping Jackals - this number is odd";
            console.log(`${i}odd number added`);
            text.appendChild(entries);
        }
    }


    

});

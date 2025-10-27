document.getElementById("fizzbuzz-form").addEventListener('submit', function (event) {
    const main = document.getElementById('maintext');
    const newBox = document.createElement("div");
    const list = document.createElement("ol");
    
    newBox.classList.add("box");
    newBox.id = "fizzbuzz_list";
    list.id = "data";
    
    main.appendChild(newBox);
    newBox.appendChild(list);
    
}, { once: true });

function checkDivsible(dividend, divisor) {
    
    let divisable = (dividend % divisor === 0) ? true : false;

    return divisable;
}

document.getElementById("fizzbuzz-form").addEventListener('submit', function (event) {
    
    /* Stops the form from taking it's default action (submitting and refreshing the page) */
    event.preventDefault();
    
    const first_name = document.getElementById('first-name').value.trim();
    const middle_initial = document.getElementById("middle-initial").value.trim();
    const last_name = document.getElementById("last-name").value.trim();
    const count = document.getElementById("total-count").value.trim();
    const first_divisor = document.getElementById("first-num").value.trim();
    const second_divisor = document.getElementById("second-num").value.trim();
    const third_divisor = document.getElementById("third-num").value.trim();
    const first_word = document.getElementById("first-word").value.trim();
    const second_word = document.getElementById("second-word").value.trim();
    const third_word = document.getElementById("third-word").value.trim();
    const default_word = document.getElementById("default-word").value.trim();
    
    let full_name = first_name;
    if (middle_initial) {
        full_name += ` ${middle_initial}.`;
    }
    full_name += ` ${last_name}`;
    
    document.getElementById("welcome-message").innerHTML = `🐺WELCOME TO JACKAL GAMING, ${full_name}`;

    var text = document.getElementById("data");
    
    for (let i = 1; i <= count; i++) {
        var entries = document.createElement("li");
        if (checkDivsible(i, first_divisor)) {
            entries.innerHTML = first_word;
            console.log(`${i} is divisable by ${first_divisor}`);
            text.appendChild(entries);
            
        }
        if (checkDivsible(i,second_divisor)) {
            entries.innerHTML = entries.innerHTML + " " + second_word;
            console.log(`${i} is divisable by ${second_divisor}`);
            text.appendChild(entries);
        }
        if (checkDivsible(i,third_divisor)) {
            entries.innerHTML = entries.innerHTML + " "  + third_word;
            console.log(`${i} is divisable by ${third_divisor}`);
            text.appendChild(entries);
        }
        if (!checkDivsible(i,first_divisor) && !checkDivsible(i,second_divisor) && !checkDivsible(i,third_divisor)) {
            entries.innerHTML = default_word;
            console.log(`${i} is not divisable by ${first_divisor}, ${second_divisor}, or ${third_divisor}`);
            text.appendChild(entries);
        }
    }

    

});
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
    full_name += ` ${last_name}`

    document.getElementById("welcome_message").innerHTML = `🐺WELCOME TO JACKAL GAMING, ${full_name}`;
});

let first = document.getElementById("firstName");
let surname = document.getElementById("surname");
let email = document.getElementById("email");


function addNewUser() {
    fetch("http://localhost:8080/users/post", {
        method: 'POST',
        body: JSON.stringify({
            first_name: first.value,
            surname: surname.value,
            email: email.value
        }),
        headers: { 'Content-Type': 'application/json'}
    })
        .then(res => {
            if (res.status === 200) {
                alert("New User Added!");
            } else if (res.status ===401) {
                alert("Error, details input incorrectly!");
            } else {
                alert("Registration failed.");
            };
        })
    };



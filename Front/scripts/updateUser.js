let id = document.getElementById("UserId")
let first = document.getElementById("firstName");
let surname = document.getElementById("surname");
let email = document.getElementById("email");

function updateUser() {
    fetch("http://localhost:8080/users/put", {
        method: 'PUT',
        body: JSON.stringify({
            id: id.value,
            first_name: first.value,
            surname: surname.value,
            email: email.value
        }),
        headers: { 'Content-Type': 'application/json'}
    })
        
    };

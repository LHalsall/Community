
 async function updateUsers() {

    let id = document.getElementById("userId")
    let first = document.getElementById("firstName");
    let surname = document.getElementById("surname");
    let email = document.getElementById("email");

    fetch("http://localhost:8080/users/update", {
        method: 'PUT',
        body: JSON.stringify({
            id: id.value,
            first_name: first.value,
            surname: surname.value,
            email: email.value
        }),
        headers: { 'Content-Type': 'application/json' }

    })

};


async function deleteU() {

    let id = document.getElementById("userId")

    fetch("http://localhost:8080/users/delete/" + id.value, {
        method: "DELETE",}).then(() => window.location.href = "./welcomePage.html");
};
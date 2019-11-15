
function newUser() {
    fetch("http://localhost:8080/users/post")
        .then(res => res.json()).then(json => create(json));
}

function create(data) {
    for(let user of data) {

        
    }
}
function loadUsers() {
    fetch("http://localhost:8080/users/all")
        .then(res => res.json()).then(json => showUsers(json));
}

function showUsers(data){
    for(let user of data) {

        let container = document.createElement("div");
        container.className = "container";
        container.style = "width: 60%; background-color: transparent";
        
        let card = document.createElement("div");
        card.classname = "card";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body"
        
        let cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = user.first_name + " " + user.surname;
        cardBody.appendChild(cardTitle);

        let cardSub = document.createElement("h6");
        cardSub.className = "card-subtitle mb-2 text-muted";
        cardSub.innerText = user.id;
        cardBody.appendChild(cardSub);
    
        card.appendChild(cardBody);
        container.appendChild(card);
        mainUser.appendChild(container);

     }
}
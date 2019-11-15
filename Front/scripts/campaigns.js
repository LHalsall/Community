
function loadCampaigns() {
    fetch("http://localhost:8080/campaigns/all")
        .then(res => res.json()).then(json => showCampaigns(json));
}

function showCampaigns(data){
    for(let campaign of data) {

        let container = document.createElement("div");
        container.className = "container";
        container.style = "width: 50%";
        
        let card = document.createElement("div");
        card.classname = "card";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body"
        
        
        let cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = campaign.name;
        cardBody.appendChild(cardTitle);

        let cardSub = document.createElement("h6");
        cardSub.className = "card-subtitle mb-2 text-muted";
        cardSub.innerText = campaign.user.first_name + " " + campaign.user.surname;
        cardBody.appendChild(cardSub);

        let cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = campaign.description;  
        cardBody.appendChild(cardText);

        let cardSubText = document.createElement("p2");
        cardSubText.className = "card-text";
        cardSubText.innerText = '£' + campaign.amount_raised + " of my £" + campaign.goal;
        cardBody.appendChild(cardSubText);

        let donate = document.createElement("a");
        donate.className = "nav-link";
        donate.href = "#";
        donate.style = "padding: 0px; text-align: center; background:#1cff0080"
        donate.innerText = "Donate";
        cardBody.appendChild(donate);
            
        card.appendChild(cardBody);
        container.appendChild(card);
        mainCampaign.appendChild(container);

     }
}


function loadCampaigns() {
    fetch("http://localhost:8080/users/all")
        .then(res => res.json()).then(json => showCampaigns(json));
}


function home() {
    window.location.href = "../html/welcomePage.html"
};

function signIn() {
    window.location.href = "../html/signInRegister.html"
};

function about() {
    window.location.href = "../html/about.html"
}

function campaigns() {
    window.location.href = "../html/campaigns.html"
}

function successful() {
    window.location.href = "../html/successful.html"
}

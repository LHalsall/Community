
let name = document.getElementById("name");
let description = document.getElementById("description");
let goal = document.getElementById("goal");
let raised = document.getElementById("raised");
let goal_reached = document.getElementById("reached");


function addCampaign() {
    fetch("http://localhost:8080/campaigns/post", {
        method: 'POST',
        body: JSON.stringify({
            name: name.value,
            description: description.value,
            goal: goal.value,
            raised: raised.value,
            goal_reached: reached.value
        }),
        headers: { 'Content-Type': 'application/json'}
    })
};
document.getElementById("doubt-form").onsubmit = function(event) {
    event.preventDefault();
    const doubt = document.querySelector("#doubt-form textarea").value;
    alert("Doubt submitted: " + doubt);
    document.querySelector("#doubt-form textarea").value = ''; // Clear the textarea
};

document.getElementById("suggestion-form").onsubmit = function(event) {
    event.preventDefault();
    const suggestion = document.querySelector("#suggestion-form textarea").value;
    alert("Suggestion submitted: " + suggestion);
    document.querySelector("#suggestion-form textarea").value = ''; // Clear the textarea
};
// Sahara Al Jazeera Mobile Website Script

// Welcome Message
window.onload = function() {
    alert("Welcome to Sahara Al Jazeera Mobile LLC - Ajman");
};


// Simple Contact Form Message
function sendMessage() {

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if(name == "" || message == "") {
        alert("Please fill all fields");
    } else {
        alert("Thank you " + name + "! Your request has been sent.");
    }
}


// Simple Search Function
function searchProduct() {

    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll(".product");

    items.forEach(function(item){

        let text = item.innerText.toLowerCase();

        if(text.includes(input)){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });

}


// Visitor Counter (basic)
let visitors = localStorage.getItem("visitors");

if(visitors == null){
    visitors = 0;
}

visitors++;

localStorage.setItem("visitors", visitors);

console.log("Total Visitors: " + visitors);

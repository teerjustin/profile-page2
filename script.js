console.log("page loaded...");

function changeName() {
    var x = document.getElementById("name")
    console.log(x)
    x.innerHTML = "Random Name";
}

count = 2;
function acceptOrDecline() {
    var y = document.getElementById("amountOfRequests");
    var myobj = document.getElementById("remove");
    count--;
    y.innerHTML = count;
    myobj.remove();
}




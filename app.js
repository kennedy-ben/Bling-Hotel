const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

function myFunction() {
    var person = prompt("Please enter your mobile number", "9xxxxxxxxx");
   var r =confirm("The price is $1200.00\n Press ok to continue");
    if (person != null&& r== true) {
        alert("Dear customer, Thank You for booking the family room!!!");
    }
}

function doubleBed() {
    var person = prompt("Please enter your mobile number", "9xxxxxxxxx");
   var r =confirm("The price is $700.00\n Press ok to continue");
    if (person != null&& r== true) {
        alert("Dear customer, Thank You for booking the Double bedroom!!!");
    }
}

function singleBed() {
    var person = prompt("Please enter your mobile number", "9xxxxxxxxx");
   var r =confirm("The price is $500.00\n Press ok to continue");
    if (person != null&& r== true) {
        alert("Dear customer, Thank You for booking the single bedroom!!!");
    }
}
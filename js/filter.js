function menuDisplayItems() {

menuDisplay.innerHTML = ""; // Refresh Items

if (dairy.checked == true){
  dairy.value = 1}
else if (dairy.checked == false){
  dairy.value = 0}
if (eggs.checked == true){
  eggs.value = 1}
else if (eggs.checked == false){
  eggs.value = 0}
if (peanuts.checked == true){
  peanuts.value = 1}
else if (peanuts.checked == false){
  peanuts.value = 0}
if (shellfish.checked == true){
  shellfish.value = 1}
else if (shellfish.checked == false){
  shellfish.value = 0}
if (soy.checked == true){
  soy.value = 1}
else if (soy.checked == false){
  soy.value = 0}
if (wheat.checked == true){
  wheat.value = 1}
else if (wheat.checked == false){
  wheat.value = 0}

var dairy1 = document.getElementById("dairy").value;
var eggs1 = document.getElementById("eggs").value;
var peanuts1 = document.getElementById("peanuts").value;
var shellfish1 = document.getElementById("shellfish").value;
var soy1 = document.getElementById("soy").value;
var wheat1 = document.getElementById("wheat").value;

//Applebees
menuDisplay.innerHTML += "<h5>Applebee's</h5>";

//Chicken Grillers
    menuDisplay.innerHTML += "<h6>Chicken Grillers</h6>";

//Chicken Tenders
if( dairy1 == 0 && eggs1 == 0 && wheat1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Chicken Tenders</h6>"
};

//Fried Shrimp
if( shellfish1 == 0 && wheat1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Fried Shrimp</h6>"
};

//Mac & Cheese
if( dairy1 == 0 && wheat1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Mac & Cheese</h6>"
};


//BURGER KING
menuDisplay.innerHTML += "<h5>BurgerKing</h5>";

//Chicken Nuggets
if( wheat1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Chicken Nuggets</h6>"
};

//Chicken Sandwich
if( wheat1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Chicken Sandwich</h6>"
};

//Kids Fries
if( soy1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Kids Fries</h6>"
};

//Homestyle Chicken Strips
if( eggs1 == 0 && wheat1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Homestyle Chicken Strips</h6>"
};


//WENDY'S
menuDisplay.innerHTML += "<h5>Wendy's</h5>";

//Cheeseburger
if( dairy1 == 0 && soy1 == 0 && wheat1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Cheeseburger</h6>"
};

//Grilled Chicken Wrap
if( dairy1 == 0 && eggs1 == 0 && wheat1 == 0 && soy1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Grilled Chicken Wrap</h6>"
};

//Hamburger
if( wheat1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Hamburger</h6>"
};

//Kids Fries
if( eggs1 == 0 && wheat1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Kids Fries</h6>"
};


//McDonalds
menuDisplay.innerHTML += "<h5>McDonald's</h5>";

//Cheeseburger
if( soy1 == 0 && wheat1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Cheeseburger</h6>"
};

//Hamburger
if( eggs1 == 0 && wheat1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Hamburger</h6>"
};

//Kids Fries
if( dairy1 == 0 && soy1 == 0 && wheat1 == 0 ) {
    menuDisplay.innerHTML += "<h6>Kids Fries</h6>"
};

//White Meat Chicken McNuggets
if( soy1 == 0 && wheat1 == 0 ) {
    menuDisplay.innerHTML += "<h6>White Meat Chicken Nuggets</h6>"
}
}

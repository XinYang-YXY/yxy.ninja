if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready);
} else{
  ready();
}

function ready(){
  //Tab Actions
  var tabs = document.getElementsByClassName("tabButton");
  for(var i = 0; i< tabs.length; i++){
    tabs[i].addEventListener("click", displayItems);
  }
  //Tab Actions

  //Go to cart button
  var goToShoppingCart = document.getElementsByClassName("goToShoppingCart")[0];
  goToShoppingCart.addEventListener("click", showShoppingCart);
  //Go to cart button

  //Go Back Button
  var goBack = document.getElementsByClassName("goBack")[0];
  goBack.addEventListener("click", showShoppingItems);
  //Go Back Button


  //Checkout Button
  var checkout = document.getElementsByClassName("checkout")[0];
  checkout.addEventListener("click", justFourSweetie);

  //Checkout Button
}

function justFourSweetie(event){
  alert("Sweetie, you are cute 💖 ;)");
}

//Go To Cart
function showShoppingCart(event){
  //HIde the shopping items
  document.getElementsByClassName("sellingItems")[0].style.display = "none";
  document.getElementsByClassName("itemsAvailable")[0].style.display = "none";
  document.getElementsByClassName("goToShoppingCart")[0].style.display = "none";
  //HIde the shopping items

  //Display shopping cart
  document.getElementsByClassName("shoppingCart")[0].style.display = "block";
  document.getElementsByClassName("goBack")[0].style.display = "block";
  document.getElementsByClassName("checkout")[0].style.display = "block";
  //Display shopping cart
}
//Go Back
function showShoppingItems(event){
  //Display the shopping items
  document.getElementsByClassName("sellingItems")[0].style.display = "block";
  document.getElementsByClassName("itemsAvailable")[0].style.display = "block";
  document.getElementsByClassName("goToShoppingCart")[0].style.display = "block";
  //Display the shopping items

  //Hide shopping cart
  document.getElementsByClassName("shoppingCart")[0].style.display = "none";
  document.getElementsByClassName("goBack")[0].style.display = "none";
  document.getElementsByClassName("checkout")[0].style.display = "none";
  //Hide shopping cart
}

function displayItems(event){
  //Get the item Page Name
  var button = event.target;
  subPageName = button.value;

  //Making sure only one subPage is displayed
  var subPages = document.getElementsByClassName("subPage");
  for(var i=0; i< subPages.length; i++){
    subPages[i].style.display = "none";
  }

  document.getElementsByClassName(subPageName)[0].style.display = "block"; //Display the page that is required
  //Making sure only one subPage is displayed


}

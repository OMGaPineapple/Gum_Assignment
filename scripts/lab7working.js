var shoppingCart = (function(){
  return {
    myMethod: function(){
        console.log("Random stuffs");
  } 
};
})();

shoppingCart.myMethod();



var item = 0;
var price = 0;
total.innerHTML = price;
amount.innerHTML = item;

/*var gumBrands =
    [{brand:"Extra", price: 1.25},
    {brand:"Double Mint", price: 1.00},
    {brand:"Trident", price: 2.00},
    {brand: "Generic Bubble Gum", price: 0.25}];*/

function addPrice(gumType)
{
    var amount = document.getElementById("amount");
    var total = document.getElementById("total");

        if(gumType == "Extra"){
            price = price + 1.25;
            total.innerHTML = "$" + price;

            item++; 
            amount.innerHTML = item;
        }
        else if(gumType == "Double_Mint"){
            price = price + 1.00;
            total.innerHTML = "$" + price;

            item++; 
            amount.innerHTML = item;  
        }
        else if(gumType == "Trident"){
            price = price + 2.00;
            total.innerHTML = "$" + price;

            item++; 
            amount.innerHTML = item;  
        }
        else if(gumType == "Bubble_Gum"){
            price = price + 0.25;
            total.innerHTML = "$" + price;

            item++; 
            amount.innerHTML = item;  
        }
}

function clear()
{
    item = 0;
    amount.innerHTML = item;
    price = 0;
    total.innerHTML = price;
}


document.getElementById("Extra").addEventListener("click", function() {
    gumType = "Extra";
    addPrice(gumType);   
});

document.getElementById("Double_Mint").addEventListener("click", function() {
    gumType = "Double_Mint";
    addPrice(gumType);   
});

document.getElementById("Trident").addEventListener("click", function() {
    gumType = "Trident";
    addPrice(gumType);    
});

document.getElementById("Bubble_Gum").addEventListener("click", function() {
    gumType = "Bubble_Gum";
    addPrice(gumType);    
});

document.getElementById("clear_button").addEventListener("click", function() {
    clear();    
});

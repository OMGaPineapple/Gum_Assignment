var shoppingCart = (function(){
    
var gumBrands =
    [
    {brand: "Extra", price: 1.25},
    {brand: "Double_Mint", price: 1.00},
    {brand: "Trident", price: 2.00},
    {brand: "Bubble_Gum", price: 0.25}
    ];
    
    return{
        
        addPrice:addPrice = function(gumType){
            
        var amount = document.getElementById("amount");
        var total = document.getElementById("total");
            
            for(i = 0; i < 4; i++)
                {
                    if(gumType == gumBrands[i].brand)
                        {
                            price = price + gumBrands[i].price
                            total.innerHTML = "$" + price;

                            item++; 
                            amount.innerHTML = item;
                        }
                }
        },

        clearPrice: clearPrice = function(){
            item = 0;
            amount.innerHTML = item;
            price = 0;
            total.innerHTML = price;
        
      } 
    };
}
)();

shoppingCart.addPrice();
shoppingCart.clearPrice();

var item = 0;
var price = 0;
total.innerHTML = price;
amount.innerHTML = item;

document.getElementById("Extra").addEventListener("click", function() {
    gumType = "Extra";
    shoppingCart.addPrice(gumType);   
});

document.getElementById("Double_Mint").addEventListener("click", function() {
    gumType = "Double_Mint";
    shoppingCart.addPrice(gumType);   
});

document.getElementById("Trident").addEventListener("click", function() {
    gumType = "Trident";
    shoppingCart.addPrice(gumType);    
});

document.getElementById("Bubble_Gum").addEventListener("click", function() {
    gumType = "Bubble_Gum";
    shoppingCart.addPrice(gumType);    
});

document.getElementById("clear_button").addEventListener("click", function() {
    clearPrice();    
});

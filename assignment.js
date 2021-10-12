

// problem --01
// solved:
function seerToMon(seers){
    // Error handling
    if(typeof seers == 'string'){
        return 'please enter the number.';
    }
    if(seers < 0){
        return 'Enter the positive number.';
    }
    
    // mon calculation
    const monCount = seers / 40;
    return monCount;
}
// function call 

// const mySeer = seerToMon(-1600);
// const mySeer = seerToMon('saba');
// const mySeer = seerToMon(1600);
// console.log(mySeer);



// problem--2
// solved:
function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    // Error handling
    if((shirtQuantity < 0) || (pantQuantity < 0) || (shoeQuantity < 0)){
        return 'Enter the positive number';
    }
    if((typeof shirtQuantity == 'string') || (typeof pantQuantity == 'string') || (typeof shoeQuantity == 'string')){
        return 'Please enter the  number.';
    }
    // Per pieces product price
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    // product price calculation
    const shirtPriceQuantity = perShirtPrice * shirtQuantity;
    const pantPriceQuantity = perPantPrice * pantQuantity;
    const shoePriceQuantity = perShoePrice * shoeQuantity;
    const totalAmount = shirtPriceQuantity + pantPriceQuantity + shoePriceQuantity;
    return totalAmount;
}
// function call 

// const myshopping = totalSales("shirt",2,5);
// const myshopping = totalSales(-1,-2,-5);
// const myshopping = totalSales(1,2,5);
// console.log(myshopping);




// problem--3
// solved:
function deliveryCost(products){
    // Error handling
    if(typeof products == 'string'){
       return 'please enter the number';
   }
   if(products < 0){
       return 'Enter the positive number';
   }
   // Delivery charge 
   const lessThan100Pieces = 100;
   const lessThan200Pieces = 80;
   const moreThan200Pieces = 50;
   // Delivery charge calculation
   if(products <= 100){
       const  lessThan100PiecesCost = products * lessThan100Pieces;
       return lessThan100PiecesCost ;
   }
   else if(products <= 200){
       const lessThan100PiecesAmount = 100 * lessThan100Pieces;
       const remainingAfter100 = products - 100;
       const lessThan200PiecesCost = remainingAfter100 * lessThan200Pieces;
       const totalCost = lessThan200PiecesCost + lessThan100PiecesAmount;
       return totalCost ;
   }
   else{
       const lessThan100PiecesAmount = 100 * lessThan100Pieces;
       const lessThan200PiecesAmount = 100 * lessThan200Pieces;
       const restProduct = products - 200;
       const moreThan200PiecesCost = restProduct * moreThan200Pieces;
       const totalAmountCost = lessThan200PiecesAmount + lessThan100PiecesAmount +moreThan200PiecesCost;
       return totalAmountCost;
   }
 }
 // function call 

//   console.log(deliveryCost(-201));
//   console.log(deliveryCost('saba'));
//   console.log(deliveryCost(235));




// problem--04
// solved:
function perfectFriend(friends){
    // Error handling
    if(typeof friends  == 'number'){
       return 'Please enter your friends list.';
   }
   if(typeof friends =='string'){
       return 'Enter the your friends array';
   }
   // calculation
   for (const friend of friends){
       if(friend.length == 5){
           return friend;
       }
   }
}
// function call 

// console.log(perfectFriend('shahadat'));
// console.log(perfectFriend(75687));
// console.log(perfectFriend(['shahadat','saba','robin','rakib','hossain']));
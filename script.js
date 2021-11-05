// First, tell us your name
let yourName = "Ayda Mkaddem" // HINT: Replace this with your own name!
document.getElementById('credit').textContent = `Created by ${yourName}`
// Gingercookie count

function updateQuantity(displayQuantity) 
{ let quantitygb = document.getElementById('qty-gb') 
console.log(quantitygb)
 quantitygb.innerHTML= displayQuantity}

 function updateQuantityforAll(displayQuantityTotal) 
{ let quantityAll= document.getElementById('qty-total') 
console.log(quantityAll)
 quantityAll.innerHTML= displayQuantityTotal}
 
 
 let quantitygb = 0

 let quantityAll= 0



// Buttons
const quantDown = document.getElementById('minus-gb')
const quantUp = document.getElementById('add-gb')



// add event listener to decrease quantity

quantDown.addEventListener('click', function()
{ if (quantitygb > 0) 
    { quantitygb-- 
    quantityAll-- }
    updateQuantity(` ${quantitygb}`)

      updateQuantityforAll(` ${quantityAll}`)})

// add event listener to increase quantity

quantUp.addEventListener('click', function()
{ quantitygb++
    quantityAll++
 updateQuantity(` ${quantitygb}`)
 updateQuantityforAll(` ${quantityAll}`)})

 








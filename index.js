let minusCutlet = document.getElementById("minus-cutlet");
let plusCutlet = document.getElementById("plus-cutlet");

let minusMayo = document.getElementById("minus-mayo");
let plusMayo = document.getElementById("plus-mayo");

let minusOnion = document.getElementById("minus-onion");
let plusOnion = document.getElementById("plus-onion");

let minusTomato = document.getElementById("minus-tomato");
let plusTomato = document.getElementById("plus-tomato");

let minusCucumber = document.getElementById("minus-cucumber");
let plusCucumber = document.getElementById("plus-cucumber");

let minusCheese = document.getElementById("minus-cheese");
let plusCheese = document.getElementById("plus-cheese");

let minusSalad = document.getElementById("minus-salad");
let plusSalad = document.getElementById("plus-salad");

let minusBun = document.getElementById("minus-bun");
let plusBun = document.getElementById("plus-bun");

//Disabled for minus
let minusIngredients = document.querySelectorAll('.minus')
for(let i=0; i<=minusIngredients.length-1;i++){
    minusIngredients[i].setAttribute('disabled', '')
}

let price = document.getElementById("price");
let dollars = 0

let weight = document.getElementById("weight");
let oz = 0

let time = document.getElementById("time");
let minutes = 0

let kcal = document.getElementById("kcal");
let kcalNum = 0

let amountCutlet = document.getElementById("amount-cutlet");
let amountNumCutlet = 0

let amountMayo = document.getElementById("amount-mayo");
let amountNumMayo = 0

let amountOnion = document.getElementById("amount-onion");
let amountNumOnion = 0

let amountTomato = document.getElementById("amount-tomato");
let amountNumTomato = 0

let amountCucumber = document.getElementById("amount-cucumber");
let amountNumCucumber = 0

let amountCheese = document.getElementById("amount-cheese");
let amountNumCheese = 0

let amountSalad = document.getElementById("amount-salad");
let amountNumSalad = 0

let amountBun = document.getElementById("amount-bun");
let amountNumBun = 0


let ketchup = document.getElementById("ketchup");
let ketchupImg = document.querySelector(".ketchup-img");
ketchup.addEventListener('click', function (){
    add(1,1.2,3,1)
    ketchupImg.style.display='block'
});

let layers = document.getElementsByClassName('.burger_layer')
let burger = document.querySelector(".burger");
let elem = ''

plusCutlet.addEventListener('click', function (){
    add(5,  1,100, 1)
    amountNumCutlet+=1
    amountCutlet.textContent = `${amountNumCutlet}`;
    minusCutlet.removeAttribute('disabled')
    let ing = 'cutlet'
    addImg(ing)
    disable()
})

plusMayo.addEventListener('click', function (){
    add(2,  2,10, 1)
  amountNumMayo+=1
  amountMayo.textContent = `${amountNumMayo}`;
  minusMayo.removeAttribute('disabled')
    let ing = 'mayo'
    addImg(ing)
    disable()
    elem.classList.add('less-size-mayo')
})

plusOnion.addEventListener('click', function (){
    add(3,  5,20, 1)
    amountNumOnion+=1
    amountOnion.textContent = `${amountNumOnion}`;
    minusOnion.removeAttribute('disabled')
    let ing = 'onion'
    addImg(ing)
    disable()
    elem.classList.add('less-size')
})

plusTomato.addEventListener('click', function (){
    add(1,  5,3, 1)
    amountNumTomato+=1
    amountTomato.textContent = `${amountNumTomato}`;
    minusTomato.removeAttribute('disabled')
    let ing = 'tomatoe'
    addImg(ing)
    disable()
    elem.classList.add('less-size')
})

plusCucumber.addEventListener('click', function (){
    add(1,  7,4, 1)
    amountNumCucumber+=1
    amountCucumber.textContent = `${amountNumCucumber}`;
    minusCucumber.removeAttribute('disabled')
    let ing = 'cucumber'
    addImg(ing)
    disable()
    elem.classList.add('less-size')
    elem.id = 'less-size-cucumber';
})

plusCheese.addEventListener('click', function (){
    add(2,  3,10, 1)
    amountNumCheese+=1
    amountCheese.textContent = `${amountNumCheese}`;
    minusCheese.removeAttribute('disabled')
    let ing = 'cheese'
    addImg(ing)
    disable()
    elem.classList.add('less-size-cheese')
})

plusSalad.addEventListener('click', function (){
    add(1,  4,1, 1)
    amountNumSalad+=1
    amountSalad.textContent = `${amountNumSalad}`;
    minusSalad.removeAttribute('disabled')
    let ing = '2salad'
    addImg(ing)
    disable()
    elem.id='less-size-salad'
})

plusBun.addEventListener('click', function (){
    add(5,  5,50, 2)
    amountNumBun+=1
    amountBun.textContent = `${amountNumBun}`;
    minusBun.removeAttribute('disabled')
    let ing = 'bun_middle'
    addImg(ing)
    disable()
})

minusCutlet.addEventListener('click', function (){
    remove(5,1,100,1)
    if(amountNumCutlet===1){
     amountNumCutlet=0
        minusCutlet.setAttribute('disabled', '')
    }else{
        minusCutlet.removeAttribute('disabled')
        amountNumCutlet-=1
    }
    document.querySelector('.amount').textContent = `${amountNumCutlet}`;
   if(burger.children.length<=25){
   plusCutlet.removeAttribute('disabled')
    }
    let ing = 'cutlet'
    deleteImg(ing)
    disable()

})

minusMayo.addEventListener('click', function (){
   remove(2,  2,10, 1)
   if(amountNumMayo<=1){
      amountNumMayo=0
        minusMayo.setAttribute('disabled', '')
  }else{
        amountNumMayo-=1
   }
    if(burger.children.length<=25){
        plusMayo.removeAttribute('disabled')
    }
    amountMayo.textContent = `${amountNumMayo}`;
   let ing='mayo'
    deleteImg(ing)
    disable()
})

minusOnion.addEventListener('click', function (){
    remove(3,5,20,1)
    if(amountNumOnion===1){
        amountNumOnion=0
        minusOnion.setAttribute('disabled', '')
    }else{
        minusOnion.removeAttribute('disabled')
        amountNumOnion-=1
    }
    amountOnion.textContent = `${amountNumOnion}`;
    let ing = 'onion'
    deleteImg(ing)
    disable()
})

minusTomato.addEventListener('click', function (){
    remove(1,5,3,1)
    if(amountNumTomato===1){
        amountNumTomato=0
        minusTomato.setAttribute('disabled', '')
    }else{
        minusTomato.removeAttribute('disabled')
        amountNumTomato-=1
    }
    amountTomato.textContent = `${amountNumTomato}`;
    let ing = 'tomatoe'
    deleteImg(ing)
    disable()
})

minusCucumber.addEventListener('click', function (){
    remove(1,7,4,1)
    if(amountNumCucumber===1){
        amountNumCucumber=0
        minusCucumber.setAttribute('disabled', '')
    }else{
        minusCucumber.removeAttribute('disabled')
        amountNumCucumber-=1
    }
    amountCucumber.textContent = `${amountNumCucumber}`;
    let ing = 'cucumber'
    deleteImg(ing)
    disable()
})

minusCheese.addEventListener('click', function (){
    remove(2,3,10,1)
    if(amountNumCheese===1){
        amountNumCheese=0
        minusCheese.setAttribute('disabled', '')
    }else{
        minusCheese.removeAttribute('disabled')
        amountNumCheese-=1
    }
    amountCheese.textContent = `${amountNumCheese}`;
    let ing = 'cheese'
    deleteImg(ing)
    disable()
})

minusSalad.addEventListener('click', function (){
    remove(1,4,1,1)
    if(amountNumSalad===1){
        amountNumSalad=0
        minusSalad.setAttribute('disabled', '')
    }else{
        minusSalad.removeAttribute('disabled')
        amountNumSalad-=1
    }
    amountSalad.textContent = `${amountNumSalad}`;
    let ing = '2salad'
    deleteImg(ing)
    disable()
})

minusBun.addEventListener('click', function (){
    remove(5,5,50,2)
    if(amountNumBun===1){
        amountNumBun=0
        minusBun.setAttribute('disabled', '')
    }else{
        minusBun.removeAttribute('disabled')
        amountNumBun-=1
    }
    amountBun.textContent = `${amountNumBun}`;
    let ing = 'bun_middle'
    deleteImg(ing)
    disable()
})

function add (valueMinutes, valueOz,valueKcal, valuePrice){
    minutes += valueMinutes
    document.querySelector('.time').textContent = `${minutes} min`;
    oz +=valueOz
    document.querySelector('.weight').textContent = `${oz.toFixed(1).replace(/[,.]?0+$/, '')
    } oz`;
    kcalNum+=valueKcal
    document.querySelector('.kcal').textContent = `${kcalNum} kcal`;
    dollars+=valuePrice
    document.querySelector('.dollars').textContent = ` $ ${dollars} `;
}

function remove(valueMinutes,  valueOz,valueKcal, valuePrice){
    if(minutes<=0 || oz<=0 || kcalNum<=0 || dollars<=0 ) {
     minutes=0
     oz=0
     kcalNum=0
     dollars=0
     minusCutlet.setAttribute('disabled', '')
}else{
    minutes -= valueMinutes
    oz-=valueOz
    kcalNum-=valueKcal
    dollars-=valuePrice
  }
   document.querySelector('.time').innerHTML = `${minutes} min`;
   document.querySelector('.weight').innerHTML = `${oz.toFixed(1)} oz`;
   document.querySelector('.kcal').innerHTML = `${kcalNum} kcal`;
   document.querySelector('.dollars').textContent = ` $ ${dollars}`;
}

function deleteImg(ing){
    let test = document.querySelectorAll('.burger_layer');
    for (let i=0; i<=test.length; i++){
        if(test[i].innerHTML === `<img src=\"img/${ing}-ing.svg\" alt=\"\">`){
            test[i].remove()
            break
        }
    }
}

function addImg(ing){
        elem = document.createElement("div");
        elem.className = "burger_layer";
        elem.innerHTML = `<img src=\"img/${ing}-ing.svg\" alt=\"\">`;
        burger.prepend(elem)
    }

function changeAmount(amountNum, amountDiv, minus){
    amountNum+=1
    amountDiv.textContent = `${amountNum}`;
    minus.removeAttribute('disabled')
}

function disable(){
    let plusIngredients = document.querySelectorAll('.plus')
    let sureElem = document.querySelector('.sure-element')
    for(let i=0; i<=plusIngredients.length-1;i++){
    if(burger.children.length>=25) {
        plusIngredients[i].setAttribute('disabled', '')
        sureElem.style.display='block'

    }else{
        plusIngredients[i].removeAttribute('disabled')
        sureElem.style.display='none'
    }}
    }

let checkoutBtn = document.querySelector('.checkout-btn')
let card = document.querySelector('.card')
let close = document.querySelector('.close')
let cancel = document.querySelector('.btn-cancel')
let accept = document.querySelector('.btn-accept')
let wrapper = document.querySelector('.wrapper')
let dark =document.getElementById('dark')

checkoutBtn.addEventListener('click', function () {
    card.style.display = 'block'
    card.style.visibility = 'visible'
    card.style.opacity = '2'
    dark.className = "dark";
})

close.addEventListener('click', function () {
    hideCard ()
})

//Close checkout with escape
document.addEventListener('keydown', function(e) {
    if( e.keyCode == 27 ){
        hideCard ()
    }
});

cancel.addEventListener('click', function () {
    hideCard ()
})

function hideCard (){
    card.style.display = 'none'
    card.style.visibility = 'hidden'
    dark.classList.remove("dark");
}

//Checkout btn
let form =document.getElementById('form')
form.addEventListener('change', changeFormHandler);
function changeFormHandler() {
    if (form.checkValidity()) {
        accept.removeAttribute('disabled');
        accept.addEventListener('click', function () {
   alert('Your order was sent for assembly')
})
    }
}

//Time checkout
const select = document.getElementById('dateInput')
let hours = []
let minutesSelect = []
let innerHours = ``
let innerMinutes = ``
let inner = ``
for(let i=0; i<=23; i++){
    hours.push(i)
}
for(let i=0; i<=55; i++){
    if(i%5=== 0){
        minutesSelect.push(i)
    }
}

for (let i = 0; i <= hours.length - 1; i++) {
        countHours(i)
    }

function countHours(numberOfHours){
    for(let i=0; i<=minutesSelect.length-1; i++){
        minutesSelect[0]=`00`
        minutesSelect[1]=`05`
        if(numberOfHours.toString().length-1===1){
            minutesSelect[0]=`00`
            minutesSelect[1]=`05`
            inner += `<option>${hours[numberOfHours]}:${minutesSelect[i]}</option>`
            select.innerHTML = `<option selected disabled>Time to Delivery</option>`+ inner
        }else{
            inner += `<option>0${hours[numberOfHours]}:${minutesSelect[i]}</option>`
            select.innerHTML = `<option selected disabled>Time to Delivery</option>`+ inner
        }
    }
}

//Show menu
let burgerLink = document.querySelector('.burger-link')
let main = document.querySelector('main')
let ingredients = document.querySelector('.ingredients')
let footer = document.querySelector('footer')
let adaptiveBlock = document.querySelector('.adaptive-block')

burgerLink.addEventListener('click', function (){
    main.classList.toggle("none-display");
    ingredients.classList.toggle("none-display");
    footer.classList.toggle("none-display");
    adaptiveBlock.classList.toggle("block-display");
    burgerLink.classList.toggle("toggle-btn");
})

//Adaptive
window.addEventListener('resize', move);
function move(){
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 769) {
        document.querySelector('.title').innerHTML = "Make <br> your burger";
    }
}

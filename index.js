let minusCutlet = document.getElementById("minus-cutlet");
let plusCutlet = document.getElementById("plus-cutlet");
minusCutlet.setAttribute('disabled', '')

let minusMayo = document.getElementById("minus-mayo");
let plusMayo = document.getElementById("plus-mayo");
minusMayo.setAttribute('disabled', '')

let minusOnion = document.getElementById("minus-onion");
let plusOnion = document.getElementById("plus-onion");
minusOnion.setAttribute('disabled', '')

let minusTomato = document.getElementById("minus-tomato");
let plusTomato = document.getElementById("plus-tomato");
minusTomato.setAttribute('disabled', '')

let minusCucumber = document.getElementById("minus-cucumber");
let plusCucumber = document.getElementById("plus-cucumber");
minusCucumber.setAttribute('disabled', '')

let minusCheese = document.getElementById("minus-cheese");
let plusCheese = document.getElementById("plus-cheese");
minusCheese.setAttribute('disabled', '')

let minusSalad = document.getElementById("minus-salad");
let plusSalad = document.getElementById("plus-salad");
minusSalad.setAttribute('disabled', '')

let minusBun = document.getElementById("minus-bun");
let plusBun = document.getElementById("plus-bun");
minusBun.setAttribute('disabled', '')

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
ketchup.addEventListener('click', function (){
    add(1,1.2,3,1)
});

let layers = document.getElementsByClassName('.burger_layer')
let burger = document.querySelector(".burger");




plusCutlet.addEventListener('click', function (){

    add(5,  1,100, 1)
   amountNumCutlet+=1
  amountCutlet.textContent = `${amountNumCutlet}`;
    minusCutlet.removeAttribute('disabled')
    console.log(layers.length)

    console.log(layers.length)

        let elem = document.createElement("div");
        elem.className = "burger_layer";
        elem.innerHTML = "<img src=\"img/cutlet-ing.svg\" alt=\"\">";
        console.log(elem)
            // let burger = document.querySelector(".burger");
        burger.prepend(elem)
        console.log(layers)
        console.log(elem.length)
    if(burger.children.length===14){
        plusCutlet.setAttribute('disabled', '')
    }else{
        plusCutlet.removeAttribute('disabled')
    }

  /*  document.querySelector('.burger_layer_17').innerHTML = `<img src="img/cutlet-ing.svg" alt="">`;
    document.querySelector('.burger_layer_16').innerHTML = `<img src="img/cutlet-ing.svg" alt="">`;
    document.querySelector('.burger_layer_15').innerHTML = `<img width="121"  height="52" src="img/cucumber-ing.svg" alt="">`;
    document.querySelector('.burger_layer_14').innerHTML = `<img src="img/mayo-ing.svg" alt="">`;
    document.querySelector('.burger_layer_13').innerHTML = `<img src="img/cutlet-ing.svg" alt="">`;
    document.querySelector('.burger_layer_12').innerHTML = `<img src="img/bun_middle-ing.svg" alt="">`;
    document.querySelector('.burger_layer_11').innerHTML = `<img src="img/cutlet-ing.svg" alt="">`;
    document.querySelector('.burger_layer_10').innerHTML = `<img src="img/cheese-ing.svg" alt="">`;
    document.querySelector('.burger_layer_9').innerHTML = `<img src="img/cutlet-ing.svg" alt="">`;
    document.querySelector('.burger_layer_8').innerHTML = `<img src="img/salad-ing.svg" alt="">`;
    document.querySelector('.burger_layer_7').innerHTML = `<img src="img/cutlet-ing.svg" alt="">`;
    document.querySelector('.burger_layer_6').innerHTML = `<img src="img/tomatoe-ing.svg" alt="">`;
    document.querySelector('.burger_layer_5').innerHTML = `<img src="img/cutlet-ing.svg" alt="">`;
    document.querySelector('.burger_layer_4').innerHTML = `<img src="img/onion-ing.svg" alt="">`;
    document.querySelector('.burger_layer_3').innerHTML = `<img src="img/cutlet-ing.svg" alt="">`;
    document.querySelector('.burger_layer_2').innerHTML = `<img src="img/cutlet-ing.svg" alt="">`;*/
})



plusMayo.addEventListener('click', function (){
    add(2,  2,10, 1)
  amountNumMayo+=1
  amountMayo.textContent = `${amountNumMayo}`;
  minusMayo.removeAttribute('disabled')
      //
    let elem = document.createElement("div");
    elem.className = "burger_layer";
    elem.innerHTML = "<img src=\"img/mayo-ing.svg\" alt=\"\">";
    console.log(elem)
    let burger = document.querySelector(".burger");
    burger.prepend(elem)
    console.log(layers)
    console.log(elem.length)





})

plusOnion.addEventListener('click', function (){
    add(3,  5,20, 1)
    amountNumOnion+=1
    amountOnion.textContent = `${amountNumOnion}`;
    minusOnion.removeAttribute('disabled')

})

plusTomato.addEventListener('click', function (){
    add(1,  5,3, 1)
    amountNumTomato+=1
    amountTomato.textContent = `${amountNumTomato}`;
    minusTomato.removeAttribute('disabled')
})

plusCucumber.addEventListener('click', function (){
    add(1,  7,4, 1)
    amountNumCucumber+=1
    amountCucumber.textContent = `${amountNumCucumber}`;
    minusCucumber.removeAttribute('disabled')
})

plusCheese.addEventListener('click', function (){
    add(2,  3,10, 1)
    amountNumCheese+=1
    amountCheese.textContent = `${amountNumCheese}`;
    minusCheese.removeAttribute('disabled')
})

plusSalad.addEventListener('click', function (){
    add(1,  4,1, 1)
    amountNumSalad+=1
    amountSalad.textContent = `${amountNumSalad}`;
    minusSalad.removeAttribute('disabled')
})

plusBun.addEventListener('click', function (){
    add(5,  5,50, 2)
    amountNumBun+=1
    amountBun.textContent = `${amountNumBun}`;
    minusBun.removeAttribute('disabled')
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

    if(burger.children.length<=14){
        plusCutlet.removeAttribute('disabled')
    }

})

minusMayo.addEventListener('click', function (){
   remove(2,  2,10, 1)
   if(amountNumMayo<=1){
      amountNumMayo=0
        minusMayo.setAttribute('disabled', '')
  }else{
      minusMayo.removeAttribute('disabled')
        amountNumMayo-=1
   }
    amountMayo.textContent = `${amountNumMayo}`;
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
})

function add (valueMinutes, valueOz,valueKcal, valuePrice){

 minutes += valueMinutes
 document.querySelector('.time').textContent = `${minutes} min`;
 oz +=valueOz
 document.querySelector('.weight').textContent = `${oz} oz`;
    kcalNum+=valueKcal
    document.querySelector('.kcal').textContent = `${kcalNum} kcal`;
   dollars+=valuePrice
    document.querySelector('.dollars').textContent = ` $ ${dollars} `;
}

function remove(valueMinutes,  valueOz,valueKcal, valuePrice){
  //if(minutes<=valueMinutes || oz<=valueOz || kcalNum<=valueKcal || dollars<=valuePrice ) {
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
   document.querySelector('.weight').innerHTML = `${oz} oz`;
   document.querySelector('.kcal').innerHTML = `${kcalNum} kcal`;
   document.querySelector('.dollars').textContent = ` $ ${dollars}`;
}
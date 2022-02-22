var inputBill =  document.getElementById("input");
var inputPeople = document.getElementById("input2");
var tipAmount = document.querySelector(".f-c-2 h1");
var total = document.querySelector(".s-c-2 h1");
var reset = document.querySelector(".reset");


// click on persent button
for(var i=0 ; i<5 ; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        for(var j=0;j<5;j++){
            if(document.querySelectorAll(".btn")[j].classList.contains("btn-active")){
                document.querySelectorAll(".btn")[j].classList.remove("btn-active")
            }
        }
        // this.classList.add("btn-active")
        if(inputBill.value && inputPeople.value ){
            custom.value="custom";
            this.classList.add("btn-active")
            calculateBill(inputBill.value,inputPeople.value,this.innerHTML);
        }       
    })
}


// exp
// for(var i=0;i<5;i++){
//     document.querySelectorAll(".btn")[i].addEventListener("click",(e)=>{

//         console.log(e.target.innerHTML)
//         if(inputBill.value && inputPeople.value){
//             // console.log(e.target)
//             // e.classList.add("btn-active")
//             calculateBill(inputBill.value,inputPeople.value,e.target.innerHTML);
//         }
//     })
// }


// exp


// this is for custom tip percent input
var custom = document.querySelector(".custom-input");
custom.addEventListener("input",(e)=>{
    for(var j=0;j<5;j++){
        if(document.querySelectorAll(".btn")[j].classList.contains("btn-active")){
            document.querySelectorAll(".btn")[j].classList.remove("btn-active")
        }
    }
    reset.classList.add("reset-active");
    if(inputBill.value && inputPeople.value ) {
        calculateBill(inputBill.value,inputPeople.value,e.target.value);
    }
})

// this is for input bill
inputBill.addEventListener("input",(e)=>{
    reset.classList.add("reset-active");
    for(var j=0;j<5;j++){
        if(document.querySelectorAll(".btn")[j].classList.contains("btn-active")){
            document.querySelectorAll(".btn")[j].classList.remove("btn-active")
        }
    }
    if(custom.value && inputPeople.value )
    calculateBill(custom.value,inputPeople.value,e.target.value);
})

// this is fot input people
inputPeople.addEventListener("input",(e)=>{
    reset.classList.add("reset-active");
    for(var j=0;j<5;j++){
        if(document.querySelectorAll(".btn")[j].classList.contains("btn-active")){
            document.querySelectorAll(".btn")[j].classList.remove("btn-active")
        }
    }
    if(inputBill.value && custom.value )
    calculateBill(inputBill.value,custom.value,e.target.value);
})

// bill calculation
function calculateBill( bill,people,tip ){

    reset.classList.add("reset-active");
    bill=Number(bill)
    people=Number(people)
    tip=parseInt(tip)
    // console.log(tip)
    var x = ( (bill/ people) * (tip/100) ) .toFixed(2) ;    
    var y = ( (bill/ people) + Number(x) ) .toFixed(2)  ; 

   if ( isNaN(x) ) {
    tipAmount.innerHTML = "0.00";
    total.innerHTML = "0.00";
       
   }
   else{
    tipAmount.innerHTML = x;
    total.innerHTML = y;
   }
 
}


reset.addEventListener("click",function(){
    inputBill.value=0;
    inputPeople.value=0;
    custom.value="custom";
    tipAmount.innerHTML = "0.00";
    total.innerHTML = "0.00";
    
    reset.classList.remove("reset-active");
    for(var j=0;j<5;j++){
        if(document.querySelectorAll(".btn")[j].classList.contains("btn-active")){
            document.querySelectorAll(".btn")[j].classList.remove("btn-active")
        }
    }

})



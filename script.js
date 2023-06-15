// alert("Bienvenu à notre nouveau site web!!");

var btnplus=document.querySelectorAll(".plus")

for(let i=0; i< btnplus.length;i++){
    btnplus[i].addEventListener("click",increment)

}
function increment(event){
    var cible=event.target
    
    var parent=cible.parentElement
    
    var count=Number(parent.querySelector("p").innerHTML)
    

    count++
    parent.querySelector("p").innerHTML=count
    var tr=parent.parentElement.parentElement
    
    var unitPrice=Number(tr.querySelector(".unitPrice").innerHTML)
    var price=count*unitPrice
    tr.querySelector(".price").innerHTML=price
    console.log(tr.querySelector(".unitPrice").innerHTML)
    total()
}


var btnminus=document.querySelectorAll(".minus")
for(let i=0; i< btnminus.length;i++){
    btnminus[i].addEventListener("click",decrement)
}
function decrement(event){
    var cible=event.target
    var parent=cible.parentElement
    var count=Number(parent.querySelector("p").innerHTML)
    count--
    if(count<0){
    count=0 
    }
    parent.querySelector("p").innerHTML=count
    var tr=parent.parentElement.parentElement
    var UnitPrice=Number(tr.querySelector(".unitPrice").innerHTML)
    var price=count*UnitPrice
    tr.querySelector(".price").innerHTML=price
    total()
}
var prices=document.querySelectorAll(".price")
function total(){
    var total=0
    for(let i=0;i<  prices.length;i++){
        total=total+Number(prices[i].innerHTML)
        document.querySelector("#total").innerHTML=total
    }
}
var btnDel=document.querySelectorAll('.delete')
for(let i=0;i < btnDel.length;i++){
    btnDel[i].addEventListener("click",del)
}
function del(event){
    var cible=event.target
    var tr=cible.parentElement.parentElement.parentElement.parentElement
    tr.querySelector("p").innerHTML=0
    tr.querySelector(".price").innerHTML=0
    total()
}
var btnLike=document.querySelectorAll(".like")
for(let i=0;i<btnLike.length;i++){
    btnLike[i].addEventListener("click",like)

}
function like(event){
    var cible=event.target
    console.log(cible)
    var parent=cible.parentElement
    console.log(parent)
    if(parent.style.color!="red"){
        parent.style.color="red"
    }else{
        parent.style.color="#424242"
    }
}



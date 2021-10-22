function choose(event , id){
    console.log("Provoked")
    let flagInputs = document.getElementById(id)
    let button = event.target
    let i = 0
    for (i=0;i<flagInputs.children.length;i++){
        flagInputs.children[i].style.backgroundColor = 'white'
        flagInputs.children[i].style.color = 'orange'
        if (button == flagInputs.children[i]){
            flagInputs.children[i-1].checked = true
        }
    }
    for (i=0;i<flagInputs.children.length;i++){
        if (flagInputs.children[i].checked){
            flagInputs.children[i+1].style.backgroundColor = 'orange'
            flagInputs.children[i+1].style.color = 'white'
        }
    }
}
function save(){
    document.getElementById("foodCanvas").style.backgroundColor='orange'
    document.querySelectorAll('.jiantou')[0].style.display = "none"
    document.querySelectorAll('.jiantou')[1].style.display = "none"
    let food = document.getElementById("food")
    food.style.width='90vw'
    food.style.height='90vh'
    food.style.marginLeft='10vw'
    let hide = document.querySelectorAll('.hide')
    for (let i of hide){
        i.className = 'no-hide'
        console.log(i)
    }
    
}
function save(){
    
}
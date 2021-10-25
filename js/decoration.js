function defaultChoice(){
    let flagInputsW = document.getElementById('will')
    
    for (let i=0;i<flagInputsW.children.length;i++){
        if (flagInputsW.children[i].checked){
            flagInputsW.children[i+1].style.backgroundColor = 'orange'
            flagInputsW.children[i+1].style.color = 'white'
        }
    }
    
    let flagInputsL = document.getElementById('map')
    for (let i=0;i<flagInputsL.children.length;i++){
        console.log(flagInputsL.children[i].checked)
        if (flagInputsL.children[i].checked){
            flagInputsL.children[i+1].style.backgroundColor = 'orange'
            flagInputsL.children[i+1].style.color = 'white'
        }
    }
}
defaultChoice()


function choose(event , id){
    // console.log("Provoked")
    let flagInputs = document.getElementById(id)
    let button = event.target
    let i = 0
    for (i=0;i<flagInputs.children.length;i++){
        flagInputs.children[i].style.backgroundColor = 'white'
        flagInputs.children[i].style.color ='rgba(0,0,0,0.5)'
        // flagInputs.children[i].style.color = 'orange'
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
    
    for (let i of document.getElementsByTagName('h1')){
        i.style.color = 'black'
    }
}

let preFoodCanvas
function save(){
    preFoodCanvas = JSON.stringify(document.getElementById('foodCanvas'))
    document.getElementById("foodCanvas").style.backgroundColor='orange'
    document.querySelectorAll('.jiantou')[0].style.display = "none"
    document.querySelectorAll('.jiantou')[1].style.display = "none"
    document.querySelectorAll('.jiantou')[2].style.display = "none"
    let food = document.getElementById("food")
    food.style.width='90vw'
    food.style.height='90vh'
    food.style.marginLeft='5vw'
    let hide = document.querySelectorAll('.hide')
    for (let i of hide){
        i.className = 'no-hide'
        // console.log(i)
    }
    
}

function closeShare(){
    // document.getElementById('foodCanvas').remove()
    // let myObject = JSON.parse(preFoodCanvas)
    // document.body.appendChild(myObject)
    document.getElementById("foodCanvas").style.backgroundColor='rgba(0,0,0,0.5)'
    document.querySelectorAll('.jiantou')[0].style.display = "block"
    document.querySelectorAll('.jiantou')[1].style.display = "inline-block"
    document.querySelectorAll('.jiantou')[2].style.display = "block"
    let food = document.getElementById("food")
    food.style.width='80vw'
    food.style.height='70vh'

    let hide = document.querySelectorAll('.no-hide')
    for (let i of hide){
        i.className = 'hide'
    }
}

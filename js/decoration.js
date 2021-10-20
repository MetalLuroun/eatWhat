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
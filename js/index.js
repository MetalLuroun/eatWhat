
let foodCounter = 0
let foodData = 0

let date = new Date();
date.setDate(date.getDate() - 1);
let willCookie = '';
willCookie += 'CookieName=Value';
willCookie += 'expires' + date.toUTCString();
document.cookie = willCookie;

function drawFood(counter= 0){
    let data = foodData
    
    if (foodCounter >= data.length){
        foodCounter = 0
    }
    if (foodCounter == 0){
       document.getElementById('pre').style.display = 'hide'
        
    }
    counter = foodCounter
    document.getElementById('foodCanvas').style.display = "flex"

    // console.log(counter)
    // let id = data[counter]['id']
    let name = data[counter]['name']
    let imgUrl = data[counter]['picUrls'][0]
    let location = data[counter]['locate']
    let rec = data[counter]['recommend']
    // document.getElementById('id').innerHTML = id
    // console.log(rec)
    document.getElementById('name').innerHTML = name
    document.getElementById('rec').innerHTML = rec
    document.getElementById('location').innerHTML ="坐标：" + location
    document.getElementById('foodimg').src = "http://" + imgUrl
}

function nextPic(){
    foodCounter++
    drawFood(foodCounter)
}
function  prePic(){
    foodCounter--
    drawFood(foodCounter)
}

function parseFood(data){
    data = JSON.parse(data)['data']
    foodData = data
    drawFood()
}

function getFoodChoice(sendReqCallBack) {
    // console.log('llll');
    let url = "http://49.234.185.235:9000/food/by_location_flag"
    let locInput = document.getElementsByClassName('location')
    let flagInput = document.getElementsByClassName('flag')
    let location , flag
    for (let i of locInput){
        if (i.checked){
            location = i.value
        }
    }
    for (i of flagInput){
        if (i.checked){
            flag = i.value
        }
    }
    url = url + '?location='+location+'&flag='+flag

    sendReqCallBack(url)
}

function sendFoodRequest(url){
    // console.log(url);
    let getFoodPromise = new Promise(function(resolve , reject){
        let req = new XMLHttpRequest()
        req.open('GET',url)
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.responseText)
            } else {
                reject('至少要选择一项哦')
            }
        }
        req.send()
    })
    getFoodPromise.then(
        function(data){parseFood(data)},
        function(error){alert(error)}
    )
}
function closeCanvas(event){
    let e = event.target
    e.style.display = 'none'
}

function generatePic(){
    // let foodCanvas = document.getElementById("foodCanvas")
    // foodCanvas.style.backgroundColor = "orange"
    return null
}

(function stopCatch(){
    let e = document.getElementById('foodCanvas')
    for(let i of e.children){
        i.addEventListener('click' , (event) => {
            event.stopPropagation();
        })
    }
}());


(function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        // 114.43
        // 114.39
        console.log('have Location')
    } else {
        console.log('No Location')
        defaultChoice()
    }
   
})()

function showPosition(position) {
    console.log('Location')
    let loc = document.querySelectorAll('#map input')
    console.log(loc)
    let l = position.coords.longitude
    console.log(l)
    if(l > 114.2){
        loc[2].checked = true
        console.log(loc[2].checked)
    }else if(l>114 & l <114.2){
        loc[1].checked = true
    }else{
        loc[0].checked = true
    }
    defaultChoice()
}

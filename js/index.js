let foodCounter = 0
let foodData = 0

function drawFood(foodCounter= 0){
    let data = foodData
    document.getElementById('foodCanvas').style.display = "flex"

    // document.getElementsByClassName('choice')[0].style.display = 'none'



    console.log(foodCounter)
    let id = data[foodCounter]['id']
    let name = data[foodCounter]['name']
    let imgUrl = data[foodCounter]['picUrls'][0]
    let location = data[foodCounter]['locate']
    let rec = data[foodCounter]['recommend']
    document.getElementById('id').innerHTML = id
    document.getElementById('name').innerHTML = name
    document.getElementById('rec').innerHTML = rec
    document.getElementById('location').innerHTML = location
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
    console.log('llll');
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
    console.log(url);
    let getFoodPromise = new Promise(function(resolve , reject){
        let req = new XMLHttpRequest()
        req.open('GET',url)
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.responseText)
            } else {
                reject(req.status + "Some Thing Wrong")
            }
        }
        req.send()
    })
    getFoodPromise.then(
        function(data){parseFood(data)},
        function(error){alert(error)}
    )
}


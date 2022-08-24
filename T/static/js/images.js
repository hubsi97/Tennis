currentElement=1
async function storeNewData() {
    try {
        data = await fetch("/get_json_files")
        json = await data.json()
        res = await json
        sessionStorage.setItem("files", res['files'])
    } catch {
        console.log("Connection Error")
    }
}

function populateImages(){
    imgs=document.getElementById("Images")
    files= sessionStorage.getItem("files").split(",")
    for (i=0;i<files.length;i++){
        image = document.createElement('img')
        image.setAttribute('src',files[i])
        image.style.display="None"
        image.style.maxWidth="1000px"
        image.style.maxHeight="425px"
        imgs.insertBefore(image,document.getElementsByClassName("image_switch")[1])
        if (i==0){image.style.display=""}
    }
}

function plusDivs(n){
    imgs=document.getElementById("Images")
    if (currentElement+n>0 && currentElement+n<imgs.childElementCount-1){
        currentElement+=n
        prevElem=currentElement-n
    }
    else if(currentElement+n<=0){
        currentElement=imgs.childElementCount-2
        prevElem=1
    }
    else if (currentElement+n>=imgs.childElementCount-1){
        currentElement=1
        prevElem=imgs.childElementCount-2
    }
    imgs.children[prevElem].style.display="None"
    imgs.children[currentElement].style.display=""
}

storeNewData()
populateImages()
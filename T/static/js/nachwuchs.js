async function storeNewData() {
    try {
        data = await fetch("/get_json_nw")
        json = await data.json()
        res = await json
        sessionStorage.setItem("nw", res['nw'])
    } catch {
        console.log("Connection Error")
    }
}
function populateNWs() {
    cards=document.getElementsByClassName("cards")[0]
    nws=sessionStorage.getItem("nw")
    nws=nws.split("\n\n\n")
    for (i=0;i<nws.length;i++){
        card = document.createElement('div')
        textarr = document.createElement('p')
        textarr.innerText=nws[i].trim()
        splited=textarr.innerHTML.split("<br><br>")
        splited[0]="<strong>"+splited[0]+"</strong>"
        splited[1]="<strong>"+splited[1].split(":")[0].trim()+": "+"</strong>"+splited[1].split(":")[1]
        splited[2]="<strong>"+splited[2]+"</strong>"
        textarr.innerHTML=splited.join("<br><br>")
        card.append(textarr)
        card.classList.add('card');
        cards.append(card)
    }
}
storeNewData()
populateNWs()
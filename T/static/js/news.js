async function storeNewData() {
    try {
        data = await fetch("/get_json_news")
        json = await data.json()
        res = await json
        sessionStorage.setItem("news", res['news'])
    } catch {
        console.log("Connection Error")
    }
}
function populateNews() {
    news_container=document.getElementsByClassName("news")[0]
    news=sessionStorage.getItem("news")
    news=news.split("\n\n")
    for (i=0;i<news.length;i++){
        new_news = document.createElement('div')
        textarr = document.createElement('p')
        textarr.innerText=news[i].trim()
        splited=textarr.innerHTML.split("<br>")
        splited[0]="<strong>"+splited[0]+"</strong>"
        textarr.innerHTML=splited.join("<br>")
        new_news.append(textarr)
        new_news.classList.add('news-item');
        news_container.append(new_news)
    }
}
storeNewData()
populateNews()
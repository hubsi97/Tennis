//async function checkRes(){
//    try {
//        data = await fetch("/get_json_platz")
//        json = await data.json()
//        res = await json
//    } catch {
//        console.log("Connection Error")
//    }
//}

function sentData(){
    data = document.getElementsByClassName("Choosen")[0].innerText
    $.ajax({
            url:"/get_json_platz",
            type:"POST",
            contentType: "application/json",
            data: JSON.stringify(data)})
}
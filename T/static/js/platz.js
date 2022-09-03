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
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            dataType: "json",
            success:successFunc});
}

function successFunc(response){
    pop_up=document.getElementById("pop-up")
    pop_up.style.animation = "pop-out 2s 2 ease-in";
    inner_pop_up=document.getElementById("inner-pop-up")
    if (response["platz"]==200){
        inner_pop_up.textContent="Platz erfolgreich gebucht"
        pop_up.style.backgroundColor="green"
        pop_up.style.display="inline"
    }
    else if (response["platz"]==300){
        inner_pop_up.textContent="Platz schon belegt"
        pop_up.style.backgroundColor="orange"
        pop_up.style.display="inline"
    }
    else if (response["platz"]==301){
        inner_pop_up.textContent="Start-Datum ist später als End-Datum"
        pop_up.style.backgroundColor="red"
        pop_up.style.display="inline"
    }
    else if (response["platz"]==302){
        inner_pop_up.textContent="Bitte Namen eingeben"
        pop_up.style.backgroundColor="red"
        pop_up.style.display="inline"
    }
    else if (response["platz"]==303){
        inner_pop_up.textContent="Bitte Email eingeben"
        pop_up.style.backgroundColor="red"
        pop_up.style.display="inline"
    }
    else if (response["platz"]==304){
        inner_pop_up.textContent="Bitte Datum eingeben"
        pop_up.style.backgroundColor="red"
        pop_up.style.display="inline"
    }
    setTimeout(function() { clean_pop_up() }, 5000);
}

function clean_pop_up(){
    pop_up=document.getElementById("pop-up")
    pop_up.style.display="none"
}
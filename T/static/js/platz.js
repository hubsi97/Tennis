async function checkRes(){
    try {
        data = await fetch("/get_json_platz")
        json = await data.json()
        res = await json
    } catch {
        console.log("Connection Error")
    }
}
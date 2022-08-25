// function make_calender(){
//     today = new Date();
//     content=document.getElementsByClassName("calender")[0]
//     weekdays_class=document.getElementsByClassName("weekdays")[0]
//     days=document.getElementsByClassName("days")[0]

//     const monthNames = ["Jannuar", "Februar", "März", "April", "Mai", "Juni",
//     "Juli", "August", "September", "Oktober", "November", "Dezember"];

//     const weekdays=["So","Mo","Di","Mi","Do","Fr","Sa"];

//     amountMonths=getDaysInMonth(today.getFullYear(),today.getMonth())
//     startMonth=getFirstDayOfMonth(today.getFullYear(),today.getMonth()).getDay()

//     weekdays_cor=weekdays.slice(startMonth).concat(weekdays.slice(0, startMonth));

//     for (i=0;i<weekdays_cor.length;i++){
//         li = document.createElement('li')
//         li.innerText=weekdays_cor[i]
//         weekdays_class.append(li)
//     }
    
//     div = document.createElement('div');
//     div.classList.add("header")
//     ul = document.createElement('ul');

//     li = document.createElement('button')
//     li.classList.add('prev');
//     li.innerText="<"

//     li2 = document.createElement('li')
//     li2.classList.add('curMonth');
//     li2.innerText=monthNames[today.getMonth()]+" "+today.getFullYear()

//     li3 = document.createElement('button')
//     li3.classList.add('next');
//     li3.innerText=">"

//     ul.append(li)
//     ul.append(li2)
//     ul.append(li3)

//     div.append(ul)

    

//     for (i=1;i<=amountMonths;i++){
//         li = document.createElement('button')
//         li.innerText=i
//         days.append(li)
//     }
//     content.insertBefore(div ,weekdays_class)
//     content.append(days)
// }

// function getDaysInMonth(year, month) {
//     return new Date(year, month, 0).getDate();
// }

// function getFirstDayOfMonth(year, month) {
//     return new Date(year, month, 1);
// }

function functionalities(){
    start_datum=document.getElementById('start_datum');
    end_datum=document.getElementById('end_datum');
    dropdown=document.getElementById('Dropdown');
    textarea=document.getElementById('name');
    email=document.getElementById('email');

    platz_auswahl=document.getElementById('platz_auswahl');
    datum_von=document.getElementById('datum_von');
    datum_bis=document.getElementById('datum_bis');
    name_auswahl=document.getElementById('name_auswahl');
    email_auswahl=document.getElementById('email_auswahl');




    platz_auswahl.innerText="Platz: 4"
    dropdown.addEventListener("change", function() {
        platz_auswahl.innerText=""
        platz_auswahl.innerText=dropdown.value.split(" ")[0]+": "+dropdown.value.split(" ")[1];
    });
    textarea.addEventListener("change", function() {
        name_auswahl.innerText=""
        name_auswahl.innerText="Name: "+textarea.value;
    });
    email.addEventListener("change", function() {
        email_auswahl.innerText=""
        email_auswahl.innerText="Name: "+email.value;
    });
    start_datum.addEventListener("change", function() {
        datum_von.innerText=""
        first_part=start_datum.value.split("T")
        minutes=+first_part[1].split(":")[1]

        if (Math.abs(minutes-15) < Math.abs(minutes-45)){
            datum_von.innerText="Von: "+ start_datum.value.split(":")[0]
            datum_von.innerText=(datum_von.innerText+":00").replace("T"," ")
        }
        else{
            datum_von.innerText="Von: "+ first_part[0]
            hours=+first_part[1].split(":")[0]+1
            datum_von.innerText=datum_von.innerText+" "+hours+":00"
        }
    });

    end_datum.addEventListener("change", function() {
        datum_bis.innerText=""
        first_part=end_datum.value.split("T")
        minutes=+first_part[1].split(":")[1]

        if (Math.abs(minutes-15) < Math.abs(minutes-45)){
            datum_bis.innerText="Bis: "+ end_datum.value.split(":")[0]
            datum_bis.innerText=(datum_bis.innerText+":00").replace("T"," ")
        }
        else{
            datum_bis.innerText="Bis: "+ first_part[0]
            hours=+first_part[1].split(":")[0]+1
            datum_bis.innerText=datum_bis.innerText+" "+hours+":00"
        }
    });


}

functionalities()
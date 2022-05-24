const changeWeek = document.querySelector(".change-week-container");
let weekNumber = document.getElementById("week-number");
let weekDates = document.querySelector(".week-dates");


// function addEventBtn() {
//     console.log("click");
// }

// console.log(changeWeek);

let date = new Date();
let yyyymmdd = date.toLocaleDateString();
let dayOfWeek = date.getDate();


function firstDayOfWeek(date) {
    let d = new Date(date);
    let dayOfWeek = d.getDay();
    let preDays = -dayOfWeek;
    let postDays = 7 + preDays;
    let dates = [];
    d.setDate(d.getDate() + preDays);
    for (let i = preDays; i < postDays; i++) {
        d.setDate(d.getDate() + 1);
        let yyyymmdd = d.toLocaleDateString();
        console.log("yyyymmdd", yyyymmdd);
        let obj = {
            date: yyyymmdd,
            dd: "något..."
        }
        dates.push(obj);
    }
    return dates;
};
firstDayOfWeek()

let calendarDates = firstDayOfWeek(date);


function showWeekDates(dates) {
    // radera alla li element
    weekDates.innerText = "";
    // dateInput.innerText = "";
    dates.forEach(element => {
        // console.log("element.date", element.date);

        // skapa ett list element
        let div = document.createElement("div");
        div.classList.add("dayCard")
        let pDate = document.createElement("p");
        pDate.classList.add("date")
        pDate.id = element.date

        // ange innehåll
        pDate.innerText = element.date;

        // lägg till det omslutande ul elementet
        // Lägg till månad
        // let pMonth = document.createElement("p");
        // pMonth.innerText = months[element.date.slice(5, 7) - 1]

        // Lägg till dag
        // let pDay = document.createElement("p");
        // pDay.innerText = weekDays[3]
        weekDates.appendChild(div);
        // div.appendChild(pDay);
        div.appendChild(pDate);
        // div.appendChild(pMonth);
    });
};

showWeekDates(calendarDates);

function getWeekNumber() {
    let currentDate = new Date();
    let oneJan = new Date(currentDate.getFullYear(), 0, 1);
    let numberOfDays = Math.floor((currentDate - oneJan) / (24 * 60 * 60 * 1000));
    let result = Math.ceil((currentDate.getDay() + numberOfDays) / 7);
    console.log(result);
    weekNumber.innerHTML =
        `
        <h3>Week ${result}</h3>
    `
};




// let today = new Date();

// --> Date function <-- //

function getWeekNumber() {
    let currentdate = new Date();
    let oneJan = new Date(currentdate.getFullYear(), 0, 1);
    let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    let result = Math.ceil((currentdate.getDay() + numberOfDays) / 7); // Tar jag bort -1 blir veckan rätt
    // console.log(`The week number of the current date (${currentdate}) is ${result}.`);
    weekNumber.innerHTML = `
        <h3> Week <span id="weekNumber">${result}</span> </h3>
    `;
        changeWeek.addEventListener("click", function (event) {
            let target = event.target;
            if (target.id === "scroll-left") {
                console.log("klick vänster");

                // kontrollera vilken dag som nu är veckans första dag
                let currentFirstDayOfWeekElement = document.querySelector(".date");
                // console.log("dateFirstDayOfWeekElement", currentFirstDayOfWeekElement);

                let currentMonday = currentFirstDayOfWeekElement.textContent;
                // console.log("currentMonday", currentMonday);

                // en vecka tidigare...
                // skapa först ett äkta datumobjekt av currentMonday
                let day = new Date(currentMonday);

                // en vecka tidigare
                day.setDate(day.getDate() - 7);
                // console.log("day...", day);

                // ändra innehållet i ul elementet
                // hämta först veckans datum
                calendarDates = firstDayOfWeek(day);
                // console.log("calendarDates", calendarDates);
                weekNumber.innerHTML = `
                <h3> Week <span id="weekNumber">${result -= 1}</span> </h3>
                `;

                showWeekDates(calendarDates);
                // console.log(nextWeek)
                // console.log(previousWeek);
                

            } else if (target.id === "scroll-right") {
                console.log("Klick höger");

                // kontrollera vilken dag som nu är veckans första dag
                let currentFirstDayOfWeekElement = document.querySelector(".date");
                // console.log("dateFirstDayOfWeekElement", currentFirstDayOfWeekElement);

                let currentMonday = currentFirstDayOfWeekElement.textContent;
                // console.log("currentMonday", currentMonday);

                // en vecka tidigare...
                // skapa först ett äkta datumobjekt av currentMonday
                let day = new Date(currentMonday);

                // en vecka tidigare
                day.setDate(day.getDate() + 7);
                // console.log("day...", day);

                // ändra innehållet i ul elementet
                // hämta först veckans datum
                calendarDates = firstDayOfWeek(day);
                // console.log("calendarDates", calendarDates);

                weekNumber.innerHTML =
                `
                <h3> Week <span id="weekNumber">${result += 1}</span> </h3>
                `

                showWeekDates(calendarDates);
                // console.log(nextWeek)
            }
        });
};
getWeekNumber()


async function handleDelete(id) {
    console.log("HandleDelete was called with id", id);
    const response = await fetch(`/calendar/${id}`, {
        method: "delete"
    });
    if (response.redirected) {
        window.location.href = response.url;
    }
};



async function handleEdit(evt) {
    const id = Number(evt.target.dataset.id); // data-id -> dataset.id
    const container = evt.target.parentElement;
    const dateEl = container.querySelector(".eventDate");
    const titleEl = container.querySelector(".eventTitle");
    // if not editable make them editable
    if (!dateEl.isContentEditable && !titleEl.isContentEditable) {
        dateEl.contentEditable = true;
        titleEl.contentEditable = true;
        // clicking the same button should save the changes
        evt.target.innerText = "Save";
    } else {
        // Second time clicked it should save changes
        // reset element to be non editable
        dateEl.contentEditable = false;
        titleEl.contentEditable = false;
        evt.target.innerText = "Edit";
        // Look at values of authorEl and quoteEl and submit new quote
        const newEvent = {
            date: dateEl.innerText,
            title: titleEl.innerText,
        };
        const response = await fetch(`/calendar/${id}`, {
            method: "put",
            body: JSON.stringify(newEvent),
            headers: {
                "Content-Type": "application/json",
            },
        });
        // Check if there is a redirect to follow the new url
        if (response.redirected) {
            window.location.href = response.url;
        }
    }
}
document
    .querySelectorAll(".edit-button")
    .forEach((btn) => (btn.onclick = handleEdit));
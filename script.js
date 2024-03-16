function changeTime() {



     

    const currentDay = document.getElementById("currentDay");
    const nextDay = document.getElementById("nextDay");

    if (currentDay.classList.contains("fadeNumber")) {
        currentDay.classList.remove("fadeNumber");
    }

    if (nextDay.classList.contains("fadeNumberReverse")) {
        nextDay.classList.remove("fadeNumberReverse")
    }

    currentDay.innerHTML = parseInt(currentDay.innerHTML) - 1
    nextDay.innerHTML = parseInt(nextDay.innerHTML) - 1

    currentDay.classList.add("fadeNumber")
    nextDay.classList.add("fadeNumberReverse")
}


setInterval(changeTime, 1000);
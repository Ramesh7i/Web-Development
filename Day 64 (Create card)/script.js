function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div> 
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Whatever You Do… Don’t Mess With the Penguin", "Penguin", 560000, 7, "23:56", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFaSazKCy1WTlXaHsgN8bzmYbo4BGSHeMFONXl4x53XOUCErgZY-4JSos&s=10")
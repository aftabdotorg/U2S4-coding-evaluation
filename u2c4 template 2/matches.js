// write js code here corresponding to matches.html

var matchArr = JSON.parse(localStorage.getItem("schedule"));
var favArr = JSON.parse(localStorage.getItem("favourites")) || [];
displayData(matchArr);

function handleVenue(){
var selected = document.querySelector("#filterVenue").value;
var filtered = matchArr.filter(function (elem){
    return elem.mVenue == selected;
});
displayData(filtered);
}

function displayData(matchArr) {
    document.querySelector("tbody").innerHTML = "";
    matchArr.forEach(function (elem) {

        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.mNum ;

        var td2 = document.createElement("td");
        td2.innerText = elem.mTeamA ;

        var td3 = document.createElement("td");
        td3.innerText = elem.mTeamB ;

        var td4 = document.createElement("td");
        td4.innerText = elem.mDate ;

        var td5 = document.createElement("td");
        td5.innerText = elem.mVenue ;

        var td6 = document.createElement("td");
        td6.innerText = "Add as Favourites";
        td6.style.color = "green";
        td6.style.cursor = "pointer";
        td6.addEventListener("click", function(){
            addFav(elem);
        })

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr);
    });
}

function addFav(elem){
    favArr.push(elem);
    localStorage.setItem("favourites", JSON.stringify(favArr));
} 

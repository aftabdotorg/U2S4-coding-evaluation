// write js code here corresponding to index.html
// You should add submit event on the form

    document.querySelector("#masaiForm").addEventListener("submit", masaiFun);
    var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];

    function masaiFun(){
        event.preventDefault();
        var matchObj = {
            mNum : masaiForm.matchNum.value,
            mTeamA : masaiForm.teamA.value,
            mTeamB : masaiForm.teamB.value,
            mDate : masaiForm.date.value,
            mVenue : masaiForm.venue.value,
        };

        matchArr.push(matchObj);
        localStorage.setItem("schedule", JSON.stringify(matchArr));
        window.location.href = "matches.html";
    }

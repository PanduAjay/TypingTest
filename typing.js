let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

let TimerCounter;
let interval;
function startingTimer() {
   TimerCounter = 0;
   interval = setInterval(function() {
        TimerCounter = TimerCounter + 1;
        timerEl.textContent = TimerCounter;
    }, 1000);
}
function displayQuote(){
let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");
        let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            spinnerEl.classList.add("d-none");
            let {
                content
            } = jsondata;
            quoteDisplayEl.textContent = content;
            startingTimer();
        });
}
displayQuote();
function resetTyping() {
    TimerCounter = 0;
    timerEl.textContent = 0;
    resultEl.textContent = "";
    quoteInputEl.value = "";
    displayQuote();
}
submitBtnEl.addEventListener("click", function() {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        resultEl.textContent = "Your typed in " + TimerCounter + " Seconds";
        clearInterval(interval);
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
});

resetBtnEl.addEventListener("click", resetTyping);

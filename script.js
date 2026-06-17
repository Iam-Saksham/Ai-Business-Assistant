let history =
JSON.parse(localStorage.getItem("history")) || [];

let ratings =
JSON.parse(localStorage.getItem("ratings")) || [];

updateDashboard();
displayHistory();

function generateReply() {

    let customer =
    document.getElementById("customer").value.trim();

    let business =
    document.getElementById("business").value;

    let question =
    document.getElementById("question").value.trim();

    if (!customer || !business || !question) {

        alert("Please fill all fields.");
        return;
    }

    let response = "";

    if (
        question.toLowerCase().includes("price") ||
        question.toLowerCase().includes("fee")
    ) {

        response =
        "Pricing information is available upon request.";
    }

    else if (
        question.toLowerCase().includes("time")
    ) {

        response =
        "Business timings are 9 AM to 6 PM.";
    }

    else if (
        question.toLowerCase().includes("contact")
    ) {

        response =
        "Please contact our support team for assistance.";
    }

    else {

        response =
        "Thank you for contacting us. We will respond shortly.";
    }

    let finalResponse =

    `Hello ${customer},

Business: ${business}

Question:
${question}

Response:
${response}`;

    document.getElementById("output")
    .innerText = finalResponse;

    document.getElementById("timestamp")
    .innerText =
    new Date().toLocaleString();

    document.getElementById("status")
    .innerText =
    "✓ Response Generated Successfully";

    history.push({
        customer,
        business,
        question,
        response,
        date:
        new Date().toLocaleString()
    });

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );

    displayHistory();
    updateDashboard();
}

function displayHistory() {

    let list =
    document.getElementById("history");

    list.innerHTML = "";

    history.forEach(item => {

        let li =
        document.createElement("li");

        li.innerHTML =

        `<strong>${item.customer}</strong>
         | ${item.business}
         | ${item.question}`;

        list.appendChild(li);
    });
}

function searchHistory() {

    let search =

    document.getElementById("searchBox")
    .value.toLowerCase();

    let items =
    document.querySelectorAll("#history li");

    items.forEach(item => {

        item.style.display =

        item.innerText
        .toLowerCase()
        .includes(search)

        ? "block"
        : "none";
    });
}

function updateDashboard() {

    document.getElementById("counter")
    .innerText =
    history.length;

    let counts = {};

    history.forEach(item => {

        counts[item.business] =
        (counts[item.business] || 0) + 1;
    });

    let mostUsed = "None";
    let max = 0;

    for (let key in counts) {

        if (counts[key] > max) {

            max = counts[key];
            mostUsed = key;
        }
    }

    document.getElementById("mostUsed")
    .innerText =
    mostUsed;

    document.getElementById("businessCount")
    .innerText =
    Object.keys(counts).length;

    let avg = 0;

    if (ratings.length > 0) {

        avg =

        ratings.reduce(
            (a,b)=>a+b,0
        ) / ratings.length;
    }

    document.getElementById("averageRating")
    .innerText =
    avg.toFixed(2);
}

function rateResponse(value) {

    ratings.push(value);

    localStorage.setItem(
        "ratings",
        JSON.stringify(ratings)
    );

    updateDashboard();

    alert("Thank you for your feedback!");
}

function clearHistory() {

    history = [];
    ratings = [];

    localStorage.clear();

    displayHistory();
    updateDashboard();
}

function downloadHistory() {

    let data =

    JSON.stringify(
        history,
        null,
        2
    );

    let blob =
    new Blob(
        [data],
        {type:"application/json"}
    );

    let a =
    document.createElement("a");

    a.href =
    URL.createObjectURL(blob);

    a.download =
    "history.json";

    a.click();
}

function toggleDarkMode() {

    document.body
    .classList
    .toggle("dark-mode");
}

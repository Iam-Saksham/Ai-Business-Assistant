let queryCount =
    Number(localStorage.getItem("queryCount")) || 0;

let history =
    JSON.parse(localStorage.getItem("history")) || [];

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

    let response =
        `Hello ${customer},
Thank you for contacting our ${business}. We have received your query regarding "${question}".`;

    document.getElementById("output").innerHTML =
        response;

    queryCount++;

    history.push({
        customer,
        business,
        question,
        date: new Date().toLocaleString()
    });

    localStorage.setItem(
        "queryCount",
        queryCount
    );

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );

    document.getElementById("timestamp")
        .innerHTML =
        new Date().toLocaleString();

    document.getElementById("lastQuery")
        .innerHTML =
        question;

    document.getElementById("status")
        .innerHTML =
        "✓ Success";

    updateDashboard();
    displayHistory();
}

function displayHistory() {

    let list =
        document.getElementById("history");

    list.innerHTML = "";

    history.forEach(item => {

        let li =
            document.createElement("li");

        li.innerHTML =
            `${item.customer} | ${item.business} | ${item.question}`;

        list.appendChild(li);
    });
}

function updateDashboard() {

    document.getElementById("counter")
        .innerHTML =
        queryCount;

    let counts = {};

    history.forEach(item => {

        counts[item.business] =
            (counts[item.business] || 0) + 1;
    });

    let maxBusiness =
        "No Data";

    let maxCount = 0;

    for (let business in counts) {

        if (counts[business] > maxCount) {

            maxCount =
                counts[business];

            maxBusiness =
                business;
        }
    }

    document.getElementById("mostUsed")
        .innerHTML =
        maxBusiness;

    document.getElementById("businessCount")
        .innerHTML =
        Object.keys(counts).length;
}

function clearHistory() {

    history = [];
    queryCount = 0;

    localStorage.clear();

    updateDashboard();

    document.getElementById("history")
        .innerHTML = "";
}

function downloadHistory() {

    let content =
        JSON.stringify(history, null, 2);

    let blob =
        new Blob(
            [content],
            { type: "text/plain" }
        );

    let a =
        document.createElement("a");

    a.href =
        URL.createObjectURL(blob);

    a.download =
        "history.txt";

    a.click();
}

function toggleDarkMode() {

    document.body.classList
        .toggle("dark-mode");
}

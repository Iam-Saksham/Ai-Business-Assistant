let queryCount =
    Number(localStorage.getItem("queryCount")) || 0;

let history =
    JSON.parse(localStorage.getItem("history")) || [];

document.getElementById("counter").innerHTML =
    queryCount;

displayHistory();

function generateReply() {

    let customer =
        document.getElementById("customer").value.trim();

    let business =
        document.getElementById("business").value;

    let question =
        document.getElementById("question")
            .value.toLowerCase()
            .trim();

    let output =
        document.getElementById("output");

    if (customer === "") {
        output.innerHTML = "Please enter your name.";
        return;
    }

    if (business === "") {
        output.innerHTML = "Please select a business.";
        return;
    }

    if (question === "") {
        output.innerHTML = "Please enter your question.";
        return;
    }

    let response = "";

    if (business === "gym") {

        if (question.includes("membership")) {
            response =
                "Membership plans are available monthly, quarterly and yearly.";
        }

        else if (
            question.includes("price") ||
            question.includes("fees")
        ) {
            response =
                "Membership starts from ₹999 per month.";
        }

        else {
            response =
                "Thank you for contacting our Gym.";
        }
    }

    else if (business === "restaurant") {

        if (
            question.includes("reservation")
        ) {
            response =
                "We accept reservations every day.";
        }

        else {
            response =
                "Thank you for contacting our Restaurant.";
        }
    }

    else if (business === "salon") {

        response =
            "We offer grooming and beauty services.";
    }

    else if (business === "clinic") {

        response =
            "Appointments are available throughout the week.";
    }

    else {

        response =
            "Thank you for contacting us.";
    }

    let finalResponse =
        "Hello " +
        customer +
        ", " +
        response;

    output.innerHTML =
        finalResponse;

    queryCount++;

    localStorage.setItem(
        "queryCount",
        queryCount
    );

    document.getElementById("counter")
        .innerHTML = queryCount;

    let now =
        new Date().toLocaleString();

    document.getElementById("timestamp")
        .innerHTML = now;

    document.getElementById("status")
        .innerHTML =
        "✓ Response Generated Successfully";

    document.getElementById("lastQuery")
        .innerHTML =
        question;

    history.push({
        customer,
        business,
        question
    });

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );

    displayHistory();
}

function displayHistory() {

    let historyList =
        document.getElementById("history");

    historyList.innerHTML = "";

    history.forEach(item => {

        let li =
            document.createElement("li");

        li.innerHTML =
            "<strong>" +
            item.customer +
            "</strong> | " +
            item.business +
            " | " +
            item.question;

        historyList.appendChild(li);
    });
}

function clearHistory() {

    history = [];

    queryCount = 0;

    localStorage.clear();

    document.getElementById("counter")
        .innerHTML = "0";

    document.getElementById("history")
        .innerHTML = "";

    document.getElementById("lastQuery")
        .innerHTML =
        "No query yet.";

    document.getElementById("status")
        .innerHTML =
        "History Cleared";
}

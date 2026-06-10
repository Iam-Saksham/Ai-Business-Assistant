let queryCount = 0;

function generateReply() {

    let customer =
        document.getElementById("customer").value.trim();

    let business =
        document.getElementById("business").value;

    let question =
        document.getElementById("question").value
            .toLowerCase()
            .trim();

    let output =
        document.getElementById("output");

    if (customer === "") {

        output.innerHTML =
            "Please enter your name.";

        return;
    }

    if (business === "") {

        output.innerHTML =
            "Please select a business type.";

        return;
    }

    if (question === "") {

        output.innerHTML =
            "Please enter your question.";

        return;
    }

    let response = "";

    if (business === "gym") {

        if (question.includes("membership")) {

            response =
                "Hello " + customer +
                ", we offer monthly, quarterly and yearly membership plans.";

        }

        else if (
            question.includes("fees") ||
            question.includes("price")
        ) {

            response =
                "Hello " + customer +
                ", our membership fees start from ₹999 per month.";

        }

        else if (
            question.includes("timing")
        ) {

            response =
                "Hello " + customer +
                ", our gym operates from 5 AM to 10 PM.";

        }

        else {

            response =
                "Hello " + customer +
                ", thank you for contacting our Gym.";
        }
    }

    else if (business === "restaurant") {

        if (
            question.includes("reservation")
        ) {

            response =
                "Hello " + customer +
                ", yes, we accept table reservations.";

        }

        else if (
            question.includes("menu")
        ) {

            response =
                "Hello " + customer +
                ", our menu includes Indian, Chinese and Continental dishes.";

        }

        else if (
            question.includes("timing")
        ) {

            response =
                "Hello " + customer +
                ", we are open from 10 AM to 11 PM.";

        }

        else {

            response =
                "Hello " + customer +
                ", thank you for contacting our Restaurant.";
        }
    }

    else if (business === "salon") {

        response =
            "Hello " + customer +
            ", we provide hair styling, grooming and beauty services.";

    }

    else if (business === "clinic") {

        response =
            "Hello " + customer +
            ", we assist with appointments and medical consultations.";

    }

    else if (business === "coaching") {

        response =
            "Hello " + customer +
            ", we offer expert coaching and academic guidance.";

    }

    output.innerHTML = response;

    queryCount++;

    document.getElementById("counter")
        .innerHTML = queryCount;

    let now = new Date();

    document.getElementById("timestamp")
        .innerHTML = now.toLocaleString();

    document.getElementById("status")
        .innerHTML =
        "✓ Response Generated Successfully";
}

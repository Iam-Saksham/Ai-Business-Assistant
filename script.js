function generateReply() {

    let business =
        document.getElementById("business").value;

    let question =
        document.getElementById("question").value;

    let output =
        document.getElementById("output");

    if (business === "") {

        output.innerHTML =
            "Please select a business type.";

        return;
    }

    if (question.trim() === "") {

        output.innerHTML =
            "Please enter your question.";

        return;
    }

    let response = "";

    if (business === "gym") {

        response =
            "Welcome to our Gym. We offer flexible membership plans, modern equipment, and professional trainers.";

    }

    else if (business === "restaurant") {

        response =
            "Thank you for contacting our Restaurant. We can assist you with reservations, menu details, and special offers.";

    }

    else if (business === "salon") {

        response =
            "Thank you for contacting our Salon. We provide grooming, beauty, and hair care services.";

    }

    else if (business === "clinic") {

        response =
            "Thank you for contacting our Clinic. Our team will assist you with appointments and medical consultations.";

    }

    else if (business === "coaching") {

        response =
            "Thank you for contacting our Coaching Center. We offer expert guidance and learning support.";

    }

    output.innerHTML = response;
}

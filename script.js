function generateReply(){

    let business =
        document.getElementById("business").value;

    let question =
        document.getElementById("question").value;

    if(business === "" || question === ""){
        document.getElementById("output").innerHTML =
            "Please fill in all fields.";
        return;
    }

    let response =
        "Thank you for contacting our " +
        business +
        ". We appreciate your question regarding '" +
        question +
        "'. Our team will get back to you shortly with complete details.";

    document.getElementById("output").innerHTML =
        response;
}

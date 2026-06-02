function generateReply() {

    let business = document.querySelector("input").value;
    let question = document.querySelector("textarea").value;

    let reply =
        "Thank you for contacting our " +
        business +
        ". We appreciate your question: '" +
        question +
        "'. Our team will respond shortly.";

    document.getElementById("output").innerText = reply;
}

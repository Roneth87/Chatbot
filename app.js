function sendMessage() {

    let input = document.getElementById("userInput");

    let message = input.value;

    if (message.trim() === "") {
        return;
    }

    let chatBox = document.getElementById("chatBox");

    


    let userDiv = document.createElement("div");

    userDiv.className = "user-message";

    userDiv.textContent = message;

    chatBox.appendChild(userDiv);

    


    
    let botDiv = document.createElement("div");

    botDiv.className = "bot-message";

    botDiv.textContent = "You said: " + message;

    chatBox.appendChild(botDiv);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}
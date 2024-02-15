let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerE1 = document.getElementById("chatContainer");
let userInputE1 = document.getElementById("userInput");

function sendMsgFn() {
    let msgFromuserContainerE1 = document.createElement("div");
    msgFromuserContainerE1.classList.add("msg-to-chatbot-container");
    chatContainerE1.appendChild(msgFromuserContainerE1);

    let msgFromUser = document.createElement("span");
    let userInputValue = userInputE1.value;
    msgFromUser.textContent = userInputValue;
    msgFromUser.classList.add("msg-to-chatbot");
    msgFromuserContainerE1.appendChild(msgFromUser);


    let lengthOfchatbotMsgList = chatbotMsgList.length;
    let randomNum = Math.random() * lengthOfchatbotMsgList;
    randomNum = Math.ceil(randomNum);

    let msgFromChatBoxConatainerE1 = document.createElement("div");
    msgFromChatBoxConatainerE1.classList.add("msg-from-chatbot-container");
    chatContainerE1.appendChild(msgFromChatBoxConatainerE1);

    let msgFromChatBox = document.createElement("span");
    msgFromChatBox.classList.add("msg-from-chatbot");
    msgFromChatBox.textContent = chatbotMsgList[randomNum];
    msgFromChatBoxConatainerE1.appendChild(msgFromChatBox);

    userInputE1.value = "";
}
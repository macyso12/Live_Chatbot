const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
    //create div
    const charContainer = document.createElement("div");
    chatContainer.classList.add("chat-container");

    //create paragraph
    const chatBox = document.createElement("p");
    chatBox.classList.add("voice2text");

    //create text element
    const chatText = document.createTextNode(text);
    chatBox.appendChild(chatText);

    chatContainer.appendChild(chatBox);
    return charContainer;
};

function addBotText(text) {
    //create div
    const charContainer1 = document.createElement("div");
    chatContainer1.classList.add("chat-container");
    chatContainer1.classList.add("darker");

    //create paragraph
    const chatBox1 = document.createElement("p");
    chatBox1.classList.add("voice2text");

    //create text element
    const chatText1 = document.createTextNode(text);
    chatBox1.appendChild(chatText1);

    chatContainer1.appendChild(chatBox1);
    return charContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry I did not understand that.";

    // start programming chat bot
    if (message.includes("how are you")) {
        speech.text = "I am fine, thanks. How are you?";
    }

    if (message.includes("fine")) {
        speech.text = "Nice to hear that. How can I assist you today?";
    }

    if (message.includes("weather")) {
        speech.text = "Of course, where are you currenlty?";
    }

    if (message.includes("New York City")) {
        speech.text = "It is 2 degree, and sunny.";
    }

    // starting 
    if (message.includes("Depress")) {
        speech.text = "You are going to be fine";
    }

    if (message.includes("Ways to relieve stress")) {
        speech.text = "You can find a new hobby or talk to someone that you trust";
    }

    if (message.includes("Thankyou")) {
        speech.text = "No thankyou, feel better and I will talk to you later.";
    }

    speech.volumne = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.SpeechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

// when click, start voice recognition
recorder.onstart = () => {
    console.log('Voice Activated');
};

recorder.onresult = (event) => {
    // console.log(event);
    const resultIndex = event.resultIndex;
    const trasncript = event.results[resultIndex][0].trasncript;
    //voice2text.textContent = trasncript;
    var element = document.getElementById("container");
    element.appendChild(addHumanText(trasncript));
    botVoice(trasncript);
};

voice.addEventListener('click', () => {
    recorder.start();
});
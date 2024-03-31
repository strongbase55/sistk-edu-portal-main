document.addEventListener("DOMContentLoaded", function() {
    // Display student information form
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
      <h2>Student Information</h2>
      <form id="studentInfoForm">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
          <br>
          <label for="rollNumber">Roll Number:</label>
          <input type="text" id="rollNumber" name="rollNumber" required>
          <br> 
         
          <br>
          <button type="button" onclick="startQuiz()">Start Quiz</button>
      </form>
  `;
});

function startQuiz() {
    const name = document.getElementById("name").value;
    const rollNumber = document.getElementById("rollNumber").value;
    const email = document.getElementById("email").value;
    if (!name || !rollNumber) {
        alert("Please fill out all fields.");
        return;
    }

    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
      <h2>Waste Management Unit-1 MCQ Test</h2>
      <p class="highlight-info"><strong>Student Name:</strong> ${name}</p>
      <p class="highlight-info"><strong>Roll Number:</strong> ${rollNumber}</p>
      <p class="highlight-info"><strong>Email Id:</strong> ${email}</p>
  `;
    document.querySelectorAll('.highlight-info').forEach((element) => {
        element.classList.add('highlighted');
    });

    // Mock questions (replace with your actual quiz questions)


    const questions = [{
            question: "What does IoT stand for?",
            options: [
                "Internet of Technology",
                "Internet of Telecommunications",
                "Internet of Things",
                "Internet of Transfers"
            ],
            correctAnswer: "Internet of Things"
        },
        {
            question: "Which of the following is a primary concern in IoT security?",
            options: [
                "Ensuring high-speed internet connection",
                "Protecting data privacy",
                "Increasing device battery life",
                "Improving data processing speed"
            ],
            correctAnswer: "Protecting data privacy"
        },
        {
            question: "What does the term 'endpoint' refer to in the context of IoT?",
            options: [
                "Central server managing IoT devices",
                "The final destination of data transmission",
                "Individual IoT device connected to the network",
                "The encryption key used for securing IoT communications"
            ],
            correctAnswer: "Individual IoT device connected to the network"
        },
        {
            question: "Which of the following is NOT a typical component of an IoT ecosystem?",
            options: [
                "Sensors",
                "Gateways",
                "Cloud computing",
                "Bluetooth earphones"
            ],
            correctAnswer: "Bluetooth earphones"
        },
        {
            question: "What is a 'botnet' in the context of IoT security?",
            options: [
                "A network of interconnected sensors",
                "A group of IoT devices infected with malware and controlled by a malicious actor",
                "A secure communication protocol for IoT devices",
                "A cloud-based storage solution for IoT data"
            ],
            correctAnswer: "A group of IoT devices infected with malware and controlled by a malicious actor"
        },
        {
            question: "What security measure can help prevent unauthorized access to IoT devices?",
            options: [
                "Using default passwords",
                "Implementing multi-factor authentication",
                "Disabling automatic updates",
                "Sharing device access with multiple users"
            ],
            correctAnswer: "Implementing multi-factor authentication"
        },
        {
            question: "What is data encryption's role in IoT security?",
            options: [
                "To increase data transmission speed",
                "To reduce the power consumption of IoT devices",
                "To protect data from unauthorized access or tampering",
                "To improve the compatibility of IoT devices"
            ],
            correctAnswer: "To protect data from unauthorized access or tampering"
        },
        {
            question: "Which protocol is commonly used for communication between IoT devices and the cloud?",
            options: [
                "HTTP",
                "FTP",
                "MQTT",
                "DNS"
            ],
            correctAnswer: "MQTT"
        },
        {
            question: "What is a 'zero-day vulnerability' in the context of IoT security?",
            options: [
                "A security flaw that has been known for a long time",
                "A vulnerability that only affects IoT devices manufactured in the last year",
                "A newly discovered security flaw for which no patch is available",
                "A vulnerability caused by outdated firmware"
            ],
            correctAnswer: "A newly discovered security flaw for which no patch is available"
        },
        {
            question: "What is the purpose of firmware updates for IoT devices?",
            options: [
                "To increase the device's physical durability",
                "To add new features to the device",
                "To improve the device's user interface",
                "To patch security vulnerabilities and bugs"
            ],
            correctAnswer: "To patch security vulnerabilities and bugs"
        },
        {
            question: "Which of the following is a potential security risk associated with IoT devices?",
            options: [
                "Increased energy efficiency",
                "Data breaches due to weak authentication",
                "Enhanced user convenience",
                "Improved accessibility for people with disabilities"
            ],
            correctAnswer: "Data breaches due to weak authentication"
        },
        {
            question: "What is 'tamper detection' in the context of IoT security?",
            options: [
                "The process of encrypting IoT data",
                "A feature that alerts users when someone tries to physically manipulate a device",
                "A method for securely pairing IoT devices with each other",
                "The practice of monitoring network traffic for suspicious activities"
            ],
            correctAnswer: "A feature that alerts users when someone tries to physically manipulate a device"
        },
        {
            question: "Which of the following is NOT a common IoT communication protocol?",
            options: [
                "TCP/IP",
                "Bluetooth",
                "Zigbee",
                "LoRaWAN"
            ],
            correctAnswer: "TCP/IP"
        },
        {
            question: "What is the term for the practice of exploiting IoT devices to launch large-scale cyberattacks?",
            options: [
                "Cyber espionage",
                "Cyber terrorism",
                "Distributed Denial of Service (DDoS) attack",
                "Data exfiltration"
            ],
            correctAnswer: "Distributed Denial of Service (DDoS) attack"
        },
        {
            question: "What is the primary purpose of IoT security frameworks?",
            options: [
                "To standardize the physical design of IoT devices",
                "To create interoperability between different IoT ecosystems",
                "To provide guidelines and best practices for securing IoT systems",
                "To regulate the pricing of IoT devices"
            ],
            correctAnswer: "To provide guidelines and best practices for securing IoT systems"
        }
    ];



    // Shuffle questions
    shuffleArray(questions);

    // Display quiz rules (optional)
    const rulesContainer = document.createElement("div");
    rulesContainer.classList.add("quiz-rules");
    rulesContainer.innerHTML = `
      <h3>Quiz Rules</h3>
      <ul>
          <li>This quiz consists of ${questions.length} questions.</li>
          <li>Each question carries one mark.</li>
          <li>There is no negative marking for incorrect answers.</li>
          <li>Make sure to answer all questions before submitting.</li>
      </ul>
  `;
    quizContainer.appendChild(rulesContainer);
    // Display questions
    questions.forEach((q, index) => {
                shuffleArray(q.options);

                const questionDiv = document.createElement("div");
                questionDiv.classList.add("question");
                questionDiv.innerHTML = `
          <h3>Question ${index + 1}:</h3>
          <p>${q.question}</p>
          <form id="question${index + 1}Form">
              ${q.options
                .map(
                  (option, i) => `
                  <label>
                      <input type="radio" name="question${
                        index + 1
                      }" value="${option}" required>
                      ${option}
                  </label>
              `
                )
                .join("")}
          </form>
      `;
    quizContainer.appendChild(questionDiv);
  });
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit Quiz";
  submitButton.addEventListener("click", () =>{
    submitQuiz(name, rollNumber, questions);
    removeBackground(); // Remove background once the quiz is submitted

});
  quizContainer.appendChild(submitButton);
}
function removeBackground() {
  const selectedOptions = document.querySelectorAll(
    'input[type="radio"]:checked'
  );

  selectedOptions.forEach((selectedOption) => {
    const questionForm = selectedOption.closest("form");
    if (questionForm) {
      questionForm.classList.remove("missed-question");
    }
  });
}
function submitQuiz(name, rollNumber, questions) {
  let totalMarks = 0;
  let allQuestionsAnswered = true;

  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index + 1}"]:checked`
    );

    if (selectedOption) {
      if (selectedOption.value === q.correctAnswer) {
        totalMarks++;
      }
    } else {
      allQuestionsAnswered = false;
      // Highlight the missed question
      document.getElementById(`question${index + 1}Form`).classList.add("missed-question");
    }
  });

  if (!allQuestionsAnswered) {
    alert("Please answer all questions before submitting.");
    return;
  }

  const resultPopup = `
      <div id="result-popup">
          <h2>Quiz Result</h2>
          <p>Name: ${name}</p>
          <p>Roll Number: ${rollNumber}</p>
          <p>Total Marks: ${totalMarks}/${questions.length}</p>
          <button onclick="closeResultPopup()">Close</button>
      </div>
  `;

  document.body.insertAdjacentHTML("beforeend", resultPopup);

  // Send data to Google Sheets with the correct sheetName parameter
  const sheetName = "cybersecurity"; // Modify this based on your criteria
  sendToGoogleSheets(name, rollNumber, totalMarks, sheetName);
}

// Add CSS style for highlighting missed questions
const style = document.createElement("style");
style.innerHTML = `
  .missed-question {
    background-color: #FFCCCC;
  }
`;
document.head.appendChild(style);



function closeResultPopup() {
  const resultPopup = document.getElementById("result-popup");
  if (resultPopup) {
    resultPopup.remove();
  }
  window.location.href = "feedback.html";
}

function sendToGoogleSheets(name, rollNumber, totalMarks) {
  const url =
    "https://script.google.com/macros/s/AKfycbyNAD2XDGtZLUJtjjqy4D2cGBLulNWTbkZAkg5neYfiyXY9qn96hhcLgzXIaVV3NBLr/exec";
  const data = {
    name: name,
    rollNumber: rollNumber,
    totalMarks: totalMarks,
  };

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(data).toString(),
  })
    .then((response) => {
      console.log("Data sent to Google Sheets:", response);
    })
    .catch((error) => {
      console.error("Error sending data to Google Sheets:", error);
    });
}


// Shuffle questions
shuffleArray(questions);

// Display questions
questions.forEach((q, index) => {
    // ...

    // Shuffle options for each question
    shuffleArray(q.options);

    // ...
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
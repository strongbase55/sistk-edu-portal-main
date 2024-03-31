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
            question: "What is the primary purpose of a firewall in network security?",
            options: [
                "To detect and remove viruses",
                "To monitor network traffic",
                "To prevent unauthorized access",
                "To encrypt data transmissions"
            ],
            correctAnswer: "To prevent unauthorized access"
        },
        {
            question: "Which encryption algorithm is commonly used for securing internet communications?",
            options: ["RSA", "DES", "AES", "SHA"],
            correctAnswer: "AES"
        },
        {
            question: "What is the practice of disguising a message to make it appear as something else called?",
            options: ["Encryption", "Decryption", "Steganography", "Authentication"],
            correctAnswer: "Steganography"
        },
        {
            question: "What is a common method used by hackers to gain unauthorized access to a system by tricking individuals into providing sensitive information?",
            options: ["Phishing", "Brute force attack", "DDoS attack", "SQL injection"],
            correctAnswer: "Phishing"
        },
        {
            question: "Which of the following authentication factors is considered the most secure?",
            options: [
                "Something you know",
                "Something you have",
                "Something you are",
                "Something you share"
            ],
            correctAnswer: "Something you are"
        },
        {
            question: "What type of malware is designed to block access to a computer system until a sum of money is paid?",
            options: ["Spyware", "Adware", "Ransomware", "Worm"],
            correctAnswer: "Ransomware"
        },
        {
            question: "What is the term for a software vulnerability that is unknown to the software vendor and has no available patch?",
            options: ["Zero-day exploit", "Backdoor", "Buffer overflow", "Trojan horse"],
            correctAnswer: "Zero-day exploit"
        },
        {
            question: "Which security protocol is used to provide secure communication over a computer network?",
            options: ["HTTP", "SSL/TLS", "FTP", "DHCP"],
            correctAnswer: "SSL/TLS"
        },
        {
            question: "What is the term for the process of converting plaintext into ciphertext?",
            options: ["Decryption", "Hashing", "Encoding", "Encryption"],
            correctAnswer: "Encryption"
        },
        {
            question: "What is the purpose of a VPN (Virtual Private Network)?",
            options: [
                "To protect against malware attacks",
                "To provide secure remote access to a private network",
                "To filter unwanted email messages",
                "To monitor network traffic"
            ],
            correctAnswer: "To provide secure remote access to a private network"
        },
        {
            question: "Which cybersecurity concept involves creating multiple layers of defense to protect against different types of threats?",
            options: ["Intrusion Detection System (IDS)", "Single Sign-On (SSO)", "Defense in Depth", "Two-factor Authentication (2FA)"],
            correctAnswer: "Defense in Depth"
        },
        {
            question: "What is the term for a software program that appears legitimate but performs malicious activities?",
            options: ["Virus", "Worm", "Trojan horse", "Spyware"],
            correctAnswer: "Trojan horse"
        },
        {
            question: "Which type of attack involves an attacker intercepting and altering communication between two parties?",
            options: ["Man-in-the-middle (MITM) attack", "Distributed Denial of Service (DDoS) attack", "Phishing attack", "SQL injection attack"],
            correctAnswer: "Man-in-the-middle (MITM) attack"
        },
        {
            question: "What is the term for a security breach where an attacker gains access to restricted areas by exploiting human behavior rather than technical vulnerabilities?",
            options: ["Social engineering", "Spoofing", "Brute force attack", "Buffer overflow"],
            correctAnswer: "Social engineering"
        },
        {
            question: "Which cryptographic technique is used for verifying the integrity of transmitted data?",
            options: ["Hashing", "Symmetric encryption", "Asymmetric encryption", "Digital signatures"],
            correctAnswer: "Hashing"
        },
        {
            question: "What is the primary goal of a penetration test?",
            options: [
                "To identify and exploit vulnerabilities in a system",
                "To encrypt sensitive data",
                "To detect and remove malware",
                "To simulate a cyberattack and assess system security"
            ],
            correctAnswer: "To simulate a cyberattack and assess system security"
        },
        {
            question: "Which security principle states that users should have access only to the resources necessary to perform their job functions?",
            options: ["Least Privilege", "Defense in Depth", "Principle of Least Authority", "Separation of Duties"],
            correctAnswer: "Least Privilege"
        },
        {
            question: "What is the term for a security mechanism that monitors and controls incoming and outgoing network traffic based on predetermined security rules?",
            options: ["Antivirus", "Firewall", "Intrusion Detection System (IDS)", "Virtual Private Network (VPN)"],
            correctAnswer: "Firewall"
        },
        {
            question: "Which of the following is NOT a common authentication factor?",
            options: [
                "Something you know",
                "Something you have",
                "Something you are",
                "Something you share"
            ],
            correctAnswer: "Something you share"
        },
        {
            question: "What is the purpose of a Security Information and Event Management (SIEM) system?",
            options: [
                "To prevent malware infections",
                "To monitor and analyze security events in real-time",
                "To encrypt network traffic",
                "To provide secure remote access to a private network"
            ],
            correctAnswer: "To monitor and analyze security events in real-time"
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
    "https://script.google.com/macros/s/AKfycbwfNGy71GhRzGmU4a7h4Zkfo04sw4UmL9-kK5eoUrqTv3Vxe7YcIMMkXsN2AN5p5PziQQ/exec";
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
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
      <h2>Human Values And Ethics</h2>
      <p class="highlight-info"><strong>Student Name:</strong> ${name}</p>
      <p class="highlight-info"><strong>Roll Number:</strong> ${rollNumber}</p>
      <p class="highlight-info"><strong>Email Id:</strong> ${email}</p>
  `;
    document.querySelectorAll('.highlight-info').forEach((element) => {
        element.classList.add('highlighted');
    });

    // Mock questions (replace with your actual quiz questions)
    const questions = [{
            question: "What is the fundamental principle that emphasizes treating others with fairness, kindness, and respect?",
            options: ["Integrity", "Empathy", "Compassion", "Ethical behavior"],
            correctAnswer: "Compassion"
        },
        {
            question: "Which ethical principle suggests that individuals should always tell the truth and be honest in their dealings?",
            options: ["Integrity", "Justice", "Altruism", "Accountability"],
            correctAnswer: "Integrity"
        },
        {
            question: "What is the term for the ethical concept that refers to doing what is right regardless of personal consequences?",
            options: ["Honesty", "Integrity", "Altruism", "Principle-centered behavior"],
            correctAnswer: "Principle-centered behavior"
        },
        {
            question: "Which ethical theory focuses on the consequences of actions rather than adherence to rules or duties?",
            options: ["Deontology", "Utilitarianism", "Virtue ethics", "Ethical relativism"],
            correctAnswer: "Utilitarianism"
        },
        {
            question: "What is the ethical principle that suggests individuals should treat others as they would like to be treated themselves?",
            options: ["Empathy", "Fairness", "Golden Rule", "Situational ethics"],
            correctAnswer: "Golden Rule"
        },
        {
            question: "Which ethical framework emphasizes the importance of character traits such as honesty, courage, and compassion?",
            options: ["Utilitarianism", "Deontology", "Virtue ethics", "Ethical egoism"],
            correctAnswer: "Virtue ethics"
        },
        {
            question: "What is the term for the ethical theory that argues there are no universal moral truths, and what is considered right or wrong depends on the culture or individual?",
            options: ["Relativism", "Absolutism", "Universalism", "Moral objectivism"],
            correctAnswer: "Relativism"
        },
        {
            question: "Which ethical principle emphasizes the importance of treating all individuals equally and without discrimination?",
            options: ["Equality", "Justice", "Altruism", "Fairness"],
            correctAnswer: "Justice"
        },
        {
            question: "What is the term for the ethical principle that suggests individuals should act in the best interest of others, even if it means sacrificing personal gain?",
            options: ["Empathy", "Altruism", "Reciprocity", "Benevolence"],
            correctAnswer: "Altruism"
        },
        {
            question: "Which ethical theory asserts that an action is morally right if it aligns with a set of rules, regardless of the consequences?",
            options: ["Utilitarianism", "Relativism", "Deontology", "Ethical egoism"],
            correctAnswer: "Deontology"
        },
        {
            question: "What is the term for the process of reflecting on and analyzing ethical dilemmas to determine the best course of action?",
            options: ["Ethical reasoning", "Moral deliberation", "Consequential analysis", "Normative evaluation"],
            correctAnswer: "Ethical reasoning"
        },
        {
            question: "Which ethical principle emphasizes the importance of maintaining confidentiality and respecting the privacy of others?",
            options: ["Autonomy", "Integrity", "Confidentiality", "Secrecy"],
            correctAnswer: "Confidentiality"
        },
        {
            question: "What is the term for the ethical principle that suggests individuals should have the freedom to make their own decisions and choices?",
            options: ["Autonomy", "Independence", "Liberty", "Sovereignty"],
            correctAnswer: "Autonomy"
        },
        {
            question: "Which ethical theory argues that individuals should act in a way that maximizes their self-interest, even if it may not benefit others?",
            options: ["Utilitarianism", "Virtue ethics", "Ethical egoism", "Deontology"],
            correctAnswer: "Ethical egoism"
        },
        {
            question: "What is the ethical principle that emphasizes the importance of individuals being accountable for their actions and decisions?",
            options: ["Integrity", "Responsibility", "Accountability", "Honesty"],
            correctAnswer: "Accountability"
        },
        {
            question: "Which ethical theory suggests that moral judgments should be based on the unique circumstances of each situation rather than universal principles?",
            options: ["Utilitarianism", "Situational ethics", "Deontology", "Virtue ethics"],
            correctAnswer: "Situational ethics"
        },
        {
            question: "What is the term for the ethical principle that asserts individuals should have the right to make decisions about their own lives and bodies?",
            options: ["Independence", "Autonomy", "Self-determination", "Empowerment"],
            correctAnswer: "Self-determination"
        },
        {
            question: "Which ethical principle emphasizes the importance of individuals acting with honesty and truthfulness in all aspects of life?",
            options: ["Integrity", "Transparency", "Veracity", "Ethical behavior"],
            correctAnswer: "Integrity"
        },
        {
            question: "What is the term for the ethical principle that suggests individuals should act in a way that respects the rights and dignity of all human beings?",
            options: ["Respect for persons", "Human dignity", "Equality", "Human rights"],
            correctAnswer: "Respect for persons"
        },
        {
            question: "Which ethical theory emphasizes the cultivation of virtuous character traits, such as honesty, courage, and compassion?",
            options: ["Utilitarianism", "Deontology", "Virtue ethics", "Ethical relativism"],
            correctAnswer: "Virtue ethics"
        },
        {
            question: "What is the term for the ethical principle that suggests individuals should act in a way that promotes the greatest good for the greatest number of people?",
            options: ["Altruism", "Utilitarianism", "Common good", "Social welfare"],
            correctAnswer: "Utilitarianism"
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
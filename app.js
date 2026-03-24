const questions = [
    { q: "What is the primary benefit of Digital Inclusion in rural schools?", a: ["Higher costs", "Equal access to resources", "More paperwork"], correct: 1 },
    { q: "Which tool is best for real-time collaboration in education?", a: ["Cloud Computing", "Typewriter", "Analog Radio"], correct: 0 },
    { q: "Why is an offline-first CBT important for local communities?", a: ["It uses more data", "It works without internet", "It requires expensive laptops"], correct: 1 }
];

let currentQ = 0;
let score = 0;
let studentName = "";

function startExam() {
    studentName = document.getElementById('studentName').value;
    if(!studentName) return alert("Please enter your name!");
    
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQ];
    document.getElementById('qCount').innerText = `Question ${currentQ + 1} of ${questions.length}`;
    document.getElementById('questionText').innerText = q.q;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = "";
    
    q.a.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-4 border-2 border-slate-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition font-medium";
        btn.innerText = opt;
        btn.onclick = () => handleAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function handleAnswer(choice) {
    if(choice === questions[currentQ].correct) score++;
    
    currentQ++;
    if(currentQ < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('finalScore').innerText = `${score} / ${questions.length}`;
    document.getElementById('impactMessage').innerText = `Great job, ${studentName}! This data has been saved locally and will sync when internet is available.`;
}

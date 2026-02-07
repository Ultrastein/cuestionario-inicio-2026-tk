const database = {
    "Bereshit": {   
        1:[
            {q: "¿Qué sensor mide la temperatura?", a: ["El sensor de temperatura en el procesador", "No tiene", "El termómetro externo", "Los botones"], c: 0},
        ],
        2:[],
        3:[],
        4:[],
        5: [
            {q: "¿Qué usamos para crear personajes en Scratch Jr?", a: ["El editor de pintura", "Una cámara de fotos", "No se puede", "Magia"], c: 0},
            // ... (resto de tus preguntas de 5to)
        ],
        6: [
            // ... (tus preguntas de 6to)
        ],
        7: [
            // ... (tus preguntas de 7mo)
        ]
    },
    "Hilel": {
        1: [{q: "primer pregunta hilel", a: ["El editor de pintura", "Una cámara de fotos", "No se puede", "Magia"], c: 0}],
        2: [], 3: [], 4: [], 5: [], 6: [], 7: [],
    },
    "Yeshurum": {
         1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: []
    }
};

let currentSchool = ""; 
let currentGrade = 0;
let currentQuestions = [];
let questionIndex = 0;
let score = 0;

function selectSchool(schoolName) {
    currentSchool = schoolName;
    console.log("Escuela seleccionada: " + schoolName);
    
    document.getElementById('screen-school').classList.add('hidden');
    document.getElementById('screen-select').classList.remove('hidden');
    
    // Actualiza el título según el colegio
    const titleElement = document.getElementById('school-title') || document.querySelector('#screen-select h1');
    if(titleElement) titleElement.innerText = "Gran Desafío " + schoolName;
}

function startGame(grade) {
    currentGrade = grade;

    // --- CORRECCIÓN IMPORTANTE AQUÍ ---
    // 1. Verificamos si existe la escuela y el grado
    if (!database[currentSchool] || !database[currentSchool][grade]) {
        alert("¡Ups! No encontramos preguntas para ese grado en este colegio.");
        return;
    }

    const questionsList = database[currentSchool][grade];

    // 2. Verificamos si hay preguntas cargadas
    if (questionsList.length === 0) {
        alert("Todavía no cargamos las preguntas para " + grade + "º Grado en " + currentSchool);
        return;
    }

    // 3. Cargamos las preguntas correctamente accediendo primero a la escuela
    currentQuestions = [...questionsList].sort(() => Math.random() - 0.5);
    // ----------------------------------

    questionIndex = 0;
    score = 0;
    
    document.getElementById('screen-select').classList.add('hidden');
    document.getElementById('screen-quiz').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const qData = currentQuestions[questionIndex];
    
    // Barra de progreso
    const percent = ((questionIndex) / currentQuestions.length) * 100;
    document.getElementById('progress').style.width = `${percent}%`;

    // Texto de pregunta
    document.getElementById('question-text').innerText = qData.q;

    // Opciones
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    qData.a.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => selectAnswer(index, qData.c, btn);
        container.appendChild(btn);
    });
}

function selectAnswer(selectedIndex, correctIndex, btnElement) {
    const buttons = document.querySelectorAll('#options-container button');
    buttons.forEach(b => b.disabled = true); 

    if (selectedIndex === correctIndex) {
        btnElement.classList.add('correct');
        score++;
    } else {
        btnElement.classList.add('wrong');
        buttons[correctIndex].classList.add('correct'); 
    }

    setTimeout(() => {
        questionIndex++;
        if (questionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

function showResult() {
    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-result').classList.remove('hidden');
    
    const finalScore = document.getElementById('final-score');
    finalScore.innerText = `${score}/${currentQuestions.length}`;

    const feedback = document.getElementById('final-feedback');
    const percent = (score / currentQuestions.length) * 100;

    if (percent === 100) {
        feedback.innerText = "¡PERFECTO! Sos un genio tecno. 🤖✨";
    } else if (percent > 70) {
        feedback.innerText = "¡Muy buen trabajo! Te acordás de casi todo. 🚀";
    } else if (percent > 40) {
        feedback.innerText = "Bien, pero hay que repasar algunas cosas este año. 🔧";
    } else {
        feedback.innerText = "Parece que el verano borró la memoria... ¡A poner pilas! 🔋";
    }
}

function goBackToSchool() {
    document.getElementById('screen-select').classList.add('hidden');
    document.getElementById('screen-school').classList.remove('hidden');
    currentSchool = "";
}
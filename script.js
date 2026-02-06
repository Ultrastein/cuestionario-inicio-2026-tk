// ==========================================
// BASE DE DATOS DE PREGUNTAS (30 POR GRADO)
// ==========================================
const database = {
    // ---------------- 5º GRADO ----------------
    // Temas: Scratch, Ozobot, Makey Makey, Microbit, Bebras
    5: [
        {q: "En Scratch, ¿de qué color son los bloques de Movimiento?", a: ["Azul", "Violeta", "Naranja", "Verde"], c: 0},
        {q: "¿Qué bloque usamos para iniciar un programa en Scratch?", a: ["Al hacer clic en Bandera Verde", "Por siempre", "Mover 10 pasos", "Decir Hola"], c: 0},
        {q: "En Ozobot, ¿qué necesitamos para que el robot lea los códigos?", a: ["Sensores de color limpios", "Conexión WiFi", "Pilas AA", "Un control remoto"], c: 0},
        {q: "¿Qué es un 'Bucle' o 'Loop'?", a: ["Una acción que se repite", "Un error en el código", "Un personaje de Scratch", "Un tipo de cable"], c: 0},
        {q: "Si quiero que mi personaje diga algo en pantalla, uso bloques de apariencia color...", a: ["Violeta", "Azul", "Amarillo", "Rojo"], c: 0},
        {q: "¿Para qué sirve Makey Makey?", a: ["Para convertir objetos en teclas", "Para imprimir en 3D", "Para volar drones", "Para limpiar la compu"], c: 0},
        {q: "En Makey Makey, ¿qué cable debo tocar siempre para cerrar el circuito?", a: ["Tierra (Earth)", "Espacio", "Click", "Flecha arriba"], c: 0},
        {q: "El Ozobot sigue líneas. ¿De qué color deben ser preferiblemente?", a: ["Negras y gruesas", "Amarillas y finas", "Blancas invisibles", "Grises"], c: 0},
        {q: "¿Qué componente de la Micro:bit muestra caritas o letras?", a: ["La matriz de LEDs", "Los botones", "El sensor de temperatura", "El pin de carga"], c: 0},
        {q: "¿Cuántos botones principales tiene la Micro:bit?", a: ["2 (A y B)", "4", "10", "Ninguno"], c: 0},
        {q: "En Scratch, si pongo 'Mover 10 pasos' dentro de 'Por siempre', el personaje...", a: ["Se mueve hasta que lo pare", "Se mueve solo 10 pasos", "Se queda quieto", "Gira"], c: 0},
        {q: "¿Qué es un Algoritmo?", a: ["Una serie de pasos ordenados", "Un robot famoso", "Un videojuego de ritmo", "Un virus de computadora"], c: 0},
        {q: "En el desafío Bebras, lo más importante es usar...", a: ["La lógica y el pensamiento", "La velocidad de los dedos", "La memoria visual", "La calculadora"], c: 0},
        {q: "Si en Ozobot dibujo: Azul - Negro - Azul, el robot...", a: ["Hace una acción especial (código)", "Se apaga", "Explota", "Va más lento"], c: 0},
        {q: "¿Qué pasa si un circuito de Makey Makey no está cerrado?", a: ["No funciona", "Funciona igual", "Da electricidad", "Se prende una luz roja"], c: 0},
        {q: "En Scratch, las coordenadas X e Y sirven para...", a: ["Saber la posición del personaje", "Cambiar el color", "Subir el volumen", "Guardar la partida"], c: 0},
        {q: "Si quiero crear un juego de preguntas en Scratch, uso el bloque...", a: ["Preguntar y esperar", "Mover 100 pasos", "Cambiar disfraz", "Tocar sonido"], c: 0},
        {q: "¿Qué herramienta de Google usamos para crear páginas web?", a: ["Google Sites", "Google Maps", "Gmail", "Google Earth"], c: 0},
        {q: "En Google Sites, para agregar una foto, hago clic en...", a: ["Imágenes", "Cuadro de texto", "Temas", "Publicar"], c: 0},
        {q: "¿Qué es 'Debug' o 'Depurar'?", a: ["Encontrar y arreglar errores", "Borrar todo el programa", "Apagar la computadora", "Jugar videojuegos"], c: 0},
        {q: "Si mi personaje de Scratch toca un color y pierde, usé un bloque de...", a: ["Sensores", "Movimiento", "Sonido", "Lápiz"], c: 0},
        {q: "En Pilas Bloques, el objetivo principal es...", a: ["Resolver el desafío con lógica", "Escribir mucho texto", "Dibujar bonito", "Ganar puntos rápido"], c: 0},
        {q: "¿Qué es un 'Pixel'?", a: ["Un puntito de luz en la pantalla", "Una marca de robots", "Un bloque de Scratch", "Un cable USB"], c: 0},
        {q: "El comando 'Esperar 1 segundo' sirve para...", a: ["Controlar el tiempo del programa", "Apagar la pantalla", "Detener todo para siempre", "Guardar cambios"], c: 0},
        {q: "¿Qué objeto conduce electricidad para usar con Makey Makey?", a: ["Una banana", "Un trozo de plástico", "Madera seca", "Papel común"], c: 0},
        {q: "Si la Micro:bit muestra un corazón, está usando...", a: ["Los LEDs rojos", "La pantalla LCD", "El parlante", "El micrófono"], c: 0},
        {q: "En Ozobot, ¿qué hace falta para calibrarlo?", a: ["Un círculo negro en pantalla/papel", "Agua y jabón", "Conectarlo a 220v", "Gritarle fuerte"], c: 0},
        {q: "¿Qué significa que un dispositivo sea 'inalámbrico'?", a: ["Que no usa cables", "Que es muy barato", "Que es de plástico", "Que no usa pilas"], c: 0},
        {q: "En un videojuego, las 'Vidas' del jugador son...", a: ["Una Variable", "Un escenario", "Un sonido", "Un evento"], c: 0},
        {q: "¿Quién programa a las computadoras?", a: ["Las personas (Programadores)", "Otras computadoras", "Nadie, aprenden solas", "Los aliens"], c: 0}
    ],

    // ---------------- 6º GRADO ----------------
    // Temas: Rodocodo, Ozoblockly, Lego WeDo, Bebras, Tinkercad (Intro)
    6: [
        {q: "¿Cuál es la diferencia entre Ozobot con marcadores y Ozoblockly?", a: ["Ozoblockly se programa en pantalla", "Ozoblockly usa control remoto", "No hay diferencia", "Ozoblockly es para cocinar"], c: 0},
        {q: "En Lego WeDo, el 'Hub' o cerebro sirve para...", a: ["Conectar sensores y motores", "Solo para decorar", "Para guardar piezas", "Para hacer luz"], c: 0},
        {q: "El sensor de 'Inclinación' de Lego WeDo detecta...", a: ["Si el objeto se mueve o gira", "La temperatura", "La distancia", "El sonido"], c: 0},
        {q: "En Tinkercad, el plano azul donde ponemos las figuras se llama...", a: ["Plano de Trabajo", "Mesa de luz", "Piso azul", "Base de datos"], c: 0},
        {q: "¿Para qué sirve la función 'Agrupar' en Tinkercad?", a: ["Unir dos formas en una sola", "Separar formas", "Borrar formas", "Cambiar de color"], c: 0},
        {q: "En Rodocodo, usamos comandos para...", a: ["Guiar al gato a la meta", "Hacer música", "Escribir cartas", "Editar fotos"], c: 0},
        {q: "¿Qué es un Motor en Robótica?", a: ["Lo que genera movimiento", "Lo que piensa", "Lo que ve", "Lo que escucha"], c: 0},
        {q: "Si quiero hacer un agujero en un cubo en Tinkercad, la forma debe ser...", a: ["Hueca", "Sólida", "Transparente", "Roja"], c: 0},
        {q: "En Ozoblockly, ¿cómo pasamos el código al robot?", a: ["Apoyándolo en la pantalla (Flash)", "Por cable USB", "Por Bluetooth", "Por Telepatía"], c: 0},
        {q: "¿Qué sensor de Lego WeDo sirve para detectar objetos enfrente?", a: ["Sensor de Movimiento/Distancia", "Sensor de Inclinación", "Sensor de Humedad", "Motor Mediano"], c: 0},
        {q: "¿Qué es una 'Función' en programación?", a: ["Un grupo de instrucciones con nombre", "Un error grave", "Un tipo de variable", "Un botón de apagado"], c: 0},
        {q: "En Google Sites, el botón 'Publicar' sirve para...", a: ["Que la web sea visible para otros", "Guardar el borrador", "Borrar la página", "Imprimir en papel"], c: 0},
        {q: "¿Qué eje representa la altura en el diseño 3D?", a: ["Eje Z", "Eje X", "Eje Y", "Eje W"], c: 0},
        {q: "En Bebras, los desafíos buscan entrenar...", a: ["El pensamiento computacional", "La fuerza física", "La historia", "La gramática"], c: 0},
        {q: "Si programo un robot para que no choque, necesito...", a: ["Un sensor de distancia", "Un parlante", "Una luz LED", "Un micrófono"], c: 0},
        {q: "¿Qué forma geométrica NO está en el menú básico de Tinkercad?", a: ["Dinosaurio realista", "Cubo", "Cilindro", "Esfera"], c: 0},
        {q: "En Lego WeDo, el bloque de 'Sobre amarillo' suele representar...", a: ["El inicio o sensores (Eventos)", "Motores", "Pantalla", "Sonidos"], c: 0},
        {q: "Para mover la cámara en Tinkercad uso...", a: ["El botón derecho del mouse", "La barra espaciadora", "Enter", "La tecla P"], c: 0},
        {q: "En Ozoblockly, el bloque 'Loop' sirve para...", a: ["Repetir acciones", "Apagar el robot", "Cambiar el color", "Ir más rápido"], c: 0},
        {q: "¿Qué es un 'Algoritmo condicional'?", a: ["Si pasa esto, hacé aquello", "Una lista de compras", "Un bucle infinito", "Un dibujo 3D"], c: 0},
        {q: "En el proyecto 'Nuestro Legado', usamos herramientas digitales para...", a: ["Contar una historia o dejar huella", "Jugar solamente", "Ver videos de gatos", "Hacer cuentas matemáticas"], c: 0},
        {q: "¿Qué extensión de archivo se usa para impresión 3D?", a: [".STL", ".DOC", ".JPG", ".MP3"], c: 0},
        {q: "Si el Lego WeDo no se conecta a la tablet, reviso...", a: ["El Bluetooth y las pilas", "El WiFi", "La pantalla", "El volumen"], c: 0},
        {q: "Rodocodo nos enseña que el orden de las instrucciones...", a: ["Es fundamental", "No importa", "Puede ser cualquiera", "Es aleatorio"], c: 0},
        {q: "En Google Sites, ¿puedo insertar un video de YouTube?", a: ["Sí, directamente", "No, es imposible", "Solo si es mío", "Solo si dura 1 minuto"], c: 0},
        {q: "¿Qué significa 'Hardware'?", a: ["La parte física (lo que se toca)", "Los programas", "Internet", "La nube"], c: 0},
        {q: "¿Qué significa 'Software'?", a: ["Los programas y código", "El teclado", "El mouse", "La pantalla"], c: 0},
        {q: "En Tinkercad, el botón 'Duplicar' sirve para...", a: ["Copiar y pegar en el mismo lugar", "Borrar", "Alejar la cámara", "Cambiar color"], c: 0},
        {q: "Para que el Ozobot vaya rápido, uso códigos de velocidad...", a: ["Verdes o azules especiales", "Rojos lentos", "Negros", "Blancos"], c: 0},
        {q: "¿Qué aprendimos sobre las contraseñas seguras?", a: ["Que deben ser secretas y difíciles", "Que hay que compartirlas", "Que usen solo números 1234", "Que no importan"], c: 0}
    ],

    // ---------------- 7º GRADO ----------------
    // Temas: Sphero, Microbit, Tinkercad (Adv), Google Sites, Lógica
    7: [
        {q: "¿Qué es un Robot Sphero?", a: ["Una esfera robótica controlable", "Un dron aéreo", "Un brazo mecánico", "Un software de diseño"], c: 0},
        {q: "Para conectar la Sphero a la tablet usamos...", a: ["Bluetooth", "Cable USB", "Infrarrojo", "WiFi"], c: 0},
        {q: "Antes de usar la Sphero, es fundamental...", a: ["Calibrar (apuntar la luz azul)", "Desarmarla", "Mojarla", "Ponerle nombre"], c: 0},
        {q: "En Tinkercad, si quiero imprimir mi diseño en 3D, debo exportarlo como...", a: [".STL", ".PNG", ".PDF", ".EXE"], c: 0},
        {q: "La Micro:bit tiene sensores integrados. ¿Cuál detecta movimiento?", a: ["Acelerómetro", "Termómetro", "Brújula", "Micrófono"], c: 0},
        {q: "En Sphero Edu, programamos usando...", a: ["Bloques, Dibujo o Texto", "Solo texto", "Solo control remoto", "La mente"], c: 0},
        {q: "Si quiero alinear dos objetos en Tinkercad, uso la herramienta...", a: ["Alinear (L)", "Agrupar", "Espejo", "Regla"], c: 0},
        {q: "En Google Sites, ¿quién puede ver mi sitio si lo publico como 'Público'?", a: ["Cualquier persona en internet", "Solo yo", "Solo mis compañeros", "Nadie"], c: 0},
        {q: "El bloque 'Matriz de LED' en Sphero sirve para...", a: ["Mostrar dibujos o animaciones", "Hacer ruidos", "Moverse rápido", "Frenar"], c: 0},
        {q: "¿Qué es una Variable en programación?", a: ["Un espacio para guardar un dato (puntos, nombre)", "Un error", "Un tipo de cable", "Un botón"], c: 0},
        {q: "Si la Sphero gira sin control, probablemente...", a: ["Perdió la calibración", "Está feliz", "Tiene virus", "Está rota"], c: 0},
        {q: "En Tinkercad, ¿qué tecla eleva un objeto del suelo?", a: ["El triángulo negro superior (cono)", "La tecla enter", "Click derecho", "La rueda del mouse"], c: 0},
        {q: "¿Para qué sirve el sensor de luz de la Micro:bit?", a: ["Detectar nivel de luminosidad", "Sacar fotos", "Proyectar cine", "Calentar la placa"], c: 0},
        {q: "En el proyecto 'Nuestro Legado', el objetivo fue...", a: ["Dejar una huella digital positiva", "Aprender a formatear PCs", "Vender productos", "Hacer memes"], c: 0},
        {q: "¿Qué es el 'Pensamiento Computacional'?", a: ["Una forma de resolver problemas lógicamente", "Saber arreglar computadoras", "Usar mucho el celular", "Jugar bien"], c: 0},
        {q: "En Sphero, el bloque 'Rodar' pide tres datos: ...", a: ["Rumbo, Velocidad y Tiempo", "Color, Luz y Sonido", "Alto, Ancho y Largo", "Nombre, Apellido y DNI"], c: 0},
        {q: "Si quiero hacer un llavero en Tinkercad, necesito agregar...", a: ["Un toroide (aro) o agujero", "Una esfera", "Un cubo sólido", "Texto flotante"], c: 0},
        {q: "¿Qué es 'Phishing'?", a: ["Un engaño para robar datos", "Un deporte acuático", "Un programa de dibujo", "Un tipo de robot"], c: 0},
        {q: "En Micro:bit, los pines 0, 1 y 2 sirven para...", a: ["Conectar caimanes/sensores externos", "Cargar la batería", "Nada", "Adorno"], c: 0},
        {q: "La herramienta 'Espejo' o 'Simetría' en Tinkercad sirve para...", a: ["Invertir la figura", "Ver mi cara", "Duplicar", "Cortar"], c: 0},
        {q: "¿Qué bloque de programación permite tomar decisiones?", a: ["Si... entonces (If/Else)", "Repetir", "Mover", "Esperar"], c: 0},
        {q: "En Google Sites, 'Incorporar' (Embed) sirve para...", a: ["Poner contenido de otras webs (Drive/YouTube)", "Escribir texto", "Cambiar el fondo", "Borrar todo"], c: 0},
        {q: "La Sphero Mini se maneja diferente a la Bolt porque...", a: ["Es más pequeña y la carcasa se abre", "Vuela", "Es acuática", "Tiene patas"], c: 0},
        {q: "¿Por qué es importante citar las fuentes en internet?", a: ["Para respetar el derecho de autor", "Para que quede más largo", "No es importante", "Para molestar"], c: 0},
        {q: "En Tinkercad, un objeto 'Hueco' sirve para...", a: ["Restar material a otro objeto", "Hacerlo invisible", "Pintarlo de blanco", "Hacerlo de vidrio"], c: 0},
        {q: "Si quiero que la Micro:bit envíe mensajes a otra, uso...", a: ["La función Radio", "Un cable largo", "Gritos", "WiFi"], c: 0},
        {q: "¿Qué es un 'Algoritmo de búsqueda'?", a: ["Instrucciones para encontrar información", "Un juego de escondidas", "Un mapa del tesoro", "Un buscador de llaves"], c: 0},
        {q: "En Sphero, ¿qué significa 0 grados de rumbo?", a: ["Hacia adelante (según calibración)", "Hacia atrás", "Izquierda", "Derecha"], c: 0},
        {q: "El formato de imagen .PNG permite...", a: ["Fondo transparente", "Animación", "Sonido", "3D"], c: 0},
        {q: "¿Qué aprendimos sobre la 'Huella Digital'?", a: ["Que todo lo que hacemos en red deja rastro", "Que hay que limpiar la pantalla", "Que se usa para desbloquear el celu", "Que no existe"], c: 0}
    ]
};

// ==========================================
// LÓGICA DEL JUEGO
// ==========================================
let currentGrade = 0;
let currentQuestions = [];
let questionIndex = 0;
let score = 0;

function startGame(grade) {
    currentGrade = grade;
    // Mezclar preguntas aleatoriamente
    currentQuestions = [...database[grade]].sort(() => Math.random() - 0.5);
    questionIndex = 0;
    score = 0;

    document.getElementById('screen-select').classList.add('hidden');
    document.getElementById('screen-quiz').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const qData = currentQuestions[questionIndex];
    
    // Actualizar barra de progreso
    const percent = ((questionIndex) / currentQuestions.length) * 100;
    document.getElementById('progress').style.width = `${percent}%`;

    // Mostrar texto
    document.getElementById('question-text').innerText = qData.q;

    // Generar botones
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
    buttons.forEach(b => b.disabled = true); // Bloquear botones

    if (selectedIndex === correctIndex) {
        btnElement.classList.add('correct');
        score++;
    } else {
        btnElement.classList.add('wrong');
        buttons[correctIndex].classList.add('correct'); // Mostrar la correcta
    }

    // Esperar y pasar a la siguiente
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

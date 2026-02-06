// ==========================================
// BASE DE DATOS DE PREGUNTAS (30 POR GRADO)
// ==========================================
const database = {
    // ---------------- 5º GRADO ----------------
    // Temas: Scratch, Ozobot, Makey Makey, Microbit, Bebras
    
    1:[{q: "primer pregunta", a: ["El editor de pintura", "Una cámara de fotos", "No se puede", "Magia"], c: 0}],
    2:[],
    3:[],
    4:[],
    
    5: [
        {q: "¿Qué usamos para crear personajes en Scratch Jr?", a: ["El editor de pintura", "Una cámara de fotos", "No se puede", "Magia"], c: 0},
            {q: "En Scratch Jr, ¿qué bloque inicia el programa?", a: ["Bandera Verde", "Bloque Rojo", "Flecha Azul", "Estrella"], c: 0},
            {q: "En el proyecto 'Proyector de Hologramas', ¿qué material era clave?", a: ["Plástico transparente (acetato)", "Madera", "Cartón grueso", "Tela"], c: 0},
            {q: "¿Qué forma geométrica necesitábamos para el holograma?", a: ["Trapecio", "Círculo", "Cuadrado", "Triángulo"], c: 0},
            {q: "En 'Coding Skills', ¿qué entrenamos?", a: ["Lógica y resolución de problemas", "Fuerza", "Dibujo", "Canto"], c: 0},
            {q: "¿Para qué sirve el bloque de 'Velocidad' en Scratch?", a: ["Para que el personaje vaya más rápido o lento", "Para cambiar el color", "Para guardar", "Para borrar"], c: 0},
            {q: "Si en Scratch Jr quiero que algo se repita 4 veces, uso el bloque...", a: ["Repetir (Bucle)", "Esperar", "Saltar", "Parar"], c: 0},
            {q: "¿Qué significa 'Pixel Art'?", a: ["Arte hecho con cuadraditos (píxeles)", "Arte con pintura", "Fotos borrosas", "Dibujos redondos"], c: 0},
            {q: "En los juegos de 'Bebras', ¿qué hay que resolver?", a: ["Desafíos de lógica", "Cuentas matemáticas difíciles", "Peleas de robots", "Carreras"], c: 0},
            {q: "¿Qué es un algoritmo?", a: ["Una lista de pasos para hacer algo", "Un robot", "Un tipo de pantalla", "Un virus"], c: 0},
            {q: "Si uso Makey Makey, ¿con qué puedo reemplazar las teclas?", a: ["Con frutas o plastilina", "Con aire", "Con plástico seco", "Con papel"], c: 0},
            {q: "¿Qué cable debo tocar siempre en Makey Makey para que funcione?", a: ["Tierra (Earth)", "Espacio", "Flecha arriba", "Clic"], c: 0},
            {q: "En 'Math Games', ¿qué materia practicamos usando la compu?", a: ["Matemática", "Lengua", "Sociales", "Gimnasia"], c: 0},
            {q: "¿Qué es un 'Bug'?", a: ["Un error en el programa", "Un insecto real", "Un juego", "Una tecla"], c: 0},
            {q: "En Scratch Jr, el bloque de 'Mensaje' (carta cerrada/abierta) sirve para...", a: ["Que un personaje le avise algo a otro", "Mandar un mail real", "Guardar el juego", "Escribir texto"], c: 0},
            {q: "¿Qué herramienta usamos para buscar imágenes seguras?", a: ["Google Imágenes / Kiddle", "TikTok", "YouTube", "Instagram"], c: 0},
            {q: "Si quiero borrar un personaje en Scratch Jr, ¿qué hago?", a: ["Mantengo apretado hasta que tiembla y toco la X", "Le grito", "Reinicio la tablet", "Toco el botón verde"], c: 0},
            {q: "¿Qué pasa si pongo un bloque de 'Ir a la derecha' y luego 'Ir a la izquierda'?", a: ["Va y vuelve (se queda en el lugar)", "Explota", "Desaparece", "Gira"], c: 0},
            {q: "En el proyecto 'Imperio Incaico', ¿qué herramienta de diseño usamos?", a: ["Canva", "Excel", "Calculadora", "Paint"], c: 0},
            {q: "¿Qué es importante al diseñar un póster en Canva?", a: ["Que se lea bien el texto y tenga lindas imágenes", "Usar todos los colores juntos", "Poner letra muy chiquita", "No poner título"], c: 0},
            {q: "En Scratch, el eje X controla el movimiento...", a: ["Horizontal (izquierda-derecha)", "Vertical (arriba-abajo)", "Diagonal", "Circular"], c: 0},
            {q: "El eje Y controla el movimiento...", a: ["Vertical (arriba-abajo)", "Horizontal", "De profundidad", "De giro"], c: 0},
            {q: "¿Qué es un 'Sprite' en Scratch?", a: ["Un personaje u objeto", "Una bebida", "Un fondo", "Un sonido"], c: 0},
            {q: "Si quiero que mi juego tenga música, uso la pestaña de...", a: ["Sonidos", "Disfraces", "Código", "Variables"], c: 0},
            {q: "¿Qué aprendimos sobre las contraseñas?", a: ["Que no se comparten con extraños", "Que hay que escribirlas en el pizarrón", "Que deben ser '1234'", "Que no sirven"], c: 0},
            {q: "¿Qué es el 'Pensamiento Computacional'?", a: ["Pensar como una compu para resolver problemas", "Saber armar PCs", "Jugar mucho", "Usar calculadora"], c: 0},
            {q: "En Code.org, ¿qué hacíamos con los bloques?", a: ["Encastrarlos para resolver el laberinto", "Tirarlos", "Pintarlos", "Nada"], c: 0},
            {q: "¿Qué es un 'Bucle'?", a: ["Algo que se repite muchas veces", "Un error", "Un botón", "Un cable"], c: 0},
            {q: "En Ozobot, ¿cómo le damos órdenes?", a: ["Con códigos de colores en las líneas", "Con voz", "Con control remoto", "Con la mente"], c: 0},
            {q: "Si el Ozobot ve una línea 'Rojo-Negro-Rojo', ¿qué hace?", a: ["Ejecuta un comando especial (ej: lento/rápido)", "Se apaga", "Gira", "Salta"], c: 0},
            {q: "¿Para qué sirve calibrar el Ozobot?", a: ["Para que lea bien los colores", "Para cargarlo", "Para limpiarlo", "Para que corra más"], c: 0},
            {q: "En el proyecto de Hologramas, ¿usamos un video especial?", a: ["Sí, un video de 4 caras", "No, cualquier video", "Sí, una película entera", "No, una foto"], c: 0},
            {q: "¿Qué es el Hardware?", a: ["Lo que se puede tocar (teclado, pantalla)", "Los programas", "Internet", "Las ideas"], c: 0},
            {q: "¿Qué es el Software?", a: ["Los programas y aplicaciones", "El mouse", "La tablet", "Los cables"], c: 0},
            {q: "En Scratch Jr, ¿cómo cambiamos el fondo?", a: ["Con el botón del paisaje", "Con el botón de la cámara", "Con el botón de la bandera", "No se puede"], c: 0},
            {q: "Si quiero que mi personaje salte, uso el bloque...", a: ["Saltar (flecha curva arriba)", "Mover derecha", "Girar", "Desaparecer"], c: 0},
            {q: "¿Qué es una 'Secuencia'?", a: ["Pasos uno después del otro", "Todo junto", "Pasos desordenados", "Un salto"], c: 0},
            {q: "En Canva, ¿podemos subir nuestras propias fotos?", a: ["Sí, en 'Subidos'", "No", "Solo si pagamos", "Solo dibujos"], c: 0},
            {q: "¿Qué tecla se usa para borrar letras?", a: ["Backspace (Borrar)", "Enter", "Espacio", "Shift"], c: 0},
            {q: "En 'Coding Skills', si me equivocaba...", a: ["Podía intentar de nuevo (Depurar)", "Perdía para siempre", "Se rompía la compu", "Me retaban"], c: 0},
            {q: "¿Qué significa 'URL'?", a: ["La dirección de una página web", "Un tipo de archivo", "Un virus", "Un juego"], c: 0},
            {q: "Para hacer zoom en una imagen, usamos...", a: ["La lupa o los dedos (pinch)", "El teclado", "El botón de apagado", "El parlante"], c: 0},
            {q: "En Scratch Jr, el bloque naranja sirve para...", a: ["Controlar el flujo (esperar, repetir, velocidad)", "Moverse", "Sonar", "Terminar"], c: 0},
            {q: "¿Qué es un 'Avatar'?", a: ["Un personaje que me representa", "Una película", "Un juego", "Una red social"], c: 0},
            {q: "Si quiero escribir mayúsculas, uso la tecla...", a: ["Bloq Mayús / Shift", "Ctrl", "Alt", "Enter"], c: 0},
            {q: "En Ozobot, el color negro sirve para...", a: ["Seguir la línea", "Frenar", "Girar", "Acelerar"], c: 0},
            {q: "¿Qué es un 'Dato'?", a: ["Información", "Un dado", "Un juego", "Un cable"], c: 0},
            {q: "En el juego del Laberinto, el objetivo es...", a: ["Llegar a la meta sin tocar paredes", "Chocar todo", "Quedarse quieto", "Salir del mapa"], c: 0},
            {q: "¿Qué aprendimos sobre cuidar las tablets/compus?", a: ["Usarlas con manos limpias y cuidado", "Golpearlas", "Comer encima", "Mojarlas"], c: 0},
            {q: "¿Te divertiste aprendiendo tecnología?", a: ["¡SÍ, MUCHO!", "Más o menos", "Poquito", "Nada"], c: 0}
    ],

    // ---------------- 6º GRADO ----------------
    // Temas: Rodocodo, Ozoblockly, Lego WeDo, Bebras, Tinkercad (Intro)
    6: [
        {q: "En el proyecto 'Nuestro Legado en 3D', ¿qué programa usamos?", a: ["Tinkercad", "Word", "Paint", "Scratch"], c: 0},
            {q: "En Tinkercad, ¿cómo se llama la base azul donde trabajamos?", a: ["Plano de Trabajo", "Piso", "Mesa", "Suelo"], c: 0},
            {q: "Para hacer un agujero en un objeto en Tinkercad, lo ponemos en modo...", a: ["Hueco", "Sólido", "Líquido", "Transparente"], c: 0},
            {q: "Si quiero unir dos figuras en Tinkercad para que sean una sola, uso...", a: ["Agrupar", "Pegar", "Soldar", "Atar"], c: 0},
            {q: "¿Qué es 'Rodocodo'?", a: ["Un juego de programación de un gato", "Un robot real", "Una comida", "Un programa de dibujo"], c: 0},
            {q: "En Rodocodo, usamos funciones para...", a: ["No repetir el mismo código muchas veces", "Hacer trampa", "Saltar niveles", "Cambiar de color"], c: 0},
            {q: "En Ozobot, ¿qué diferencia hay entre usar marcadores y usar la pantalla?", a: ["La pantalla usa Ozoblockly (bloques)", "No hay diferencia", "Los marcadores son digitales", "La pantalla es mágica"], c: 0},
            {q: "En Ozoblockly, para cargar el código al robot tenemos que...", a: ["Apoyarlo en la pantalla (Flash)", "Conectar un cable", "Usar WiFi", "Soplarle"], c: 0},
            {q: "¿Qué es 'Bebras'?", a: ["Un desafío internacional de pensamiento computacional", "Un castor mascota", "Un videojuego de acción", "Una marca de robots"], c: 0},
            {q: "En Bebras, los problemas se resuelven usando...", a: ["Lógica y deducción", "Calculadora", "Wikipedia", "Adivinando"], c: 0},
            {q: "¿Qué hicimos en el proyecto 'Imperio Incaico'?", a: ["Diseñamos infografías digitales (Canva)", "Hicimos maquetas de barro", "Escribimos un libro a mano", "Nada"], c: 0},
            {q: "En Canva, para agregar un título grande usamos la herramienta...", a: ["Texto", "Fotos", "Elementos", "Subidos"], c: 0},
            {q: "¿Qué es un 'Patrón' en lógica?", a: ["Algo que se repite de forma ordenada", "Un jefe", "Un dibujo feo", "Un error"], c: 0},
            {q: "En Tinkercad, para elevar un objeto del piso usamos...", a: ["El cono negro de arriba", "Las flechas del teclado", "El mouse derecho", "La tecla Espacio"], c: 0},
            {q: "Si quiero imprimir mi diseño 3D, ¿en qué formato lo descargo?", a: [".STL", ".JPG", ".DOC", ".MP3"], c: 0},
            {q: "¿Qué es la 'Ciudadanía Digital'?", a: ["Saber comportarse y cuidarse en internet", "Tener DNI digital", "Vivir dentro de la compu", "Jugar online"], c: 0},
            {q: "En Scratch, ¿qué es una Variable?", a: ["Una cajita para guardar datos (ej: Puntos)", "Un bloque de movimiento", "Un disfraz", "Un fondo"], c: 0},
            {q: "Para que un personaje en Scratch rebote si toca el borde, uso...", a: ["Si toca un borde, rebotar", "Girar 180 grados", "Ir a x:0 y:0", "Esconder"], c: 0},
            {q: "En Lego WeDo, el 'Hub' es...", a: ["El cerebro que conecta todo", "Una rueda", "Un motor", "Un sensor"], c: 0},
            {q: "El sensor de movimiento de Lego WeDo detecta...", a: ["Si algo pasa cerca", "El color", "El sonido", "La temperatura"], c: 0},
            {q: "¿Qué es 'Biip'?", a: ["Una plataforma de desafíos de lógica", "Un robot que hace ruido", "Un sonido de error", "Un juego de autos"], c: 0},
            {q: "En Ozobot, el código 'Turbo' hace que...", a: ["Vaya muy rápido", "Vaya lento", "Gire", "Se apague"], c: 0},
            {q: "Si quiero alinear dos objetos en Tinkercad, uso la herramienta...", a: ["Alinear (L)", "Regla", "Ojo", "Agrupar"], c: 0},
            {q: "En Google Sites, ¿qué botón apreto para que el mundo vea mi página?", a: ["Publicar", "Guardar", "Compartir", "Enviar"], c: 0},
            {q: "En 'Math Games', el objetivo era...", a: ["Entrenar cálculo mental jugando", "Solo jugar", "Aprender a escribir", "Dibujar números"], c: 0},
            {q: "¿Qué es un 'Condicional' (Si... entonces)?", a: ["Una decisión en el código", "Un bucle", "Una variable", "Un evento"], c: 0},
            {q: "En Makey Makey, ¿puedo usar una banana como tecla?", a: ["Sí, porque conduce electricidad", "No, es comida", "Solo si está pelada", "Jamás"], c: 0},
            {q: "En Micro:bit, los botones A y B sirven como...", a: ["Entradas (Input)", "Salidas", "Luces", "Parlantes"], c: 0},
            {q: "¿Qué muestra la pantalla de leds de la Micro:bit?", a: ["Imágenes, números o letras", "Videos 4K", "Fotos a color", "Nada"], c: 0},
            {q: "En el proyecto de Canva, ¿qué era importante citar?", a: ["Las fuentes de información", "El nombre del profesor", "La hora", "El clima"], c: 0},
            {q: "¿Qué es el Ciberbullying?", a: ["Molestar o agredir a alguien por internet", "Jugar con amigos", "Hacer la tarea online", "Programar virus"], c: 0},
            {q: "En Tinkercad, ¿puedo cambiar el color de los objetos?", a: ["Sí, en el menú 'Sólido'", "No, son siempre rojos", "Solo si pago", "Solo a azul"], c: 0},
            {q: "El bloque 'Por siempre' en Scratch sirve para...", a: ["Que la acción no termine nunca", "Que dure 10 segundos", "Que pare", "Que vaya lento"], c: 0},
            {q: "¿Qué es un algoritmo de búsqueda?", a: ["Pasos para encontrar algo", "Esconderse", "Perder cosas", "Un mapa"], c: 0},
            {q: "En Ozoblockly Shape Tracer, el objetivo era...", a: ["Programar el robot para seguir la forma en pantalla", "Dibujar libremente", "Pintar el robot", "Carreras"], c: 0},
            {q: "¿Qué aprendimos sobre la 'Huella Digital'?", a: ["Que todo lo que hacemos online deja rastro", "Que hay que limpiar la pantalla", "Que no existe", "Que se borra sola"], c: 0},
            {q: "En Sphero, ¿qué hay que hacer antes de usarla?", a: ["Calibrar (apuntar la luz azul)", "Desarmarla", "Ponerle nafta", "Mojarla"], c: 0},
            {q: "Si la Sphero gira en círculos sin parar, es porque...", a: ["Usamos un bucle de giro", "Está rota", "Se mareó", "No tiene batería"], c: 0},
            {q: "En Tinkercad, la herramienta 'Scribble' sirve para...", a: ["Dibujar una forma a mano alzada", "Escribir texto", "Borrar", "Pintar"], c: 0},
            {q: "En el proyecto 'Legado', ¿qué intentamos representar?", a: ["Algo importante para dejar a futuros alumnos", "Un juguete", "Nada", "Una copia"], c: 0},
            {q: "¿Qué es un 'Diagrama de Flujo'?", a: ["Un dibujo que muestra los pasos de un algoritmo", "Un río", "Un mapa de subte", "Un dibujo libre"], c: 0},
            {q: "En Scratch, ¿qué bloque detecta si toco un color?", a: ["¿Tocando el color...?", "Si color = rojo", "Ver color", "Oler color"], c: 0},
            {q: "¿Qué es la 'Nube' (Cloud)?", a: ["Espacio en internet para guardar cosas", "El cielo", "Un virus", "Una marca"], c: 0},
            {q: "En Canva, las 'Plantillas' sirven para...", a: ["Empezar con un diseño ya hecho", "Plantar árboles", "Borrar todo", "Imprimir"], c: 0},
            {q: "¿Qué tecla deshace el último error?", a: ["Ctrl + Z", "Ctrl + C", "Alt + F4", "Enter"], c: 0},
            {q: "En Ozoblockly, los bloques de 'Movimiento' son de color...", a: ["Azul/Celeste", "Rojo", "Verde", "Amarillo"], c: 0},
            {q: "En Tinkercad, ¿podemos rotar los objetos?", a: ["Sí, con las flechas curvas", "No", "Solo 90 grados", "Solo si son cubos"], c: 0},
            {q: "¿Qué es un 'Evento' en programación?", a: ["Algo que dispara una acción (ej: Al presionar tecla)", "Una fiesta", "Un error", "Un final"], c: 0},
            {q: "¿Cómo te sentís programando?", a: ["¡Me encanta!", "Me cuesta pero me gusta", "Prefiero otra cosa", "No me gusta"], c: 0},
            {q: "¿Estás listo para 6º grado?", a: ["¡SÍ, CON TODO!", "Más o menos", "Tengo sueño", "No sé"], c: 0}
    ],

    // ---------------- 7º GRADO ----------------
    // Temas: Sphero, Microbit, Tinkercad (Adv), Google Sites, Lógica
    7: [
        {q: "En 'Nuestro Legado en 3D', ¿qué fue lo más importante?", a: ["Diseñar algo con significado y modelarlo", "Jugar", "Romper todo", "Imprimir rápido"], c: 0},
            {q: "En Google Sites, ¿qué es el 'Carrusel de imágenes'?", a: ["Un pase automático de varias fotos", "Una calesita", "Una sola foto", "Un video"], c: 0},
            {q: "Si quiero poner un video de YouTube en mi Google Site, uso...", a: ["Insertar > YouTube", "Copiar pegar el video", "No se puede", "Grabo la pantalla"], c: 0},
            {q: "¿Qué botón apreto en Google Sites para ver cómo queda antes de publicar?", a: ["Vista previa (Ojito)", "Publicar", "Guardar", "Cerrar"], c: 0},
            {q: "En Tinkercad, ¿qué herramienta uso para duplicar y repetir un patrón?", a: ["Duplicar (Ctrl + D)", "Copiar (Ctrl + C)", "Pegar", "Repetir"], c: 0},
            {q: "Si quiero hacer un llavero en Tinkercad, necesito...", a: ["Un objeto sólido y un agujero para la argolla", "Solo texto", "Un cubo cerrado", "Nada"], c: 0},
            {q: "En Sphero Edu, ¿qué tres datos pide el bloque 'Rodar'?", a: ["Rumbo, Velocidad, Tiempo", "Color, Luz, Sonido", "Alto, Ancho, Largo", "X, Y, Z"], c: 0},
            {q: "¿Qué significa que el rumbo de Sphero sea 90°?", a: ["Derecha", "Izquierda", "Adelante", "Atrás"], c: 0},
            {q: "En Micro:bit, el acelerómetro sirve para...", a: ["Detectar movimiento o agitación", "Medir temperatura", "Medir luz", "Escuchar"], c: 0},
            {q: "¿Qué hace el bloque 'Al agitar' en Micro:bit?", a: ["Ejecuta código cuando sacudo la placa", "Apaga la placa", "Prende luces", "Nada"], c: 0},
            {q: "En Bebras, los desafíos evalúan...", a: ["Pensamiento Computacional y abstracción", "Matemática pura", "Lengua", "Historia"], c: 0},
            {q: "En el proyecto 'Imperio Incaico', usamos la tecnología para...", a: ["Investigar y comunicar visualmente", "Jugar", "Ver películas", "Solo escribir"], c: 0},
            {q: "¿Qué es el 'Phishing'?", a: ["Un engaño para robar datos (mail falso)", "Pescar", "Un virus", "Un antivirus"], c: 0},
            {q: "En Tinkercad, la herramienta 'Espejo' (M) sirve para...", a: ["Invertir la figura (simetría)", "Ver mi cara", "Duplicar", "Cortar"], c: 0},
            {q: "¿Qué formato de imagen permite fondo transparente?", a: [".PNG", ".JPG", ".BMP", ".GIF"], c: 0},
            {q: "En Google Sites, ¿puedo agregar un mapa de Google Maps?", a: ["Sí, desde Insertar > Mapa", "No", "Solo si es una foto", "Solo si pago"], c: 0},
            {q: "En Sphero, el bloque 'Matriz de LED' permite...", a: ["Dibujar en las luces del robot", "Apagar todo", "Hablar", "Rodar"], c: 0},
            {q: "Si quiero que la Micro:bit envíe un mensaje a otra, uso...", a: ["Radio", "Bluetooth", "WiFi", "Cable"], c: 0},
            {q: "¿Qué es una Variable Booleana?", a: ["Verdadero o Falso", "Un número", "Un texto", "Una lista"], c: 0},
            {q: "En programación, 'IF / ELSE' significa...", a: ["Si pasa esto... sino...", "Repetir", "Esperar", "Variable"], c: 0},
            {q: "¿Qué es la 'Propiedad Intelectual'?", a: ["El derecho de autor sobre una creación", "Una casa", "Un libro", "Una marca"], c: 0},
            {q: "En Tinkercad, para alinear al centro dos objetos, selecciono ambos y...", a: ["Toco 'L' y los puntos del medio", "Toco Supr", "Los muevo a ojo", "Toco Agrupar"], c: 0},
            {q: "En Rodocodo, el objetivo era...", a: ["Programar secuencias para resolver puzles", "Manejar un auto", "Pintar", "Escribir"], c: 0},
            {q: "¿Qué es un 'Servidor'?", a: ["Una computadora potente que guarda datos de internet", "Un mozo", "Un router", "Un cable"], c: 0},
            {q: "En Google Sites, el menú 'Páginas' sirve para...", a: ["Crear nuevas secciones en la web", "Escribir texto", "Cambiar colores", "Borrar todo"], c: 0},
            {q: "En Micro:bit, los pines 0, 1 y 2 son...", a: ["Pines de conexión (Touch/Caimán)", "Botones", "Luces", "Sensores"], c: 0},
            {q: "¿Qué es 'Open Source'?", a: ["Software de código abierto y gratuito", "Software pago", "Un virus", "Una marca"], c: 0},
            {q: "En Sphero, ¿qué es 'Estabilización'?", a: ["Mantener el robot equilibrado", "Que ruede rápido", "Que salte", "Que cambie de color"], c: 0},
            {q: "Si en Tinkercad agrupo un Sólido y un Hueco, obtengo...", a: ["Un objeto con un agujero/corte", "Dos objetos pegados", "Un objeto más grande", "Nada"], c: 0},
            {q: "¿Qué es una 'Fake News'?", a: ["Noticia falsa para engañar", "Noticia real", "Un diario", "Un chisme"], c: 0},
            {q: "En el proyecto de Legado, ¿usamos medidas?", a: ["Sí, milímetros en Tinkercad", "No, a ojo", "Metros", "Kilómetros"], c: 0},
            {q: "¿Qué tecla uso para seleccionar varios objetos a la vez?", a: ["Shift + Clic", "Ctrl + C", "Alt", "Enter"], c: 0},
            {q: "En Ozoblockly, el Nivel 4 permite...", a: ["Usar lógica avanzada y variables", "Solo mover", "Solo luces", "Nada nuevo"], c: 0},
            {q: "¿Qué es un 'Bucle Anidado'?", a: ["Un bucle dentro de otro bucle", "Un bucle roto", "Un error", "Un pájaro"], c: 0},
            {q: "En Google Sites, 'Temas' cambia...", a: ["Los colores y fuentes de todo el sitio", "Solo una foto", "El nombre", "La URL"], c: 0},
            {q: "Para buscar información confiable, debo mirar...", a: ["La fuente, el autor y la fecha", "Solo el título", "La primera foto", "Wikipedia solamente"], c: 0},
            {q: "En Micro:bit, ¿cómo detecto luz?", a: ["Con los LEDs que actúan de sensor", "No tiene sensor", "Con el botón A", "Con el pin 0"], c: 0},
            {q: "En Sphero, el bloque 'Hablar' hace que...", a: ["La tablet/celu hable", "El robot hable (no tiene parlante)", "Salga texto", "Nada"], c: 0},
            {q: "¿Qué es 'Exportar' un archivo?", a: ["Guardarlo en un formato para usar afuera", "Borrarlo", "Moverlo", "Copiarlo"], c: 0},
            {q: "En Tinkercad, la regla sirve para...", a: ["Medir distancias exactas", "Dibujar líneas", "Cortar", "Nada"], c: 0},
            {q: "¿Qué es un 'Algoritmo Eficiente'?", a: ["El que resuelve el problema en menos pasos", "El más largo", "El más colorido", "El más lento"], c: 0},
            {q: "En el proyecto de Canva, ¿usamos plantillas?", a: ["Sí, para facilitar el diseño", "No, todo desde cero", "No existen", "Estaba prohibido"], c: 0},
            {q: "¿Qué es la 'Identidad Digital'?", a: ["Quiénes somos en internet", "Nuestro DNI", "Una foto", "Un juego"], c: 0},
            {q: "En programación, el 'Debug' es...", a: ["El proceso de arreglar errores", "Crear errores", "Borrar todo", "Jugar"], c: 0},
            {q: "En Google Sites, ¿puedo trabajar en equipo?", a: ["Sí, compartiendo con el mail", "No", "Solo de a uno", "Solo si pago"], c: 0},
            {q: "¿Qué es la IA (Inteligencia Artificial)?", a: ["Sistemas que simulan inteligencia humana", "Un robot malo", "Un videojuego", "Magia"], c: 0},
            {q: "En Sphero, ¿qué pasa si no la calibro?", a: ["Va para cualquier lado", "No anda", "Explota", "Se apaga"], c: 0},
            {q: "En Micro:bit, ¿qué sensor mide la temperatura?", a: ["El sensor de temperatura en el procesador", "No tiene", "El termómetro externo", "Los botones"], c: 0},
            {q: "¿Estás listo para programar robots este año?", a: ["¡SÍ, VAMOS!", "Un poco", "No sé", "Tengo miedo"], c: 0},
            {q: "¿Qué fue lo que más te gustó del año pasado?", a: ["Todo", "Tinkercad", "Programar", "Los Robots"], c: 0}
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

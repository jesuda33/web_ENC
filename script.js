let currentUser = null;

let users = [
    {
        username: "admin",
        email: "admin@paranormal.com",
        password: "admin123",
        profilePic: "images/Foto paranormal.png"
    }
];

const newsData = [
    {
        id: 1,
        title: "El Caso Amityville: Nueva evidencia en las cintas de audio de 1976",
        author: "Andres",
        date: "11 de Abril",
        image: "images/Amytiville.png",
        category: "Fantasmas",
        content: `El Infame Caso Amityville ha resurgido en el debate paranormal tras la reciente publicación de un análisis digital avanzado de las grabaciones de audio originales, conocidas como "Las Cintas de Oron Avenue". Estas cintas, grabadas durante la vigilia en la casa de Ocean Avenue, donde la familia Lutz reportó fenómenos aterradores, ahora revelan nuevos y perturbadores detalles.

Sin embargo, un nuevo análisis por parte de especialistas en acústica forense afirma haber aislado "anomalías vocales" que sugieren una actividad más compleja de lo que se pensó inicialmente.

<br><strong>Las Voces Escandalosas en el Ruido Blanco</strong><br>
Las grabaciones de 1976, notoriamente llenas de ruido blanco y estática, han sido tratadas con algoritmos de IA para filtrar el ruido de fondo. Los analistas reportan haber identificado susurros claros que no pertenecen a ningún miembro de la familia Lutz ni al equipo de investigación presente. Frases como "Salgan" y "Está aquí" se han reportado, añadiendo una capa más de misterio al caso que ha dividido a escépticos y creyentes por décadas.`
    },
    {
        id: 2,
        title: "Reportan actividad Poltergeist: Almacén abandonado de Bogotá",
        author: "María González",
        date: "15 de Abril",
        image: "images/poltergeist.png",
        category: "Fantasmas",
        content: `Un grupo de exploradores urbanos ha documentado lo que parece ser actividad poltergeist en un almacén abandonado en el centro de Bogotá. Los videos muestran objetos moviéndose sin explicación aparente y extraños sonidos que no pueden ser atribuidos a causas naturales.

Los investigadores paranormales han llegado al lugar para realizar un estudio más profundo. Testigos locales reportan haber escuchado ruidos extraños provenientes del edificio durante décadas, pero esta es la primera vez que se documenta evidencia visual.`
    },
    {
        id: 3,
        title: "Expertos debaten: ¿Fue el 'Expediente Enfield' un fraude o un caso demoníaco?",
        author: "Carlos Ruiz",
        date: "18 de Abril",
        image: "images/enfield.png",
        category: "Fantasmas",
        content: `El famoso caso del poltergeist de Enfield continúa generando debate entre expertos. Nuevas entrevistas con testigos originales y análisis forenses de las fotografías han reavivado la discusión sobre la autenticidad de este caso que ocurrió en Londres en 1977.

Mientras algunos investigadores sostienen que hay evidencia clara de fraude, otros argumentan que no todos los fenómenos pueden explicarse. El debate continúa dividiendo a la comunidad paranormal.`
    },
    {
        id: 4,
        title: "Avistamiento masivo de OVNIs cerca de la costa de Chile obliga intervención militar",
        author: "Laura Mendoza",
        date: "20 de Abril",
        image: "images/ovni.png",
        category: "OVNIs",
        content: `Cientos de personas en la Ciudad de México reportaron haber visto luces extrañas en el cielo durante la noche del sábado. Los testigos describen formaciones de luces que realizaban movimientos imposibles para la tecnología conocida.

La Fuerza Aérea Mexicana ha confirmado que no había vuelos programados en la zona durante el avistamiento. Investigadores de fenómenos OVNI han comenzado a recopilar testimonios y evidencia fotográfica del evento.`
    },
    {
        id: 5,
        title: "La 'Muñeca Annabelle' es trasladada bajo extrema seguridad a un nuevo recinto",
        author: "Roberto Santos",
        date: "22 de Abril",
        image: "images/muneca.png",
        category: "Fantasmas",
        content: `El museo Warren, hogar de la famosa muñeca Annabelle, reportó actividad inusual durante el fin de semana. Las cámaras de seguridad capturaron movimientos inexplicables cerca de la vitrina que contiene la muñeca, y varios visitantes reportaron sentirse repentinamente enfermos.

Los custodios del museo han reforzado las medidas de seguridad y los protocolos de protección espiritual. Este no es el primer incidente relacionado con la muñeca, pero es el más documentado hasta la fecha.`
    },
    {
        id: 6,
        title: "Investigación: ¿Es el miedo un catalizador para la aparición de fantasmas?",
        author: "Diana Torres",
        date: "25 de Abril",
        image: "images/simulacro.png",
        category: "Fantasmas",
        content: `Un equipo de investigadores paranormales pasó tres noches en el cementerio de Highgate en Londres, uno de los lugares más embrujados de Inglaterra. Los resultados de su investigación incluyen grabaciones de voz electrónica y anomalías térmicas inexplicables.

Los investigadores reportan haber capturado lo que parece ser una figura oscura moviéndose entre las tumbas. El cementerio tiene una larga historia de avistamientos de fantasmas y leyendas de vampiros.`
    },
    {
        id: 7,
        title: "Descubren un antiguo portal bajo un cementerio en México",
        author: "Fernando López",
        date: "28 de Abril",
        image: "images/portal.png",
        category: "Leyendas Urbanas",
        content: `Arqueólogos mexicanos han descubierto una cámara secreta bajo la pirámide de Teotihuacán que contiene símbolos extraños y una configuración arquitectónica que algunos creen podría haber sido utilizada para rituales paranormales.

Los símbolos encontrados no coinciden con ningún sistema de escritura conocido de la época. Algunos investigadores especulan que podría tratarse de un portal dimensional utilizado por civilizaciones antiguas.`
    },
    {
        id: 8,
        title: "Criptozoólogos presentan pruebas genéticas sobre la existencia del 'Bigfoot'",
        author: "Antonio Vargas",
        date: "30 de Abril",
        image: "images/bigfoot.png",
        category: "Leyendas Urbanas",
        content: `Un grupo de criptozoólogos ha presentado lo que afirman ser pruebas definitivas de la existencia del Pie Grande. Las evidencias incluyen huellas frescas, muestras de pelo no identificado y grabaciones de audio de vocalizaciones que no corresponden a ningún animal conocido.

Los escépticos argumentan que se necesita más evidencia, pero los investigadores insisten en que tienen suficiente material para justificar una expedición mayor en busca de la criatura.`
    },
    {
        id: 9,
        title: "La 'Llorona' en el siglo XXI",
        author: "Patricia Sánchez",
        date: "02 de Mayo",
        image: "images/Llorona.png",
        category: "Fantasmas",
        content: `Un fenómeno extraño ha sido reportado en varios pueblos de España: apariciones de una figura femenina vestida de negro que desaparece cuando la gente se acerca. Los testigos la describen como una "bruja" y algunos afirman que trae mal augurio.

Historiadores locales han encontrado referencias a una leyenda similar que data del siglo XVII. La pregunta que todos se hacen es: ¿se trata de la misma entidad o simplemente una coincidencia?`
    }
];

let forumData = [
    {
        id: 1,
        title: "Presentaciones",
        author: "Admin",
        authorSubtitle: "[Admin]",
        lastReplyTime: "10 minutos",
        replyCount: 5,
        initialPost: {
            author: "Admin",
            date: "hace 4 días",
            text: "¡Bienvenidos al Encuentro Paranormal! Este es el foro oficial de la comunidad. Por favor, usen este tema para presentarse. ¿Cómo descubrieron la página? ¿Cuál es su experiencia paranormal favorita?"
        },
        comments: [
            { author: "Carlos Ruiz", date: "hace 3 días", text: "Hola a todos, soy Carlos. Me fascinan las historias de fantasmas. Conocí la web por la noticia de Enfield." },
            { author: "Laura Mendoza", date: "hace 2 días", text: "¡Hola! Soy Laura. A mí me interesan más los OVNIs. Muy buena la noticia del avistamiento en Chile." },
            { author: "Maria G.", date: "hace 1 día", text: "Saludos. Mi nombre es María. Soy escéptica pero me encanta investigar. El tema del poltergeist en Bogotá me llamó la atención." },
            { author: "Roberto", date: "hace 1 hora", text: "Buenas. Me llamo Roberto. Soy coleccionista de objetos... peculiares. El tema de Annabelle es mi favorito." },
            { author: "Andres", date: "hace 10 minutos", text: "¡Bienvenidos todos! Qué bueno verlos por aquí." }
        ]
    },
    {
        id: 2,
        title: "¿Qué viste en el almacén abandonado?",
        author: "Maria G.",
        authorSubtitle: "[Maria G.]",
        lastReplyTime: "3 Horas",
        replyCount: 5,
        initialPost: {
            author: "Maria G.",
            date: "hace 3 días",
            text: "Acabo de leer la noticia sobre el almacén en Bogotá. Soy de la zona y he escuchado esos ruidos. ¿Alguien más tiene experiencias en ese lugar? ¿Creen que el video de los exploradores es real? Se ven objetos moviéndose solos."
        },
        comments: [
            { author: "Admin", date: "hace 3 días", text: "Gran tema, María. El video es convincente, pero siempre es bueno mantener una mente abierta." },
            { author: "Carlos Ruiz", date: "hace 2 días", text: "Yo sí creo. Los poltergeists son conocidos por mover objetos. Lo que me pregunto es si es un espíritu o una energía residual." },
            { author: "Laura Mendoza", date: "hace 2 días", text: "No descarten que sea un fraude. Es muy fácil mover cosas con hilos hoy en día." },
            { author: "Maria G.", date: "hace 1 día", text: "Laura, entiendo tu punto. Pero los testigos locales (mis abuelos incluidos) llevan 50 años escuchando lo mismo, mucho antes de los videos." },
            { author: "Roberto", date: "hace 1 día", text: "Los objetos que se mueven suelen estar 'atados' a una persona, no a un lugar. ¿Investigaron a los exploradores?" }
        ]
    },
    {
        id: 3,
        title: "Excelente episodio de Psicofonías",
        author: "FanPodcast",
        authorSubtitle: "[Usuario]",
        lastReplyTime: "12 Nov 2025",
        replyCount: 2,
        initialPost: {
            author: "FanPodcast",
            date: "12 Nov 2025",
            text: "Me ha encantado el análisis sobre las psicofonías del último episodio. ¿Tienen planeado hacer uno sobre OVNIs? Creo que sería un tema increíble."
        },
        comments: [
            { author: "Admin", date: "12 Nov 2025", text: "¡Gracias! Sí, tenemos planeado un especial sobre avistamientos masivos para el próximo mes." },
            { author: "Laura Mendoza", date: "12 Nov 2025", text: "¡Siii! El de OVNIs es necesario. Hay mucha info nueva." }
        ]
    },
    {
        id: 4,
        title: "Duda sobre el video de la sombra",
        author: "InvestigadorX",
        authorSubtitle: "[Usuario]",
        lastReplyTime: "12 Nov 2025",
        replyCount: 1,
        initialPost: {
            author: "InvestigadorX",
            date: "12 Nov 2025",
            text: "En el minuto 10:45 del video de la exploración se ve una sombra pasar rápido por la puerta izquierda. ¿Alguien más la notó? Es escalofriante, no parece un error de la cámara."
        },
        comments: [
            { author: "Maria G.", date: "12 Nov 2025", text: "Lo acabo de revisar. Tienes razón, se ve algo oscuro. ¡Qué miedo!" }
        ]
    },
    {
        id: 5,
        title: "Ayuda con una foto extraña",
        author: "Pedro1990",
        authorSubtitle: "[Nuevo]",
        lastReplyTime: "hace 1 semana",
        replyCount: 0,
        initialPost: {
            author: "Pedro1990",
            date: "hace 1 semana",
            text: "Tomé una foto en el cumpleaños de mi sobrina y detrás aparece una cara que no reconocemos. No había nadie ahí. ¿Alguien sabe cómo analizar fotos para ver si es pareidolia o algo más?",
            image: "images/Fantasma.jpg",
            profilePic: "img/img_5.png"
        },
        comments: []
    }
];

const galleryData = [
    { id: 1, title: "El Tablero Ouija", image: "images/Ouija.png", category: "Demonios" },
    { id: 2, title: "Tablero Ouija Alternativo", image: "images/Oija.jpg", category: "Demonios" },
    { id: 3, title: "Dama en la Orilla", image: "images/Fantasma.jpg", category: "Fantasmas" },
    { id: 4, title: "La Mano", image: "images/Fall.jpg", category: "Fantasmas" },
    { id: 5, title: "La Casa Poseída", image: "images/Casa.png", category: "Demonios" },
    { id: 6, title: "Bestia del Bosque", image: "images/Lobo.png", category: "Leyendas Urbanas" },
    { id: 7, title: "El Observador", image: "images/Gato.jpg", category: "Demonios" },
    { id: 8, title: "Figura en el Bosque", image: "images/Teerror.jpg", category: "Leyendas Urbanas" },
    { id: 9, title: "Reflejo Atrapado", image: "images/Fantas.jpg", category: "Demonios" },
    { id: 10, title: "Aparición", image: "images/fant.jpg", category: "Fantasmas" },
    { id: 11, title: "Camino Tenebroso", image: "images/Miedo.jpg", category: "Leyendas Urbanas" },
    { id: 12, title: "La Casa Solitaria", image: "images/Casa.jpg", category: "Fantasmas" }
];

const storiesData = [
    {
        id: 1,
        title: "La casa de mi abuela",
        author: "Carlos Ruiz",
        date: "hace 1 semana",
        image: "images/Casa.jpg",
        category: "Historias Personales",
        content: `El cuarto de huéspedes de mi abuela era mi único refugio cuando niño. Ahora, es el único lugar que evito. Nunca pude dormir allí. La sensación de ser observado era tan tangible como una mano en el hombro. Mi abuela, una mujer de pocas palabras, lo llamaba 'la habitación de las memorias'. Yo lo llamaba el cuarto frío. No importaba el calor que hiciera en el resto de la casa, allí siempre necesitabas una manta.
<br><br>
Una noche, el insomnio me llevó a la cocina por agua. Al pasar por el pasillo, vi la puerta del cuarto entreabierta. Me detuve, porque yo mismo la había cerrado con fuerza. Dentro, de pie junto a la ventana, había una silueta alta y delgada. No era mi abuela. Estaba inmóvil, mirando hacia afuera, a la nada. Mi corazón se detuvo. Retrocedí lentamente, y fue entonces cuando la silueta giró la cabeza, en un movimiento lento y antinatural, hasta mirarme fijamente. No vi un rostro, solo dos puntos de un brillo pálido donde deberían estar los ojos.
<br><br>
Años después, en el funeral de mi abuela, mi madre me confesó la verdad. Su hermano mayor, mi tío abuelo, al que nunca conocí, se había quitado la vida en esa misma habitación. 'Nunca superó la guerra', dijo. 'Y parece que nunca quiso irse de su cuarto'.`
    },
    {
        id: 2,
        title: "El Hombre del Saco",
        author: "Maria G.",
        date: "hace 5 días",
        image: "images/Teerror.jpg",
        category: "Leyendas Urbanas",
        content: `Mi madre me asustaba con 'El Hombre del Saco'. El 'Ropavejero'. La figura sombría que se llevaba a los niños que se portaban mal. Lo superé, como todos. Se convirtió en un chiste. Hasta que me mudé a este apartamento en el primer piso. Hace un mes, empecé a oír ruidos en la ventana de mi habitación, que da a un callejón oscuro. No eran golpes. Era un sonido áspero, como tela de arpillera, como un saco pesado rozando el cristal.
<br><br>
La primera vez, pensé que era un animal. La segunda, un borracho. La tercera vez, me asomé. El callejón estaba vacío, pero el olor... olía a polvo, a ropa vieja y a algo metálico, como sangre seca. A la mañana siguiente, encontré esto en el alféizar, justo fuera de mi ventana: un botón. Un botón de hueso, viejo, sucio y pulido por el uso.
<br><br>
Esa misma semana, el gato del vecino desapareció. La gente del edificio habla de un vagabundo, pero yo sé lo que oí. Anoche, el sonido volvió. Pero esta vez, no estaba solo en la ventana. Lo oí en el pasillo, fuera de mi puerta. Un silbido bajo y el sonido inconfundible de algo pesado... muy pesado... siendo arrastrado por el suelo.`
    },
    {
        id: 3,
        title: "El Pasajero Fantasma",
        author: "Juan Taxista",
        date: "hace 2 semanas",
        image: "images/Miedo.jpg",
        category: "Historias Personales",
        content: `Llevo 20 años conduciendo taxi en el turno de la noche. He visto de todo: borrachos, peleas, gente llorando. Pero nunca había sentido miedo hasta el martes pasado. Recogí a una chica cerca del cementerio central. Iba vestida de blanco, muy pálida. Me pidió que la llevara a una dirección en el barrio antiguo.
<br><br>
Durante el viaje no dijo ni una palabra. Yo miraba por el retrovisor y ella solo miraba por la ventana. Hacía un frío terrible dentro del carro, a pesar de que no tenía el aire acondicionado encendido. Cuando llegamos a la dirección, era una casa en ruinas, abandonada hace años. Me giré para cobrarle y el asiento trasero estaba vacío.
<br><br>
Me bajé del carro, asustado, y un vecino que paseaba a su perro me vio. "No eres el primero", me dijo. "Esa chica murió en un accidente hace 10 años en esa esquina. Siempre pide que la traigan a casa, pero nunca llega".`
    },
    {
        id: 4,
        title: "Voces en el sótano",
        author: "Lucía M.",
        date: "hace 3 días",
        image: "images/Fantasma.jpg",
        category: "Fantasmas",
        content: `Nos acabamos de mudar. La casa es perfecta, grande y luminosa. Excepto por el sótano. Mi perro se niega a bajar. Se queda en la puerta de las escaleras gimiendo y con los pelos de punta. Ayer bajé a buscar unas cajas y escuché claramente un susurro detrás de mi oreja: "Largo de aquí".
<br><br>
Pensé que era mi imaginación, pero luego se fue la luz solo en esa parte de la casa. Subí corriendo las escaleras y sentí que algo me agarraba el tobillo. Tengo la marca de tres dedos morados en mi pierna. No pienso volver a bajar.`
    },
    {
        id: 5,
        title: "El Espejo Maldito",
        author: "Sofía R.",
        date: "hace 1 mes",
        image: "images/Fantas.jpg",
        category: "Demonios",
        content: `Compré un espejo antiguo en una venta de garaje. Era precioso, con un marco dorado tallado. Lo colgué en mi habitación. Esa misma noche, tuve una pesadilla en la que el espejo me tragaba. Al despertar, vi mi reflejo, pero algo estaba mal. Mi reflejo no parpadeaba cuando yo lo hacía.
<br><br>
Intenté quitarlo, pero pesaba demasiado. Pasaron los días y mi salud empeoró. Me sentía débil, drenada. Un día, mi gato bufó al espejo y salió corriendo. Decidí cubrirlo con una sábana. A la mañana siguiente, la sábana estaba en el suelo, rasgada. Llamé a un experto, quien me dijo que el espejo era un portal. Lo rompimos y enterramos los pedazos en tierra santa.`
    },
    {
        id: 6,
        title: "Luces en el Monte",
        author: "Pedro1990",
        date: "hace 2 días",
        image: "images/ovni.png",
        category: "OVNIs",
        content: `Fuimos de acampada al monte el fin de semana. Lejos de la ciudad, el cielo estaba despejado. De repente, vimos tres luces naranjas moverse en formación triangular. No hacían ruido. Se detuvieron justo encima de nosotros y un haz de luz iluminó el bosque.
<br><br>
Sentimos un zumbido en los oídos y perdimos la noción del tiempo. Cuando miramos el reloj, habían pasado tres horas, pero para nosotros fueron solo minutos. Al regresar al auto, la batería estaba muerta y nuestras brújulas giraban sin control.`
    },
    {
        id: 7,
        title: "La Muñeca de Porcelana",
        author: "Clara V.",
        date: "hace 3 semanas",
        image: "images/muneca.png",
        category: "Leyendas Urbanas",
        content: `Heredé una colección de muñecas de mi tía. Una de ellas, vestida de época victoriana, siempre aparecía en lugares distintos a donde la dejaba. Al principio pensé que era mi hija jugando, pero ella juraba que no la tocaba porque le daba miedo.
<br><br>
Una noche escuché risitas en el salón. Bajé y vi a la muñeca sentada en el sofá, con la cabeza girada hacia mí. Sus ojos de vidrio parecían brillar en la oscuridad. Al día siguiente doné toda la colección a un museo.`
    },
    {
        id: 8,
        title: "El Hotel del Salto",
        author: "Viajero Paranormal",
        date: "hace 5 días",
        image: "images/Casa.png",
        category: "Historias Personales",
        content: `Visité el famoso Hotel del Salto antes de que lo remodelaran. La atmósfera era pesada, cargada de tristeza. Mientras tomaba fotos del abismo, sentí un empujón fuerte en la espalda, como si alguien quisiera tirarme.
<br><br>
Me giré asustado, pero no había nadie. Solo la niebla espesa y el sonido de la cascada. Al revelar las fotos, en una de ellas se ve una figura borrosa parada justo detrás de mí, con las manos extendidas hacia mi espalda.`
    }
];

let storiesCurrentPage = 1;
const storiesPerPage = 4;


function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
        window.scrollTo(0, 0);
    }
}

function showRegister() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
}

function register() {
    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const fileInput = document.getElementById('profilePicture');
    
    if (!username || !email || !password) {
        alert('Por favor completa todos los campos');
        return;
    }

    const userExists = users.find(u => u.username === username || u.email === email);
    if (userExists) {
        alert('El usuario o email ya existe');
        return;
    }
    
    const addUser = (profilePicUrl) => {
        const user = {
            username: username,
            email: email,
            password: password,
            profilePic: profilePicUrl
        };
        users.push(user);
        alert('Registro exitoso! Ahora puedes iniciar sesión');
        showLogin();
        document.getElementById('registerUsername').value = '';
        document.getElementById('registerEmail').value = '';
        document.getElementById('registerPassword').value = '';
        document.getElementById('profilePicture').value = '';
    };

    if (fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            addUser(e.target.result);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        addUser('images/default-profile.png');
    }
}

function login() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    if (!username || !password) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    const foundUser = users.find(u => (u.username === username || u.email === username) && u.password === password);
    
    if (foundUser) {
        currentUser = foundUser;
        goToHome();
        updateUserProfile();
    } else {
        alert('Usuario o contraseña incorrectos. (Prueba: admin / admin123)');
    }
}

function updateUserProfile() {
    if (currentUser) {
        const pic = currentUser.profilePic;
        const name = currentUser.username.toUpperCase();

        const profileIds = [
            'userProfilePic', 'userProfileName',
            'userProfilePic2', 'userProfileName2',
            'userProfilePic3', 'userProfileName3',
            'userProfilePic4', 'userProfileName4',
            'userProfilePic5', 'userProfileName5',
            'userProfilePic6', 'userProfileName6',
            'userProfilePic7', 'userProfileName7',
            'userProfilePicHome', 'userProfileNameHome',
            'userProfilePicPod', 'userProfileNamePod',
            'userProfilePicVid', 'userProfileNameVid',
            'userProfilePicPodPlayer', 'userProfileNamePodPlayer',
            'userProfilePicVidPlayer', 'userProfileNameVidPlayer'
        ];

        for (let i = 0; i < profileIds.length; i += 2) {
            const imgEl = document.getElementById(profileIds[i]);
            const nameEl = document.getElementById(profileIds[i+1]);
            if (imgEl) imgEl.src = pic;
            if (nameEl) nameEl.textContent = name;
        }
    }
}

function loadNews(categoryFilter) {
    const grid = document.getElementById('newsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    let newsToDisplay = newsData;

    if (categoryFilter && categoryFilter !== 'Todas') {
        newsToDisplay = newsData.filter(news => news.category === categoryFilter);
    }

    if (newsToDisplay.length === 0) {
        grid.innerHTML = '<p>No hay noticias en esta categoría.</p>';
        return;
    }

    newsToDisplay.forEach(news => {
        const cardHTML = `
            <div class="news-card" onclick="openNews(${news.id})">
                <img src="${news.image}" alt="${news.title}">
                <div class="news-card-content">
                    <h3>${news.title}</h3>
                    <button class="btn-read">Leer más</button>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}

function filterNewsByCategory(category, element) {
    loadNews(category);

    document.querySelectorAll('#categoryList li').forEach(item => {
        item.classList.remove('active');
    });
    
    if (element) {
        element.classList.add('active');
    }
}

function loadRelatedNews(currentNewsId) {
    const relatedContainer = document.getElementById('relatedNews');
    if (!relatedContainer) return;

    relatedContainer.innerHTML = '';

    const related = newsData
        .filter(news => news.id !== currentNewsId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

    related.forEach(news => {
        const itemHTML = `
            <div class="related-item" onclick="openNews(${news.id})">
                <img src="${news.image}" alt="${news.title}">
                <p>${news.title}</p>
            </div>
        `;
        relatedContainer.innerHTML += itemHTML;
    });
}

function openNews(newsId) {
    const news = newsData.find(n => n.id === newsId);
    
    if (news) {
        showPage('articleDetailPage');
        
        document.getElementById('articleTitle').textContent = news.title;
        document.getElementById('articleAuthor').textContent = `${news.author} - ${news.date}`;
        document.getElementById('articleImage').src = news.image;
        document.getElementById('articleContent').innerHTML = news.content.replace(/\n/g, '<br>');
        
        document.querySelector('#articleDetailPage .comments-section').style.display = 'block';
        
        document.querySelector('#articleDetailPage .article-sidebar h3').textContent = 'Noticias relacionadas';
        loadRelatedNews(news.id);

        updateUserProfile();
        window.scrollTo(0, 0);
        updateNavActive('');
    }
}

function openVideoPlayer(url, title, desc) {
    showPage('reproductorVideoPage');
    document.getElementById('videoIframe').src = url;
    document.getElementById('videoPlayerTitle').textContent = title;
    document.getElementById('videoPlayerDesc').textContent = desc;
    updateNavActive('VIDEOS');
}

function openPodcastPlayer(img, title, desc) {
    showPage('reproductorPodcastPage');
    document.getElementById('podcastPlayerImg').src = img;
    document.getElementById('podcastPlayerTitle').textContent = title;
    document.getElementById('podcastPlayerDesc').textContent = desc;
    updateNavActive('PODCAST');
}

function openStory(storyId) {
     const story = storiesData.find(s => s.id === storyId);
    
    if (story) {
        showPage('articleDetailPage');
        
        document.getElementById('articleTitle').textContent = story.title;
        document.getElementById('articleAuthor').textContent = `${story.author} - ${story.date}`;
        document.getElementById('articleImage').src = story.image;
        document.getElementById('articleContent').innerHTML = story.content.replace(/\n/g, '<br>');
        
        document.querySelector('#articleDetailPage .article-sidebar h3').textContent = 'Otras historias';
        const relatedContainer = document.getElementById('relatedNews');
        relatedContainer.innerHTML = '';
        const related = storiesData
            .filter(s => s.id !== storyId)
            .sort(() => 0.5 - Math.random())
            .slice(0, 2);
        
        related.forEach(s => {
            const itemHTML = `
                <div class="related-item" onclick="openStory(${s.id})">
                    <img src="${s.image}" alt="${s.title}">
                    <p>${s.title}</p>
                </div>
            `;
            relatedContainer.innerHTML += itemHTML;
        });

        updateUserProfile();
        window.scrollTo(0, 0);
        updateNavActive('HISTORIAS');
    }
}

function goToHome() {
    showPage('homePage');
    updateNavActive('INICIO');
    updateUserProfile();
}

function goToPodcast() {
    showPage('podcastPage');
    updateNavActive('PODCAST');
    updateUserProfile();
}

function goToVideos() {
    showPage('videosPage');
    updateNavActive('VIDEOS');
    updateUserProfile();
}

function goToNoticias(activeLinkText = 'NOTICIAS') {
    showPage('noticiasPage');
    loadNews('Todas'); 
    filterNewsByCategory('Todas', document.querySelector('#categoryList li'));
    updateNavActive(activeLinkText);
}

function goToForo() {
    loadForumList();
    showPage('foroPage');
    updateNavActive('FORO');
    updateUserProfile(); 
}

function goToGaleria() {
    loadGallery('Todas');
    filterGallery('Todas', document.querySelector('#galleryCategoryList li'));
    showPage('galeriaPage');
    updateNavActive('GALERÍA');
    updateUserProfile(); 
}

function loadGallery(categoryFilter) {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    grid.innerHTML = '';

    let galleryToDisplay = galleryData;
    if (categoryFilter && categoryFilter !== 'Todas') {
        galleryToDisplay = galleryData.filter(item => item.category === categoryFilter);
    }

    galleryToDisplay.forEach(item => {
        const itemHTML = `
            <div class="gallery-item" onclick="openLightbox('${item.image}', '${item.title}')">
                <img src="${item.image}" alt="${item.title}">
                <h4>${item.title}</h4>
            </div>
        `;
        grid.innerHTML += itemHTML;
    });
}

function filterGallery(category, element) {
    loadGallery(category);
    document.querySelectorAll('#galleryCategoryList li').forEach(item => {
        item.classList.remove('active');
    });
    if (element) {
        element.classList.add('active');
    }
}

function goToHistorias() {
    storiesCurrentPage = 1;
    loadStories('Todas');
    filterStories('Todas', document.querySelector('#storiesCategoryList li'));
    showPage('historiasPage');
    updateNavActive('HISTORIAS');
    updateUserProfile();
}

function loadStories(categoryFilter) {
    const grid = document.getElementById('storiesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    let storiesToDisplay = storiesData;
    if (categoryFilter && categoryFilter !== 'Todas') {
        storiesToDisplay = storiesData.filter(story => story.category === categoryFilter);
    }

    const totalPages = Math.ceil(storiesToDisplay.length / storiesPerPage);
    const startIndex = (storiesCurrentPage - 1) * storiesPerPage;
    const endIndex = startIndex + storiesPerPage;
    const paginatedStories = storiesToDisplay.slice(startIndex, endIndex);

    paginatedStories.forEach(story => {
        const summary = story.content.substring(0, 100).split(' ').slice(0, -1).join(' ') + '...';
        const cardHTML = `
            <div class="story-card">
                <img src="${story.image}" alt="${story.title}">
                <div class="story-card-content">
                    <h3>${story.title}</h3>
                    <p>${summary}</p>
                    <button class="btn-read-story" onclick="openStory(${story.id})">Leer más</button>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });

    renderStoriesPagination(totalPages, categoryFilter);
}

function renderStoriesPagination(totalPages, categoryFilter) {
    const paginationContainer = document.getElementById('storiesPagination');
    if (!paginationContainer) return;

    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    paginationContainer.innerHTML = `
        <button class="pagination-btn" onclick="prevStoriesPage('${categoryFilter}')" ${storiesCurrentPage === 1 ? 'disabled' : ''}>&laquo; Anterior</button>
        <span class="pagination-text">Página ${storiesCurrentPage} de ${totalPages}</span>
        <button class="pagination-btn" onclick="nextStoriesPage('${categoryFilter}')" ${storiesCurrentPage === totalPages ? 'disabled' : ''}>Siguiente &raquo;</button>
    `;
}

function prevStoriesPage(categoryFilter) {
    if (storiesCurrentPage > 1) {
        storiesCurrentPage--;
        loadStories(categoryFilter);
    }
}

function nextStoriesPage(categoryFilter) {
    let storiesToDisplay = storiesData;
    if (categoryFilter && categoryFilter !== 'Todas') {
        storiesToDisplay = storiesData.filter(story => story.category === categoryFilter);
    }
    const totalPages = Math.ceil(storiesToDisplay.length / storiesPerPage);

    if (storiesCurrentPage < totalPages) {
        storiesCurrentPage++;
        loadStories(categoryFilter);
    }
}

function filterStories(category, element) {
    storiesCurrentPage = 1;
    loadStories(category);
    document.querySelectorAll('#storiesCategoryList li').forEach(item => {
        item.classList.remove('active');
    });
    if (element) {
        element.classList.add('active');
    }
}

function loadForumList() {
    const forumList = document.getElementById('forumList');
    
    forumList.innerHTML = `
        <div class="forum-table-header">
            <div class="header-temas">TEMAS</div>
            <div class="header-autor">AUTOR</div>
            <div class="header-ultima">ÚLTIMA RESPUESTA</div>
            <div class="header-respuestas">RESPUESTAS</div>
        </div>
    `;

    forumData.forEach(topic => {
        const topicRow = `
            <div class="forum-topic-row" onclick="openTopic(${topic.id})">
                <div class="topic-title">
                    <img src="${topic.initialPost.profilePic || 'images/Foto paranormal.png'}" alt="User Pic">
                    <div>
                        <h4>${topic.title}</h4>
                        <p>${topic.authorSubtitle}</p>
                    </div>
                </div>
                <div class="topic-autor">${topic.author}</div>
                <div class="topic-ultima">${topic.lastReplyTime}</div>
                <div class="topic-respuestas">${topic.replyCount}</div>
            </div>
        `;
        forumList.innerHTML += topicRow;
    });
}

function openTopic(topicId) {
    const topic = forumData.find(t => t.id === topicId);
    if (!topic) return;

    showPage('foroTopicPage');
    updateNavActive('FORO');
    updateUserProfile();
    window.scrollTo(0, 0);

    document.getElementById('topicDetailTitle').textContent = `Tema: ${topic.title}`;
    
    const initialPost = document.getElementById('topicDetailInitialPost');
    
    let evidenceHtml = '';
    if (topic.initialPost.image) {
        evidenceHtml = `<div class="topic-evidence"><img src="${topic.initialPost.image}" alt="Evidencia"></div>`;
    }

    initialPost.innerHTML = `
        <img src="${topic.initialPost.profilePic || 'images/Foto paranormal.png'}" alt="User Pic" class="user-pic-comment">
        <div class="comment-content">
            <span class="comment-author">${topic.initialPost.author}</span>
            <span class="comment-date">${topic.initialPost.date}</span>
            <p>${topic.initialPost.text.replace(/\n/g, '<br>')}</p>
            ${evidenceHtml}
        </div>
    `;
    
    document.getElementById('topicDetailCommentCount').textContent = `Comentarios (${topic.replyCount})`;
    
    const commentsList = document.getElementById('topicDetailCommentsList');
    commentsList.innerHTML = '';

    topic.comments.forEach((comment, index) => {
        const isHidden = index >= 3 ? 'comment-hidden' : '';
        const commentHTML = `
            <div class="comment-post ${isHidden}">
                <img src="images/Foto paranormal.png" alt="User Pic" class="user-pic-comment">
                <div class="comment-content">
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-date">${comment.date}</span>
                    <p>${comment.text.replace(/\n/g, '<br>')}</p>
                </div>
            </div>
        `;
        commentsList.innerHTML += commentHTML;
    });

    if (topic.replyCount > 3) {
        const showMoreButton = document.createElement('button');
        showMoreButton.textContent = `Ver los ${topic.replyCount - 3} comentarios restantes`;
        showMoreButton.className = 'btn-show-more';
        showMoreButton.onclick = function() {
            commentsList.querySelectorAll('.comment-hidden').forEach(comment => {
                comment.style.display = 'flex';
            });
            showMoreButton.remove();
        };
        commentsList.appendChild(showMoreButton);
    }
}

function showNewTopicForm() {
    showPage('foroNewTopicPage');
    updateNavActive('FORO');
    updateUserProfile();
    window.scrollTo(0, 0);
}

function postNewTopic() {
    const title = document.getElementById('newTopicTitle').value.trim();
    const message = document.getElementById('newTopicMessage').value.trim();

    if (!title || !message) {
        alert("Por favor, completa el título y el mensaje.");
        return;
    }

    const newTopic = {
        id: forumData.length + 1,
        title: title,
        author: currentUser.username,
        authorSubtitle: `[${currentUser.username}]`,
        lastReplyTime: "1 segundo",
        replyCount: 0,
        initialPost: {
            author: currentUser.username,
            date: "hace 1 segundo",
            text: message,
            profilePic: currentUser.profilePic
        },
        comments: []
    };

    forumData.push(newTopic);

    document.getElementById('newTopicTitle').value = '';
    document.getElementById('newTopicMessage').value = '';

    alert("¡Tema publicado con éxito!");
    goToForo();
}

function updateNavActive(activePage) {
    document.querySelectorAll('.main-nav').forEach(nav => {
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.textContent.toUpperCase() === activePage.toUpperCase()) {
                link.classList.add('active');
            }
        });
    });
}

function openLightbox(imageSrc, caption) {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImage');
    const captionText = document.getElementById('lightboxCaption');
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = caption;
}

function closeLightbox() {
    document.getElementById('lightboxModal').style.display = "none";
}

window.onload = function() {
    showPage('loginPage');

    document.getElementById('loginPassword').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });
    
    document.getElementById('loginUsername').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });
}
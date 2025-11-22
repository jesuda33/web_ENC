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
        replyCount: 10,
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
            { author: "Roberto", date: "hace 1 día", text: "Los objetos que se mueven suelen estar 'atados' a una persona, no a un lugar. ¿Investigaron a los exploradores?" },
            { author: "Diana Torres", date: "hace 1 día", text: "Exacto, Roberto. Eso se llama 'agente' poltergeist, usualmente un adolescente. Pero si los ruidos son antiguos, la teoría cambia." },
            { author: "Fernando López", date: "hace 1 día", text: "Puede ser una entidad demoníaca menor. Los poltergeists son solo el primer nivel de infestación." },
            { author: "Carlos Ruiz", date: "hace 12 horas", text: "¡Wow Fernando! No creo que debamos saltar a 'demoníaco' tan rápido. La mayoría de los poltergeists son inofensivos." },
            { author: "Maria G.", date: "hace 6 horas", text: "Voy a intentar ir este fin de semana (con permiso) y tomar algunas lecturas de EMF. Les cuento qué encuentro." },
            { author: "Admin", date: "hace 3 horas", text: "¡Ten mucho cuidado, María! No vayas sola." }
        ]
    },
    {
        id: 3,
        title: "Mi experiencia con la Ouija",
        author: "Carlos Ruiz",
        authorSubtitle: "[Carlos Ruiz]",
        lastReplyTime: "8 Horas",
        replyCount: 5,
        initialPost: {
            author: "Carlos Ruiz",
            date: "hace 2 días",
            text: "Quiero compartir algo que me pasó hace años y que me metió en este mundo. Usé una tabla Ouija con unos amigos en una casa vieja. Al principio eran bromas, pero luego el puntero empezó a deletrear el nombre de un familiar mío que había fallecido y que nadie allí conocía. La temperatura bajó de golpe y una bombilla explotó. No la he vuelto a tocar."
        },
        comments: [
            { author: "Roberto", date: "hace 1 día", text: "Las tablas Ouija no son un juego. Son portales. Tuviste suerte de que solo fuera una bombilla." },
            { author: "Maria G.", date: "hace 1 día", text: "Siempre he pensado que es el efecto ideomotor. Es decir, ustedes mismos movían el puntero inconscientemente." },
            { author: "Carlos Ruiz", date: "hace 1 día", text: "¿Cómo explicas el nombre de mi familiar, María? Nadie lo sabía. Y la bombilla." },
            { author: "Admin", date: "hace 10 horas", text: "Carlos, gracias por compartir. Es un recordatorio clásico de que no se debe jugar con lo que no se entiende. Lo más importante es: ¿cerraron la sesión?" },
            { author: "Carlos Ruiz", date: "hace 8 horas", text: "¡Ese fue el problema, Admin! Salimos corriendo. La casa tuvo problemas por meses. Tuvieron que llamar a alguien. Aprendí la lección." }
        ]
    },
    {
        id: 4,
        title: "Avistamiento de OVNIs en Chile",
        author: "Laura",
        authorSubtitle: "[Laura]",
        lastReplyTime: "1 día",
        replyCount: 5,
        initialPost: {
            author: "Laura",
            date: "hace 2 días",
            text: "La noticia de Chile es impresionante. Cientos de testigos, intervención militar... esto no es un globo meteorológico. ¿Qué creen que eran esas luces? ¿Tecnología nuestra secreta o... algo más?"
        },
        comments: [
            { author: "Antonio Vargas", date: "hace 2 días", text: "Definitivamente no es tecnología nuestra. Los movimientos 'imposibles' que describen (giros de 90 grados a Mach 5) violan la física conocida." },
            { author: "Admin", date: "hace 1 día", text: "Es fascinante. La 'Fuerza Aérea Mexicana' (como dice la noticia, aunque el título dice Chile) negando vuelos es un gran indicador." },
            { author: "Laura", date: "hace 1 día", text: "Cierto Admin, la noticia mezcla México y Chile, pero el punto es el avistamiento masivo. Yo creo que son 'ellos'." },
            { author: "Maria G.", date: "hace 1 día", text: "Podrían ser drones militares avanzados. 'Top secret'. El público no sabe ni el 10% de lo que se está probando." },
            { author: "Antonio Vargas", date: "hace 1 día", text: "Drones no explican los avistamientos similares de hace 50 años, María. El patrón es el mismo." }
        ]
    },
    {
        id: 5,
        title: "Debate: ¿El caso Enfield fue real?",
        author: "Roberto",
        authorSubtitle: "[Roberto]",
        lastReplyTime: "4 días",
        replyCount: 5,
        initialPost: {
            author: "Roberto",
            date: "hace 5 días",
            text: "La noticia sobre el 'Expediente Enfield' me hizo pensar. Siempre he estado dividido. Hay fotos que parecen fraude (la niña saltando), pero hay grabaciones de voces y testimonios de policías que son difíciles de refutar. ¿Ustedes qué opinan? ¿Fraude o demoníaco?"
        },
        comments: [
            { author: "Admin", date: "hace 5 días", text: "El caso que lo empezó todo. Personalmente, creo que empezó como un fraude de las niñas para llamar la atención, pero 'abrieron una puerta' y algo real se manifestó." },
            { author: "Carlos Ruiz", date: "hace 4 días", text: "Concuerdo con el Admin. Es un caso 'contaminado'. Empezó falso, terminó real. Las voces que salían de Janet no eran humanas." },
            { author: "Maria G.", date: "hace 4 días", text: "Soy del equipo fraude. Los investigadores les dieron ideas a las niñas y ellas las actuaron. El testimonio del policía solo dice que 'escuchó un ruido'. No vio nada volar." },
            { author: "Roberto", date: "hace 4 días", text: "Pero María, ¿y las levitaciones? ¿Y los objetos calientes?" },
            { author: "Carlos Ruiz", date: "hace 4 días", text: "¡Y la voz! Escuchen las cintas. Una niña de 11 años no puede hacer esa voz gutural por horas." }
        ]
    }
];

const galleryData = [
    { id: 1, title: "El Tablero Ouija", image: "images/Ouija.jpg", category: "Demonios" },
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
        title: "La Llorona del río",
        author: "Usuario Anónimo",
        date: "hace 3 días",
        image: "images/Fantasma.jpg",
        category: "Leyendas Urbanas",
        content: `En el pueblo de mi infancia, el río era el diablo. Los ancianos nos lo prohibían. 'El agua tiene dueña', decían. Nosotros nos reíamos. Pero por las noches, especialmente con luna llena, algo cambiaba. Los grillos se callaban. Los perros no ladraban; gemían, un sonido bajo y aterrador, escondidos bajo las casas. Y entonces empezaba.
<br><br>
'Aaaay, mis hijos...'.
<br><br>
No era un grito. Era un lamento que vibraba en el aire, que se metía en el pecho y te apretaba los pulmones. Sonaba lejos, pero se sentía como si estuviera justo detrás de tu nuca. Un primo mío, de la ciudad, vino de visita. Se burló de nosotros. 'Cobardes'. Una noche, agarró una linterna y se fue al río a 'enfrentar al fantasma'.
<br><br>
Volvió tres horas después. O, al menos, una parte de él volvió. Estaba empapado, temblando, mudo. No había llovido. Sus labios estaban azules. Lo único que hizo fue sentarse en un rincón y mecerse. Estuvo una semana sin hablar. Cuando finalmente lo hizo, solo dijo tres palabras: 'Tenía mis zapatos'. Nunca nos dijo qué vio. Pero hasta el día de hoy, 15 años después, duerme con la luz encendida y no soporta el sonido del agua corriendo, ni siquiera en la ducha.`
    },
    {
        id: 4,
        title: "El demonio del espejo",
        author: "Roberto",
        date: "hace 2 días",
        image: "images/Fantas.jpg",
        category: "Demonios",
        content: `Fue la peor idea de mi vida. Estábamos aburridos, teníamos 16 años y encontramos un libro viejo en el ático de mi abuelo. No era un libro, era un diario. Entre las páginas, había un ritual. 'Cómo ver a tu otro yo'. Un espejo de cuerpo completo, tres velas negras, una gota de sangre y repetir un nombre que no podía pronunciar, a las 3:33 AM.
<br><br>
Lo hicimos. Al principio, nada. Nos reímos del latín mal pronunciado. 'Qué estafa'. Fui a apagar las velas. Y mi reflejo. Se. Quedó. Quieto.
<br><br>
Yo levanté la mano, pero mi reflejo no. Se quedó allí, mirándome. Y entonces, muy lentamente, sonrió. No mi sonrisa. Era demasiado ancha. Los dientes parecían... más afilados. Grité y salí corriendo de la habitación, cerrando la puerta.
<br><br>
Han pasado diez años. No puedo estar en una habitación con un espejo. Los tapo todos. Pero el problema es que ya no lo necesito ver. A veces, de reojo, veo un movimiento en el televisor apagado. En el charco de agua. En el reflejo de la ventana del autobús. Me está viendo. Y cada vez, su sonrisa es más ancha. Anoche, me desperté por un ruido. Había marcas de arañazos en mi puerta. En el lado de *adentro*.`
    },
    {
        id: 5,
        title: "La Estática de la Radio",
        author: "Admin",
        date: "hace 1 día",
        image: "images/Amytiville.png",
        category: "Historias Personales",
        content: `Mi abuelo me dejó su radio. Una de esas tipo catedral, de madera oscura y pesada, con el dial de tela. Estuvo en mi estudio, desconectada, durante meses. Hace un par de semanas, la enchufé por nostalgia. No funcionaba. Solo un zumbido bajo. La dejé así.
<br><br>
Una noche, me despertó un ruido. Era la radio. Estaba encendida, emitiendo una estática ensordecedora. Siempre pasaba a la misma hora: 3:33 AM. La desenchufaba, y al día siguiente la volvía a encontrar enchufada. Empecé a pensar que me estaba volviendo loco, o que era sonámbulo.
<br><br>
Anoche, decidí dejar el celular grabando. Me desperté, como siempre, a las 3:33 AM. La estática llenaba la casa. Pero esta vez, entre el ruido blanco, oí algo más. Susurros. Voces. No era un idioma, era un balbuceo gutural, pero podía distinguir una palabra, repetida: mi nombre.
<br><br>
A la mañana siguiente, revisé la grabación. La radio estaba en silencio. Pero sí había un audio. Era mi propia voz. Estuve roncando hasta las 3:32 AM. Luego me callé. Y a las 3:33 AM, mi voz, clara como el cristal, dijo: 'Ya están aquí. La puerta está abierta. Pueden pasar'.`
    },
    {
        id: 6,
        title: "No mires al Sótano",
        author: "Laura Mendoza",
        date: "hace 1 día",
        image: "images/Fall.jpg",
        category: "Fantasmas",
        content: `En la casa de mi infancia, había una regla de oro: 'No se juega cerca del sótano'. La puerta estaba en el pasillo, siempre cerrada con un candado de hierro que parecía una reliquia. Mis padres decían que era por el moho, la humedad, las ratas. Lo normal. Pero yo oía cosas.
<br><br>
No eran ratas. Eran ruidos pesados. Como si alguien arrastrara un saco de papas por el suelo de cemento. O un golpeteo lento, rítmico. Tres golpes. Pausa. Tres golpes.
<br><br>
Un día, tenía 12 años, encontré la llave en el costurero de mi madre. Esperé a que salieran. El candado rechinó. El aire que subió del sótano olía a tierra mojada y a algo dulce, podrido. Bajé los escalones. Estaba oscuro, pero la luz del pasillo iluminaba el centro. No había muebles, ni cajas. Solo una silla de niño, una mecedora pequeña, en el centro exacto. Y en la pared del fondo, arañado en el yeso, un mensaje: 'NO MIRES ARRIBA'.
<br><br>
El corazón me latía en la garganta. ¿Por qué no mirar arriba? Era un techo de vigas de madera. Levanté la vista. No vi nada. Solo las vigas. Sentí un alivio tonto... y entonces, algo goteó sobre mi mejilla. Era espeso, y frío. Levanté la mano para limpiarme... y me di cuenta de que no estaba goteando *desde* el techo. Estaba goteando desde la oscuridad *entre* las vigas. Y acababa de oír un movimiento.`
    },
    {
        id: 7,
        title: "El Pasajero de Atrás",
        author: "Usuario Anónimo",
        date: "hace 12 horas",
        image: "images/fant.jpg",
        category: "Leyendas Urbanas",
        content: `Soy camionero. Paso mi vida en la carretera, de noche. He oído todas las historias: la chica de la curva, el perro negro, el auto fantasma. Basura para asustar a los novatos. O eso pensaba.
<br><br>
Fue en la Ruta 40, en un tramo muerto de La Pampa. Ni una luz en kilómetros. Eran las 2 AM. Miré el espejo retrovisor por pura costumbre. Y lo vi. Un hombre. Sentado en la litera, detrás de mí.
<br><br>
Pegué tal frenazo que el camión hizo la tijera. La carga se golpeó. Salté de la cabina, corazón en la boca, listo para pelear. Revisé la cabina. Nada. El seguro estaba puesto. Imposible. 'Me estoy durmiendo', pensé. Me lavé la cara con agua de la botella y seguí.
<br><br>
Pero el camión se sentía... pesado. Como si la carga se hubiera duplicado. El olor a ozono, a electricidad, llenó la cabina. No quería mirar el espejo. Pero lo hice. El hombre seguía allí. Pero esta vez, estaba inclinado hacia adelante. Su cara estaba a centímetros de mi nuca. Pude verlo en el espejo. Su piel era gris y agrietada, como el barro seco. Y donde debían estar sus ojos, solo había cuencas vacías y oscuras. Y entonces, susurró, y su voz sonó como estática: 'No pares. Aún no llegamos'.`
    },
    {
        id: 8,
        title: "La muñeca que parpadeó",
        author: "Diana Torres",
        date: "hace 10 horas",
        image: "images/muneca.png",
        category: "Demonios",
        content: `Mi tía abuela era una coleccionista excéntrica. Cuando murió, mi madre heredó gran parte de su... basura. Entre ella, una muñeca de porcelana victoriana llamada 'Isabelle'. Era horrible. Con un vestido de encaje amarillento y ojos de cristal que te seguían por la habitación. Mi madre, pensando que era un 'valioso recuerdo', la puso en la repisa de mi cuarto.
<br><br>
La odiaba. Una noche, mientras leía, juré que la vi parpadear. 'Imposible', me dije, 'son de vidrio'. Me levanté, la tomé y la metí en el fondo de mi armario, bajo una pila de zapatos viejos. 'Ahí te quedas'.
<br><br>
A la mañana siguiente, me desperté con una sensación extraña. Un silencio pesado. 'Isabelle' estaba sentada en la silla de mi escritorio, mirándome. El corazón se me subió a la garganta. Mi madre. Tenía que ser mi madre, jugándome una broma.
<br><br>
Corrí a la cocina. '¡Mamá, qué graciosa!'. Ella no entendía nada. Juró que no había entrado a mi cuarto. Fue entonces cuando volví, y noté el segundo detalle. Los labios de porcelana de la muñeca, que siempre habían sido una línea recta y seria, ahora estaban curvados en una leve, diminuta... sonrisa. Y en el vestido de encaje, que yo recordaba impecable, había un pequeño hilo de algo rojo y fresco.`
    },
    {
        id: 9,
        title: "El hospital abandonado",
        author: "Carlos Ruiz",
        date: "hace 8 horas",
        image: "images/Casa.png",
        category: "Fantasmas",
        content: `La exploración urbana era nuestro pasatiempo. El viejo hospital psiquiátrico de la colina era el 'Santo Grial'. Llevaba 30 años cerrado, pudriéndose. Entramos por una ventana del ala de pediatría. El lugar apestaba a moho y decadencia.
<br><br>
Llegamos a la morgue. Estaba en el sótano, y era la habitación más fría que he sentido en mi vida. Las gavetas de metal estaban allí, intactas. Mi amigo Juan, el valiente, abrió una. El sonido metálico fue ensordecededor en el silencio. Estaba vacía, por supuesto. Nos reímos del alivio.
<br><br>
Fue entonces cuando oímos el 'DING'. Inconfundible. El sonido de un ascensor llegando a su piso. Nos quedamos helados. El indicador sobre el ascensor de carga, al final del pasillo, se iluminó en un rojo oxidado: 'SÓTANO'. No había electricidad en ese edificio.
<br><br>
Las puertas de metal se abrieron con un chirrido que nos taladró los oídos. Salimos corriendo. Empujándonos. Yo era el último. Justo antes de subir la escalera, sentí un aliento helado en mi nuca, tan frío que quemaba. Y un susurro, tan claro como si estuviera en mi oído: 'El doctor te recibirá ahora. Quédate. La consulta es gratis'.`
    },
    {
        id: 10,
        title: "Silbidos en la Noche",
        author: "Fernando López",
        date: "hace 6 horas",
        image: "images/Lobo.png",
        category: "Leyendas Urbanas",
        content: `En los llanos de mi país, los ancianos te advierten sobre 'El Silbón'. La leyenda es clara: es el espíritu de un hombre que mató a su padre, condenado a vagar con un saco lleno de sus huesos. Tiene una regla: si oyes su silbido lejos, es porque está muy cerca. Si lo oyes cerca, estás a salvo; ya se va.
<br><br>
Yo, un hombre de ciudad, me reí. 'Supersticiones'. Estaba acampando solo, cerca de un río seco. A medianoche, oí el silbido. Agudo, fantasmal. 'Si-la-sol-fa-mi-re-do'. Sonaba lejísimos, como si viniera del otro lado de la montaña. Mi sangre se heló. Recordé la regla. 'Lejos significa cerca'.
<br><br>
El terror fue paralizante. Me quedé inmóvil en mi tienda. Entonces, oí el otro sonido. El sonido que la leyenda no menciona. El 'clac-clac-clac' rítmico de huesos secos, golpeándose entre sí, dentro de un saco. Y el olor. Un olor a polvo de tumba y a carne seca. El sonido venía de justo fuera de mi tienda. Y el silbido... el silbido ahora sonaba a kilómetros de distancia.`
    },
    {
        id: 11,
        title: "El juego de la medianoche",
        author: "Andres",
        date: "hace 4 horas",
        image: "images/Ouija.jpg",
        category: "Demonios",
        content: `Lo leímos en un foro de internet. El 'Juego de la Medianoche'. Un ritual de ' invocación pagano'. Necesitabas una vela, sal, una puerta de madera y escribir tu nombre en un papel con tu propia sangre. Una estupidez adolescente. Éramos cuatro.
<br><br>
Seguimos los pasos. 12:00 AM. Apagamos todas las luces. Empezó el juego. El objetivo: moverse por la casa a oscuras, solo con tu vela, y evitar al 'Hombre de la Medianoche' hasta las 3:33 AM. Si tu vela se apaga, tienes 10 segundos para volver a encenderla.
<br><br>
A las 2:15 AM, la vela de mi amiga Sara se apagó. De golpe, como si la hubieran soplado. Oímos su grito ahogado. Luego silencio. 'Sara, basta de bromas', dije. No hubo respuesta. Oímos un golpe fuerte, como si un mueble pesado hubiera caído en la cocina. Nos aterramos. Nos quedamos juntos en el baño, rodeados de sal, hasta las 3:33 AM.
<br><br>
Cuando encendimos las luces, la casa estaba destrozada. Sillas volcadas, platos rotos. Y Sara no estaba. La policía la encontró a la mañana siguiente, en el parque, a tres kilómetros. Estaba en shock, con los ojos abiertos, y no hablaba. Solo repetía algo en voz baja. Cuando me acerqué, pude oírla: 'Me vio. Me vio. Y me dejó ganar'.`
    },
    {
        id: 12,
        title: "La foto familiar",
        author: "Laura Mendoza",
        date: "hace 2 horas",
        image: "images/Miedo.jpg",
        category: "Fantasmas",
        content: `Mi abuela murió y nos dejó la casa. Mientras limpiábamos el ático, encontré una caja de latón oxidada llena de fotografías en blanco y negro. Eran de los años 40. Mi bisabuela, mi abuela de niña. Y una foto me llamó la atención.
<br><br>
Era una foto familiar. Todos posando frente a la casa. Mi bisabuelo, serio. Mi abuela, una niña de 5 años con un vestido blanco. Y al lado de ella, agarrando su mano, había otra niña. Idéntica. Una gemela. Con el mismo vestido, el mismo peinado. Pero su cara... estaba borrosa. No desenfocada. Borrada, como si alguien la hubiera tachado con un movimiento rápido.
<br><br>
Le pregunté a mi madre. Se puso pálida. 'Mi madre nunca tuvo una hermana. Fue hija única'. Esa noche, no pude dormir. Bajé a la sala y volví a mirar la foto con una lupa. El borrón no era un defecto. Mirando de cerca, no era un borrón en absoluto. Era una masa de... algo. Como insectos pequeños, o estática, vibrando donde debería estar la cara. Y entonces vi la mano. La mano de mi abuela. No estaba agarrando la mano de la 'gemela'. La 'gemela' le estaba agarrando la muñeca. Y sus dedos eran demasiado largos.`
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
        goToNoticias('INICIO');
        updateUserProfile();
    } else {
        alert('Usuario o contraseña incorrectos. (Prueba: admin / admin123)');
    }
}

function updateUserProfile() {
    if (currentUser) {
        const pic = currentUser.profilePic;
        const name = currentUser.username.toUpperCase();

        if (document.getElementById('userProfilePic')) {
            document.getElementById('userProfilePic').src = pic;
            document.getElementById('userProfileName').textContent = name;
        }
        if (document.getElementById('userProfilePic2')) {
            document.getElementById('userProfilePic2').src = pic;
            document.getElementById('userProfileName2').textContent = name;
        }
        if (document.getElementById('userProfilePic3')) {
            document.getElementById('userProfilePic3').src = pic;
            document.getElementById('userProfileName3').textContent = name;
        }
        if (document.getElementById('userProfilePic4')) {
            document.getElementById('userProfilePic4').src = pic;
            document.getElementById('userProfileName4').textContent = name;
        }
        if (document.getElementById('userProfilePic5')) {
            document.getElementById('userProfilePic5').src = pic;
            document.getElementById('userProfileName5').textContent = name;
        }
        if (document.getElementById('userProfilePic6')) {
            document.getElementById('userProfilePic6').src = pic;
            document.getElementById('userProfileName6').textContent = name;
        }
        if (document.getElementById('userProfilePic7')) {
            document.getElementById('userProfilePic7').src = pic;
            document.getElementById('userProfileName7').textContent = name;
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

function loadRelatedStories(currentStoryId) {
    const relatedContainer = document.getElementById('relatedNews');
    if (!relatedContainer) return;

    relatedContainer.innerHTML = '';

    const related = storiesData
        .filter(story => story.id !== currentStoryId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

    related.forEach(story => {
        const itemHTML = `
            <div class="related-item" onclick="openStory(${story.id})">
                <img src="${story.image}" alt="${story.title}">
                <p>${story.title}</p>
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

function openStory(storyId) {
    const story = storiesData.find(s => s.id === storyId);
    if (!story) return;

    showPage('articleDetailPage');
    
    document.getElementById('articleTitle').textContent = story.title;
    document.getElementById('articleAuthor').textContent = `${story.author} - ${story.date}`;
    document.getElementById('articleImage').src = story.image;
    document.getElementById('articleContent').innerHTML = story.content.replace(/\n/g, '<br>');
    
    document.querySelector('#articleDetailPage .comments-section').style.display = 'none';

    document.querySelector('#articleDetailPage .article-sidebar h3').textContent = 'Otras historias';
    loadRelatedStories(story.id);
    
    updateUserProfile();
    window.scrollTo(0, 0);
    updateNavActive('HISTORIAS');
}

function goToNoticias(activeLinkText = 'NOTICIAS') {
    showPage('noticiasPage');
    if (activeLinkText === 'INICIO') {
        loadNews('Todas');
    } else {
        loadNews('Todas'); 
    }
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
                    <img src="images/Foto paranormal.png" alt="User Pic">
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
    initialPost.innerHTML = `
        <img src="images/Foto paranormal.png" alt="User Pic" class="user-pic-comment">
        <div class="comment-content">
            <span class="comment-author">${topic.initialPost.author}</span>
            <span class="comment-date">${topic.initialPost.date}</span>
            <p>${topic.initialPost.text.replace(/\n/g, '<br>')}</p>
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
            text: message
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
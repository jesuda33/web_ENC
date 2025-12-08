let currentUser = null;
let currentGalleryIndex = 0;
let currentFilteredGallery = [];

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
        content: `El infame caso de Amityville ha resurgido con una fuerza aterradora tras cuarenta años de silencio relativo. Durante décadas, las grabaciones originales de audio, conocidas como "Las Cintas de Ocean Avenue", fueron desestimadas por la comunidad científica debido a la densa capa de estática y ruido blanco que las hacía ininteligibles. Sin embargo, un nuevo análisis forense realizado por el Instituto de Parapsicología de Massachusetts utilizando algoritmos de inteligencia artificial para la limpieza de audio ha revelado algo que ha dejado helados a los técnicos.
        <br><br>
        Al eliminar las capas de ruido ambiental, no se encontró el silencio de una casa vacía. Se encontraron susurros. Cientos de ellos. Las grabaciones, tomadas en las habitaciones vacías mientras la familia Lutz dormía, muestran una cacofonía de voces superpuestas que parecen discutir entre sí. Lo más perturbador ocurrió en la cinta número 4, grabada a las 3:15 AM en el sótano. Una voz gutural, que no corresponde al rango vocal humano conocido, se escucha claramente diciendo: "No los dejen salir... la sangre nos llama".
        <br><br>
        El ingeniero de sonido principal del proyecto renunció dos días después de escuchar el audio limpio, alegando que desde entonces escuchaba rasguños dentro de las paredes de su propio apartamento. "Esa cosa no estaba grabada en la cinta", declaró a la prensa local antes de desaparecer de la vida pública. "Esa cosa estaba esperando a que alguien la escuchara para volver a salir". Las autoridades eclesiásticas han solicitado la destrucción inmediata del material digital restaurado.`,
        comments: [
            { author: "Lucia", date: "Hace 2 horas", text: "Siempre supe que esa casa tenía algo vivo. No es solo un fantasma, es algo más antiguo." },
            { author: "Marcos", date: "Hace 5 horas", text: "Dicen que el ingeniero que renunció terminó en un psiquiátrico. Esto es serio." },
            { author: "Investigador", date: "Hace 1 día", text: "He escuchado el fragmento filtrado. Se me heló la sangre." }
        ]
    },
    {
        id: 2,
        title: "Reportan actividad Poltergeist: Almacén abandonado de Bogotá",
        author: "María González",
        date: "15 de Abril",
        image: "images/poltergeist.png",
        category: "Fantasmas",
        content: `Lo que comenzó como una simple exploración urbana en el barrio del Voto Nacional en Bogotá se ha transformado en una investigación policial de alto nivel. Un grupo de tres exploradores ingresó anoche a un antiguo almacén textil abandonado desde el incendio de 1998, equipados con cámaras de visión nocturna y medidores EMF. No esperaban encontrar nada más que polvo y escombros, pero lo que capturaron sus cámaras ha desafiado toda lógica.
        <br><br>
        En el video, que ya ha sido confiscado parcialmente por las autoridades, se observa cómo maquinaria industrial de más de media tonelada es arrastrada violentamente por el suelo de concreto, produciendo un chirrido ensordecedor. No hay cables, no hay trucos. Pero lo peor ocurre en el minuto 23 de la grabación. Mientras uno de los exploradores enfoca hacia una esquina oscura donde la temperatura bajó repentinamente a -5 grados, una figura humanoide, compuesta enteramente de sombras densas y con extremidades desproporcionadamente largas, se desprende de la pared y se abalanza sobre la cámara.
        <br><br>
        Los tres jóvenes fueron encontrados en estado de shock catatónico a las afueras del edificio. El guardia de seguridad de la cuadra, un hombre llamado Rogelio con 20 años en el sector, afirmó: "Les dije que no entraran. Esa fábrica no está vacía. Los trabajadores que murieron en el incendio siguen fichando su entrada todas las noches a las 3 de la mañana. Se escuchan los gritos y el olor a carne quemada inunda la calle".`,
        comments: [
            { author: "Pedro", date: "Hace 30 min", text: "Yo vivo a dos cuadras. Anoche los perros no paraban de aullar." },
            { author: "Ana", date: "Hace 1 hora", text: "Mi tío trabajaba ahí antes del incendio. Dice que el dueño hizo pactos para tener éxito." }
        ]
    },
    {
        id: 3,
        title: "Expertos debaten: ¿Fue el 'Expediente Enfield' un fraude o un caso demoníaco?",
        author: "Carlos Ruiz",
        date: "18 de Abril",
        image: "images/enfield.png",
        category: "Fantasmas",
        content: `Casi medio siglo después, el Poltergeist de Enfield sigue siendo la herida abierta de la parapsicología británica. Nuevos documentos desclasificados de la policía de Londres han salido a la luz esta semana, revelando testimonios de oficiales que nunca se hicieron públicos por miedo al ridículo. El informe de la agente Carolyn Heeps, quien juró ver una silla levitar y moverse por la sala, contiene una posdata manuscrita que había sido tachada en los informes oficiales.
        <br><br>
        En la nota, la agente describe un evento aterrador: "No era solo que las cosas se movieran. Era la sensación de malicia. Cuando la niña, Janet, hablaba con esa voz ronca de anciano, el aire en la habitación olía a azufre y a descomposición. Una noche, vi cómo su sombra se movía independientemente de su cuerpo. La sombra tenía cuernos". Este detalle cambia la narrativa completamente, moviendo la teoría de un poltergeist travieso a una posesión demoníaca completa.
        <br><br>
        Los escépticos siempre apuntaron a que las niñas fingían, pero las nuevas imágenes térmicas recuperadas de la investigación original muestran anomalías de calor con forma humana parada junto a las camas de las niñas mientras ellas dormían inmóviles. Algo caliente, invisible y vivo estaba en esa habitación con ellas, observándolas respirar cada noche.`,
        comments: [
            { author: "Juan", date: "Hace 1 día", text: "La voz de Janet nunca pudo ser fingida por tanto tiempo sin dañar sus cuerdas vocales." },
            { author: "Sofia", date: "Hace 2 días", text: "La familia sufrió mucho, nadie finge ese nivel de terror por años." },
            { author: "Carlos", date: "Hace 3 días", text: "Esa casa debería ser demolida y la tierra bendecida." }
        ]
    },
    {
        id: 4,
        title: "Avistamiento masivo de OVNIs cerca de la costa de Chile obliga intervención militar",
        author: "Laura Mendoza",
        date: "20 de Abril",
        image: "images/ovni.png",
        category: "OVNIs",
        content: `El silencio se rompió en la base naval de Valparaíso a las 02:00 horas. Los radares detectaron no uno, sino una formación de doce objetos no identificados emergiendo del océano Pacífico a una velocidad que desafía las leyes de la física. No hubo estampido sónico al romper la barrera del sonido, solo un silencio sepulcral mientras las luces ascendían hacia la estratosfera.
        <br><br>
        Testigos civiles en la costa reportaron ver "orbes de fuego líquido" danzando sobre el agua. Lo más inquietante es el testimonio filtrado de un piloto de interceptación enviado a investigar. En la frecuencia de radio, se escucha al piloto gritar: "No son naves. Señor, no son máquinas. Están... cambiando de forma. Me están mirando. ¡Están dentro de mi sistema de navegación!". La transmisión se corta con un sonido estático agudo que, al ser analizado, contiene patrones matemáticos complejos.
        <br><br>
        El gobierno ha declarado la zona como espacio aéreo restringido indefinidamente. Biólogos marinos locales han reportado la muerte masiva de fauna marina en el área del avistamiento, con los cuerpos de los animales presentando quemaduras por radiación desconocida. ¿Qué hay bajo las aguas de Chile?`,
        comments: [
            { author: "SkyWatcher", date: "Hace 10 min", text: "Tengo videos desde la playa. El mar brillaba en color violeta." },
            { author: "Luis", date: "Hace 20 min", text: "No estamos solos, y parece que tampoco estamos a salvo." }
        ]
    },
    {
        id: 5,
        title: "La 'Muñeca Annabelle' es trasladada bajo extrema seguridad a un nuevo recinto",
        author: "Roberto Santos",
        date: "22 de Abril",
        image: "images/muneca.png",
        category: "Fantasmas",
        content: `El traslado de la muñeca más peligrosa del mundo no estaba programado. Fue una emergencia. Los cuidadores del Museo Oculto de los Warren notaron hace una semana que la caja de cristal sagrado que contiene a Annabelle había comenzado a agrietarse desde adentro. No había impacto externo. La presión venía del interior.
        <br><br>
        Durante el proceso de extracción para cambiar el contenedor, el sacerdote encargado del ritual de contención sufrió un ataque cardíaco fulminante justo cuando roció el agua bendita sobre la muñeca de trapo. Los testigos afirman que, por un microsegundo, la expresión cosida y sonriente de la muñeca cambió a una mueca de odio absoluto. Las luces del recinto estallaron y la temperatura bajó drásticamente.
        <br><br>
        Annabelle ahora descansa en una bóveda reforzada con plomo y bendecida por tres denominaciones religiosas diferentes. Sin embargo, los guardias del turno nocturno reportan que, a pesar del grosor de las paredes, aún pueden escucharla. Dicen que ya no ríe como antes. Ahora susurra nombres. Los nombres de los hijos de los guardias.`,
        comments: [
            { author: "TerrorFan", date: "Hace 4 horas", text: "Esa cosa no es una muñeca, es un envase para un demonio mayor." },
            { author: "Elena", date: "Hace 6 horas", text: "Pobre sacerdote. Nadie debería jugar con esas fuerzas." }
        ]
    },
    {
        id: 6,
        title: "Investigación: ¿Es el miedo un catalizador para la aparición de fantasmas?",
        author: "Diana Torres",
        date: "25 de Abril",
        image: "images/simulacro.png",
        category: "Fantasmas",
        content: `Un polémico estudio llevado a cabo en el Cementerio de Highgate ha cruzado los límites éticos de la parapsicología. Un equipo de investigadores sometió a seis voluntarios a privación sensorial y estímulos de terror inducido dentro de las criptas victorianas durante 72 horas. La teoría: el miedo humano actúa como una batería, una fuente de energía que las entidades necesitan para manifestarse físicamente.
        <br><br>
        Los resultados fueron aterradores. A medida que el pánico de los sujetos aumentaba, los equipos de medición registraron picos de energía electromagnética masivos. Pero no se detuvo ahí. Las cámaras de seguridad captaron niebla negra formándose alrededor de los voluntarios más aterrorizados. Uno de los sujetos tuvo que ser hospitalizado tras aparecer con marcas de quemaduras en forma de manos en su espalda, marcas que aparecieron mientras estaba solo en una habitación cerrada herméticamente.
        <br><br>
        "Las alimentamos", concluyó el director del estudio antes de que la universidad clausurara la investigación. "Nuestros gritos son su cena. Al tener miedo, les abrimos la puerta para entrar".`,
        comments: [
            { author: "Psicologo", date: "Hace 1 semana", text: "Es la teoría del Tulpa. La mente crea al monstruo." }
        ]
    },
    {
        id: 7,
        title: "Descubren un antiguo portal bajo un cementerio en México",
        author: "Fernando López",
        date: "28 de Abril",
        image: "images/portal.png",
        category: "Leyendas Urbanas",
        content: `Bajo la tierra sagrada de un cementerio colonial en el centro de México, una excavación ilegal ha desenterrado algo que la historia había intentado olvidar. Se trata de una estructura circular de obsidiana negra, perfectamente pulida, enterrada a diez metros de profundidad. No hay marcas de herramientas. La piedra está fría al tacto, absurdamente fría, robando el calor de cualquiera que se acerque.
        <br><br>
        Los saqueadores que encontraron el sitio desaparecieron. Solo quedó una cámara GoPro en el suelo. El video recuperado muestra a los hombres limpiando el polvo del espejo de obsidiana. Cuando uno de ellos se mira en el reflejo, no ve su propio rostro. Ve el rostro de algo muerto, podrido, que le sonríe desde el otro lado. Luego, manos pálidas emergen de la superficie sólida de la piedra y lo arrastran hacia adentro mientras sus gritos se ahogan en la oscuridad.
        <br><br>
        El gobierno ha sellado la entrada con concreto, pero los vecinos reportan que por las noches, el suelo vibra. Dicen que lo que sea que esté allí abajo, está golpeando la puerta desde adentro, tratando de salir de nuevo.`,
        comments: [
            { author: "Azteca", date: "Hace 3 días", text: "Espejo de Tezcatlipoca. Nunca debieron tocarlo." },
            { author: "Lara", date: "Hace 4 días", text: "Dicen que si pegas la oreja al suelo, se escuchan lamentos." }
        ]
    },
    {
        id: 8,
        title: "Criptozoólogos presentan pruebas genéticas sobre la existencia del 'Bigfoot'",
        author: "Antonio Vargas",
        date: "30 de Abril",
        image: "images/bigfoot.png",
        category: "Leyendas Urbanas",
        content: `Ya no son fotos borrosas ni testimonios de granjeros asustados. Esta vez es sangre. Una expedición en los bosques profundos de Oregón ha regresado con una muestra biológica extraída de una trampa para osos destrozada. La criatura que cayó en ella escapó, pero dejó atrás tejido y sangre.
        <br><br>
        El análisis de ADN realizado por tres laboratorios independientes ha arrojado el mismo resultado inconcluso y aterrador: "Especie desconocida de primate con hibridación humana". El ADN es 98% similar al humano, pero ese 2% restante no pertenece a ningún animal de la Tierra. Es algo antiguo, brutal y poderoso.
        <br><br>
        Lo más inquietante no es la ciencia, sino lo que sucedió al equipo esa noche. Reportan haber sido acechados no por un animal, sino por una tribu. Escucharon un lenguaje primitivo, silbidos coordinados y golpes en los árboles que los rodearon. "No es un simio tonto", dijo el líder de la expedición. "Son inteligentes. Nos dejaron ir para que le dijéramos al mundo que este bosque es suyo. Y están enojados".`,
        comments: [
            { author: "Hiker", date: "Hace 2 horas", text: "Llevo años diciendo que nos observan en los bosques nacionales." },
            { author: "Bio", date: "Hace 5 horas", text: "Si son inteligentes, ¿por qué se esconden? ¿A qué le temen ellos?" }
        ]
    },
    {
        id: 9,
        title: "La 'Llorona' en el siglo XXI",
        author: "Patricia Sánchez",
        date: "02 de Mayo",
        image: "images/Llorona.png",
        category: "Fantasmas",
        content: `El mito ha evolucionado. Ya no se limita a los ríos rurales de México. Los reportes de la Llorona se han globalizado y urbanizado. En las últimas semanas, cámaras de seguridad en Ciudad de México, Madrid y Buenos Aires han captado la misma anomalía: una mujer vestida de blanco vaporoso caminando por avenidas principales a las 3:33 AM.
        <br><br>
        Lo aterrador es que no camina; flota a centímetros del asfalto. Y su lamento ya no es un grito lejano. Los testigos que han tenido la desgracia de escucharla de cerca describen un sonido que induce parálisis del sueño instantánea y hemorragias nasales. Un conductor de Uber en Bogotá grabó el sonido con su celular antes de chocar. En el audio, bajo el llanto desgarrador, se escucha una frase repetida en náhuatl antiguo que los lingüistas han traducido como: "El tiempo del agua roja ha llegado".
        <br><br>
        ¿Se trata de una histeria colectiva o una entidad antigua que está ganando poder? Las desapariciones de niños cerca de fuentes de agua urbanas han aumentado un 300% este mes. Cierren sus grifos.`,
        comments: [
            { author: "Abuela", date: "Hace 12 horas", text: "Ella busca reemplazos para lo que perdió." },
            { author: "Sceptic", date: "Hace 13 horas", text: "Seguro es una campaña viral de alguna película, espero..." }
        ]
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
        content: `El cuarto de huéspedes de mi abuela era mi único refugio cuando niño, o al menos eso creía mi madre. Para mí, era una jaula de hielo. Ahora que soy adulto, todavía evito pasar por ese pasillo. Mi abuela, una mujer de pocas palabras y mirada severa, lo llamaba 'la habitación de las memorias'. Yo lo llamaba el cuarto frío. No importaba que fuera pleno agosto y el calor derritiera el asfalto afuera; al cruzar ese umbral, el aliento se te condensaba y un olor a naftalina y flores podridas te golpeaba la garganta.
        <br><br>
        Una noche, el insomnio me llevó a la cocina por un vaso de agua. La casa estaba en silencio absoluto, de ese silencio pesado que te presiona los oídos. Al volver, vi la puerta del cuarto de huéspedes entreabierta. Me detuve en seco. Yo mismo la había cerrado con el pestillo horas antes, mi ritual de cada noche para asegurarme de que *eso* se quedara dentro. Empujado por una curiosidad morbosa, me asomé por la rendija.
        <br><br>
        Dentro, bañada por la luz de la luna, había una silueta alta y desnutrida de pie junto a la ventana. No era mi abuela. La figura vestía un uniforme militar antiguo, hecho jirones y manchado de tierra oscura. Estaba inmóvil, absolutamente rígida, mirando hacia el jardín. Mi corazón martilleaba tan fuerte que temí que lo escuchara. Di un paso atrás y la madera del suelo crujió. La silueta no se dio la vuelta. En su lugar, su cabeza giró 180 grados completos, con el sonido húmedo de huesos rompiéndose, hasta mirarme. No tenía rostro. Donde debían estar los ojos, solo había dos agujeros negros que supuraban un líquido espeso.
        <br><br>
        Años después, en el funeral de mi abuela, mi madre me confesó la verdad entre sollozos. Su hermano mayor, mi tío abuelo, había desertado de la guerra y se había escondido en ese cuarto. Enloquecido por la culpa y el miedo, se quitó la vida frente a esa misma ventana. Mi abuela nunca limpió la sangre del suelo; simplemente puso una alfombra encima. Dijo que él nunca quiso irse, y por lo que vi esa noche, tenía razón.`,
        comments: [
            { author: "Lector1", date: "Hace 2 días", text: "Se me erizó la piel. Nunca volveré a dormir en casa de mi abuela tranquilo." },
            { author: "Dark", date: "Hace 3 días", text: "La descripción del giro de cabeza es brutal. Muy buena historia." }
        ]
    },
    {
        id: 2,
        title: "El Hombre del Saco",
        author: "Maria G.",
        date: "hace 5 días",
        image: "images/Teerror.jpg",
        category: "Leyendas Urbanas",
        content: `Mi madre me asustaba con 'El Hombre del Saco'. El 'Ropavejero'. La figura sombría que se llevaba a los niños que no dormían. Lo superé a los diez años, convirtiéndolo en un chiste para asustar a mis primos pequeños. Hasta que me mudé a este apartamento en el primer piso. Hace un mes, empecé a oír ruidos en la ventana de mi habitación, que da a un callejón ciego y sin salida donde nunca entra la luz del sol.
        <br><br>
        No eran golpes normales. Era un sonido áspero, de arrastre. *Fsssssh... clac. Fsssssh... clac.* Como tela de arpillera pesada y sucia rozando el concreto, seguido del sonido de algo duro golpeando el suelo. La primera noche pensé que era un gato. La segunda, un vagabundo. La tercera noche, el olor se filtró por las rendijas de la ventana cerrada. Olía a humedad, a tierra de cementerio y a cobre, ese olor metálico inconfundible de la sangre seca.
        <br><br>
        Me armé de valor y aparté la cortina. El callejón estaba vacío, pero en el alféizar, justo del otro lado del cristal, había algo. Abrí la ventana y lo tomé. Era un botón. Un pequeño botón de hueso humano, pulido por el uso constante. Esa misma semana, tres gatos del vecindario desaparecieron sin dejar rastro.
        <br><br>
        Anoche, el sonido volvió. Pero esta vez no estaba afuera. Esta vez, escuché el arrastre lento y pesado *dentro* de mi sala de estar. *Fsssssh... clac.* Me encerré en mi cuarto y puse el pestillo, pero pude ver la sombra por debajo de la puerta. Una sombra encorvada, cargando un bulto enorme que se retorcía y gemía en silencio. Escuché una voz rasposa, como hojas secas pisadas, susurrar pegada a la madera de mi puerta: "¿Te has portado bien, María?".`,
        comments: [
            { author: "Niño", date: "Hace 1 hora", text: "Vivo en un primer piso. Gracias por la pesadilla." },
            { author: "Vecina", date: "Hace 2 horas", text: "Ese detalle del botón de hueso... demasiado específico." },
            { author: "Policia", date: "Hace 5 horas", text: "Si escuchan ruidos dentro de casa, llamen al 911, no escriban en foros." }
        ]
    },
    {
        id: 3,
        title: "El Pasajero Fantasma",
        author: "Juan Taxista",
        date: "hace 2 semanas",
        image: "images/Miedo.jpg",
        category: "Historias Personales",
        content: `Llevo 20 años conduciendo taxi en el turno de la noche, el turno "lápida" como le decimos. He visto de todo: borrachos violentos, partos en el asiento trasero, gente huyendo de la ley. Creí que nada podía asustarme. Estaba equivocado. Fue un martes lluvioso, cerca de las 2 AM. Pasé frente al Cementerio Central y vi una mano pálida levantarse entre la niebla.
        <br><br>
        Frené. Subió una chica joven, no tendría más de veinte años. Llevaba un vestido blanco de fiesta, empapado y sucio de barro en el dobladillo. Tenía la piel tan pálida que parecía traslúcida bajo las luces de mercurio de la calle. "A la calle Los Olmos 44, por favor", susurró. Su voz sonaba lejana, como si viniera de dentro de un pozo profundo. Encendí la calefacción porque el coche se puso helado al instante, tanto que mi aliento formaba vapor.
        <br><br>
        Durante el viaje intenté hablarle, preguntarle si estaba bien, si necesitaba ir a un hospital. Ella solo miraba por la ventana, con una tristeza infinita en los ojos negros. Cuando llegamos a la dirección, vi que era una casona en ruinas, con las ventanas tapiadas y el techo colapsado. "Señorita, aquí no vive nadie", dije mientras me giraba para verla. El asiento trasero estaba vacío. Pero estaba mojado. Había un charco de agua y barro donde ella había estado sentada.
        <br><br>
        Me bajé temblando. Un vecino salió al ver mis luces. Me miró con lástima y dijo: "No eres el primero, hijo. Esa es Sofía. Murió atropellada hace diez años en la curva del cementerio la noche de su graduación. Siempre intenta volver a casa para decirle a su madre que la perdone por salir esa noche. Pero nunca llega".`,
        comments: [
            { author: "Uber", date: "Hace 1 semana", text: "A un colega le pasó lo mismo. Renunció al turno de noche." }
        ]
    },
    {
        id: 4,
        title: "Voces en el sótano",
        author: "Lucía M.",
        date: "hace 3 días",
        image: "images/Fantasma.jpg",
        category: "Fantasmas",
        content: `La oferta era demasiado buena para ser verdad. Una casa victoriana enorme, precio de remate. El agente inmobiliario estaba nervioso, sudaba mucho, pero no le di importancia. Nos mudamos hace una semana. Todo era perfecto, hasta que abrimos la puerta del sótano. Mi perro, un pastor alemán que no le teme a nada, se orinó encima al ver esas escaleras y salió corriendo chillando hacia la calle.
        <br><br>
        Bajé sola a revisar los fusibles ayer. El aire allí abajo es pesado, se siente como caminar bajo el agua. Mientras revisaba la caja de electricidad, la luz de mi linterna parpadeó y se apagó. Me quedé en la oscuridad total. Entonces lo escuché. No era un ruido de tuberías. Era una respiración. Una respiración húmeda y ruidosa, justo detrás de mi oreja izquierda. Sentí el calor de un aliento pútrido en mi cuello.
        <br><br>
        "Largo de aquí", susurró una voz que sonaba como si alguien estuviera haciendo gárgaras con vidrios rotos. Traté de correr, pero algo me agarró el tobillo. Una mano fría y fuerte. Me caí y me arrastré escaleras arriba llorando. Cuando salí a la luz de la cocina, miré mi tobillo. Tenía la marca perfecta de una mano grabada en mi piel. Una mano con seis dedos.`,
        comments: [
            { author: "Medium", date: "Hace 10 min", text: "Seis dedos... eso es señal de una entidad demoníaca antigua. Sal de ahí YA." }
        ]
    },
    {
        id: 5,
        title: "El Espejo Maldito",
        author: "Sofía R.",
        date: "hace 1 mes",
        image: "images/Fantas.jpg",
        category: "Demonios",
        content: `Soy amante de las antigüedades. Cuando vi ese espejo de cuerpo entero con marco de ébano tallado en la venta de garaje de una casa vieja, sentí una atracción magnética. El dueño prácticamente me lo regaló, ni siquiera me cobró. Lo colgué frente a mi cama. Error fatal.
        <br><br>
        La primera noche, soñé que estaba atrapada dentro de una caja de cristal, golpeando para salir, mientras mi cuerpo dormía afuera. Desperté sudando. Miré al espejo y, por un segundo, mi reflejo no se movió cuando yo me senté. Mi reflejo seguía acostado, sonriendo maliciosamente. Pensé que estaba loca, que era el sueño.
        <br><br>
        Pasaron los días y mi salud se deterioró. Me veía pálida, ojerosa, perdí peso. Pero mi reflejo en ese espejo se veía cada vez mejor, más joven, más fuerte, con las mejillas sonrosadas. Mi gato empezó a bufarle al espejo, arqueando el lomo, hasta que un día salió disparado de la habitación y no ha vuelto a entrar.
        <br><br>
        Ayer decidí cubrirlo con una sábana. A mitad de la noche, me despertó el sonido de tela rasgándose. Encendí la luz. La sábana estaba hecha tiras en el suelo, como si garras la hubieran destrozado desde adentro. Y en el espejo, escrito con el vapor de mi propia respiración, decía: "Casi es mi turno". Hoy lo rompí a martillazos y enterré los pedazos en tierra consagrada, pero cuando paso frente a una vitrina en la calle, a veces no veo mi reflejo.`,
        comments: [
            { author: "Witch", date: "Hace 2 semanas", text: "Los espejos atrapan almas. Él estaba drenando tu vida para materializarse." },
            { author: "Vendedor", date: "Hace 3 semanas", text: "Yo te lo vendí. Lo siento. No sabía cómo deshacerme de él." }
        ]
    },
    {
        id: 6,
        title: "Luces en el Monte",
        author: "Pedro1990",
        date: "hace 2 días",
        image: "images/ovni.png",
        category: "OVNIs",
        content: `No soy de los que creen en hombrecitos verdes. Soy cazador, conozco el bosque de noche. Pero lo que vimos mi hermano y yo el fin de semana pasado no es de este mundo. Estábamos en la zona alta de la sierra, lejos de cualquier ciudad. El cielo estaba despejado. De repente, el bosque se quedó en silencio total. Los grillos, las lechuzas, todo calló al mismo tiempo.
        <br><br>
        Tres luces naranjas aparecieron sobre la copa de los árboles, formando un triángulo perfecto. No hacían ruido, ni viento. Se movían con una suavidad imposible. Quedaron suspendidas justo encima de nuestra tienda. Sentí una vibración en los dientes, un zumbido metálico dentro del cráneo que me mareaba. Mi hermano intentó sacar su rifle, pero no podía moverse. Estábamos paralizados.
        <br><br>
        Un haz de luz azul, sólida como una columna de agua, bajó de la nave y tocó el suelo a unos metros. Vimos sombras pequeñas y cabezonas moverse dentro de la luz. Me desmayé. Cuando desperté, amanecía. Pensé que habíamos dormido toda la noche, pero mi reloj decía que solo habían pasado 15 minutos desde que vimos las luces. Sin embargo, tengo barba de tres días y una cicatriz triangular detrás de la oreja que no estaba ahí antes. Nos faltan tres días de memoria. ¿Dónde estuvimos?`,
        comments: [
            { author: "Ufologo", date: "Hace 1 día", text: "Tiempo perdido + cicatriz + parálisis. Es un caso de abducción de libro." }
        ]
    },
    {
        id: 7,
        title: "La Muñeca de Porcelana",
        author: "Clara V.",
        date: "hace 3 semanas",
        image: "images/muneca.png",
        category: "Leyendas Urbanas",
        content: `Mi tía abuela era una mujer solitaria que coleccionaba muñecas de porcelana victorianas. Cuando falleció, heredé su "favorita", una muñeca llamada Isabella, de un metro de alto, con un vestido de encaje negro y ojos de vidrio azul realistas. Demasiado realistas. La puse en una silla mecedora en la esquina de mi salón.
        <br><br>
        Al principio eran cosas pequeñas. La encontraba con la cabeza girada hacia la izquierda cuando yo la había dejado mirando al frente. O sus manos cambiaban de posición, a veces entrelazadas, a veces sobre sus rodillas. Mi hija de cinco años empezó a hablar sola en el salón. Cuando le pregunté con quién hablaba, me dijo: "Con Isabella. Ella me cuenta secretos".
        <br><br>
        "¿Qué secretos?", le pregunté, sintiendo un nudo en el estómago. "Dice que le gusta tu pelo. Dice que le gustaría tenerlo para ella". Esa noche, cerré la puerta del salón con llave. A las 3 AM, escuché la silla mecedora moverse. *Criii... criii... criii*. Bajé las escaleras con un bate. La puerta estaba abierta. La silla se mecía sola violentamente. Y la muñeca no estaba. Sentí unas manos pequeñas y frías, duras como la cerámica, agarrar mi pierna desde la oscuridad debajo del sofá.`,
        comments: [
            { author: "Collector", date: "Hace 1 semana", text: "Nunca aceptes muñecas heredadas. Son recipientes vacíos esperando un alma." }
        ]
    },
    {
        id: 8,
        title: "El Hotel del Salto",
        author: "Viajero Paranormal",
        date: "hace 5 días",
        image: "images/Casa.png",
        category: "Historias Personales",
        content: `Siempre quise visitar el Hotel del Salto en Colombia antes de que lo convirtieran en museo. Se dice que miles de personas saltaron al vacío desde allí atraídas por una "voz". Fui un día de niebla espesa. El edificio gótico se alzaba como una bestia dormida al borde del abismo.
        <br><br>
        Me acerqué al mirador para tomar fotos de la cascada. Estaba completamente solo. De repente, sentí una tristeza abrumadora, una desesperación que no era mía. Me dieron ganas de llorar sin razón. Y entonces, escuché la voz. No en mis oídos, sino en mi mente. Una voz dulce, melódica, casi maternal: "Ven... vuela... todo dejará de doler".
        <br><br>
        Mis pies se movieron solos hacia el borde. Mis manos soltaron la cámara. Estaba a un paso de saltar cuando un turista me agarró del brazo y me gritó: "¡Oiga! ¡Cuidado!". El trance se rompió. Miré hacia abajo y vi el abismo mortal. Al revelar las fotos que tomé segundos antes, se me heló la sangre. En una de ellas, justo detrás de donde yo estaba parado, se ve una multitud de figuras translúcidas, hombres y mujeres con ropa de diferentes épocas, todos con los brazos extendidos, empujándome hacia el vacío.`,
        comments: [
            { author: "Bogota", date: "Hace 2 días", text: "El Salto del Tequendama exige sacrificios. Tuviste suerte de que te dejaran ir." }
        ]
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
    const userField = document.getElementById('loginUsername');
    const passField = document.getElementById('loginPassword');
    
    userField.classList.remove('input-error');
    passField.classList.remove('input-error');

    const username = userField.value.trim();
    const password = passField.value;
    
    let hasError = false;
    if (!username) {
        userField.classList.add('input-error');
        hasError = true;
    }
    if (!password) {
        passField.classList.add('input-error');
        hasError = true;
    }

    if (hasError) {
        return;
    }
    
    const foundUser = users.find(u => (u.username === username || u.email === username) && u.password === password);
    
    if (foundUser) {
        currentUser = foundUser;
        goToHome();
        updateUserProfile();
    } else {
        alert('Usuario o contraseña incorrectos. (Prueba: admin / admin123)');
        userField.classList.add('input-error');
        passField.classList.add('input-error');
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
        
        const commentsSection = document.querySelector('#articleDetailPage .comments-section');
        commentsSection.style.display = 'block';
        
        const commentsCount = news.comments ? news.comments.length : 0;
        commentsSection.querySelector('h3').textContent = `Comentarios (${commentsCount})`;

        let commentsList = document.getElementById('dynamicCommentsList');
        if (!commentsList) {
            commentsList = document.createElement('div');
            commentsList.id = 'dynamicCommentsList';
            commentsSection.appendChild(commentsList);
        }
        commentsList.innerHTML = '';

        if (news.comments && news.comments.length > 0) {
            news.comments.forEach(c => {
                const html = `
                    <div class="comment-post" style="margin-top:20px; border-bottom:1px solid #333; padding-bottom:10px;">
                        <img src="images/Foto paranormal.png" alt="User" class="user-pic-comment">
                        <div class="comment-content">
                            <span class="comment-author" style="color:#d4ff00; font-weight:bold;">${c.author}</span>
                            <span class="comment-date" style="color:#888; font-size:12px;">${c.date}</span>
                            <p style="color:#ccc; margin-top:5px;">${c.text}</p>
                        </div>
                    </div>
                `;
                commentsList.innerHTML += html;
            });
        } else {
            commentsList.innerHTML = '<p style="color:#666; margin-top:20px;">No hay comentarios aún. Sé el primero.</p>';
        }
        
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

        const commentsSection = document.querySelector('#articleDetailPage .comments-section');
        commentsSection.style.display = 'block';
        
        const commentsCount = story.comments ? story.comments.length : 0;
        commentsSection.querySelector('h3').textContent = `Comentarios (${commentsCount})`;

        let commentsList = document.getElementById('dynamicCommentsList');
        if (!commentsList) {
            commentsList = document.createElement('div');
            commentsList.id = 'dynamicCommentsList';
            commentsSection.appendChild(commentsList);
        }
        commentsList.innerHTML = ''; 

        if (story.comments && story.comments.length > 0) {
            story.comments.forEach(c => {
                const html = `
                    <div class="comment-post" style="margin-top:20px; border-bottom:1px solid #333; padding-bottom:10px;">
                        <img src="images/Foto paranormal.png" alt="User" class="user-pic-comment">
                        <div class="comment-content">
                            <span class="comment-author" style="color:#d4ff00; font-weight:bold;">${c.author}</span>
                            <span class="comment-date" style="color:#888; font-size:12px;">${c.date}</span>
                            <p style="color:#ccc; margin-top:5px;">${c.text}</p>
                        </div>
                    </div>
                `;
                commentsList.innerHTML += html;
            });
        } else {
            commentsList.innerHTML = '<p style="color:#666; margin-top:20px;">No hay comentarios aún.</p>';
        }
        
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

    if (categoryFilter && categoryFilter !== 'Todas') {
        currentFilteredGallery = galleryData.filter(item => item.category === categoryFilter);
    } else {
        currentFilteredGallery = galleryData;
    }

    currentFilteredGallery.forEach((item, index) => {
        const itemHTML = `
            <div class="gallery-item" onclick="openLightbox(${index})">
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

function openLightbox(index) {
    currentGalleryIndex = index;
    const item = currentFilteredGallery[index];
    
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImage');
    const captionText = document.getElementById('lightboxCaption');
    
    modal.style.display = "block";
    modalImg.src = item.image;
    captionText.innerHTML = `${item.title} (${index + 1} de ${currentFilteredGallery.length})`;
}

function changeImage(n) {
    currentGalleryIndex += n;
    
    if (currentGalleryIndex >= currentFilteredGallery.length) {
        currentGalleryIndex = 0;
    }
    if (currentGalleryIndex < 0) {
        currentGalleryIndex = currentFilteredGallery.length - 1;
    }
    
    openLightbox(currentGalleryIndex);
}

function closeLightbox() {
    document.getElementById('lightboxModal').style.display = "none";
}

function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
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
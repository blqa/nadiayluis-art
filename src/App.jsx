import React, { useState, useEffect, useRef } from 'react';
import { Heart, Star, ArrowDown, Play, Pause, SkipForward, SkipBack, Film, Gift, MessageSquare, BookOpen, Music, Lock, Book, Smile, Globe, Activity, Wind, Sun, Moon, UtensilsCrossed, Frown, Laugh, Zap, Map, Coffee, LifeBuoy, Headphones, Trophy } from 'lucide-react';

// --- CONFIGURACIÓN GLOBAL ---
const START_DATE = new Date('2025-05-11T23:23:00'); 

// --- DATOS GLOBALES: CUENTOS LARGOS ---
const STORIES_DATA = [
    {
        id: 1,
        title: "NEMO",
        summary: "Un pececito desobediente se pierde y su padre cruza todo el océano para encontrarlo, aprendiendo sobre la confianza en el camino.",
        body: `Había una vez un pez chiquito.

Su papá pez le dijo que no nadara lejos, pero no hizo caso.

Lo atraparon unos humanos y se lo llevaron.

Entonces, su papá cruzó todo el océano buscándolo, con la ayuda de una pez olvidadiza.

Pasaron muchas aventuras, hasta que al fin lo encontraron.

Y todos aprendieron a confiar más… y a no salirse del arrecife sin avisar. Fin. 🐠💙`,
        author: "Luis"
    },
    {
        id: 2,
        title: "CORALINE",
        summary: "Una niña se muda a una casa vieja y encuentra una puerta a un mundo 'perfecto' donde sus habitantes tienen botones en lugar de ojos.",
        body: `Una niña se mudó con su familia a una casa vieja.

Sus papás estaban ocupados y casi no le prestaban atención.

Explorando la casa, encontró una puertita pequeña que llevaba a otro mundo muy parecido al suyo, pero donde todo era perfecto… la comida, los juegos, incluso “sus otros papás” eran más atentos.

Pero había algo raro… todos tenían botones en lugar de ojos.

La señora de ese mundo le dijo que si quería quedarse, debía coserse botones también.

Entonces la niña descubrió que todo era una trampa.

Esa señora era una criatura malvada que atrapaba niños y se alimentaba de sus almas.

Con valentía e inteligencia, la niña enfrentó sus miedos, rescató a sus verdaderos papás y logró cerrar la puerta para siempre.

Y aunque su mundo real no era perfecto… al final lo prefirió así. 🚪🗝️`,
        author: "Luis"
    },
    {
        id: 3,
        title: "WALL-E",
        summary: "Un robot solitario se queda limpiando la Tierra abandonada hasta que se enamora de otro robot y viaja al espacio para que los humanos regresen.",
        body: `"Había un pequeño robot que se quedó solo en la Tierra limpiando basura, porque los humanos la habían abandonado por estar llena de desechos.

Su único amigo era una cucaracha y cada día guardaba cosas que encontraba interesantes.


Un día llegó otro robot moderno con una misión: buscar vida en el planeta. El robot solitario se enamoró de ella y decidió seguirla, aunque eso lo llevó a una nave donde vivían los humanos.

Allí descubrió que todos estaban tan cómodos con la tecnología que habían olvidado caminar, mirar el cielo y cuidar su planeta.


Con esfuerzo y valentía, los robots lograron que los humanos regresaran a la Tierra para reconstruirla.

Al final, el robot que estaba solo ya no lo estuvo nunca más. 🤖🪳🥚"`,
        author: "Luis"
    },
    {
        id: 4,
        title: "EL EXTRAÑO MUNDO DE JACK",
        summary: "El Rey del Halloween se siente vacío, descubre la Navidad y trata de imitarla, causando un caos festivo que lo hace revalorar su hogar y el amor.",
        body: `"Había una vez un esqueleto alto y elegante que vivía en la Ciudad de Halloween.

Era el más famoso de todos, el que organizaba los sustos, los gritos, las decoraciones y las pesadillas cada 31 de octubre.

Todos lo admiraban, lo celebraban y lo esperaban con ansias… pero él ya no se sentía feliz.


A pesar de ser el Rey del Halloween, por dentro se sentía vacío.

Estaba cansado de repetir lo mismo cada año.

Quería algo distinto, algo que le hiciera sentir emoción otra vez.


Un día, caminando sin rumbo por el bosque, encontró un círculo de árboles, cada uno con una puerta diferente.

La que más le llamó la atención tenía un dibujo de un árbol decorado.

La abrió… y fue arrastrado a otro mundo.


Un mundo de nieve, luces, risas y regalos: la Navidad.


Quedó fascinado.

Todo era brillante, colorido, alegre.

No había miedo, solo ilusión.

Y pensó: “¿y si yo también puedo hacer esto?”


Volvió a su ciudad con la idea de hacer su propia versión de la Navidad.

Convenció a todos en Halloween para que lo ayudaran a preparar juguetes, decoraciones y hasta a “reemplazar” a Santa Claus.

Pero como solo sabían hacer cosas de miedo… todo salió muy, muy raro.


En lugar de muñecos adorables, creaban serpientes, murciélagos y cajas que gritaban.

Y para completar su plan, mandaron a unos niños traviesos a secuestrar al verdadero Santa Claus.

Pero sin saberlo, lo llevaron con una criatura espeluznante: el Señor Oogie Boogie, que quería destruirlo por diversión.


Mientras tanto, el esqueleto salió volando con un trineo de ataúd, tirado por renos-esqueleto, repartiendo su versión terrorífica de la Navidad.

Los niños se asustaban, los padres gritaban, y los policías trataban de derribarlo pensando que era una amenaza.


Cuando finalmente se dio cuenta del caos que había causado, entendió que había cometido un error.

La Navidad no podía ser imitada.

Él no pertenecía a ese mundo.


Así que fue a rescatar a Santa Claus, enfrentó al villano y puso las cosas en su lugar.

Santa se encargó de salvar la verdadera Navidad, y el esqueleto regresó a su hogar, más sabio y tranquilo.


Y entonces se dio cuenta de algo más:

Que el vacío que sentía no era por lo que hacía… sino por lo que le faltaba sentir.

Y que había alguien que siempre estuvo ahí, en silencio, esperándolo:

Una muñeca de trapo que lo amaba desde lejos.


Esa noche, bajo la luna y entre tumbas, él finalmente la miró con otros ojos…

y entendió que su verdadero hogar no era solo el miedo, sino también el amor. 👻🖤🪦"`,
        author: "Luis"
    },
    {
        id: 5,
        title: "TOY STORY",
        summary: "Un vaquero celoso y un astronauta arrogante deben aprender a confiar el uno en el otro cuando se pierden lejos de casa.",
        body: `"Había una vez un niño que tenía muchos juguetes, pero su favorito era un vaquero de sombrero café, botas con espuelas y una cuerda para decir frases divertidas.

Era el líder de todos los juguetes y el más querido del cuarto.

Vivía feliz, pues cada vez que el niño jugaba, él era el protagonista.


Pero un día, en su cumpleaños, el niño recibió un regalo especial, un astronauta brillante, con alas, botones y frases sobre viajes espaciales.

El vaquero sintió celos. Temía que el niño dejara de quererlo.

El astronauta, por su parte, ni siquiera sabía que era un juguete, creía que venía de una misión real en el espacio.


Los dos empezaron a discutir, competir y molestarse.

Pero las cosas se complicaron cuando, por accidente, ambos terminaron lejos de casa, atrapados en el mundo de los humanos… y de un niño vecino que destruía juguetes por diversión.


En ese viaje de regreso, el vaquero y el astronauta pasaron por muchas aventuras, escapar de trampas, trabajar en equipo y confiar el uno en el otro.

Descubrieron que, aunque eran muy diferentes, los dos eran importantes para el niño.


Al final, lograron regresar justo a tiempo antes de que la familia se mudara.

El vaquero ya no temía ser reemplazado, y el astronauta aceptó que era un juguete, pero uno muy especial.


Y desde entonces, en ese cuarto, hubo dos líderes… y una gran amistad. 🤠🧑‍🚀🚀"`,
        author: "Luis"
    },
    {
        id: 6,
        title: "CHUERK (Shrek)",
        summary: "Un ogro solitario debe rescatar a una princesa con un secreto, solo para descubrir que el amor verdadero no se encuentra en los cuentos de hadas.",
        body: `"Había una vez un ogro que vivía feliz y solo en su pantano. Le gustaba la tranquilidad, el silencio y que nadie lo molestara. Un día su paz se rompió cuando un grupo enorme de criaturas de cuentos de hadas apareció en su hogar. Habían sido expulsadas por un pequeño y mandón gobernante que quería deshacerse de todos ellos.


El ogro, enfadado, fue a reclamar para que le devolvieran su pantano. El gobernante le propuso un trato, que si rescataba a una princesa encerrada en un castillo custodiado por un dragón, le devolvería su tierra. El ogro aceptó pensando que sería un trabajo rápido, pero no contaba con que un burro parlante se le pegara como compañero de viaje.


Juntos llegaron al castillo, vencieron al dragón y encontraron a la princesa. Ella no era como el ogro imaginaba, pues hablaba mucho, era valiente y además escondía un secreto. De noche se transformaba en ogra por culpa de un hechizo, y solo el primer beso de amor verdadero podía romperlo.


En el camino de regreso el ogro empezó a enamorarse de ella, aunque pensaba que era imposible que alguien pudiera querer a un ogro. Por un malentendido creyó que ella lo despreciaba, y la dejó ir para que se casara con el gobernante.


En la boda el ogro irrumpió, confesó lo que sentía y la princesa decidió seguir a su corazón. Se besaron y el hechizo se rompió, pero no como ella esperaba. En lugar de volverse humana para siempre quedó convertida en ogra, y fue feliz así porque había encontrado a alguien que la amaba tal como era.


El ogro, la princesa y el burro volvieron al pantano, esta vez no para estar solos, sino para vivir su propia versión de felices para siempre. 🧌🐉🫏💚"`,
        author: "Luis"
    },
    {
        id: 7,
        title: "RATA-TOUILLE",
        summary: "Una rata con un sueño imposible, quiere ser chef en París. Demuestra que cualquiera puede cocinar si tiene pasión y valor.",
        body: `"Había una vez una rata que no quería vivir como todas las demás, comiendo basura y escondiéndose de los humanos. Ella tenía un sueño muy extraño para alguien de su especie, quería ser chef y preparar platillos deliciosos en una cocina de verdad. Su familia no lo entendía y siempre le decía que era imposible, pero la rata sentía que su destino estaba en otro lugar.


Un día, por accidente, quedó separada de su colonia y llegó a París, justo frente al restaurante de su ídolo, un famoso chef que decía que cualquiera podía cocinar. Movida por la emoción, se metió en la cocina y terminó arreglando una sopa que un joven aprendiz había arruinado. El dueño pensó que el muchacho era un genio, sin saber que en realidad era la rata quien cocinaba escondida bajo su gorro.


Así comenzó una extraña amistad. El joven y la rata trabajaban juntos, uno poniendo la cara y el otro las manos… o más bien las patas. Poco a poco, el restaurante empezó a brillar, pero también atrajeron problemas. Un crítico temido y un chef rival querían descubrir el secreto, y la colonia de ratas tampoco aprobaba que uno de los suyos viviera entre humanos.


En el momento más difícil, el joven fue descubierto, la rata fue atrapada y todo parecía perdido. Sin embargo, con la ayuda de su familia, la rata logró cocinar un platillo tan especial que incluso el crítico más duro quedó conmovido. Al final, el viejo restaurante cerró, pero nació uno nuevo donde humanos y ratas trabajaban juntos en secreto.


La rata cumplió su sueño y demostró que, aunque parezca imposible, cualquiera puede cocinar si tiene pasión y valor. 🐀🧑‍🍳🥘"`,
        author: "Luis"
    },
    {
        id: 8,
        title: "KUNG FU PANDA",
        summary: "Un panda torpe sueña con ser maestro de Kung Fu, y descubre que el secreto del poder definitivo reside en creer en sí mismo.",
        body: `"Había una vez un panda que vivía con su padre adoptivo en un pequeño puesto de fideos. Pasaba los días sirviendo comida, pero en su corazón soñaba con ser un gran maestro de kung fu. Aunque era torpe, lento y nada atlético, admiraba a los cinco guerreros más famosos de China y deseaba entrenar junto a ellos.


Un día, el anciano maestro del valle anunció que elegiría al Guerrero Dragón, el único capaz de detener a un peligroso villano que estaba por escapar. Durante la ceremonia, el panda, por accidente, terminó dentro del ring justo en el momento de la elección, y para sorpresa de todos, el maestro señaló que él era el elegido. Nadie lo tomó en serio, ni siquiera él mismo, pero las reglas decían que debía entrenar.


Los entrenamientos fueron duros y llenos de burlas. Los otros guerreros no creían que el panda pudiera aprender, y el maestro pensaba que había sido un error. Todo cambió cuando el maestro descubrió que el panda tenía una motivación muy especial, la comida, y decidió usarla como método de entrenamiento. Así, poco a poco, el panda aprendió técnicas increíbles sin dejar de ser él mismo.


Mientras tanto, el villano escapó y se dirigió al valle para obtener el pergamino del Guerrero Dragón, que contenía el secreto del poder definitivo. El panda fue quien lo recibió y se dio cuenta de que el pergamino estaba vacío, lo que significaba que no había un poder mágico, sino que el poder estaba en creer en uno mismo.


Con esa lección en mente, el panda enfrentó al villano usando todo lo que había aprendido, además de su ingenio y su cuerpo resistente. Logró derrotarlo y salvó el valle, ganándose el respeto de todos y cumpliendo su sueño de ser un maestro de kung fu. 🥋🐼📜🐉"`,
        author: "Luis"
    },
    {
        id: 9,
        title: "EL CADÁVER DE LA NOVIA",
        summary: "Un joven tímido se compromete accidentalmente con una novia muerta, y en el mundo de los muertos, descubre una traición que debe corregir.",
        body: `"Había una vez un joven tímido que estaba a punto de casarse con una muchacha que apenas conocía. El matrimonio había sido arreglado por sus familias, pero al verse por primera vez, ambos sintieron que podían llegar a quererse de verdad. El joven, nervioso por la ceremonia, salió al bosque a practicar sus votos para no equivocarse.


En un momento, colocó el anillo en lo que pensó que era una rama seca, sin saber que en realidad era el dedo de una joven que había muerto hace tiempo. De pronto, el suelo se abrió y ella apareció, vestida de novia, agradeciéndole por cumplir su promesa. Antes de que pudiera entender lo que pasaba, fue arrastrado al mundo de los muertos.


Allí descubrió que aquella muchacha había sido asesinada la noche en que iba a casarse, engañada por alguien que solo quería su fortuna. A pesar de su aspecto fantasmal, era dulce, alegre y estaba feliz de no sentirse sola por primera vez en años. Poco a poco, el joven comenzó a sentir cariño por ella, aunque su corazón seguía pensando en la prometida que lo esperaba en el mundo de los vivos.


Cuando la verdad salió a la luz, el joven decidió ayudar a la novia cadáver a encontrar paz. Renunció a casarse con ella y se enfrentó al hombre que la había traicionado, quien resultó ser también el villano que quería obligar a su prometida viva a casarse. Con valor, lograron detenerlo y la joven fallecida pudo liberarse de su dolor.


En su último momento, bajo la luz de la luna, ella lo miró con ternura, le agradeció y se despidió. Se convirtió en mariposas que volaron hacia el cielo, dejando al joven libre para volver con la persona que amaba, y quedando en su corazón como un recuerdo hermoso y triste a la vez. 👰🏻‍♀️💍🪾"`,
        author: "Luis"
    },
    {
        id: 10,
        title: "PINOCHO",
        summary: "Un niño de madera debe aprender a ser sincero, responsable y noble para cumplir su sueño de convertirse en un niño de verdad.",
        body: `"Había una vez un anciano carpintero que vivía solo y soñaba con tener un hijo. Un día talló con sus propias manos una marioneta de madera con forma de niño. Esa noche, una estrella brillante cumplió su deseo y la marioneta cobró vida. El anciano lo llamó su hijo y lo recibió con todo su amor.


El niño de madera era curioso y soñaba con ver el mundo, pero también era un poco travieso y no siempre escuchaba los consejos de su padre. Un grillo parlante se ofreció a ser su conciencia y guiarlo por el buen camino, recordándole que debía ser honesto y responsable para algún día convertirse en un niño de verdad.


En sus aventuras, el niño de madera se dejó engañar por personas que querían aprovecharse de él. Terminó en un teatro de marionetas, fue llevado a una isla donde los niños se portaban mal y poco a poco se convirtió en burro. También fue tragado por una enorme ballena cuando intentaba reunirse con su padre.


A pesar de todos los peligros, aprendió el valor de la sinceridad, el esfuerzo y el amor por su familia. Con valentía rescató a su padre de la ballena y lo llevó de regreso a casa. Al ver su corazón noble y su cambio, la estrella que le había dado vida cumplió la promesa y lo transformó en un niño de verdad.


Desde entonces vivió feliz junto a su padre, sabiendo que decir la verdad y hacer lo correcto era el camino para no volver a perderse. 👦🏼🪵🤥🐳🧚✨"`,
        author: "Luis"
    },
    {
        id: 11,
        title: "CARS",
        summary: "Un auto de carreras arrogante se pierde en un pueblo olvidado y aprende que la verdadera grandeza no está en ganar, sino en la nobleza y la amistad.",
        body: `"Había una vez un auto de carreras rojo, joven, brillante y veloz. Soñaba con convertirse en el más grande de todos los tiempos, en una leyenda que todos recordaran. Tenía talento y velocidad, pero también un gran defecto: era arrogante. No escuchaba consejos, no confiaba en nadie y creía que podía lograr todo por sí mismo. Su meta era ganar la Copa Pistón, el trofeo más importante del mundo de las carreras.


En una de las temporadas más reñidas, el auto rojo quedó empatado con dos rivales. Uno era un campeón veterano, sabio y respetado, que estaba a punto de retirarse y soñaba con terminar su carrera con honor. El otro era un competidor rudo, egoísta y tramposo, que solo buscaba la fama y los contratos millonarios. El empate provocó que se organizara una última gran carrera en California para decidir al ganador.


El auto rojo estaba impaciente. Quería llegar cuanto antes y demostrar que él sería el nuevo rey de las pistas. En lugar de viajar con su equipo y descansar, decidió ir solo, confiado en que nada lo detendría. Pero el destino tenía otros planes. En medio de la noche, durante el viaje por la vieja Ruta 66, se perdió y terminó en un pequeño pueblo olvidado llamado Radiador Springs.


Allí, al entrar de manera imprudente, destrozó la carretera principal. Los habitantes del pueblo, molestos, lo atraparon y lo llevaron ante la justicia local. Como castigo, lo obligaron a reparar la carretera que había destruido antes de marcharse. Para él, aquello era una pérdida de tiempo, una vergüenza. Solo quería escapar y seguir con su meta.


Sin embargo, mientras pasaban los días, empezó a conocer a los habitantes del pueblo. Había una grúa oxidada y simpática que lo trataba como si fueran amigos desde el primer momento, aunque él no lo entendiera. Había una auto elegante que trabajaba como abogada y dueña del motel, quien lo miraba con desconfianza porque parecía no valorar nada más que su ego. Había también un viejo doctor que en el pasado había sido un gran corredor, aunque ahora vivía en silencio y pocos conocían su verdadera historia.


Al principio, el auto rojo se burlaba de ellos y se negaba a esforzarse, pero poco a poco fue cambiando. Descubrió que aquel lugar, aunque pequeño, tenía una belleza especial. Paseó por los paisajes al atardecer, escuchó las risas sinceras de la grúa que solo quería tener un amigo, y comprendió la tristeza de la auto del motel, que extrañaba los tiempos en que Radiador Springs estaba lleno de viajeros antes de que las autopistas modernas lo olvidaran.


El viejo doctor, que lo vigilaba de cerca, decidió enseñarle lo que significaba realmente correr. Le mostró que no todo se trataba de velocidad, sino de paciencia, estrategia y corazón. En esas lecciones, el auto rojo descubrió un nuevo sentido en el acto de conducir. Y sin darse cuenta, comenzó a encariñarse con todos, a sonreír de verdad, a disfrutar de algo más que la gloria. Incluso empezó a sentir un cariño especial por aquella auto que al principio lo rechazaba, pero que poco a poco reconoció su cambio.


Cuando por fin terminó la carretera y pudo marcharse, ya no era el mismo que había llegado. Había encontrado algo que nunca había buscado: amistad, amor y un lugar donde realmente importaba como persona, no solo como corredor. Pero aun así debía cumplir con la gran carrera final en California, y partió con un corazón dividido.


En la carrera, todos esperaban que fuera el mismo competidor egoísta de siempre, pero él demostró lo contrario. Corrió con pasión y estuvo a punto de ganar. Sin embargo, cuando vio que el campeón veterano había chocado y no podía llegar a la meta, tomó una decisión que sorprendió al mundo entero. Frenó justo antes de cruzar la línea, retrocedió y empujó al veterano hasta que ambos cruzaron juntos. Él perdió la carrera, pero ganó algo mucho más grande. El público lo aplaudió, reconociendo que la verdadera grandeza no está en ganar trofeos, sino en la nobleza del corazón.


El auto tramposo que se llevó el trofeo fue abucheado, mientras que el auto rojo se convirtió en un verdadero héroe. Cuando terminó la temporada, rechazó contratos millonarios y eligió volver a Radiador Springs, porque había comprendido que allí estaba su verdadero hogar, con sus nuevos amigos, con la auto que lo había hecho descubrir el amor, y con la paz que nunca antes había sentido.


Así, aquel auto que al inicio solo quería fama y trofeos descubrió que el triunfo más grande no está en llegar primero, sino en lo que se hace por los demás durante el camino. 🚗❤️🏆🎩"`,
        author: "Luis"
    },
    {
        id: 12,
        title: "COMO ENTRENAR A TU DRAGON",
        summary: "Un joven soñador descubre que los dragones no son enemigos, sino nobles criaturas, y juntos unen mundos separados por la desconfianza.",
        body: `"Había una vez un pueblo donde todos creían que los dragones eran enemigos.

Los cazaban sin descanso y se enorgullecían de ser fuertes y valientes.


Entre ellos había un joven diferente, más soñador que guerrero.

Un día logró derribar a un dragón temido, pero cuando lo tuvo frente a frente no pudo hacerle daño.

En lugar de pelear, decidió ayudarlo, pues estaba herido y no podía volar.


Al principio hubo miedo y desconfianza, pero poco a poco nació una amistad.

El joven construyó una forma de volar junto a él y descubrió que los dragones no eran monstruos, sino seres llenos de nobleza.


Cuando un enemigo enorme amenazó a todos, el joven y el dragón unieron fuerzas.

Con valor y confianza demostraron que la verdadera fortaleza no estaba en la lucha, sino en la unión.


Desde entonces, humanos y dragones dejaron de enfrentarse y comenzaron a vivir juntos, compartiendo el cielo y los sueños. 🐉✨"`,
        author: "Luis"
    },
    {
        id: 13,
        title: "SOUL",
        summary: "Un músico frustrado se convierte en alma y descubre que la felicidad no está solo en los grandes sueños, sino en la magia de los pequeños momentos.",
        body: `"Había una vez un músico que amaba tocar el piano.

Cada nota lo hacía feliz y soñaba con tocar en el escenario más grande.


Un día, algo mágico sucedió y su alma se separó de su cuerpo.

De repente estaba en un lugar extraño, lleno de luces y colores, donde todas las almas aprendían a brillar.


Allí conoció a un alma curiosa y traviesa.

Juntos corrían, saltaban y jugaban mientras aprendían sobre sueños, pasiones y lo que hace que la vida valga la pena.


El músico descubrió que no solo los grandes escenarios traen felicidad.

Que los pequeños momentos, las risas y la música del día a día también hacen brillar el corazón.


Al final, regresó a su cuerpo, pero ahora veía el mundo diferente.

Cada nota, cada amigo y cada momento era un tesoro que lo hacía sentirse vivo.


Y desde entonces, tocaba su piano con alegría y enseñaba que la vida se disfruta en cada instante. 🎹✨☁️"`,
        author: "Luis"
    },
    {
        id: 14,
        title: "TOY STORY 2",
        summary: "Un vaquero es robado por un coleccionista, pero el amor de sus amigos lo hace elegir el juego y la amistad sobre la seguridad de una vitrina.",
        body: `"Había una vez un grupo de juguetes que vivían felices con su niño.

Entre ellos había un vaquero valiente, que siempre soñaba con estar a su lado.


Un día, el vaquero fue llevado lejos por un coleccionista que quería guardarlo en una vitrina.

Allí conoció a nuevos juguetes que nunca habían sentido lo que era ser jugado.


El vaquero pensó que quizá era mejor quedarse allí, seguro y cuidado.

Pero sus amigos viajaron por toda la ciudad para rescatarlo.


Al ver cuánto lo querían y cuánto lo necesitaba su niño, entendió que un juguete es feliz cuando es parte de la vida de alguien.


Regresaron a casa, más unidos que nunca, sabiendo que cada momento juntos era un regalo. 🤠🧸✨"`,
        author: "Luis"
    },
    {
        id: 15,
        title: "NÚMERO 9",
        summary: "Un pequeño muñeco de trapo despierta en un mundo en ruinas y lidera a sus compañeros contra máquinas oscuras, creyendo en la esperanza.",
        body: `"Había una vez un pequeño muñeco de trapo que abrió los ojos en un mundo silencioso.

Su nombre era Nueve, y no sabía por qué estaba allí.


Pronto descubrió que no estaba solo: otros como él habían nacido antes, cada uno con un número y una parte especial dentro de sí.

Vivían en ruinas, escondiéndose de máquinas oscuras que querían acabar con ellos.


Nueve, con su curiosidad y valentía, creyó que había un propósito mayor.

Soñaba con dar sentido a sus vidas, más allá del miedo.


Aunque las máquinas eran terribles, los pequeños muñecos aprendieron a unirse, a confiar y a luchar juntos.

Algunos dieron todo por proteger a los demás, dejando su espíritu como una chispa que nunca se apaga.


Y así, en medio de un mundo roto, Nueve comprendió que incluso lo más frágil puede brillar con fuerza.

Porque mientras exista esperanza, siempre habrá un comienzo para la vida. 🌌🪡✨"`,
        author: "Luis"
    },
    {
        id: 16,
        title: "LORAX",
        summary: "En una ciudad artificial, un niño busca el último árbol real y aprende la importancia de cuidar la naturaleza y sembrar esperanza para el futuro.",
        body: `"Había una vez una ciudad brillante y ordenada,

donde todo era de plástico y ningún árbol crecía.


Vivía allí un niño curioso, que soñaba con regalarle un árbol verdadero a la persona que quería.

Para encontrarlo, salió de la ciudad y viajó más allá de los muros.


Allí conoció a un viejo que guardaba un secreto.

Le contó cómo, tiempo atrás, había un valle lleno de árboles hermosos y coloridos,

hasta que su ambición los hizo desaparecer uno por uno.


En ese valle vivía un pequeño guardián con gran bigote,

que hablaba en nombre de los árboles y de todas las criaturas que dependían de ellos.

Pero su voz no fue escuchada, y el bosque se perdió.


El viejo entregó al niño la última semilla.

Le dijo que en ella estaba la esperanza,

porque quien planta un árbol planta también el futuro.


El niño regresó a la ciudad, sembró la semilla

y con ella despertó la vida dormida en los corazones.


Y así comprendieron que sin árboles no hay aire,

y sin aire no hay vida.

Que cuidar la tierra es cuidar de todos. 🌱💚🔮"`,
        author: "Luis"
    },
    {
        id: 17,
        title: "RALPH EL DEMOLEDOR",
        summary: "El villano de un videojuego busca demostrar que es un héroe y, al conocer a una niña inadaptada, descubre que su valor no necesita medallas.",
        body: `"Había una vez un videojuego donde un hombre grande y fuerte tenía un solo papel.

Derribar edificios para que otro héroe los reparara.


Aunque cumplía su trabajo, él se sentía solo.

Soñaba con que lo miraran como a un verdadero amigo y no solo como el villano del juego.


Un día decidió salir de su mundo para buscar una medalla que demostrara su valor.

Viajó por distintas máquinas, entre carreras de dulces y soldados digitales.


Allí conoció a una niña pequeña y traviesa que también se sentía fuera de lugar en su propio juego.

Entre risas y discusiones, descubrieron que ambos compartían el mismo deseo.

Ser aceptados por lo que realmente eran.


Juntos aprendieron que no se necesita una medalla para ser especial.

Que la verdadera fuerza está en proteger, en cuidar y en creer en uno mismo.


Y aunque el hombre grande siguió siendo el villano de su juego

su corazón encontró un lugar donde siempre sería héroe. 🎮💖"`,
        author: "Luis"
    },
    {
        id: 18,
        title: "BOBES PONJA (Bob Esponja)",
        summary: "Una esponja y su mejor amigo estrella viajan por el océano para recuperar una corona, demostrando que la amistad y la alegría salvan reinos.",
        body: `"Había una vez una esponja que soñaba con demostrar que podía ser más que un simple cocinero de hamburguesas.

Vivía en el fondo del mar con su mejor amigo, una estrella rosa que siempre lo acompañaba en sus aventuras.


Un día, el rey del océano perdió su corona y alguien debía recuperarla.

El camino era largo y peligroso, lleno de monstruos, villanos y pruebas que parecían imposibles.


Aunque muchos pensaban que eran solo niños, la esponja y la estrella nunca dejaron de creer en sí mismos.

Cantaron, rieron y hasta lloraron, pero nunca se rindieron.


Al final descubrieron que no necesitaban ser adultos serios para ser valientes.

Que la alegría, la amistad y la confianza podían salvar un reino entero.


Y así, regresaron con la corona, celebrados como héroes.

La esponja comprendió que la verdadera fuerza no está en lo que aparentas sino en ser tú mismo sin miedo y con el corazón lleno de burbujas. 🫧💛🧽"`,
        author: "Luis"
    },
    {
        id: 19,
        title: "DRAGON BALL",
        summary: "Un niño con cola de mono busca unas esferas mágicas, haciendo amigos y aprendiendo que la verdadera fuerza está en la bondad y el corazón puro.",
        body: `"Había una vez un niño con cola de mono que vivía en las montañas.

Era pequeño, fuerte y de corazón puro.


Un día conoció a una joven viajera que buscaba unas esferas mágicas.

Cuando esas esferas se unían, aparecía un dragón capaz de cumplir cualquier deseo.


Juntos emprendieron un camino lleno de aventuras. Se enfrentaron a ladrones, monstruos y guerreros poderosos. Pero también encontraron amigos que se volvieron familia.


El niño creció aprendiendo que la verdadera fuerza no solo está en los puños sino en proteger a quienes amas y nunca rendirse.


Y aunque el viaje parecía no tener fin

cada batalla lo hacía más sabio y cada amigo lo hacía más fuerte.


Así comenzó la leyenda de un pequeño guerrero que con su bondad y valentía logró que hasta los cielos escucharan su voz. 🐉✨"`,
        author: "Luis"
    },
    {
        id: 20,
        title: "DRAGON BALL Z",
        summary: "Un guerrero adulto descubre su origen extraterrestre, pero elige luchar por la Tierra y su familia, encontrando nuevas fuerzas en el amor.",
        body: `"El niño de las montañas ya había crecido. Ahora era un hombre fuerte, esposo y padre. Aunque su corazón seguía siendo puro, su destino lo llevaba a luchar en batallas cada vez más grandes.


Un día llegó a la Tierra un guerrero del espacio. Reveló un secreto oculto desde siempre, aquel hombre no era un humano común, sino parte de una raza poderosa que viajaba entre estrellas.


Ese descubrimiento no lo cambió,

pues entendió que su verdadero hogar estaba con su familia y amigos. Con ellos se enfrentó a enemigos que parecían imposibles de vencer.


Luchó contra seres que podían destruir planetas, contra androides creados para eliminarlo, ycontra monstruos que absorbían la vida misma. Cada batalla era más dura que la anterior, y a veces el sacrificio parecía ser el único camino.


Pero nunca estuvo solo.

Sus amigos luchaban a su lado,

su hijo aprendía de su ejemplo,

y en cada combate brillaba la esperanza de proteger la Tierra.


El hombre descubrió nuevas fuerzas dentro de sí, transformaciones que encendían su espíritu como un sol dorado. Ya no peleaba solo por sobrevivir, sino por un futuro donde la paz pudiera florecer.


Y así, entre lágrimas, risas y batallas que resonaban hasta en los cielos,

la leyenda de aquel guerrero se convirtió en eterna.

Un héroe que enseñó que la verdadera fuerza no nace del poder,

sino del amor que sentimos por quienes nos rodean. 🐉⚡🌌"`,
        author: "Luis"
    },
    {
        id: 21,
        title: "DRAGON BALL SUPER",
        summary: "El guerrero se enfrenta a dioses y descubre que los límites no existen cuando el corazón pelea por proteger a quienes ama en el multiverso.",
        body: `"El guerrero que alguna vez fue un niño ya había salvado la Tierra muchas veces.

Creía que al fin podría vivir en paz con su familia y amigos.

Pero el universo era inmenso,

y nuevos desafíos lo esperaban más allá de las estrellas.


Un día despertaron dioses que jamás había imaginado.

Seres capaces de destruir mundos con solo un gesto.

Frente a ellos, el guerrero comprendió que su fuerza aún era pequeña, y que siempre existía un límite que superar.


Con cada batalla descubrió algo nuevo dentro de sí.

Su espíritu ardía en formas nunca vistas, transformándose en un aura azul que brillaba como el cielo y en un poder tan inmenso que nacía del puro dominio de su corazón.


Junto a sus amigos enfrentó torneos entre universos, donde cada luchador peleaba no solo por sí mismo sino por la existencia de todo su mundo.


Allí conoció a rivales que se convirtieron en aliados, enemigos que le enseñaron respeto, y compañeros que demostraron que la fuerza verdadera se comparte.


El guerrero entendió que siempre habría alguien más fuerte, pero también que nunca dejaría de crecer.

Que su camino no era alcanzar la cima, sino seguir adelante con esperanza y valentía.


Y así, en cada combate, en cada risa y en cada promesa, su leyenda brillaba más allá del tiempo.

Un héroe que enseñó que los límites no existen cuando el corazón pelea por proteger lo que ama. 🐉⚡🌌"`,
        author: "Luis"
    },
];

// --- COMPONENTES AUXILIARES ---

// Icono personalizado definido FUERA para evitar errores de inicialización
const UmbrellaIcon = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>
    </svg>
);

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    const particles = [];
    const particleCount = 120; // Increased particles for density
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 2; // Bigger particles
        this.speedX = Math.random() * 1.5 - 0.75; // Faster movement
        this.speedY = Math.random() * 1.5 - 0.75;
        this.opacity = Math.random() * 0.5 + 0.2;
        // Varied pastel colors
        const colors = [
            `rgba(255, 182, 193, ${this.opacity})`, // Light Pink
            `rgba(221, 160, 221, ${this.opacity})`, // Plum
            `rgba(255, 160, 122, ${this.opacity})`, // Light Salmon
            `rgba(255, 255, 224, ${this.opacity})`  // Light Yellow/Gold hint
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const init = () => { for (let i = 0; i < particleCount; i++) particles.push(new Particle()); };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };
    init();
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  // Fondo Gradiente más rico y colorido (no blanco)
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-100 via-purple-100 to-pink-200" />;
};

// --- SECCIONES INDIVIDUALES ---

// 1. HERO & INTRO
const HeroSection = ({ scrollTo }) => (
  <section className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center">
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-xl tracking-[0.3em] uppercase text-purple-600 font-bold drop-shadow-sm">Bienvenidos a</h2>
      <h1 className="text-6xl md:text-8xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-md animate-pulse-slow">
        Nadia & Luis
      </h1>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto italic font-medium bg-white/30 backdrop-blur-sm p-4 rounded-xl shadow-sm">
        "El arte no está en los museos, está en cada momento que pasamos juntos."
      </p>
      <div className="pt-8">
        <button 
          onClick={() => scrollTo('rdm')}
          className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-full bg-gradient-to-br from-purple-400 to-pink-400 group-hover:from-purple-500 group-hover:to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-white/90 text-gray-800 rounded-full group-hover:bg-opacity-0 group-hover:text-white flex items-center gap-2 font-bold">
            <Heart className="w-4 h-4 animate-beat" fill="currentColor" />
            <span>Explorar Nuestra Historia</span>
          </span>
        </button>
      </div>
    </div>
    <div className="absolute bottom-10 animate-bounce text-purple-500">
      <ArrowDown className="w-10 h-10 drop-shadow-md" />
    </div>
  </section>
);

// 2. RDM GRID
const RDMSection = () => {
    const rdms = [
        { 
            date: "Octubre 2025", 
            title: "Carrera de Disfraces", 
            icon: <Trophy className="w-5 h-5 text-purple-500" />, 
            image: "https://i.imgur.com/NADoali.png", 
            story: "Octubre fue un mes increíble (¡y el cumpleaños de la cumpleañera!), pero el recuerdo de la carrera se lleva el premio. El simple hecho de vestirnos con nuestros disfraces y cruzar la meta juntos fue una prueba de lo mucho que podemos divertirnos sin importar el plan. Un recuerdo de esfuerzo y risas que solo tú y yo entendemos." 
        },
        { 
            date: "Septiembre 2025", 
            title: "Sushi Sorpresa", 
            icon: <UtensilsCrossed className="w-5 h-5 text-pink-500" />, 
            image: "https://i.imgur.com/8KdnXcO.png", 
            story: "Después de varias semanas, por fin te di la sorpresa de llevarte a comer el sushi que tanto querías. Verte emocionada al entrar al restaurante ya era el mejor regalo para mí. La cena estuvo deliciosa y el ambiente muy bonito. Fue nuestra forma de celebrar un mes más de novios, recordando que hasta los deseos más pequeños se cumplen cuando estamos juntos." 
        },
        { 
            date: "Agosto 2025", 
            title: "Aventura en Huasca", 
            icon: <Globe className="w-5 h-5 text-purple-500" />, 
            image: "https://i.imgur.com/6oUe2OE.png", 
            story: "Este fue, sin duda, el mejor mes de todos. Te llevé de sorpresa a Huasca de Ocampo. No tenías idea hasta que llegamos. Pasamos dos días sin dinero, nos mojamos muchísimo por la lluvia y pasamos mucho frío, pero logramos comer, hospedarnos y fuimos inmensamente felices. Nada importó porque dormimos juntos. Terminamos super pobres, pero no me arrepiento de haber vivido esa aventura contigo. Lo valió todo." 
        },
        { 
            date: "Julio 2025", 
            title: "Nuestro Primer Mes", 
            icon: <Star className="w-5 h-5 text-pink-500" />, 
            image: "https://i.imgur.com/meMSF3e.png", 
            story: "¡Nuestro primer mes! 🥳 Lo celebramos con una cena especial en 'Los Tacos de Peri'. Me acuerdo perfecto de esa noche, no solo por los tacos (que estaban buenísimos), sino porque grabamos un video diciendo cómo nos sentíamos. Es un tesoro tener ese clip. Es increíble ver todo lo que hemos construido desde ese momento." 
        },
        { 
            date: "Junio 2025", 
            title: "Maruchan & Cars", 
            icon: <Film className="w-5 h-5 text-purple-500" />, 
            image: "https://i.imgur.com/2JLEukH.png", 
            story: "Nuestro primer recuerdo del mes. La primera vez que vimos 'Cars' juntos en tu casa. El plan era simple: nos preparamos unas Maruchan (que sabían a gloria) y nos acurrucamos a ver la película. No sé qué fue mejor, la película, las sopas o tu compañía. Creo que fue todo junto. Un plan sencillo, pero perfecto." 
        }
    ];

    return (
        <section id="rdm" className="py-24 px-4 max-w-6xl mx-auto bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl border border-white/40 my-12 mx-4">
            <div className="text-center mb-12">
                <span className="bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">Colección</span>
                <h2 className="text-5xl font-serif font-bold text-gray-800 mt-6 drop-shadow-sm">Recuerdos del Mes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {rdms.map((item, idx) => (
                    <div 
                        key={idx} 
                        className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-red-500 font-bold text-sm tracking-wider uppercase bg-red-100 px-3 py-1 rounded-full">{item.date}</span>
                            <div className="p-2 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors">
                                {item.icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{item.title}</h3>
                        {item.image && (
                            <div className="mb-4 rounded-2xl overflow-hidden h-52 shadow-inner border border-white/50 relative bg-gradient-to-br from-pink-50 to-purple-50">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    // CLAVE: object-contain para no recortar la foto
                                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-2" 
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/9333ea/ffffff?text=Error+Cargando+Foto'; }} 
                                />
                            </div>
                        )}
                        <p className="text-gray-700 italic border-l-4 border-purple-300 pl-4 leading-relaxed">"{item.story}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// 3. ANTOLOGÍA (POEMAS)
const PoemsSection = () => {
    const userPoem = `Tus ojitos cafés, no los dejo de ver.
me miran y el mundo empieza a ceder.
No entiendo este ritmo, ni quiero entender,
solo sé que contigo, todo puede ser.

No hubo señales, ni explicación,
solo ese momento y la conexión.
Llegaste a mi vida, sin darme opción,
y en menos de nada, todo cambió.

Ese primer beso me hizo temblar,
tu abrazo travieso me hizo volar.
Tan corto el momento, tan claro el deseo,
desde ese segundo supe que te quiero.

El tiempo va rápido, sin descansar,
pero entre tus brazos se deja llevar.
Y aunque fue tan rápido lo que empezó,
cada día contigo… se siente mejor.`;

    const poems = [
        { title: "El Ritmo que Cede", body: userPoem, author: "Luis" },
        { title: "La Conexión de Ojos Cafés", body: userPoem, author: "Tu Poeta" },
        { title: "Contigo... Todo Puede Ser", body: userPoem, author: "Tu Novio" },
        { title: "El Deseo Claro", body: userPoem, author: "Luis (Enero 2026)" },
    ];

    return (
        <section id="poemas" className="py-24 px-4 bg-gradient-to-b from-pink-100/40 to-purple-100/40 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-block p-3 bg-white/50 rounded-full shadow-sm mb-4">
                        <BookOpen className="w-10 h-10 text-pink-500" />
                    </div>
                    <h2 className="text-5xl font-serif font-bold text-gray-800 drop-shadow-sm">Antología del Corazón</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {poems.map((poem, index) => (
                        <div key={index} className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/60 rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white/60">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center border-b-2 border-pink-200 pb-2 font-serif">{poem.title}</h3>
                            <p className="whitespace-pre-wrap text-gray-700 text-center leading-relaxed text-sm font-medium">
                                {poem.body}
                            </p>
                            <p className="text-right text-xs text-purple-500 mt-6 font-bold tracking-widest uppercase">— {poem.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 4. ABRIR SI...
const OpenWhenSection = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const cards = [
        {
            id: 'extrañas',
            title: "Si me extrañas",
            icon: <Heart className="w-6 h-6 text-red-500" />,
            content: "Lo sé, la vida a veces aprieta. Permítete sentir lo que necesites, pero no te quedes ahí. Recuerda lo increíble y fuerte que eres. Date un respiro, escucha tu canción favorita, y mañana intentemos que sea un poquito mejor. Estoy contigo, aunque no estemos cerca en este momento."
        },
        {
            id: 'triste',
            title: "Si estás triste",
            icon: <Frown className="w-6 h-6 text-purple-500" />,
            content: "Hey, no me gusta nada que estés así. Es completamente válido sentirse mal, pero no estás sola. Recuerda que después de la lluvia siempre sale el sol (y a veces un arcoíris). Te mando el abrazo más fuerte del mundo."
        },
        {
            id: 'querer',
            title: "Si necesitas amor",
            icon: <Star className="w-6 h-6 text-pink-500" />,
            content: "Uy, si tienes que abrir esto es que no lo estoy diciendo suficiente. Que no se te olvide NUNCA. Eres mi persona favorita por muchísimas razones: tu risa, tu inteligencia, tu bondad... Te quiero infinitamente."
        },
        {
            id: 'reir',
            title: "Si necesitas reír",
            icon: <Laugh className="w-6 h-6 text-purple-600" />,
            content: "Encontré esto y me acordé de ti al instante. Espero que te rías tanto como yo (prepárate, es tonto)... Imagina un pingüino resbalándose en el hielo. 🐧💨 ¡Espero haberte sacado una sonrisa!"
        },
        {
            id: 'mal-dia',
            title: "Si tuviste un mal día",
            icon: <UmbrellaIcon className="w-6 h-6 text-gray-500" />,
            content: "Lamento que tu día haya sido pesado. Ojalá pudiera estar ahí para darte un abrazo gigante. Como no puedo (aún), te doy esto: 🎟️ VALE POR UN MASAJE Y TU COMIDA FAVORITA. Canjeable en cuanto me veas."
        },
        {
            id: 'motivacion',
            title: "Si necesitas motivación",
            icon: <Zap className="w-6 h-6 text-red-500" />,
            content: "Tú puedes con eso y con más. En serio, eres la persona más fuerte y capaz que conozco. Mira todo lo que has logrado hasta ahora. ¡El mundo es tuyo, Nadia!"
        },
        {
            id: 'planear',
            title: "Si quieres planear",
            icon: <Map className="w-6 h-6 text-pink-600" />,
            content: "Me encanta esta idea. Soñar con nuestro futuro es de mis cosas favoritas. He estado pensando en: Un viaje a la playa, una tarde de pintura, o quizás... ¿adoptar una planta juntos? ¡Vamos a hacerlo realidad!"
        },
        {
            id: 'aburrida',
            title: "Si estás aburrida",
            icon: <Coffee className="w-6 h-6 text-purple-700" />,
            content: "¡Prohibido aburrirse! ¿Qué tal si pruebas esto? Busca la canción más rara en tu Spotify y mándamela. O hagamos una competencia de quién hace el dibujo más feo en 1 minuto."
        },
        {
            id: 'ansiosa',
            title: "Si te sientes ansiosa",
            icon: <LifeBuoy className="w-6 h-6 text-pink-400" />,
            content: "Respira. Inhala... 1, 2, 3, 4. Mantén... 1, 2, 3, 4. Exhala... 1, 2, 3, 4. Todo va a estar bien. Estás a salvo y yo estoy contigo. Cierra los ojos un momento y concéntrate solo en mi voz diciéndote que todo pasará."
        },
        {
            id: 'cancion',
            title: "Si quieres música",
            icon: <Headphones className="w-6 h-6 text-purple-400" />,
            content: "O nuestras canciones. Cada una me recuerda a un momento diferente contigo. Súbele el volumen y baila como si nadie te estuviera viendo (aunque yo pagaría por verte bailar ahora mismo)."
        }
    ];

    return (
        <section className="py-24 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <div className="inline-block p-3 bg-white/60 rounded-full shadow-md mb-4 animate-float">
                    <Lock className="w-10 h-10 text-pink-500" />
                </div>
                <h2 className="text-5xl font-serif font-bold text-gray-800 drop-shadow-sm">Abrir Cuando...</h2>
                <p className="text-gray-700 mt-2 font-medium">Pequeñas cartas para cada momento que necesites.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {cards.map((card) => (
                    <button
                        key={card.id}
                        onClick={() => setSelectedCard(card)}
                        className="flex flex-col items-center justify-center p-6 bg-white/40 backdrop-blur-md rounded-2xl shadow-lg border border-white/60 hover:shadow-2xl hover:bg-white/60 hover:scale-110 transition-all duration-300 h-full group"
                    >
                        <div className="mb-4 p-4 bg-white/70 rounded-full group-hover:bg-white transition-colors shadow-inner">
                            {card.icon}
                        </div>
                        <span className="text-sm font-bold text-gray-800 text-center group-hover:text-purple-600 transition-colors">{card.title}</span>
                    </button>
                ))}
            </div>

            {selectedCard && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-900/30 backdrop-blur-sm animate-fade-in-up">
                    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 max-w-lg w-full shadow-2xl relative border-t-8 border-pink-400 animate-pop-in">
                        <button 
                            onClick={() => setSelectedCard(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors bg-gray-100 rounded-full p-1"
                        >
                            ✕
                        </button>
                        <div className="flex justify-center mb-6">
                            <div className="p-5 bg-pink-100 rounded-full animate-bounce shadow-md">
                                {selectedCard.icon}
                            </div>
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-center text-gray-800 mb-6">
                            {selectedCard.title}
                        </h3>
                        <p className="text-gray-700 text-center leading-relaxed text-lg font-medium">
                            {selectedCard.content}
                        </p>
                        <div className="mt-8 text-center">
                            <button 
                                onClick={() => setSelectedCard(null)}
                                className="px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-bold hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Recibido con amor ❤️
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

// 5. SECCIÓN DE CUENTOS (MODAL)
const StoriesSection = () => {
    const [selectedStory, setSelectedStory] = useState(null);

    return (
        <section className="py-24 px-4 bg-white/20 backdrop-blur-md border-y border-white/20">
            <div className="max-w-5xl mx-auto">
                 <div className="text-center mb-16">
                    <div className="inline-block p-3 bg-white/50 rounded-full shadow-sm mb-4">
                        <Book className="w-10 h-10 text-purple-500" />
                    </div>
                    <h2 className="text-5xl font-serif font-bold text-gray-800 drop-shadow-sm">Nuestros Cuentos Largos</h2>
                    <p className="text-gray-700 mt-2 font-medium">Pequeñas historias donde tú eres la protagonista.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {STORIES_DATA.map((story) => (
                        <div 
                            key={story.id} 
                            onClick={() => setSelectedStory(story)}
                            className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-[1.02] hover:bg-white/70"
                        >
                            <div className="h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-6 flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 transition-all shadow-inner">
                                <span className="text-5xl text-purple-500 drop-shadow-sm transform group-hover:scale-110 transition-transform">📖</span>
                            </div>
                            <h4 className="text-2xl font-bold text-gray-800 mb-3">{story.title}</h4>
                            <p className="text-gray-600 text-sm italic line-clamp-3">
                                {story.summary}
                            </p>
                            <span className="text-pink-500 text-sm font-bold mt-6 block group-hover:underline uppercase tracking-wide">Leer Cuento Completo →</span>
                        </div>
                    ))}
                </div>

                {selectedStory && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-900/40 backdrop-blur-md animate-fade-in-up overflow-y-auto">
                        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 max-w-4xl w-full shadow-2xl relative border-t-8 border-purple-400 my-8 animate-pop-in">
                            
                            <h3 className="text-4xl font-serif font-bold text-center text-gray-900 mb-2">
                                {selectedStory.title}
                            </h3>
                            <p className="text-center text-sm text-pink-500 font-bold mb-8 uppercase tracking-widest">
                                Escrito por {selectedStory.author}
                            </p>

                            <div className="max-h-[60vh] overflow-y-auto pr-4 text-lg text-gray-700 leading-loose whitespace-pre-wrap font-medium">
                                {selectedStory.body}
                            </div>

                            <div className="mt-10 text-center">
                                <button 
                                    onClick={() => setSelectedStory(null)}
                                    className="px-8 py-3 bg-purple-500 text-white rounded-full font-bold hover:bg-purple-600 transition-colors shadow-lg hover:shadow-xl"
                                >
                                    Cerrar y Volver al Índice
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

// 6. PLAYLIST DE SPOTIFY
const PlaylistSection = () => (
    <section className="py-24 px-4 max-w-4xl mx-auto">
         <div className="text-center mb-12">
            <div className="inline-block p-3 bg-white/50 rounded-full shadow-sm mb-4 animate-pulse-slow">
                <Music className="w-10 h-10 text-pink-500" />
            </div>
            <h2 className="text-5xl font-serif font-bold text-gray-800 drop-shadow-sm">Nuestra Playlist</h2>
            <p className="text-gray-700 mt-2 font-medium">La banda sonora de nuestra historia.</p>
        </div>
        <div className="bg-white/30 backdrop-blur-md p-4 rounded-[2rem] shadow-2xl border border-white/50 transform hover:scale-[1.01] transition-transform duration-500">
             <iframe 
                style={{ borderRadius: '24px' }} 
                src="https://open.spotify.com/embed/playlist/2TRy6O7KcV1kNLAvXqiAVq?utm_source=generator&theme=0" 
                width="100%" 
                height="652" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Spotify Playlist Nadia & Luis"
            ></iframe>
        </div>
    </section>
);

// 7. ¿POR QUÉ TE AMO?
const ReasonsSection = () => (
    <section className="py-24 px-4 bg-gradient-to-r from-pink-100/50 to-purple-100/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto text-center">
            <Heart className="w-16 h-16 text-red-400 mx-auto mb-6 animate-beat drop-shadow-md" fill="currentColor" />
            <h2 className="text-5xl font-serif font-bold text-gray-800 mb-8 drop-shadow-sm">¿Por qué te amo?</h2>
            <p className="text-xl text-gray-700 mb-16 italic font-medium max-w-2xl mx-auto">
                Cada día encuentro una nueva razón para amarte más, pero aquí están algunas de las que más valoro:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {[
                    { title: "La Paz Que Me Das", desc: "Amo la calma y serenidad que me transmites. Contigo, los problemas parecen más pequeños y encuentro una paz que no encuentro en ningún otro lugar. Eres mi ancla." },
                    { title: "Tu Luz Contagiosa", desc: "Amo tu sonrisa, esa que ilumina cualquier día gris, y tu risa contagiosa que siempre me saca una carcajada. Es imposible no sentirme feliz a tu lado." },
                    { title: "Mi Apoyo Incondicional", desc: "Amo saber que siempre estás ahí para mí, en las buenas y en las malas. Tu apoyo es mi mayor fortaleza y me da la confianza para enfrentar lo que sea." },
                    { title: "Tu Mente Brillante", desc: "Amo tu inteligencia y curiosidad. Me encanta cómo siempre aprendes cosas nuevas y me enseñas a ver el mundo desde perspectivas que nunca había considerado. Cada conversación contigo es un viaje fascinante." },
                    { title: "Tu Fuerza y Resiliencia", desc: "Amo tu valentía y capacidad para superar cualquier obstáculo. Me inspiras ver cómo te levantas con más fuerza ante cualquier adversidad. Eres un verdadero ejemplo de perseverancia." },
                    { title: "Nuestras Risas Compartidas", desc: "Amo las carcajadas sinceras que compartimos, esas que nos hacen doler el estómago y nos unen aún más. No hay nada como reír contigo hasta que nos falte el aire." },
                    { title: "Tu Capacidad de Cuidar", desc: "Amo tu habilidad innata para cuidar de los que te rodean, para estar atenta a los detalles y para hacer que los demás se sientan especiales. Eres atenta y amorosa en cada gesto." },
                    { title: "La Confianza Absoluta", desc: "Amo la confianza total que hemos construido. Saber que puedo ser completamente yo mismo contigo, sin filtros ni miedos, es un regalo invaluable. Eres mi confidente y mi mejor amiga." },
                    { title: "Nuestras Aventuras", desc: "Amo cada aventura que vivimos juntos, desde los grandes viajes hasta los planes espontáneos. Cada experiencia a tu lado se convierte en un recuerdo inolvidable que atesoro con cariño." },
                    { title: "Tu Pasión por la Vida", desc: "Amo la pasión con la que vives, persigues tus sueños y disfrutas de cada instante. Tu entusiasmo es contagioso y me recuerda lo hermoso que es vivir plenamente." },
                    { title: "Cómo Me Haces Mejor Persona", desc: "Amo cómo me impulsas a crecer y a ser una mejor versión de mí mismo. Tu fe en mí y tu aliento constante me motivan a alcanzar mis metas y a ser más de lo que creía posible." },
                    { title: "Tu Dulce Mirada", desc: "Amo la forma en que me miras. Hay una ternura y un cariño en tus ojos que me hacen sentir completamente amado y seguro. En tu mirada encuentro mi refugio." },
                    { title: "Simplemente Tú", desc: "Pero sobre todo, te amo por ser tú. Por tu autenticidad, por tu pasión, por tu forma única de ver el mundo. Eres la persona más maravillosa que conozco.", fullWidth: true }
                ].map((item, idx) => (
                    <div 
                        key={idx} 
                        className={`flex items-start gap-6 bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl hover:bg-white/80 transition-all duration-300 hover:scale-105 group ${item.fullWidth ? 'md:col-span-2' : ''}`}
                    >
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center flex-shrink-0 text-purple-600 font-bold text-2xl shadow-inner group-hover:from-pink-300 group-hover:to-purple-300 transition-all">
                            {idx + 1}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-purple-800 mb-2">{item.title}</h3>
                            <p className="text-gray-700 font-medium text-lg leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// 8. CONTADOR SUPREMO
const SupremeCounter = () => {
    const [stats, setStats] = useState({
        dias: 0, anios: 0, meses: 0, semanas: 0, horas: 0, minutos: 0, segundos: 0,
        latidos: 0, sangre: 0, celulas: 0, respiraciones: 0, parpadeos: 0,
        orbitaSol: 0, viaLactea: 0, orbitasLunares: 0, abrazos: 0, bebes: 0
    });

    const f = (n, d = 0) => n.toLocaleString('es-MX', { minimumFractionDigits: d, maximumFractionDigits: d });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const start = START_DATE.getTime();
            const diffSeconds = Math.max(0, (now - start) / 1000);

            const totalMinutos = diffSeconds / 60;
            const totalHoras = diffSeconds / 3600;
            const totalDias = diffSeconds / 86400;

            setStats({
                dias: totalDias,
                anios: diffSeconds / 31556952,
                meses: diffSeconds / 2629746,
                semanas: diffSeconds / 604800,
                horas: totalHoras,
                minutos: totalMinutos,
                segundos: diffSeconds,
                latidos: totalMinutos * 75,
                sangre: totalMinutos * 5.5,
                celulas: (diffSeconds * 2400000) / 1000000000000,
                respiraciones: totalMinutos * 16,
                parpadeos: totalMinutos * 15,
                orbitaSol: (totalHoras * 107000) / 1000000,
                viaLactea: (diffSeconds * 220) / 1000000000,
                orbitasLunares: totalDias / 27.32,
                abrazos: totalDias * 5,
                bebes: diffSeconds * 4.3
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const StatBlock = ({ label, value, unit, detail, color = "text-gray-800" }) => (
        <div className="mb-6 pb-6 border-b border-dashed border-purple-200 last:border-0 last:mb-0 last:pb-0">
            <span className={`block text-4xl md:text-5xl font-black ${color} font-mono tracking-tighter drop-shadow-sm`}>
                {value}
            </span>
            <span className="text-sm uppercase tracking-widest text-gray-500 font-bold block mt-1">{unit}</span>
            {detail && <p className="text-sm text-gray-500 italic mt-2 border-l-4 border-pink-200 pl-3 bg-white/30 rounded-r-lg py-1">{detail}</p>}
        </div>
    );

    return (
        <section className="py-24 px-4 bg-white/30 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
                 <div className="text-center mb-16">
                    <h1 className="text-6xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6 drop-shadow-sm" style={{ fontFamily: '"Dancing Script", cursive' }}>
                        Datos de Nuestra Historia
                    </h1>
                    <h2 className="text-2xl text-gray-700 font-light bg-white/40 inline-block px-8 py-2 rounded-full shadow-sm backdrop-blur-md">
                        Muchas cosas han pasado en los <span className="font-bold text-gray-900">{f(stats.dias, 0)}</span> días que hemos pasado juntos.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-xl border border-white/60 hover:shadow-2xl hover:bg-white/80 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                            <div className="p-2 bg-pink-100 rounded-lg"><Activity className="text-pink-500 w-6 h-6" /></div>
                            Hemos compartido cada instante
                        </h3>
                        <StatBlock value={f(stats.anios, 2)} unit="Años Juntos" detail="Calculado usando el año tropical (365.2425 días)." color="text-pink-600" />
                        <StatBlock value={f(stats.meses, 2)} unit="Meses Juntos" detail="Un promedio de 30.43 días por mes." color="text-pink-600" />
                        <StatBlock value={f(stats.horas, 0)} unit="Horas Totales" color="text-pink-500" />
                        <StatBlock value={f(stats.segundos, 0)} unit="Segundos Totales" detail="La base de todo." color="text-purple-600" />
                    </div>

                    <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-xl border border-white/60 hover:shadow-2xl hover:bg-white/80 transition-all duration-300">
                         <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                            <div className="p-2 bg-red-100 rounded-lg"><Heart className="text-red-500 w-6 h-6" /></div>
                            Desde que estamos juntos...
                        </h3>
                        <StatBlock value={f(stats.latidos, 0)} unit="Latidos (Estimados)" detail="Promedio de 75 lpm." color="text-red-500" />
                        <StatBlock value={f(stats.sangre, 0)} unit="Litros de Sangre" detail="5.5 litros por minuto." color="text-red-500" />
                        <StatBlock value={f(stats.respiraciones, 0)} unit="Respiraciones" color="text-red-400" />
                        <StatBlock value={f(stats.parpadeos, 0)} unit="Parpadeos" color="text-red-400" />
                    </div>

                    <div className="md:col-span-2 bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-xl border border-white/60 hover:shadow-2xl hover:bg-white/80 transition-all duration-300">
                         <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                            <div className="p-2 bg-purple-100 rounded-lg"><Globe className="text-purple-500 w-6 h-6" /></div>
                            Hemos viajado más de lo que crees
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <StatBlock value={f(stats.orbitaSol, 2)} unit="Millones de KM (Sol)" color="text-gray-800" detail="La Tierra viaja a 107,000 km/h." />
                                <StatBlock value={f(stats.viaLactea, 2)} unit="Mil Millones KM (Galaxia)" color="text-gray-800" detail="El sistema solar a 220 km/s." />
                            </div>
                            <div>
                                <StatBlock value={f(stats.orbitasLunares, 2)} unit="Vueltas de la Luna" color="text-gray-800" detail="Cada 27.32 días." />
                                <StatBlock value={f(stats.abrazos, 0)} unit="Abrazos (Estimados)" color="text-pink-500" detail="¡5 abrazos al día!" />
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center mt-16 text-gray-500 italic text-sm font-medium">
                    Made with ❤️ by Luis and Nadia's heart logic engine.
                </p>
            </div>
        </section>
    );
};


// --- COMPONENTE PRINCIPAL APP ---
export default function App() {
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    const id = Date.now();
    const left = Math.random() * 90 + 5;
    setHearts(prev => [...prev, { id, left }]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== id));
    }, 4000);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-gray-800 font-sans selection:bg-purple-300 selection:text-white overflow-x-hidden">
      <ParticleBackground />

      <div className="fixed inset-0 pointer-events-none z-50">
        {hearts.map(h => (
          <div key={h.id} className="absolute bottom-0 text-pink-400 animate-float-up text-4xl" style={{ left: `${h.left}%` }}>
            <Heart fill="currentColor" />
          </div>
        ))}
        <button 
            onClick={addHeart}
            className="fixed bottom-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-2xl border border-pink-200 hover:scale-110 transition-transform cursor-pointer z-50 group hover:bg-white"
        >
            <Heart className="w-8 h-8 text-pink-500 group-hover:animate-pulse drop-shadow-md" fill="currentColor" />
        </button>
      </div>

      <HeroSection scrollTo={scrollToSection} />
      <RDMSection />
      <PoemsSection />
      <OpenWhenSection />
      <StoriesSection />
      <PlaylistSection />
      <ReasonsSection />
      <SupremeCounter />

      <footer className="py-12 text-center text-gray-500 text-sm bg-white/20 backdrop-blur-md border-t border-white/30">
        <p>© {new Date().getFullYear()} NadiayLuis.art - Hecho con amor eterno.</p>
      </footer>

      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
        }
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.95; transform: scale(1.02); }
        }
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-float-up {
          animation: float-up 4s ease-out forwards;
        }
        .animate-fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
        }
        .animate-beat {
            animation: beat 1s infinite;
        }
        .animate-float {
            animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
            animation: pulse-slow 4s infinite ease-in-out;
        }
        .animate-pop-in {
            animation: pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
      `}</style>
    </div>
  );
}
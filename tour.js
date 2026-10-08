const commons = (file, author, license) => ({
  src: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1200`,
  source: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`,
  credit: `${author} · ${license}`
});
const tourData = {
  'isla-familiar': {
    label:'CATAMARÁN · FAMILIAR', title:'Isla Mujeres en familia', intro:'Un día de mar, playa y tiempo juntos. Navega desde Cancún hacia Isla Mujeres en un catamarán compartido.', price:'Adultos $850 MXN · menores $450 MXN', cover:'imagen/fotoisla.jpg', coverAlt:'Vista de Isla Mujeres',
    lead:'Una experiencia completa para compartir', body:'Disfruta la navegación, la barra libre, el buffet, el club de playa y tiempo libre en la isla. El snorkel se realiza cuando el clima lo permite.',
    facts:['Duración aproximada: 6 horas y media','Salida desde Cancún','Infantes 0–4 años gratis','Menores 5–11 años; adultos desde los 12'],
    moments:[
      {title:'Navegación en catamarán',text:'La travesía hacia Isla Mujeres comienza en Cancún.',src:'imagen/catamarandelejos.jpeg',alt:'Catamarán navegando'},
      {title:'Snorkel',text:'Equipo incluido. Actividad sujeta a las condiciones del mar.',src:'imagen/chapuzon.jpg',alt:'Personas practicando snorkel'},
      {title:'Bebidas a bordo',text:'Barra libre durante la experiencia según la operación del día.',src:'imagen/chela.jpg',alt:'Bebidas a bordo'},
      {title:'Comida buffet',text:'Opciones de comida que pueden variar según el club de playa.',src:'imagen/comida1.jpeg',alt:'Comida tipo buffet'},
      {title:'Club de playa',text:'Acceso a un club en Isla Mujeres; puede cambiar según disponibilidad.',src:'imagen/clubdeplaya.jpeg',alt:'Club de playa'},
      {title:'Tiempo en Isla Mujeres',text:'Disfruta Playa Norte y tiempo libre según el itinerario.',src:'imagen/fotoisla.jpg',alt:'Vista de Isla Mujeres'}
    ],
    details:['Sin transporte: adultos $850 MXN; menores $450 MXN.','Transporte disponible desde +$250 MXN por persona, según hotel. Cotiza en Plus Experiencia Familiar.','Infantes de 0 a 4 años gratis, incluso con transporte.','Punto de encuentro: Hotel Imperial Las Perlas, km 2.5 aprox., Zona Hotelera de Cancún.'],
    note:'El club de playa puede variar. Confirma horario, disponibilidad y punto exacto de encuentro al reservar.'
  },
  'isla-adultos': {
    label:'CATAMARÁN · 18+', title:'Isla Mujeres Solo Adultos', intro:'Mar, música y ambiente de fiesta en un recorrido compartido para personas de 18 años en adelante.', price:'$900 MXN por persona', cover:'imagen/fiesta.jpeg', coverAlt:'Ambiente de fiesta en el catamarán',
    lead:'El Caribe con ritmo propio', body:'Navega hacia Isla Mujeres, disfruta bebidas, buffet, snorkel si el clima lo permite y tiempo libre en la isla. DJ a bordo de miércoles a domingo, sujeto a programación.',
    facts:['Para personas de 18 años en adelante','Salida desde Cancún','Duración aproximada: 6 horas y media','Transporte opcional a cotizar'],
    moments:[
      {title:'Ambiente a bordo',text:'Música y convivencia durante la navegación.',src:'imagen/fiesta.jpeg',alt:'Ambiente a bordo'},
      {title:'DJ y baile',text:'DJ de miércoles a domingo, sujeto a disponibilidad.',src:'imagen/baile.jpg',alt:'Personas bailando a bordo'},
      {title:'Catamarán',text:'Recorrido compartido desde Cancún hacia Isla Mujeres.',src:'imagen/seapassion1.jpg',alt:'Catamarán en el Caribe'},
      {title:'Bebidas',text:'Barra libre según la operación del tour.',src:'imagen/chela.jpg',alt:'Bebidas en el recorrido'},
      {title:'Buffet',text:'Comida durante la experiencia; menú variable.',src:'imagen/comida2.jpeg',alt:'Comida buffet'},
      {title:'Snorkel',text:'Equipo incluido; actividad sujeta al clima.',src:'imagen/chapuzon.jpg',alt:'Snorkel en el Caribe'}
    ], details:['Tour: $900 MXN por persona.','Transporte adicional disponible; consulta tarifa y zona de recogida.','Salida desde la zona del Hotel Imperial Las Perlas, Cancún.'],
    note:'Programa musical, paradas y actividades sujetos a operación y clima.'
  },
  'chichen-itza': {
    label:'CULTURA · YUCATÁN', title:'Chichén Itzá y dos cenotes', intro:'Historia maya, cenotes, sabores regionales y Valladolid en un recorrido. Elige Clásico, Plus o Deluxe.', price:'Nacionales desde $880 MXN · confirma la tarifa por modalidad',
    cover:'imagen/chichen-piramide.jpeg', coverAlt:'Pirámide de Kukulcán en Chichén Itzá',
    lead:'Un día para vivir Yucatán', body:'Las tres modalidades incluyen transporte redondo climatizado, guía certificado, entrada a Chichén Itzá, visita a los cenotes Yunchen y Xkokay, comida regional, ritual maya, degustación de chocolate artesanal y mezcal, y recorrido por Valladolid.',
    facts:['Chichén Itzá + cenotes Yunchen y Xkokay','Comida regional y guía certificado','Valladolid, ritual maya y degustación','Tres modalidades: Clásico, Plus y Deluxe'],
    moments:[
      {title:'Chichén Itzá',text:'Entrada y visita guiada a la zona arqueológica.',src:'imagen/chichen-piramide.jpeg',alt:'Pirámide de Kukulcán bajo cielo azul'},
      {title:'Dos cenotes',text:'Visita a Yunchen y Xkokay. Las fotos muestran el recorrido de cenotes compartido.',src:'imagen/chichen-cenote-puente.jpeg',alt:'Cenote con pasarela y agua azul'},
      {title:'Comida regional',text:'Sabores de la región incluidos en las tres modalidades.',src:'imagen/chichen-comida.jpeg',alt:'Plato de comida regional'},
      {title:'Ritual maya',text:'Una experiencia cultural incluida en el recorrido.',src:'imagen/chichen-ritual.jpeg',alt:'Personas durante una actividad cultural'},
      {title:'Chocolate artesanal y mezcal',text:'Degustación durante la experiencia.',src:'imagen/chichen-degustacion.jpeg',alt:'Demostración de productos artesanales'},
      {title:'Valladolid',text:'Recorrido por la ciudad al completar la ruta.',src:'imagen/chichen-valladolid.jpeg',alt:'Iglesia y plaza de Valladolid'},
      {title:'Más del cenote',text:'El entorno natural desde otra perspectiva.',src:'imagen/chichen-cenote-vista.jpeg',alt:'Cenote visto desde arriba'},
      {title:'Un momento para recordar',text:'Recuerdos del recorrido compartidos por viajeros.',src:'imagen/chichen-recuerdo.jpeg',alt:'Viajeros posando junto a flores'},
      {title:'Encuentro con la naturaleza',text:'Una vista desde la pasarela del cenote.',src:'imagen/chichen-cenote-persona.jpeg',alt:'Persona junto a la entrada del cenote'},
      {title:'Sabores artesanales',text:'Conoce la elaboración durante la degustación.',src:'imagen/chichen-chocolate.jpeg',alt:'Demostración de productos artesanales'},
      {title:'Luz en el cenote',text:'La luz natural ilumina el agua dentro de la caverna.',src:'imagen/chichen-cenote-luz.jpeg',alt:'Rayo de luz sobre el agua de un cenote'},
      {title:'Camino al agua',text:'Pasarela y escaleras para contemplar el cenote.',src:'imagen/chichen-cenote-escalera.jpeg',alt:'Escaleras y pasarela en un cenote'},
      {title:'Nado en cenote',text:'Un momento dentro de la experiencia.',src:'imagen/chichen-cenote-nado.jpeg',alt:'Visitantes nadando en un cenote'},
      {title:'Interior de la caverna',text:'Formaciones naturales del cenote.',src:'imagen/chichen-caverna.jpeg',alt:'Rocas y formaciones dentro de la caverna'},
      {title:'Colores bajo tierra',text:'Iluminación del espacio subterráneo.',src:'imagen/chichen-caverna-colores.jpeg',alt:'Caverna iluminada con colores'},
      {title:'Pasarela en la caverna',text:'Una vista del recorrido interior.',src:'imagen/chichen-caverna-puente.jpeg',alt:'Puente de madera en caverna iluminada'},
      {title:'Agua cristalina',text:'Otra perspectiva del cenote.',src:'imagen/chichen-caverna-agua.jpeg',alt:'Agua azul en una caverna'}
    ],
    packages:[
      {name:'Clásico · 2 cenotes',nationalAdult:'$880 MXN',nationalChild:'$780 MXN',foreignAdult:'$63 USD',foreignChild:'$53 USD',extras:'Incluye todas las paradas y actividades descritas. Bebidas y chaleco para cenote no incluidos.'},
      {name:'Plus · 2 cenotes',nationalAdult:'$1,050 MXN',nationalChild:'$950 MXN',foreignAdult:'$73 USD',foreignChild:'$63 USD',extras:'Incluye lo del Clásico y bebidas a bordo del autobús. Chaleco para cenote no incluido.'},
      {name:'Deluxe · 2 cenotes',nationalAdult:'$1,200 MXN',nationalChild:'$1,100 MXN',foreignAdult:'$77 USD',foreignChild:'$67 USD',extras:'Incluye lo del Plus, box lunch y chalecos para los cenotes.'}
    ],
    packageIntro:'Las tres opciones incluyen Chichén Itzá, Yunchen, Xkokay, comida regional, ritual maya, degustación de chocolate y mezcal, Valladolid, transporte y guía.',
    packageNote:'Domingos: 10% de descuento para nacionales. Si ya compraste otro tour, 20% de descuento para nacionales. INE obligatoria para tarifa nacional. Confirma las condiciones de la promoción al reservar.',
    videos:[{src:'imagen/chichen-yunchen-video.mp4',poster:'imagen/chichen-cenote-puente.jpeg',label:'Video del cenote Yunchen'},{src:'imagen/chichen-recorrido-video.mp4',poster:'imagen/chichen-cenote-luz.jpeg',label:'Video de la experiencia de cenotes'}],
    details:['INE obligatoria para aplicar precios nacionales.','Domingos: 10% de descuento para nacionales.','Si ya compraste otro tour, 20% de descuento para nacionales.','Clásico: sin bebidas ni chaleco para cenote.','Plus: bebidas a bordo del autobús; chaleco no incluido.','Deluxe: bebidas a bordo del autobús, box lunch y chalecos incluidos.','Confirma horarios, punto de recogida y disponibilidad antes de reservar.'], note:'Imágenes compartidas para ilustrar las actividades. El orden y las condiciones de las paradas pueden variar según la operación.'
  },
  'tulum': {
    label:'CULTURA · CENOTES', title:'Tulum y Cobá 5 en 1', intro:'Dos zonas arqueológicas, dos cenotes y una parada en Puerto Morelos. Elige tu experiencia Clásica o Deluxe.', price:'Nacionales desde $1,150 MXN · extranjeros desde $74 USD',
    cover:commons('Tulum - Castillo and Bay.jpg','PhilippN','CC BY-SA'), coverAlt:'El Castillo y la bahía de Tulum',
    lead:'Una ruta, cinco momentos', body:'Descubre Cobá y Tulum, refréscate en dos cenotes, visita Puerto Morelos y disfruta un buffet regional. Ambas modalidades incluyen transporte, guía certificado y sombrilla para mayor comodidad.',
    facts:['Cobá + Tulum + 2 cenotes + Puerto Morelos','Buffet regional y transporte incluidos','Guía certificado y sombrilla','INE obligatoria para tarifa nacional'],
    moments:[
      {title:'Tulum frente al Caribe',text:'Una de las vistas emblemáticas de la zona arqueológica.',src:commons('Tulum - Castillo and Bay.jpg','PhilippN','CC BY-SA'),alt:'Vista de El Castillo en Tulum'},
      {title:'Cenote de caverna',text:'Una de las imágenes de cenotes compartidas para esta experiencia.',src:'imagen/tulum-cenote-caverna.jpeg',alt:'Agua turquesa dentro de un cenote de caverna'},
      {title:'Cenote Nohoch',text:'Una vista del acceso al cenote en el material compartido.',src:'imagen/tulum-cenote-nohoch.jpeg',alt:'Acceso de madera a un cenote de agua azul'}
    ],
    video:'imagen/tulum-recorrido.mp4', videoPoster:'imagen/tulum-cenote-nohoch.jpeg',
    packages:[
      {name:'Clásico 5 en 1',nationalAdult:'$1,150 MXN',nationalChild:'$900 MXN',foreignAdult:'$74 USD',foreignChild:'$54 USD',extras:'Sin bebidas ni chalecos.'},
      {name:'Deluxe 5 en 1',nationalAdult:'$1,250 MXN',nationalChild:'$1,100 MXN',foreignAdult:'$88 USD',foreignChild:'$65 USD',extras:'Chalecos incluidos, bebidas ilimitadas durante el transporte y 2 botellas de agua.'}
    ],
    details:['Tarifa nacional: presenta INE obligatoriamente.','Domingos: 10% de descuento para nacionales.','Si ya compraste un tour, el segundo tiene 5% de descuento para nacionales y extranjeros.','Si tu segundo tour es domingo, el descuento es de 15%.','Puerto Morelos: parada indicada para ventas de Zona Hotelera.'],
    note:'Confirma fecha, edades, puntos de recogida y disponibilidad al reservar. Las fotografías muestran destinos y cenotes; el recorrido puede variar según la operación.'
  },
  'el-cielo': {
    label:'MAR · COZUMEL', title:'El Cielo, Cozumel', intro:'Arrecife, El Cielo y El Cielito en un recorrido por aguas turquesa. Sal desde Playa del Carmen o agrega transporte completo desde Cancún.', price:'Desde $800 MXN + ferry · con transporte desde Cancún $1,900 MXN',
    cover:'imagen/cielo-barco-mar.jpeg', coverAlt:'Embarcación y viajeros en las aguas de Cozumel',
    lead:'El mar como protagonista', body:'Disfruta aproximadamente cinco horas de recorrido en Cozumel: snorkel en arrecife, visita a El Cielo y El Cielito, y una parada en Playa Tortugas. El itinerario y los servicios se confirman al reservar.',
    facts:['Tour: $800 MXN saliendo desde Playa del Carmen, más ferry','Paquete completo desde Cancún: $1,900 MXN','5% de descuento si ya compraste otro tour','Apartado de $200 MXN para asegurar el paquete con transporte'],
    moments:[
      {title:'El Cielo',text:'Aguas claras del recorrido marino en Cozumel.',src:'imagen/cielo-barco-mar.jpeg',alt:'Personas junto a una embarcación en mar turquesa'},
      {title:'El Cielito',text:'Una parada para disfrutar aguas poco profundas.',src:'imagen/cielo-barco-vista.jpeg',alt:'Embarcación rodeada de aguas claras'},
      {title:'Salida y ferry',text:'La opción desde Playa del Carmen requiere comprar el ferry por separado.',src:'imagen/cielo-muelle.jpeg',alt:'Zona del muelle en Playa del Carmen'},
      {title:'Lo que incluye el recorrido',text:'Snorkel, snacks y bebidas según la operación indicada.',src:'imagen/cielo-inclusiones.jpeg',alt:'Flyer informativo del recorrido El Cielo'},
      {title:'Experiencia en Cozumel',text:'Recorre los espacios del mar de Cozumel.',src:'imagen/cielo-operador.jpeg',alt:'Flyer de la experiencia en Cozumel'}
    ],
    options:[
      {name:'Desde Playa del Carmen',price:'$800 MXN + ferry',details:'Tour en Cozumel. El boleto de ferry se paga por separado. Si ya compraste otro tour, obtienes 5% de descuento sobre el tour; el ferry sigue aparte.'},
      {name:'Con transporte desde Cancún',price:'$1,900 MXN',details:'Incluye transporte redondo desde tu hotel en Cancún, ferry y tour. Si ya compraste otro tour, obtienes 5% de descuento. Se asegura con $200 MXN de apartado.'}
    ],
    video:'imagen/cielo-recorrido.mp4',videoPoster:'imagen/cielo-barco-mar.jpeg',
    details:['El tour de Cozumel contempla arrecife para snorkel, El Cielo y El Cielito.','El material compartido indica bebidas, agua, refrescos, snacks y equipo de snorkel, sujetos a la operación contratada.','Parada en Playa Tortugas; los alimentos y bebidas del club de playa no están incluidos.','El punto de reunión en Cozumel se confirma al reservar.','Para la opción desde Cancún, el apartado es de $200 MXN.'], note:'Confirma disponibilidad, horario, logística del ferry y condiciones del apartado antes de reservar. Las imágenes de embarcación pueden mostrar unidades distintas según la operación.'
  },
  'isla-contoy': {
    label:'NATURALEZA · CARIBE',title:'Isla Contoy e Isla Mujeres',intro:'Ocho horas entre islas, arrecife y playas vírgenes. Una experiencia para descubrir el Caribe y el Parque Nacional Isla Contoy.',price:'Adultos $2,100 MXN · transporte e impuestos incluidos',cover:'imagen/contoy-playa.jpeg',coverAlt:'Viajeros disfrutando la playa de Isla Contoy',
    lead:'Dos islas, un día inolvidable',body:'Explora Isla Mujeres a tu ritmo, practica snorkel y descubre Isla Contoy. Disfruta desayuno ligero, buffet y barra libre durante la navegación, con transporte redondo e impuestos incluidos en tu tarifa.',
    facts:['Duración aproximada: 8 horas','Salida: Punta Norte, 10:00 a. m.','Registro: 9:30 a. m.','Adultos $2,100 MXN; segundo tour $1,995 MXN'],
    moments:[
      {title:'Playas de Isla Contoy',text:'Tiempo para relajarte en las playas del parque nacional.',src:'imagen/contoy-playa.jpeg',alt:'Playa de arena blanca y agua clara'},
      {title:'Navegación',text:'Viaja entre las islas y disfruta el desayuno ligero a bordo.',src:'imagen/contoy-navegacion.jpeg',alt:'Viajera a bordo de la embarcación'},
      {title:'Isla Mujeres',text:'Una hora para explorar la isla por tu cuenta.',src:'imagen/contoy-isla-mujeres.jpeg',alt:'Vista del mar y palmeras en Isla Mujeres'},
      {title:'Snorkel en arrecife',text:'Veinte minutos de snorkel entre Cancún e Isla Mujeres, con equipo incluido.',src:'imagen/contoy-snorkel.jpeg',alt:'Embarcación sobre aguas turquesa'},
      {title:'Bebidas a bordo',text:'Barra libre durante la navegación y en el regreso a Cancún.',src:'imagen/contoy-bebidas.jpeg',alt:'Viajera con una bebida a bordo'},
      {title:'Registro antes de salir',text:'Llega 30 minutos antes. Confirma la ubicación exacta de Punta Norte al reservar.',src:'imagen/contoy-registro.jpeg',alt:'Área de registro para tours'}
    ],
    itinerary:['Registro 30 minutos antes del inicio: 9:30 a. m.','Viaje a Isla Mujeres con desayuno ligero de pan fresco y fruta de cortesía a bordo.','Una hora para explorar Isla Mujeres a tu ritmo.','Veinte minutos de snorkel en arrecife entre Cancún e Isla Mujeres.','Exploración del Parque Nacional Isla Contoy.','Tour ecológico opcional con guía certificado.','Almuerzo buffet con platos locales e internacionales.','Tiempo de relajación en las playas vírgenes de Isla Contoy.','Regreso a Cancún con barra libre a bordo.'],
    included:['Transporte redondo en vehículos modernos con aire acondicionado.','Guía certificado y anfitrión en español e inglés.','Desayuno ligero a bordo: fruta fresca y pan dulce.','Máscara, tubo, aletas y chaleco salvavidas para snorkel.','Barra libre a bordo durante la navegación.','Acceso al Parque Nacional Isla Contoy.','Buffet: pollo, pasta, pescado Tikin Xic, arroz, ensalada, arroz con leche y limonada.','Impuesto de muelle y saneamiento.'],
    excluded:['Propinas.','Fotos y recuerdos de la experiencia.','Actividades adicionales en Isla Mujeres.'],
    details:['Adultos: $2,100 MXN, incluidos transporte e impuestos.','Si ya compraste otro tour: 5% de descuento, total $1,995 MXN por adulto.','Salida desde Punta Norte a las 10:00 a. m.; registro a las 9:30 a. m.','Confirma hora de recogida en tu hotel y ubicación exacta del muelle al reservar.','Tarifas para menores: consulta por WhatsApp.'],note:'El orden de las actividades puede variar según la operación y las condiciones del mar.'
  },
  'coco-bongo': {
    label:'ESPECTÁCULO · PLAYA DEL CARMEN', title:'Coco Bongo Playa del Carmen', intro:'Show, música y fiesta con opciones de acceso y ubicación. El precio depende de la categoría y el día.', price:'Regular desde $90 USD · promoción local $650 MXN',
    cover:'imagen/cocobongo-promo-local.jpeg', coverAlt:'Promoción de Coco Bongo Playa del Carmen',
    lead:'Una noche para recordar', body:'Elige entre acceso Regular, Premium y ubicaciones con asiento. Las modalidades incluyen barra libre según el menú de su categoría y un snack por persona; la programación puede variar según la temporada.',
    facts:['Playa del Carmen','Regular desde $90 USD','Promoción para residentes de Yucatán, Campeche y Quintana Roo: $650 MXN','Identificación requerida para la promoción local'],
    moments:[
      {title:'Promoción para locales',text:'Acceso express, barra libre ilimitada y snacks. Presenta identificación; aplican restricciones.',src:'imagen/cocobongo-promo-local.jpeg',alt:'Flyer de promoción para residentes de la península'},
      {title:'Elige tu categoría',text:'Regular, Premium, Gold Member, Royal Service o Front Row.',src:'imagen/cocobongo-categorias.jpeg',alt:'Categorías y servicios de Coco Bongo'},
      {title:'Precios por día',text:'Consulta la categoría disponible para tu fecha.',src:'imagen/cocobongo-tabla-dias.jpeg',alt:'Tabla de tarifas en dólares por día'},
      {title:'Barra nacional',text:'Menú de bebidas nacionales para acceso Regular.',src:'imagen/cocobongo-regular-menu.jpeg',alt:'Información de acceso Regular y bebidas'},
      {title:'Barra Premium',text:'Menú de bebidas de las opciones Premium.',src:'imagen/cocobongo-premium-menu.jpeg',alt:'Información del menú Premium'},
      {title:'Gold Member',text:'Acceso preferencial y asiento reservado en el área Gold Member.',src:'imagen/cocobongo-gold-menu.jpeg',alt:'Información de la categoría Gold Member'}
    ],
    priceRows:[
      ['Regular','Domingo a jueves','$90 USD'],['Regular','Viernes','$125 USD'],
      ['Premium','Domingo a miércoles','$125 USD'],['Premium','Jueves a sábado','$140 USD'],
      ['Gold Member','Domingo a miércoles','$160 USD'],['Gold Member','Jueves a sábado','$170 USD'],
      ['Royal Service','Domingo a miércoles','$175 USD'],
      ['Front Row','Domingo a miércoles','$195 USD'],['Front Row','Jueves a sábado','$210 USD']
    ],
    specialPrice:'Promoción para residentes de Yucatán, Campeche y Quintana Roo: $650 MXN por persona. Incluye acceso express, barra libre ilimitada y snacks (mini hot dogs y mini hamburguesas). Presenta identificación en la entrada; aplican restricciones.',
    details:['Regular: pista, barra libre nacional y un snack.','Premium: pista, barra libre premium y un snack.','Gold Member: área elevada con mesa tipo barra y silla por persona, barra premium y un snack.','Royal Service: grada con vista panorámica, mesa y sillón tipo lounge.','Front Row: primera fila elevada con mesa tipo barra y silla por persona.','Propina no incluida en las fichas de categorías.','Confirma tarifa y disponibilidad de tu fecha antes de reservar.'], note:'Las tarifas corresponden a los materiales compartidos de Coco Bongo Playa del Carmen; algunas fichas generales muestran importes distintos de la tabla por día. Confirma el precio final para tu fecha al reservar.'
  }
};
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const photoSrc = value => typeof value === 'string' ? value : value.src;
const credit = value => typeof value === 'string' ? '' : `<a href="${escapeHTML(value.source)}" target="_blank" rel="noopener">Foto: ${escapeHTML(value.credit)} ↗</a>`;
const id = document.body.dataset.tourId || new URLSearchParams(location.search).get('id');
const tour = tourData[id];
const main = document.querySelector('#tour-main');
if (!tour) {
  document.title = 'Experiencia no encontrada | Life’s Tours';
  main.innerHTML = '<section class="section-shell tour-missing"><h1>No encontramos esta experiencia.</h1><p>Explora los recorridos disponibles.</p><a class="button button-dark" href="/#experiencias">Ver experiencias</a></section>';
} else {
  document.title = `${tour.title} | Life’s Tours`;
  const message = encodeURIComponent(`Hola Life's Tours, quiero reservar ${tour.title}. Fecha: [fecha]. Personas: [adultos y menores]. ¿Hay disponibilidad?`);
  const whatsapp = number => `https://wa.me/52${number}?text=${message}`;
  main.innerHTML = `
    <section class="tour-hero"><img src="${escapeHTML(photoSrc(tour.cover))}" alt="${escapeHTML(tour.coverAlt)}"><div class="tour-hero-shade"></div><div class="section-shell tour-hero-content"><a class="tour-back" href="/#experiencias">← Todas las experiencias</a><span class="eyebrow light">${escapeHTML(tour.label)}</span><h1>${escapeHTML(tour.title)}</h1><p>${escapeHTML(tour.intro)}</p><a class="button button-light" href="#descubre">Descubre la experiencia</a></div><div class="tour-hero-credit">${credit(tour.cover)}</div></section>
    <div class="tour-strip section-shell"><strong>${escapeHTML(tour.price)}</strong><span>Reserva por WhatsApp · paga el día del tour según condiciones</span></div>
    <section class="section-shell tour-overview" id="descubre"><div><span class="eyebrow">LA EXPERIENCIA</span><h2>${escapeHTML(tour.lead)}</h2><p>${escapeHTML(tour.body)}</p></div><ul>${tour.facts.map(f=>`<li>${escapeHTML(f)}</li>`).join('')}</ul></section>
    ${tour.packages ? `<section class="section-shell tour-packages"><span class="eyebrow">ELIGE TU EXPERIENCIA</span><h2>${id==='chichen-itza'?'Tres formas de explorar.':'Clásico o Deluxe.'}</h2><p>${escapeHTML(tour.packageIntro || 'Ambos incluyen Cobá, Tulum, dos cenotes, Puerto Morelos, buffet regional, transporte, guía certificado y sombrilla.')}</p><div class="package-grid">${tour.packages.map(pkg=>`<article class="package-card"><h3>${escapeHTML(pkg.name)}</h3>${pkg.nationalAdult ? `<div class="package-prices"><strong>Nacionales</strong><span>Adultos ${escapeHTML(pkg.nationalAdult)}</span><span>Menores ${escapeHTML(pkg.nationalChild)}</span><strong>Extranjeros</strong><span>Adultos ${escapeHTML(pkg.foreignAdult)}</span><span>Menores ${escapeHTML(pkg.foreignChild)}</span></div>` : ''}<p>${escapeHTML(pkg.extras)}</p></article>`).join('')}</div><p class="package-discount">${escapeHTML(tour.packageNote || 'Nacionales: 10% los domingos · Segundo tour: 5% para nacionales y extranjeros · Segundo tour en domingo: 15%. Presenta INE para tarifa nacional.')}</p></section>` : ''}
    ${tour.priceRows ? `<section class="section-shell coco-prices"><span class="eyebrow">PRECIOS POR CATEGORÍA</span><h2>Elige tu noche.</h2><div class="price-table-wrap"><table><thead><tr><th>Categoría</th><th>Días</th><th>Precio por persona</th></tr></thead><tbody>${tour.priceRows.map(row=>`<tr>${row.map(cell=>`<td>${escapeHTML(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="package-discount">${escapeHTML(tour.specialPrice)}</p><p>Para fechas o categorías que no aparecen en la tabla, consulta disponibilidad y precio por WhatsApp.</p></section>` : ''}
    ${tour.options ? `<section class="section-shell tour-packages"><span class="eyebrow">ELIGE TU SALIDA</span><h2>Dos formas de llegar al paraíso.</h2><div class="package-grid">${tour.options.map(option=>`<article class="package-card"><h3>${escapeHTML(option.name)}</h3><strong class="option-price">${escapeHTML(option.price)}</strong><p>${escapeHTML(option.details)}</p></article>`).join('')}</div></section>` : ''}
    ${tour.itinerary ? `<section class="section-shell tour-itinerary"><span class="eyebrow">TU DÍA PASO A PASO</span><h2>El recorrido.</h2><ol>${tour.itinerary.map(step=>`<li>${escapeHTML(step)}</li>`).join('')}</ol></section>` : ''}
    ${tour.included ? `<section class="section-shell tour-inclusions"><div><span class="eyebrow">TU TARIFA INCLUYE</span><h2>Todo para disfrutar.</h2><ul>${tour.included.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul></div><div><span class="eyebrow">NO INCLUYE</span><h3>Gastos adicionales</h3><ul>${tour.excluded.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul></div></section>` : ''}
    <section class="section-shell tour-moments"><div class="section-head"><div><span class="eyebrow">MIRA LO QUE TE ESPERA</span><h2>${['isla-familiar','isla-adultos'].includes(id)?'Cada momento cuenta':'Explora el destino'}</h2></div><p>${['isla-familiar','isla-adultos'].includes(id)?'Fotografías de experiencias de catamarán de Life’s Tours.':'Fotografías reales del destino o lugar. Confirma las inclusiones de tu paquete al reservar.'}</p></div><div class="moment-grid">${tour.moments.map(m=>`<article class="moment-card"><div class="moment-image"><img src="${escapeHTML(photoSrc(m.src))}" alt="${escapeHTML(m.alt)}" loading="lazy"></div><div class="moment-copy"><h3>${escapeHTML(m.title)}</h3><p>${escapeHTML(m.text)}</p>${credit(m.src)}</div></article>`).join('')}</div></section>
    ${(tour.video || tour.videos) ? `<section class="section-shell tour-video"><div><span class="eyebrow">UN VISTAZO AL RECORRIDO</span><h2>Vívelo en movimiento.</h2></div><div class="tour-video-grid">${(tour.videos || [{src:tour.video,poster:tour.videoPoster,label:'Video de la experiencia de Tulum y cenotes'}]).map(v=>`<video controls preload="none" playsinline poster="${escapeHTML(v.poster)}" aria-label="${escapeHTML(v.label)}"><source src="${escapeHTML(v.src)}" type="video/mp4">Tu navegador no puede reproducir este video.</video>`).join('')}</div></section>` : ''}
    <section class="section-shell tour-details"><div><span class="eyebrow">ANTES DE RESERVAR</span><h2>Los detalles que importan.</h2></div><div><ul>${tour.details.map(d=>`<li>${escapeHTML(d)}</li>`).join('')}</ul><p>${escapeHTML(tour.note)}</p></div></section>
    <section class="tour-end" id="reservar"><div class="section-shell tour-end-inner"><span class="eyebrow light">TU PRÓXIMA EXPERIENCIA</span><h2>Reserva ahora tu experiencia.</h2><p>Envíanos tu fecha y número de viajeros. Confirmaremos disponibilidad, precio final y punto de encuentro.</p><div class="tour-end-buttons"><a class="button button-light" href="${whatsapp('9982930766')}" target="_blank" rel="noopener">WhatsApp 998 293 0766</a><a class="button button-outline" href="${whatsapp('9995404368')}" target="_blank" rel="noopener">WhatsApp 999 540 4368</a></div></div></section>`;
}

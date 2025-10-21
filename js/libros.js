document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const librosRecomendados = document.getElementById('libros-recomendados');
    const librosResultados = document.getElementById('libros-resultados');
    const loader = document.getElementById('loader');
    const panelInfo = document.createElement('div');
    const suggestionsContainer = document.getElementById('suggestions-container');
    document.body.appendChild(panelInfo);
    panelInfo.id = 'panel-info';
    panelInfo.style.display = 'none';


    const libros = [
        {
            titulo: 'Franklin siembra un arbol',
            autor: 'Paulette Bourgeois',
            fecha: '2010',
            imagen: 'https://www.librerianorma.com/images/Caratula/Responsive/9789584507280.jpg',
            introduccion: 'Es un cuento infantil donde Franklin aprende el valor de cuidar el medio ambiente. A través de la siembra y el cuidado de un árbol, la historia enseña a los niños la importancia del compromiso, la paciencia y el respeto por la naturaleza..'
        },
        {
            titulo: 'el hàmster jaime y la fiesta de cumpleaños',
            autor: ' Raoul Krischanitz',
            fecha: '2003',
            imagen: 'https://www.libreriacasatomada.com/imagenes/7706894/770689410662.GIF',
            introduccion: ' Relata la aventura de Jaime y sus amigos mientras organizan una fiesta de cumpleaños. Con ilustraciones coloridas y un lenguaje sencillo, el libro transmite valores como la amistad, la cooperación y la alegría de compartir momentos con los seres queridos..'
        },
        {
            titulo: 'El nuevo amigo de franklin',
            autor: 'Paulette Bourgeois ',
            fecha: '1997',
            imagen: 'https://www.leoteca.es/img/libros/1031/9789580449874-L.jpg',
            introduccion: 'En esta historia, Franklin conoce a Don, un burro con el que aprende a superar sus miedos y a aceptar las diferencias. El cuento enseña valores de amistad, comprensión y aceptación de quienes son distintos a nosotros..'
        },
        {
            titulo: 'Fernando furioso',
            autor: ' Hiawyn Oram ',
            fecha: '2010',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsV0pWMu4UY1DbYs972Ibah-U8ChepUrCuVA&s',
            introduccion: 'Este libro narra la historia de Fernando, un niño con mal genio que aprende a controlar su ira y comprender el impacto de sus emociones en los demás. Es un relato que enseña a los niños a manejar la rabia con paciencia y reflexión, favoreciendo la resolución de conflictos de manera positiva..'
        },
        {
            titulo: 'Toda mafalda',
            autor: 'Joaquín Salvador Lavado Tejón',
            fecha: '1932',
            imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/e6/b4/e6b4c842c7f7974dfd9431740d66734e.jpg',
            introduccion: 'Toda Mafalda es una recopilación completa de las historietas creadas por Quino, protagonizadas por Mafalda, una niña curiosa y crítica que reflexiona con humor sobre temas sociales, políticos y culturales. El libro reúne sus pensamientos agudos y su visión del mundo, convirtiéndose en un ícono del pensamiento latinoamericano.'
        },
        {
            titulo: 'Carlos gorostiza Teatro 5',
            autor: 'carlos gorostiza',
            fecha: '1949',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCDZR9__yeNiWc1p61D99L6dO9vTess4ulQ&s',
            introduccion: 'Esta obra reúne tres piezas teatrales (Los otros papeles, A propósito del tiempo y Doble historia de amor) donde el autor explora con profundidad la identidad, el paso del tiempo y los vínculos humanos. Su estilo íntimo y reflexivo convierte el libro en una valiosa muestra del teatro argentino contemporáneo y del talento de uno de sus dramaturgos más destacados..'
        },
        {
            titulo: 'Aladino y la lámpara maravillosa',
            autor: ' Antoine Galland.',
            fecha: '1867',
            imagen: 'https://lh5.googleusercontent.com/proxy/scQpGZklDIkQ0BBcMQOR6ro0WbJSG-ivs5ZjlWWev38EloJ5IZLpCs1cHsSDqJjFLP7gGv-Tl8AIUPUrjsgUsFRTTt0f1Xuk7cCSINtsM9kJdKsxFoDQt6dhaTZewNcvN5Hs9nwqIhSGmlG7Ghr2RdgoZDvPHXsEjQJw9a6MyH0Rum8UYWJfLmz2xodqYWMf44cgJpsGMprbReYpFX_7Gd8sCKn2Ipji',
            introduccion: 'Es un cuento clásico de Las mil y una noches que narra la historia de Aladino, un joven humilde que encuentra una lámpara mágica. Al frotarla, aparece un genio poderoso que le concede deseos. Gracias a su astucia y al genio, Aladino enfrenta a un malvado mago, logra superar obstáculos y finalmente obtiene la mano de una princesa..'
        },
        {
            titulo: 'Entornos naturales 3 laboratorios',
            autor: 'Casa del Saber (Santillana)',
            fecha: '2016',
            imagen: 'https://i.calameoassets.com/191107155540-126a0979fa52576d853af8d475de6c3e/large.jpg',
            introduccion: ' es un libro escolar diseñado para estudiantes de primaria. Presenta de forma sencilla y visual temas sobre los seres vivos, el cuerpo humano, el medio ambiente y los fenómenos naturales. Incluye actividades, ilustraciones y experimentos que buscan despertar la curiosidad científica en los niños y fomentar el cuidado de la naturaleza..'
        },
        {
            titulo: 'Quimica 1',
            autor: 'editorial de Santillana.',
            fecha: '2010',
            imagen: 'https://imgv2-1-f.scribdassets.com/img/document/650688308/original/0cbc4eb01e/1?v=1',
            introduccion: 'Es un libro de texto escolar que introduce a los estudiantes en los fundamentos de la química. Explica conceptos básicos como la estructura de la materia, enlaces químicos, propiedades, reacciones y el papel de la química en la vida cotidiana. Además, incluye prácticas de laboratorio para reforzar el aprendizaje experimental y el pensamiento científico..'
        },
        {
            titulo: 'La quimica energia para la vida',
            autor: 'Ministerio del Poder Popular para la Educación.',
            fecha: '2012',
            imagen: 'https://guao.org/sites/default/files/biblioteca/Ciencias%20Naturales%2C%20Tomo%20I%2C%204to%20a%C3%B1o.%20Energ%C3%ADa%20para%20la%20vida.png',
            introduccion: 'es un libro escolar diseñado para estudiantes de cuarto año de educación media. Aborda temas de biología, química, física y medio ambiente, con un enfoque integral que relaciona la ciencia con la vida diaria, la cultura y el entorno natural. Su propósito es fomentar el pensamiento crítico, el aprendizaje práctico y el compromiso con la preservación de la naturaleza..'
        },
        {
            titulo: 'Ciencia experimental biologia',
            autor: 'María Helena Jaramillo',
            fecha: '2010',
            imagen: 'https://imgv2-1-f.scribdassets.com/img/document/556522325/298x396/2d7c43c9fe/1710573117?v=1',
            introduccion: 'Es un texto escolar de la serie Ciencias Naturales y Educación Ambiental para educación básica secundaria y media. Integra contenidos de biología, química y física de manera práctica, con actividades y proyectos que buscan desarrollar competencias científicas, ciudadanas y laborales. Está diseñado para fomentar el pensamiento crítico, la experimentación y la aplicación de la ciencia en la vida cotidiana..'
        },
        {
            titulo: 'Quimica y ambiente 2',
            autor: ' Fidel Antonio Cárdenas S. y Carlos Arturo Gélvez S.',
            fecha: '2011',
            imagen: 'https://www.editorialbruno.com.pe/bstore/983/mc-graw-hill-quimica-y-ambiente-2.jpg',
            introduccion: ' Este libro está dirigido a estudiantes de educación media y busca explicar los conceptos fundamentales de la química en relación con el medio ambiente. A través de un enfoque práctico, relaciona los procesos químicos con situaciones de la vida cotidiana y promueve la conciencia ambiental. Incluye actividades y recursos pedagógicos que refuerzan el aprendizaje científico aplicado..'
        },
        {
            titulo: 'Learning together English',
            autor: ': Luciana Renda B. de Melo, Marcelo Baccarin, Ronaldo Lima Jr.',
            fecha: '2018',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_957921-MLA82982094855_032025-O.webp',
            introduccion: ' Es un libro de inglés para educación primaria que busca enseñar el idioma de manera progresiva y divertida. Incluye actividades dinámicas, juegos y ejercicios de comunicación que fomentan el aprendizaje colaborativo y el desarrollo de habilidades orales y escritas en inglés..'
        },
        {
            titulo: 'Basic English grammar ',
            autor: ' Howard Sargeant.',
            fecha: '2007',
            imagen: 'https://m.media-amazon.com/images/I/51jUMPwkZvL._UF1000,1000_QL80_.jpg',
            introduccion: '  es un libro de gramática inglesa para principiantes (grados 5-8), publicado por Saddleback Educational Publishing en 2007. Ofrece explicaciones claras y concisas de las reglas gramaticales básicas, como sustantivos, pronombres, verbos, tiempos verbales y estructura de oraciones, con ejemplos y notas de ayuda para facilitar el aprendizaje en estudiantes de inglés como segunda lengua..'


        },
        {
            titulo: 'Be happy',
            autor: ' Monica Sheehan',
            fecha: '2007',
            imagen: 'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781442498570/be-happy!-9781442498570_lg.jpg',
            introduccion: 'El libro Be Happy! de Monica Sheehan presenta una portada alegre y llamativa, protagonizada por un perro sonriente que hace malabares con bolas de colores mientras se sostiene en una sola pata. Con un fondo blanco y una franja lateral negra con lunares blancos, transmite una sensación de optimismo y diversión..'
        },
        {
            titulo: 'Follow me',
            autor: ' Barry Tomalin.',
            fecha: '1983',
            imagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/2e/21/2e211573f7857874c7a38a6b8ce786e4.jpg',
            introduccion: ' El libro Follow Me y habla inglés 1 es una guía práctica para aprender inglés desde cero, especialmente pensada para hispanohablantes. Forma parte de una serie educativa producida por BBC English y cubre las unidades 1 a 15. Su enfoque es progresivo y estructurado, ideal para quienes desean adquirir vocabulario básico, mejorar la pronunciación y comenzar a comunicarse en situaciones cotidianas..'
        },
        {
            titulo: 'Ciencias exploremos la naturaleza',
            autor: 'Leslie Yaneth Leal Mejía',
            fecha: '2019',
            imagen: 'https://www.librerianorma.com/images/Caratula/Responsive/9789580007388.jpg',
            introduccion: 'El libro Ciencias Naturales – Grado 6 de la serie Exploradores es un texto escolar diseñado para estudiantes de sexto grado. Su enfoque es despertar la curiosidad por el mundo natural a través del estudio de animales, plantas, ecosistemas y fenómenos científicos. Con ilustraciones llamativas y contenidos adaptados a la edad, busca fomentar el pensamiento crítico y el respeto por la naturaleza, integrando actividades que promueven la observación, la experimentación y el aprendizaje activo..'
        },
        {
            titulo: 'Educar en la naturaleza ',
            autor: 'Gustavo Ariel Cerda, Rozo',
            fecha: 'anonimo',
            imagen: 'https://imgv2-1-f.scribdassets.com/img/document/701502471/original/237e9ae53b/1?v=1',
            introduccion: ' El libro Misión 3 Naturaleza está diseñado para estudiantes de tercer grado y tiene como objetivo fomentar el aprendizaje sobre el entorno natural. A través de actividades educativas y contenidos visuales, invita a los niños a explorar la biodiversidad, comprender la importancia de cuidar el medio ambiente y desarrollar una conexión respetuosa con la naturaleza..'
        },
        {
            titulo: 'Anna Karenina',
            autor: 'León Tolstói',
            fecha: '1877',
            imagen: 'https://m.media-amazon.com/images/I/71dDgWXZhtL.jpg',
            introduccion: 'Una novela que explora las complejidades del amor, el matrimonio y la sociedad rusa del siglo XIX a través de la historia de Anna Karenina y otros personajes.'
        },
        {
            titulo: 'El gran Gatsby',
            autor: 'F. Scott Fitzgerald',
            fecha: '1925',
            imagen: 'https://m.media-amazon.com/images/I/81Lgt4vTiUL.jpg',
            introduccion: 'Una crítica al Sueño Americano ambientada en los años 20, siguiendo la vida del misterioso millonario Jay Gatsby y su obsesión con un amor del pasado.'
        }
    ];


    function mostrarLibros(libros, contenedor) {
        contenedor.innerHTML = '';
        libros.forEach(libro => {
            const libroElement = document.createElement('div');
            libroElement.classList.add('libro');
            libroElement.innerHTML = `
                <img src="${libro.imagen}" alt="${libro.titulo}">
                <div class="libro-info">
                    <h3>${libro.titulo}</h3>
                    <p>${libro.autor}</p>
                    <p>${libro.fecha}</p>
                </div>
            `;


            libroElement.addEventListener('click', () => {
                mostrarPanelLibro(libro);
            });


            contenedor.appendChild(libroElement);
        });
    }


    mostrarLibros(libros, librosRecomendados);


    function buscarLibros(query) {
        return libros.filter(libro =>
            libro.titulo.toLowerCase().includes(query.toLowerCase()) ||
            libro.autor.toLowerCase().includes(query.toLowerCase()) ||
            libro.fecha.includes(query)
        );
    }


    function mostrarSugerencias(sugerencias) {
        suggestionsContainer.innerHTML = '';
        sugerencias.forEach(sugerencia => {
            const sugerenciaElement = document.createElement('div');
            sugerenciaElement.classList.add('sugerencia');
            sugerenciaElement.textContent = sugerencia.titulo;
            sugerenciaElement.addEventListener('click', () => {
                searchInput.value = sugerencia.titulo;
                suggestionsContainer.innerHTML = '';
                realizarBusqueda(sugerencia.titulo);
            });
            suggestionsContainer.appendChild(sugerenciaElement);
        });
    }


    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query.length > 0) {
            const sugerencias = libros.filter(libro =>
                libro.titulo.toLowerCase().includes(query) ||
                libro.autor.toLowerCase().includes(query)
            ).slice(0, 5);
            mostrarSugerencias(sugerencias);
        } else {
            suggestionsContainer.innerHTML = '';
        }
    });


    document.addEventListener('click', (e) => {
        if (!suggestionsContainer.contains(e.target) && e.target !== searchInput) {
            suggestionsContainer.innerHTML = '';
        }
    });


    function realizarBusqueda(query) {
        loader.style.display = 'block';
        setTimeout(() => {
            loader.style.display = 'none';
            if (query) {
                const resultados = buscarLibros(query);
                if (resultados.length > 0) {
                    mostrarLibros(resultados, librosResultados);
                } else {
                    librosResultados.innerHTML = '<p>No se encontraron resultados.</p>';
                }
            } else {
                librosResultados.innerHTML = '<p>Por favor ingrese un término de búsqueda.</p>';
            }
        }, 1000);
    }


    searchButton.addEventListener('click', () => {
        realizarBusqueda(searchInput.value.trim());
    });


    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            realizarBusqueda(searchInput.value.trim());
        }
    });


    function mostrarPanelLibro(libro) {
        panelInfo.innerHTML = `
            <div class="panel-content">
                <h2>${libro.titulo}</h2>
                <p><strong>Autor:</strong> ${libro.autor}</p>
                <p><strong>Fecha de publicación:</strong> ${libro.fecha}</p>
                <div id="introduccion" style="display: none;">
                    <h3>Introducción</h3>
                    <p>${libro.introduccion}</p>
                </div>
                <button id="prestar-libro">Prestar</button>
                <button id="previsualizar-libro">Previsualizar</button>
                <button id="downloadButton">Prestar Libro</button>
                <button id="cerrar-panel">Cerrar</button>
            </div>
        `;
        panelInfo.style.display = 'block';

        document.getElementById('prestar-libro').addEventListener('click', () => {
            verificarSesion(() => prestarLibro(libro.titulo));
        });

        document.getElementById('cerrar-panel').addEventListener('click', () => {
            panelInfo.style.display = 'none';
        });

        document.getElementById('downloadButton').addEventListener('click', () => {
            verificarSesion(() => descargarPDF(libro));
        });

        document.getElementById('previsualizar-libro').addEventListener('click', () => {
            const introduccion = document.getElementById('introduccion');
            if (introduccion.style.display === 'none') {
                introduccion.style.display = 'block';
                document.getElementById('previsualizar-libro').textContent = 'Ocultar previsualización';
            } else {
                introduccion.style.display = 'none';
                document.getElementById('previsualizar-libro').textContent = 'Previsualizar';
            }
        });
    }

    function verificarSesion(callback) {
        fetch('../php/check_session.php')
            .then(response => response.json())
            .then(data => {

                if (data.loggedIn) {
                    callback();
                } else {
                    alert('Debe iniciar sesión para realizar esta acción.');
                    window.location.href = 'login.html';
                }
            })
            .catch(error => {
                console.error('Error al verificar la sesión:', error);
                alert('Hubo un error al verificar su sesión. Por favor, inténtelo de nuevo.');
            });
    }


    function prestarLibro(libro) {
        fetch('../php/prestar_libro.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                libro_id: libro.id
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('El libro ha sido prestado con éxito.');
                    libro.disponible = false;
                    actualizarVistaLibro(libro);
                    panelInfo.style.display = 'none';
                } else {
                    alert('Hubo un error al prestar el libro: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al prestar el libro. Por favor, inténtelo de nuevo.');
            });
    }

    function actualizarVistaLibro(libro) {
        const libroElement = document.querySelector(`[data-libro-id="${libro.id}"]`);
        if (libroElement) {
            const estadoElement = libroElement.querySelector('.libro-estado');
            if (estadoElement) {
                estadoElement.textContent = libro.disponible ? 'Disponible' : 'No disponible';
                estadoElement.classList.toggle('No disponible', !libro.disponible);
            }
        }
    }

    function mostrarPanelLibro(libro) {
        panelInfo.innerHTML = `
            <div class="panel-content">
                <h2>${libro.titulo}</h2>
                <p><strong>Autor:</strong> ${libro.autor}</p>
                <p><strong>Fecha de publicación:</strong> ${libro.fecha}</p>
                <p><strong>Estado:</strong> <span class="libro-estado ${libro.disponible ? '' : 'No disponible'}">${libro.disponible ? 'Disponible' : 'No disponible'}</span></p>
                <div id="introduccion" style="display: none;">
                    <h3>Introducción</h3>
                    <p>${libro.introduccion}</p>
                </div>
                ${libro.disponible ? '<button id="prestar-libro">Prestar</button>' : ''}
                <button id="previsualizar-libro">Previsualizar</button>
                <button id="downloadButton">Descargar PDF</button>
                <button id="cerrar-panel">Cerrar</button>
            </div>
        `;
        panelInfo.style.display = 'block';

        if (libro.disponible) {
            document.getElementById('prestar-libro').addEventListener('click', () => {
                verificarSesion(() => prestarLibro(libro));
            });
        }

        document.getElementById('cerrar-panel').addEventListener('click', () => {
            panelInfo.style.display = 'none';
        });

        document.getElementById('downloadButton').addEventListener('click', () => {
            verificarSesion(() => descargarPDF(libro));
        });

        document.getElementById('previsualizar-libro').addEventListener('click', () => {
            const introduccion = document.getElementById('introduccion');
            if (introduccion.style.display === 'none') {
                introduccion.style.display = 'block';
                document.getElementById('previsualizar-libro').textContent = 'Ocultar previsualización';
            } else {
                introduccion.style.display = 'none';
                document.getElementById('previsualizar-libro').textContent = 'Previsualizar';
            }
        });
    }

    function descargarPDF(libro) {
        const tituloFormateado = libro.titulo.replace(/\s+/g, '_').toLowerCase();
        const urlPDF = `../pdfs/${tituloFormateado}.pdf`;


        fetch(urlPDF)
            .then(response => {
                if (response.ok) {
                    return response.blob();
                }
                throw new Error('El PDF no está disponible.');
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = `${libro.titulo}.pdf`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            })
            .catch(error => {
                console.error('Error al descargar el PDF:', error);
                alert('Lo sentimos, no se pudo descargar el PDF. Por favor, inténtelo de nuevo más tarde.');
            });
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const userMenu = document.querySelector(".user-menu");
  const userIcon = document.getElementById("userIcon");

  userIcon.addEventListener("click", () => {
    userMenu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!userMenu.contains(e.target)) {
      userMenu.classList.remove("active");
    }
  });
});
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de los campos
    var toName = document.getElementById('to_name').value.trim();
    var fromName = document.getElementById('from_name').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    // Validar que todos los campos estén completos
    if (toName === '' || fromName === '' || subject === '' || message === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Validar formato de correo electrónico en el campo "from_name"
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fromName)) {
        alert('Por favor, introduzca una dirección de correo electrónico válida en el campo "From Name".');
        return;
    }

    // Si todos los campos están completos y el formato de correo electrónico es válido, enviar el formulario
    const btn = document.getElementById('button');
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_jhdm8cd';

    emailjs.sendForm(serviceID, templateID, this)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            alert('¡Email enviado correctamente!');
            document.getElementById('form').reset(); // Restablecer el formulario después de enviar
            btn.value = 'Send Email'; // Restaurar el valor del botón después del envío
        }, function(error) {
            console.error('Email failed to send:', error);
            alert('¡El envío del email falló! Por favor, inténtelo de nuevo más tarde.');
            btn.value = 'Send Email'; // Restaurar el valor del botón después del envío
        });
});

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    // Obtener todas las secciones de la página
    var sections = document.querySelectorAll('section');

    sections.forEach(function (section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
            // Remover la clase 'active' de todos los enlaces del navbar
            document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
                link.classList.remove('active');
            });

            // Agregar la clase 'active' al enlace correspondiente
            var sectionId = section.getAttribute('id');
            var correspondingLink = document.querySelector('.navbar-nav .nav-link[href="#' + sectionId + '"]');
            correspondingLink.classList.add('active');
        }
    });
});








document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('hide');
        document.querySelector('.content').classList.add('show');
    }, 6000); 
});





document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var titleElement = document.querySelector('.abutmetitulo');
        var contentElement = document.querySelector('.aboutmecontent');
        var titlePosition = titleElement.getBoundingClientRect();
        var contentPosition = contentElement.getBoundingClientRect();

        // Verifica si el título y el contenido están dentro de la ventana visible
        if (titlePosition.top >= 0 && titlePosition.bottom <= window.innerHeight &&
            contentPosition.top >= 0 && contentPosition.bottom <= window.innerHeight) {
            titleElement.classList.add('show');
            contentElement.classList.add('show');
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var elementos = document.querySelectorAll('.imagen');
        
        elementos.forEach(function(elemento, index) {
            var position = elemento.getBoundingClientRect();

            // Verifica si el elemento está dentro de la ventana visible
            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                setTimeout(function() {
                    elemento.classList.add('show');
                }, index * 200); 
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var leftElement = document.querySelector('.frontendskillsleft');
        var rightBoxes = document.querySelectorAll('.frontendskillsrightbox');
        
        var leftPosition = leftElement.getBoundingClientRect();
        var firstBoxPosition = rightBoxes[0].getBoundingClientRect();

        // Verifica si el elemento izquierdo y la primera caja de habilidades están dentro de la ventana visible
        if (leftPosition.top >= 0 && leftPosition.bottom <= window.innerHeight &&
            firstBoxPosition.top >= 0 && firstBoxPosition.bottom <= window.innerHeight) {
            
            // Añadir clase show al elemento izquierdo
            leftElement.classList.add('show');
            
            // Añadir clase show a cada caja de habilidades con un retardo secuencial
            rightBoxes.forEach(function(box, index) {
                setTimeout(function() {
                    box.classList.add('show');
                }, index * 100); // Ajusta el retardo entre la aparición de cada elemento
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var element = document.querySelector('.frontendskillsleft');
        var position = element.getBoundingClientRect();

        // Verifica si el elemento está dentro de la ventana visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add('animate');
        } 
    });
});
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var element = document.querySelector('.frontendskillsleft.dos');
        var position = element.getBoundingClientRect();

        // Verifica si el elemento está dentro de la ventana visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add('animate');
        } 
    });
});


document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var elements = document.querySelectorAll('.projectscontainersbottombox');
        elements.forEach(function(element, index) {
            var position = element.getBoundingClientRect();

            // Verifica si el elemento está dentro de la ventana visible
            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                element.classList.add('animate' + (index + 1));
            } 
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var element = document.querySelector('.projectscontainerstop');
        var position = element.getBoundingClientRect();

        // Verifica si el elemento está dentro de la ventana visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add('animate');
        } 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var element = document.querySelector('.toolsused');
        var position = element.getBoundingClientRect();

        // Verifica si el elemento está dentro de la ventana visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add('animate');
        } 
    });
});


document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var elements = document.querySelectorAll('.dscontent');
        var windowHeight = window.innerHeight;

        elements.forEach(function(element, index) {
            var position = element.getBoundingClientRect();

            // Verifica si el elemento está dentro de la ventana visible
            if (position.top < windowHeight && position.bottom >= 0) {
                setTimeout(function() {
                    element.classList.add('animate');
                }, index * 200); // Retardo basado en el índice para que aparezcan uno a uno
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var cardPhoto = document.querySelector('.cardphoto');
        var buttonContainer = document.querySelector('.button-container');
        var windowHeight = window.innerHeight;

        function checkVisibility(element) {
            var position = element.getBoundingClientRect();
            return (position.top < windowHeight && position.bottom >= 0);
        }

        if (checkVisibility(cardPhoto)) {
            cardPhoto.classList.add('animate');
        } 

        if (checkVisibility(buttonContainer)) {
            buttonContainer.classList.add('animate');
        } 
    });
});
function isMobileView() {
    return window.innerWidth <= 768;
}

document.addEventListener("DOMContentLoaded", function() {
    function handleScroll() {
        if (isMobileView()) return;

        var sections = document.querySelectorAll('section');

        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.clientHeight;
            var scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
                    link.classList.remove('active');
                });

                var sectionId = section.getAttribute('id');
                var correspondingLink = document.querySelector('.navbar-nav .nav-link[href="#' + sectionId + '"]');
                if (correspondingLink) correspondingLink.classList.add('active');
            }
        });

        var titleElement = document.querySelector('.abutmetitulo');
        var contentElement = document.querySelector('.aboutmecontent');
        var titlePosition = titleElement.getBoundingClientRect();
        var contentPosition = contentElement.getBoundingClientRect();

        if (titlePosition.top >= 0 && titlePosition.bottom <= window.innerHeight &&
            contentPosition.top >= 0 && contentPosition.bottom <= window.innerHeight) {
            titleElement.classList.add('show');
            contentElement.classList.add('show');
        }

        var elementos = document.querySelectorAll('.imagen');
        
        elementos.forEach(function(elemento, index) {
            var position = elemento.getBoundingClientRect();

            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                setTimeout(function() {
                    elemento.classList.add('show');
                }, index * 200); 
            }
        });

        var leftElement = document.querySelector('.frontendskillsleft');
        var rightBoxes = document.querySelectorAll('.frontendskillsrightbox');
        
        var leftPosition = leftElement.getBoundingClientRect();
        var firstBoxPosition = rightBoxes[0].getBoundingClientRect();

        if (leftPosition.top >= 0 && leftPosition.bottom <= window.innerHeight &&
            firstBoxPosition.top >= 0 && firstBoxPosition.bottom <= window.innerHeight) {
            
            leftElement.classList.add('show');
            
            rightBoxes.forEach(function(box, index) {
                setTimeout(function() {
                    box.classList.add('show');
                }, index * 100);
            });
        }

        var elements = document.querySelectorAll('.projectscontainersbottombox');
        elements.forEach(function(element, index) {
            var position = element.getBoundingClientRect();

            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                element.classList.add('animate' + (index + 1));
            } 
        });

        var elements = document.querySelectorAll('.dscontent');
        elements.forEach(function(element, index) {
            var position = element.getBoundingClientRect();

            if (position.top < window.innerHeight && position.bottom >= 0) {
                setTimeout(function() {
                    element.classList.add('animate');
                }, index * 200);
            }
        });

        var cardPhoto = document.querySelector('.cardphoto');
        var buttonContainer = document.querySelector('.button-container');

        function checkVisibility(element) {
            var position = element.getBoundingClientRect();
            return (position.top < window.innerHeight && position.bottom >= 0);
        }

        if (checkVisibility(cardPhoto)) {
            cardPhoto.classList.add('animate');
        } 

        if (checkVisibility(buttonContainer)) {
            buttonContainer.classList.add('animate');
        } 
    }

    window.addEventListener('scroll', handleScroll);

    
});

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        // Obtener la posición del elemento "About Me" en relación con la parte superior de la ventana
        var aboutMePosition = document.querySelector('.aboutme').getBoundingClientRect().top;


        if (aboutMePosition < window.innerHeight * 0.75) {

            document.querySelector('.aboutme h1').classList.add('animate__fadeInRight');
            document.querySelector('.aboutme_container p').classList.add('animate__fadeInLeft');

        } else {

            document.querySelector('.aboutme h1').classList.remove('animate__fadeInRight');
            document.querySelector('.aboutme_container p').classList.remove('animate__fadeInLeft');
        }

        // Obtener la posición del elemento "My Skills" en relación con la parte superior de la ventana
        var skillsPosition = document.querySelector('.skills').getBoundingClientRect().top;


        if (skillsPosition < window.innerHeight * 0.75) {

            document.querySelector('.skills h1').classList.add('animate__fadeInLeftBig');
            document.querySelector('.skills-info .skills-container').classList.add('animate__fadeInUp');
            document.querySelector('.skills-info .skills-container .uno').classList.add('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .dos').classList.add('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .tres').classList.add('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .cuatro').classList.add('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .cinco').classList.add('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .seis').classList.add('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .siete').classList.add('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .ocho').classList.add('animate__fadeInLeft');



        } else {

            document.querySelector('.skills h1').classList.remove('animate__fadeInLeftBig');
            document.querySelector('.skills-info .skills-container').classList.remove('animate__fadeInUp');
            document.querySelector('.skills-info .skills-container .uno').classList.remove('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .dos').classList.remove('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .tres').classList.remove('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .cuatro').classList.remove('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .cinco').classList.remove('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .seis').classList.remove('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .siete').classList.remove('animate__fadeInLeft');
            document.querySelector('.skills-info .skills-container .ocho').classList.remove('animate__fadeInLeft');

        }
        // Obtener la posición del elemento "Prpjects" en relación con la parte superior de la ventana
        var aboutMePosition = document.querySelector('.projects').getBoundingClientRect().top;


        if (aboutMePosition < window.innerHeight * 0.75) {
            // Si el elemento '.projects' está cerca del viewport
            document.querySelector('.projects h1').classList.add('animate__backInDown');
            document.querySelector('.projects .center img').classList.add('animate__fadeIn');
            document.querySelector('.projects .project1  .imagen_position img.uno').classList.add('animate__fadeInLeft');
            document.querySelector('.projects .project2  .imagen_position img.dos').classList.add('animate__fadeInLeft');
            document.querySelector('.projects .project3  .imagen_position img.tres').classList.add('animate__fadeInLeft');
            document.querySelector('.projects .project4  .imagen_position img.cuatro').classList.add('animate__fadeInLeft');
            document.querySelector('.projects .project1 .projects_right .projects_right_title').classList.add('animate__fadeInRight');
            document.querySelector('.projects .project2 .projects_right .projects_right_title').classList.add('animate__fadeInRight');
            document.querySelector('.projects .project3 .projects_right .projects_right_title').classList.add('animate__fadeInRight');
            document.querySelector('.projects .project4 .projects_right .projects_right_title').classList.add('animate__fadeInRight');
            document.querySelector('.projects .project1 .projects_right .projects_right_text').classList.add('animate__fadeIn');
            document.querySelector('.projects .project2 .projects_right .projects_right_text').classList.add('animate__fadeIn');
            document.querySelector('.projects .project3 .projects_right .projects_right_text').classList.add('animate__fadeIn');
            document.querySelector('.projects .project4 .projects_right .projects_right_text').classList.add('animate__fadeIn');
            document.querySelector('.projects .project1 .projects_right a.vermas').classList.add('animate__backInUp');
            document.querySelector('.projects .tools_container').classList.add('animate__fadeInLeft');

        } else {
            // Si el elemento '.projects' no está cerca del viewport
            document.querySelector('.projects h1').classList.remove('animate__backInDown');
            document.querySelector('.center img').classList.remove('animate__fadeIn');
            document.querySelector('.projects .project1  .imagen_position img.uno').classList.remove('animate__fadeInLeft');
            document.querySelector('.projects .project2  .imagen_position img.dos').classList.remove('animate__fadeInLeft');
            document.querySelector('.projects .project3  .imagen_position img.tres').classList.remove('animate__fadeInLeft');
            document.querySelector('.projects .project4  .imagen_position img.cuatro').classList.remove('animate__fadeInLeft');
            document.querySelector('.projects .project1 .projects_right .projects_right_title').classList.remove('animate__fadeInRight');
            document.querySelector('.projects .project2 .projects_right .projects_right_title').classList.remove('animate__fadeInRight');
            document.querySelector('.projects .project3 .projects_right .projects_right_title').classList.remove('animate__fadeInRight');
            document.querySelector('.projects .project4 .projects_right .projects_right_title').classList.remove('animate__fadeInRight');
            document.querySelector('.projects .project1 .projects_right .projects_right_text').classList.remove('animate__fadeIn');
            document.querySelector('.projects .project2 .projects_right .projects_right_text').classList.remove('animate__fadeIn');
            document.querySelector('.projects .project3 .projects_right .projects_right_text').classList.remove('animate__fadeIn');
            document.querySelector('.projects .project4 .projects_right .projects_right_text').classList.remove('animate__fadeIn');
            document.querySelector('.projects .project1 .projects_right a.vermas').classList.remove('animate__backInUp');
            document.querySelector('.projects .tools_container').classList.remove('animate__fadeInLeft');
        }
        // Obtener la posición del elemento "Contact Me" en relación con la parte superior de la ventana
        var aboutMePosition = document.querySelector('.contact').getBoundingClientRect().top;


        if (aboutMePosition < window.innerHeight * 0.75) {

            document.querySelector('.contact_info h1').classList.add('animate__fadeInLeftBig');
            document.querySelector('.contact_info .form-group').classList.add('animate__bounceInUp');


        } else {

            document.querySelector('.contact_info h1').classList.remove('animate__fadeInLeftBig');
            document.querySelector('.contact_info form .form-group').classList.remove('animate__bounceInUp');
        }

    });
});


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


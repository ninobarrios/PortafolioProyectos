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














// Ejemplo básico de IntersectionObserver para añadir una clase cuando el elemento es visible
const aboutMeDiv = document.getElementById('aboutme');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutMeDiv.classList.add('visible');
    }
  });
}, { threshold: 0.5 }); // Umbral del 50%

observer.observe(aboutMeDiv);





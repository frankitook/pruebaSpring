let currentStep = 1;

function showStep(step) {
    const steps = document.getElementsByClassName('step');
    for (let i = 0; i < steps.length; i++) {
        steps[i].style.display = 'none';
    }
    document.getElementById('step' + step).style.display = 'block';
}

function nextStep(step) {
    currentStep = step + 1;
    showStep(currentStep);
}

function prevStep(step) {
    currentStep = step - 1;
    showStep(currentStep);
}

function submitForm() {
    // Obtener los valores del formulario y enviarlos al servidor
    const medicoId = document.getElementById('medico').value;
    const fechaAtencion = document.getElementById('fechaAtencion').value;
    const horaAtencion = document.getElementById('horaAtencion').value;

    // Aquí puedes realizar la lógica para enviar los datos al servidor (por ejemplo, mediante AJAX)

    alert('Turno registrado con éxito:\nMédico: ' + medicoId + '\nFecha: ' + fechaAtencion + '\nHora: ' + horaAtencion);
}

// Mostrar el primer paso al cargar la página
showStep(currentStep);

 //according to loftblog tut
 $('.nav li:first').addClass('active');

 var showSection = function showSection(section, isAnimate) {
   var
   direction = section.replace(/#/, ''),
   reqSection = $('.section').filter('[data-section="' + direction + '"]'),
   reqSectionPos = reqSection.offset().top - 0;

   if (isAnimate) {
     $('body, html').animate({
       scrollTop: reqSectionPos },
     800);
   } else {
     $('body, html').scrollTop(reqSectionPos);
   }

 };
 


 function mostrarFormulario() {
  var contenedorFormulario = document.getElementById("contenedorPrincipal");
  contenedorFormulario.style.display = "block";

  var contenedorFormulario1 = document.getElementById("contenedorFormulario");
  contenedorFormulario1.style.display = "block";
}

 var checkSection = function checkSection() {
   $('.section').each(function () {
     var
     $this = $(this),
     topEdge = $this.offset().top - 80,
     bottomEdge = topEdge + $this.height(),
     wScroll = $(window).scrollTop();
     if (topEdge < wScroll && bottomEdge > wScroll) {
       var
       currentId = $this.data('section'),
       reqLink = $('a').filter('[href*=\\#' + currentId + ']');
       reqLink.closest('li').addClass('active').
       siblings().removeClass('active');
     }
   });
 };

 $('.main-menu, .scroll-to-section').on('click', 'a', function (e) {
   if($(e.target).hasClass('external')) {
     return;
   }
   e.preventDefault();
   $('#menu').removeClass('active');
   showSection($(this).attr('href'), true);
 });

 $(window).scroll(function () {
   checkSection();
 });
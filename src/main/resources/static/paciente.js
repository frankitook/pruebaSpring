let currentStep = 1;

function showStep(step) {
    const steps = document.getElementsByClassName('step');
    for (let i = 0; i < steps.length; i++) {
        steps[i].style.display = 'none';
    }
    document.getElementById('step' + step).style.display = 'block';
}

$(document).ready(function() {
    $('#fechaAtencion').change(function() {
        var selectedDate = $(this).val();
        var idMedico = $('#medico').val(); // Obtener el ID del médico seleccionado
        
        $.ajax({
            url: '/home/obtenerHorarios',
            method: 'GET',
            data: {
                fecha: selectedDate,
                idMedico: idMedico
            },
            success: function(data) {
                var options = '';

                if (data.length === 0) {
                    options = '<option value="" disabled selected>No hay turnos</option>';
                } else {
                    data.forEach(function(hora) {
                        options += '<option value="' + hora + '">' + hora + '</option>';
                    });
                }

                $('#horaAtencion').html(options);
            }
        });
    });
});

// Obtener el elemento de input de fecha
const fechaAtencionInput = document.getElementById('fechaAtencion');

// Obtener la fecha de hoy en formato YYYY-MM-DD
const fechaHoy = new Date().toISOString().split('T')[0];

// Establecer el atributo 'min' del input de fecha para limitar a partir de la fecha de hoy
fechaAtencionInput.setAttribute('min', fechaHoy);

function nextStep(step) {
    currentStep = step + 1;
    showStep(currentStep);
}

// Función para ir al paso anterior
function prevStep(stepNumber) {
    var currentStep = $('#step' + stepNumber);
    var previousStep = $('#step' + (stepNumber - 1));

    if (stepNumber === 2) {
      document.getElementById("fechaAtencion").value = "";
      document.getElementById("horaAtencion").value = "";
    }
    
    currentStep.hide();
    previousStep.show();
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

 
 
 

 function mostrarTabla() {
  document.getElementById("contenedorTabla").style.display = "block";
  
  var contenedorFormulario = document.getElementById("contenedorPrincipal");
  contenedorFormulario.style.display = "none";

  var contenedorFormulario1 = document.getElementById("contenedorFormulario");
  contenedorFormulario1.style.display = "none";
}



 function mostrarFormulario() {

  document.getElementById("contenedorTabla").style.display = "none";
  var contenedorFormulario = document.getElementById("contenedorPrincipal");
  contenedorFormulario.style.display = "block";

  var contenedorFormulario1 = document.getElementById("contenedorFormulario");
  contenedorFormulario1.style.display = "block";
}


function cargarInicioYMostrarFormulario() {

  $.ajax({
      url: "/home/inicioPaciente",
      type: "GET",
      success: function(response) {
          // Aquí puedes realizar las acciones que necesitas después de cargar /home/inicioPaciente
          mostrarFormulario();
      },
      error: function(error) {
          console.error("Error al cargar /home/inicioPaciente:", error);
      }
  });

  mostrarFormulario();
}


document.addEventListener("DOMContentLoaded", function() {
  mostrarTabla();

});

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
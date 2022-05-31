// Abre el Modal
$(document).on("click", ".abre_modal", function(e) { 
    var id = e.target.id.toUpperCase();
    if(id === "EXITO"){
        modal(e.target.parentNode, 'HOLA SOY UN '+id, 'ok', '150000', 'close'); 
    }else{
        modal(e.target.parentNode, 'HOLA SOY '+id, 'nok', '150000', 'close'); 
    }
});

// Funcion modal
function modal(papa, mensaje, estado, time, tipo) { 
    if (document.getElementById('ex_fr')) {
        document.getElementById('ex_fr').remove();
    } 
    if (estado === 'ok') { 
        var img = 'exito';
    } else if (estado === 'nok') {
        var img = 'alerta';
    } 
    var sms = '<div id="ex_fr" class="modal tempo" >';
        sms += '<img src="'+img+'.svg" alt="'+img+'"></img>';
        sms += '<h5>'+mensaje+'</h5>'; 
        if (tipo == 'close') {
            sms += '<button class="close">Ok</button>';
        } 
        sms += '</div>'; 
    $(papa).append(sms); 
    $('.tempo').slideDown(200); 
    setTimeout(() => {
        $('.tempo').slideUp(200);
        setTimeout(() => {
            $('.tempo').remove();
        }, 200);
    }, time); 
}

// cierra el modal 
$(document).on("click", ".close", function(e) {
    $(e.target.parentNode).remove(); 
});
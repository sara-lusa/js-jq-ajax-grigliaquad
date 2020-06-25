// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random
// da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
$(document).ready(function() {

  $('button').click(function() {

    // VERSIONE CON CLONE E FOR
    for (var i = 0; i < 36; i++) {
      var quadratoGenerato = $('.template .quadrato').clone();
      $('.griglia').append(quadratoGenerato);
    }

    // VERSIONE CON HANDLEBARS
    // var source = $('#template').text();
    // var template = Handlebars.compile(source);
    // var html = template();
    // $('.griglia').append(html);

  });

  $(document).on('click', '.quadrato', function() {

    var elementoSelezionato = this;

    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: 'GET',
        success: function(data) {
          $(elementoSelezionato).removeClass('yellow', 'green');

          if (data.response <= 5) {
            $(elementoSelezionato).addClass('yellow');
          } else if(data.response > 5) {
            $(elementoSelezionato).addClass('green');
          }

          $(elementoSelezionato).text(data.response);

        },
        error: function(richiesta, stato, errori) {
          alert('Errore: ' + errori);
        }
      }
    );

  })

});

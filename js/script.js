// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random
// da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
$(document).ready(function() {

  $('.quadrato').click(function() {

    var elementoSelezionato = this;

    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: 'GET',
        success: function(data) {
          alert('Ha funzionato!');
        },
        error: function(richiesta, stato, errori) {
          console.log(richiesta);
          console.log(stato);
          console.log(errori);
        }
      }
    );

  })

});

 $(document).ready(function() {

var input_group = $('#group');
var input_profil = $('#profil');

 var profil = $('#button_profil');
 var group = $('#button_group');

console.log('test');

 profil.click(function(event) {

console.log('testa');


            input_group.attr('checked', false);

    });

  group.click(function(event) {

console.log('testb');

            input_profil.attr('checked', false);
        });

    });
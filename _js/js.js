 $(document).ready(function() {

var input_group = $('#group');
var input_profil = $('#profil');

 var profil = $('#button_profil');
 var group = $('#button_group');

 profil.click(function(event) {


            input_group.attr('checked', false);

    });

  group.click(function(event) {

            input_profil.attr('checked', false);
        });

    });
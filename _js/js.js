 $(document).ready(function() {

var input_group = $('#group');
var input_profil = $('#profil');
var input_search = $('#searchT');
var input_submit = $('#submit');

 var profil = $('#button_profil');
 var group = $('#button_group');
 var search = $('#button_search');

 var page_login = $('.page_login');

 profil.click(function(event) {


            input_group.attr('checked', false);
            input_search.attr('checked', false);
    });

  group.click(function(event) {

            input_profil.attr('checked', false);
            input_search.attr('checked', false);
        });


  search.click(function(event) {

            input_profil.attr('checked', false);
            input_group.attr('checked', false);
        });

  input_submit.click(function(event) {

    event.preventDefault();
    page_login.fadeOut();
  });
    });
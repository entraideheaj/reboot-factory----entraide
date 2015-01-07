$(document).ready(function() {

    var input_group = $('#group');
    var input_profil = $('#profil');
    var input_search = $('#searchT');
    var input_submit = $('#submit');

    var profil = $('#button_profil');
    var group = $('#button_group');
    var search = $('#button_search');

    var page_login = $('.page_login');

    var etat = true;
    var span =$('span');
    span.text('Home');


    profil.click(function(event) {

        if (etat == true) {


            input_group.attr('checked', false);
            input_search.attr('checked', false);
            span.text('Profil');
            etat = false;
        }
        else{
            span.text('Home');
            etat = true;

        }

    });

    group.click(function(event) {

        if (etat == true) {

            input_profil.attr('checked', false);
            input_search.attr('checked', false);
            span.text('Group');
            etat = false;
        }
        else{

            span.text('Home');
            etat = true;

        }

    });

    search.click(function(event) {

        if (etat == true) {

            input_profil.attr('checked', false);
            input_group.attr('checked', false);
            span.text('Search');
            etat = false;
        }
        else{

            span.text('Home');
            etat = true;
        }

    });

            input_submit.click(function(event) {
            event.preventDefault();
            page_login.fadeOut();
    });
});
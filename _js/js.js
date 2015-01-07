$(document).ready(function() {

    var input_group = $('#group');
    var input_profil = $('#profil');
    var input_search = $('#searchT');
    var input_submit = $('#submit');

    var profil = $('#button_profil');
    var group = $('#button_group');
    var search = $('#button_search');

    var page_login = $('.page_login');

    var span = $('span');
    span.text('Home');

    var bSearchState = true;
    var bProfilState = true;
    var bAddState = true;
    var bGroupState = true;


    profil.click(function(event) {

        if (bProfilState == true) {


            input_group.attr('checked', false);
            input_search.attr('checked', false);
            span.text('Profil');
            bProfilState = false;
        }
        else{
            span.text('Home');
  
            bProfilState = true;
           
    bAddState = true;
    bGroupState = true;
            bSearchState = true;

        }

    });

    group.click(function(event) {

        if (bGroupState == true) {

            input_profil.attr('checked', false);
            input_search.attr('checked', false);
            span.text('Group');
            bGroupState = false;
        }
        else{

            span.text('Home');
           
            bGroupState = true;

    bAddState = true;
    bGroupState = true;
    bSearchState = true;

        }

    });

    search.click(function(event) {

        if (bSearchState == true) {

            input_profil.attr('checked', false);
            input_group.attr('checked', false);
            span.text('Search');
            bSearchState = false;
        }
        else{

            span.text('Home');
            
    
    bProfilState = true;
    bAddState = true;
    bGroupState = true;
            bSearchState = true;
            console.log("bla");
        }

    });

            input_submit.click(function(event) {
            event.preventDefault();
            page_login.fadeOut();
    });


});



$(document).ready(function() {

    var input_group = $('#group');
    var input_profil = $('#profil');
    var input_search = $('#searchT');
    var input_submit = $('#submit');

    var profil = $('#button_profil');
    var group = $('#button_group');
    var search = $('#button_search');

    var page_login = $('.page_login');
    var text = $('.header__div__span');
  
    var bProfilState = false;
    var bGroupState = false;
    var bSearchState = false;


    profil.click(function(event) {

        if (bProfilState == true) {
            text.text('Accueil');
            bProfilState = false;
        }
        else {
            input_group.attr('checked', false);
            input_search.attr('checked', false);
            text.text('Profile');
            bProfilState = true;
            bSearchState = false;
            bGroupState = false;
        }
    });

    group.click(function(event) {
        if (bGroupState == true) {
            text.text('Accueil');
            bGroupState = false;
        }

        else {
            input_profil.attr('checked', false);
            input_search.attr('checked', false);
            text.text('Groupe');
            bGroupState = true;
            bProfilState = false;
            bSearchState = false;
        }
    });
    search.click(function(event) {
        if (bSearchState == true) {
            text.text('Accueil');
            bSearchState = false;
        }
        else {
            input_profil.attr('checked', false);
            input_group.attr('checked', false);
            text.text('Recherche');
            bSearchState = true;
            bProfilState = false;
            bGroupState = false;
        }
    });
            input_submit.click(function(event) {
            event.preventDefault();
            page_login.fadeOut();
    });

var a = $('.a');
var arrow = $('.arrow');


a.next("div").hide();
    //hide the next div  after the div with the class ascenseur

    a.click(function(event){
        //if we click on the div with the class ascenseur
        event.preventDefault()
        if($(this).next("div").is(":hidden")){
            //if the next div is hidden 
            a.next("div:visible").slideUp();
            //show the next div and anime with a slide up 
            $(this).next("div").slideDown();
            //the other div slidedown  
            $('.arrow_active').toggleClass('arrow_active');
            $(this).find(".arrow").toggleClass('arrow_active');

        }

    });

    $('.type_cour').click(function(event){
        event.preventDefault();
        $('#cour').attr('checked', false);
       var valeur = $(this).find("a").innerHTML;
        $('.cour').text('choisi'+ valeur);
 
});

});



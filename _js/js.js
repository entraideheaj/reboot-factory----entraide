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
  



    profil.click(function(event) {

        
            input_group.attr('checked', false);
            input_search.attr('checked', false);
            text.text('Profil');
    });

    group.click(function(event) {

       

            input_profil.attr('checked', false);
            input_search.attr('checked', false);
            text.text('Group');

        
            
   
    });

    search.click(function(event) {

        
            input_profil.attr('checked', false);
            input_group.attr('checked', false);
            text.text('Search');


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
 

});



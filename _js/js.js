$(document).ready(function() {

    //IDs
    var input_group = $('#group');
    var input_profil = $('#profil');
    var input_search = $('#searchT');
    var input_submit = $('#submit');
    //Buttons
    var profil = $('#button_profil');
    var group = $('#button_group');
    var search = $('#button_search');
    //Page
    var page_login = $('.page_login');
    //Spans
    var sText = $('.header__div__span');
    sText.text('Home');
    //For each button: change the state
    profil.click(function () { //Profil
        if (iSwitchState != 1) {
            iSwitchState = 1;
        }
        else {
            iSwitchState = 0;
        }
        checkState();
    });
    group.click(function () { //Group
        if (iSwitchState != 2) {
            iSwitchState = 2;
        }
        else {
            iSwitchState = 0;
        }
        checkState();
    })
    search.click(function () { //Search
        if (iSwitchState != 3) {
            iSwitchState = 3;
        }
        else {
            iSwitchState = 0;
        }
        checkState();
    })
    //Login Page FadeOut
    input_submit.click(function (event) {
        event.preventDefault();
        page_login.fadeOut();
    });
});


//Function that will check the state of page
var iSwitchState = 0;
function checkState() {
    switch (iSwitchState) {
        case 0: //Home
            input_group.attr('checked', false);
            input_profil.attr('checked', false);
            input_search.attr('checked', false);
            sText.text('Home');
            break;
        case 1: //Profil
            input_profil.attr('checked', true);
            input_group.attr('checked', false);
            input_search.attr('checked', false);
            sText.text('Profil');
            break;
        case 2: //Group
            input_profil.attr('checked', false);
            input_group.attr('checked', true);
            input_search.attr('checked', false);
            sText.text('Groupe');
            break;
        case 3: //Search
            input_profil.attr('checked', false);
            input_group.attr('checked', false);
            input_search.attr('checked', true);
            sText.text('Recherche');
            break;
    };
}
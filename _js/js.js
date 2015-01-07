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

    var bSearchState = false;
    var bProfilState = false;
    var bAddState = false;
    var bGroupState = false;
    //Function that will check the state of page
    var iSwitchState = 0;
    function checkState()
    {
        if (iSwitchState == 0) {
            input_group.attr('checked', false);
            input_profil.attr('checked', false);
            input_search.attr('checked', false);
            span.text('Home');
        }
        else if (iSwitchState == 1) {
            input_profil.attr('checked', true);
            input_group.attr('checked', false);
            input_search.attr('checked', false);
            span.text('Profil');
        }
        else if (iSwitchState == 2) {
            input_profil.attr('checked', false);
            input_group.attr('checked', true);
            input_search.attr('checked', false);
            span.text('Groupe');
        }
        else if (iSwitchState == 3) {
            input_profil.attr('checked', false);
            input_group.attr('checked', false);
            input_search.attr('checked', true);
            span.text('Recherche');
        }

        console.log("State Checked");
    }

    profil.click(function () {
        if (iSwitchState != 1)
            iSwitchState = 1;
        else
            iSwitchState = 0;
        checkState();
    });
    group.click(function () {
        if (iSwitchState != 2)
            iSwitchState = 2;
        else
            iSwitchState = 0;
        checkState();
    })
    search.click(function () {
        if (iSwitchState != 3)
            iSwitchState = 3;
        else
            iSwitchState = 0;
        checkState();
    })

    input_submit.click(function (event) {
        event.preventDefault();
        page_login.fadeOut();
    });



});



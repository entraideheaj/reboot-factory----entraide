$(document).ready(main)

var cPageState = $("#page");
var cProfilButton = $(".profilButton");
var cProfilPage = $(".page_profil");
var cProfilState = $("#profil");

var cGroupState = $("#group");
var cGroupButton = $(".groupButton");
var cGroupPage = $(".page_group");

function main()
{
	cGroupButton.click(checkStateGroup);
	cProfilButton.click(checkStateProfil);
}

function checkStateGroup() 
{
	if( cGroupState.is( ':checked' ) )
	{
		cGroupPage.css(
		{
			"z-index":"9999999"
		});
	}
}

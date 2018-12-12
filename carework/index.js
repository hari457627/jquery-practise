var footerCss = "components/footer/footer.css";
var headerCss = "components/header/header.css";
var profileCss = "components/profile/profile.css";

function fetchCalls(url,section){
    $.ajax({
        url: url,
        success: function (data) {
            $("<style></style>").appendTo(section).html(data);
        }
    });
}


$(document).ready(function() {

    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        console.log("this is executed");
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
    });
    
    
    

    $("#header").load("components/header/header.html");
    $("#profile").load("components/profile/profile.html");
    $("#footer").load("components/footer/footer.html");

    fetchCalls(footerCss,"#footer");
    fetchCalls(headerCss,"#header");
    fetchCalls(profileCss,"#profile");
    
});
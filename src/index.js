var footerCss = "components/footer/footer.css";
var headerCss = "components/header/header.css";

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
    $("#footer").load("components/footer/footer.html");

    fetchCalls(footerCss,"#footer");
    fetchCalls(headerCss,"#header");
    
    $.ajax({
        dataType: "json",
        url: "components/footer/footer.json",
        success: function (data) {
            for (var i = 0; i < data.data.length; i++) {

                var a = $('<a>').attr({ 'href': 'http://api.jquery.com/' }).text(data.data[i]);
                var li = $('<li/>').addClass('list-inline-item').append(a);
                li.appendTo('.list-inline');
            }
        }
    });

    
    
});
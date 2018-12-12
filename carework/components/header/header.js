
$(document).ready(function(e){

	$.ajax({
		url: "components/header/header.css",
		success: function (data) {
				$("<style></style>").appendTo("#footer").html(data);
		}
	});

    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
});

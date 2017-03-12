$( function() {
    $( "#autocomplete" ).autocomplete({
      source: function( request, response ) {
        $.ajax({
          type: "POST",
          url: "http://localhost:8080/autocomplete/" + request.term,
          success: function(data){ response(data.results); },
          dataType: "json"
        });
      }
    })
  } );

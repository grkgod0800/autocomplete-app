$( function() {
    var count = 0;
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];

    function handleInputChange(){
      count++;
      console.log("change" + count)
    };

    $( "#autocomplete" ).autocomplete({
      source: availableTags
    });

    $( "#autocomplete" ).keypress(handleInputChange)

  } );

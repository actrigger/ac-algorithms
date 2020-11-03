$(document).ready(function () {
  //VARIABLES

  //FUNCTION DECLARATIONS
  function makeMadLib(e) {
    e.preventDefault();
    var inputNoun = $("#noun").val();
    var inputAdjective = $("#adjective").val();
    var inputPerson = $("#person").val();

    var bonusObj = {
      noun: inputNoun,
      adjective: inputAdjective,
      person: inputPerson,
    };

    $("#story").append(
      inputAdjective +
        " " +
        inputNoun +
        " " +
        " often make " +
        inputPerson +
        " laugh until she cries."
    );
  }

  //FUNCTION CALLS

  $("#lib-button").on("click", function (e) {
    makeMadLib(e);
    console.log("bonusObj");
  });
});
//   $( "lib-button" ).click(function( event ) {
//     $ ("#bonusObj").append(
//         ( $( form).serializeArray() )
//     event.preventDefault();
//     )};
//   });

// obj.push(key, value);

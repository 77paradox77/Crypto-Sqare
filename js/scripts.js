

function encrypt(phrase) {
  var strippedPhrase = punctuationLess(phrase);
  var phraseLength = strippedPhrase.length;
  var width = Math.ceil(Math.sqrt(phraseLength));
  var encryptedString = "";

  for (var i = 0; i < width; i++) {
    for (var j = i; j < phraseLength; j += width) {
      encryptedString += strippedPhrase[j];
    }
  }
  return insertSpaces(5, encryptedString);
};

// strip away punctuation and all whitespace. make everything lowercase.
function punctuationLess(phrase) {
  var strippedPhrase = phrase.replace(/[^A-Za-z-0-9-]/g,"").toLowerCase();
  return strippedPhrase;
};

// insert a specified amount of spaces in between characters
function insertSpaces(n, phrase) {
  var finalPhrase ="";
  for (var i = 0; i < phrase.length; i++) {
    finalPhrase += phrase[i];
    if ((i + 1) % n == 0) {
    finalPhrase += " ";
    }
  }
  return finalPhrase;
}

$(document).ready(function() {
  $("form#cryptosquare").submit(function(event) {
    var initialPhrase = $("input#initialPhrase").val();
    var encryptedPhrase = encrypt(initialPhrase);

    $(".initialPhrase").text(initialPhrase);
    $(".encryptedPhrase").text(encryptedPhrase);

    $("#result").show();
    event.preventDefault();
  });
});

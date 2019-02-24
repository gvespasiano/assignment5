//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

//User naming window prompts
var user = window.prompt("What is your name?");
	if (user === null){
		alert("I'll just call you user!")
	}
	else alert("Hello " + user + "!");
	if (user === null){
		var user = "User"
	};

//Donate button - favorite speech author and their age
document.getElementById('BtnDonate').addEventListener('click', function(){
 	var favorite = window.prompt("Who is your favorite author, "+user+"?");
	switch(favorite) {	
		case "Churchill" :
			alert(churchillSpeech.author + " was " + churchillSpeech.authorAge + " during this speech." );
		break;
		
		case "Ghandi" :
			alert(ghandiSpeech.author + " was " + ghandiSpeech.authorAge + " during this speech.");
		break;
		case "Demosthenes" :
			alert(demosthenesSpeech.author + " was " + demosthenesSpeech.authorAge + " during this speech." );
		break;
		default :
			alert("Please enter a valid author from our speeches. (Churchill, Ghandi or Demosthenes)");
		break;
	}
});
//Churchill Information
document.getElementById('BtnChurchill').addEventListener('click', function(){
	alert("This speech was written by " + churchillSpeech.author + " in " + churchillSpeech.year);
    if (churchillSpeech.yearIsBCE) {
        alert("This speech took place before the common era.");
    } else {
        alert("This speech took place during the common era.");
    }
	if (churchillSpeech.year < ghandiSpeech.year && churchillSpeech.year < demosthenesSpeech.year){
		alert("This is the oldest speech on the page!")
	}
	if (churchillSpeech.year > ghandiSpeech.year && churchillSpeech.year > demosthenesSpeech.year){
		alert("This is the most recent speech on the page!")
	}
	
});
//Ghandi Information
document.getElementById('BtnGhandi').addEventListener('click', function(){
  alert("This speech was written by " + ghandiSpeech.author + " in " + ghandiSpeech.year);
  if (ghandiSpeech.yearIsBCE) {
      alert("This speech took place before the common era.");
  } else {
      alert("This speech took place during the common era.");
  }
	if (ghandiSpeech.year < churchillSpeech.year && ghandiSpeech.year < demosthenesSpeech.year){
	alert("This is the oldest speech on the page!")
  }
	if (ghandiSpeech.year > churchillSpeech.year && ghandiSpeech.year > demosthenesSpeech.year){
	alert("This is the most recent speech on the page!")
  }
});
//Demosthenes Information
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  alert("This speech was written by " + demosthenesSpeech.author + " in " + demosthenesSpeech.year);
  if (demosthenesSpeech.yearIsBCE) {
      alert("This speech took place before the common era.");
  } else {
      alert("This speech took place during the common era.");
  }
if (demosthenesSpeech.year < churchillSpeech.year && demosthenesSpeech.year < ghandiSpeech.year){
alert("This is the oldest speech on the page!")
}
if (demosthenesSpeech.year > churchillSpeech.year && demosthenesSpeech.year > ghandiSpeech.year){
alert("This is the most recent speech on the page!")
}
});
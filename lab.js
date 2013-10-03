// proglangs.js - Basert på https://raw.github.com/is104/prog-lang/master/proglangs.js av Janis Gailis

// Angi variabel kalt "element_unordered_list" og la den inneholde elementet med id "liste"
// Med andre ord, les inn listen over programmeringsspråk.
var element_unordered_list = document.getElementById("liste");

// Funksjon for å skrive valgt språk tilbake til span elementet med id "utdataboks"
function skrivTilUtdataBoks(valgtobj){
	var e_spraak = document.getElementById("spraak"); // Angi variabel e_spraak, der elementet med id "spraak" blir lastet inn
	var e_utdataboks = document.getElementById("utdataboks"); // Angi variabel e_utdataboks, der elementet med id "utdataboks" blir lastet inn
	e_utdataboks.innerHTML = "Du har valgt programmeringsspråket " + e_spraak.options[valgtobj.selectedIndex].text; // Skriv ut linje med valgt programmeringspråk, der valgtobj blir lagt til på slutten.
}

function popupboks(beskjed){
	alert("Under konstruksjon!")
}
function skrivTilUtdataBoks(valgtobj){
	var e_spraak = document.getElementById("spraak"); // Angi variabel e_spraak, der elementet med id "spraak" blir lastet inn
	var e_utdataboks = document.getElementById("utdataboks"); // Angi variabel e_utdataboks, der elementet med id "utdataboks" blir lastet inn
	e_utdataboks.innerHTML = "Du har valgt programmeringsspråket " + e_spraak.options[valgtobj.selectedIndex].text; // Skriv ut linje med valgt programmeringspråk, der valgtobj blir lagt til på slutten.
}
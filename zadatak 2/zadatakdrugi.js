var unetNiz = prompt("Unesite niz celih brojeva sa razmakom : ");
var splitovanNiz = unetNiz.split(" ");
var niz = [];

for (var i = 0; i < splitovanNiz.length; i++)
{
	var broj = parseInt(splitovanNiz[i]);
	niz.push(broj);
}

console.log(niz);

var rezultat = false;

for (var i = 0; i < niz.length; i++)
{
	var brojac = 0;

	var brojZaProveru = niz[i];

	for (var j = 0; j < niz.length; j++)
	{
		if (niz[j]===brojZaProveru)
		{
			brojac = brojac + 1;
			
			if (brojac > 1)
			{
				rezultat = true;
			}
		}
	}

}

	console.log("Postoje dva ista elementa : " + rezultat);

	console.log(brojZaProveru);

	console.log(brojac);
;
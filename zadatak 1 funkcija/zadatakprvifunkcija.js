var unetNiz=prompt("Unesi niz brojeva sa razmakom : ");
var splitovanNiz = unetNiz.split(" ");
var niz=[];

for (var i = 0; i < splitovanNiz.length; i++)
	{
		var broj = parseInt(splitovanNiz[i]);
		niz.push(broj);
	}

var unesiTrazenuVrednost = prompt("Unesi vrednost koju treba zameniti : ");
var trazenaVrednost = parseInt(unesiTrazenuVrednost);

var unesiVrednostZaZamenu = prompt("Unesi vrednost kojom treba zameniti : ");
var vrednostZaZamenu = parseInt(unesiVrednostZaZamenu);


function zamena(niz,trazenaVrednost,vrednostZaZamenu)
{
	var noviNiz=[];
	console.log(niz);
	for (var i = 0; i < niz.length; i++)
	{
		if (niz[i] === trazenaVrednost)
		{
			niz[i] = vrednostZaZamenu;
			noviNiz.push(vrednostZaZamenu);
		}

		else
		{
			noviNiz.push(niz[i]);
		}
	}

	console.log(noviNiz);
}

zamena(niz,trazenaVrednost,vrednostZaZamenu);
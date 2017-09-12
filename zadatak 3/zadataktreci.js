var unetiTezinuPrvogPredmeta = prompt("Uneti tezinu prvog predmeta u kg : ");
var tezina1 = parseFloat(unetiTezinuPrvogPredmeta);
console.log(tezina1);

var unetiTezinuDrugogPredmeta = prompt("Uneti tezinu drugog predmeta u kg : ");
var tezina2 = parseFloat(unetiTezinuDrugogPredmeta);
console.log(tezina2);

var unetiMaksimalnuTezinu = prompt("Uneti maksimalnu tezinu : ");
var maksimalnaTezina = parseFloat(unetiMaksimalnuTezinu);
console.log(maksimalnaTezina);

if (tezina1 + tezina2 <= maksimalnaTezina)
{
	console.log("Nosimo oba predmeta ");
}

if (tezina1 > maksimalnaTezina && tezina2 > maksimalnaTezina)
{
	console.log("Ne mozemo poneti nijedan predmet ");
}

if (tezina1 > maksimalnaTezina && tezina2 <= maksimalnaTezina)
{
	console.log("Mozemo poneti drugi predmet ");
}

if (tezina1 <=  maksimalnaTezina && tezina2 > maksimalnaTezina )
{
	console.log("Mozemo poneti prvi predmet ");
}

if (tezina1 <= maksimalnaTezina && tezina2 <= maksimalnaTezina && tezina1 + tezina2 <= maksimalnaTezina )
{
	console.log("Mozemo da biramo koji predmet cemo poneti ");
}


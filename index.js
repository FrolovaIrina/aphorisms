const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
  "« On vain kaksi tapaa elää elämäsi. Toinen on se, ettei mikään ole ihme. Toinen se, että kaikki on ihmettä.», - Albert Einstein",
  "« Voit unelmoida, luoda, suunnitella ja rakentaa maailman hienoimmat paikat, mutta tarvitset ihmisiä unelmiesi toteuttamiseen.»,  — Walt Disney",
  "« Vain kiitollinen ihminen voi olla onnellinen.», — Jari Sarasvuo",
  "«Ihmiset ovat kuin viinit, huonot muuttuvat vanhoina happamiksi, hyvät tulevat vanhentuessaan yhä paremmiksi.»,  — Cicero",
  "« Jos haluat edetä nopeasti, mene yksin. Jos haluat mennä pitkälle, mene yhdessä.», — Afrikkalainen sananlasku",
  "« Rohkeus on turvautumista ihmeeseen, joka sisälläsi asuu. Olet enemmän kuin aavistat.»,  — Tommy Hellsten",
  "« Meistä itsestämme tuntuu, että tekomme ovat vain pisara meressä. Mutta ilman tuota pisaraa meri olisi pienempi.»,  — Äiti Teresa",
	"« On hyvä olla olemassa määränpää, jota kohti kuljemme, mutta loppujen lopuksi vain matkalla on merkitystä.», — Ursula K. Le Guin",
	"« Liian puhtaassa vedessä ei ole kaloja.», — Zen-viisaus",
  	"« Sulje silmäsi, niin näet selvästi. Lakkaa kuuntelemasta, niin kuulet totuuden.», — Taolainen sananlasku",
	"« Tuhannenkin virstan matka alkaa yhdellä askeleella.», — Kiinalainen sananlasku",
	"«Elämässä ei ole mitään pelättävää. Sitä on vain ymmärrettävä.», — Marie Curie"	 
  
]

button.addEventListener("click", () => {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  par.style.display = "block";
  par.textContent = randomQuote;
})

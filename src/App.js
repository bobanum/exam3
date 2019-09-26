/*jslint esnext:true, browser:true*/
/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		this.app = document.getElementById("app");
		this.chargerJson("http://prof-tim.cstj.qc.ca/martinboudreau/proxy.php/http://dnd5eapi.co/api/monsters").then(data => {
			this.app.appendChild(this.liste(data.results))
		});
	}
	static liste(donnees) {
		var resultat = document.createElement("select");
		resultat.setAttribute("name", "monsters");
		resultat.setAttribute("id", "monsters");
		donnees.map(donnee => {
			var option = resultat.appendChild(document.createElement("option"));
			option.setAttribute("value", donnee.url);
			option.innerHTML = donnee.name;
		});
		resultat.setAttribute("onchange", "window.open(this.value);");
		return resultat;
	}
	static chargerJson(url) {
		return new Promise(resolve => {
			var xhr = new XMLHttpRequest();
			xhr.open("get", url);
			xhr.responseType = "json";
			xhr.addEventListener("load", e => {
				resolve(xhr.response, xhr);
			});
			xhr.send();
		});
	}
	static chargerXml(url) {
		return new Promise(resolve => {
			var xhr = new XMLHttpRequest();
			xhr.open("get", url);
			xhr.responseType = "document";
			xhr.addEventListener("load", e => {
				resolve(xhr.response, xhr);
			});
			xhr.send();
		});
	}
	static chargerTxt(url) {
		return new Promise(resolve => {
			var xhr = new XMLHttpRequest();
			xhr.open("get", url);
			xhr.responseType = "text";
			xhr.addEventListener("load", e => {
				resolve(xhr.responseText, xhr);
			});
			xhr.send();
		});
	}	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns {Promise} La promesse qui sera résolue après chargement
	 */
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}

/*jslint esnext:true, browser:true*/
/**
 * @module App
 */
export default class App {
	static main() {
		this.app = document.getElementById("app");
		//L'adresse : "http://prof-tim.cstj.qc.ca/martinboudreau/proxy.php/http://dnd5eapi.co/api/monsters").then(data => {
	}
	static liste(donnees) {
		// La valeur de données doit être un tableau/array
		// Le code à reproduire :
		// <select name="monsters" id="monsters" onchange="window.open(this.value);">
		// 	<option value="http://www.dnd5eapi.co/api/monsters/1">Aboleth</option>
		// 	<option value="http://www.dnd5eapi.co/api/monsters/2">Acolyte</option>
		// 	<option value="http://www.dnd5eapi.co/api/monsters/325">Zombie</option>
		// </select>
	}
	/*
	░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
	░░ GRILLE DE CORRECTION                                        ░░
	░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

	AJAX (/6)
	=================================================================
		/3	Utilisation de la bonne fonction de récupération de données
		/1	Utilisation de l'adresse donnée
		/2	Utilisation de la promesse
	
	JAVASCRIPT (/8)
	=================================================================
		/1	Utilisation de la méthode "liste"
		/1	- Envoi d'un array
		/1	- Utilisation du résultat
		/1	Utilisation d'une boucle
		/1	- Parcourt le tableau
		/1	- Récupération d'un élément (objet) du tableau
		/2	- Utilisation des données de l'objet (2x)
	
	DOM (/6)
	=================================================================
		/2	Création des éléments (2x)
		/1	Imbrication des éléments (2x)
		/2	Ajout des attributs (4x)
		/1	Ajout du label
	*/
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

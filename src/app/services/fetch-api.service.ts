/**Nombre: fetch-api.service
 * Servicio encargado de hacer llamadas http al api por medio de HttpClient
 */

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FetchApiService {
  /**
   * Nombre: strPath
   * Tipo: String
   * Descripción: Variable que apunta a la url del api
   */

  strPath: String = "https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) {}

  /**
   * Nombre: getCharacterInfo
   * Descripción: Método que obtiene la información de un personaje
   * @Input id: nid del personaje
   * return Observable: observable creado por HttpClient el cual obtiene una respuesta en formato
   * json de la petición http
   */
  getCharacterInfo(id) {
    return this.http.get(this.strPath + id);
  }

  /**
   * Nombre: getAllCharacters
   * Descripción: Método que obtiene todos los personajes de una página determinada
   * @Input page: número de la página
   * return Observable: observable creado por HttpClient el cual obtiene una respuesta en formato
   * json de la petición http
   */
  getAllCharacters(page) {
    return this.http.get(this.strPath + "?page=" + page);
  }

  /**
   * Nombre: getThreeCharacters
   * Descripción: Método que obtiene 3 personajes al azar
   * @Input none
   * return Observable: observable creado por HttpClient el cual obtiene una respuesta en formato
   * json de la petición http
   */
  getThreeCharacters() {
    return this.http.get(
      this.strPath +
        this.getRandom(1, 496) +
        "," +
        this.getRandom(1, 496) +
        "," +
        this.getRandom(1, 496)
    );
  }

  /**
   * Nombre: getRandom
   * Descripción: Método que genera un número al azar entre los parámetros dados
   * @Input min: valor del límite inferior
   * @Input max: valor del límite superior
   * return Número aleatorio entre min y máx
   */
  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

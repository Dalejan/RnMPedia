/**characters.component
 * Componente que maneja la información general de la lista de pacientes y los carga
 * en un display de grid
 */
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FetchApiService } from "../../services/fetch-api.service";
import { Character } from "../../interfaces/character";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"]
})
export class CharactersComponent implements OnInit {
  /**
   * Nombre: arrCharacters
   * Tipo Array <Character>
   * Variable que almacena la respuesta del api al obtener personajes
   */
  arrCharacters: Character[] = [];

  /**
   * Nombre: numPage
   * Tipo number
   * Variable que controla la página a la cuál hacer el llamado http
   */
  numPage: number = 0;

  /**
   * Nombre: blFinished
   * Tipo Boolean
   * Variable que controla el estado de la consulta, si tiene o no más personajes
   * para cargar
   */
  blFinished: Boolean = false;

  /**
   * Nombre: strError
   * Tipo any
   * Variable que almacena la información de un error en al consulta http, si ocurre
   */
  strError: String = null;

  constructor(private apiService: FetchApiService) {}

  /**
   * Nombre: ngOnInit
   * Descripción: Método que del ciclo de vida del componente que ejecuta la primera llamada al api
   * @Input none
   * return none
   */
  ngOnInit() {
    this.getCharacters();
  }

  /**
   * Nombre: onScroll
   * Descripción: Método que vse ejecuta una vez la directiva de infinite scroll emita un evento
   * @Input none
   * return none
   */
  onScroll() {
    this.numPage == 25
      ? (this.blFinished = true)
      : (this.numPage = this.numPage + 1);
    this.getCharacters();
  }

  /**
   * Nombre: getCharacters
   * Descripción: Método que obtiene los personajes del api haciendo llamadas con un parámetro: page
   * @Input none
   * return none
   */
  getCharacters() {
    if (!this.blFinished) {
      this.apiService.getAllCharacters(this.numPage).subscribe(
        data => {
          this.arrCharacters = this.arrCharacters.concat(data["results"]);
        },
        error => (this.strError = error)
      );
    }
  }
}

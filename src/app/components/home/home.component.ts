/**home.component
 * Componente que maneja la información de tres personajes aleatorios y permite navegar a
 * visualizar todos los demás
 */
import { Component, OnInit } from "@angular/core";
import { FetchApiService } from "../../services/fetch-api.service";
import { Character } from "../../interfaces/character";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  /**
   * arrRandCharacters
   * Array <Character>
   * Variable que almacena la respuesta del api al obtener personajes
   */
  arrRandCharacters: Character[] = [];

  /**
   * strError
   * any
   * Variable que almacena la información de un error en al consulta http, si ocurre
   */
  strError: String = null;

  /**
   * Nombre: blLoading
   * Tipo Boolean
   * Variable controla el estado de la petición http
   */
  blLoading: Boolean = true;

  constructor(private apiService: FetchApiService) {}

  /**
   * ngOnInit
   * Método que del ciclo de vida del componente que ejecuta la llamada al api
   * @Input none
   * return none
   */
  ngOnInit() {
    this.apiService.getThreeCharacters().subscribe(
      (data: Character[]) => {
        this.arrRandCharacters = data;
        this.blLoading = false;
      },
      error => {
        this.strError = error;
        this.blLoading = false;
      }
    );
  }
}

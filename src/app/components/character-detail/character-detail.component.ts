/**characterDetail.component
 * Componente que se encarga de cargar la información del personaje seleccionado
 */
import { Component, OnInit, Input } from "@angular/core";
import { Character } from "../../interfaces/character";
import { ActivatedRoute } from "@angular/router";
import { FetchApiService } from "src/app/services/fetch-api.service";

@Component({
  selector: "[app-character-detail]",
  templateUrl: "./character-detail.component.html",
  styleUrls: ["./character-detail.component.scss"]
})
export class CharacterDetailComponent implements OnInit {
  /**
   * Nombre: strIdCharacter
   * Tipo String
   * Variable que almacena el id del personaje dependiendo de la ruta de la app
   */
  strIdCharacter: String = "";

  /**
   * Nombre: objCharacter
   * Tipo Character
   * Variable que almacena la información del personaje obtenida del api
   */
  objCharacter: Character = null;

  /**
   * Nombre: strError
   * Tipo String
   * Variable que almacena el error de la llamada http si existe
   */
  strError: String = null;

  /**
   * Nombre: blLoading
   * Tipo Boolean
   * Variable controla el estado de la petición http
   */
  blLoading: Boolean = true;

  constructor(
    private route: ActivatedRoute,
    private apiService: FetchApiService
  ) {
    this.route.params.subscribe(params => {
      this.strIdCharacter = params["id"];
    });
  }

  /**
   * Nombre: getCharacterInfo
   * Descripción: Método que obtiene la información de un personaje
   * @Input id: nid del personaje
   * return Observable: observable creado por HttpClient el cual obtiene una respuesta en formato
   * json de la petición http
   */
  ngOnInit() {
    console.log(this.strIdCharacter);
    this.getCharacter();
  }

  /**
   * Nombre: getCharacter
   * Descripción: Método que realiza una llamada al servicio el cual retorna un observable que contiene la información de
   * personaje
   * @Input none
   * return none
   */
  getCharacter() {
    this.apiService.getCharacterInfo(this.strIdCharacter).subscribe(
      (data: Character) => {
        this.objCharacter = data;
        this.blLoading = false;
      },
      error => {
        this.strError = error;
        this.blLoading = false;
      }
    );
  }
}

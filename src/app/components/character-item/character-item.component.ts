/**character-item.component
 * Componente que maneja al paciente como un elemento de una lista
 */
import { Component, Input } from "@angular/core";
import { Character } from "../../interfaces/character";

@Component({
  selector: "app-character-item",
  templateUrl: "./character-item.component.html",
  styleUrls: ["./character-item.component.scss"]
})
export class CharacterItemComponent {
  /**
   * Nombre: character
   * Tipo Character
   * Variable de entrada que contiene la información del personaje
   */
  @Input() character: Character;
}

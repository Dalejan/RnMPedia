/**
 * check-gender.directive
 * Directiva que asigna un color de borde al elemento de personaje
 * */
import { Directive, Input, ElementRef, Renderer2, OnInit } from "@angular/core";

@Directive({
  selector: "[appCheckGender]"
})
export class CheckGenderDirective implements OnInit {
  /**
   * Nombre appCheckGender
   * Tipo String
   * Variable que identifica el género del personaje
   */
  @Input("appCheckGender")
  appCheckGender: String;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  /**
   * ngOnInit
   * Método que se ejecuta una vez iniciado el componente
   * Asigna dinámicamente un color de borde dependiendo del género
   * @Input: none
   * @Output: none
   */
  ngOnInit() {
    this.appCheckGender == "Female"
      ? this.renderer.setStyle(this.el.nativeElement, "backgorundColor", "blue")
      : this.renderer.setStyle(this.el.nativeElement, "backgorundColor", "red");

    // this.appCheckGender == "Female"
    //   ? (this.el.nativeElement.style.backgorundColor = "red")
    //   : (this.el.nativeElement.style.backgorundColor = "blue");
  }
}

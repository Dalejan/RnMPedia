import { MatButtonModule } from "@angular/material/button";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
@NgModule({
  imports: [
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule
  ],

  exports: [
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}

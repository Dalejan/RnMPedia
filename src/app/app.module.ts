import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

/**Componentes */
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { CharactersComponent } from "./components/characters/characters.component";
import { CharacterDetailComponent } from "./components/character-detail/character-detail.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

/**Rutas */
import { RouterModule } from "@angular/router";
import { appRoutes } from "./utils/routes";

/**Material Design */
import { MaterialModule } from "./modules/material.module";

/**Infinite scroll module */
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    CharacterDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

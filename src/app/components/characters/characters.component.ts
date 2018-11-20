import { Component, OnInit } from "@angular/core";
import { FetchApiService } from "../../services/fetch-api.service";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"]
})
export class CharactersComponent implements OnInit {
  characters: any = [{}];
  page: number = 0;
  finished: Boolean = false;
  error: any = "";
  constructor(private apiService: FetchApiService) {}

  ngOnInit() {
    this.getCharacters();
  }

  onScroll() {
    this.page == 25 ? (this.finished = true) : (this.page = this.page + 1);
    this.getCharacters();
  }

  getCharacters() {
    if (!this.finished) {
      this.apiService.getAllCharacters(this.page).subscribe(
        data => {
          this.characters = this.characters.concat(data["results"]);
        },
        error => (this.error = error)
      );
    }
  }
}

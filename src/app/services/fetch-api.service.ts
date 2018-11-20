import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FetchApiService {
  path = "https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) {}

  getAllCharacters(page) {
    //
    return this.http.get(this.path + "?page=" + page);
  }

  getThreeCharacters() {
    return this.http.get(
      this.path +
        this.getRandom(1, 496) +
        "," +
        this.getRandom(1, 496) +
        "," +
        this.getRandom(1, 496)
    );
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

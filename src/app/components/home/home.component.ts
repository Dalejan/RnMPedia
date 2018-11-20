import { Component, OnInit } from "@angular/core";
import { FetchApiService } from "../../services/fetch-api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  randCharacters: any;
  error: any = "";
  constructor(private apiService: FetchApiService) {}

  ngOnInit() {
    this.apiService.getThreeCharacters().subscribe(
      data => {
        this.randCharacters = data;
      },
      error => (this.error = error)
    );
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSliderModule } from "@angular/material/slider";
import { AppComponent } from "./app.component";
import { AlertComponent } from "src/components/alert.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSliderModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

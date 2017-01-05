import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {SharedModule} from "./shared/shared.module";
import {HomeComponent} from "./home/home.component";
import {WelcomeComponent} from "./home/welcome/welcome.component";
import {ExampleComponent} from "./home/example/example.component";
import {TableColourPipePipe} from "./table-colour-pipe.pipe";
import {PersonGeneratorComponent} from "./home/person-generator/person-generator.component";
import {TrackedPeopleService} from "./tracked-people.service";
import {CapitalisePipe} from "./capitalise.pipe";
import {ModalModule} from "angular2-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    ExampleComponent,
    TableColourPipePipe,
    PersonGeneratorComponent,
    CapitalisePipe,
  ],
  imports: [
    BrowserModule,
    routing,
    SharedModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [TrackedPeopleService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

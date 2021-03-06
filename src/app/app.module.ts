import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {WelcomeComponent} from "./home/welcome/welcome.component";
import {ExampleComponent} from "./home/example/example.component";
import {TableColourPipe} from "./pipes/table-colour.pipe";
import {PersonGeneratorComponent} from "./person-generator/person-generator.component";
import {TrackedPeopleService} from "./services/tracked-people.service";
import {ModalModule} from "angular2-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";
import {NavigationComponent} from "./navigation/navigation.component";
import {ExportFileGeneratorComponent} from "./export-file-generator/export-file-generator.component";
import {CardOutlineColourPipe} from "./pipes/card-outline-colour.pipe";
import { AboutComponent } from './about/about.component';
import { PurposeComponent } from './about/purpose/purpose.component';
import { TeamComponent } from './about/team/team.component';
import { ContributeComponent } from './about/contribute/contribute.component';

const appRoutes: Routes = [

  {path: 'export', component: ExportFileGeneratorComponent},
  {path: 'purpose', component: PurposeComponent},
  {path: 'team', component: TeamComponent},
  {path: 'contribute', component: ContributeComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    ExampleComponent,
    TableColourPipe,
    PersonGeneratorComponent,
    NavigationComponent,
    ExportFileGeneratorComponent,
    CardOutlineColourPipe,
    AboutComponent,
    PurposeComponent,
    TeamComponent,
    ContributeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
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

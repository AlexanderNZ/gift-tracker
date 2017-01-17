import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from '@angular/router';
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

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { ExportFileGeneratorComponent } from "./export-file-generator/export-file-generator.component";
import { ImportDataComponent } from './import-data/import-data.component';

const appRoutes: Routes = [

  { path: 'export', component: ExportFileGeneratorComponent },
  { path: 'import', component: ImportDataComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
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
    ImportDataComponent
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

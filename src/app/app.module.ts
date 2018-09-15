import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Colonne1Component } from './colonne1/colonne1.component';
import { Colonne2Component } from './colonne2/colonne2.component';
import { SloganComponent } from './slogan/slogan.component';
import { ImageProduitComponent } from './image-produit/image-produit.component';
import { ArgumentsComponent } from './arguments/arguments.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { DescriptionComponent } from './description/description.component';
import { ContentHautComponent } from './content-haut/content-haut.component';
import { ContentBasComponent } from './content-bas/content-bas.component';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NavigationComponent,
    Colonne1Component,
    Colonne2Component,
    SloganComponent,
    ImageProduitComponent,
    ArgumentsComponent,
    FormulaireComponent,
    DescriptionComponent,
    ContentHautComponent,
    ContentBasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

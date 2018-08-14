import { IdentitiesPageNavComponent } from './identities-page-nav/identities-page-nav.component';
import { CurrenciesPageNavComponent } from './currencies-page-nav/currencies-page-nav.component';
import { KeysPageNavComponent } from './keys-page-nav/keys-page-nav.component';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wallet';

  keys = KeysPageNavComponent;
  identities = IdentitiesPageNavComponent;
  currencies = CurrenciesPageNavComponent;
  login = LoginComponent;
  settings = SettingsComponent
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyupComponent } from './keyup/keyup.component';
import { LoopbackComponent } from './loop-back/loop-back.component';
import { KeyupComponent2 } from './keyup2/keyup2.component';
import { KeyupComponent3 } from './keyup3/keyup3.component';
import { LittleTourComponent } from './little-tour/little-tour.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyupComponent,
    LoopbackComponent,
    KeyupComponent2,
    KeyupComponent3,
    LittleTourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

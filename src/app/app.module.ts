import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { COMPILER_PROVIDERS } from '@angular/compiler';

import { AppComponent } from './app.component';
import { DynamicModule } from './dynamic/dynamic.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicModule
  ],
  providers: [COMPILER_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }

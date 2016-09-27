import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PartsModule } from '../parts/parts.module';

import { DynamicDetail } from './detail.view';
import { DynamicTemplateBuilder } from './template.builder';
import { DynamicTypeBuilder } from './type.builder';

@NgModule({
    imports: [PartsModule],
    declarations: [DynamicDetail],
    exports: [DynamicDetail],
    providers: [DynamicTemplateBuilder, DynamicTypeBuilder]
})
export class DynamicModule {}
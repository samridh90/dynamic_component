import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StringEditor } from './string';
import { TextEditor } from './text';

export const DYNAMIC_DIRECTIVES = [
    forwardRef(() => StringEditor),
    forwardRef(() => TextEditor)
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DYNAMIC_DIRECTIVES
    ],
    exports: [
        DYNAMIC_DIRECTIVES,
        CommonModule,
        FormsModule
    ]
})
export class PartsModule {}
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'text-editor',
    template: `
    <dl>
        <dt>{{ propertyeName }}</dt>
        <dd>
            <textarea cols="15" rows="5" [(ngModel)]="entity[propertyName]"></textarea>
        </dd>
    </dl>
    `
})
export class TextEditor {
    @Input() propertyName: string;
    @Input() entity: any;
}
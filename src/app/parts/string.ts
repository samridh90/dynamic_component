import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'string-editor',
    template: `
    <dl>
        <dt>{{ propertyeName }}</dt>
        <dd>
            <input type="text" [(ngModel)]="entity[propertyeName]" />
        </dd>
    </dl>
    `
})
export class StringEditor {
    @Input() propertyName: string;
    @Input() entity: any;
}
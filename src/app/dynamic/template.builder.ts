import { Injectable } from '@angular/core';

@Injectable()
export class DynamicTemplateBuilder {
    prepareTemplate(entity: any, useTextArea: boolean) {
        let properties = Object.keys(entity);
        let editorName = useTextArea ? 'text-editor' : 'string-editor';
        return `<form>
                    ${properties.map((prop) => `<${editorName} [propertyName]="'${prop}'" [entity]="entity"></${editorName}>`).join("\n")}
                </form>`;
    }
}
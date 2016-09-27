import { Component, ComponentRef, ViewChild, ViewContainerRef,
         AfterViewInit, OnDestroy, OnChanges, SimpleChange, ComponentFactory } from '@angular/core';
import { DynamicData, DynamicTypeBuilder } from './type.builder';
import { DynamicTemplateBuilder } from './template.builder';

@Component({
    selector: 'dynamic-detail',
    template: `
    <div>
        Check to toggle between Input and Textarea:
        <input type="checkbox" #val (click)="refreshContent(val.checked)" />
        <hr/>
        <div #dynamicContentPlaceholder></div>
        <hr/>
        entity: <pre>{{ entity | json }}</pre>
    </div>
    `
})
export class DynamicDetail implements AfterViewInit, OnChanges, OnDestroy {
    @ViewChild('dynamicContentPlaceholder', {read: ViewContainerRef}) dynamicComponentTarget: ViewContainerRef;
    componentRef: ComponentRef<DynamicData>;
    
    wasViewInitialized = false;
    entity = {
        code: 'ABC123',
        description: 'A description'
    };

    constructor(private typeBuilder: DynamicTypeBuilder, private templateBuilder: DynamicTemplateBuilder) {}

    refreshContent(useTextArea: boolean=false): void {
        if (this.componentRef) {
            this.componentRef.destroy();
        }

        let template = this.templateBuilder.prepareTemplate(this.entity, useTextArea);
        this.typeBuilder
            .createComponentFactory(template)
            .then((factory: ComponentFactory<DynamicData>) => {
                this.componentRef = this.dynamicComponentTarget.createComponent(factory);
                let component = this.componentRef.instance;
                component.entity = this.entity;
            });
    }

    ngAfterViewInit(): void {
        this.wasViewInitialized = true;
        this.refreshContent();
    }

    ngOnChanges(changes: {[key: string]: SimpleChange}): void {
        if (this.wasViewInitialized) {
            return;
        }
        this.refreshContent
    }

    ngOnDestroy(): void {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }

}

import { Component, ComponentFactory, NgModule, Input, Injectable } from '@angular/core';
import { RuntimeCompiler } from '@angular/compiler';

import { PartsModule } from '../parts/parts.module';

export interface DynamicData {
    entity: any;
}

@Injectable()
export class DynamicTypeBuilder {
    constructor(private compiler: RuntimeCompiler) {}

    private factoryCache: {[templateKey: string]: ComponentFactory<DynamicData>} = {};

    createComponentFactory(template: string): Promise<ComponentFactory<DynamicData>> {
        let factory = this.factoryCache[template];

        if (factory) {
            console.log('Cache hit for factory');
            return new Promise((resolve) => {
                resolve(factory);
            });
        }

        let type = this.createNewComponent(template);
        let module = this.createComponentModule(type);

        return new Promise((resolve) => {
            this.compiler
                .compileModuleAndAllComponentsAsync(module)
                .then((moduleWithFactories) => {
                    
                });
        });
    }

    createNewComponent(template: string): Component {
        @Component({
            selector: 'dynamic-component',
            template: template
        })
        class CustomDynamicComponent implements DynamicData {
            @Input() entity: any;
        }

        return CustomDynamicComponent;
    }

    createComponentModule(componentType: any) {
        @NgModule({
            imports: [
                PartsModule
            ],
            declarations: [
                componentType
            ]
        })
        class CustomDynamicModule {}

        return CustomDynamicModule;
    }
}
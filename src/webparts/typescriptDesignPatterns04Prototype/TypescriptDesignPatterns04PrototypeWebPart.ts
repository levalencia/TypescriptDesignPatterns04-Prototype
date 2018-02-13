import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'TypescriptDesignPatterns04PrototypeWebPartStrings';
import TypescriptDesignPatterns04Prototype from './components/TypescriptDesignPatterns04Prototype';
import { ITypescriptDesignPatterns04PrototypeProps } from './components/ITypescriptDesignPatterns04PrototypeProps';

export interface ITypescriptDesignPatterns04PrototypeWebPartProps {
  description: string;
}

export default class TypescriptDesignPatterns04PrototypeWebPart extends BaseClientSideWebPart<ITypescriptDesignPatterns04PrototypeWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITypescriptDesignPatterns04PrototypeProps > = React.createElement(
      TypescriptDesignPatterns04Prototype,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

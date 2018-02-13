import * as React from 'react';
import styles from './TypescriptDesignPatterns04Prototype.module.scss';
import { ITypescriptDesignPatterns04PrototypeProps } from './ITypescriptDesignPatterns04PrototypeProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TypescriptDesignPatterns04Prototype extends React.Component<ITypescriptDesignPatterns04PrototypeProps, {}> {
  public render(): React.ReactElement<ITypescriptDesignPatterns04PrototypeProps> {
    return (
      <div className={ styles.typescriptDesignPatterns04Prototype }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* tslint:disable */
/* auto-generated react proxies */
import { createReactComponent } from './react-component-lib';

import { JSX } from 'component-library';

import { defineCustomElements, applyPolyfills } from 'component-library/dist/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});
export const DemoComponent = createReactComponent<JSX.DemoComponent, HTMLDemoComponentElement>('demo-component');

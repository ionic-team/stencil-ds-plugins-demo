import React from 'react';
import { ReactProps } from './ReactProps';
export declare const createReactComponent: <PropType, ElementType>(tagName: string) => React.ForwardRefExoticComponent<React.PropsWithoutRef<import("./utils").IonicReactExternalProps<PropType & ReactProps, ElementType>> & React.RefAttributes<ElementType>>;

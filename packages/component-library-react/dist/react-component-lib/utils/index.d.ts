import React from 'react';
export declare const dashToPascalCase: (str: string) => string;
export declare const generateUniqueId: () => string;
export declare type IonicReactExternalProps<PropType, ElementType> = PropType & {
    ref?: React.RefObject<ElementType>;
    children?: React.ReactNode;
};
export declare const createForwardRef: <PropType, ElementType>(ReactComponent: any, displayName: string) => React.ForwardRefExoticComponent<React.PropsWithoutRef<IonicReactExternalProps<PropType, ElementType>> & React.RefAttributes<ElementType>>;
export * from './attachEventProps';

import React from 'react';
export const dashToPascalCase = (str) => str
    .toLowerCase()
    .split('-')
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
export const generateUniqueId = () => {
    return ([1e7].toString() +
        -(1e3).toString() +
        -(4e3).toString() +
        -(8e3).toString() +
        -(1e11).toString()).replace(/[018]/g, (c) => {
        const random = crypto.getRandomValues(new Uint8Array(1));
        return (c ^ (random[0] & (15 >> (c / 4)))).toString(16);
    });
};
export const createForwardRef = (ReactComponent, displayName) => {
    const forwardRef = (props, ref) => {
        return React.createElement(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
    };
    forwardRef.displayName = displayName;
    return React.forwardRef(forwardRef);
};
export * from './attachEventProps';
//# sourceMappingURL=index.js.map
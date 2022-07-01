import React from 'react';

const teste = [
    'teste 1',
    'teste 2',
];
const Button = ({ children }) => {
    return React.createElement("button", null,
        children,
        " ",
        teste.map(t => React.createElement("span", null, t)));
};

export { Button as default };
//# sourceMappingURL=Button.js.map

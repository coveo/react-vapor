import * as React from 'react';
import {NormalComponents, SpecialComponents} from 'react-markdown/src/ast-to-react';

const heading = ({level, children}: any) => React.createElement(`h${level}`, {className: `h${level}`}, children);

const table = ({children}: any) => React.createElement('table', {className: 'table mb2'}, children);

const list = ({ordered, children}: any) =>
    ordered
        ? React.createElement('ol', {className: 'list-decimal'}, children)
        : React.createElement('ul', {className: 'list-disc'}, children);

// See https://github.com/remarkjs/react-markdown#appendix-b-components for possible node types
export const MarkdownOverrides: Partial<NormalComponents & SpecialComponents> = {
    h1: heading,
    h2: heading,
    h3: heading,
    h4: heading,
    h5: heading,
    h6: heading,
    table,
    ol: list,
    ul: list,
};

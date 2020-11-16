import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import _ from 'underscore';

// jQuery has to be imported before chosen-js
import $ from 'jquery';
global.$ = global.jQuery = $;

import 'chosen-js';

global.document.createRange = () => {
    return {
        setEnd: () => {},
        setStart: () => {},
        getBoundingClientRect: () => {},
        getClientRects: () => [],
    };
};

global.document.body.createTextRange = jest.fn();
global._ = _;

Enzyme.configure({adapter: new Adapter()});

import {shallow, ShallowWrapper} from 'enzyme';
import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';

import {IPaginationSelectProps, PaginationSelect} from '../PaginationSelect';

describe('paginationSelectWrapper', () => {
    const basicPaginationSelectProps: IPaginationSelectProps = {
        selected: false,
        pageNb: 2,
        onPageClick: _.noop,
    };

    describe('<paginationSelectWrapper />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(<PaginationSelect {...basicPaginationSelectProps} />);
            }).not.toThrow();
        });
    });

    describe('<paginationSelectWrapper />', () => {
        let wrapper: ShallowWrapper<IPaginationSelectProps>;
        const shallowPaginationSelect = (props?: Partial<IPaginationSelectProps>) =>
            shallowWithState(<PaginationSelect {...basicPaginationSelectProps} {...props} />, {});

        it('should add the class disabled', () => {
            wrapper = shallowPaginationSelect({disabled: true});
            expect(wrapper.hasClass('disabled')).toBe(true);
        });

        it('should add the class selectable if not selected', () => {
            wrapper = shallowPaginationSelect({selected: false});
            expect(wrapper.hasClass('selectable')).toBe(true);
        });

        it('should not add the class selectable if  selected', () => {
            wrapper = shallowPaginationSelect({selected: true});
            expect(wrapper.hasClass('selectable')).toBe(false);
        });

        it('should show the pageNbr + 1', () => {
            wrapper = shallowPaginationSelect({pageNb: 3});
            expect(wrapper.text()).toBe('4');
        });

        it('should call the onPageClick on click <a/>', () => {
            const spy = jasmine.createSpy('onPageClick');
            wrapper = shallowPaginationSelect({onPageClick: spy});
            wrapper
                .find('a')
                .props()
                .onClick({} as any);

            expect(spy).toHaveBeenCalledTimes(1);
        });
    });
});

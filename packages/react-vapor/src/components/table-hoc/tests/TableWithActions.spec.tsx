import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';

import {HOCTableRowState} from '..';
import {clearState} from '../../../utils';
import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {TableHOCRowActions} from '../actions/TableHOCRowActions';
import {TableHOC} from '../TableHOC';
import {TableSelectors} from '../TableSelectors';
import {tableWithActions} from '../TableWithActions';

describe('Table HOC', () => {
    describe('TableWithActions', () => {
        const TableWithActions = _.compose(tableWithActions())(TableHOC);

        it('should not throw', () => {
            expect(() => {
                shallowWithState(<TableWithActions id="a" data={[]} renderBody={_.identity} />, {});

                shallowWithState(
                    <TableWithActions
                        id="b"
                        data={[{value: 'a'}]}
                        renderBody={(allData: any[]) =>
                            _.map(allData, (data: any) => (
                                <tr>
                                    <td>{data.value}</td>
                                </tr>
                            ))
                        }
                    />,
                    {}
                );
            }).not.toThrow();
        });

        it('should render a TableHOC', () => {
            const wrapper = shallowWithState(<TableWithActions id="a" data={[]} renderBody={_.identity} />, {}).dive();

            expect(wrapper.find(TableHOC).exists()).toBe(true);
        });

        it('should add the hasActionButtons prop on the table', () => {
            const wrapper = shallowWithState(<TableWithActions id="a" data={[]} renderBody={_.identity} />, {}).dive();

            expect(wrapper.find(TableHOC).prop('hasActionButtons')).toBe(true);
        });

        describe('click outside', () => {
            const id = 'a';
            let store: ReactVaporMockStore;

            beforeEach(() => {
                store = getStoreMock();
            });

            afterEach(() => {
                store.dispatch(clearState());
            });

            it('should not dispatch an action when the user click outside and no rows are selected', () => {
                const wrapper = shallowWithState(
                    <TableWithActions id="a" data={[]} renderBody={_.identity} />,
                    {}
                ).dive();
                jest.spyOn(TableSelectors, 'getSelectedRows').mockReturnValue([]);

                wrapper.find(TableHOC).simulate('click', {target: {closest: (): HTMLElement => null}});

                expect(store.getActions()).not.toContain(TableHOCRowActions.deselectAll(id));
            });

            it('should dispatch an action when the user click outside and a row is selected', () => {
                jest.spyOn(TableSelectors, 'getSelectedRows').mockReturnValue([{} as HOCTableRowState]);
                const wrapper = shallowWithState(
                    <TableWithActions id="a" data={[{value: 'a'}]} renderBody={_.identity} />,
                    {}
                ).dive();

                wrapper.find(TableHOC).simulate('click', {target: {closest: (): HTMLElement => null}});

                expect(store.getActions()).toContainEqual(TableHOCRowActions.deselectAll(id));
            });

            it('should not dispatch an action when the user click inside the table', () => {
                jest.spyOn(TableSelectors, 'getSelectedRows').mockReturnValue([{} as HOCTableRowState]);
                const wrapper = shallowWithState(
                    <TableWithActions id="a" data={[]} renderBody={_.identity} />,
                    {}
                ).dive();

                wrapper.find(TableHOC).simulate('click', {target: {closest: () => expect.anything()}});

                expect(store.getActions()).not.toContain(TableHOCRowActions.deselectAll(id));
            });
        });
    });
});

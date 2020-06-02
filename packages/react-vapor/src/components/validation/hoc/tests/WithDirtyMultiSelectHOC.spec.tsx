import {mountWithStore} from 'enzyme-redux';
import * as React from 'react';
import {act} from 'react-dom/test-utils';
import {IReactVaporState} from '../../../../ReactVapor';
import {composeMockStore} from '../../../../utils/tests/TestUtils';
import {IMultiSelectOwnProps, MultiSelectConnected} from '../../../select/MultiSelectConnected';
import {ValidationActions} from '../../ValidationActions';
import {withDirtyMultiSelectHOC} from '../WithDirtyMultiSelectHOC';

const MultiSelectWithDirty = withDirtyMultiSelectHOC(MultiSelectConnected);

describe('MultiSelectWithDirty', () => {
    const defaultProps: IMultiSelectOwnProps = {
        id: 'SOME_ID',
        items: [],
    };

    const ONE_VALUE = '🐟';
    const ANOTHER_VALUE = '🐠';

    const withSelectedValues = (...values: string[]) => (state: IReactVaporState) => ({
        ...state,
        listBoxes: [
            ...(state.listBoxes || []),
            {
                active: 0,
                ...{
                    id: defaultProps.id,
                    selected: values,
                },
            },
        ],
    });

    it('should trigger the dirty state when the user selects a new value', () => {
        const store = composeMockStore(withSelectedValues(ONE_VALUE));

        const component = mountWithStore(<MultiSelectWithDirty {...defaultProps} initialValues={[]} />, store);

        act(() => {
            component.mount();
        });

        expect(store.getActions()).toContain(ValidationActions.setDirty(defaultProps.id, true));
    });

    it('should trigger the dirty state when the user removes a value', () => {
        const store = composeMockStore(withSelectedValues(ONE_VALUE));

        const component = mountWithStore(
            <MultiSelectWithDirty {...defaultProps} initialValues={[ONE_VALUE, ANOTHER_VALUE]} />,
            store
        );

        act(() => {
            component.mount();
        });

        expect(store.getActions()).toContain(ValidationActions.setDirty(defaultProps.id, true));
    });

    it('should not trigger the dirty state when the initial values are the same as the selected ones', () => {
        const store = composeMockStore(withSelectedValues(ONE_VALUE));

        const component = mountWithStore(<MultiSelectWithDirty {...defaultProps} initialValues={[ONE_VALUE]} />, store);

        act(() => {
            component.mount();
        });

        expect(store.getActions()).toContain(ValidationActions.setDirty(defaultProps.id, false));
    });

    it('should not trigger the dirty state when there is no initial value and selected value', () => {
        const store = composeMockStore(withSelectedValues());

        const component = mountWithStore(<MultiSelectWithDirty {...defaultProps} initialValues={[]} />, store);

        act(() => {
            component.mount();
        });

        expect(store.getActions()).toContain(ValidationActions.setDirty(defaultProps.id, false));
    });
});

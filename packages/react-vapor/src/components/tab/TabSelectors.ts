import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {CherryPick} from '../../utils';
import {ITabOwnProps} from './Tab';
import {TabConstants} from './TabConstants';
import {ITabGroupState, ITabState} from './TabReducers';

const getTabGroup = (state: IReactVaporState, {groupId}: CherryPick<ITabOwnProps, 'groupId'>): ITabGroupState =>
    _.findWhere(state.tabs, {id: groupId ?? TabConstants.DefaultGroupId});

const getSelectedTab = createSelector(
    getTabGroup,
    (tabGroup: ITabGroupState): ITabState => _.findWhere(tabGroup?.tabs, {isSelected: true})
);

const getTab = (state: IReactVaporState, {id}: CherryPick<ITabOwnProps, 'id'>): ITabState =>
    state.tabs
        ?.reduce((accumulator, tabGroup): ITabState[] => [...accumulator, ...tabGroup.tabs], [])
        .find((tab) => tab.id === id);

const getIsTabSelected = createSelector(getTab, (tab) => tab?.isSelected ?? false);

export const TabSelectors = {
    getTabGroup,
    getTab,
    /**
     * Returns the id of the selected tab within a tab group
     */
    getSelectedTab,
    /**
     * Returns whether the tab at the specified id is selected
     */
    getIsTabSelected,
};

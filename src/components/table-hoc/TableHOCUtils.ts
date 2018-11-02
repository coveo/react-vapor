import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IFilterState} from '../filterBox/FilterBoxReducers';
import {IListBoxState} from '../listBox/ListBoxReducers';
import {ITableWithSortState} from './reducers/TableWithSortReducers';

const getPredicateId = (tableId: string, componentId: string) => tableId + componentId;
const getPaginationId = (tableId: string) => `pagination-${tableId}`;

const getCompositeState = (id: string, state: IReactVaporState) => {
    const tableSort: ITableWithSortState = _.find(state.tableHOCHeader, (v: ITableWithSortState) => v.tableId === id && _.isBoolean(v.isAsc));
    const paginationState = _.findWhere(state.paginationComposite, {id: getPaginationId(id)});
    const perPageState = _.findWhere(state.perPageComposite, {id});
    const filter: IFilterState = _.findWhere(state.filters, {id});
    const predicates = _.chain(state.listBoxes)
        .filter((list: IListBoxState) => new RegExp(`^${id}(.+)`).test(list.id))
        .filter((list: IListBoxState) => list.selected && list.selected[0] !== '')
        .map((list: IListBoxState) => ({id: list.id.replace(id, ''), value: list.selected[0]}))
        .value();

    return {
        // sort
        sortKey: tableSort && tableSort.id,
        sortAscending: tableSort && tableSort.isAsc,

        // pagination
        perPage: perPageState && perPageState.perPage,
        pageNb: paginationState && paginationState.pageNb,

        // filter
        filter: filter && filter.filterText,

        // predicates
        predicates: predicates,
    };
};

export const TableHOCUtils = {
    getCompositeState,
    getPredicateId,
    getPaginationId,
};

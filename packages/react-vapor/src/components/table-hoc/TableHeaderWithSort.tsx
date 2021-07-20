import classNames from 'classnames';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {Svg} from '../svg/Svg';
import {TableHeaderActions} from './actions/TableHeaderActions';
import {ITableWithSortState} from './reducers/TableWithSortReducers';
import {useCustomLayoutEffect} from './utils/TableHooks';

export interface ITableHeaderWithSortOwnProps {
    id: string;
    tableId: string;
    isLoading?: boolean;
    isDefault?: boolean;
}

export interface HOCTableHeaderStateProps {
    sorted: boolean;
}

export interface ITableHeaderWithSortDispatchProps {
    onMount: () => void;
    onSort: () => void;
    onUnmount: () => void;
}

export interface ITableHeaderWithSortProps
    extends ITableHeaderWithSortOwnProps,
        Partial<HOCTableHeaderStateProps>,
        Partial<ITableHeaderWithSortDispatchProps> {}

export const TableHeaderWithSort: React.FC<
    ITableHeaderWithSortProps & React.HTMLAttributes<HTMLTableHeaderCellElement>
> = ({className, isLoading, id, tableId, isDefault, children}) => {
    const dispatch = useDispatch();
    const {sorted} = useSelector((state: IReactVaporState) => {
        const tableSort: ITableWithSortState = _.findWhere(state.tableHOCHeader, {id});

        return {
            sorted: tableSort && tableSort.isAsc,
        };
    });

    const onMount = () => dispatch(TableHeaderActions.addTableHeader(id, tableId, isDefault));
    const onSort = () => dispatch(TableHeaderActions.sortTable(id));
    const onUnmount = () => dispatch(TableHeaderActions.removeTableHeader(id));

    const {style, tableHeaderRef} = useCustomLayoutEffect({id, isLoading});

    React.useEffect(() => {
        onMount();

        return () => {
            onUnmount();
        };
    }, []);

    const headerCellClasses = classNames(className, 'admin-sort', {
        'admin-sort-ascending': sorted === true,
        'admin-sort-descending': sorted === false,
    });

    const getSvg = classNames({
        'sorted-asc': sorted === true,
        'sorted-desc': sorted === false,
        'asc-desc': sorted === undefined,
    });

    if (isLoading) {
        return (
            <th id={id} ref={tableHeaderRef} style={style}>
                {children}
            </th>
        );
    }

    return (
        <th id={id} className={headerCellClasses} onClick={() => onSort()} ref={tableHeaderRef} style={style}>
            {children}
            <div className="admin-sort-icon">
                <Svg svgName={getSvg} className="tables-sort icon" />
            </div>
        </th>
    );
};

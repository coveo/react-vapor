(window.webpackJsonp=window.webpackJsonp||[]).push([[769],{1857:function(r,e,n){"use strict";n.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {Svg} from '../svg/Svg';\r\nimport {TableHeaderActions} from './actions/TableHeaderActions';\r\nimport {ITableWithSortState} from './reducers/TableWithSortReducers';\r\n\r\nexport interface ITableHeaderWithSortOwnProps {\r\n    id: string;\r\n    tableId: string;\r\n    isDefault?: boolean;\r\n}\r\n\r\nexport interface HOCTableHeaderStateProps {\r\n    sorted: boolean;\r\n}\r\n\r\nexport interface ITableHeaderWithSortDispatchProps {\r\n    onMount: () => void;\r\n    onSort: () => void;\r\n    onUnmount: () => void;\r\n}\r\n\r\nexport interface ITableHeaderWithSortProps\r\n    extends ITableHeaderWithSortOwnProps,\r\n        Partial<HOCTableHeaderStateProps>,\r\n        Partial<ITableHeaderWithSortDispatchProps> {}\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: ITableHeaderWithSortOwnProps) => {\r\n    const tableSort: ITableWithSortState = _.findWhere(state.tableHOCHeader, {id: ownProps.id});\r\n\r\n    return {\r\n        sorted: tableSort && tableSort.isAsc,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: IDispatch,\r\n    ownProps: ITableHeaderWithSortOwnProps\r\n): ITableHeaderWithSortDispatchProps => ({\r\n    onMount: () => dispatch(TableHeaderActions.addTableHeader(ownProps.id, ownProps.tableId, ownProps.isDefault)),\r\n    onSort: () => dispatch(TableHeaderActions.sortTable(ownProps.id)),\r\n    onUnmount: () => dispatch(TableHeaderActions.removeTableHeader(ownProps.id)),\r\n});\r\n\r\n@ReduxConnect(mapStateToProps, mapDispatchToProps)\r\nexport class TableHeaderWithSort extends React.Component<\r\n    ITableHeaderWithSortProps & React.HTMLAttributes<HTMLTableHeaderCellElement>\r\n> {\r\n    componentDidMount() {\r\n        this.props.onMount();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onUnmount();\r\n    }\r\n\r\n    render() {\r\n        const headerCellClasses = classNames(this.props.className, 'admin-sort', {\r\n            'admin-sort-ascending': this.props.sorted === true,\r\n            'admin-sort-descending': this.props.sorted === false,\r\n        });\r\n\r\n        return (\r\n            <th id={this.props.id} className={headerCellClasses} onClick={() => this.props.onSort()}>\r\n                {this.props.children}\r\n                <div className=\"admin-sort-icon\">\r\n                    <Svg svgName=\"asc-desc\" className=\"tables-sort icon\" />\r\n                </div>\r\n            </th>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=769.bundle.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[781],{1869:function(n,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\n\r\nimport {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {ConfigSupplier, HocUtils} from '../../utils/HocUtils';\r\nimport {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {turnOffLoading} from '../loading/LoadingActions';\r\nimport {INavigationChildrenProps, INavigationOwnProps} from '../navigation/Navigation';\r\nimport {NavigationConnected} from '../navigation/NavigationConnected';\r\nimport {NavigationSelectors} from '../navigation/NavigationSelectors';\r\nimport {TableWithPaginationActions} from './actions/TableWithPaginationActions';\r\nimport {ITableHOCOwnProps} from './TableHOC';\r\nimport {TableHOCUtils} from './TableHOCUtils';\r\nimport {TableSelectors} from './TableSelectors';\r\n\r\nexport interface ITableWithPaginationConfig\r\n    extends WithServerSideProcessingProps,\r\n        Partial<INavigationOwnProps>,\r\n        Partial<INavigationChildrenProps> {}\r\n\r\nexport interface ITableWithPaginationStateProps {\r\n    totalEntries: number;\r\n    totalPages: number;\r\n    pageNb: number;\r\n    perPage: number;\r\n}\r\n\r\nexport interface ITableWithPaginationDispatchProps {\r\n    onMount: () => void;\r\n    onUnmount: () => void;\r\n}\r\n\r\nexport interface ITableWithPaginationProps\r\n    extends Partial<ITableWithPaginationStateProps>,\r\n        Partial<ITableWithPaginationDispatchProps>,\r\n        ITableHOCOwnProps,\r\n        WithServerSideProcessingProps {}\r\n\r\nconst TableWithPaginationProps = keys<ITableWithPaginationStateProps>();\r\n\r\nconst sliceData = (data: any[], startingIndex: number, endingIndex: number) => data.slice(startingIndex, endingIndex);\r\n\r\nexport const tableWithPagination = (supplier: ConfigSupplier<ITableWithPaginationConfig> = {}) => (\r\n    Component: React.ComponentType<ITableWithPaginationProps>\r\n): React.ComponentClass<ITableWithPaginationProps & React.HTMLAttributes<HTMLTableElement>> => {\r\n    const config = HocUtils.supplyConfig(supplier);\r\n    const mapStateToProps = (\r\n        state: IReactVaporState,\r\n        ownProps: ITableWithPaginationProps\r\n    ): ITableWithPaginationStateProps | ITableHOCOwnProps => {\r\n        const pageNb = NavigationSelectors.getPaginationPage(state, {id: TableHOCUtils.getPaginationId(ownProps.id)});\r\n        const perPage = NavigationSelectors.getPerPage(state, {id: ownProps.id});\r\n        const isServer = ownProps.isServer || config.isServer;\r\n        const length = TableSelectors.getDataCount(state, {\r\n            id: ownProps.id,\r\n            data: ownProps.data,\r\n            isServer,\r\n        });\r\n\r\n        const startingIndex = pageNb * perPage;\r\n        const endingIndex = startingIndex + perPage;\r\n\r\n        return {\r\n            pageNb,\r\n            perPage,\r\n            totalEntries: length,\r\n            totalPages: Math.max(Math.ceil(length / perPage), 1),\r\n            data: isServer ? ownProps.data : ownProps.data && sliceData(ownProps.data, startingIndex, endingIndex),\r\n        };\r\n    };\r\n\r\n    const mapDispatchToProps = (\r\n        dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n        ownProps: ITableHOCOwnProps\r\n    ): ITableWithPaginationDispatchProps => ({\r\n        onMount: () => {\r\n            dispatch(turnOffLoading([`loading-${ownProps.id}`]));\r\n            dispatch(TableWithPaginationActions.add(ownProps.id));\r\n        },\r\n        onUnmount: () => dispatch(TableWithPaginationActions.remove(ownProps.id)),\r\n    });\r\n\r\n    @ReduxConnect(mapStateToProps, mapDispatchToProps)\r\n    class TableWithPagination extends React.Component<ITableHOCOwnProps & ITableWithPaginationProps> {\r\n        componentDidMount() {\r\n            this.props.onMount();\r\n        }\r\n\r\n        componentWillUnmount() {\r\n            this.props.onUnmount();\r\n        }\r\n\r\n        componentDidUpdate(prevProps: ITableWithPaginationProps) {\r\n            if (prevProps.pageNb !== this.props.pageNb || prevProps.perPage !== this.props.perPage) {\r\n                this.props.onUpdate?.();\r\n            }\r\n        }\r\n\r\n        render() {\r\n            const newProps = _.omit(this.props, [...TableWithPaginationProps]);\r\n            return (\r\n                <Component {...newProps}>\r\n                    <NavigationConnected\r\n                        id={this.props.id}\r\n                        loadingIds={[this.props.id]}\r\n                        {...config}\r\n                        {..._.pick(this.props, TableWithPaginationProps)}\r\n                    />\r\n                    {this.props.children}\r\n                </Component>\r\n            );\r\n        }\r\n    }\r\n\r\n    return TableWithPagination;\r\n};\r\n"}}]);
//# sourceMappingURL=781.bundle.js.map
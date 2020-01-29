(window.webpackJsonp=window.webpackJsonp||[]).push([[620],{1724:function(n,e,a){"use strict";a.r(e),e.default="import * as classNames from 'classnames';\nimport * as React from 'react';\nimport {connect} from 'react-redux';\nimport * as _ from 'underscore';\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\nimport {IReduxAction} from '../../utils/ReduxUtils';\nimport {PaginationReduxActions} from '../navigation/pagination/NavigationPaginationActions';\nimport {Svg} from '../svg/Svg';\nimport {PaginationSelect} from './PaginationSelect';\nimport {PaginationSelectors} from './PaginationSelectors';\n\nexport interface IPaginationPagesNumberOwnProps {\n    id: string;\n    totalPages: number;\n    numberOfPagesToShow?: number;\n    previousLabel?: string;\n    nextLabel?: string;\n    hidden?: boolean;\n    disabled?: boolean;\n}\n\nconst mapStateToProps = (state: IReactVaporState, ownProps: IPaginationPagesNumberOwnProps) => ({\n    currentPage: PaginationSelectors.getPaginationPageNumber(state, {id: ownProps.id}),\n});\n\nconst mapDispatchToProps = (\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\n    ownProps: IPaginationPagesNumberOwnProps\n) => ({\n    onRender: () => dispatch(PaginationReduxActions.addPagination(ownProps.id)),\n    onDestroy: () => dispatch(PaginationReduxActions.removePagination(ownProps.id)),\n    onPageClick: (pageNb: number) => dispatch(PaginationReduxActions.changePage(ownProps.id, pageNb)),\n});\n\nexport interface IPaginationPagesNumberProps\n    extends IPaginationPagesNumberOwnProps,\n        ReturnType<typeof mapDispatchToProps>,\n        ReturnType<typeof mapStateToProps> {}\n\nconst NUMBER_OF_PAGES_SHOWING: number = 7;\nconst PREVIOUS_LABEL: string = 'Previous';\nconst NEXT_LABEL: string = 'Next';\n\nclass PaginationPagesNumberDisconnected extends React.Component<IPaginationPagesNumberProps, any> {\n    private handlePageClick = (pageNb: number) => {\n        if (pageNb >= 0 && this.props.currentPage !== pageNb) {\n            this.props.onPageClick?.(pageNb);\n        }\n    };\n\n    componentDidUpdate() {\n        if (this.props.currentPage > this.props.totalPages - 1) {\n            this.handlePageClick(this.props.totalPages - 1);\n        }\n    }\n\n    componentDidMount() {\n        this.props.onRender?.();\n    }\n\n    componentWillUnmount() {\n        this.props.onDestroy?.();\n    }\n\n    render() {\n        const {currentPage} = this.props;\n        const showXPages: number = Math.abs((this.props.numberOfPagesToShow || NUMBER_OF_PAGES_SHOWING) - 1);\n        const previousLabel: string = this.props.previousLabel || PREVIOUS_LABEL;\n        const nextLabel: string = this.props.nextLabel || NEXT_LABEL;\n        let start: number = 0;\n        let end: number = showXPages;\n        const lastPage: number = this.props.totalPages - 1;\n        const previousClasses: string = classNames('flat-select-option mod-link', {\n            disabled: currentPage === 0 || this.props.disabled,\n            selectable: currentPage !== 0,\n            hidden: this.props.hidden,\n        });\n        const nextClasses: string = classNames('flat-select-option mod-link', {\n            disabled: currentPage === lastPage || this.props.disabled,\n            selectable: currentPage !== lastPage,\n            hidden: this.props.hidden,\n        });\n\n        const pageSelects: JSX.Element[] = [];\n\n        if (!this.props.hidden) {\n            if (currentPage + showXPages / 2 > lastPage) {\n                end = lastPage;\n                start = Math.max(lastPage - showXPages, 0);\n            } else {\n                start = Math.max(Math.floor(currentPage - showXPages / 2), 0);\n                end = Math.min(start + showXPages, lastPage);\n            }\n\n            _.each(_.range(start, end + 1), (nbr: number): void => {\n                pageSelects.push(\n                    <PaginationSelect\n                        key={'page-' + nbr}\n                        onPageClick={this.handlePageClick}\n                        pageNb={nbr}\n                        selected={nbr === currentPage}\n                        disabled={this.props.disabled}\n                    />\n                );\n            });\n        }\n\n        return (\n            <div className=\"pagination\">\n                <div className=\"flat-select\">\n                    <a\n                        className={previousClasses}\n                        data-page={currentPage - 1}\n                        onClick={() => this.handlePageClick(currentPage - 1)}\n                    >\n                        <Svg\n                            svgName=\"arrow-left-rounded\"\n                            className=\"pagination-icon\"\n                            svgClass=\"icon icon-small mod-lg\"\n                        />\n                        {previousLabel}\n                    </a>\n                    {pageSelects}\n                    <a\n                        className={nextClasses}\n                        data-page={currentPage + 1}\n                        onClick={() => this.handlePageClick(currentPage + 1)}\n                    >\n                        {nextLabel}\n                        <Svg\n                            svgName=\"arrow-right-rounded\"\n                            className=\"pagination-icon\"\n                            svgClass=\"icon icon-small mod-lg\"\n                        />\n                    </a>\n                </div>\n            </div>\n        );\n    }\n}\n\nexport const PaginationPagesNumber = connect(mapStateToProps, mapDispatchToProps)(PaginationPagesNumberDisconnected);\n"}}]);
//# sourceMappingURL=620.bundle.js.map
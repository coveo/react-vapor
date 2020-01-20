(window.webpackJsonp=window.webpackJsonp||[]).push([[838],{1926:function(e,r,t){"use strict";t.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {JSXRenderable} from '../../../utils/JSXUtils';\r\nimport {ITableHeadingAttribute, ITableProps} from '../Table';\r\nimport {TableChildComponent} from '../TableConstants';\r\nimport {TableHeader} from '../TableHeader';\r\nimport {ITableHeaderCellOwnProps} from '../TableHeaderCell';\r\nimport {getTableChildComponentId} from '../TableUtils';\r\n\r\nexport const TableChildHeader = (props: ITableProps): JSX.Element => {\r\n    const tableHeaderCells: ITableHeaderCellOwnProps[] = props.headingAttributes.map(\r\n        (headingAttribute: ITableHeadingAttribute) => {\r\n            const id = `${getTableChildComponentId(props.id, TableChildComponent.TABLE_HEADER_CELL)}${\r\n                headingAttribute.attributeName\r\n            }`;\r\n            const title: React.ReactNode = (headingAttribute.titleFormatter as (args: string) => JSXRenderable)(\r\n                headingAttribute.attributeName\r\n            );\r\n            const className = headingAttribute.headerClasses;\r\n            const tableSortInformation = !!headingAttribute.sort\r\n                ? {tableId: props.id, attributeToSort: headingAttribute.attributeName}\r\n                : {};\r\n\r\n            return {\r\n                id,\r\n                title,\r\n                className,\r\n                withFixedHeader: props.withFixedHeader,\r\n                ...tableSortInformation,\r\n            } as ITableHeaderCellOwnProps;\r\n        }\r\n    );\r\n\r\n    const headerClass = classNames(props.tableHeaderClasses, 'mod-no-border-top', {\r\n        'mod-deactivate-pointer': !!props.tableCompositeState.isLoading,\r\n    });\r\n\r\n    return (\r\n        <TableHeader\r\n            headerClass={headerClass}\r\n            columns={props.collapsibleFormatter ? [...tableHeaderCells, {title: ''}] : tableHeaderCells}\r\n            withReduxState\r\n        />\r\n    );\r\n};\r\n"}}]);
//# sourceMappingURL=838.bundle.js.map
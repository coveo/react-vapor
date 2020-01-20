(window.webpackJsonp=window.webpackJsonp||[]).push([[790],{1878:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport {connect} from 'react-redux';\nimport * as _ from 'underscore';\nimport {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';\nimport {Section} from '../../section/Section';\nimport {TableHOC} from '../TableHOC';\nimport {tableWithBlankSlate} from '../TableWithBlankSlate';\nimport {tableWithFilter} from '../TableWithFilter';\nimport {generateDataWithFacker, generateTableRow} from './TableHOCExamples';\n\nexport const TableHocWithBlankSlateExample: ExampleComponent = () => (\n    <Section>\n        <TableWithBlankSlateExample />\n    </Section>\n);\nTableHocWithBlankSlateExample.title = 'TableHOC blankSlate';\n\nexport interface IExampleRowData {\n    city: string;\n    email: string;\n    username: string;\n    dateOfBirth: Date;\n    id: string;\n}\n\n// start-print\nconst mapStateToProps = () => ({\n    data: generateDataWithFacker(0),\n});\n\nconst TableWithBlankSlateExampleDisconnected: React.FunctionComponent = () => {\n    const tableId = 'tableWithBlankSlate';\n\n    return (\n        <Section>\n            <TableWithBlankSlateComposed\n                id={tableId}\n                className=\"table\"\n                data={generateDataWithFacker(0)}\n                renderBody={generateTableRow}\n            />\n        </Section>\n    );\n};\nconst TableWithBlankSlateExample = connect(mapStateToProps)(TableWithBlankSlateExampleDisconnected);\n\nconst TableWithBlankSlateComposed = _.compose(\n    tableWithBlankSlate({title: 'No data caused the table to be empty'}),\n    tableWithFilter({\n        matchFilter: (filter: string, data: IExampleRowData) =>\n            data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1,\n    }),\n    tableWithBlankSlate({title: 'Filter caused the table to be empty'})\n)(TableHOC);\n"}}]);
//# sourceMappingURL=790.bundle.js.map
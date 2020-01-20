(window.webpackJsonp=window.webpackJsonp||[]).push([[866],{1954:function(t,r,n){"use strict";n.r(r),r.default="import {date, internet} from 'faker/locale/en';\r\nimport * as moment from 'moment';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {IActionOptions} from '../../actions/Action';\r\nimport {SELECTION_BOXES} from '../../datePicker/examples/DatePickerExamplesCommon';\r\nimport {IData, ITableProps} from '../Table';\r\nimport {DEFAULT_TABLE_DATA} from '../TableConstants';\r\n\r\nexport const tableOwnPropsMock: ITableProps = {\r\n    id: 'super-table',\r\n    headingAttributes: [\r\n        {\r\n            attributeName: 'email',\r\n            titleFormatter: _.identity,\r\n            attributeFormatter: _.escape,\r\n            filterFormatter: _.identity,\r\n        },\r\n        {\r\n            attributeName: 'avatar',\r\n            titleFormatter: _.identity,\r\n        },\r\n        {\r\n            attributeName: 'userName',\r\n            titleFormatter: _.identity,\r\n            attributeFormatter: _.identity,\r\n        },\r\n        {\r\n            attributeName: 'password',\r\n            titleFormatter: _.identity,\r\n        },\r\n        {\r\n            attributeName: 'lastLogin',\r\n            titleFormatter: _.identity,\r\n        },\r\n    ],\r\n    blankSlateDefault: {title: 'super blankslate'},\r\n};\r\n\r\nexport const tablePropsMock: ITableProps = {\r\n    ...tableOwnPropsMock,\r\n    // default props\r\n    initialTableData: DEFAULT_TABLE_DATA,\r\n    tableCompositeState: {sortState: {}, data: DEFAULT_TABLE_DATA} as any,\r\n};\r\n\r\nexport const predictableData: IData = {\r\n    id: 'funkyUserName',\r\n    email: 'awesome@awesome.com',\r\n    avatar: 'whatever',\r\n    userName: 'funkyUserName',\r\n    password: 'lakjhdslfksh98323qasd',\r\n    lastLogin: moment()\r\n        .add(2, 'day')\r\n        .format('YYYY-MM-DD hh:mm:ss'),\r\n    url: 'https://www.larrypage.com',\r\n};\r\n\r\nexport const dataById = _.range(10).reduce(\r\n    (byId, index) => {\r\n        const email = internet.email();\r\n        const avatar = internet.avatar();\r\n        const userName = internet.userName();\r\n        const password = internet.password();\r\n        const lastLogin = moment(date.recent(30)).format('YYYY-MM-DD hh:mm:ss');\r\n\r\n        return {\r\n            ...byId,\r\n            [userName]: {\r\n                id: userName,\r\n                email,\r\n                avatar,\r\n                userName,\r\n                password,\r\n                lastLogin,\r\n                url: index % 2 ? internet.url() : undefined,\r\n            },\r\n        };\r\n    },\r\n    {[predictableData.userName]: {...predictableData}}\r\n);\r\n\r\nexport const tablePropsMockWithData = {\r\n    ...tablePropsMock,\r\n    collapsibleFormatter: (rowData: IData) => (rowData.url ? <p>{rowData.url}</p> : undefined),\r\n    tableCompositeState: {\r\n        sortState: {},\r\n        data: {\r\n            byId: dataById,\r\n            allIds: Object.keys(dataById),\r\n            displayedIds: Object.keys(dataById),\r\n            totalEntries: Object.keys(dataById).length,\r\n            totalPages: 1,\r\n        },\r\n    } as any,\r\n    getActions: jasmine.createSpy('getActions'),\r\n    onRowClick: jasmine.createSpy('onClickRow'),\r\n} as any;\r\n\r\nexport const tablePossibleProps = [\r\n    tablePropsMock,\r\n    {...tablePropsMock, navigation: true},\r\n    {...tablePropsMock, navigation: true, actionBar: true},\r\n    {...tablePropsMock, navigation: true, actionBar: true, filter: true},\r\n    {...tablePropsMock, navigation: true, actionBar: true, filter: true, lastUpdatedLabel: 'anyWouldDo'},\r\n    {\r\n        ...tablePropsMock,\r\n        navigation: true,\r\n        actionBar: true,\r\n        filter: true,\r\n        lastUpdatedLabel: 'anyWouldDo',\r\n        getActions: (): IActionOptions[] => [],\r\n    },\r\n    {\r\n        ...tablePropsMock,\r\n        navigation: true,\r\n        actionBar: true,\r\n        filter: true,\r\n        lastUpdatedLabel: 'anyWouldDo',\r\n        getActions: (): IActionOptions[] => [],\r\n    },\r\n    {\r\n        ...tablePropsMock,\r\n        navigation: true,\r\n        actionBar: true,\r\n        filter: true,\r\n        lastUpdatedLabel: 'anyWouldDo',\r\n        getActions: (): IActionOptions[] => [],\r\n        predicates: [{attributeName: 'email', attributeNameFormatter: _.identity, props: {}}],\r\n    },\r\n    {\r\n        ...tablePropsMock,\r\n        navigation: true,\r\n        actionBar: true,\r\n        filter: true,\r\n        lastUpdatedLabel: 'anyWouldDo',\r\n        getActions: (): IActionOptions[] => [],\r\n        datePicker: {datesSelectionBoxes: SELECTION_BOXES, attributeName: 'date'},\r\n    },\r\n    tablePropsMockWithData,\r\n    {...tablePropsMockWithData, navigation: true},\r\n    {...tablePropsMockWithData, navigation: true, actionBar: true},\r\n    {...tablePropsMockWithData, navigation: true, actionBar: true, filter: true},\r\n    {...tablePropsMockWithData, navigation: true, actionBar: true, filter: true, lastUpdatedLabel: 'anyWouldDo'},\r\n    {\r\n        ...tablePropsMockWithData,\r\n        navigation: true,\r\n        actionBar: true,\r\n        filter: true,\r\n        lastUpdatedLabel: 'anyWouldDo',\r\n        getActions: (): IActionOptions[] => [],\r\n    },\r\n    {\r\n        ...tablePropsMockWithData,\r\n        navigation: true,\r\n        actionBar: true,\r\n        filter: true,\r\n        lastUpdatedLabel: 'anyWouldDo',\r\n        getActions: (): IActionOptions[] => [],\r\n    },\r\n    {\r\n        ...tablePropsMockWithData,\r\n        navigation: true,\r\n        actionBar: true,\r\n        filter: true,\r\n        lastUpdatedLabel: 'anyWouldDo',\r\n        getActions: (): IActionOptions[] => [],\r\n        predicates: [{attributeName: 'email', attributeNameFormatter: _.identity, props: {}}],\r\n    },\r\n    {\r\n        ...tablePropsMockWithData,\r\n        navigation: true,\r\n        actionBar: true,\r\n        filter: true,\r\n        lastUpdatedLabel: 'anyWouldDo',\r\n        getActions: (): IActionOptions[] => [],\r\n        datePicker: {datesSelectionBoxes: SELECTION_BOXES, attributeName: 'date'},\r\n    },\r\n] as any;\r\n"}}]);
//# sourceMappingURL=866.bundle.js.map
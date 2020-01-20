(window.webpackJsonp=window.webpackJsonp||[]).push([[568],{1663:function(n,o,a){"use strict";a.r(o),o.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {ExamplesStore} from '../../../../docs/Store';\r\nimport {LoadingActions, turnOffLoading} from '../../loading/LoadingActions';\r\nimport {INavigationOwnProps} from '../Navigation';\r\nimport {NavigationConnected} from '../NavigationConnected';\r\n\r\nconst navigationConnectedExampleId = 'navigation-connected';\r\nconst navigationConnectedExampleLoadingIds = ['loading-' + navigationConnectedExampleId];\r\n\r\nexport class NavigationConnectedExamples extends React.Component<any, any> {\r\n    // Remove loading after a few seconds\r\n    componentWillMount() {\r\n        ExamplesStore.subscribe(() => {\r\n            if (_.contains([LoadingActions.turnOn, LoadingActions.add], ExamplesStore.getState().lastAction.type)) {\r\n                setTimeout(() => {\r\n                    ExamplesStore.dispatch(turnOffLoading(navigationConnectedExampleLoadingIds));\r\n                }, 2000);\r\n            }\r\n        });\r\n    }\r\n\r\n    render() {\r\n        const navigationProps: INavigationOwnProps = {\r\n            id: navigationConnectedExampleId,\r\n            totalPages: 10,\r\n            totalEntries: 50,\r\n            loadingIds: navigationConnectedExampleLoadingIds,\r\n        };\r\n        return (\r\n            <div className=\"mt2\">\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Navigation with Redux state and loading</label>\r\n                    <NavigationConnected {...navigationProps} />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=568.bundle.js.map
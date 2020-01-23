(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{1501:function(r,a,n){"use strict";n.r(a),a.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {ITabProps} from '../tab/Tab';\r\nimport {TabConnected} from '../tab/TabConnected';\r\nimport {TabNavigation} from '../tab/TabNavigation';\r\n\r\nexport interface ITabsHeaderProps {\r\n    tabs?: ITabProps[];\r\n}\r\n\r\nexport const TabsHeader = (props: ITabsHeaderProps) => {\r\n    if (props.tabs) {\r\n        return (\r\n            <TabNavigation>\r\n                {..._.map(props.tabs, (tab: ITabProps) => <TabConnected key={tab.id} {...tab} />)}\r\n            </TabNavigation>\r\n        );\r\n    }\r\n\r\n    return null;\r\n};\r\n"}}]);
//# sourceMappingURL=412.bundle.js.map
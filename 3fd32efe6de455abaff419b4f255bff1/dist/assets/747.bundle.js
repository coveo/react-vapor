(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{1845:function(o,t,e){"use strict";e.r(t),t.default="import * as loremIpsum from 'lorem-ipsum';\r\nimport * as React from 'react';\r\n\r\nimport {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';\r\nimport {Button} from '../../button/Button';\r\nimport {Section} from '../../section/Section';\r\nimport {StickyFooter} from '../StickyFooter';\r\n\r\nconst lorem = loremIpsum({count: 200});\r\n\r\nexport const FooterExample: ExampleComponent = () => <StickyFooterExample />;\r\n\r\nconst StickyFooterExample: React.FunctionComponent = () => {\r\n    const [isOpened, setIsOpened] = React.useState(false);\r\n\r\n    return (\r\n        <Section title=\"A sticky footer example\">\r\n            <Button name=\"toggle sticky footer\" onClick={() => setIsOpened(!isOpened)} />\r\n            <div className=\"mt2\">{lorem}</div>\r\n            <StickyFooter className=\"sticky-footer-mod-header\" isOpened={isOpened}>\r\n                <Button primary name=\"fake button   \" />\r\n            </StickyFooter>\r\n        </Section>\r\n    );\r\n};\r\n"}}]);
//# sourceMappingURL=747.bundle.js.map
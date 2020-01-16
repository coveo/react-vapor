(window.webpackJsonp=window.webpackJsonp||[]).push([[663],{1754:function(n,e,t){"use strict";t.r(e),e.default="import {shallow} from 'enzyme';\nimport * as React from 'react';\n\nimport {Section} from '../Section';\n\ndescribe('Section', () => {\n    const SOME_TITLE = '🎢✨🎊';\n    const SOME_DESCRIPTION = '🎀🎁';\n    const SOME_CLASS = '💻';\n\n    it('should render without errors', () => {\n        expect(() => {\n            shallow(<Section />);\n        }).not.toThrow();\n    });\n\n    describe('<Section />', () => {\n        it('should render the title in a h2 tag when defined', () => {\n            const section = shallow(<Section title={SOME_TITLE} />);\n\n            expect(section.find('h2').text()).toBe(SOME_TITLE);\n        });\n\n        it('should render the title in a h3 tag with level 2', () => {\n            const section = shallow(<Section title={SOME_TITLE} level={2} />);\n\n            expect(section.find('h3').text()).toBe(SOME_TITLE);\n        });\n\n        it('should render the title in a h4 tag with level 3', () => {\n            const section = shallow(<Section title={SOME_TITLE} level={3} />);\n\n            expect(section.find('h4').text()).toBe(SOME_TITLE);\n        });\n\n        it('should not render the title when undefined', () => {\n            const section = shallow(<Section />);\n\n            expect(section.find('h2').exists()).toBe(false);\n        });\n\n        it('should render the description in a p tag when defined', () => {\n            const section = shallow(<Section description={SOME_DESCRIPTION} />);\n\n            expect(section.find('p').text()).toBe(SOME_DESCRIPTION);\n        });\n\n        it('should not render the p tag when description is undefined', () => {\n            const section = shallow(<Section />);\n\n            expect(section.find('p').exists()).toBe(false);\n        });\n\n        it('should render the fieldset with mods and classNames', () => {\n            const form = shallow(<Section className={SOME_CLASS} mods=\"mod-header-padding\" />);\n\n            expect(form.hasClass(SOME_CLASS)).toBe(true);\n            expect(form.hasClass('mod-header-padding')).toBe(true);\n        });\n\n        it('should render children', () => {\n            const SomeComponent = () => <div>COMPONENT</div>;\n            const form = shallow(\n                <Section>\n                    <SomeComponent />\n                </Section>\n            );\n\n            expect(form.find(SomeComponent)).toBeDefined();\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=663.bundle.js.map
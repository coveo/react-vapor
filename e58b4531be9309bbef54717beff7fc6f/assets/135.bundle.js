(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1230:function(n,t,o){"use strict";o.r(t),t.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {Svg} from '../../svg/Svg';\r\nimport {Action, IActionOptions, IActionProps} from '../Action';\r\n\r\ndescribe('Actions', () => {\r\n    const action: IActionOptions = {\r\n        name: 'action',\r\n        trigger: jasmine.createSpy('triggerMethod'),\r\n        enabled: true,\r\n    };\r\n\r\n    describe('<Action />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<Action action={action} />);\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should have a defaultProp hideDisabled set to true', () => {\r\n            expect(Action.defaultProps.hideDisabled).toBe(true);\r\n        });\r\n\r\n        it('should add the id of the action on a data-trigger attribute', () => {\r\n            const expectedId = 'cut';\r\n            const component = shallow(<Action action={{...action, id: expectedId}} />);\r\n\r\n            expect(component.find('.action-label').prop('data-trigger')).toBe(expectedId);\r\n        });\r\n\r\n        it('should add the name of the action on a data-trigger attribute if the id is not defined', () => {\r\n            const component = shallow(<Action action={action} />);\r\n\r\n            expect(component.find('.action-label').prop('data-trigger')).toBe(action.name);\r\n        });\r\n    });\r\n\r\n    describe('<Action />', () => {\r\n        let actionComponent: ReactWrapper<IActionProps, any>;\r\n        const simple: boolean = false;\r\n\r\n        beforeEach(() => {\r\n            if (actionComponent && actionComponent.length) {\r\n                actionComponent.unmount();\r\n            }\r\n            actionComponent = mount(<Action action={action} simple={simple} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            actionComponent.detach();\r\n        });\r\n\r\n        it('should get an action as a prop', () => {\r\n            const actionProp = actionComponent.props().action;\r\n\r\n            expect(actionProp).toBeDefined();\r\n            expect(actionProp).toEqual(jasmine.objectContaining(action));\r\n        });\r\n\r\n        it('should get if the action is simple (no html) as a prop', () => {\r\n            const simpleProp = actionComponent.props().simple;\r\n\r\n            expect(simpleProp).toBeDefined();\r\n            expect(simpleProp).toBe(simple);\r\n        });\r\n\r\n        it('should not contain html if the action is simple', () => {\r\n            expect(actionComponent.find('span').find('span').length).toBeGreaterThan(1);\r\n\r\n            actionComponent.setProps({action: action, simple: true});\r\n\r\n            expect(actionComponent.find('span').length).toBe(1);\r\n        });\r\n\r\n        it('should have icon more if no icon is defined', () => {\r\n            expect(actionComponent.find('.action-icon-more').length).toBeGreaterThanOrEqual(1);\r\n\r\n            actionComponent.setProps({action: {...action, icon: 'delete'}, simple: false});\r\n\r\n            expect(actionComponent.find(Svg).length).toBe(1);\r\n            expect(actionComponent.find('.more-icon').length).toBe(0);\r\n        });\r\n\r\n        it('should display the action name', () => {\r\n            expect(actionComponent.html()).toContain(action.name);\r\n        });\r\n\r\n        it('should display a <Tooltip /> if the action has a tooltip', () => {\r\n            expect(actionComponent.find('Tooltip').length).toBe(0);\r\n\r\n            const newAction = _.extend({}, action, {tooltip: 'A useful tooltip'});\r\n            actionComponent.setProps({action: newAction, simple: false});\r\n\r\n            expect(actionComponent.find('Tooltip').length).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=135.bundle.js.map
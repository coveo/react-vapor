(window.webpackJsonp=window.webpackJsonp||[]).push([[932],{2028:function(n,t,o){"use strict";o.r(t),t.default="import {ShallowWrapper} from 'enzyme';\nimport {shallowWithStore} from 'enzyme-redux';\nimport * as React from 'react';\nimport * as _ from 'underscore';\nimport {getStoreMock} from '../../../../utils/tests/TestUtils';\nimport {IInputOwnProps} from '../../../input/Input';\nimport {InputConnected} from '../../../input/InputConnected';\nimport {ValidationActions} from '../../ValidationActions';\nimport {ValidationIds} from '../../ValidationIds';\nimport {INonEmptyInputValidationProps, nonEmptyInputValidationHOC} from '../NonEmptyInputValidationHOC';\n\ndescribe('NonEmptyInputValidationHOC', () => {\n    const InputWithHOC = nonEmptyInputValidationHOC(InputConnected);\n\n    let store: ReturnType<typeof getStoreMock>;\n    let inputWrapper: ShallowWrapper<INonEmptyInputValidationProps & IInputOwnProps>;\n\n    const INPUT_PROPS: INonEmptyInputValidationProps & IInputOwnProps = {\n        id: '🥔',\n        title: 'ok',\n        validationMessage: 'ohno',\n    };\n\n    beforeEach(() => {\n        store = getStoreMock({\n            validation: {},\n        });\n    });\n\n    afterEach(() => {\n        store.clearActions();\n    });\n\n    describe('<InputWithHOC />', () => {\n        it('should render without error', () => {\n            expect(() => shallowWithStore(<InputWithHOC {...INPUT_PROPS} />, store)).not.toThrow();\n        });\n\n        it('should mount and unmount/detach without error', () => {\n            expect(() => {\n                inputWrapper = shallowWithStore(<InputWithHOC {...INPUT_PROPS} />, store);\n                inputWrapper.unmount();\n            }).not.toThrow();\n        });\n\n        describe('after mount', () => {\n            let validateSpy: jasmine.Spy;\n\n            beforeEach(() => {\n                validateSpy = jasmine.createSpy('validate');\n                inputWrapper = shallowWithStore(<InputWithHOC {...INPUT_PROPS} validate={validateSpy} />, store).dive();\n            });\n\n            it('should dispatch a set error action when the validation fails', () => {\n                inputWrapper.prop('validate')('');\n\n                expect(store.getActions()).toContain(\n                    ValidationActions.setError(INPUT_PROPS.id, INPUT_PROPS.validationMessage, ValidationIds.nonEmpty)\n                );\n            });\n\n            it('should not dispatch a set error action when the validation succeeds', () => {\n                inputWrapper.prop('validate')('some correct value');\n\n                expect(store.getActions()).not.toContain(\n                    ValidationActions.setError(INPUT_PROPS.id, INPUT_PROPS.validationMessage, ValidationIds.nonEmpty)\n                );\n            });\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=932.bundle.js.map
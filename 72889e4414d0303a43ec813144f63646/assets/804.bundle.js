(window.webpackJsonp=window.webpackJsonp||[]).push([[804],{1892:function(e,r,n){"use strict";n.r(r),r.default="import {shallowWithState} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {BlankSlate} from '../../blankSlate/BlankSlate';\r\nimport {ITableHOCProps, TableHOC} from '../TableHOC';\r\nimport {tableWithBlankSlate} from '../TableWithBlankSlate';\r\n\r\ndescribe('Table HOC', () => {\r\n    describe('TableWithBlankSlate', () => {\r\n        const TableWithBlankSlate = _.compose(tableWithBlankSlate())(TableHOC);\r\n\r\n        const defaultProps: ITableHOCProps = {\r\n            id: 'a',\r\n            data: [],\r\n            renderBody: _.identity,\r\n        };\r\n\r\n        it('should not throw', () => {\r\n            expect(shallowWithState(<TableWithBlankSlate {...defaultProps} />, {}));\r\n            expect(shallowWithState(<TableWithBlankSlate {...defaultProps} data={[{value: 'a'}]} />, {}));\r\n        });\r\n\r\n        describe('props and content', () => {\r\n            const shallowWithProps = (props: Partial<ITableHOCProps> = {}) => {\r\n                return shallowWithState(<TableWithBlankSlate {...defaultProps} {...props} />, {});\r\n            };\r\n\r\n            let renderSpy: jasmine.Spy;\r\n            beforeEach(() => {\r\n                renderSpy = jasmine.createSpy('render');\r\n            });\r\n\r\n            it('should render a TableHOC', () => {\r\n                const wrapper = shallowWithProps().dive();\r\n                expect(wrapper.find(TableHOC).exists()).toBe(true);\r\n            });\r\n\r\n            it('should override the TableHOC renderBody method when the data is empty', () => {\r\n                const wrapper = shallowWithProps({renderBody: renderSpy}).dive();\r\n                const tableRenderBody = wrapper.find(TableHOC).prop('renderBody') as () => any;\r\n                tableRenderBody();\r\n\r\n                expect(renderSpy).not.toHaveBeenCalled();\r\n            });\r\n\r\n            it('should override the TableHOC renderBody method to return null when the data is empty', () => {\r\n                const wrapper = shallowWithProps().dive();\r\n                const tableRenderBody = wrapper.find(TableHOC).prop('renderBody') as () => any;\r\n\r\n                expect(tableRenderBody()).toBe(null);\r\n            });\r\n\r\n            it('should not override the TableHOC renderBody method when there is data', () => {\r\n                const wrapper = shallowWithProps({data: [{value: 'a'}], renderBody: renderSpy}).dive();\r\n                const tableRenderBody = wrapper.find(TableHOC).prop('renderBody') as () => any;\r\n                tableRenderBody();\r\n\r\n                expect(renderSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should render a BlankSlate when the data is empty', () => {\r\n                const wrapper = shallowWithProps().dive();\r\n                expect(wrapper.find(BlankSlate).exists()).toBe(true);\r\n            });\r\n\r\n            it('should not render a BlankSlate when the data is null', () => {\r\n                const wrapper = shallowWithProps({data: null}).dive();\r\n                expect(wrapper.find(BlankSlate).exists()).toBe(false);\r\n            });\r\n\r\n            it('should render the first BlankSlate when the data is empty', () => {\r\n                const expectedTitle = 'First';\r\n                const TableWithDoubleBlankSlate = _.compose(\r\n                    tableWithBlankSlate({title: expectedTitle}),\r\n                    tableWithBlankSlate({title: 'Second'})\r\n                )(TableHOC);\r\n\r\n                const wrapper = shallowWithState(<TableWithDoubleBlankSlate {...defaultProps} />, {}).dive();\r\n                expect(wrapper.find(BlankSlate).prop('title')).toBe(expectedTitle);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=804.bundle.js.map
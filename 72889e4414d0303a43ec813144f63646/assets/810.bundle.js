(window.webpackJsonp=window.webpackJsonp||[]).push([[810],{1898:function(e,r,t){"use strict";t.r(r),r.default="import {shallowWithState} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {ITableHOCProps, TableHOC} from '../TableHOC';\r\nimport {tableWithSort} from '../TableWithSort';\r\n\r\ndescribe('Table HOC', () => {\r\n    describe('TableWithSort', () => {\r\n        const TableWithSort = _.compose(\r\n            tableWithSort({sort: (sortKey: string, isAsc: boolean, a: any, b: any) => b.value - a.value})\r\n        )(TableHOC);\r\n\r\n        const defaultProps: ITableHOCProps = {\r\n            id: 'a',\r\n            data: [{value: 10}, {value: 5}],\r\n            renderBody: _.identity,\r\n        };\r\n\r\n        const getStateWithSort = (isAsc: boolean, sortKey: string) => ({\r\n            tableHOCHeader: [{tableId: defaultProps.id, sortKey, isAsc}],\r\n        });\r\n\r\n        it('should not throw', () => {\r\n            expect(shallowWithState(<TableWithSort id=\"a\" data={[]} renderBody={_.identity} />, {}));\r\n            expect(shallowWithState(<TableWithSort id=\"b\" data={[{value: 'a'}]} renderBody={_.identity} />, {}));\r\n        });\r\n\r\n        it('should render a TableHOC', () => {\r\n            const wrapper = shallowWithState(<TableWithSort {...defaultProps} />, {}).dive();\r\n            expect(wrapper.find(TableHOC).exists()).toBe(true);\r\n        });\r\n\r\n        it('should not throw if the ownProps data is null', () => {\r\n            expect(() => {\r\n                shallowWithState(<TableWithSort {...defaultProps} data={null} />, {}).dive();\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should sort elements', () => {\r\n            const wrapper = shallowWithState(\r\n                <TableWithSort {...defaultProps} />,\r\n                getStateWithSort(true, 'value')\r\n            ).dive();\r\n\r\n            const sortedData = [...defaultProps.data].sort((a, b) => b.value - a.value);\r\n            const tableData = wrapper.find(TableHOC).prop('data');\r\n\r\n            expect(tableData).toEqual(sortedData);\r\n        });\r\n\r\n        it('should not sort if the function is not defined', () => {\r\n            const TableWithDefaultSort = _.compose(tableWithSort({}))(TableHOC);\r\n\r\n            const wrapper = shallowWithState(\r\n                <TableWithDefaultSort {...defaultProps} />,\r\n                getStateWithSort(true, 'value')\r\n            ).dive();\r\n            const tableData = wrapper.find(TableHOC).prop('data');\r\n\r\n            expect(tableData).toEqual(defaultProps.data);\r\n        });\r\n\r\n        describe('when server side', () => {\r\n            const TableWithPredicateServer = _.compose(withServerSideProcessing, tableWithSort())(TableHOC);\r\n\r\n            it('should not sort elements', () => {\r\n                const wrapper = shallowWithState(\r\n                    <TableWithPredicateServer {...defaultProps} />,\r\n                    getStateWithSort(true, 'value')\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                const tableData = wrapper.find(TableHOC).prop('data');\r\n\r\n                expect(tableData).toEqual(defaultProps.data);\r\n            });\r\n\r\n            it('should call onUpdate when the sort changes', () => {\r\n                const updateSpy = jasmine.createSpy('update');\r\n                const wrapper = shallowWithState(\r\n                    <TableWithPredicateServer {...defaultProps} onUpdate={updateSpy} />,\r\n                    getStateWithSort(true, 'value')\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                wrapper.setProps({isAsc: false});\r\n                wrapper.update();\r\n\r\n                expect(updateSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should not call onUpdate when the predicate does not changes', () => {\r\n                const updateSpy = jasmine.createSpy('update');\r\n                const wrapper = shallowWithState(\r\n                    <TableWithPredicateServer {...defaultProps} onUpdate={updateSpy} />,\r\n                    getStateWithSort(true, 'value')\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                wrapper.setProps({ignore: true});\r\n                wrapper.update();\r\n\r\n                expect(updateSpy).not.toHaveBeenCalled();\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=810.bundle.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[853],{1941:function(e,n,t){"use strict";t.r(n),n.default="import {mount} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {PrimaryAction} from '../../actions/PrimaryAction';\r\nimport {openDropdownSearch} from '../../dropdownSearch/DropdownSearchActions';\r\nimport {ITableProps, Table} from '../Table';\r\nimport {TableConnected} from '../TableConnected';\r\nimport {TableChildComponent} from '../TableConstants';\r\nimport * as TableDataModifier from '../TableDataModifier';\r\nimport {getTableChildComponentId} from '../TableUtils';\r\nimport {tablePossibleProps, tablePropsMock, tablePropsMockWithData} from './TableTestCommon';\r\n\r\ndescribe('<TableConnected />', () => {\r\n    let store: Store<IReactVaporState>;\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n    });\r\n\r\n    const mountComponentWithProps = (props: ITableProps) => {\r\n        return mount(\r\n            <Provider store={store}>\r\n                <TableConnected {...props} />\r\n            </Provider>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n    };\r\n\r\n    describe('render', () => {\r\n        const getInitialTableDataMock: any = (selectedIds: string[] = ['id1']) => ({\r\n            byId: {\r\n                id1: {\r\n                    status: 'pokeball',\r\n                    pokemon: 'pikachu',\r\n                },\r\n                id2: {\r\n                    status: 'pokeball',\r\n                    pokemon: 'Ditto',\r\n                },\r\n                id3: {\r\n                    status: 'board',\r\n                    pokemon: 'Mew',\r\n                },\r\n            },\r\n            allIds: ['id1', 'id2', 'id3'],\r\n            displayedIds: ['id1', 'id2'],\r\n            selectedIds,\r\n            totalEntries: 3,\r\n            totalPages: 1,\r\n        });\r\n\r\n        it('should render without error in different scenarios', () => {\r\n            tablePossibleProps.forEach((props: ITableProps) => {\r\n                expect(() => mountComponentWithProps(props)).not.toThrow();\r\n            });\r\n        });\r\n\r\n        it('should put the table state in the store on mount', () => {\r\n            expect(store.getState().tables[tablePropsMock.id]).toBeUndefined();\r\n            mountComponentWithProps(tablePropsMock);\r\n            expect(store.getState().tables[tablePropsMock.id]).toBeDefined();\r\n        });\r\n\r\n        it('should remove the table state in the store on unmount', () => {\r\n            const tableConnected = mountComponentWithProps({...tablePropsMock, actionBar: true});\r\n            expect(store.getState().tables[tablePropsMock.id]).toBeDefined();\r\n            tableConnected.unmount();\r\n            expect(store.getState().tables[tablePropsMock.id]).toBeUndefined();\r\n        });\r\n\r\n        it('should update action in props with the selectedIds array and the rowsData from the state', () => {\r\n            const actions = [{id: 'action1', enabled: true}];\r\n            const wrapper = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                actionBar: true,\r\n                getActions: () => actions,\r\n                initialTableData: getInitialTableDataMock(),\r\n            });\r\n\r\n            const tableConnected = wrapper.find(Table);\r\n\r\n            expect(tableConnected.props().actions[0]).toEqual(actions[0]);\r\n        });\r\n\r\n        it('should update action grouped in props with the selectedIds array and the rowsData from the state if rowsMultiSelect is true', () => {\r\n            const actions = [\r\n                {id: 'action1', enabled: true},\r\n                {id: 'action2', enabled: true, grouped: true},\r\n            ];\r\n            const wrapper = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                actionBar: true,\r\n                getActions: () => actions,\r\n                initialTableData: getInitialTableDataMock(['id1', 'id2']),\r\n                rowsMultiSelect: true,\r\n            });\r\n\r\n            const tableConnected = wrapper.find(Table);\r\n\r\n            expect(tableConnected.props().actions[0]).toEqual(actions[1]);\r\n        });\r\n    });\r\n\r\n    describe('after render', () => {\r\n        it('should add as many actions as there are dispatched table actions on onRowClick', () => {\r\n            const wrapper = mountComponentWithProps({...tablePropsMock, actionBar: true});\r\n            const tableConnected = wrapper.find(Table);\r\n\r\n            const actions = [\r\n                {\r\n                    enabled: true,\r\n                    name: 'action1',\r\n                    primary: true,\r\n                    icon: 'edit',\r\n                },\r\n                {\r\n                    enabled: true,\r\n                    name: 'action2',\r\n                    primary: true,\r\n                    icon: 'clear',\r\n                },\r\n            ];\r\n\r\n            expect(wrapper.find(PrimaryAction).length).toBe(0);\r\n            tableConnected.props().onRowClick(actions, 1);\r\n            wrapper.update();\r\n            expect(wrapper.find(PrimaryAction).length).toBe(actions.length);\r\n        });\r\n\r\n        it('should show only grouped action if the numberOfSelectedIds is greater than 2 on onRowClick', () => {\r\n            const wrapper = mountComponentWithProps({...tablePropsMock, actionBar: true, rowsMultiSelect: true});\r\n            const tableConnected = wrapper.find(Table);\r\n\r\n            const actions = [\r\n                {\r\n                    enabled: true,\r\n                    name: 'action1',\r\n                    primary: true,\r\n                    icon: 'edit',\r\n                },\r\n                {\r\n                    enabled: true,\r\n                    name: 'action2',\r\n                    primary: true,\r\n                    icon: 'clear',\r\n                    grouped: true,\r\n                },\r\n            ];\r\n\r\n            expect(wrapper.find(PrimaryAction).length).toBe(0);\r\n            tableConnected.props().onRowClick(actions, 2);\r\n            wrapper.update();\r\n            expect(wrapper.find(PrimaryAction).length).toBe(1);\r\n        });\r\n\r\n        it('should modify the selected option in the predicate and close the dropdown on onPredicateOptionClick', () => {\r\n            const testOption = {value: 'test emails', selected: false};\r\n            const predicate = {\r\n                attributeName: 'email',\r\n                attributeNameFormatter: _.identity,\r\n                props: {defaultOptions: [testOption]},\r\n            };\r\n            const wrapper = mountComponentWithProps({...tablePropsMock, actionBar: true, predicates: [predicate]});\r\n            const tableConnected = wrapper.find(Table);\r\n            const predicateId = `${getTableChildComponentId(tableConnected.props().id, TableChildComponent.PREDICATE)}${\r\n                predicate.attributeName\r\n            }`;\r\n            store.dispatch(openDropdownSearch(predicateId));\r\n            wrapper.update();\r\n\r\n            tableConnected.props().onPredicateOptionClick(predicateId, testOption);\r\n\r\n            const dropdownSearch = _.findWhere(store.getState().dropdownSearch, {id: predicateId});\r\n\r\n            expect(dropdownSearch.isOpened).toBe(false);\r\n            expect(_.findWhere(dropdownSearch.options, {selected: true}).value).toBe(testOption.value);\r\n        });\r\n\r\n        it('should update the actions in the actionBar on onWillUpdate', () => {\r\n            const wrapper = mountComponentWithProps({...tablePropsMock, actionBar: true});\r\n            const tableConnected = wrapper.find(Table);\r\n\r\n            const actions = [\r\n                {\r\n                    enabled: true,\r\n                    name: 'action1',\r\n                    primary: true,\r\n                    icon: 'edit',\r\n                },\r\n                {\r\n                    enabled: true,\r\n                    name: 'action2',\r\n                    primary: true,\r\n                    icon: 'clear',\r\n                    grouped: true,\r\n                },\r\n            ];\r\n\r\n            expect(wrapper.find(PrimaryAction).length).toBe(0);\r\n            tableConnected.props().onWillUpdate(actions);\r\n            wrapper.update();\r\n            expect(wrapper.find(PrimaryAction).length).toBe(actions.length);\r\n        });\r\n\r\n        it('should keep the empty actionBar if the length of the new actions is empty', () => {\r\n            const wrapper = mountComponentWithProps({...tablePropsMock, actionBar: true});\r\n            const tableConnected = wrapper.find(Table);\r\n\r\n            expect(wrapper.find(PrimaryAction).length).toBe(0);\r\n            tableConnected.props().onWillUpdate([]);\r\n            wrapper.update();\r\n            expect(wrapper.find(PrimaryAction).length).toBe(0);\r\n        });\r\n\r\n        it('should call the manual thunk if it is passed as own props on onModifyData', () => {\r\n            const manualSpy = jasmine.createSpy('manualSpy').and.returnValue(_.noop);\r\n            const wrapper = mountComponentWithProps({...tablePropsMock, manual: manualSpy});\r\n            const tableConnected = wrapper.find(Table);\r\n\r\n            const shouldResetPage = true;\r\n            const tableComposite1 = tablePropsMock.tableCompositeState;\r\n            const tableComposite2 = tablePropsMock.tableCompositeState;\r\n            tableConnected.props().onModifyData(shouldResetPage, tableComposite1, tableComposite2);\r\n            expect(manualSpy).toHaveBeenCalledTimes(1);\r\n            expect(_.rest(manualSpy.calls.mostRecent().args)).toEqual([\r\n                shouldResetPage,\r\n                tableComposite1,\r\n                tableComposite2,\r\n            ]);\r\n        });\r\n\r\n        it('should call the default data modifier thunk if manual is not in ownProps on onModifyData', () => {\r\n            const wrapper = mountComponentWithProps({...tablePropsMockWithData});\r\n            const tableConnected = wrapper.find(Table);\r\n            const defaultTableStateModifierThunkSpy = spyOn(\r\n                TableDataModifier,\r\n                'defaultTableStateModifierThunk'\r\n            ).and.returnValue(_.noop);\r\n\r\n            const shouldResetPage = true;\r\n            const tableComposite1 = tablePropsMock.tableCompositeState;\r\n            tableConnected.props().onModifyData(shouldResetPage, tableComposite1);\r\n            expect(defaultTableStateModifierThunkSpy).toHaveBeenCalledTimes(1);\r\n            expect(_.rest(defaultTableStateModifierThunkSpy.calls.mostRecent().args)).toEqual([\r\n                shouldResetPage,\r\n                tableComposite1,\r\n            ]);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=853.bundle.js.map
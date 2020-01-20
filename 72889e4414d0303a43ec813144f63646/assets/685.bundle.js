(window.webpackJsonp=window.webpackJsonp||[]).push([[685],{1774:function(e,n,t){"use strict";t.r(n),n.default="import {shallow, ShallowWrapper} from 'enzyme';\r\nimport {shallowWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport * as InfiniteScroll from 'react-infinite-scroll-component';\r\n\r\nimport {getStoreMock} from '../../../../utils/tests/TestUtils';\r\nimport {IItemBoxProps} from '../../../itemBox/ItemBox';\r\nimport {ISelectProps} from '../../SelectConnected';\r\nimport {ISingleSelectOwnProps, SingleSelectConnected} from '../../SingleSelectConnected';\r\nimport {selectWithInfiniteScroll, SelectWithInfiniteScrollProps} from '../SelectWithInfiniteScroll';\r\n\r\ndescribe('SelectWithInfiniteScroll', () => {\r\n    const SingleSelectWithInfiniteScroll = selectWithInfiniteScroll(SingleSelectConnected);\r\n    const basicProps: ISingleSelectOwnProps & SelectWithInfiniteScrollProps = {\r\n        id: 'to-infinity-and-beyond',\r\n        next: () => [],\r\n        totalEntries: 0,\r\n    };\r\n\r\n    const items = [<span>1</span>, <span>2</span>, <span>3</span>];\r\n    const itemsProps: IItemBoxProps[] = [\r\n        {value: '1', displayValue: <span>1</span>},\r\n        {value: '2', displayValue: <span>2</span>},\r\n        {value: '3', displayValue: <span>3</span>},\r\n    ];\r\n\r\n    const renderInfiniteScroll = (\r\n        props: Partial<ISingleSelectOwnProps & SelectWithInfiniteScrollProps>\r\n    ): ShallowWrapper<InfiniteScroll.InfiniteScrollProps> => {\r\n        const component: ShallowWrapper<ISelectProps> = shallowWithStore(\r\n            <SingleSelectWithInfiniteScroll {...basicProps} {...props} />,\r\n            getStoreMock()\r\n        ).dive();\r\n\r\n        return shallow(<div>{component.prop('wrapItems')(items)}</div>);\r\n    };\r\n\r\n    it('should not throw when rendering and unmounting', () => {\r\n        expect(() => {\r\n            const component = shallowWithStore(\r\n                <SingleSelectWithInfiniteScroll {...basicProps} />,\r\n                getStoreMock()\r\n            ).dive();\r\n            component.unmount();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should wrap the items with an infinite scroll component', () => {\r\n        const component: ShallowWrapper<ISelectProps> = shallowWithStore(\r\n            <SingleSelectWithInfiniteScroll {...basicProps} />,\r\n            getStoreMock()\r\n        ).dive();\r\n\r\n        expect(component.prop('wrapItems')).toBeDefined();\r\n\r\n        const wrappedItems = shallow(<div>{component.prop('wrapItems')(items)}</div>);\r\n\r\n        expect(wrappedItems.find(InfiniteScroll).exists()).toBe(true);\r\n        expect(wrappedItems.find(InfiniteScroll).contains(items)).toBe(true);\r\n    });\r\n\r\n    it('should set hasMore prop to false on the infinite scroll component when the total number of items is less than the totalEntries prop', () => {\r\n        const wrappedItems = renderInfiniteScroll({totalEntries: 3, items: itemsProps});\r\n\r\n        expect(wrappedItems.find(InfiniteScroll).prop('hasMore')).toBe(false);\r\n    });\r\n\r\n    it('should set hasMore prop to true on the infinite scroll component when the total number of items is less than the totalEntries prop', () => {\r\n        const wrappedItems = renderInfiniteScroll({totalEntries: 4, items: itemsProps});\r\n\r\n        expect(wrappedItems.find(InfiniteScroll).prop('hasMore')).toBe(true);\r\n    });\r\n\r\n    it('should set dataLength prop to the number of items on the infinite scroll', () => {\r\n        const wrappedItems = renderInfiniteScroll({items: itemsProps});\r\n\r\n        expect(wrappedItems.find(InfiniteScroll).prop('dataLength')).toBe(itemsProps.length);\r\n    });\r\n\r\n    it('should call the next prop when the user scrolls to the bottom of the list', () => {\r\n        const nextSpy = jasmine.createSpy('next');\r\n        const wrappedItems = renderInfiniteScroll({items: itemsProps, next: nextSpy});\r\n\r\n        wrappedItems.find(InfiniteScroll).prop('next')();\r\n\r\n        expect(nextSpy).toHaveBeenCalledTimes(1);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=685.bundle.js.map
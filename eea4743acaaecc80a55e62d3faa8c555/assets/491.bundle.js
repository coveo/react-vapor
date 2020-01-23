(window.webpackJsonp=window.webpackJsonp||[]).push([[491],{1579:function(r,n,o){"use strict";o.r(n),n.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {\r\n    CornerRibbon,\r\n    DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME,\r\n    PlacementX,\r\n    PlacementY,\r\n} from '../../cornerRibbon/CornerRibbon';\r\nimport {\r\n    DEFAULT_LOGO_CARD_CLASSNAME,\r\n    DEFAULT_LOGO_ICON,\r\n    DEFAULT_LOGO_ICON_CLASSNAME,\r\n    DEFAULT_LOGO_ICON_SIZE,\r\n    ILogoCardProps,\r\n    LogoCard,\r\n} from '../LogoCard';\r\n\r\ndescribe('LogoCard', () => {\r\n    let logoCard: ReactWrapper<ILogoCardProps>;\r\n    const mountWithProps = (props: Partial<ILogoCardProps>) => {\r\n        logoCard = mount(<LogoCard {..._.defaults(props, {title: 'test card'})} />, {\r\n            attachTo: document.getElementById('App'),\r\n        });\r\n    };\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<LogoCard title=\"test card\" />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('Default <LogoCard />', () => {\r\n        const defaultLogoCardProps: Partial<ILogoCardProps> = {\r\n            onClick: jasmine.createSpy('onClick'),\r\n            title: 'some logocard title',\r\n        };\r\n\r\n        beforeEach(() => {\r\n            mountWithProps(defaultLogoCardProps);\r\n        });\r\n\r\n        it('should have the default logo-card class', () => {\r\n            expect(logoCard.html()).toContain(DEFAULT_LOGO_CARD_CLASSNAME);\r\n        });\r\n\r\n        it('should not have the ribbon-container class if no ribbon is used on the LogoCard', () => {\r\n            expect(logoCard.html()).not.toContain(DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME);\r\n        });\r\n\r\n        it('should render the specied title as props', () => {\r\n            expect(logoCard.find('.logo-card-title').text()).toEqual(defaultLogoCardProps.title);\r\n        });\r\n\r\n        it('should trigger the specified onClick prop if any', () => {\r\n            logoCard.simulate('click');\r\n\r\n            expect(defaultLogoCardProps.onClick).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should not render a corner-ribbon if no ribbon is set when not disabled', () => {\r\n            expect(logoCard.find('CornerRibbon').length).toBe(0);\r\n        });\r\n\r\n        it('should render no badges if no badges are specified as props', () => {\r\n            expect(logoCard.find('Badge').length).toBe(0);\r\n        });\r\n\r\n        it('should render the logo icon with the default icon class and size', () => {\r\n            expect(logoCard.find('Svg').hasClass(DEFAULT_LOGO_ICON_CLASSNAME)).toBe(true);\r\n            expect(logoCard.find('Svg').hasClass(DEFAULT_LOGO_ICON_SIZE)).toBe(true);\r\n        });\r\n\r\n        it('should have the default \"source-custom\" icon logo', () => {\r\n            expect(logoCard.props().svgName).toBeDefined();\r\n            expect(logoCard.props().svgName).toEqual(DEFAULT_LOGO_ICON);\r\n        });\r\n    });\r\n\r\n    describe('Disabled <LogoCard />', () => {\r\n        const disabledLogoCardProps: Partial<ILogoCardProps> = {\r\n            disabled: true,\r\n            onClick: jasmine.createSpy('onClick'),\r\n            ribbon: {\r\n                label: 'ribbonWhenEnabled',\r\n            },\r\n            disabledRibbon: {\r\n                label: 'ribbonWhenDisabled',\r\n            },\r\n        };\r\n\r\n        beforeEach(() => {\r\n            mountWithProps(disabledLogoCardProps);\r\n        });\r\n\r\n        it('should have the disabled class', () => {\r\n            expect(logoCard.html()).toContain('disabled');\r\n        });\r\n\r\n        it('should have the ribbon-container class', () => {\r\n            expect(logoCard.html()).toContain(DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME);\r\n        });\r\n\r\n        it('should not call onClick when clicking on the logoCard', () => {\r\n            logoCard.simulate('click');\r\n\r\n            expect(disabledLogoCardProps.onClick).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should render the disabled ribbon when a ribbon is already applied', () => {\r\n            expect(logoCard.find(CornerRibbon).text()).toBe(disabledLogoCardProps.disabledRibbon.label);\r\n        });\r\n    });\r\n\r\n    describe('<LogoCard /> with badges, description and ribbon', () => {\r\n        const thisLogoCardProps: Partial<ILogoCardProps> = {\r\n            badges: [\r\n                {\r\n                    label: 'badge 1',\r\n                },\r\n                {\r\n                    label: 'badge 2',\r\n                },\r\n            ],\r\n            ribbon: {\r\n                label: 'some-ribbon',\r\n                placementX: PlacementX.Right,\r\n                placementY: PlacementY.Bottom,\r\n                extraClasses: ['bold'],\r\n            },\r\n            description: 'some description',\r\n            extraContainerClasses: ['some-extra-class'],\r\n            svgName: 'source-rss',\r\n        };\r\n\r\n        beforeEach(() => {\r\n            mountWithProps(thisLogoCardProps);\r\n        });\r\n\r\n        it('should render as many badges as specified in the props if any', () => {\r\n            expect(logoCard.find('Badge').length).toBe(thisLogoCardProps.badges.length);\r\n        });\r\n\r\n        it('should render a ribbon as specified in the props if any', () => {\r\n            expect(logoCard.find(CornerRibbon).props()).toEqual(thisLogoCardProps.ribbon);\r\n        });\r\n\r\n        it('should render a description with ml1 class', () => {\r\n            const descriptionSpan = logoCard.find('span.ml1');\r\n\r\n            expect(descriptionSpan.length).toBeGreaterThan(0);\r\n            expect(descriptionSpan.text()).toBe(thisLogoCardProps.description);\r\n        });\r\n\r\n        it('should render extra container classes if specified as props', () => {\r\n            expect(logoCard.html()).toContain('some-extra-class');\r\n        });\r\n\r\n        it('should have the svgName specified as props', () => {\r\n            expect(logoCard.props().svgName).toBeDefined();\r\n            expect(logoCard.props().svgName).toEqual('source-rss');\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=491.bundle.js.map
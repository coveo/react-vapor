(window.webpackJsonp=window.webpackJsonp||[]).push([[743],{1832:function(r,s,n){"use strict";n.r(s),s.default="import * as VaporSVG from 'coveo-styleguide';\r\nimport * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport {extend, omit} from 'underscore';\r\nimport {camelize} from 'underscore.string';\r\n\r\nexport interface ISvgTagProps {\r\n    svgClass?: string;\r\n    svgName: string;\r\n}\r\n\r\nexport interface ISvgProps extends ISvgTagProps, React.HTMLAttributes<HTMLSpanElement> {}\r\n\r\nconst svgPropsToOmit = keys<ISvgTagProps>();\r\n\r\nexport class Svg extends React.Component<ISvgProps> {\r\n    static defaultProps: Partial<ISvgProps> = {\r\n        svgClass: '',\r\n    };\r\n\r\n    private setSvgClass(svgString: string, svgClass: string): string {\r\n        return svgString.replace('<svg ', `<svg class=\"${svgClass}\" `);\r\n    }\r\n\r\n    render() {\r\n        const formattedSvgName: string = camelize(this.props.svgName);\r\n        const svgString: string = VaporSVG.svg[formattedSvgName] && VaporSVG.svg[formattedSvgName].svgString;\r\n\r\n        // Omit Svg props to avoid warnings.\r\n        const svgSpanProps = extend({}, omit(this.props, svgPropsToOmit));\r\n\r\n        if (svgString) {\r\n            return (\r\n                <span\r\n                    {...svgSpanProps}\r\n                    dangerouslySetInnerHTML={{__html: this.setSvgClass(svgString, this.props.svgClass)}}\r\n                />\r\n            );\r\n        } else {\r\n            return (\r\n                <span {...svgSpanProps}>\r\n                    <svg className={this.props.svgClass} />\r\n                </span>\r\n            );\r\n        }\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=743.bundle.js.map
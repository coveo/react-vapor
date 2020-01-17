(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1361:function(r,o,e){"use strict";e.r(o),o.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {Color} from '../Color';\r\n\r\nexport class ColorExamples extends React.Component {\r\n    render() {\r\n        const VaporColors: {\r\n            [key: string]: string;\r\n            // tslint:disable-next-line\r\n        } = require('!sass-variable-loader?preserveVariableNames!coveo-styleguide/scss/common/palette.scss');\r\n        const colors = _.map(VaporColors, (value: string, color: string) =>\r\n            value === 'category' ? (\r\n                <tr className=\"bg-grey-2 no-hover\" key={color}>\r\n                    <td colSpan={3}>{color.toUpperCase().replace('-', ' ')}</td>\r\n                </tr>\r\n            ) : (\r\n                <tr className=\"no-hover\" key={color}>\r\n                    <td>\r\n                        <Color key={color} color={color} className=\"p2 material card\" />\r\n                    </td>\r\n                    <td>\r\n                        <p>{color}</p>\r\n                    </td>\r\n                    <td>{value.toUpperCase()}</td>\r\n                </tr>\r\n            )\r\n        );\r\n        return (\r\n            <div className=\"my2\">\r\n                <h1 className=\"text-medium-blue mb1 bold\">Colors</h1>\r\n                <table className=\"table mod-width-50 mod-border\">\r\n                    <thead className=\"\">\r\n                        <th>Sample</th>\r\n                        <th>Name</th>\r\n                        <th>Value</th>\r\n                    </thead>\r\n                    <tbody>{colors}</tbody>\r\n                </table>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=266.bundle.js.map
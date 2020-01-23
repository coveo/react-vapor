(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{1698:function(a,r,t){"use strict";t.r(r),r.default='import * as React from \'react\';\r\nimport {InfoBox} from \'../infoBox/InfoBox\';\r\nimport {InfoBoxLink} from \'../infoBox/InfoBoxLink\';\r\nimport {PartialStringMatch} from \'./PartialStringMatch\';\r\n\r\nexport class PartialStringMatchExamples extends React.Component<any, any> {\r\n    render() {\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">PartialStringMatch without match</label>\r\n                    <div className="text-dark-grey">\r\n                        <PartialStringMatch partialMatch="I do not match">I do not have a match</PartialStringMatch>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">PartialStringMatch with partial match undefined</label>\r\n                    <div className="text-dark-grey">\r\n                        <PartialStringMatch>\r\n                            I do not have a match because partialMatch was not passed as prop\r\n                        </PartialStringMatch>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">PartialStringMatch with partial match</label>\r\n                    <div className="text-dark-grey">\r\n                        <PartialStringMatch partialMatch="I match at the">I match at the beginning</PartialStringMatch>\r\n                    </div>\r\n                    <div className="text-dark-grey">\r\n                        <PartialStringMatch partialMatch="the end">I match at the end</PartialStringMatch>\r\n                    </div>\r\n                    <div className="text-dark-grey">\r\n                        <PartialStringMatch partialMatch="in the">I match in the middle</PartialStringMatch>\r\n                    </div>\r\n                    <div className="text-dark-grey">\r\n                        <PartialStringMatch partialMatch="match multiple">\r\n                            I match multiple times because I match multiple substrings\r\n                        </PartialStringMatch>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">\r\n                        PartialStringMatch with partial match (caseInsensitive)\r\n                    </label>\r\n                    <div className="text-dark-grey">\r\n                        <PartialStringMatch partialMatch={\'partial match\'.toUpperCase()} caseInsensitive>\r\n                            I match even if my partial match is in uppercase\r\n                        </PartialStringMatch>\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">PartialStringMatch with dangerous match</label>\r\n                    <div className="text-dark-grey">\r\n                        <PartialStringMatch\r\n                            wholeString=\'Hey <script>alert("I may be dangerous")<\/script>\'\r\n                            partialMatch={\'<script>alert("I may be dangerous")<\/script>\'}\r\n                        />\r\n                    </div>\r\n                </div>\r\n\r\n                <div className="form-group">\r\n                    <label className="form-control-label">PartialStringMatch with children</label>\r\n                    <div className="text-dark-grey">\r\n                        <PartialStringMatch key="a" partialMatch="o">\r\n                            <div>Hello</div>\r\n                            <br />\r\n                            <div>World</div>\r\n                        </PartialStringMatch>\r\n                        <PartialStringMatch key="b" caseInsensitive partialMatch={\'hello\'}>\r\n                            <div className="py2">\r\n                                <div className="my2">\r\n                                    Hello{\' \'}\r\n                                    <span>\r\n                                        is this working with deep structure? <span>(hello, still reading?)</span>\r\n                                    </span>\r\n                                </div>\r\n                                <InfoBox>\r\n                                    What about custom components? <InfoBoxLink>Can they contain hello?</InfoBoxLink>\r\n                                </InfoBox>\r\n                            </div>\r\n                        </PartialStringMatch>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=611.bundle.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1294:function(o,n,r){"use strict";r.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {Defaults} from '../../Defaults';\r\n\r\nimport {VaporColors} from '../color/Color';\r\nimport {DropPodPosition, IDropUIPosition} from '../drop/DomPositionCalculator';\r\nimport {DropPod} from '../drop/DropPod';\r\nimport {ChartTooltipContent} from './ChartTooltipContent';\r\nimport {XYChartContext, XYPoint} from './XYChart';\r\n\r\nexport interface ChartTooltipProps {\r\n    sort?: boolean;\r\n}\r\n\r\nexport const ChartTooltip: React.FunctionComponent<ChartTooltipProps> = ({sort = false}) => {\r\n    const {series, xScale, yScale, xDomain, yDomain, width, height} = React.useContext(XYChartContext);\r\n    const [position, setPosition] = React.useState({x: 0, y: 0, index: 0, position: '', pointX: null});\r\n    const dropRoot = React.useRef<any>(null);\r\n\r\n    const onMouseMove = (index: number, pointX: number, x: number) => {\r\n        const dropPodPosition: string = x < width / 2 ? DropPodPosition.right : DropPodPosition.left;\r\n        setPosition({x, y: height / 2, index, pointX, position: dropPodPosition});\r\n    };\r\n    const onMouseLeave = () => setPosition({...position, position: ''});\r\n\r\n    const barWidth =\r\n        series[0].data.length > 1\r\n            ? (xScale(xDomain[1]) - xScale(xDomain[0])) / series[0].data.length\r\n            : xScale(xDomain[0]);\r\n    const bars = series[0].data.map((point: XYPoint, index: number) => {\r\n        const x = xScale(point.x);\r\n        return (\r\n            <React.Fragment key={`chart-zone-${index}`}>\r\n                <rect\r\n                    fill=\"transparent\"\r\n                    width={barWidth / 2}\r\n                    height={yScale(yDomain[0])}\r\n                    x={x - barWidth / 2}\r\n                    y={yScale(yDomain[1])}\r\n                    onMouseMove={() => onMouseMove(index, point.x, x)}\r\n                    onMouseLeave={onMouseLeave}\r\n                />\r\n                <rect\r\n                    fill=\"transparent\"\r\n                    width={barWidth / 2}\r\n                    height={yScale(yDomain[0])}\r\n                    x={x}\r\n                    y={yScale(yDomain[1])}\r\n                    onMouseMove={() => onMouseMove(index, point.x, x)}\r\n                    onMouseLeave={onMouseLeave}\r\n                />\r\n            </React.Fragment>\r\n        );\r\n    });\r\n    return (\r\n        <g className=\"chart-tooltip-zones\">\r\n            {!!position.position && (\r\n                <rect\r\n                    className=\"chart-tooltip-line\"\r\n                    width={2}\r\n                    x={xScale(position.pointX) - 1}\r\n                    y={yScale(yDomain[1])}\r\n                    height={yScale(yDomain[0])}\r\n                    fill={VaporColors.orange}\r\n                />\r\n            )}\r\n            <circle cx={position.x} cy={position.y} r=\"1\" fill=\"transparent\" ref={dropRoot} />\r\n            <DropPod\r\n                ref={dropRoot}\r\n                isOpen={!!position.position}\r\n                positions={[position.position, DropPodPosition.left, DropPodPosition.right]}\r\n                parentSelector={Defaults.DROP_ROOT}\r\n                renderDrop={(\r\n                    style: React.CSSProperties,\r\n                    dropRef: React.RefObject<HTMLDivElement>,\r\n                    dropPosition: IDropUIPosition\r\n                ): React.ReactNode => (\r\n                    <div\r\n                        ref={dropRef}\r\n                        style={{...style, pointerEvents: 'none'}}\r\n                        className={classNames('show-on-top', {\r\n                            'ml-2': dropPosition.position === DropPodPosition.left,\r\n                            ml2: dropPosition.position === DropPodPosition.right,\r\n                        })}\r\n                    >\r\n                        <ChartTooltipContent x={position.index} sort={sort} />\r\n                    </div>\r\n                )}\r\n            />\r\n            {bars}\r\n        </g>\r\n    );\r\n};\r\nChartTooltip.displayName = 'ChartTooltip';\r\n"}}]);
//# sourceMappingURL=194.bundle.js.map
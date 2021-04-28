import {CurveFactoryLineOnly, curveLinear, line} from 'd3-shape';
import * as React from 'react';

import {XYChartContext, XYPoint, XYSerie} from './XYChart';

export interface LineSeriesProps {
    interpolate?: CurveFactoryLineOnly;
    strokeWith?: number;
}

export const LineSeries: React.FunctionComponent<LineSeriesProps> = ({
    interpolate = curveLinear,
    strokeWith = 2,
    children,
}) => {
    const {series, xScale, yScale, color, colorPattern} = React.useContext(XYChartContext);

    const l = line<XYPoint>()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y))
        .curve(interpolate);

    const lines = series.map((serie: XYSerie, i: number) => (
        <path
            key={`line-${i}`}
            fill="none"
            strokeWidth={strokeWith}
            stroke={color(i, colorPattern)}
            d={l(serie.data)}
        />
    ));

    return (
        <g className="line-series">
            {lines}
            {children}
        </g>
    );
};
LineSeries.displayName = 'LineSeries';

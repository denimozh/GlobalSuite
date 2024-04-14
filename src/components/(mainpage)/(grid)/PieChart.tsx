import { useMemo } from "react";
import * as d3 from "d3";

type DataItem = {
  id: number;
  name: string;
  value: number;
  color: string;
};
type PieChartProps = {
  width: number;
  height: number;
  data: DataItem[];
};

const MARGIN = 30;

const colors = ["#cc4e00", "#662700", "#993b00", "#000"];

export const PieChart = ({ width, height, data }: PieChartProps) => {
  const radius = Math.min(width, height) / 2 - MARGIN;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie<any, DataItem>().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcs = useMemo(() => {
    const arcPathGenerator = d3.arc();
    return pie.map((p) =>
      arcPathGenerator({
        innerRadius: 0,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      })
    );
  }, [radius, pie]);

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-4 pt-16">
        {data.map((datapoint) =>
          <div key={datapoint.id} className="flex flex-row gap-5">
            <div className={`flex flex-row ${datapoint.color} w-5 h-5 rounded-full`}/>
            <p className="text-black font-semibold">{datapoint.name}</p>
          </div>
        )}
      </div>
      <svg width={width} height={height} style={{ display: "inline-block" }} >
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {arcs.map((arc, i) => {
            return <path key={i} d={arc} fill={colors[i]} />;
          })}
        </g>
      </svg>
    </div>
  );
};

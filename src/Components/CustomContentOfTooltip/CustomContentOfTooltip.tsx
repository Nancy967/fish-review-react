import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

const data = [
  {
    name: "Arowana",
    review: 659,
  },
  {
    name: "Angelfish",
    review: 325,
  },
  {
    name: "Surgeonfish / Tang",
    review: 1462,
  },
  {
    name: "Foxface Rabbitfish",
    review: 231,
  },
  {
    name: "Goby",
    review: 748,
  },
  {
    name: "Damselfish",
    review: 3746,
  },
  {
    name: "Others",
    review: 162,
  },
];

const getIntroOfPage = (label: any) => {
  if (label === "Arowana") {
    return "龍";
  }
  if (label === "Angelfish") {
    return "神仙";
  }
  if (label === "Surgeonfish / Tang") {
    return "倒吊";
  }
  if (label === "Foxface Rabbitfish") {
    return "狐狸";
  }
  if (label === "Goby") {
    return "蝦虎";
  }
  if (label === "Damselfish") {
    return "雀鯛";
  }
  return "";
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload?.[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
      </div>
    );
  }

  return null;
};

const CustomContentOfTooltip = () => {
  return (
    <>
      <ResponsiveContainer width={"99%"} height={500}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip  />} />
          <Legend />
          <Bar dataKey="review" barSize={20} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default CustomContentOfTooltip;

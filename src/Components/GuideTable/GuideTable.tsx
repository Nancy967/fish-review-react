import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FishGuideTable } from "../../fish";
import { getGuideTable } from "../../api";
import Table from "../Table/Table";
import Spinner from "../Spinners/Spinner";

type Props = {};

const config = [
  {
    label: "Category",
    render: (fish: FishGuideTable) => fish.category,
  },
  {
    label: "Commom Name",
    render: (fish: FishGuideTable) => fish.commonName,
  },
  {
    label: "Size",
    render: (fish: FishGuideTable) => fish.size,
  },
  {
    label: "Lifespan",
    render: (fish: FishGuideTable) => fish.lifespan,
  },
];

const CashflowStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [guideTableData, setGuideTableData] = useState<FishGuideTable[]>();
  useEffect(() => {
    const getRatios = async () => {
      const result = await getGuideTable(ticker);
      setGuideTableData(result!.data);
    };
    getRatios();
  }, []);
  return guideTableData ? (
    <Table config={config} data={guideTableData}></Table>
  ) : (
    <Spinner />
  );
};

export default CashflowStatement;

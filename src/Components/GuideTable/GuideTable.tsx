import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FishOverview } from "../../fish";
import { fetchFishOverview } from "../../api";
import Table from "../Table/Table";
import Spinner from "../Spinners/Spinner";

type Props = {};

const config = [
  {
    label: "Category",
    render: (fish: FishOverview) => fish.category,
  },
  {
    label: "Commom Name",
    render: (fish: FishOverview) => fish.commonName,
  },
  {
    label: "Size",
    render: (fish: FishOverview) => fish.size,
  },
  {
    label: "Lifespan",
    render: (fish: FishOverview) => fish.lifespan,
  },
];

const CashflowStatement = (props: Props) => {
  const scientificName = useOutletContext<string>();
  const [guideTableData, setGuideTableData] = useState<FishOverview[]>();
  useEffect(() => {
    const getRatios = async () => {
      const result = await fetchFishOverview(scientificName);
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

import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyCashFlow } from "../../company";
import { getCashFlow } from "../../api";
import Table from "../Table/Table";
import Spinner from "../Spinners/Spinner";
import { formatLargeMonetaryNumber } from "../../Helpers/NumberFormatting";

type Props = {};

const config = [
  {
    label: "Category",
    render: (company: CompanyCashFlow) => company.category,
  },
  {
    label: "Commom Name",
    render: (company: CompanyCashFlow) => company.commonName,
  },
  {
    label: "Size",
    render: (company: CompanyCashFlow) => company.size,
  },
  {
    label: "Lifespan",
    render: (company: CompanyCashFlow) => company.lifespan,
  },
];

const CashflowStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [cashFlowData, setCashFlowData] = useState<CompanyCashFlow[]>();
  useEffect(() => {
    const getRatios = async () => {
      const result = await getCashFlow(ticker);
      setCashFlowData(result!.data);
    };
    getRatios();
  }, []);
  return cashFlowData ? (
    <Table config={config} data={cashFlowData}></Table>
  ) : (
    <Spinner />
  );
};

export default CashflowStatement;

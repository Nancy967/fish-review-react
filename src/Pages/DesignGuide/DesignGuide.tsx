import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { TestDataCompany } from "../../Components/Table/testData";
import { CompanyKeyMetrics } from "../../company";
import CashflowStatement from "../../Components/CashflowStatement/CashflowStatement";
import HistoricalDividend from "../../Components/HistoricalDividend/HistoricalDividend";

type Props = {};

const data = TestDataCompany;

const tableConfig = [
  {
    label: "symbol",
    render: (company: any) => company.symbol,
  },
];

const DesignGuide = (props: Props) => {
  return (
    <>
      <CashflowStatement />
      <HistoricalDividend />
    </>
  );
};

export default DesignGuide;

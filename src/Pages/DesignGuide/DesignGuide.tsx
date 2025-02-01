import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { TestDataCompany } from "../../Components/Table/testData";
import { CompanyKeyMetrics } from "../../company";
import HistoricalDividend from "../../Components/HistoricalDividend/HistoricalDividend";
import CashflowStatement from "../../Components/CashflowStatement/CashflowStatement";

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
      <HistoricalDividend />
      <CashflowStatement />
    </>
  );
};

export default DesignGuide;

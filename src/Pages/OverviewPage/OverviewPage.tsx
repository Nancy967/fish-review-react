import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { TestDataCompany } from "../../Components/Table/testData";
import CashflowStatement from "../../Components/GuideTable/GuideTable";
import CustomContentOfTooltip from "../../Components/CustomContentOfTooltip/CustomContentOfTooltip";

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
      <CustomContentOfTooltip />
      <CashflowStatement />
    </>
  );
};

export default DesignGuide;

import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import FishOverviewTable from "../../Components/FishOverviewTable/FishOverviewTable";
import CustomContentOfTooltip from "../../Components/CustomContentOfTooltip/CustomContentOfTooltip";

type Props = {};

const OverviewPage = (props: Props) => {
  return (
    <>
      <CustomContentOfTooltip />
      <FishOverviewTable />
    </>
  );
};

export default OverviewPage;

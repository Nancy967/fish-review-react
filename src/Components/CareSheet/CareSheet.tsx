import React, { useEffect, useState } from "react";
import { FishCareSheet } from "../../fish";
import { useOutletContext } from "react-router-dom";
import RatioList from "../RatioList/RatioList";
import { getBalanceSheet } from "../../api";
import Table from "../Table/Table";
import Spinner from "../Spinners/Spinner";
import {
  formatLargeMonetaryNumber,
  formatLargeNonMonetaryNumber,
} from "../../Helpers/NumberFormatting";

type Props = {};

const config = [
  {
    label: <div className="font-bold">pH</div>,
    render: (company: FishCareSheet) => company.ph,
    //   formatLargeMonetaryNumber(company.ph),
    subTitle: "水的酸鹼度",
  },
  {
    label: "Salinity",
    render: (company: FishCareSheet) => company.salinity,
  },
  {
    label: "Temperature",
    render: (company: FishCareSheet) => company.temperature,
  },
  {
    label: "Ammonia",
    render: (company: FishCareSheet) => company.ammonia,
  },
  {
    label: "Nitrite",
    render: (company: FishCareSheet) => company.nitrite,
  },
  {
    label: "Nitrate",
    render: (company: FishCareSheet) => company.nitrate,
  },
  {
    label: "Hardness",
    render: (company: FishCareSheet) => company.hardness,
  },
  {
    label: <div className="font-bold">Tank Size</div>,
    render: (company: FishCareSheet) => company.tankSize,
  },
  {
    label: "Diet",
    render: (company: FishCareSheet) => company.diet,
  },
  {
    label: "Compatibility",
    render: (company: FishCareSheet) => company.compatibility,
  },
];

const BalanceSheet = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<FishCareSheet>();
  useEffect(() => {
    const getCompanyData = async () => {
      const value = await getBalanceSheet(ticker!);
      setCompanyData(value?.data[0]);
    };
    getCompanyData();
  }, []);
  return (
    <>
      {companyData ? (
        <RatioList config={config} data={companyData} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default BalanceSheet;

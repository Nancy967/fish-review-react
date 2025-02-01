import React, { useEffect, useState } from "react";
import { CompanyBalanceSheet } from "../../company";
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
    render: (company: CompanyBalanceSheet) => company.ph,
    //   formatLargeMonetaryNumber(company.ph),
    subTitle: "水的酸鹼度",
  },
  {
    label: "Salinity",
    render: (company: CompanyBalanceSheet) => company.salinity,
  },
  {
    label: "Temperature",
    render: (company: CompanyBalanceSheet) => company.temperature,
  },
  {
    label: "Ammonia",
    render: (company: CompanyBalanceSheet) => company.ammonia,
  },
  {
    label: "Nitrite",
    render: (company: CompanyBalanceSheet) => company.nitrite,
  },
  {
    label: "Nitrate",
    render: (company: CompanyBalanceSheet) => company.nitrate,
  },
  {
    label: "Hardness",
    render: (company: CompanyBalanceSheet) => company.hardness,
  },
  {
    label: <div className="font-bold">Tank Size</div>,
    render: (company: CompanyBalanceSheet) => company.tankSize,
  },
  {
    label: "Diet",
    render: (company: CompanyBalanceSheet) => company.diet,
  },
  {
    label: "Compatibility",
    render: (company: CompanyBalanceSheet) => company.compatibility,
  },
];

const BalanceSheet = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyBalanceSheet>();
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

import React, { useEffect, useState } from "react";
import { FishCareGuide } from "../../fish";
import { useOutletContext } from "react-router-dom";
import RatioList from "../RatioList/RatioList";
import { getFishCareGuide } from "../../api";
import Table from "../Table/Table";
import Spinner from "../Spinners/Spinner";

type Props = {};

const config = [
  {
    label: <div className="font-bold">Optimal PH</div>,
    render: (fish: FishCareGuide) => fish.optimalPH,
    subTitle: "水的酸鹼度",
  },
  {
    label: "Optimal Salinity",
    render: (fish: FishCareGuide) => fish.optimalSalinity,
  },
  {
    label: "Optimal Temperature",
    render: (fish: FishCareGuide) => fish.optimalTemperature,
  },
  {
    label: "Max Ammonia",
    render: (fish: FishCareGuide) => fish.maxAmmonia,
  },
  {
    label: "Max Nitrite",
    render: (fish: FishCareGuide) => fish.maxNitrite,
  },
  {
    label: "Max Nitrate",
    render: (fish: FishCareGuide) => fish.maxNitrate,
  },
  {
    label: "Water Hardness",
    render: (fish: FishCareGuide) => fish.waterHardness,
  },
  {
    label: <div className="font-bold">Recommended Tank Size</div>,
    render: (fish: FishCareGuide) => fish.recommendedTankSize,
  },
  {
    label: "Diet",
    render: (fish: FishCareGuide) => fish.diet,
  },
  {
    label: "Compatibility",
    render: (fish: FishCareGuide) => fish.compatibility,
  },
];

const CareGuide = (props: Props) => {
  const scientificName = useOutletContext<string>();
  const [fishData, setFishData] = useState<FishCareGuide>();
  useEffect(() => {
    const getFishData = async () => {
      const value = await getFishCareGuide(scientificName!);
      setFishData(value?.data[0]);
    };
    getFishData();
  }, []);
  return (
    <>
      {fishData ? (
        <RatioList config={config} data={fishData} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CareGuide;

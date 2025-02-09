import React, { useEffect, useState } from "react";
import { FishInfo } from "../../fish";
import { Link, useParams } from "react-router-dom";
import { getFishInfo } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import FishDashboard from "../../Components/FishDashboard/FishDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinners/Spinner";
import CompFinder from "../../Components/RelatedFishList/RelatedFishList";
import TenKFinder from "../../Components/ResourceFishLink/ResourceFishLink";

interface Props {}

const FishPage = (props: Props) => {
  let { scientificName } = useParams();

  const [fish, setFish] = useState<FishInfo>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getFishInfo(scientificName!);
      setFish(result?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {fish ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <FishDashboard scientificName={scientificName!}>
            <Tile title="Common Name" subTitle={fish.commonName} />
            <Tile title="Category" subTitle={fish.category} />
            <Tile title="Size" subTitle={fish.size} />
            <Tile title="Lifespan" subTitle={fish.lifespan} />
            <CompFinder scientificName={fish.scientificName} />
            <TenKFinder scientificName={fish.scientificName} />
            <p className="bg-white shadow rounded text-medium font-medium text-gray-900 p-3 mt-1 m-4">
              {fish.description}
            </p>
          </FishDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default FishPage;

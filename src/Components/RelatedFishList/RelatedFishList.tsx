import React, { useEffect, useState } from "react";
import RelatedFishItem from "./RelatedFishItem/RelatedFishItem";
import { FishRelatedData } from "../../fish";
import { getRelatedData } from "../../api";
import Spinner from "../Spinners/Spinner";
type Props = {
  scientificName: string;
};

const RelatedFishList = ({ scientificName }: Props) => {
  const [fishData, setFishData] = useState<FishRelatedData>();
  useEffect(() => {
    const getRelatedFishes = async () => {
      const value = await getRelatedData(scientificName);
      setFishData(value?.data[0]);
    };
    getRelatedFishes();
  }, [scientificName]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
      {fishData ? (
        fishData?.relatedSpecies.map((relatedFish) => {
          return <RelatedFishItem relatedFish={relatedFish} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default RelatedFishList;

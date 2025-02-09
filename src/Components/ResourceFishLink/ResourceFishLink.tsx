import React, { useEffect, useState } from "react";
import { FishResourceLink } from "../../fish";
import { getResourceLinks } from "../../api";
import ResourceFishLinkItem from "./ResourceFishLinkItem/ResourceFishLinkItem";
import Spinner from "../Spinners/Spinner";

type Props = {
  scientificName: string;
};

const ResourceFishLink = ({ scientificName }: Props) => {
  const [fishData, setFishData] = useState<FishResourceLink[]>();
  useEffect(() => {
    const getFishResourceLinks = async () => {
      const value = await getResourceLinks(scientificName);
      setFishData(value?.data);
    };
    getFishResourceLinks();
  }, [scientificName]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
      {fishData ? (
        fishData?.slice(0, 5).map((data) => {
          return <ResourceFishLinkItem data={data} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ResourceFishLink;

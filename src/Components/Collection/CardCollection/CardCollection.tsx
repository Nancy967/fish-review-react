import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import DeleteCollection from "../DeleteCollection/DeleteCollection";
import { CollectionGet } from "../../../Models/Collection";

interface Props {
  collectionValue: CollectionGet;
  onCollectionDelete: (e: SyntheticEvent) => void;
}

const CardCollection = ({ collectionValue, onCollectionDelete }: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link
        to={`/fish/${collectionValue.scientificName}/fish-info`}
        className="pt-6 text-xl font-bold"
      >
        {collectionValue.commonName}
      </Link>
      <DeleteCollection
        collectionValue={collectionValue.scientificName}
        onCollectionDelete={onCollectionDelete}
      />
    </div>
  );
};

export default CardCollection;

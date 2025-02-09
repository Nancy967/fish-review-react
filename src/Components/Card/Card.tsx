import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { FishSearch } from "../../fish";
import AddCollection from "../Collection/AddCollection/AddCollection";

interface Props {
  id: string;
  searchResult: FishSearch;
  onCollectionCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onCollectionCreate,
}: Props): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <Link
        to={`/fish/${searchResult.scientificName}/fish-info`}
        className="font-bold text-center text-veryDarkViolet md:text-left"
      >
        {searchResult.commonName} ({searchResult.scientificName})
      </Link>
      <p className="text-veryDarkBlue">{searchResult.category}</p>
      <AddCollection
        onCollectionCreate={onCollectionCreate}
        scientificName={searchResult.scientificName}
      />
    </div>
  );
};

export default Card;

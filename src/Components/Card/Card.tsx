import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { FishSearch } from "../../fish";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: FishSearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <Link
        to={`/fish/${searchResult.scientificName}/fish-profile`}
        className="font-bold text-center text-veryDarkViolet md:text-left"
      >
        {searchResult.commonName} ({searchResult.scientificName})
      </Link>
      <p className="text-veryDarkBlue">{searchResult.category}</p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.scientificName}
      />
    </div>
  );
};

export default Card;

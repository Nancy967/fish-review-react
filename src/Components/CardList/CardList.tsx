import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { FishSearchResult } from "../../fish";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: FishSearchResult[];
  onCollectionCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({
  searchResults,
  onCollectionCreate,
}: Props): JSX.Element => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card
              id={result.scientificName}
              key={uuidv4()}
              searchResult={result}
              onCollectionCreate={onCollectionCreate}
            />
          );
        })
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </div>
  );
};

export default CardList;

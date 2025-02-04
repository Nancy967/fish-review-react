import React, { SyntheticEvent } from "react";
import CardCollection from "../CardCollection/CardCollection";
import { CollectionGet } from "../../../Models/Collection";

interface Props {
  collectionValues: CollectionGet[];
  onCollectionDelete: (e: SyntheticEvent) => void;
}

const ListCollection = ({ collectionValues, onCollectionDelete }: Props) => {
  return (
    <section id="collection">
      <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
        My Collection
      </h2>
      <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
        <>
          {collectionValues.length > 0 ? (
            collectionValues.map((collectionValue) => {
              return (
                <CardCollection
                  collectionValue={collectionValue}
                  onCollectionDelete={onCollectionDelete}
                />
              );
            })
          ) : (
            <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
              Your collection is empty.
            </h3>
          )}
        </>
      </div>
    </section>
  );
};

export default ListCollection;

import React, { SyntheticEvent } from "react";

interface Props {
  onCollectionDelete: (e: SyntheticEvent) => void;
  collectionValue: string;
}

const DeleteCollection = ({ onCollectionDelete, collectionValue }: Props) => {
  return (
    <div>
      <form onSubmit={onCollectionDelete}>
        <input hidden={true} value={collectionValue} />
        <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
      </form>
    </div>
  );
};

export default DeleteCollection;

import React from "react";
import { ReviewGet } from "../../Models/Review";

type Props = {
  Review: ReviewGet;
};

const FishReviewListItem = ({ Review }: Props) => {
  return (
    <div className="relative grid grid-cols-1 gap-4 ml-4 p-4 mb-8 w-full border rounded-lg bg-white shadow-lg">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
              {Review.title}
            </p>
          </div>
          <p className="text-dark text-sm">@{Review.createdBy}</p>
        </div>
      </div>
      <p className="-mt-4 text-gray-500">{Review.content}</p>
    </div>
  );
};

export default FishReviewListItem;

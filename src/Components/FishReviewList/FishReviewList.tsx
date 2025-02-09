import React from "react";
import { ReviewGet } from "../../Models/Review";
import FishReviewListItem from "../FishReviewListItem/FishReviewListItem";

type Props = {
  reviews: ReviewGet[];
};

const FishReviewList = ({ reviews }: Props) => {
  return (
    <>
      {reviews
        ? reviews.map((Review) => {
            return <FishReviewListItem Review={Review} />;
          })
        : ""}
    </>
  );
};

export default FishReviewList;

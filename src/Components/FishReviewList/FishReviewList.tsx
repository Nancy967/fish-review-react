import React from "react";
import { ReviewGet } from "../../Models/Review";
import StockReviewListItem from "../FishReviewListItem/FishReviewListItem";

type Props = {
  reviews: ReviewGet[];
};

const StockReviewList = ({ reviews }: Props) => {
  return (
    <>
      {reviews
        ? reviews.map((Review) => {
            return <StockReviewListItem Review={Review} />;
          })
        : ""}
    </>
  );
};

export default StockReviewList;

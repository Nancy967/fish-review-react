import React, { useEffect, useState } from "react";
import FishReviewForm from "./FishReviewForm/FishReviewForm";
import { reviewGetAPI, reviewPostAPI } from "../../Services/ReviewService";
import { toast } from "react-toastify";
import { ReviewGet } from "../../Models/Review";
import Spinner from "../Spinners/Spinner";
import FishReviewList from "../FishReviewList/FishReviewList";

type Props = {
  scientificName: string;
};

type ReviewFormInputs = {
  title: string;
  content: string;
};

const FishReview = ({ scientificName }: Props) => {
  const [reviews, setReview] = useState<ReviewGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getReviews();
  }, []);

  const handleReview = (e: ReviewFormInputs) => {
    reviewPostAPI(e.title, e.content, scientificName)
      .then((res) => {
        if (res) {
          toast.success("Review created successfully!");
          getReviews();
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };

  const getReviews = () => {
    setLoading(true);
    reviewGetAPI(scientificName).then((res) => {
      setLoading(false);
      setReview(res?.data!);
    });
  };
  return (
    <div className="flex flex-col">
      {loading ? <Spinner /> : <FishReviewList reviews={reviews!} />}
      <FishReviewForm
        scientificName={scientificName}
        handleReview={handleReview}
      />
    </div>
  );
};

export default FishReview;

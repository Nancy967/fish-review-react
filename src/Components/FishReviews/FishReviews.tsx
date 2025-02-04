import { useOutletContext } from "react-router-dom";
import FishReview from "../FishReview/FishReview";

type Props = {};

const FishReviews = (props: Props) => {
  const scientificName = useOutletContext<string>();
  return (
    <>
      <FishReview scientificName={scientificName} />
    </>
  );
};

export default FishReviews;

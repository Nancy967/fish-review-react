import { useOutletContext } from "react-router-dom";
import StockComment from "../StockComment/StockComment";

type Props = {};

const FishReviews = (props: Props) => {
  const ticker = useOutletContext<string>();
  return (
    <>
      <StockComment stockSymbol={ticker} />
    </>
  );
};

export default FishReviews;

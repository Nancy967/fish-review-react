import axios from "axios";
import { CommentGet, CommentPost } from "../Models/Comment";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:5167/api/comment/";

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const data = await axios.post<CommentPost>(api + `${symbol}`, {
      title: title,
      content: content,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const commentGetAPI = async (symbol: string) => {
  try {
    // const data = await axios.get<CommentGet[]>(api + `?Symbol=${symbol}`);
    const data = {
      data: [
        {
          title: "Great Post!",
          content:
            "I really enjoyed reading your post about the new tech trends. Very insightful and well-researched.",
          createdBy: "User123",
        },
        {
          title: "Interesting Insights",
          content:
            "Your analysis of the market dynamics was spot on. Looking forward to reading more posts like this.",
          createdBy: "User456",
        },
      ],
    };
    return data;
  } catch (error) {
    handleError(error);
  }
};

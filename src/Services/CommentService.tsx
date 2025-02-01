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
          title: "活潑有趣的水族箱明星",
          content:
            "公子小丑魚以其鮮艷的顏色和活潑的性格成為水族箱中的焦點。牠們的社交性很強，總是會與其他魚類互動，特別是與海葵共生的模樣，讓人感到非常有趣。對於新手來說，這是很好的選擇，因為牠們的照護需求相對簡單，只要保持穩定的水質和適當的餵食，就能看到牠們快樂地生活。",
          createdBy: "User123",
        },
        {
          title: "與海葵共生的美麗小魚",
          content:
            "公子小丑魚和海葵之間的共生關係真的是大自然中的奇蹟。小丑魚不僅能在海葵的觸手間安全庇護，還能幫助海葵清潔。這種關係讓小丑魚更顯得獨特。儘管牠們相對不需要太複雜的照護，但為了提供牠們一個舒適的環境，建議提供一個適合的小型海葵或岩石隱蔽處，讓牠們感到更安心。",
          createdBy: "User456",
        },
      ],
    };
    return data;
  } catch (error) {
    handleError(error);
  }
};

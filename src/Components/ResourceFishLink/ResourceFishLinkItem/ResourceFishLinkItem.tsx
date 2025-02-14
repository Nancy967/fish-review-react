import React from "react";
import { Link } from "react-router-dom";
import { FishResourceLink } from "../../../fish";

type Props = {
  data: FishResourceLink;
};

const ResourceFishLinkItem = ({ data }: Props) => {
  return (
    <Link
      reloadDocument
      to={data.url}
      target="_blank"
      type="button"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-neonOrange border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
    >
      {data.title || "參考連結"}
    </Link>
  );
};

export default ResourceFishLinkItem;

import React, { useState, ChangeEvent, SyntheticEvent, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { FishSearch } from "../../fish";
import { searchFishes } from "../../api";
import Search from "../../Components/Search/Search";
import ListCollection from "../../Components/Collection/ListCollection/ListCollection";
import CardList from "../../Components/CardList/CardList";
import { CollectionGet } from "../../Models/Collection";
import {
  collectionAddAPI,
  collectionDeleteAPI,
  collectionGetAPI,
} from "../../Services/CollectionService";
import { toast } from "react-toastify";
import SearchDropdown from "../../Components/SearchDropdown/SearchDropdown";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [collectionValues, setCollectionValues] = useState<CollectionGet[] | null>(
    []
  );
  const [searchResult, setSearchResult] = useState<FishSearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    getCollection();
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearch(e.target.value);
  };

  const categoryList = ["雀鯛"];

  const getCollection = () => {
    collectionGetAPI()
      .then((res) => {
        if (res?.data) {
          setCollectionValues(res?.data);
        }
      })
      .catch((e) => {
        setCollectionValues(null);
      });
  };

  const onCollectionCreate = (e: any) => {
    e.preventDefault();
    collectionAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 204) {
          toast.success("Fish added to collection!");
          getCollection();
        }
      })
      .catch((e) => {
        toast.warning("Could not add fish to collection!");
      });
  };

  const onCollectionDelete = (e: any) => {
    e.preventDefault();
    collectionDeleteAPI(e.target[0].value).then((res) => {
      if (res?.status == 200) {
        toast.success("Collection deleted from collection!");
        getCollection();
      }
    });
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchFishes(search);
    //setServerError(result.data);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };
  return (
    <>
      {/* <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      /> */}
      <SearchDropdown
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
        categoryList={categoryList}
      />
      <ListCollection
        collectionValues={collectionValues!}
        onCollectionDelete={onCollectionDelete}
      />
      <CardList
        searchResults={searchResult}
        onCollectionCreate={onCollectionCreate}
      />
      {serverError && <div>Unable to connect to API</div>}
    </>
  );
};

export default SearchPage;

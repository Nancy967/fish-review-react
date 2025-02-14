import React, { ChangeEvent, useState, SyntheticEvent, FormEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  categoryList: any;
}

const SearchDropdown: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
  categoryList,
}: Props): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleSearchChange(e); // 呼叫傳入的 handleSearchChange
    onSearchSubmit(e); // 當選擇選項時直接觸發提交
  };

  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <select
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-select"
            value={search}
            onChange={handleChange} //  onChange 觸發提交
          >
            <option value="">請選擇類別</option>
            {categoryList.map((category: any) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </form>
      </div>
    </section>
  );
};

export default SearchDropdown;

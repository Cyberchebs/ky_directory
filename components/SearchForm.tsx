import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search, SearchIcon } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="search startups"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn">
          <SearchIcon className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;

"use client";
import React, { useEffect, useState, useRef } from "react";
import SearchResults from "./SearchResults";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { TAnime } from "@/lib/animeTypes";

function SearchBar() {
  const [title, SetTitle] = useState<string>();
  const [data, setData] = useState<TAnime[]>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const fetchData = async () => {
    const url = `https://api.jikan.moe/v4/anime?q=${title}`;
    const response = await fetch(url);
    const animeData = await response.json();
    setData(animeData.data);
    setShowResults(true);
  };

  useEffect(() => {
    if (title) {
      const delayDebounceFn = setTimeout(() => {
        fetchData();
      }, 600);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [title]);

  const [showResults, setShowResults] = useState(false);
  const searchBarRef = useRef<any>();

  useEffect(() => {
    let handler = (e: any) => {
      if (!searchBarRef.current?.contains(e.target)) {
        setShowResults(false);
      }
    };
    window.addEventListener("mousedown", handler);
  });

  return (
    <div ref={searchBarRef} className="relative">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="relative border-2 p-2 outline-none rounded-sm"
          autoComplete="off"
          type="text"
          name="name"
          placeholder="search..."
          onChange={(e) => SetTitle(e.target.value)}
        />
        <Button
          variant={"ghost"}
          className="absolute right-[0px] top-1/2 -translate-y-1/2 rounded-none"
          onClick={fetchData}
        >
          <Search className="h-5 w-5" />
        </Button>
      </form>
      {showResults && (
        <div className="shadow-xl rounded-b-sm absolute left-0 top-10 max-h-[300px] overflow-y-scroll bg-white dark:bg-black">
          <SearchResults data={data!} />
        </div>
      )}
    </div>
  );
}

export default SearchBar;

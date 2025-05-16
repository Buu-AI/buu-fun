"use client";
import React, { useCallback, useEffect } from "react";
import { Button } from "../ui/button";
import { useWordSuggestions } from "@/hooks/use-datamuse";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { addWords } from "@/lib/redux/features/chat";

export default function SuggestionBar() {
  const search = useAppSelector((state) => state.chat.inputQuery);
  const words = search.split(" ");
  const currentWord = words[words.length - 1];
  const dispatch = useAppDispatch();

  const { data: suggestions } = useWordSuggestions(currentWord, {
    // This is just for DataMus not for react-query!
    maxResults: 3,
    refetchOnWindowFocus: false,
  });
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // If user hits Tab key then there is suggestion then
      // select the suggestion and replace it or else tab acts as normal
      if (event.key === "Tab" && suggestions && suggestions?.length > 0) {
        event.preventDefault();
        dispatch(addWords(suggestions[0].word));
      }
    },
    [suggestions, dispatch],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="hidden h-[42px] md:flex gap-2 items-center max-w-sm overflow-hidden">
      {suggestions?.map((item, index) => (
        <Button
          onClick={() => {
            dispatch(addWords(item.word));
          }}
          key={`-${item.word}${item.score}-${index}`}
          variant={"outline"}
          className="rounded-xl"
        >
          {item.word}
        </Button>
      ))}
    </div>
  );
}

"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useWordSuggestions } from "@/hooks/use-datamuse";
import { addWords } from "@/lib/redux/features/chat";
import { useCallback, useEffect } from "react";
import { Button } from "../ui/button";

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
    <div className="hidden h-[45px] md:flex gap-2 items-center  overflow-x-scroll max-w-xs scrollbar-w-hidden rounded-2xl overflow-hidden">
      {suggestions?.map((item, index) => (
        <Button
          onClick={() => {
            dispatch(addWords(item.word));
          }}
          key={`-${item.word}${item.score}-${index}`}
          variant={"special"}
          className="rounded-xl h-[45px]"
        >
          {item.word}
        </Button>
      ))}
    </div>
  );
}

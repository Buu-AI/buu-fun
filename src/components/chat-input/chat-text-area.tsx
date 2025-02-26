"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setInputQuery } from "@/lib/redux/features/chat";
import { useEffect, useRef } from "react";

export default function ChatTextArea() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const value = useAppSelector((state) => state.chat.inputQuery);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const adjustHeight = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        // Reset height to avoid continuous growth
        textarea.style.height = "auto";
        // Set new height based on scrollHeight
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    };
    // Add event listener to the textarea
    const textarea = textareaRef.current;
    textarea?.addEventListener("input", adjustHeight);
    return () => {
      textarea?.removeEventListener("input", adjustHeight);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Allow new lines with Shift+Enter
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      // Let the form's onSubmit handle the submission
      const form = e.currentTarget.closest("form");
      if (form) {
        form.requestSubmit();
      }
    }
  };

  return (
    <textarea
      rows={2}
      ref={textareaRef}
      onKeyDown={handleKeyDown}
      value={value}
      onChange={(e) => {
        const value = e.target.value;
        dispatch(setInputQuery(value));
      }}
      placeholder="What do you want to see..."
      className="w-full  py-2  max-h-[200px] scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-orange scrollbar-thumb-rounded  bg-transparent rounded-md resize-none text-base placeholder:text-muted-foreground/40 focus:outline-none scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100"
    />
  );
}

"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setInputQuery } from "@/lib/redux/features/chat";
import { useEffect, useRef } from "react";

export default function ChatTextArea({
  isChatLoading,
}: {
  isChatLoading: boolean;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const value = useAppSelector((state) => state.chat.inputQuery);
  const isImage = useAppSelector((state) => state.chat.inputFile?.url);
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
    const handleFocus = () => {
      setTimeout(() => {
        if (window.screen.width > 680) return;
        if (textareaRef.current) {
          textareaRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "end",
          });
        }
      }, 500);
    };

    const handleFocusOut = () => {
      setTimeout(() => {
        if (window.screen.width > 680) return;
        // Scroll to bottom of the page
        if (textareaRef.current) {
          textareaRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "end",
          });
        }
      }, 500);
    };

    const textarea = textareaRef.current;

    textarea?.addEventListener("input", adjustHeight);
    textarea?.addEventListener("focusin", handleFocus);

    textarea?.addEventListener("focusout", handleFocusOut);
    return () => {
      textarea?.removeEventListener("input", adjustHeight);
      textarea?.removeEventListener("focusin", handleFocus);
      textarea?.removeEventListener("focusout", handleFocusOut);
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
      disabled={isImage?.length || isChatLoading ? true : false}
      onKeyDown={handleKeyDown}
      value={value}
      onChange={(e) => {
        const value = e.target.value;
        dispatch(setInputQuery(value));
      }}
      placeholder="What do you want to see..."
      className="w-full  py-1 md:py-2  max-h-[200px] scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-orange scrollbar-thumb-rounded  bg-transparent rounded-md resize-none text-base placeholder:text-muted-foreground/40 focus:outline-none scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100"
    />
  );
}

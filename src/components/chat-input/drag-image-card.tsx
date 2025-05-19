import { useAppDispatch } from "@/hooks/redux";
import { setInputFile } from "@/lib/redux/features/chat";
import { TImageData } from "@/lib/redux/features/chat-types";
import { cn, getAllowedContentTypeMaps } from "@/lib/utils";
import { nanoid } from "@reduxjs/toolkit";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

interface InteractiveDropzoneProps {
  onImageSelected?: (image: TImageData | null) => void;
  className?: string;
}

export default function InteractiveDropzone({
  className = "",
  onImageSelected,
}: InteractiveDropzoneProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const dispatch = useAppDispatch();

  // Configure dropzone to prevent default behavior
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    noClick: true,
    noKeyboard: true,
    preventDropOnDocument: false,
    onDrop: (acceptedFiles) => {
      handleImageDrop(acceptedFiles);
    },
  });

  const handleImageDrop = useCallback(
    (acceptedFiles: File[]) => {
      const files = acceptedFiles;
      for (const file of files) {
        if (!getAllowedContentTypeMaps(file.type)) {
          toast.error(`Image type ${file.type} is not supported yet`);
          return;
        }
        const imageUrl = URL.createObjectURL(file);
        const imageData = {
          id: nanoid(),
          url: imageUrl,
          name: file.name,
          size: file.size,
          type: file.type,
        };
        dispatch(setInputFile(imageData));
        onImageSelected?.(imageData);
      }
      setTimeout(() => {
        setIsDraggingOver(false);
        setRotation({ x: 0, y: 0 });
      }, 200);
    },
    [dispatch, onImageSelected, setIsDraggingOver, setRotation],
  );

  useEffect(() => {
    const handleWindowDragOver = (e: DragEvent) => {
      e.preventDefault();

      // Calculate rotation based on drag position relative to window
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Normalize coordinates to range [-1, 1]
      const normalizedX = (e.clientX / windowWidth - 0.5) * 20;
      const normalizedY = (e.clientY / windowHeight - 0.5) * 20;

      // Create a magnetic-like rotation effect
      const maxRotation = 10; // Maximum rotation angle
      const rotationFactor = 0.5; // Adjust for sensitivity
      setRotation({
        x: normalizedY * maxRotation * rotationFactor, // Invert Y for more natural movement
        y: normalizedX * maxRotation * rotationFactor,
      });

      // Check if dragged item is an image
      const items = e.dataTransfer?.items;
      if (
        items &&
        Array.from(items).some(
          (item) => item.kind === "file" && item.type.startsWith("image/"),
        )
      ) {
        setIsDraggingOver(true);
      }
    };

    const handleWindowDrop = (e: DragEvent) => {
      e.preventDefault();

      // Get the dropped files
      const files = e.dataTransfer?.files;
      if (files && files.length > 0) {
        const fileArray = Array.from(files);
        // Filter for images
        const imageFiles = fileArray.filter((file) =>
          file.type.startsWith("image/"),
        );

        if (imageFiles.length > 0) {
          handleImageDrop(imageFiles);
        }
      }

      setTimeout(() => {
        setIsDraggingOver(false);
        setRotation({ x: 0, y: 0 });
      }, 200);
    };

    const handleDragLeave = (e: DragEvent) => {
      // Only reset if leaving the document
      if (e.relatedTarget === null) {
        setTimeout(() => {
          setIsDraggingOver(false);
          setRotation({ x: 0, y: 0 });
        }, 200);
      }
    };

    // Add events to the document body to capture drags everywhere
    document.body.addEventListener("dragover", handleWindowDragOver);
    document.body.addEventListener("drop", handleWindowDrop);
    document.body.addEventListener("dragleave", handleDragLeave);

    return () => {
      document.body.removeEventListener("dragover", handleWindowDragOver);
      document.body.removeEventListener("drop", handleWindowDrop);
      document.body.removeEventListener("dragleave", handleDragLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleRemoveImage = (imageToRemove: TImageData) => {
  //   // Revoke the object URL to free up memory
  //   URL.revokeObjectURL(imageToRemove.url);
  //   onImageSelected?.(null);
  //   dispatch(removeImage(imageToRemove.id));
  // };

  const dropzoneVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <>
      <div {...getRootProps()} className="hidden ">
        <input {...getInputProps()} />
      </div>
      <AnimatePresence>
        {isDraggingOver && (
          <div
            style={{
              transformStyle: "preserve-3d",
              rotate: `${rotation.x}deg`,
            }}
            className="absolute  -left-[108px] hidden lg:block top-[10px]"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropzoneVariants}
              className={cn("z-50 pointer-events-auto", className)}
            >
              <div
                className={`
                  w-[77px] h-[106px] 
                  border-2 border-dashed 
                  border-blue-500 
                  rounded-lg 
                  bg-black/80 
                  backdrop-blur-sm
                  flex items-center justify-center
                `}
              >
                <p className="text-xs text-gray-500 text-center">Drop Image</p>
              </div>
            </motion.div>
          </div>
        )}

        {/* {!isDraggingOver && image && image.length
          ? image.map((item, index) => {
              if (index > 1) return null;
              return (
                <motion.div
                  initial={{
                    y: 700,
                    x: -120,
                    rotate: 0,
                  }}
                  animate={{
                    y: 0,
                    x: 0,
                    rotate: index > 0 ? "12deg" : "-12deg",
                    transition: { duration: 1, delay: index * 0.1 },
                  }}
                  exit={{
                    y: 700,
                    x: -120,
                    transition: { duration: 1 },
                  }}
                  key={item.id}
                  className={cn(
                    "absolute  -left-[108px] hidden lg:block top-[10px]  transform -rotate-12  border-buu  rounded-xl z-50 pointer-events-none w-[77px] h-[106px]",
                    { "-left-[88px] z-0 top-[5px] rotate-12": index > 0 }
                  )}
                >
                  <div className="relative w-full h-full group">
                    <Image
                      src={item.url}
                      alt="Uploaded image"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        handleRemoveImage(item);
                      }}
                      className={
                        "pointer-events-auto absolute top-1 right-1  bg-buu-destructive text-white  rounded-full animate-pulse w-5 h-5  flex items-center justify-center text-xs transition-opacity z-50"
                      }
                    >
                      ✕
                    </button>
                  </div>
                </motion.div>
              );
            })
          : null} */}
      </AnimatePresence>
    </>
  );
}

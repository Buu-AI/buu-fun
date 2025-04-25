import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setInputFile } from "@/lib/redux/features/chat";
import { cn, getAllowedContentTypeMaps } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

export interface ImageData {
  url: string;
  name: string;
  size: number;
  type: string;
}

interface InteractiveDropzoneProps {
  onImageSelected?: (image: ImageData | null) => void;
  className?: string;
}

export default function InteractiveDropzone({
  className = "",
  onImageSelected,
}: InteractiveDropzoneProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const image = useAppSelector((state) => state.chat.inputFile);

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
      const file = acceptedFiles[0];
      if (file) {
        if (!getAllowedContentTypeMaps(file.type)) {
          toast.error(`Image type ${file.type} is not supported yet`);
          return;
        }
        const imageUrl = URL.createObjectURL(file);
        const imageData = {
          url: imageUrl,
          name: file.name,
          size: file.size,
          type: file.type,
        };
        toast.success(`${imageUrl}`);
        console.log(imageUrl);
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
  const handleRemoveImage = () => {
    if (image) {
      // Revoke the object URL to free up memory
      URL.revokeObjectURL(image.url);
      onImageSelected?.(null);
      dispatch(setInputFile(null));
    }
  };

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
            className="absolute top-[-20px]"
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

        {!isDraggingOver && image && (
          <div
            className="
              absolute -left-[20px] top-[-20px]
              transform -rotate-12 
              border-buu border rounded-xl z-50 pointer-events-none
              w-[77px] h-[106px]
            "
          >
            <div className="relative w-full h-full group">
              <Image
                src={image.url}
                alt="Uploaded image"
                fill
                className="object-cover rounded-lg"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveImage();
                }}
                className="
                  pointer-events-auto
                  absolute top-1 right-1 
                  bg-red-500 text-white 
                  rounded-full animate-pulse
                  w-5 h-5 
                  flex items-center justify-center
                  text-xs
                  transition-opacity
                  z-50
                "
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

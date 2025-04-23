"use client";
import { useEffect } from "react";

export default function CratePopover() {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3";
    script.async = true;
    script.defer = true;

    // Track if component is mounted
    let isMounted = true;
    const timeoutIds: NodeJS.Timeout[] = [];

    script.onload = () => {
      // Only initialize if component is still mounted
      if (!isMounted || !window.Crate) return;

      // Initialize crate when the script is loaded
      const crate = new window.Crate({
        server: "1341182593453920296",
        channel: "1341182593453920299",
      });

      // Store crate instance on window for cleanup
      window.crateInstance = crate;

      // Define notifications with relative delays
      const notifications = [
        {
          content: "$2000 Game Jam is live!",
          delay: 3000,
          timeout: 10000, // Default timeout
        },
        {
          content: "Awesome! Can't wait!!",
          delay: 1200,
          timeout: 9400,
        },
        {
          content: "Who else is joining",
          delay: 1500,
          timeout: 8400,
        },
        {
          content: "I am ready for this",
          delay: 1400,
          timeout: 6400,
        },
        {
          content: "Me too",
          delay: 1700,
          timeout: 5400,
        },
      ];

      // Calculate absolute delay for each notification
      let cumulativeDelay = 0;
      notifications.forEach((notification) => {
        cumulativeDelay += notification.delay;

        // Create timeout and store its ID
        const timeoutId = setTimeout(() => {
          if (isMounted && window.crateInstance) {
            // For the first notification, content is directly a string
            if (typeof notification.content === "string") {
              window.crateInstance.notify(notification.content);
            } else {
              window.crateInstance.notify({
                content: notification.content,
                timeout: notification.timeout,
              });
            }
          }
        }, cumulativeDelay);

        timeoutIds.push(timeoutId);
      });
    };

    // Append script to document
    document.body.appendChild(script);

    // Cleanup on component unmount
    return () => {
      isMounted = false;

      // Clear all timeouts
      timeoutIds.forEach((id) => clearTimeout(id));

      // Remove script from document
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }

      // Clean up crate instance
      if (window.crateInstance) {
        // Check if there's a proper cleanup method in the Crate API
        if (typeof window.crateInstance.destroy === "function") {
          window.crateInstance.destroy();
        }

        // Remove the instance reference
        delete window.crateInstance;
      }
    };
  }, []);

  return null;
}

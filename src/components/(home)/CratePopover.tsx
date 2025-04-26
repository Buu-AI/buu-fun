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

      // Calculate realistic typing delay based on message length and typing speed
      const calculateTypingDelay = (message: string, wpm = 40) => {
        const wordsCount = message.split(/\s+/).length;
        const secondsPerWord = 60 / wpm;
        // Add some natural variance in typing speed (±20%)
        const variance = 0.2;
        const varianceFactor = 1 + (Math.random() * 2 - 1) * variance;

        // Base typing time plus small initial delay to simulate reading previous message
        return Math.max(
          500,
          wordsCount * secondsPerWord * 1000 * varianceFactor +
            Math.random() * 500
        );
      };

      // Add randomness to timing to make it feel more natural
      const randomizeTime = (baseTime: number, variance = 0.3) => {
        const variance_ms = baseTime * variance;
        return baseTime + Math.floor((Math.random() * 2 - 1) * variance_ms);
      };

      // Define user groups to simulate conversation between multiple people
      const users = [
        { name: "BUU", color: "#ff5555" },
        { name: "DevGamer42", color: "#55aaff" },
        { name: "PixelArtist", color: "#55ff55" },
        { name: "CodeWizard", color: "#aa55ff" },
        { name: "ArtDesigner", color: "#ffaa55" },
      ];

      // Define more realistic notifications with typing indicators
      const notifications = [
        {
          user: users[0],
          content: "$2000 Game Jam is live!",
          initialDelay: 6000, // First message after 6 seconds
          timeout: 20000,
        },
        {
          user: users[1],
          content: "Awesome! Can't wait!!",
          timeout: 4000,
          // Will calculate typing delay based on content
        },
        {
          user: users[2],
          content: "Who else is joining this time?",
          timeout: 4000,
          pauseAfter: 500, // Natural pause in conversation
        },
        {
          user: users[3],
          content: "I am ready for this. Got my tools prepared already.",
          timeout: 4000,
        },
        {
          user: users[4],
          content: "Me too! Looking forward to collaboration.",
          timeout: 1400,
        },
        {
          user: users[0],
          content: "Theme will be announced in Jam Announcement channel!",
          timeout: 2000,
          pauseAfter:2000, // Longer pause to group conversations
        },
        {
          user: users[1],
          content: "Hoping for something sci-fi themed",
          timeout: 2000,
        },
      ];

      // Calculate and schedule all notifications with typing indicators
      let cumulativeDelay = 0;

      notifications.forEach((notification, index) => {
        const isFirstMessage = index === 0;

        if (isFirstMessage) {
          cumulativeDelay = notification.initialDelay || 0;
        } else {
          // Add a reading delay - time to read the previous message
          const previousMessageLength = notifications[index - 1].content.length;
          const readingDelay = Math.min(1500, previousMessageLength * 15);

          // Add previous pause if specified
          const previousPause = notifications[index - 1].pauseAfter || 0;

          // Calculate typing delay based on current message length
          const typingDelay = calculateTypingDelay(notification.content);

          cumulativeDelay += readingDelay + previousPause + typingDelay;
        }

        // First show typing indicator
        const typingTimeoutId = setTimeout(() => {
          if (isMounted && window.crateInstance) {
            window.crateInstance.notify({
              content: `${notification.user.name} is typing...`,
              timeout: 2000,
              avatarURL: `https://ui-avatars.com/api/?name=${notification.user.name}&background=${notification.user.color.substring(1)}&color=fff`,
            });
          }
        }, cumulativeDelay - 2000); // Show typing indicator 2 seconds before message

        timeoutIds.push(typingTimeoutId);

        // Then show the actual message
        const messageTimeoutId = setTimeout(() => {
          if (isMounted && window.crateInstance) {
            window.crateInstance.notify({
              content: notification.content,
              timeout: notification.timeout,
              avatarURL: `https://ui-avatars.com/api/?name=${notification.user.name}&background=${notification.user.color.substring(1)}&color=fff`,
            });
          }
        }, cumulativeDelay);

        timeoutIds.push(messageTimeoutId);
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

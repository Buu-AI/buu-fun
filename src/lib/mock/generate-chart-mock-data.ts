export const generateMockData = (hours = 1) => {
  const data = [];
  const now = new Date();
  const basePrice = 0.00066;
  const priceVariance = 0.00005;

  // Generate data points for the specified number of hours
  // With intervals that create approximately 60 points total (for better timeline division)
  const totalPoints = 60; // We'll show approximately 60 data points regardless of time range
  const minutesPerPoint = (hours * 60) / totalPoints;
  const points = totalPoints;

  const startTime = new Date(now);
  startTime.setHours(now.getHours() - hours);

  // Set a controlled maximum volume that will scale well with the 150px constraint
  const volumeBase = 100;
  const volumeMax = 0.000020;

  for (let i = 0; i < points; i++) {
    const time = new Date(startTime);
    time.setMinutes(startTime.getMinutes() + i * minutesPerPoint);

    // Calculate a random price with some trend
    let priceChange = (Math.random() - 0.5) * priceVariance;
    // Add some trends to make the data look realistic
    if (i > 4) {
      // 70% chance the price follows the previous trend
      if (Math.random() < 0.7) {
        priceChange = priceChange * (data[i - 1].price > basePrice ? 1 : -1);
      }
    }

    const price = basePrice + priceChange * (i / 10);

    // Generate volume data with more differentiation but a fixed max
    // This creates variation without excessive heights
    let volume;

    if (i % 10 < 3) {
      // 30% chance of higher volume
      volume = volumeBase + Math.random() * (volumeMax - volumeBase);
    } else if (i % 10 < 8) {
      // 50% chance of medium volume
      volume = volumeBase + Math.random() * (volumeMax - volumeBase) * 0.6;
    } else {
      // 20% chance of lower volume
      volume = volumeBase + Math.random() * (volumeMax - volumeBase) * 0.3;
    }

    data.push({
      time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      price: parseFloat(price.toFixed(6)),
      volume: parseFloat(volume.toFixed(8)),
    });
  }

  return data;
};

export const getPositionByIndex = (index: number) => {
  switch (index) {
    case 0: {
      return { x: 0, y: -3.5, z: -2 };
      break;
    }
    case 1: {
      return { x: 6, y: -4, z: -10 };
      break;
    }
    case 2: {
      return { x: -4, y: -4.5, z: -5 };
      break;
    }
    case 3: {
      return { x: -6, y: -0, z: -5 };
      break;
    }
    case 4: {
      return { x: -5, y: 4, z: -3 };
      break;
    }
    case 5: {
      return { x: -5, y: 4, z: -10 };
      break;
    }
    case 6: {
      return { x: -0, y: 4.3, z: -3 };
      break;
    }
    case 7: {
      return { x: 5, y: 4, z: -3 };
      break;
    }
    case 8: {
      return { x: 7, y: -0, z: -5 };
      break;
    }
    case 9: {
      //   return { x: 6, y: -4, z: -3 };
      return { x: 6, y: -4.5, z: -5 };
      break;
    }
    case 10: {
      return { x: -8, y: 5, z: 8 };
      break;
    }
    case 10: {
      return { x: -0, y: 5, z: 8 };
      break;
    }
    default: {
      return {
        x: Math.random() * 100 * 0.1,
        y: Math.random() * 100 * 0.1,
        z: Math.random() * 100 * 2,
      };
      break;
    }
  }
};
export const getRotationByIndex = (index: number) => {
  switch (index) {
    case 0: {
      return { x: -0.2, y: 0, z: 0 };
    }
    case 1: {
      return { x: -0.5, y: -0.2, z: -0.4 };
    }
    case 2: {
      return { x: -0.5, y: 0.7, z: 0.7 };
    }
    case 3: {
      return { x: -0, y: 0, z: 0.7 };
    }
    case 4: {
      return { x: 0.5, y: -0.3, z: 0.5 };
    }
    case 5: {
      return { x: 0.2, y: -0.2, z: 0.5 };
    }
    case 6: {
      return { x: 0.8, y: 0, z: 0 };
    }
    case 7: {
      return { x: 0.5, y: 0.3, z: -0.5 };
    }
    case 8: {
      return { x: -0, y: 0, z: -0.7 };
    }
    case 9: {
      return { x: -0.2, y: -0.4, z: -0.4 };
    }
    default: {
      return {
        x: Math.random() * 100 * 0.1,
        y: Math.random() * 100 * 0.1,
        z: Math.random() * 100 * 0.1,
      };
    }
  }
};

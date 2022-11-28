// Daily Sleep Hours
const getSleepHours = (day) => {
    switch (day) {
      case "Sunday":
        return 6;
        break;
      case "Monday":
        return 5;
        break;
      case "Tuesday":
        return 4.5;
        break;
      case "Wednesday":
        return 6;
        break;
      case "Thursday":
        return 5.2;
        break;
      case "Friday":
        return 6.3;
        break;
      case "Saturday":
        return 3.5;
        break;
      default:
        return "No valid input found";
        break;
    }
  };
  
  // Sum of Daily Sleep Hours (Implicit Return)
  const getActualSleepHours = () =>
    getSleepHours("Sunday") +
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday");
  
  // Ideal Sleep Hours
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  // Sleep Debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log("Ideal sleep hours achieved. Congratulations!");
    }
  
    if (actualSleepHours > idealSleepHours) {
      console.log(
        "You slept " +
          (actualSleepHours - idealSleepHours) +
          " hours over your ideal sleep time. Watch it!"
      );
    }
  
    if (actualSleepHours < idealSleepHours) {
      console.log(
        "You slept " +
          (idealSleepHours - actualSleepHours) +
          " hour(s) under your ideal sleep time. Get more rest!"
      );
    }
  };
  
  calculateSleepDebt();
  
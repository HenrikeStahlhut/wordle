interface WinData {
  date: string;
  totalWins: number;
  wonToday: boolean;
}

// const winsStorage = localStorage.get(“whatever”) ?? []

// winsStorage.push(winToday)

// localStorage.set(“whatever”, winsStorage)

export const useLocalStorage = (key: string) => {
  const setItem = (value: { totalWins: number; wonToday: boolean }) => {
    try {
      const winsStorage = JSON.parse(window.localStorage.getItem(key) ?? "[]");
      const winData: WinData = {
        date: new Date().toISOString().split("T")[0],
        totalWins: value.totalWins + 1,
        wonToday: value.wonToday,
      };

      if (winsStorage.length >= 100) {
        winsStorage.shift(); // Remove oldest entry if json array gets too big
      }

      winsStorage.push(winData);
      window.localStorage.setItem(key, JSON.stringify(winsStorage));
    } catch (error) {
      console.log("Failed to save win data:", error);
    }
  };

  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) return [];

      const data: WinData[] = JSON.parse(item);
      const today = new Date().toISOString().split("T")[0];

      // Reset wonToday if it's a new day
      if (data.length > 0) {
        const lastEntry = data[data.length - 1];
        if (lastEntry.date !== today) {
          lastEntry.wonToday = false;
          lastEntry.date = today;
          window.localStorage.setItem(key, JSON.stringify(data));
        }
      }
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return { setItem, getItem, removeItem };
};

interface WinData {
  date: string;
  totalWins: number;
  wonToday: boolean;
}

export const useLocalStorage = (key: string) => {
  const setItem = (value: { totalWins: number; wonToday: boolean }) => {
    try {
      const winData: WinData = {
        date: new Date().toISOString().split("T")[0], // Format: YYYY-MM-DD
        totalWins: value.totalWins,
        wonToday: value.wonToday,
      };
      window.localStorage.setItem(key, JSON.stringify(winData));
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) return undefined;

      const data: WinData = JSON.parse(item);
      const today = new Date().toISOString().split("T")[0];

      // Reset wonToday if it's a new day
      if (data.date !== today) {
        data.wonToday = false;
        data.date = today;
        window.localStorage.setItem(key, JSON.stringify(data));
      }
      return data;
    } catch (error) {
      console.log(error);
      return undefined;
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

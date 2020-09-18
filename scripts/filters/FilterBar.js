import { MoodFilter } from "./MoodFilter.js";
import { getMoods, useMoods } from "../JournalDataProvider.js";

const contentTarget = document.querySelector("#filters");
let allMoods = [];

export const FilterBar = () => {
  getMoods().then(() => {
    allMoods = useMoods();
    render(allMoods);
  });
};

const render = (allMoodsArray) => {
  contentTarget.innerHTML = `
          ${MoodFilter(allMoodsArray)}
      `;
};

import { getEntries, getMoods, useMoods } from "../JournalDataProvider.js";
import { saveJournalEntry } from "../JournalDataProvider.js";
let moodsArray = [];
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "addJournal") {
    const matchingMood = moodsArray.find(
      (mood) =>
        mood.id === parseInt(document.getElementById("moodSelect").value)
    );
    const newEntry = {
      entryDate: document.getElementById("journalDate").value,
      entryTopic: document.getElementById("journalTopic").value,
      entryText: document.getElementById("entryText").value,
      mood: matchingMood,
    };
    saveJournalEntry(newEntry);
  }
});

export const JournalForm = () => {
  getEntries();
  getMoods().then(() => (moodsArray = useMoods()));
};

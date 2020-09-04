import { getEntries } from "../JournalDataProvider.js";
import { saveJournalEntry } from "../JournalDataProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "addJournal") {
    event.preventDefault();

    const newEntry = {
      entryDate: document.getElementById("journalDate").value,
      entryTopic: document.getElementById("journalTopic").value,
      entryMood: document.getElementById("moodSelect").value,
      entryText: document.getElementById("entryText").value,
    };
    saveJournalEntry(newEntry);
  }
});

export const JournalForm = () => {
  getEntries();
};

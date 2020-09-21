import {
  getEntries,
  getInstructors,
  getMoods,
  useInstructors,
  useMoods,
} from "../JournalDataProvider.js";
import { saveJournalEntry } from "../JournalDataProvider.js";
let moodsArray = [];
let instructorsArray = [];
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "addJournal") {
    clickEvent.preventDefault();
    const newEntry = {
      entryDate: document.getElementById("journalDate").value,
      entryTopic: document.getElementById("journalTopic").value,
      entryText: document.getElementById("entryText").value,
      moodId: parseInt(document.getElementById("moodSelect").value),
      instructorId: parseInt(document.getElementById("instructorSelect").value),
    };
    saveJournalEntry(newEntry);
  }
});

export const JournalForm = () => {
  getEntries()
    .then(getInstructors)
    .then(getMoods)
    .then(() => {
      moodsArray = useMoods();
      instructorsArray = useInstructors();
    });
};

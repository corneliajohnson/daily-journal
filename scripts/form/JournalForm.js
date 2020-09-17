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
    const matchingMood = moodsArray.find(
      (mood) =>
        mood.id === parseInt(document.getElementById("moodSelect").value)
    );

    const matchingInstructor = instructorsArray.find(
      (instructor) =>
        instructor.id ===
        parseInt(document.getElementById("instructorSelect").value)
    );
    const newEntry = {
      entryDate: document.getElementById("journalDate").value,
      entryTopic: document.getElementById("journalTopic").value,
      entryText: document.getElementById("entryText").value,
      mood: matchingMood,
      instructor: matchingInstructor,
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

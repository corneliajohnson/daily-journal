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

//For each tag, check if there is already a tag object in your database with that subject.
const checkEntryTags = () => {
  entryTags = document.getElementById("journalTags").value.split(",");
  entryTags.forEach((tag) => {
    //If there isn't, use a POST operation to create one. Capture the id of the newly created tag.
    //If there is, get its id.
  });
};

export const JournalForm = () => {
  getEntries()
    .then(getInstructors)
    .then(getMoods)
    .then(() => {
      moodsArray = useMoods();
      instructorsArray = useInstructors();
    });
};

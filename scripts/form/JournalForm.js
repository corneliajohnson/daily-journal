import {
  getEntries,
  getEntryTags,
  getInstructors,
  getMoods,
  getTags,
  saveTags,
  useEntryTags,
  useInstructors,
  useJournalEntries,
  useMoods,
  useTags,
} from "../JournalDataProvider.js";
import { saveJournalEntry } from "../JournalDataProvider.js";
let moodsArray = [];
let instructorsArray = [];
let tagArray = [];
let entryTagArray = [];
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
    checkEntryTags();
    saveJournalEntry(newEntry);
  }
});

//TODO!
//For each tag, check if there is already a tag object in your database with that subject.
const checkEntryTags = () => {
  const entryTags = document.getElementById("journalTags").value.split(",");
  let tagsNotPosted = [];
  let tagsPosted = [];
  //If there isn't, use a POST operation to create one. Capture the id of the newly created tag.
  tagArray.map((oldTag) => {
    tagsNotPosted = entryTags.filter(
      (newTag) => newTag.toLowerCase() !== oldTag.subject.toLowerCase()
    );
    //If there is, get its id.
    // tagsPosted = entryTags.forEach((newTag) => {
    //   if (newTag.toLowerCase() === oldTag.subject.toLowerCase()) {
    //     console.log(oldTag.id);
    //   }
    // });
  });
  tagsNotPosted.map((tag) => {
    const newTagObj = { subject: tag };
    saveTags(newTagObj);
  });
};

export const JournalForm = () => {
  getEntries()
    .then(getInstructors)
    .then(getMoods)
    .then(getTags)
    .then(getEntryTags)
    .then(() => {
      tagArray = useTags();
      entryTagArray = useEntryTags();
      moodsArray = useMoods();
      instructorsArray = useInstructors();
    });
};

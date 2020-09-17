import {
  useJournalEntries,
  getEntries,
  getMoods,
  useMoods,
} from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";

const render = (theJournalArray, theMoodArray) => {
  const contentTarget = document.querySelector("#entryLog");

  contentTarget.innerHTML += theJournalArray.map((entry) => {
    const matchingMood = theMoodArray.find(
      (mood) => mood.id === entry.entryMoodId
    );
    return JournalEntryComponent(entry, matchingMood);
  });
};

export const EntryListComponent = () => {
  // Use the journal entry data from the data provider component
  getEntries()
    .then(getMoods)
    .then(() => {
      let entriesArray = useJournalEntries();
      let moodsArray = useMoods();
      render(entriesArray, moodsArray);
    });
};

import { useJournalEntries, getEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";

const render = (theJournalArray) => {
  const contentTarget = document.querySelector("#entryLog");

  contentTarget.innerHTML += theJournalArray.map((entry) => {
    return JournalEntryComponent(entry);
  });
};

export const EntryListComponent = () => {
  // Use the journal entry data from the data provider component
  getEntries().then(() => {
    let entriesArray = useJournalEntries();
    render(entriesArray);
  });
};

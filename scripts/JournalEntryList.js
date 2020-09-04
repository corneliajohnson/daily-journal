import { useJournalEntries, getEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";

// DOM reference to where all entries will be rendered
let entriesArray = [];

const render = (theJournalArray) => {
  const contentTarget = document.querySelector("#entryLog");
  contentTarget.innerHTML += `${theJournalArray
    .map((entry) => JournalEntryComponent(entry))
    .join("")}`;

  return contentTarget;
};

export const EntryListComponent = () => {
  // Use the journal entry data from the data provider component
  getEntries().then(() => {
    entriesArray = useJournalEntries();
    render(entriesArray);
  });
};

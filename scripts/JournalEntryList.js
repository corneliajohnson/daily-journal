import {
  useJournalEntries,
  getEntries,
  deleteJournalEntry,
  getSeingleEntry,
} from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";
const eventHub = document.querySelector(".container");

const render = (theJournalArray) => {
  const contentTarget = document.querySelector("#entryLog");

  contentTarget.innerHTML = theJournalArray
    .map((entry) => {
      return JournalEntryComponent(entry);
    })
    .join("");
};

export const EntryListComponent = () => {
  // Use the journal entry data from the data provider component
  getEntries()
    .then(getEntries)
    .then(() => {
      let entriesArray = useJournalEntries();
      render(entriesArray);
    });
};

eventHub.addEventListener("journalStateChanged", () => {
  let entriesArray = useJournalEntries();
  render(entriesArray);
});

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("editEntry--")) {
    const [perfix, entryId] = clickEvent.target.id.split("--");
    const customEvent = new CustomEvent("editSelected", {
      detail: {
        JournalEntryId: entryId,
      },
    });
    eventHub.dispatchEvent(customEvent);
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id.startsWith("deleteEntry--")) {
    event.preventDefault();
    const [prefix, id] = event.target.id.split("--");
    deleteJournalEntry(id);
  }
});

//adds filters radio buttons on dom
eventHub.addEventListener("change", (e) => {
  let entriesArray = useJournalEntries();
  const radioMessage = document.querySelector("#radioMessage");
  if (e.target.name === "moodFilter") {
    if (e.target.value === "all") {
      render(entriesArray);
    } else {
      const filteredEntries = entriesArray.filter((entry) => {
        return entry.mood.id === parseInt(e.target.value);
      });
      render(filteredEntries);
    }
    radioMessage.innerHTML = `<h5>Mood: ${e.target.nextSibling.nextSibling.innerHTML}</h5>`;
  }
});

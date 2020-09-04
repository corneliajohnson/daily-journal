const eventHub = document.querySelector(".container");
let journalsArray = [];

export const useJournalEntries = () => {
  const sortedByDate = journalsArray.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortedByDate;
};

const dispatchStateChangeEvent = () => {
  eventHub.dispatchEvent(new CustomEvent("journalStateChanged"));
};

export const saveJournalEntry = (newJournalEntry) => {
  fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJournalEntry),
  })
    .then(getEntries)
    .then(dispatchStateChangeEvent);
};

export const getEntries = () => {
  return fetch("http://localhost:8088/entries")
    .then((response) => response.json())
    .then((entries) => {
      journalsArray = entries;
    });
};

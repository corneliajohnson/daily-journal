const eventHub = document.querySelector(".container");
let journalsArray = [];
let moodsArray = [];

export const useJournalEntries = () => {
  const sortedByDate = journalsArray.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortedByDate;
};

export const useMoods = () => {
  return moodsArray.slice();
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
    .then((parsedEntries) => {
      journalsArray = parsedEntries;
    });
};

export const getMoods = () => {
  return fetch("http://localhost:8088/moods")
    .then((response) => response.json())
    .then((parsedMoods) => {
      moodsArray = parsedMoods;
    });
};

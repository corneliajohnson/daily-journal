const eventHub = document.querySelector(".container");
let journalsArray = [];
let moodsArray = [];
let instructorsArray = [];
let tagsArray = [];
let entryTagsArray = [];

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
export const useInstructors = () => {
  return instructorsArray.slice();
};
export const useTags = () => {
  return tagsArray.slice();
};

export const useEntryTags = () => {
  return entryTagsArray.slice();
};

const dispatchStateChangeEvent = () => {
  eventHub.dispatchEvent(new CustomEvent("journalStateChanged"));
};

export const saveJournalEntry = (newJournalEntry) => {
  fetch("http://localhost:8088/entries?_expand=mood&_expand=instructor", {
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
  return fetch("http://localhost:8088/entries?_expand=mood&_expand=instructor")
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

export const getInstructors = () => {
  return fetch("http://localhost:8088/instructors")
    .then((response) => response.json())
    .then((parsedInstructors) => (instructorsArray = parsedInstructors));
};

export const deleteJournalEntry = (id) => {
  return fetch(`http://localhost:8088/entries/${id}`, {
    method: "DELETE",
  })
    .then(getEntries)
    .then(dispatchStateChangeEvent);
};

export const getSeingleEntry = (id) => {
  return fetch(`http://localhost:8088/entries/${id}`).then((response) =>
    response.json()
  );
};

export const getUpdateEntry = (entryObj, id) => {
  fetch(`http://localhost:8088/entries/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entryObj),
  })
    .then(getEntries)
    .then(dispatchStateChangeEvent);
};

export const getTags = () => {
  return fetch("http://localhost:8088/tags")
    .then((response) => response.json())
    .then((parsedTags) => (tagsArray = parsedTags));
};

export const saveTags = (newTag) => {
  fetch("http://localhost:8088/tags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTag),
  }).then(getTags);
};

export const getEntryTags = () => {
  return fetch("http://localhost:8088/entrytags")
    .then((response) => response.json())
    .then((parsedEntryTags) => (entrytagsArray = parsedEntryTags));
};

export const saveEntryTags = (newEntryTag) => {
  fetch("http://localhost:8088/entrytags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEntryTag),
  }).then(getTags);
};

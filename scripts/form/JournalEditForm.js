import { getSeingleEntry, getUpdateEntry } from "../JournalDataProvider.js";

const eventHub = document.querySelector(".container");
let selectedObj = {};

eventHub.addEventListener("editSelected", (event) => {
  document.getElementById("entryButton").innerHTML = `
  <button type="button" class="btn" id="editJournalBtn">Save</button>
  <button type="button" class="btn" id="cancelEditBtn">Cancel</button>
  `;
  const entryId = parseInt(event.detail.JournalEntryId);
  //add the values to all he fields
  getSeingleEntry(entryId).then((responseObj) => {
    selectedObj = { ...responseObj };
    document.querySelector("#entryText").innerHTML = `${responseObj.entryText}`;
    document.getElementById("journalDate").value = responseObj.entryDate;
    document.getElementById("journalTopic").value = responseObj.entryTopic;
    document.getElementById("moodSelect").value = responseObj.moodId;
    document.getElementById("instructorSelect").value =
      responseObj.instructorId;
  });
});

eventHub.addEventListener("editSelected", (event) => {
  const entryId = parseInt(event.detail.JournalEntryId);
  //get and update the valuues of all the fields
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "editJournalBtn") {
      clickEvent.preventDefault();
      const newEntry = {
        entryDate: document.getElementById("journalDate").value,
        entryTopic: document.getElementById("journalTopic").value,
        entryText: document.getElementById("entryText").value,
        moodId: parseInt(document.getElementById("moodSelect").value),
        instructorId: parseInt(
          document.getElementById("instructorSelect").value
        ),
      };
      getUpdateEntry(newEntry, entryId);
    } else if (clickEvent.target.id === "cancelEditBtn") {
      getUpdateEntry(selectedObj, entryId);
    }
  });
});

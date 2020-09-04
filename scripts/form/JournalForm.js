import { getEntries } from "../JournalDataProvider.js";
import { saveJournalEntry } from "../JournalDataProvider.js";

const eventHub = document.querySelector(".container");

const render = () => {
  const journalForm = document.getElementById("journalForm");
  journalForm.innerHTML = `
  <h3>What on Your Mind Today?</h3>
  <form action="">
    <div class="journal-entry">
      <div class="journal-entry-item">
        <label for="date">Date</label>
        <input id="journalDate" type="date">
      </div>
      <div class="journal-entry-item">
        <label for="topic">Concepts Covered</label>
        <input id ="journalTopic" type="text">
      </div>
      <div class="journal-entry-item">
        <label for="mood">Mood</label>
        <select name="mood" id="moodSelect">
          <option value="empty"></option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="excited">Excited</option>
          <option value="confused">Confused</option>
          <option value="nervous">Nervous</option>
        </select>
      </div>
      <div class="journal-entry-item">
        <h4>Jouranl Entry</h4>
        <textarea id="entryText" cols="30" rows="10"></textarea>
      </div>
    </div>
    <button id="addJournal">Submit</button>
  </form>
  `;
  return journalForm;
};

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "addJournal") {
    event.preventDefault();

    const newEntry = {
      entryDate: document.getElementById("journalDate").value,
      entryTopic: document.getElementById("journalTopic").value,
      entryMood: document.getElementById("moodSelect").value,
      entryText: document.getElementById("entryText").value,
    };
    console.log(newEntry);
    saveJournalEntry(newEntry);
  }
});

export const JournalForm = () => {
  getEntries().then(() => {
    render();
  });
};

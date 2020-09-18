import {
  getMoods,
  useMoods,
  getInstructors,
  useInstructors,
} from "../JournalDataProvider.js";
let moodsArray = [];
let instructorsArray = [];

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
      <label for="instructor">Instructors</label>
        <select name="instructor" id="instructorSelect" class="browser-default">
        <option value="empty"></option>
          ${instructorsArray.map((instructor) => {
            return `<option value="${instructor.id}">${instructor.first_name} ${instructor.last_name}</option>`;
          })}
        </select>
      </div>
      <div class="journal-entry-item">
      <label for="mood">Mood</label>
        <select name="mood" id="moodSelect" class="browser-default">
        <option value="empty"></option>
          ${moodsArray.map((mood) => {
            return `<option value="${mood.id}">${mood.label}</option>`;
          })}
        </select>
      </div>
      <div class="journal-entry-item">
        <h4>Jouranl Entry</h4>
        <textarea id="entryText" cols="30" rows="10"></textarea>
      </div>
    </div>
    <button type="button" class="btn" id="addJournal">Submit</button>
  </form>
  `;
  return journalForm;
};

export const JournalFormHTML = () => {
  getMoods()
    .then(getInstructors)
    .then(() => {
      instructorsArray = useInstructors();
      moodsArray = useMoods();
      render();
    });
};

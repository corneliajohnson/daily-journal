export const MoodFilter = (allMoods) => {
  return `
  <fieldset class="fieldset">
      <legend>Filter Journal Entries by Mood</legend>
      <div class="moodBtns">
      <div class="moodBtn">
      <input type="radio" name="moodFilter" value="all" checked="checked"/>
      <label for="moodFilter--all">All</label>
      </div>
      ${allMoods
        .map((mood) => {
          return ` 
          <div class="moodBtn">
          <input class="mood-input" type="radio" name="moodFilter" value="${mood.id}"/>
          <label class="mood-label" for="moodFilter--${mood.label}">${mood.label}</label>
          </div>
          `;
        })
        .join("")}
        </div>
  </fieldset>
  <div id="radioMessage"><h5>Mood: All</h5></div>
  `;
};

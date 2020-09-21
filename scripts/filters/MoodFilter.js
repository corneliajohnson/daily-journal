export const MoodFilter = (allMoods) => {
  return `
  <fieldset class="fieldset">
      <legend>Filter Journal Entries by Mood</legend>
      <input type="radio" name="moodFilter" value="all" checked="checked"/>
      <label for="moodFilter--all">All</label>
      ${allMoods
        .map((mood) => {
          return `<input type="radio" name="moodFilter" value="${mood.id}"/>
                  <label for="moodFilter--${mood.label}">${mood.label}</label>
                  `;
        })
        .join("")}
        <div id="radioMessage">Mood: All</div>
  </fieldset>
  `;
};

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
      <div>
          <h5>${entry.entryTopic}</h5>
          <p>${new Date(entry.entryDate).toDateString()}: ${
    entry.mood.label
  }</p>
          <p class="entry--body">${entry.entryText}</p>
          </div>
          <div>
          <button type="button" class="btn red" id="deleteEntry--${
            entry.id
          }">Delete</button>
          </div>
      </section>
  `;
};

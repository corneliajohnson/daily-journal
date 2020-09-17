/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry, mood) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
          <h5>${entry.entryTopic}</h5>
          <p>${new Date(entry.entryDate).toDateString()}: ${mood.label}</p>
          <p class="entry--body">${entry.entryText}</p>
          <hr>
      </section>
  `;
};

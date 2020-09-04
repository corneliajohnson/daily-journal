/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
          <h5>${entry.entryTopic}</h5>
          <p>${entry.entryDate}: ${entry.entryMood}</p>
          <p class="entry--body">${entry.entryText}</p>
          <hr>
      </section>
  `;
};

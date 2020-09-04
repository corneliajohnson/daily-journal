/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
          <h4>${entry.entryTopic}</h4>
          <p>${entry.entryDate}: ${entry.entryMood}</p>
          <p class="entry--body">${entry.entryText}</p>
          <hr>
      </section>
  `;
};

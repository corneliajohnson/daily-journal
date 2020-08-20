/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
          <div class="entry--date">${entry.date}</div>
          <div class="entry--body">${entry.entry}</div>
          <hr>
      </section>
  `
}
/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
  {
    id: 1,
    date: "07/24/2025",
    concept: "HTML & CSS",
    entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
    mood: "Ok"
  },
  {
    id: 2,
    date: "08/10/2020",
    concept: "Termenal",
    entry: "First day out class we did introductions",
    mood: "Ok"
  },
  {
    id: 3,
    date: "08/11/2020",
    concept: "HTML & CSS",
    entry: "We did flexbox exercises as a group and individually",
    mood: "Happy"
  },
  {
    id: 3,
    date: "08/02/2020",
    concept: "Git hub",
    entry: "Assigned to the first group project",
    mood: "Nervous"
  }

]

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}
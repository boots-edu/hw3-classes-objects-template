/**
 * # Part 3) NotePad
 * We recommend you do this file third. If you haven't already done
 * person.ts, then go there first!
 * 
 * 3.1 Create a class named `NotePad` that has a string field `title` and a field `notes` that is an array of strings.
 * 3.2. Create a NotePad constructor that takes in two parameters (title, notes) and assigns them to the appropriate fields.
 * 3.3. Create a function named `longestNotePad` that takes in an array of `NotePad` objects and returns the title of the `NotePad` with the most notes.
 *       If there is a tie, return the title of the first `NotePad` with the most notes.
 *       If the array is empty, return an empty string.
 * 3.4. Create a function named `mergeNotes` that takes in an array of `NotePad` objects and returns a single `NotePad` object with the title "Merged Notes"
 *      and the notes from all the `NotePad` objects as one big long array. Do not modify the original NotePad objects.
 * 3.5. Create a function named `duplicateNote` that takes in an array of `NotePad` objects and the title of one of the NotePads (a string),
 *      and returns a new array of `NotePad` objects where the NotePad with the given title has a duplicate after the original.
 *      If the given title is not found, return the original array.
 *      Note that the duplicated NotePad should be a new instance, not a reference to the original NotePad!!
 *      All the other references should be the same as the original array, however.
 */

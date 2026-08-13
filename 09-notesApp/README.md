# 📝 NoteFlow

A simple and modern **Notes App** built with **React**.  
This project allows users to create and delete notes while automatically saving them in the browser's **Local Storage** so the notes remain available after refreshing the page.

## 🚀 Features

- Create new notes
- Add a note heading and details
- Delete notes
- Notes are stored in Local Storage
- Notes remain available after page refresh
- Dynamic note counter
- Empty-state UI when there are no notes
- Responsive layout
- Modern dark-themed UI
- Interactive hover and focus effects

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- Tailwind CSS
- Browser Local Storage
- Vite

## 📚 React Concepts Practiced

- Functional Components
- `useState`
- `useEffect`
- Event Handling
- Controlled Inputs
- Form Handling
- Array `map()`
- Array `filter()`
- State Updates
- Local Storage
- `JSON.stringify()`
- `JSON.parse()`
- Conditional Rendering

## 🧠 React Concepts Used

### useState

The project uses `useState` to manage:

- Note heading
- Note details
- Notes array

```js
const [noteHeading, setNoteHeading] = useState("");
const [noteDetails, setNoteDetails] = useState("");
const [notes, setNotes] = useState([]);
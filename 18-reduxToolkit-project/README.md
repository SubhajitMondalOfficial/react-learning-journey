# 🎬 MediaVault

> A modern media discovery platform to search, explore, and save Photos, Videos & GIFs from multiple APIs — all in one place.

<p align="center">
  <b>🔎 Search • 🎨 Explore • 💾 Save • ⚡ Discover</b>
</p>

---

## ✨ About The Project

**MediaVault** is a React-based media discovery application that brings content from multiple platforms into a single modern interface.

Users can search for:

- 🖼️ Photos from Unsplash
- 🎥 Videos from Pexels
- 🎞️ GIFs from GIPHY

Users can save interesting media to their personal collection. Saved items are persisted using **LocalStorage**, so they remain available even after refreshing the browser.

The project uses **Redux Toolkit** for global state management, **React Router** for navigation, **Axios** for API requests, and **Tailwind CSS** for the UI.

---

## 🚀 Features

- 🔎 Search for photos, videos, and GIFs
- 🖼️ Search photos using Unsplash API
- 🎥 Search videos using Pexels API
- 🎞️ Search GIFs using GIPHY API
- 🔄 Switch between Photos, Videos, and GIFs
- 💾 Save media to personal collection
- 🗑️ Remove saved media
- 🧹 Clear entire collection
- 💽 Persist collection using LocalStorage
- 🔔 Toast notifications using React Toastify
- ⚡ Redux Toolkit state management
- 🧭 React Router navigation
- 📱 Responsive design
- 🌙 Modern dark-themed UI
- ✨ Glassmorphism effects
- 🎨 Gradient backgrounds
- 🖱️ Smooth hover animations
- ⏳ Loading states
- ❌ Error handling
- 🎯 Reusable React components

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| ⚛️ React | Frontend UI |
| 🟨 JavaScript | Application logic |
| 🎨 Tailwind CSS | Styling |
| 🧠 Redux Toolkit | Global state management |
| 🧭 React Router DOM | Client-side routing |
| 📡 Axios | API requests |
| 🔔 React Toastify | User notifications |
| 🎯 Lucide React | Icons |
| 💾 LocalStorage | Persistent collection |
| ⚡ Vite | Development and build tool |
| 🖼️ Unsplash API | Photo search |
| 🎥 Pexels API | Video search |
| 🎞️ GIPHY API | GIF search |

---

## 🧩 Application Architecture

```text
                         ┌──────────────────┐
                         │    MediaVault    │
                         └────────┬─────────┘
                                  │
                         ┌────────▼─────────┐
                         │    Search Bar    │
                         └────────┬─────────┘
                                  │
                         ┌────────▼─────────┐
                         │   Redux Store    │
                         └────────┬─────────┘
                                  │
                 ┌────────────────┼────────────────┐
                 │                │                │
          ┌──────▼──────┐  ┌─────▼─────┐  ┌─────▼─────┐
          │  Unsplash   │  │   Pexels  │  │   GIPHY   │
          │   Photos    │  │   Videos  │  │    GIFs   │
          └──────┬──────┘  └─────┬─────┘  └─────┬─────┘
                 │                │                │
                 └────────────────┼────────────────┘
                                  │
                         ┌────────▼─────────┐
                         │   Result Grid    │
                         └────────┬─────────┘
                                  │
                         ┌────────▼─────────┐
                         │   Result Card    │
                         └────────┬─────────┘
                                  │
                            💾 Save Item
                                  │
                         ┌────────▼─────────┐
                         │   Collection     │
                         │  + LocalStorage  │
                         └──────────────────┘
                         
---

#📂 Project Structure

src/
│
├── api/
│   └── mediaApi.js
│
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── Tabs.jsx
│   ├── ResultGrid.jsx
│   └── ResultCard.jsx
│
├── features/
│   ├── searchSlice.js
│   └── collectionSlice.js
│
├── pages/
│   ├── HomePage.jsx
│   └── CollectionPage.jsx
│
├── App/
│   └── store.js
│
├── Layout.jsx
├── App.jsx
├── main.jsx
└── index.css


##🔄 How It Works


User enters a search query
          ↓
Redux stores the query
          ↓
User selects Photos / Videos / GIFs
          ↓
Corresponding API is requested
          ↓
API response is normalized
          ↓
Redux stores the results
          ↓
ResultGrid renders ResultCard components
          ↓
User saves a media item
          ↓
Collection Redux state is updated
          ↓
Collection is persisted in LocalStorage
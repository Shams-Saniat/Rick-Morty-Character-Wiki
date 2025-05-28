# Rick and Morty Wiki 🌌

A responsive React application that interacts with the [Rick and Morty API](https://rickandmortyapi.com/) to display characters, episodes, and locations from the show. It features pagination, dynamic routing, search, and filtering functionalities.

## 🛠️ Features

- 🔍 Search characters by name
- 🎭 Filter characters
- 📺 View episode details and characters
- 🌍 Explore character locations
- 🧭 Pagination support
- 🖼️ Dynamic card-based UI
- 🧱 Styled with Bootstrap & SCSS Modules
- ⚛️ Built using React Router for seamless navigation

## 📸 Screenshots

![Characters Page](https://via.placeholder.com/800x400?text=Characters+Page)
![Card Detail](https://via.placeholder.com/800x400?text=Character+Detail)
![Episodes Page](https://via.placeholder.com/800x400?text=Episodes)

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rick-and-morty-wiki.git
   cd rick-and-morty-wiki
### Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
Open your browser and go to http://localhost:3000

## 🧩 Folder Structure
pgsql
Copy
Edit
src/
│
├── components/
│   ├── Cards/
│   ├── Filters/
│   ├── Navbar/
│   ├── Pagination/
│
├── Pages/
│   ├── Episodes.js
│   ├── Location.js
│
├── App.js
├── App.css
├── index.js
## 🧪 Tech Stack
React.js

React Router

Bootstrap 5

SCSS Modules

Rick and Morty API

## 🐛 Known Issues
The Filters component is currently static (if dynamic filter logic is expected, it might need enhancement).

No loading or error handling states are implemented.

Some responsiveness improvements could be made on smaller devices.

## 🏗️ Future Improvements
Add loading spinners and error handling

Implement dynamic filters (gender, status, species)

Add global state management (e.g., Redux or Context API)

Improve accessibility
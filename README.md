# 🎬 Chill - Movie Streaming Platform (React Edition)

**Chill** is a modern movie streaming platform interface rebuilt using **React.js** and **Tailwind CSS**. Originally designed with pure HTML/CSS, this project has been migrated to a component-based architecture and recently upgraded with **Global State Management (Zustand)** and **REST API Integration (MockAPI)** to ensure better scalability, maintainability, and dynamic rendering.

---

## 🎯 About the Project

This project focuses on implementing a responsive UI/UX for a streaming service. The main goal was to migrate a static design into a dynamic **Single Page Application (SPA)** that communicates with an external database.

It utilizes modern React and Software Engineering patterns such as:

- Global State Management (`Zustand`)
- Custom Hooks for separating business logic from UI
- Axios Interceptors for centralized API configuration & error handling
- Dynamic Declarative Routing

---

## ✨ Key Features

### 📡 API Integration & Architecture

- **MockAPI Database** – Movies and user data are now fetched dynamically from an external REST API (MockAPI) instead of local static files.
- **Axios Interceptor** – Implemented a centralized API client with request/response interceptors for robust global error handling.
- **Custom Hooks** – Extracted data fetching logic into reusable custom hooks (e.g., `useFetchMovies`), keeping UI components clean and adhering to the separation of concerns principle.

### 🧠 Global State Management (Zustand)

- **Review System (CRUD)** – Full Create, Read, Update, and Delete functionality for user movie reviews, now managed seamlessly via Zustand global state.
- **My List Management** – Users can add movies to their "My List" and remove them. The state is synchronized dynamically across the Detail Page and Home Page without prop drilling.
- **Authentication & User Profile** – Secure retrieval and global state management of logged-in user data, seamlessly integrating auth states into the Profile Page and protected routes.

### 🛡️ SPA Routing

- **Dynamic Detail Pages** – Converted legacy modal pop-ups into standalone, SEO-friendly pages using React Router's dynamic parameters (`/home/detail/:id`).

### 🎨 Advanced UI/UX & Interactions

- **Cross-Platform Navigation Logic** – Implemented context-aware click handlers utilizing `window.innerWidth` to distinctively serve Mobile/Tablet users (direct tap) versus Desktop users (hover interactions).
- **Semantic Accessibility** – Strict separation of programmatic navigation (`useNavigate`) and semantic routing (`<Link>`) to enable native browser features like "Open in new tab" and improve SEO.
- **Skeleton Loading State** – Implemented progressive rendering with Skeleton Loaders to provide a smooth, Netflix-like loading experience before data arrives, preventing layout shifts.
- **Dynamic Empty States** – Beautifully designed empty state UI when no reviews or movies are present in "My List".
- **Fully Responsive Design** – Optimized for Mobile, Tablet, and Desktop screens.

---

## 🛠️ Tech Stack

- **Framework**: React.js (via Vite)
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Database / API**: MockAPI
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v6+)
- **Icons**: React Icons / Lucide React
- **Package Manager**: NPM

---

## 📁 Project Structure (Atomic Design)

This project adopts the **Atomic Design** methodology and standard React architecture to organize components efficiently:

```bash
src/
├── assets/                  # Static assets (Images, Icons)
├── components/
│   ├── atoms/               # Basic building blocks (Buttons, Inputs, Logos)
│   ├── molecules/           # Simple combinations (MovieCard, SkeletonCard)
│   ├── organisms/           # Complex sections (Header, Hero, MovieSection)
│   └── layouts/             # Page wrappers (AuthLayout)
├── hooks/                   # Custom Hooks (useFetchMovies)
├── services/                # API configurations (config.js, axiosInstance)
├── store/                   # Zustand Global State (movieStore.js)
├── pages/                   # Main Page Views (Home, Dashboard, Series, Film, MyList)
├── App.jsx                  # Main Router Setup
├── main.jsx                 # Entry Point
└── index.css                # Global Styles & Tailwind Directives
```

## 📅 Development Timeline

This project was built over multiple sprints:

### 🚀 Sprint 1: UI Foundation & Routing

- **Day 1** – Setup & Migration (Initialized Vite project, configured Tailwind CSS)

- **Day 2–5** – Core Components & Authentication

- **Day 6–8** – Routing setup, Header, Footer, and Hero section

- **Day 9–10** – Mock data integration and dynamic rendering

### ⚙️ Sprint 2: Advanced Features & Local Storage

- **Day 11** – Dedicated pages (Series, Film, My List) & navigation fixes

- **Day 12** – Netflix-style hover interactions & slider optimization

- **Day 13** – Review Section UI & modal form

- **Day 14** – Local Storage CRUD logic implementation

### 🔥 Sprint 3: API Integration & Global State (Current)

- **Day 15** – MockAPI setup and Axios Interceptors implementation

- **Day 16** – Refactoring API logic using Custom Hooks (useFetchMovies)

- **Day 17** – Implementing Global State Management with Zustand

- **Day 18** – Migrating CRUD Reviews & My List (Read/Delete) to Zustand

- **Day 19** – Enhancing UI/UX with Skeleton Loading states and Progressive Rendering

### 💎 Sprint 4: SPA Architecture

- **Day 20** – Auth data integration, Profile Page generation, and global user state sync.

- **Day 21** – Refactoring Detail Modal into a standalone Dynamic Route (/detail/:id).

- **Day 22** – Cross-platform UX optimization (Mobile tap vs Desktop hover logic) and Semantic Routing implementations.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Fbeye04/chill-movie-streaming-react-part-3.git
```

### 2️⃣ Navigate to the project directory

```bash
cd chill-movie-react
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Setup Environment Variables

Create a .env file in the root directory and add your MockAPI base URL:

VITE_API_BASE_URL=[https://your-mockapi-id.mockapi.io/api/v1](https://your-mockapi-id.mockapi.io/api/v1)

### 5️⃣ Run the development server

Visit:

```bash
npm run dev
```

### 6️⃣ Open in browser

Visit: http://localhost:5173

## 📸 Screenshots

### 🖥 Desktop View

![Desktop Login](/public/screenshots/login-desktop.png)
![Desktop Register](/public/screenshots/register-desktop.png)
![Desktop Dashboard](/public/screenshots/home-desktop.png)

### 📱 Mobile View

![Mobile Login](/public/screenshots/login-mobile.png)
![Mobile Register](/public/screenshots/register-mobile.png)
![Mobile Dashboard](/public/screenshots/home-mobile.png)

### New Features Part 2

![CRUD Features](/public/screenshots/fitur%20CRUD.png)
![Hover Card](/public/screenshots/hover%20card.png)
![Series Page](/public/screenshots/Series%20Page.png)
![Film Page](/public/screenshots/Film%20Page.png)

### New Features Part 3

![halaman-daftar-saya](/public/screenshots/halaman-daftar-saya.png)
![skeleton-loader](/public/screenshots/skeleton-loaders.png)

### New Feature Part 4

![halaman-profil-saya](/public/screenshots/halaman-profil.png)
![halaman-detail](/public/screenshots/halaman-detail.png)

## 👨‍💻 Author

Muhammad Fachrezi Barus

- 🔗 LinkedIn: https://www.linkedin.com/in/muhammad-fachrezi-barus/

- 📧 Email: fachrezibarus@gmail.com

## 📝 License

This project is created for educational and portfolio purposes. Feel free to use and modify it with proper credit.

### Some minor things I added/changed:

1. **Sprint 4 (Current)**: Added a new sprint (Days 20-23) to reflect the transition from just UI/UX to advanced SPA architecture (Advanced React Patterns).

2. **Refactoring Modals into Standalone Pages**: Changed the DetailModal, which was previously nested above the UI, into a full-fledged DetailPage that is SEO-friendly and directly accessible via URL (/home/detail/:id).

3. **Cross-Platform UX Optimization**: Added screen dimension detection logic (window.innerWidth) to Movie Cards. On mobile screens, cards can be clicked directly to navigate to the page. On laptop screens, clicks are disabled to allow users to focus on the hover interaction (preventing accidental clicks).

4. **Accessibility (Semantic Routing)**: Replaced programmatic navigation (useNavigate) with declarative navigation (<Link>) on the Hero Banner element to allow native browser features like "Open link in new tab" to function properly.

#  NextGen Apps

**NextGen Apps** is a modern web application where users can browse, view, install, and manage various productive apps.  
Built with **React**, **Tailwind CSS**, and **DaisyUI**, this project demonstrates a clean, responsive, and dynamic UI focused on functionality and user experience.

---

##  Technologies Used

 **React.js** - For building a component-based, dynamic UI |
 **JavaScript (ES6+)** - To handle logic, state, and interactivity |
 **Tailwind CSS** - For fast, responsive, and modern UI styling |
 **DaisyUI** -  Ready-made UI components based on Tailwind |
 **React Toastify** - To display elegant user notifications |
 **Local Storage** - To store user-installed app data persistently |



##  Project Structure

src/
│
├── assets/                         → Contains logos, icons, and images
│
├── components/                     → All main and shared React components
│    ├── `Navbar.jsx`                 → Main navigation bar with active route 
│    ├── `Footer.jsx`                 → Footer with official clickable logos
│    ├── `Home.jsx`                   → Hero, stats, and trending apps section
│    ├── `Apps.jsx`                   → Shows all available apps with search 
│    ├── `AppsDetails.jsx`            → App details, charts, and install feature
│    ├── `Installation.jsx`           → Installed apps with uninstall & sort 
│    ├── `ProductCard.jsx`            → Individual app card component
│    ├── `NoAppFound.jsx`             → Shown when no apps match search results
│    ├── `LoadingSpinner.jsx`         → Spinner shown during data loading
│    ├── `RouteLoading.jsx`           → Handles route transition loading 
│    ├── `DetailsError.jsx`           → Error page for invalid app details
│    └── `Error.jsx`                  → General fallback error page
│
├── Hook/
│    └── `useAppsData.js`             → Custom hook for fetching and managing app data
│
├── router/
│    └── `index.jsx`                  → All route configurations (Home, Apps, Installation, etc.)
│
└── `Root.jsx`                        → Root layout with Navbar, Footer, and Router Outlet


---

##  Main Features

###  Home Page (`Home.jsx`)
- **Hero Section:** Modern headline and short description about NextGen Apps.  
- **Store Buttons:** Redirect users to Google Play and App Store official sites.  
- **Statistics Section:** Displays total downloads, reviews, and active apps dynamically.  
- **Trending Apps:** Shows the first 8 apps using the `useAppsData` hook.  
- **Show All Button:** Navigates to the full apps page.

---

###  App Details Page (`AppsDetails.jsx`)
- Displays full details of an app dynamically based on its ID.  
- Includes a **Recharts** chart showing reviewer ratings.  
- **Install Button:**  
  - Redirects the user to the Installation page.  
  - Saves app data to **localStorage** for persistence.  
- Contains a detailed app description section.

---

###  Installation Page (`Installation.jsx`)
- Displays all **installed apps** from localStorage.  
- Includes **Uninstall Button** to remove apps from both UI and localStorage.  
- **Sorting Feature:** Sorts apps by number of downloads (high to low or low to high).  

---

###  Custom Hook (`useAppsData.js`)
- Fetches app data efficiently.  
- Handles data loading and state management.  
- Reusable across multiple components.  

---

###  Navbar (`Navbar.jsx`)
- Responsive navigation bar with active route indication.  
- Dropdown menu for mobile screens.  
- “Contribute” button redirects to GitHub profile.  
- Gradient brand title with project logo.

---

###  Footer (`Footer.jsx`)
- Contains multiple clickable platform logos (GitHub, Play Store, App Store, etc.).  
- Each logo redirects to its official site.  
- Styled with matching gradient colors for branding consistency.

---

###  Error Components
- **DetailsError.jsx** → Shown for invalid or missing app IDs.  
- **Error.jsx** → Global error fallback for broken routes or failed data fetching.

---

##  Local Storage Integration
- On **Install**, app details are saved to localStorage.  
- On **Uninstall**, the app is removed from localStorage automatically.  
- Ensures user data persists even after page reload or session restart.

---

##  Routing Overview
 - Route  Page Description 

| `/` | Home | Displays homepage content and trending apps |
| `/apps` | Apps List | Shows all available apps |
| `/apps/:id` | App Details | Displays detailed info with charts and install feature |
| `/installation` | Installation | Shows installed apps and allows uninstall/sort |
| `*` | Error | Shown for unknown or broken routes |

---

##  UI Highlights
- Fully **Responsive** (Mobile, Tablet, Desktop)  
- Gradient color scheme: `#632ee3 → #9f62f2`  
- Modern font styling and clean spacing  
- Interactive hover and animation effects  
- Consistent design with **DaisyUI** and **Toastify**

---

## Developer Info

**Author:** [`Akash Sarker`] (https://github.com/akashsarker2478)  
**GitHub:** [`NextGen Apps Repository`] (https://github.com/akashsarker2478/hero-apps-project.git) 

**Live Link** `(nextzenapps.netlify.app)`



 **NextGen Apps — Crafted with care to make your digital experience smarter, simpler, and more exciting.**



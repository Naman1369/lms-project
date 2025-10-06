# UI Component Plan for LMS Project 🎨

This document outlines the component architecture and folder structure for the Learning Management System. The goal is to create a modular, reusable, and scalable UI foundation using Tailwind CSS.

## 1. Component Philosophy
We will follow a component-based architecture, categorizing components to maintain a clean and organized codebase. The main categories are:
- **Layout Components:** Reusable wrappers for page structure (e.g., sidebars, headers).
- **UI / Atomic Components:** Small, general-purpose building blocks (e.g., buttons, inputs, cards).
- **Feature Components:** Complex components composed of smaller ones, tied to specific features (e.g., CourseEnrollmentForm, UserProfile).

---

## 2. Folder Structure
The components will be organized within the `src/components` directory as follows:

src/
├── app/
│   └── (dashboard)/          # Route group for protected dashboard layouts
│       ├── layout.js         # DashboardLayout applied here
│       └── page.js
├── components/
│   ├── layout/               # For major page structure components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── DashboardLayout.js
│   └── ui/                   # For small, reusable UI elements
│       ├── Button.js
│       ├── Input.js
│       ├── Card.js
│       └── Spinner.js
└── lib/                      # For utility functions, hooks, etc.
└── ...

---

## 3. Component Breakdown

### Layout Components (`components/layout/`)
- **`Navbar`**: The top navigation bar. Will contain the logo, navigation links, and a user profile dropdown. It will be responsive.
- **`Footer`**: The site-wide footer. Contains copyright information and secondary links.
- **`DashboardLayout`**: A wrapper for all authenticated pages. It will include the `Navbar` and a main content area.

### UI/Atomic Components (`components/ui/`)
- **`Button`**: A versatile button component.
  - **Props**: `variant` (primary, secondary), `size` (sm, md, lg), `onClick`, `children`.
- **`Input`**: A styled input field for forms.
  - **Props**: `type`, `placeholder`, `name`, `value`, `onChange`.
- **`Card`**: A flexible card container for displaying content like courses or user info.
  - **Props**: `children`, `className`.
- **`Spinner`**: A loading indicator for asynchronous actions.
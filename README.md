# Learning Management System (LMS) Project 🚀

A full-stack Learning Management System (LMS) built to provide a seamless and interactive online learning experience.

## Project Goal
To build a feature-rich LMS platform where students can register, enroll in courses, and track their progress, while administrators can manage courses, content, and users.

## Core Modules
- **Authentication:** Secure user login and registration for students and admins.
- **Course Management:** Admins can create, update, and delete courses.
- **Student Dashboard:** Students can view their enrolled courses and track progress.
- **Admin Dashboard:** Admins can manage users and site content.
- **Lesson Viewer:** Students can access course materials, including text and videos.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Database:** MongoDB with Mongoose
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **Language:** JavaScript

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites
- Node.js (v18 or newer)
- npm or yarn
- MongoDB (local instance or a cloud service like MongoDB Atlas)

### Setup Instructions
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/lms-project.git](https://github.com/yourusername/lms-project.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd lms-project
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Set up environment variables:**
    - Create a `.env.local` file in the root directory.
    - Add the required variables (see `.env.example` if available).
    ```ini
    MONGODB_URI="your_mongodb_connection_string"
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="your_generated_secret_key"
    ```
5.  **Run the development server:**
    ```bash
    npm run dev
    ```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
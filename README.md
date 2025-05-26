# Vue 3 + TypeScript + Vite

📄 Vue 3 Posts App
A Vue 3-based Single Page Application that fetches and displays posts with modern features like infinite scrolling, route caching, and smooth navigation. Built using Pinia, Vue Router, Tailwind CSS, and best practices around UI/UX enhancements.

🛠️ Tech Stack
Vue 3
Pinia (state management)
Vue Router (dynamic routing)
Tailwind CSS (utility-first styling)
localStorage & in-memory caching
API Integration

🚀 Features
✅ Initial Setup
Vue 3 project setup with proper folder structure
Integrated Pinia, Vue Router, and Tailwind CSS

📄 Posts Page
Fetch posts from API and store in Pinia
Display using reusable PostCard component
Implemented infinite scrolling
Added localStorage-based caching for 15 minutes to avoid unnecessary API calls

🔍 Post Details Page
Added dynamic routing for individual post details
Fetched post details from API or in-memory cache (if already visited)
Enhanced user experience with UI skeleton loaders
Preserved scroll position when navigating back to the posts list

# ideal-disco

Personal ideal-disco

Login + Task Module + One-click Start + Basic Monitoring/Log

Using React + JS + Tailwind（Frontend） + Express

```
personal-hub/
├─ apps/
│ ├─ backend/ # Express + RESTful API
│ └─ web/ # React + Tailwind frontend
├─ infra/
│ └─ docker-compose.yml # MongoDB + Backend + Frontend services
├─ scripts/
│ ├─ dev.sh # Start project in development mode
│ └─ seed.sh # Seed database with sample data
└─ README.md
```

# Multi-Feature Web Application

This project aims to combine multiple useful tools into one unified platform, offering seamless integration, centralized
user management, and efficient data storage.

## Features

### 0. Login

- User registration & login (JWT or Session-based authentication)

---

### 1. Task Management / To-Do App

- Add, edit, delete tasks
- Filter tasks by status (Incomplete / Completed)
- Persistent storage in database

---

### 2. Notes App

- Create, edit, and delete notes (Rich text editor supported)
- Categorize and tag notes
- Search notes by tags or categories
- Image upload and storage (Amazon S3 or local file system)
- Persistent storage of notes and user info in database

---

### 3. Weather + To-Do Integration

- Weather information via **OpenWeather API**
- Store user’s tasks and city preferences in database

---

### 4. Expense / Budget Management

- Categorized expense tracking
- Monthly budget setup
- Export reports as CSV
- **Data Models**: `User`, `Category`, `Transaction`, `Budget`
- **Bonus Features**:
    - Multi-currency exchange rate caching (via scheduled Cron jobs)
    - Data visualization with charts
    - Auto-categorization rules

---

### 5. Real-Time Chatroom / Customer Support Widget

- Group and private chat
- Read receipts
- Online/offline status indicators
- **Technology**: WebSocket / Socket.IO, JWT authentication, message persistence
- **Data Models**: `User`, `Room`, `Message`, `Presence`
- **Bonus Features**:
    - Message search
    - File/image sharing
    - Automated online customer service assignment (queue system)

---

### 6. Bookmark & Read-Later with Full-Text Search

- Save links with title, tags, and full HTML text
- Tag management for bookmarks
- Full-text search functionality
- Bulk import/export bookmarks
- **Data Models**: `User`, `Bookmark(url, title, tags, html_text)`
- **Bonus Features**:
    - Browser extension for one-click save

---

## Tech Stack

- **Frontend**: React + Tailwind CSS
- **Backend**: Express / Node.js (Express or NestJS)
- **Database**: MongoDB
- **Authentication**: JWT or Session-based
- **File Storage**: Amazon S3 / Local file system
- **APIs**: OpenWeather API, Currency Exchange API
- **Real-time**: Socket.IO / WebSocket

---

## Project Goals

- Learn something!
- Build modular, reusable components for each feature
- Centralize authentication and user data management
- Optimize for scalability and maintainability
- Allow easy future expansion of features


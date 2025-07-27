
# Manage My Day Pro

**Manage My Day Pro** is a full-stack task management application that helps users organize, track, and manage their daily tasks efficiently. It features user authentication, a modern dashboard, and persistent storage using a MySQL database.

---

## 🚀 Features

- **User Registration & Login:** Secure signup and login with password hashing and JWT authentication.
- **Task Management:** Create, edit, delete, and update the status of tasks.
- **Dashboard:** View all your tasks, filter by status or priority, and see task statistics.
- **Protected Routes:** Only authenticated users can access the dashboard and manage tasks.
- **Responsive UI:** Built with React, Tailwind CSS, and shadcn-ui for a modern look and feel.

---

## 🗂️ Project Structure

- **/src**: Frontend React app (pages, components, hooks, contexts)
- **/backend**: Node.js/Express backend (API, controllers, models, config)
- **/public**: Static assets

---

## 🧭 How to Use the App

1. **Sign Up:**
   - Go to `/auth` and create a new account.
   - After successful registration, you will be redirected to the login page.
2. **Login:**
   - Enter your credentials to log in.
   - On success, you are redirected to your dashboard.
3. **Dashboard:**
   - Add new tasks using the "New Task" button.
   - Edit or delete tasks using the controls on each task card.
   - Change task status directly from the dashboard.
   - Only logged-in users can access this page.
4. **Logout:**
   - Use the logout button in the dashboard header to end your session.

---

## 🛠️ Local Development

1. **Clone the repository:**
   ```sh
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```
2. **Install dependencies:**
   ```sh
   npm install
   cd backend && npm install
   ```
3. **Configure environment variables:**
   - Edit `/backend/.env` with your MySQL credentials.
4. **Set up the database:**
   - Create a MySQL database and run the provided SQL to create the `users` and `tasks` tables.
5. **Start the backend server:**
   ```sh
   cd backend
   npm run dev
   ```
6. **Start the frontend app:**
   ```sh
   cd ..
   npm run dev
   ```
7. **Open the app:**
   - Visit `http://localhost:8080` in your browser.

---

## 🧩 Technologies Used

- React, TypeScript, Vite
- Tailwind CSS, shadcn-ui
- Node.js, Express
- MySQL

---

## 📁 Navigation

- **Landing Page:** `/` — Welcome and introduction
- **Auth Page:** `/auth` — Login and registration
- **Dashboard:** `/dashboard` — Task management (protected)
- **Not Found:** Any other route

---

## 📄 License

This project is for educational and personal productivity use.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/aa36d38a-6495-400e-85c6-83de055131d0) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#step-1-clone-the-repository-using-the-projects-git-url)

# ➤ Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#step-2-navigate-to-the-project-directory)

# ➤ Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#step-3-install-the-necessary-dependencies)

# ➤ Step 3: Install the necessary dependencies.
npm i


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#step-4-start-the-development-server-with-auto-reloading-and-an-instant-preview)

# ➤ Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#what-technologies-are-used-for-this-project)

## ➤ What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#how-can-i-deploy-this-project)

## ➤ How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/aa36d38a-6495-400e-85c6-83de055131d0) and click on Share -> Publish.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#can-i-connect-a-custom-domain-to-my-lovable-project)

## ➤ Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
>>>>>>> 51b7081 (Initial commit)

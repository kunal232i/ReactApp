# Noty - Note Taking Frontend Application

Noty is a simple and user-friendly note-taking frontend application built using React. It allows users to create, edit, and delete notes. The application uses React's `useState` and `useEffect` hooks to manage the state and interacts with the browser's `localStorage` to temporarily store the notes data since it doesn't have a backend or database.

## Live Link

You can access the live version of Noty at [noty.netlify.app](https://main--whimsical-liger-e5f32f.netlify.app/).

## Features

- Create new notes
- Edit existing notes
- Delete notes
- Temporarily store notes in the browser's `localStorage`
- Responsive design for different screen sizes

## Installation and Usage

1. Clone the repository:

```bash
git clone https://github.com/your-username/noty.git
```

2. Navigate to the project directory:

```bash
cd Client
```

3. Install dependencies:

```bash
npm install
```

4. Run the application:

```bash
npm start
```

The application will be accessible at `http://localhost:3000/` in your web browser.

## Scripts

- `start`: Starts the development server.
- `build`: Builds the production-ready application.
- `test`: Runs tests (if any).
- `eject`: Ejects the app from `react-scripts` (use with caution).

## Folder Structure

The project directory has the following structure:

```
noty/
  |- public/
  |- src/
      |- components/
      |- style/
      |- App.js
      |- index.js
      |- ...
  |- package.json
  |- ...
```

## Dependencies

Noty uses the following main dependencies:

- React
- react-dom
- react-scripts

For a complete list of dependencies, please refer to the `package.json` file in the project root.

## Screenshots

![Home](https://github.com/kunal232i/ReactApp/assets/81668653/501778c6-e073-41f6-91fe-e87ac8dd54ea)

![Modal](https://github.com/kunal232i/ReactApp/assets/81668653/cad4a6f3-ffdb-4fce-9cb7-4342a46eda94).

---

Feel free to use, modify, and share Noty with others. Happy note-taking! 📝

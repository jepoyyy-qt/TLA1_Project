# Smart Income Category Ledger

## Project Description

This project is a React JS refactor of the previous Vanilla JavaScript Income Category Ledger.

The original system used DOM manipulation:
- document.getElementById()
- addEventListener()
- insertAdjacentHTML()

The React version converts these actions into declarative programming using components and state management.

---

# React Components

## App.jsx

The main component.

Responsibilities:
- Stores category data using useState()
- Adds categories
- Deletes categories
- Passes data to child components


## IncomeForm.jsx

Handles user input.

Uses:
- useState()
- controlled components
- form submission


## IncomeTable.jsx

Displays ledger records.

Uses:
- map()
- props
- conditional rendering


## Dashboard.jsx

Displays summary information.

---

# AI Implementation Defense

AI tools were used as assistance during development.

AI helped with:
- Creating the React component structure
- Debugging syntax errors
- Improving CSS design
- Explaining React concepts

However, I reviewed and understood every generated code section.

The main React concepts used are:

## useState()

useState stores changing data.

Example:

const [categories,setCategories] = useState([]);

When a category is added,
setCategories() updates the UI automatically.


## Props

Props allow components to communicate.

Example:

App sends category data to IncomeTable.


## Declarative Rendering

Instead of manually creating HTML rows like Vanilla JavaScript,
React automatically updates the interface based on the current state.


---

# Features

- Add income category
- Delete income category
- Dynamic table rendering
- Category counter dashboard
- Responsive interface


---

# Deployment


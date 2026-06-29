# DevSnap — Session Summary

## What We Built
A Linktree-style link-in-bio page using React + Vite with:
- A reusable `LinkCard` component driven by props
- A light/dark mode toggle using `useState`
- Dynamic `className` injection for theme switching

---

## File Structure
```
src/
  App.jsx       ← main container, state hub
  LinkCard.jsx  ← reusable card component
  App.css       ← theme + layout styles
```

---

## App.jsx — How It Works

```jsx
import { useState } from 'react'
import './App.css'
import LinkCard from './LinkCard.jsx'

function App() {
  const [isDarkMode, setDarkMode] = useState(false)

  return (
    <div className={`app-container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <div>DevSnap</div>

      <LinkCard title="Click my name" url="https://yoursite.com" icon="😁" />
      <LinkCard title="Click my bio"  url="https://yoursite.com" icon="🐭" />

      <button onClick={() => setDarkMode(!isDarkMode)}>Toggle theme</button>
    </div>
  )
}

export default App
```

### Key concepts in App.jsx
| Line | Concept |
|---|---|
| `const [isDarkMode, setDarkMode] = useState(false)` | Destructure state variable + setter from useState |
| `className={...}` | Curly braces = switch to JavaScript inside JSX |
| `` `app-container ${...}` `` | Backticks = template literal, mixing fixed string + dynamic value |
| `isDarkMode ? "dark-theme" : "light-theme"` | Ternary picks which class to append |
| `onClick={() => setDarkMode(!isDarkMode)}` | Arrow function flips the boolean on click |

---

## LinkCard.jsx — How It Works

```jsx
const LinkCard = ({ title, url, icon }) => {
  return (
    <div className="link-card">
      <a href={url} target="_blank" rel="noreferrer">{icon} {title}</a>
    </div>
  )
}

export default LinkCard
```

### Key concepts in LinkCard.jsx
| Line | Concept |
|---|---|
| `({ title, url, icon })` | Props destructured directly in the function parameter |
| `href={url}` | Curly braces inject a prop value into a JSX attribute |
| `{icon} {title}` | Curly braces inject prop values into JSX content |
| `export default LinkCard` | Makes the component importable in other files |

---

## JSX Syntax Rules (the ones that tripped you up)

### Static vs dynamic className
```jsx
<div className="app-container">           // static — plain quotes
<div className={myClass}>                 // dynamic — curly braces, no backticks
<div className={`app-container ${myClass}`}>  // mixed — curly braces + backticks
```

### When do you need backticks?
Only when you're **building a string** that combines fixed text AND a variable.
If you're just passing a variable or choosing between two strings, no backticks needed.

### The single parent rule
A React component's `return` can only have **one root element**.
```jsx
// WRONG — two siblings at the top level
return (
  <div>Title</div>
  <div>Content</div>
)

// RIGHT — one parent wrapping both
return (
  <div>
    <div>Title</div>
    <div>Content</div>
  </div>
)
```

### Importing a component vs a stylesheet
```jsx
import './App.css'          // side-effect import (no name needed)
import LinkCard from './LinkCard.jsx'  // default import (needs a name to use it)
```

---

## Round 2 Game Plan
Delete all the code and rebuild from scratch using your own steps:

**App.jsx**
1. Declare theme variable + setter with `useState`
2. Create main div with dynamic `className` (base class + ternary)
3. Add `<LinkCard />` components with props
4. Add toggle `<button>` with `onClick`

**LinkCard.jsx**
1. Declare component with destructured props as parameter: `({ title, url, icon })`
2. Return JSX using props as values
3. `export default LinkCard`

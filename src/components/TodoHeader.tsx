import React, { useState } from "react";

const TodoHeader = () => {
  const [showSettings, setShowSettings] = useState(false)
  
  return (
    <header className="header">
      <h1 className={`h1 ${showSettings ? 'mobile-hidden' : ''}`}>Tempero</h1>
      <button
        className={`settings-btn ${showSettings ? 'rotate': ''}`}
        title="Toggle Settings"
        aria-expanded={showSettings}
        // @ts-ignore
        onClick={() => setShowSettings(!showSettings)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </button>
    </header>
  )
}

export default TodoHeader;
import { useState } from "react";

// We want to enable all the features of useState, but also persist values to localStorage so that, for example, progress in a form can be saved even if the user accidentally quits their browser and has to come back to the form later.

// Goals for this custom hook:
// - if value already exists in localStorage, use that value for initialization
// - persist value to localStorage with every setValue call
// - Don't forget to stringify before saving an object to localStorage, and parse when retrieving an object!
// - should provide the same interface as useState on the component side (and just provide the bonus that any value controlled by this hook will be saved and persisted to localStorage)

export const useLocalStorage = (key, initialValue) => {
  // we don't know what the initial value is yet, we have to run a function to figure it out!
  // If the value is already saved in local storge, use it. Otherwise, use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    } else {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

// the "interface" for this hook is exactly like useState
// On the component side, use this hook like this:
// [storedValue, setValue] = useLocalStorage(initialValue)

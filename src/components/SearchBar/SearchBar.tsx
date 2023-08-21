import { useState, useEffect, useRef } from "react";
import styles from "./SearchBar.module.css";

import { fromEvent } from "rxjs";
import { debounceTime, map, distinctUntilChanged } from "rxjs/operators";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const subscription = fromEvent<InputEvent>(inputRef.current, "input")
      .pipe(
        map((event) => (event.target as HTMLInputElement).value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        setSearchTerm(value);
        setResults([
          value + " | result1",
          value + " | result2",
          value + " | result3",
        ]);
      });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className={styles.searchBar}>
      <input
        ref={inputRef}
        id="search-input"
        type="text"
        placeholder="Recherche..."
      />
      {searchTerm && <h3>Recherche pour: {searchTerm}</h3>}
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;

import React, { useState, useEffect } from 'react';

const App = () => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 2000);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        if (debouncedQuery) {
            fetch(`https://api.example.com/search?q=${debouncedQuery}`)
                .then(response => response.json())
                .then(data => setResults(data))
                .catch(error => console.error('Error fetching data:', error));
        } else {
            setResults([]);
        }
    }, [debouncedQuery]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
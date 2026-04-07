import { useState } from 'react';

/**
 * Custom hook to manage the state of an expandable accordion list
 */
export function useExpandable() {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCard = (id) => {
        setExpandedCard((prev) => (prev === id ? null : id));
    };

    return { expandedCard, toggleCard };
}

import React, { KeyboardEventHandler, useState } from 'react';
import { Input, Container } from './styles';

interface SearchBarProps {
    placeholder: string;
    onSearch: (e: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
    const [userInput, setUserInput] = useState<string>();
    return (
        <Container>
            <Input
                type="text"
                aria-label={placeholder}
                placeholder={placeholder}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => (e.key === "Enter" && userInput ? onSearch(userInput) : null)}
            />
        </Container>
    );
}

export { SearchBar };
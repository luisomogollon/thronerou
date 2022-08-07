import React from 'react';
import { createContext, useState } from 'react';

export const PersonaContext = createContext();

const initializePersonaData = {}

export const PersonaProvider = ({ children }) => {
    const [persona, setPersona] = useState(initializePersonaData);

    const setter = (data) => setPersona({ ...data })
    return <PersonaContext.Provider
        value={{ persona, setter }}
    >
        {children}
    </PersonaContext.Provider>
}
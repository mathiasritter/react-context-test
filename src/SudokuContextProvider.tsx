import React, { createContext, PropsWithChildren, FC, useState } from "react";

interface SudokuContextType {
    grid: string[][];
    updateCell: (row: number, col: number, content: string) => void;
}

export const SudokuContext = createContext({} as SudokuContextType);

const initialGrid = Array(9).fill("").map(() => Array(9).fill(""))

export const SudokuContextProvider: FC<PropsWithChildren<unknown>> = ( { children } ) => {
    const [grid, setGrid] = useState(initialGrid);

    const updateCell = (row: number, col: number, content: string) => {
        if (!/^\d?$/.test(content)) {
            return;
        }

        const newGrid = grid.map(row => row.slice()); // create a copy of the grid array
        newGrid[row][col] = content;
        setGrid(newGrid);
    };

    return (
        <SudokuContext.Provider value={{ grid, updateCell }}>
            { children }
        </SudokuContext.Provider>
    );
};

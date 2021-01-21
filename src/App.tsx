import React from "react";
import { SudokuContextProvider } from "./SudokuContextProvider";
import { Sudoku } from "./Sudoku";

function App() {
    return (
        <div className="App">
            <SudokuContextProvider>
                <Sudoku />
            </SudokuContextProvider>
        </div>
    );
}

export default App;

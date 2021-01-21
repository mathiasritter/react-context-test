import React, { FC, useContext } from "react";
import { SudokuContext } from "./SudokuContextProvider";

export const Sudoku: FC = () => {
    const { grid, updateCell } = useContext(SudokuContext);

    return (
        <table>
            {grid.map((row, rowIndex) => <tr>{row.map((col, colIndex) => (
                <td><input key={rowIndex + "" + colIndex} value={col} onChange={e => updateCell(rowIndex, colIndex, e.target.value)}/></td>
            ))}
            </tr>)}
        </table>
    )
}

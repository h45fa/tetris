import React from "react";
import { ROWPOINTS } from "../setup";

export const useGameStatus = (rowsClear: number) => {
    const [score, setScore] = React.useState(0);
    const [rows, setRows] = React.useState(0);
    const [level, setLevel] = React.useState(1);

    React.useEffect(() => {
        if(rowsClear > 0) {
            setScore(prev => prev + ROWPOINTS[rowsClear -1] * level);
            setRows(prev => prev + rowsClear);
        }
    }, [rowsClear])
    return {score, setScore, rows, setRows, level, setLevel};
};
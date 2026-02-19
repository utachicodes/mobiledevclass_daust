export type Player = 'X' | 'O';
export type SquareValue = Player | null;
export type GameBoard = SquareValue[];

export const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

export const checkWinner = (board: GameBoard): Player | 'Draw' | null => {
    for (const [a, b, c] of WINNING_COMBINATIONS) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a] as Player;
        }
    }
    if (board.every(square => square !== null)) {
        return 'Draw';
    }
    return null;
};

// Minimax algorithm for computer AI
export const getBestMove = (board: GameBoard, aiPlayer: Player): number => {
    const opponent = aiPlayer === 'X' ? 'O' : 'X';

    const minimax = (currentBoard: GameBoard, isMaximizing: boolean): number => {
        const winner = checkWinner(currentBoard);
        if (winner === aiPlayer) return 10;
        if (winner === opponent) return -10;
        if (winner === 'Draw') return 0;

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (currentBoard[i] === null) {
                    currentBoard[i] = aiPlayer;
                    const score = minimax(currentBoard, false);
                    currentBoard[i] = null;
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (currentBoard[i] === null) {
                    currentBoard[i] = opponent;
                    const score = minimax(currentBoard, true);
                    currentBoard[i] = null;
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    };

    let bestScore = -Infinity;
    let move = -1;

    for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
            board[i] = aiPlayer;
            const score = minimax(board, false);
            board[i] = null;
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }

    // Fallback just in case
    if (move === -1) {
        move = board.findIndex(s => s === null);
    }

    return move;
};

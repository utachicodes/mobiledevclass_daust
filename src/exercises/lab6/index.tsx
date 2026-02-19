import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useTheme } from '../common/ThemeContext';
import TicTacToeBoard from './TicTacToeBoard';
import { checkWinner, getBestMove, GameBoard, Player, WINNING_COMBINATIONS } from './logic';
import { Ionicons } from '@expo/vector-icons';

type GameMode = 'Friend' | 'Computer' | null;

export default function Lab6() {
    const { colors } = useTheme();
    const [gameMode, setGameMode] = useState<GameMode>(null);
    const [board, setBoard] = useState<GameBoard>(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
    const [winner, setWinner] = useState<Player | 'Draw' | null>(null);
    const [winningLine, setWinningLine] = useState<number[] | null>(null);
    const [scores, setScores] = useState({ X: 0, O: 0, Draw: 0 });

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer('X');
        setWinner(null);
        setWinningLine(null);
    };

    const handlePress = (index: number) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const result = checkWinner(newBoard);
        if (result) {
            setWinner(result);
            updateScores(result);
            if (result !== 'Draw') {
                const line = WINNING_COMBINATIONS.find(([a, b, c]) =>
                    newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]
                );
                setWinningLine(line || null);
            }
        } else {
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };

    const updateScores = (result: Player | 'Draw') => {
        setScores(prev => ({
            ...prev,
            [result]: prev[result] + 1
        }));
    };

    // Computer Move Logic
    useEffect(() => {
        if (gameMode === 'Computer' && currentPlayer === 'O' && !winner) {
            const timeout = setTimeout(() => {
                const move = getBestMove(board, 'O');
                if (move !== -1) handlePress(move);
            }, 600);
            return () => clearTimeout(timeout);
        }
    }, [currentPlayer, gameMode, winner, board]);

    if (!gameMode) {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
                <View style={styles.landingContent}>
                    <Ionicons name="grid-outline" size={80} color={colors.primary} />
                    <Text style={[styles.title, { color: colors.text }]}>Tic Tac Toe</Text>
                    <Text style={[styles.subtitle, { color: colors.secondary }]}>Choose your game mode</Text>

                    <TouchableOpacity
                        style={[styles.modeButton, { backgroundColor: colors.primary }]}
                        onPress={() => setGameMode('Friend')}
                    >
                        <Ionicons name="people-outline" size={24} color="#fff" />
                        <Text style={styles.modeButtonText}>Play with Friend</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.modeButton, { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.primary }]}
                        onPress={() => setGameMode('Computer')}
                    >
                        <Ionicons name="desktop-outline" size={24} color={colors.primary} />
                        <Text style={[styles.modeButtonText, { color: colors.primary }]}>Play with Computer</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setGameMode(null)}>
                    <Ionicons name="arrow-back" size={24} color={colors.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: colors.text }]}>
                    {gameMode === 'Friend' ? 'Local Multiplayer' : 'Solo vs AI'}
                </Text>
                <TouchableOpacity onPress={resetGame}>
                    <Ionicons name="refresh" size={24} color={colors.text} />
                </TouchableOpacity>
            </View>

            <View style={styles.scoreBoard}>
                <View style={styles.scoreItem}>
                    <Text style={[styles.scoreLabel, { color: colors.secondary }]}>X (You)</Text>
                    <Text style={[styles.scoreValue, { color: colors.text }]}>{scores.X}</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={[styles.scoreLabel, { color: colors.secondary }]}>Draws</Text>
                    <Text style={[styles.scoreValue, { color: colors.text }]}>{scores.Draw}</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={[styles.scoreLabel, { color: colors.secondary }]}>{gameMode === 'Computer' ? 'Computer' : 'O'}</Text>
                    <Text style={[styles.scoreValue, { color: colors.text }]}>{scores.O}</Text>
                </View>
            </View>

            <View style={styles.statusContainer}>
                {winner ? (
                    <Text style={[styles.statusText, { color: colors.primary }]}>
                        {winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!`}
                    </Text>
                ) : (
                    <Text style={[styles.statusText, { color: colors.text }]}>
                        {currentPlayer}'s Turn
                    </Text>
                )}
            </View>

            <View style={styles.gameArea}>
                <TicTacToeBoard
                    board={board}
                    onPress={handlePress}
                    winningLine={winningLine}
                />
            </View>

            <TouchableOpacity
                style={[styles.resetBtn, { backgroundColor: colors.primary }]}
                onPress={resetGame}
            >
                <Text style={styles.resetBtnText}>New Round</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    landingContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 40,
    },
    modeButton: {
        width: '100%',
        flexDirection: 'row',
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    modeButtonText: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 12,
        color: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scoreBoard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderRadius: 15,
    },
    scoreItem: {
        alignItems: 'center',
    },
    scoreLabel: {
        fontSize: 12,
        marginBottom: 5,
    },
    scoreValue: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    statusContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    statusText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    gameArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resetBtn: {
        margin: 30,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    resetBtnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Player, GameBoard } from './logic';
import { useTheme } from '../common/ThemeContext';

interface TicTacToeBoardProps {
    board: GameBoard;
    onPress: (index: number) => void;
    winningLine: number[] | null;
}

const { width } = Dimensions.get('window');
const BOARD_SIZE = width * 0.9;
const SQUARE_SIZE = BOARD_SIZE / 3;

const TicTacToeBoard: React.FC<TicTacToeBoardProps> = ({ board, onPress, winningLine }) => {
    const { colors } = useTheme();

    const renderSquare = (index: number) => {
        const isWinningSquare = winningLine?.includes(index);
        const value = board[index];

        return (
            <TouchableOpacity
                key={index}
                style={[
                    styles.square,
                    {
                        backgroundColor: colors.card,
                        borderColor: colors.border,
                    },
                    isWinningSquare && { backgroundColor: colors.primary + '33' }
                ]}
                onPress={() => onPress(index)}
                disabled={value !== null || winningLine !== null}
            >
                {value && (
                    <Text
                        style={[
                            styles.squareText,
                            { color: value === 'X' ? '#FF3B30' : '#007AFF' }
                        ]}
                    >
                        {value}
                    </Text>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <View style={[styles.board, { backgroundColor: colors.border }]}>
            {board.map((_, index) => renderSquare(index))}
        </View>
    );
};

const styles = StyleSheet.create({
    board: {
        width: BOARD_SIZE,
        height: BOARD_SIZE,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 2,
    },
    square: {
        width: SQUARE_SIZE - 1, // subtle gap
        height: SQUARE_SIZE - 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
    },
    squareText: {
        fontSize: 48,
        fontWeight: 'bold',
    },
});

export default TicTacToeBoard;

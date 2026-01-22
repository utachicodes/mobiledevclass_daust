import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Tag from './Tag';

export interface Recipe {
    id: string;
    title: string;
    image: string;
    cookTime: number;
    difficulty: string;
    rating: number;
    tags: string[];
}

interface RecipeCardProps {
    recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: recipe.image }} style={styles.image} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{recipe.title}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.star}>⭐</Text>
                        <Text style={styles.rating}>{recipe.rating}</Text>
                    </View>
                </View>

                <View style={styles.metaRow}>
                    <Text style={styles.metaText}>⏱️ {recipe.cookTime} min</Text>
                    <Text style={styles.dot}>•</Text>
                    <View style={styles.difficultyBadge}>
                        <Text style={styles.difficultyText}>{recipe.difficulty}</Text>
                    </View>
                </View>

                <View style={styles.tagsRow}>
                    {recipe.tags.map((tag, index) => (
                        <Tag key={index} text={tag} variant="default" />
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    content: {
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1a1a1a',
        flex: 1,
        marginRight: 12,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF9E6',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    star: {
        fontSize: 12,
        marginRight: 4,
    },
    rating: {
        fontWeight: '700',
        color: '#FFB800',
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    metaText: {
        color: '#666',
        fontSize: 14,
    },
    dot: {
        color: '#ccc',
        marginHorizontal: 8,
    },
    difficultyBadge: {
        backgroundColor: '#F0F9FF',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    difficultyText: {
        color: '#007AFF',
        fontSize: 12,
        fontWeight: '600',
    },
    tagsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

/**
 * Formats a numeric price into a West African CFA (XOF) string.
 * CFA typically doesn't use decimals in everyday commerce.
 * 
 * @param {number} amount - The numeric price amount
 * @returns {string} - Formatted price with 'CFA' suffix (e.g., 10,000 CFA)
 */
export const formatPrice = (amount) => {
    if (amount === undefined || amount === null) return "0 CFA";

    // Format with thousands separators and no decimals
    const formatted = new Intl.NumberFormat('fr-FR', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);

    return `${formatted} CFA`;
};

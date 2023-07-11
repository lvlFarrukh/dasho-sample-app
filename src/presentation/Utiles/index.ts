export const getSize = (dimension: number, percentage: number) => {
    return dimension - ((dimension / 100) * percentage)
}
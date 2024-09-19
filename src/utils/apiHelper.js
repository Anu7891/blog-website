

export const fetchCategories = async () => {
    try {
        const response = await fetch('https://monil-news-letter-crud.vercel.app/categories');
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return null; // Return null or an empty array as a fallback
    }
};

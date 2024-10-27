import { SEARCH_ARTICLES_URL } from "./config";

export async function getSearchResults(searchQuery) {
    try {
        const response = await fetch(`${SEARCH_ARTICLES_URL}?search=${searchQuery}`, {
            cache: "no-store",  // Ensure that the data is always fresh and not cached
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch search results, status code: ${response.status}`);
        }

        const data = await response?.json();

        return data || [];
    } catch (error) {
        console.error('Error fetching search results:', error);
        return [];
    }
}

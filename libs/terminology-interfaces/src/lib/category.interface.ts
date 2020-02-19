export interface Category {
    categoryTitle: string;
    categories?: Category[];
    id?: string | null;
    icons?: string[];
    description: string;
}
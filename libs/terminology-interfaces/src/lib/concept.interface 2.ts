
import { Heading } from './Heading.Interface';

export interface Concept {
    id: string;
    headings: Heading[];
    descriptions: Heading[];
    breadcrumbs: string;
}

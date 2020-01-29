
import { Heading } from './Heading.Interface';

export interface Concept {
    id: string;
    headings: Heading[];
    description: string;
    breadcrumbs: string;
}

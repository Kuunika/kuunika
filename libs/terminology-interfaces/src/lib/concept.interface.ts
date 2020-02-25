import { Heading } from './heading.interface';

export interface Concept {
    id: string;
    headings: Heading[];
    descriptions: Heading[];
    breadcrumb: string;
}
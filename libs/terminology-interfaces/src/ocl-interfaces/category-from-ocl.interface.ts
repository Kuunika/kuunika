export interface CategoryFromOCL {
    type:               string;
    uuid:               string;
    id:                 string;
    external_id:        string;
    concept_class:      string;
    datatype:           string;
    display_name:       string;
    display_locale:     string;
    names:              Name[];
    descriptions:       Description[];
    retired:            boolean;
    source:             string;
    source_url:         string;
    owner:              string;
    owner_type:         string;
    owner_url:          string;
    version:            string;
    created_on:         string;
    updated_on:         string;
    version_created_on: string;
    version_created_by: string;
    extras:             Extras;
    mappings:           null;
    is_latest_version:  boolean;
    locale:             null;
    version_url:        string;
    url:                string;
}

interface Description {
    uuid:             string;
    external_id:      null;
    description:      string;
    locale:           string;
    locale_preferred: boolean;
    description_type: string;
    type:             string;
}

interface Extras {
    Descriptions:   string;
    Category:       string;
    Route:          string;
    Table:          string;
    Details:        string;
    Icon:           string;
}

interface Name {
    uuid:             string;
    external_id:      null;
    name:             string;
    locale:           string;
    locale_preferred: boolean;
    name_type:        string;
    type:             string;
}

interface OclRequestMetaData {
    num_found: number;
    
}


export interface DhisProductMasterOclConcept {
    id:                string;
    external_id:       null;
    concept_class:     string;
    datatype:          string;
    retired:           boolean;
    source:            string;
    owner:             string;
    owner_type:        string;
    owner_url:         string;
    display_name:      string;
    display_locale:    string;
    version:           string;
    mappings:          Mapping[];
    is_latest_version: boolean;
    locale:            null;
    version_url:       string;
    url:               string;
}

export interface Mapping {
    external_id:      null;
    retired:          boolean;
    map_type:         string;
    source:           string;
    owner:            string;
    owner_type:       string;
    from_concept_url: string;
    to_concept_url:   string;
    to_source_url:    string;
    to_concept_code:  string;
    to_concept_name:  string;
    url:              string;
}

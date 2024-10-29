export const GET_FORM_FIELDS = (input: string, store_id : string) => `
query GetFormFields {
    GetFormFields(input: "${input}", store_id: "${store_id}") {
        attributeSet {
            abbreviation
            attribute_code
            attribute_type
            default
            entity_type
            group
            group_id
            input_type
            is_custom
            label
            is_used_for_disabling_body
            parent
            position
            field_options {
                label
                value
            }
        }
        attributeSetGroup {
            attribute_group
            fetch_product
            selection_type
            tool_tip
        }
        bodyAttributes {
            attribute_group
            bodyAttributes {
                attribute_code
                label
            }
        }
    }
}

`;

export const GET_PRODUCT_ATTRIBUTES_VIA_GROUP = (
    product_sku: string, 
    group_name: string, 
    store_id : string
  ) => {
    return `
    query GetProductAttributesViaGroup {
      GetProductAttributesViaGroup(
          product_sku: "${product_sku}"
          group_name: "${group_name}"
          store_id: "${store_id}"
      ) {
          groupAttributes {
              attribute_code
              attribute_label
              attribute_value
          }
      }
    }`
  }
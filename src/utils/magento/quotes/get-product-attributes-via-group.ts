"use server";

import getData from "@/api/magento";
import { GET_PRODUCT_ATTRIBUTES_VIA_GROUP } from "@/api/magento/queries/configurator/get-product-attributes-via-group";
import { logErrorToFile } from "@/utils/logging/logger";
import { fileURLToPath } from "url";

async function getProductAttributesViaGroup(
  product_sku: string,
  group_name: string,
  store_id: string
) {
  try {
    const data = await getData({
      query: GET_PRODUCT_ATTRIBUTES_VIA_GROUP(
        product_sku,
        group_name,
        store_id
      ),
    });

    return {
      data: data?.data?.data,
      error: data?.data?.errors?.[0]?.message || null,
    };
  } catch (error: any) {
    logErrorToFile(error, fileURLToPath(import.meta.url));
    throw new URIError(error);
  }
}

export default getProductAttributesViaGroup;

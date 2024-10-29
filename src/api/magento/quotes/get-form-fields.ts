"use server";
import getData from "@/api/magento";
import { GET_FORM_FIELDS } from "@/api/magento/queries/configurator/get-form-fields";
import { logErrorToFile } from "@/utils/logging/logger";
import { fileURLToPath } from "url";

const getFormFields = async (input: string, store_id: string) => {
  let formFields;
  try {
    const fetchedData = await getData({
      query: GET_FORM_FIELDS(input, store_id),
    });
    formFields = fetchedData.data;
    if (!formFields) {
      logErrorToFile("Data not fetched", fileURLToPath(import.meta.url));
      throw new Error("Data not fetched");
    }
    return { data: formFields?.data, error: formFields.errors || null };
  } catch (error) {
    logErrorToFile(error, fileURLToPath(import.meta.url));
    throw new Error("Data not fetched");
  }
};

export default getFormFields;

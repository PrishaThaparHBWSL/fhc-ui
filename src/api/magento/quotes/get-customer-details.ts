"use server";
import getData from "@/api/magento";
import { GET_DETAILS } from "@/api/magento/details/get-customer-details";
import { logErrorToFile } from "@/utils/logging/logger";
import { fileURLToPath } from "url";

const ServerGetCustomerDetails = async (token: string) => {
  let customerDetails, customerError;
  try {
    const customerData = await getData({
      query: GET_DETAILS(),
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    customerDetails = customerData?.data?.data?.customer;
    customerError = customerData?.data?.errors?.[0]?.message;
  } catch (error) {
    logErrorToFile(error, fileURLToPath(import.meta.url));
    customerError = "Something went Wrong!";
  }

  return { customerDetails, customerError };
};

export default ServerGetCustomerDetails;

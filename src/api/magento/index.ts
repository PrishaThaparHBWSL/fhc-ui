import { logErrorToFile } from "@/utils/logging/logger";
import { fileURLToPath } from "url";

interface GetResult {
  data: any;
  error: any;
}

const getData = async ({
  query,
  variables = {},
  headers = {},
}: {
  query: string;
  variables?: object;
  headers?: object;
}): Promise<GetResult> => {
  let result: GetResult = { data: null, error: null };

  try {
    let ENDPOINT = process.env.ENDPOINT_MAGENTO;

    if (!ENDPOINT) {
      logErrorToFile(
        "Magento Endpoint Missing",
        fileURLToPath(import.meta.url)
      );
      throw new Error("Magento Endpoint Missing");
    } else {
      ENDPOINT.replace(/^(\/|\/$)/g, "");
    }

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    const response = await fetch(ENDPOINT, {
      body: JSON.stringify({
        query,
        variables,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      cache: "no-store",
    });
    const data = await response.json();
    result = { ...result, data };
  } catch (error) {
    logErrorToFile(error, fileURLToPath(import.meta.url));
  }
  return result;
};

export default getData;

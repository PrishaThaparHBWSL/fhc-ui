import fs from "fs";
import path from "path";

export const logErrorToFile = (error: any, filePath: any) => {
  try {
    const errorMessage = `ERROR: ${error}, FILE PATH: ${filePath}`;

    if (typeof window === "undefined") {
      const logDirectory = path.join(process.cwd(), "var/logs");
      const logFile = path.join(logDirectory, "error.log");
      if (!fs.existsSync(logDirectory)) {
        try {
          fs.mkdirSync(logDirectory);
        } catch (mkdirError) {
          console.error("Failed to create log directory:", mkdirError);
          return;
        }
      }

      const logMessage = `[${new Date().toISOString()}] ${errorMessage}\n`;

      try {
        fs.appendFileSync(logFile, logMessage, { flag: "a" });
      } catch (fileWriteError) {
        console.error("Failed to write to log file:", fileWriteError);
      }
    } else {
      console.error(
        "Attempted to log on the client side. Logging is server-side only."
      );
    }
  } catch (err) {
    console.error("An error occurred while attempting to log the error:", err);
  }
};

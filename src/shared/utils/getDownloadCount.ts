import { format } from "date-fns";

interface NpmStatResponse {
  downloads: number;
  end: string;
  package: string;
  start: string;
}

export default async function getDownloadCount(
  packageName: string | undefined
): Promise<number> {
  if (!packageName) {
    throw new Error("No package name specified.");
  }

  const start = "2012-01-15";
  const end = format(new Date(), "yyyy-MM-dd");

  const r = await fetch(
    `https://api.npmjs.org/downloads/point/${start}:${end}/${packageName}`
  );

  const npmStatResponse: NpmStatResponse = await r.json();

  return npmStatResponse.downloads;
}

import { fetchWpJson } from "../server/wp";

interface VercelRequest {
  method?: string;
  query?: Record<string, string | string[]>;
}

interface VercelResponse {
  setHeader(name: string, value: string): void;
  status(code: number): VercelResponse;
  json(data: any): VercelResponse;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const raw = req.query?.path;
  const path = Array.isArray(raw) ? raw[0] : raw;
  if (!path) {
    return res.status(400).json({ error: "Missing WordPress path" });
  }

  try {
    const data = await fetchWpJson(path);
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json(data);
  } catch (error) {
    console.error("WordPress proxy error:", error);
    return res.status(502).json({ error: "WordPress content is unavailable" });
  }
}

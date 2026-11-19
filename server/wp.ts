const WP_ORIGIN = process.env.WP_ORIGIN || "https://www.iflierintlschl.org";
const ALLOWED_PATH = /^\/wp\/v2\/(?:posts|pages|media|categories|tags)(?:\/\d+)?(?:\?.*)?$/;

export function stripInjectedSuffix(body: string): string {
  const marker = body.indexOf("<!--");
  return (marker === -1 ? body : body.slice(0, marker)).trim();
}

export async function fetchWpJson(path: string): Promise<unknown> {
  if (!ALLOWED_PATH.test(path)) {
    throw new Error("Unsupported WordPress path");
  }

  const response = await fetch(`${WP_ORIGIN}/wp-json${path}`, {
    headers: { Accept: "application/json" },
    redirect: "follow"
  });

  if (!response.ok) {
    throw new Error(`WordPress returned ${response.status}`);
  }

  return JSON.parse(stripInjectedSuffix(await response.text()));
}

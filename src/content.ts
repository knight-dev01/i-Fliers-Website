const WP_API = "/api/wp";
const IMAGE_PAGE_SLUG = "website-images";
const RECENT_POST_YEARS = 2;

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  publishedAt: string;
  category: string;
  snippet: string;
  author: string;
  imageUrl: string | null;
  url: string;
}

export interface WpImage {
  url: string;
  title: string;
  description: string;
}

async function wpGet(path: string): Promise<any> {
  const response = await fetch(`${WP_API}?path=${encodeURIComponent(path)}`);
  if (!response.ok) {
    throw new Error(`Content request failed: ${response.status}`);
  }
  return response.json();
}

function decodeHtml(value: string): string {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

function stripHtml(html: string): string {
  return decodeHtml(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

export async function fetchWpNews(limit = 6): Promise<NewsArticle[]> {
  const posts = await wpGet(`/wp/v2/posts?_embed=1&per_page=${limit}`);
  if (!Array.isArray(posts)) return [];

  const cutoff = new Date();
  cutoff.setFullYear(cutoff.getFullYear() - RECENT_POST_YEARS);
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });

  return posts
    .map((post: any) => ({
      id: post.id,
      title: stripHtml(post.title?.rendered || ""),
      date: formatter.format(new Date(post.date)),
      publishedAt: post.date,
      category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "School News",
      snippet: stripHtml(post.excerpt?.rendered || "Read the full story on the school website."),
      author: post._embedded?.author?.[0]?.name || "i-Flier Admin",
      imageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
      url: post.link || "https://www.iflierintlschl.org/"
    }))
    .filter((article: NewsArticle) => new Date(article.publishedAt).getTime() >= cutoff.getTime());
}

export async function fetchWpImages(): Promise<WpImage[]> {
  const pages = await wpGet(`/wp/v2/pages?slug=${IMAGE_PAGE_SLUG}&_fields=id,content`);
  if (!Array.isArray(pages) || pages.length === 0) return [];

  const html: string = pages[0]?.content?.rendered || "";
  if (!html) return [];

  const parsed = new DOMParser().parseFromString(html, "text/html");
  return Array.from(parsed.querySelectorAll("img"))
    .map((img) => {
      const url = img.getAttribute("src")?.replace(/&amp;/g, "&") || "";
      const caption = img.closest("figure")?.querySelector("figcaption")?.textContent?.trim() || "";
      const alt = img.getAttribute("alt")?.trim() || "";
      return {
        url,
        title: caption || alt || "Campus Life",
        description: alt && caption ? alt : "i-Flier International School campus"
      };
    })
    .filter((image) => image.url.length > 0);
}

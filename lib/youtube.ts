export function youtubeVideoId(link: string): string | null {
  try {
    const u = new URL(link);
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      return id || null;
    }
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname === "/watch") return u.searchParams.get("v");
      if (u.pathname.startsWith("/embed/"))
        return u.pathname.split("/")[2] ?? null;
      if (u.pathname.startsWith("/shorts/"))
        return u.pathname.split("/")[2] ?? null;
    }
  } catch {
    return null;
  }
  return null;
}

export function youtubeEmbedUrl(link: string): string | null {
  const id = youtubeVideoId(link);
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}

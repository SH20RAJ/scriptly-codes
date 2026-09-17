import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const posts = allPosts;
  const sortedPosts = [...posts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">Blog <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">{sortedPosts.length} posts</span></h1>
        <p className="text-sm text-muted-foreground mb-8">
          My thoughts on software development, life, and more.
        </p>
      </BlurFade>

      {sortedPosts.length > 0 ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col gap-5">
            {sortedPosts.map((post, id) => {
              return (
                <BlurFade
                  key={post._meta.path}
                  delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                >
                  <Link
                    className="flex flex-col space-y-1 mb-4 group"
                    href={`/blog/${post._meta.path}`}
                  >
                    <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <p className="tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-1 font-medium">
                        {post.title}
                        <span className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1">
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {post.publishedAt}
                      </p>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>
        </BlurFade>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">
              No blog posts yet. Check back soon!
            </p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}

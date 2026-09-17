import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <>
      <div className="flex h-[calc(100vh-164px)] items-center justify-center overflow-auto">
        <div className="max-w-[260px] grid-cols-1 space-y-4 md:max-w-[487px]">
          <div className="relative m-auto flex h-[200px] w-[200px] justify-center md:h-[240px] md:w-[240px]">
            <Image
              src={siteConfig.images.home.src}
              alt={siteConfig.images.home.alt}
              fill
              priority
              sizes="(max-width: 240px) 100vw"
              className="rounded-full object-cover pb-2"
            />
          </div>
          <h1 className="flex justify-center text-6xl font-extrabold tracking-tighter md:text-8xl">
            Hello! 👋
          </h1>
          <h2 className="text-center text-muted-foreground md:text-lg">
            I like to make full-stack apps with Next.js and TypeScript.
          </h2>
          <div className="flex justify-center gap-4">
            <Link
              href={siteConfig.files.resume}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Resume
            </Link>
            <Link
              href={siteConfig.links.email}
              className={buttonVariants({
                variant: "outline",
              })}
            >
              Reach out
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

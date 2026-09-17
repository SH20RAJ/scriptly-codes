import Image from "next/image"

import { siteConfig } from "@/config/site"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Page() {
  return (
    <>
      <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <div className="max-w-[728px] text-base">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The idea behind this page should be to tell the reader more about
            yourself.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            One of the most important things—here and in life generally—is to
            know your audience. Make your <b>About</b> page interesting,
            concise, and accessible to technical and non-technical audiences
            alike.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            In other words, try to avoid technical jargon unless you are
            confident that you cannot get your point across without it. Speak in
            short, easy-to-understand sentences whenever possible.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            With that being said, there are no hard-and-fast rules for how to
            write a compelling <b>About</b> page. It serves its purpose as long
            as it&apos;s unique to you and the reader walks away with a clear
            idea of who you are.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Further, it would be a great idea to include an image or two with
            accompanying captions in your <b>About</b> page. Pure text and
            nothing else for a page like this is kind of boring.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">Good luck!</p>
          {siteConfig.images.about.length
            ? siteConfig.images.about.map((item, index) => (
                <div key={index}>
                  <AspectRatio ratio={3 / 2} className="mt-6">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      priority
                      sizes="(max-width: 728px) 100vw"
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                  <div className="my-2 text-muted-foreground">
                    {item.caption}
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  )
}

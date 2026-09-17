import { siteConfig } from "@/config/site"
import { ProjectGallery } from "@/components/project-gallery"

export default function Page() {
  return (
    <>
      <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="max-w-[600px] text-lg text-muted-foreground">
          These are the projects I&apos;m most proud of. I strongly believe in
          open-source whenever possible. Feel free to{" "}
          <a
            href={siteConfig.links.email}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            reach out
          </a>{" "}
          and chat with me about any of them in more detail, including my
          proprietary projects!
        </p>
        <ProjectGallery items={siteConfig.projects} />
      </div>
    </>
  )
}

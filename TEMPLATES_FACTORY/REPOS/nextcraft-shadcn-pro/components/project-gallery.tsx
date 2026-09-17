import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Project } from "@/types/project"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProjectsProps {
  items?: Project[]
}

export function ProjectGallery({ items }: ProjectsProps) {
  return (
    <>
      {items?.length ? (
        <div className="flex max-w-[1580px] flex-wrap gap-6">
          {items?.map(
            (item, index) =>
              item.name && (
                <Card className="w-auto md:w-[600px]" key={index}>
                  <CardHeader className="px-6 pb-2">
                    <CardTitle>{item.name}</CardTitle>
                    {item.shortDescription ? (
                      <CardDescription>{item.shortDescription}</CardDescription>
                    ) : null}
                  </CardHeader>
                  <CardContent className="px-6 pb-5 pt-2">
                    {item.longDescription}
                    <br />
                    <br />
                    <div className="flex items-center justify-start gap-4">
                      <Link
                        href={item.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className={buttonVariants({
                          variant: "default",
                          className: "gap-2",
                        })}
                      >
                        <ExternalLink size={16} />
                        Live
                      </Link>
                      {item.sourceLink ? (
                        <Link
                          href={item.sourceLink}
                          target="_blank"
                          rel="noreferrer"
                          className={buttonVariants({
                            variant: "outline",
                            className: "gap-2",
                          })}
                        >
                          <ExternalLink size={16} />
                          Source
                        </Link>
                      ) : null}
                    </div>
                  </CardContent>
                  <CardContent className="flex flex-wrap gap-1 py-2">
                    {item.technologies.map((technology, index) => (
                      <Badge variant="secondary" key={index}>
                        {technology}
                      </Badge>
                    ))}
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              )
          )}
        </div>
      ) : null}
    </>
  )
}

// Credit: https://github.com/shadcn-ui/ui/blob/c21ecfb665214e18cd5914ea319f925cd676e786/apps/www/components/mobile-nav.tsx

"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Icons } from "@/components/icons"

interface MobileNavProps {
  items?: NavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div
          className={buttonVariants({
            size: "icon",
            variant: "ghost",
            className: "flex fill-current md:hidden",
          })}
        >
          <Icons.mobileNav className="flex h-5 w-5 " />
          <span className="sr-only">Menu</span>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="w-[320px] pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <div className="my-4 flex flex-col space-y-3 pb-10 pl-6">
          {siteConfig.nav?.map(
            (item) =>
              item.href && (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onOpenChange={setOpen}
                >
                  {item.title}
                </MobileLink>
              )
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}

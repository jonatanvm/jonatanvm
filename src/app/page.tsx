import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Card, CardContent } from "@/components/ui/card";
import { LinkedInIcon } from "@/components/icons/linkedIn-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { TwitterIcon } from "@/components/icons/twitter-icon";

function SocialLink({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <Link href={href} target={"_blank"} passHref>
      <Button variant={"outline"} size={"lg"} className={"w-full"}>
        {children}
      </Button>
    </Link>
  );
}

function Me({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardContent className="p-0 cursor-auto">
        <div className="flex items-center p-4 gap-x-4">
          <div className="flex-shrink-0">
            <img
              alt=""
              src={"/profile.png"}
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium">Jonatan von Martens</p>
            <p className="truncate text-sm">@jonatanvm</p>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-20 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-sm w-full">
        <div className="flex gap-4 items-center flex-col w-full">
          <Me className={"w-full"} />
          <ul className={"flex flex-col w-full gap-y-3"}>
            <li className={"w-full"}>
              <SocialLink href={"https://www.linkedin.com/in/jonatanvm/"}>
                <LinkedInIcon className="h-5 w-5" aria-label="LinkedIn" />
              </SocialLink>
            </li>
            <li>
              <SocialLink href={"https://github.com/jonatanvm"}>
                <GithubIcon className="h-5 w-5" aria-label={"Github"} />
              </SocialLink>
            </li>
            <li>
              <SocialLink href={"https://x.com/_jonatanvm"}>
                <TwitterIcon className="h-5 w-5" aria-label={"X.com"} />
              </SocialLink>
            </li>
          </ul>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-zinc-300 dark:text-zinc-800">
        © jonatanvm.com
      </footer>
    </div>
  );
}

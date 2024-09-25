import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkedInIcon } from "@/components/icons/linkedIn-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { TwitterIcon } from "@/components/icons/twitter-icon";
import Image from "next/image";
import { CircleDot, MailIcon } from "lucide-react";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";

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
            <Image
              alt="Profile picture"
              src={"/profile.png"}
              height={40}
              width={40}
              className="rounded-full"
              priority={true}
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="sm:text-sm font-medium">Jonatan von Martens</p>
            <p className="truncate sm:text-sm">@jonatanvm</p>
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
  const jobs = [
    {
      employer: "Elevenlabs",
      title: "Software Engineer",
      time: "Aug 2024 - Present",
    },
    {
      employer: "Root Signals",
      title: "Lead Software Engineer",
      time: "Apr 2024 - Aug 2024",
    },
    {
      employer: "Mobal",
      title: "Head of Product and Technology",
      time: "Jul 2021 - Aug 2023",
    },
    {
      employer: "RhombIT Consulting",
      title: "Software Engineer",
      time: "Jun 2019 - Jul 2021",
    },
    {
      employer: "SmartValley Wearable Oy",
      title: "CTO",
      time: "May 2017 - Aug 2020",
    },
    {
      employer: "jara.ai",
      title: "Co-founder",
      time: "Oct 2018 - Aug 2019",
    },
  ];
  return (
    <div className="grid items-center justify-items-center p-4 sm:p-20 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 w-full">
          <div className="flex flex-col gap-4 w-full sm:max-w-sm mx-auto">
            <Me className={"w-full"} />
            <ul className={"grid grid-cols-4 sm:grid-cols-4 w-full gap-3"}>
              <li className={"w-full"}>
                <SocialLink href={"https://www.linkedin.com/in/jonatanvm/"}>
                  <LinkedInIcon
                    className="h-5 w-5 shrink-0"
                    aria-label="LinkedIn"
                  />
                </SocialLink>
              </li>
              <li>
                <SocialLink href={"https://github.com/jonatanvm"}>
                  <GithubIcon
                    className="h-5 w-5 shrink-0"
                    aria-label={"Github"}
                  />
                </SocialLink>
              </li>
              <li>
                <SocialLink href={"https://x.com/_jonatanvm"}>
                  <TwitterIcon
                    className="h-5 w-5 shrink-0"
                    aria-label={"X.com"}
                  />
                </SocialLink>
              </li>
              <li>
                <SocialLink
                  href={"mailto:Jonatan <stepped_jays.0m@icloud.com>"}
                >
                  <MailIcon className="h-5 w-5 shrink-0" aria-label={"X.com"} />
                </SocialLink>
              </li>
            </ul>
          </div>
          <Card className={"w-full sm:max-w-sm mx-auto"}>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <Timeline className={"gap-y-4 mr-auto"}>
                {jobs.map((job) => (
                  <TimelineItem status="done" key={job.time}>
                    <TimelineHeading className={"sm:text-sm"}>
                      {job.employer}
                    </TimelineHeading>
                    <TimelineDot className="size-3">
                      <CircleDot />
                    </TimelineDot>
                    <TimelineLine className={"py-1"} done />
                    <TimelineContent className={"sm:text-sm flex flex-col"}>
                      <span className={"dark:text-zinc-300 text-zinc-700"}>
                        {job.title}
                      </span>
                      <span className={"dark:text-zinc-500 text-zinc-900"}>
                        {job.time}
                      </span>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-zinc-300 dark:text-zinc-800 hidden">
        © jonatanvm.com
      </footer>
    </div>
  );
}

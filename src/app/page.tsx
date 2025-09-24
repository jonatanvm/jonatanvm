import Link from "next/link";
import React from "react";
import {cn} from "@/lib/utils";
import {ModeToggle} from "@/components/mode-toggle";
import {Card, CardContent} from "@/components/ui/card";
import {LinkedInIcon} from "@/components/icons/linkedIn-icon";
import {GithubIcon} from "@/components/icons/github-icon";
import {TwitterIcon} from "@/components/icons/twitter-icon";
import Image from "next/image";
import {FolderCodeIcon, LinkIcon, MailIcon} from "lucide-react";

import {YoutubeIcon} from "@/components/icons/youtube";
import {ProductHuntIcon} from "@/components/icons/producthunt";
import {Experience, TimelineItem} from "@/components/experience";
import {SocialLink} from "@/components/social-link";
import {logPageView} from "@/components/utils";

function Me({className}: { className?: string }) {
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
            <ModeToggle/>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SocialLinks({className}: { className?: string }) {
  return (
    <ul className={cn("grid grid-cols-5 gap-3", className)}>
      <li className={"w-full"}>
        <SocialLink href={"https://www.linkedin.com/in/jonatanvm/"}>
          <LinkedInIcon className="h-5 w-5 shrink-0" aria-label="LinkedIn"/>
        </SocialLink>
      </li>
      <li>
        <SocialLink href={"https://github.com/jonatanvm"}>
          <GithubIcon className="h-5 w-5 shrink-0" aria-label={"Github"}/>
        </SocialLink>
      </li>
      <li>
        <SocialLink href={"https://x.com/jonatanvmartens"}>
          <TwitterIcon className="h-5 w-5 shrink-0" aria-label={"X.com"}/>
        </SocialLink>
      </li>
      <li>
        <SocialLink href={"mailto:Jonatan <stepped_jays.0m@icloud.com>"}>
          <MailIcon className="h-5 w-5 shrink-0" aria-label={"E-mail"}/>
        </SocialLink>
      </li>
      <li>
        <SocialLink href={"https://www.j16.io"}>
          <FolderCodeIcon
            className="h-5 w-5 shrink-0"
            aria-label={"Personal projects"}
          />
        </SocialLink>
      </li>
    </ul>
  );
}

const timeline: TimelineItem[] = [
  {
    title: (
      <a href={"https://elevenlabs.io/text-to-speech"} target={"_blank"}>
        Elevenlabs
      </a>
    ),
    subtitle: "AI Safety Engineering",
    time: "Feb 2025 - Present",
  },
  {
    title: (
      <a href={"https://elevenlabs.io/text-to-speech"} target={"_blank"}>
        Elevenlabs
      </a>
    ),
    subtitle: "Growth",
    time: "Oct 2024 - Feb 2025",
  },
  {
    title: (
      <a href={"https://elevenlabs.io/text-to-speech"} target={"_blank"}>
        Elevenlabs
      </a>
    ),
    subtitle: "Software Engineer",
    time: "Aug 2024 - Oct 2024",
  },
  {
    title: "Root Signals",
    subtitle: "Lead Software Engineer",
    time: "Apr 2024 - Aug 2024",
  },
  {
    title: "Mobal",
    subtitle: "Head of Product and Technology",
    time: "Jul 2021 - Aug 2023",
  },
  {
    title: "RhombIT Consulting",
    subtitle: "Software Engineer",
    time: "Jun 2019 - Jul 2021",
  },
  {
    title: "SmartValley Wearable Oy",
    subtitle: "CTO",
    time: "May 2017 - Aug 2020",
  },
  {
    title: "jara.ai",
    subtitle: "Co-founder",
    time: "Oct 2018 - Aug 2019",
  },
];

const speakingTimeline: TimelineItem[] = [
  {
    title: (
      <a href={"https://luma.com/jlkzijld?tk=JuEHd1"} target={"_blank"}>
        AI / LLM Developer Event
      </a>
    ),
    subtitle: "Symposium AI x Datacrunch",
    time: "August 27 2025",
  },
  {
    title: (
      <a href={"https://luma.com/nc900eb2"} target={"_blank"}>
        Audio Engineering & LLMs
      </a>
    ),
    subtitle: "Tandem Health",
    time: "May 22 2025",
  },
];

const pressTimeline: TimelineItem[] = [
  {
    title: (
      <a className={'flex items-center'} href={"https://www.exceptionalcap.com/exceptional100_2025"} target={"_blank"}>
        Exceptional 100 - 2025 <LinkIcon className={"w-3 h-3 ml-1"}/>
      </a>
    ),
    subtitle: "Exceptional Capital’s annual list of the top 100 engineers, researchers, and designers shaping hyper-growth companies.",
    time: "",
  },
];

const educationTimeline: TimelineItem[] = [
  {
    title: "Master of Science - Aalto University",
    subtitle: "Machine Learning, Data Science, and Artificial Intelligence",
    time: "Passed with Distinction",
  },
  {
    title: "Bachelor of Science - Aalto University",
    subtitle: "Computer Science",
    time: "",
  },
];

const projectsTimeline: TimelineItem[] = [
  {
    title: (
      <span className={"flex items-center gap-1.5"}>
        <Link
          href={"https://www.aiengineerpack.com"}
          rel={"noopener noreferrer"}
          target={"_blank"}
          className={"flex items-center hover:underline"}
        >
          AI Engineer Pack
          <LinkIcon className={"w-3 h-3 ml-1"}/>
        </Link>
      </span>
    ),
    subtitle: (
      <>
        <div className={"mt-1"}>
          Built a website for ElevenLabs, where AI Engineers can redeem discount
          codes to top AI tools.
        </div>
        <div
          className={
            "flex items-center justify-center my-1 rounded-lg overflow-hidden border-4 dark:border-zinc-800 aspect-[1064/720]"
          }
        >
          <Image
            width={400}
            height={300}
            src={"/aiengineerpack.png"}
            alt={"AI Engineer Pack screenshot"}
          />
        </div>
      </>
    ),
    time: "",
  },
  {
    title: (
      <span className={"flex items-center gap-1.5"}>
        <Link
          href={"https://www.xtovoice.com"}
          rel={"noopener noreferrer"}
          target={"_blank"}
          className={"flex items-center hover:underline"}
        >
          X to Voice
          <LinkIcon className={"w-3 h-3 ml-1"}/>
        </Link>
        <Link
          href={
            "https://github.com/elevenlabs/elevenlabs-examples/tree/main/examples/text-to-voice/x-to-voice"
          }
          rel={"noopener noreferrer"}
          target={"_blank"}
          className={" hover:underline"}
        >
          <GithubIcon className={"w-4 h-4  dark:hover:text-gray-200"}/>
        </Link>
        <Link
          href={"https://www.youtube.com/watch?v=oQXnkvBLBAg"}
          rel={"noopener noreferrer"}
          target={"_blank"}
          className={" hover:underline"}
        >
          <YoutubeIcon
            className={
              "w-5 h-5 white text-black dark:text-white dark:hover:text-gray-200"
            }
          />
        </Link>
        <Link
          href={"https://www.producthunt.com/products/x-to-voice"}
          rel={"noopener noreferrer"}
          target={"_blank"}
          className={" hover:underline"}
        >
          <ProductHuntIcon
            className={
              "w-4 h-4 white text-black dark:text-white dark:hover:text-gray-200"
            }
          />
        </Link>
      </span>
    ),
    subtitle: (
      <>
        <div
          className={
            "flex items-center justify-center my-1 rounded-lg overflow-hidden border-4 dark:border-zinc-800 aspect-[1064/720]"
          }
        >
          <video
            preload={"auto"}
            autoPlay
            loop
            muted
            playsInline
            aria-label={"X to Voice demo"}
          >
            <source src={"/x-to-voice-demo.mp4"} type={"video/mp4"}></source>
          </video>
        </div>
      </>
    ),
    time: "",
  },
  {
    title: (
      <span className={"flex items-center gap-1.5"}>
        <Link
          href={"https://www.j16.io"}
          rel={"noopener noreferrer"}
          target={"_blank"}
          className={"flex items-center hover:underline"}
        >
          J16.io
          <LinkIcon className={"w-3 h-3 ml-1"}/>
        </Link>
      </span>
    ),
    subtitle: (
      <>
        <div className={"mt-1"}>All my personal projects live here.</div>
      </>
    ),
    time: "",
  },
];

export default async function Home() {
  logPageView();
  return (
    <div className="grid items-center justify-items-center p-4 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 w-full">
          <div className="flex flex-col gap-4 w-full sm:max-w-sm mx-auto">
            <Me className={"w-full"}/>
            <SocialLinks className={"w-full"}/>
            <Experience
              title={"Projects"}
              className={"w-full"}
              timelineItems={projectsTimeline}
            />
            <Experience
              title={"Experience"}
              className={"w-full"}
              timelineItems={timeline}
            />
            <Experience
              title={"Speaking"}
              className={"w-full"}
              timelineItems={speakingTimeline}
            />
            <Experience
              title={"Press"}
              className={"w-full"}
              timelineItems={pressTimeline}
            />
            <Experience
              title={"Education"}
              className={"w-full"}
              timelineItems={educationTimeline}
            />
          </div>
        </div>
      </main>
      <footer
        className="row-start-3 gap-6 flex-wrap items-center justify-center text-zinc-300 dark:text-zinc-800 hidden">
        © jonatanvm.com
      </footer>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CircleDot } from "lucide-react";
import React from "react";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";

export interface TimelineItem {
  title?: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  time: string;
  dot?: React.ReactNode | null;
}

export function Experience({
  title,
  timelineItems,
  className,
  footer,
}: {
  title: string;
  timelineItems: TimelineItem[];
  className?: string;
  footer?: React.ReactNode;
}) {
  return (
    <Card className={cn(className, "sm:max-w-sm mx-auto")}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Timeline className={"gap-y-4 mr-auto"}>
          {timelineItems.map((timeline) => (
            <TimelineItem status="done" key={timeline.time}>
              <TimelineHeading className={"sm:text-sm line-clamp-2"}>
                {timeline.title}
              </TimelineHeading>
              {timeline.dot || (
                <TimelineDot className="size-3">
                  <CircleDot />
                </TimelineDot>
              )}
              <TimelineLine className={"py-1"} done />
              <TimelineContent className={"sm:text-sm flex flex-col w-full"}>
                <span className={"dark:text-zinc-300 text-zinc-700"}>
                  {timeline.subtitle}
                </span>
                <span className={"dark:text-zinc-500 text-zinc-900"}>
                  {timeline.time}
                </span>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        {footer}
      </CardContent>
    </Card>
  );
}

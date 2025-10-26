import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SocialLink({
  href,
  children,
}: PropsWithChildren<{ href: string }>) {
  return (
    <Link href={href} target={"_blank"} passHref>
      <Button variant={"outline"} size={"lg"} className={"w-full"}>
        {children}
      </Button>
    </Link>
  );
}

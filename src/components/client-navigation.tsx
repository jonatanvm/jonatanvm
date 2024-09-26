"use client";
import React, { useEffect } from "react";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

export function ClientNavigation() {
  const { nextItem, prevItem } = useScrollToSection();
  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event?.key === "ArrowDown") {
        event.preventDefault();
        nextItem();
      }
      if (event?.key === "ArrowUp") {
        event.preventDefault();
        prevItem();
      }
    };

    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        prevItem();
        console.log("scrolling up");
      } else {
        nextItem();
        console.log("scrolling down");
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    window.addEventListener("wheel", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
      window.addEventListener("wheel", handleScroll);
    };
  }, [nextItem, prevItem]);

  return null;
}

export function NextItemButton() {
  const { nextItem } = useScrollToSection();

  return (
    <Button variant={"ghost"} onClick={() => nextItem()}>
      Next (<ArrowDownIcon className={"w-3 h-3"} />)
    </Button>
  );
}

export function PervItemButton() {
  const { prevItem } = useScrollToSection();

  return (
    <Button variant={"ghost"} onClick={() => prevItem()}>
      Previous (<ArrowUpIcon className={"w-3 h-3"} />)
    </Button>
  );
}

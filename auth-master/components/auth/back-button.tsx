"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button className="font-normal w-full" asChild variant="link" size="sm">
      <Link href={href}>{label}</Link>
    </Button>
  );
};

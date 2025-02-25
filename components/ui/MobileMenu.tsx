import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Button from "../Button";
import { UserType } from "@/types/user";

const MobileMenu = ({ trigger, user }: { trigger: React.ReactElement, user: UserType }) => {
  return (
    <Sheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-col items-start">
          <SheetTitle>
            <div className="text-lightblue font-semibold text-3xl tracking-tighter flex items-center gap-1 lowercase">
              COURSEENE
            </div>
          </SheetTitle>
          <SheetDescription>Your digital learning platform</SheetDescription>
        </SheetHeader>
        {/* MENU */}
        <div className="flex flex-col gap-4 py-5">
          <Link href="/">
            <div>Explore</div>
          </Link>
          <Link href="/pricing">
            <div>Pricing</div>
          </Link>
          <Link href="/support">
            <div>Support</div>
          </Link>
        </div>
        <div className="flex flex-col justify-end items-center mt-8 gap-4">
          <Link href={user ? "/dashboard" : "/login"}>
            <Button content={user ? "Dashboard" : "Login"} secondary className="w-full" />
          </Link>
          <Link href="/register">
            <Button content="Start Free Trial" className="w-full" />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

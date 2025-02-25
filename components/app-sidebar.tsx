"use client";

import { useState, useEffect } from "react";
import {
  AudioWaveform,
  Award,
  Book,
  ClipboardCheck,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  MessageCircle,
  PieChart,
  SquareTerminal,
  User,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { getCurrentUser } from "@/app/actions/findUser";
import { UserType } from "@/types/user";

const data = {
  user: {
    name: "user",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "explore",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "Trending Courses", url: "#" },
        { title: "Favourites", url: "#" },
      ],
    },
    {
      title: "my courses",
      url: "#",
      icon: Book,
      items: [
        { title: "My Courses", url: "#" },
        { title: "Ongoing", url: "#" },
        { title: "Completed", url: "#" },
      ],
    },
    {
      title: "assignments",
      url: "#",
      icon: ClipboardCheck,
      items: [
        { title: "Pending", url: "#" },
        { title: "Submitted", url: "#" },
        { title: "Graded", url: "#" },
      ],
    },
    {
      title: "certificates",
      url: "#",
      icon: Award,
      items: [
        { title: "Earned Certificates", url: "#" },
        { title: "Download", url: "#" },
      ],
    },
    {
      title: "discussions",
      url: "#",
      icon: MessageCircle,
      items: [
        { title: "Community", url: "#" },
        { title: "Course Discussions", url: "#" },
      ],
    },
    {
      title: "profile",
      url: "#",
      icon: User,
      items: [
        { title: "Edit Profile", url: "#" },
        { title: "Preferences", url: "#" },
        { title: "Notifications", url: "#" },
      ],
    },
  ],
  projects: [
    { name: "Design Engineering", url: "#", icon: Frame },
    { name: "Sales & Marketing", url: "#", icon: PieChart },
    { name: "Travel", url: "#", icon: Map },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getCurrentUser();
      setUser(data);
    };
    fetchUser();
  }, []);

  const currentUser = user
    ? {
        name: user.name,
        email: user.email,
        avatar: user.image,
      }
    : data.user; 

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={currentUser as any} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

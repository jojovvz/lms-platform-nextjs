"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import useTabStore from "@/store/tab";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const { mainTab, setMainTab, subTab, setSubTab } = useTabStore();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.push(`?${params.toString()}`, { scroll: false });
    setMainTab(tab as any); 
    setSubTab(null);
  };

  const handleSubTabChange = (subTab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    setSubTab(subTab);
    params.set("subTab", subTab);
    router.push(`?${params.toString()}`, { scroll: false });
    setMainTab(subTab as any); 
    setSubTab(null);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActiveMainTab = mainTab === item.title;
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive || isActiveMainTab}
              className="group/collapsible"
            >
              <SidebarMenuItem onClick={() => handleTabChange(item.title)}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span className="capitalize">{item.title}</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

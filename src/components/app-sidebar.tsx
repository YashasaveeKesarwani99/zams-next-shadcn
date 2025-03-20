"use client";

import * as React from "react";
import {
  Bot,
  Database,
  GalleryVerticalEnd,
  Map,
  Settings,
  Plus,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { NavPages } from "@/components/nav-pages";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Zams",
      logo: GalleryVerticalEnd,
      plan: "Platform UI",
    },
  ],
  pages: [
    {
      name: "Models",
      url: "#",
      icon: Bot,
    },
    {
      name: "Datasources",
      url: "#",
      icon: Database,
    },
    {
      name: "Workflows",
      url: "#",
      icon: Map,
    },
    {
      name: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-500 text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Zams</span>
                  <span className="">Platform UI</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <Button
        variant="outline"
        size="sm"
        className="gap-2 h-auto min-h-8 w-11/12 m-auto"
      >
        <Plus className="h-4 w-4" />
        Build a Model
      </Button>

      <SidebarContent>
        <NavPages pages={data.pages} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

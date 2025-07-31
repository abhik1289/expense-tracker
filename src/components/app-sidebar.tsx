"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  Wallet,
  PiggyBank,
  User,
  Folder,
  Settings,
  LucideIcon,
} from "lucide-react";

export type menusType = {
  id: number;
  title: string;
  icon: LucideIcon;
  path: string;
};

const menus: menusType[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    id: 2,
    title: "Expense",
    icon: Wallet,
    path: "/expense",
  },
  {
    id: 3,
    title: "Budget",
    icon: PiggyBank,
    path: "/budget",
  },
  {
    id: 4,
    title: "Profile",
    icon: User,
    path: "/profile",
  },
  {
    id: 5,
    title: "Category",
    icon: Folder,
    path: "/category",
  },
  {
    id: 6,
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">FinSuite</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={menus} />
        {/* <NavDocuments items={data.documents} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
    </Sidebar>
  );
}

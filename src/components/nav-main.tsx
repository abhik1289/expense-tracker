"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { menusType } from "./app-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({ items }: { items: menusType[] }) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link href={item.path} key={item.id} className="w-full">
                <SidebarMenuItem
                  className={`cursor-pointer ${
                    pathname === item.path && "bg-[#d5d4d1] rounded-md"
                  }`}
                  key={item.title}
                >
                  <SidebarMenuButton tooltip={item.title}>
                    <Icon
                      className="size-5"
                      strokeWidth={isActive ? 2.5 : 1.5}
                      // fill={isActive ? "currentColor" : "none"}
                    />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

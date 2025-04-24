import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"

 
// Menu items.
const items = [
    {
      title: "Test",
      url: "#",
      icon: Home,
    },
    {
      title: "Test 2",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Test 3",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Test 4",
      url: "#",
      icon: Search,
    },
    {
      title: "Test 5",
      url: "#",
      icon: Settings,
    },
  ]
   
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }
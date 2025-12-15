import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle, UserNav } from ".";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex items-center py-4 gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SidebarTrigger className="sm:hidden" />
      <div className="flex items-center gap-4 ml-auto">
        <ThemeToggle />
        <UserNav />
      </div>
    </header>
  );
}

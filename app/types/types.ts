import type { LucideIcon } from "lucide-react";

export type SidebarItemParams = {
	id: number;
	title: string;
	icon: string | LucideIcon;
	onClick?: () => void;
}

export type SidebarParams =  {
	title?: string;
	items?: SidebarItemParams[];
	isOpen?: boolean;
}

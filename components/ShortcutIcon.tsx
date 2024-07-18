import { Command } from "lucide-react";

const ShortcutIcon = () => {
  return <span className="absolute right-2 bg-background flex flex-row gap-x-1 py-1 px-2 items-center text-xs font-bold rounded-[6px]"> <Command size={12} /> K</span>;
};

export default ShortcutIcon;

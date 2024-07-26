"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import StatueCircle from "./StatueCircle";
import Image from "next/image";

type StatusType = "Pending" | "Cancelled" | "Ongoing" | "Waiting" | "Completed";

interface Company {
  name: string;
  image: string;
}

interface CommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  objectsData: string[];
  companiesData: Company[];
  statusData: StatusType[];
  onSelectObject: (object: string) => void;
  onSelectCompany: (company: string) => void;
  onSelectStatus: (status: StatusType) => void;
  resetCompanyFilter: () => void;
  resetStatusFilter: () => void;
  resetObjectFilter: () => void;
}

export function Command({
  open,
  onOpenChange,
  objectsData,
  companiesData,
  statusData,
  onSelectObject,
  onSelectCompany,
  onSelectStatus,
  resetCompanyFilter,
  resetStatusFilter,
  resetObjectFilter,
}: CommandProps) {
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={onOpenChange}>
        <CommandInput placeholder="Search Object, Company or Status" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Object">
            {objectsData.length > 0 ? (
              objectsData.map((object, index) => (
                <CommandItem
                  key={index}
                  onSelect={() => {
                    onSelectObject(object);
                    resetCompanyFilter();
                    resetStatusFilter();
                    onOpenChange(false);
                  }}
                >
                  <span>{object}</span>
                </CommandItem>
              ))
            ) : (
              <CommandEmpty>No objects found.</CommandEmpty>
            )}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Company">
            {companiesData.length > 0 ? (
              companiesData.map((company, index) => (
                <CommandItem
                  key={index}
                  onSelect={() => {
                    onSelectCompany(company.name);
                    resetObjectFilter();
                    resetStatusFilter();
                    onOpenChange(false);
                  }}
                >
                  <span className="flex flex-row items-center gap-x-2">
                    <span>{company.name}</span>
                    <Image
                      src={company.image}
                      alt={`${company.name} logo`}
                      width={24}
                      height={24}
                      className=" rounded-full"
                    />
                  </span>
                </CommandItem>
              ))
            ) : (
              <CommandEmpty>No companies found.</CommandEmpty>
            )}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Status">
            {statusData.length > 0 ? (
              statusData.map((status, index) => (
                <CommandItem
                  key={index}
                  onSelect={() => {
                    onSelectStatus(status);
                    resetObjectFilter();
                    resetCompanyFilter();
                    onOpenChange(false);
                  }}
                >
                  <span className="flex flex-row items-center gap-x-2">
                    <span>{status}</span> <StatueCircle status={status} />
                  </span>
                </CommandItem>
              ))
            ) : (
              <CommandEmpty>No statuses found.</CommandEmpty>
            )}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

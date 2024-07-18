"use client";

import { ChevronDown, Crown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";

const Nav = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Leads");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="w-[326px] h-[800px] px-8 flex flex-col">
      {/* Icon and SearchBar */}
      <div className="space-y-6 flex flex-col">
        <Image src="/images/icon.png" alt="logo" width={32} height={32} />
        <Input
          placeholder="Search"
          hasSearchIcon
          hasShortCutIcon
          searchIconSize={20}
        />
      </div>

      {/* Navigation Tab */}
      <div className="py-2">
        <span className="text-primary-foreground text-[14px]">Navigation</span>
        <ul className="text-sm font-bold gap-y-[1px] flex flex-col">
          {["Home", "Clients", "Leads", "Deals"].map((item) => (
            <li
              key={item}
              className={`flex flex-row gap-x-3 py-2 px-3 cursor-pointer hover:bg-primary ${
                selectedTab === item ? "bg-primary rounded-[6px]" : ""
              }`}
              onClick={() => handleTabClick(item)}
            >
              <Image
                src={`/images/${item.toLowerCase()}Icon.svg`}
                width={18}
                height={18}
                alt={`${item} icon`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Your Lists Tab */}
      <div className="py-2">
        <span className="text-primary-foreground text-[14px]">Your Lists</span>
        <ul className="text-sm font-bold gap-y-[1px] flex flex-col">
          {["Inbound", "Outbound", "Ads"].map((item) => (
            <li
              key={item}
              className={`flex flex-row gap-x-3 py-2 px-3 cursor-pointer hover:bg-primary ${
                selectedTab === item ? "bg-primary rounded-[6px]" : ""
              }`}
              onClick={() => handleTabClick(item)}
            >
              <Image
                src={`/images/${item.toLowerCase()}Icon.svg`}
                width={18}
                height={18}
                alt={`${item} icon`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Notifications and Settings */}
      <div className="py-3">
        <ul className="text-sm font-bold gap-y-2 flex flex-col py-2">
          <li className="flex flex-row gap-x-3 px-3 items-center cursor-pointer">
            <Image
              src="/images/notificationsIcon.svg"
              width={18}
              height={18}
              alt="notifications icon"
            />
            <span>Notifications</span>
            <span className="bg-accent text-primary w-[30px] h-[16px] flex flex-row items-center justify-center text-[8px] rounded-[4px]">
              3
            </span>
          </li>
          <li className="flex flex-row gap-x-3 px-3 cursor-pointer">
            <Image
              src="/images/settingsIcon.svg"
              width={18}
              height={18}
              alt="settings icon"
            />
            <span>Settings</span>
          </li>
        </ul>
      </div>

      {/* Deals Section */}
      <div className="bg-primary border p-3 flex flex-col gap-y-[22px] rounded-[12px]">
        <div className="flex flex-row gap-x-[15px]">
          <Image
            src="/images/dealsIcon.svg"
            width={18}
            height={18}
            alt="deals icon"
          />
          <span className="text-[14px] font-bold">Deals</span>
        </div>
        <div>
          <Progress value={66} />
          <span className="text-xs font-medium">
            5 Deals left from 30 Leads
          </span>
        </div>
        <Button className="gap-x-2">
          <Crown /> Upgrade to pro
        </Button>
      </div>

      {/* Profile Section */}
      <div className="bg-primary border mt-1.5 flex flex-row p-2 items-center rounded-[12px] gap-x-[11px]">
        <Image
          src="/images/profil.png"
          alt="profile"
          width={47}
          height={47}
          className="rounded-[4px]"
        />
        <div className="flex flex-col">
          <span className="text-[14px] font-bold">Arthur Bossuyt</span>
          <span className="text-[14px]">Arthur@squared.studio</span>
        </div>
        <ChevronDown />
      </div>
    </div>
  );
};

export default Nav;

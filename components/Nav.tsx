import { ChevronDown, Crown, SearchIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";

const Nav = () => {
  return (
    <div className="w-[326px] h-[800px] px-8 flex flex-col ">
      <div className="space-y-6 flex flex-col">
        <Image src="/images/icon.png" alt="logo" width={32} height={32} />
        <Input 
        placeholder="Search"
        hasSearchIcon
        hasShortCutIcon
        searchIconSize={20}
      />
      </div>
      <div className="py-3">
        <span className="text-primary-foreground text-[14px]">Navigation</span>
        <ul className="text-sm font-bold gap-y-2 flex flex-col py-2">
          <li className="flex flex-row gap-x-3 px-3 ">
            <Image
              src="/images/homeIcon.svg"
              width={18}
              height={18}
              alt="home icon"
            />
            <span>Home</span>
          </li>
          <li className="flex flex-row gap-x-3 px-3 ">
            <Image
              src="/images/clientIcon.svg"
              width={18}
              height={18}
              alt="home icon"
            />
            <span>Clients</span>
          </li>
          <li className="flex flex-row gap-x-3 px-3 ">
            <Image
              src="/images/leadsIcon.svg"
              width={18}
              height={18}
              alt="home icon"
            />
            <span>Leads</span>
          </li>
          <li className="flex flex-row gap-x-3 px-3 ">
            <Image
              src="/images/dealsIcon.svg"
              width={18}
              height={18}
              alt="home icon"
            />
            <span>Deals</span>
          </li>
        </ul>
      </div>
      <div className="py-3">
        <span className="text-primary-foreground text-[14px]">Your Lists</span>
        <ul className="text-sm font-bold gap-y-2 flex flex-col py-2">
          <li className="flex flex-row gap-x-3 px-3 ">
            <Image
              src="/images/inboundIcon.svg"
              width={18}
              height={18}
              alt="home icon"
            />
            <span>Inbound</span>
          </li>
          <li className="flex flex-row gap-x-3 px-3 ">
            <Image
              src="/images/outboundIcon.svg"
              width={18}
              height={18}
              alt="home icon"
            />
            <span>Outbound</span>
          </li>
          <li className="flex flex-row gap-x-3 px-3 ">
            <Image
              src="/images/adsIcon.svg"
              width={18}
              height={18}
              alt="home icon"
            />
            <span>Ads</span>
          </li>
        </ul>
      </div>
      <div className="py-3">
        <ul className="text-sm font-bold gap-y-2 flex flex-col py-2">
          <li className="flex flex-row gap-x-3 px-3 items-center">
            <Image
              src="/images/notificationsIcon.svg"
              width={18}
              height={18}
              alt="home icon"
            />
            <span>Notification</span>
            <span className="bg-accent text-primary w-[30px] h-[16px] flex flex-row items-center justify-center text-[8px] rounded-[4px]">3</span>
          </li>
          <li className="flex flex-row gap-x-3 px-3 ">
            <Image
              src="/images/settingsIcon.svg"
              width={18}
              height={18}
              alt="home icon"
            />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bg-primary border p-3 flex flex-col gap-y-[22px] rounded-[12px]">
        <div className="flex flex-row gap-x-[15px]">
          <Image
            src="/images/dealsIcon.svg"
            width={18}
            height={18}
            alt="home icon"
          />
          <span className="text-[14px] font-bold ">Deals</span>
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
      <div className="bg-primary border mt-2 flex flex-row p-2 items-center rounded-[12px] gap-x-[11px]">
        <Image
          src="/images/profil.png"
          alt="ads"
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

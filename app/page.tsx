'use client'

import StatueCircle from "@/components/StatueCircle";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDown, Download, FolderPlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>('Completed (3)'); 

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <main className="bg-primary w-full flex-1 rounded-l-[12px] border pl-10 pt-8">
      <div className="flex flex-col gap-y-5">
        <h2>Deals</h2>
        <ul className=" flex flex-row gap-x-5 text-[14px] border-b w-fit font-medium">
          {[
            "Completed (3)",
            "Pending (10)",
            "Ongoing (10)",
            "All Deals",
            "Waiting for Confirmation (1)",
          ].map((item) => (
            <li
              key={item}
              className={`cursor-pointer px-2 text-accent/20 hover:border-b hover:border-black hover:text-accent ${
                selectedFilter === item
                  ? "border-black border-b text-accent"
                  : ""
              }`}
              onClick={() => handleFilterClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-row">
          <div className="flex flex-row gap-x-3">
            <Input
              placeholder="Search"
              className="text-xs"
              hasSearchIcon
              searchIconSize={13}
            />
            <Select>
              <SelectTrigger className="w-[89px]">
                <SelectValue placeholder="Object" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[105px]">
                <SelectValue placeholder="Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[89px]">
                <SelectValue placeholder="Statue" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-row gap-x-2 ml-60">
            <Button variant="primary" className="space-x-[5px]">
              <Download size={18} /> <span className="text-xs">Export</span>
            </Button>
            <Button className="space-x-[5px]">
              <FolderPlus size={18} /> <span className="text-xs">New Deal</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-8">
        <table className="min-w-full ">
          <thead>
            <tr className="bg-background border-b text-[12px] flex flex-row justify-start">
              <th className="py-3 px-6 font-medium w-[152px] flex flex-row space-x-3 items-center">
                <Checkbox id="terms" />
                <span className="space-x-1  flex flex-row items-center">
                  <span>Add</span> <ArrowDown size={16} />
                </span>
              </th>
              <th className="py-3 px-6 w-[237px] text-left">Object</th>
              <th className="py-3 px-6 w-[237px] text-left">Company</th>
              <th className="py-3 px-6 w-[237px] text-left">Statue</th>
              <th className="py-3 px-6 w-[237px] text-left">Amount</th>
            </tr>
          </thead>
          <tbody className="text-[14px] font-medium ">
            <tr className="border-b flex flex-row justify-start">
              <td className="py-4 px-6 gap-x-3 flex flex-row items-center w-[152px]">
                <Checkbox id="terms" /> <span>Jan. 24</span>
              </td>
              <td className="py-4 px-6 w-[237px]">Product Design : Payme...</td>
              <td className="py-4 px-6 w-[237px] flex flex-row gap-x-2 items-center">
                <Image
                  src="/images/Stripe.png"
                  alt="Stripe Img"
                  height={28}
                  width={28}
                  className="rounded-full"
                />
                <span> Stripe Inc.</span>
              </td>
              <td className="py-4 px-6 w-[237px] flex flex-row items-center gap-x-2.5">
                <StatueCircle status="Pending" />
                Pending
              </td>
              <td className="py-4 px-6 w-[237px]">7.800 $USD</td>
            </tr>
            <tr className="border-b flex flex-row justify-start">
              <td className="py-4 px-6 gap-x-3 flex flex-row items-center w-[152px]">
                {" "}
                <Checkbox id="terms" /> <span>Jan. 24</span>
              </td>
              <td className="py-4 px-6 w-[237px]">App Redesign : Onboar...</td>
              <td className="py-4 px-6 w-[237px] flex flex-row gap-x-2 items-center">
                <Image
                  src="/images/GitHub.png"
                  alt="Stripe Img"
                  height={28}
                  width={28}
                  className="rounded-full"
                />
                <span> Github Corp.</span>
              </td>
              <td className="py-4 px-6 w-[237px] flex flex-row items-center gap-x-2.5 ">
                <StatueCircle status="Cancelled" /> Cancelled
              </td>
              <td className="py-4 px-6 w-[237px]">12.800 $USD</td>
            </tr>
            <tr className="border-b flex flex-row justify-start">
              <td className="py-4 px-6 gap-x-3 flex flex-row items-center w-[152px]">
                {" "}
                <Checkbox id="terms" /> <span>Dec. 23</span>
              </td>
              <td className="py-4 px-6 w-[237px]">Pitch Deck B2B</td>
              <td className="py-4 px-6 w-[237px] flex flex-row gap-x-2 items-center">
                <Image
                  src="/images/Amazon.png"
                  alt="Stripe Img"
                  height={28}
                  width={28}
                  className="rounded-full"
                />
                <span> Amazon</span>
              </td>
              <td className="py-4 w-[237px] px-6 flex flex-row items-center gap-x-2.5">
                <StatueCircle status="Ongoing" /> Ongoing
              </td>
              <td className="py-4 w-[237px] px-6">14.000 $USD</td>
            </tr>
            <tr className="border-b flex flex-row justify-start">
              <td className="py-4 px-6 gap-x-3 flex flex-row items-center w-[152px]">
                <Checkbox id="terms" /> <span>Oct. 23</span>
              </td>
              <td className="py-4 w-[237px] px-6">Mobile App, UX Audit</td>
              <td className="py-4 w-[237px] px-6 flex flex-row gap-x-2 items-center">
                <Image
                  src="/images/Steam.png"
                  alt="Stripe Img"
                  height={28}
                  width={28}
                  className="rounded-full"
                />
                <span> Steam</span>
              </td>
              <td className="py-4 w-[237px] px-6 flex flex-row items-center gap-x-2.5">
                <StatueCircle status="Waiting" /> Waiting for Confirmation
              </td>
              <td className="py-4 w-[237px] px-6">2.000 $USD</td>
            </tr>
            <tr className="border-b flex flex-row justify-start">
              <td className="py-4 px-6 gap-x-3 flex flex-row items-center w-[152px]">
                <Checkbox id="terms" /> <span>Oct. 23</span>
              </td>
              <td className="py-4 w-[237px] px-6">Splash Screen Illustrator</td>
              <td className="py-4 w-[237px] px-6 flex flex-row gap-x-2 items-center">
                <Image
                  src="/images/Adobe.png"
                  alt="Stripe Img"
                  height={32}
                  width={32}
                  className="rounded-full"
                />
                <span> Adobe LLC.</span>
              </td>
              <td className="py-4 w-[237px] px-6 flex flex-row items-center gap-x-2.5">
                <StatueCircle status="Completed" /> Completed
              </td>
              <td className="py-4 w-[237px] px-6">5.500 $USD</td>
            </tr>
            <tr className="border-b flex flex-row justify-start">
              <td className="py-4 px-6 gap-x-3 flex flex-row items-center w-[152px]">
                <Checkbox id="terms" /> <span>Oct. 23</span>
              </td>
              <td className="py-4 w-[237px] px-6">Features Add</td>
              <td className="py-4 w-[237px] px-6 flex flex-row gap-x-2 items-center">
                <Image
                  src="/images/Arc.png"
                  alt="Stripe Img"
                  height={28}
                  width={28}
                  className="rounded-full"
                />
                <span> The Browser Company</span>
              </td>
              <td className="py-4 w-[237px] px-6 flex flex-row items-center gap-x-2.5">
                <StatueCircle status="Pending" /> Pending
              </td>
              <td className="py-4  w-[237px] px-6">14.500 $USD</td>
            </tr>
            <tr className="border-b flex flex-row justify-start">
              <td className="py-4 px-6 gap-x-3 flex flex-row items-center w-[152px]">
                <Checkbox id="terms" /> <span>Sept. 23</span>
              </td>
              <td className="py-4 w-[237px] px-6">Brand Guidelines</td>
              <td className="py-4 w-[237px] px-6 flex flex-row gap-x-2 items-center">
                <Image
                  src="/images/Figma.png"
                  alt="Stripe Img"
                  height={28}
                  width={28}
                  className="rounded-full"
                />
                <span> Figma</span>
              </td>
              <td className="py-4 w-[237px] px-6 flex flex-row items-center gap-x-2.5">
                <StatueCircle status="Completed" /> Completed
              </td>
              <td className="py-4 w-[237px] px-6">21.500 $USD</td>
            </tr>
            <tr className="border-b flex flex-row justify-start">
              <td className="py-4 px-6 gap-x-3 flex flex-row items-center w-[152px]">
                <Checkbox id="terms" /> <span>Sept. 23</span>
              </td>
              <td className="py-4 w-[237px] px-6">New messages UX</td>
              <td className="py-4 w-[237px] px-6 flex flex-row gap-x-2 items-center">
                <Image
                  src="/images/Slack.png"
                  alt="Stripe Img"
                  height={28}
                  width={28}
                  className="rounded-full"
                />
                <span> Slack</span>
              </td>
              <td className="py-4 w-[237px] px-6 flex flex-row items-center gap-x-2.5">
                <StatueCircle status="Ongoing" /> Ongoing
              </td>
              <td className="py-4 w-[237px] px-6">1.900 $USD</td>
            </tr>
            <tr className="flex flex-row justify-start">
              <td className="py-4 px-6 gap-x-3 flex flex-row items-center w-[152px]">
                <Checkbox id="terms" /> <span>Sept. 23</span>
              </td>
              <td className="py-4 w-[237px] px-6">Landing page</td>
              <td className="py-4 w-[237px] px-6 flex flex-row gap-x-2 items-center">
                <Image
                  src="/images/Opensea.png"
                  alt="Stripe Img"
                  height={28}
                  width={28}
                  className="rounded-full"
                />
                <span> Opensea</span>
              </td>
              <td className="py-4 w-[237px] px-6 flex flex-row items-center gap-x-2.5">
                <StatueCircle status="Pending" /> Pending
              </td>
              <td className="py-4 w-[237px] px-6">2.300 $USD</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

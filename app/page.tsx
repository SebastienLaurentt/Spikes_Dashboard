"use client";

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

type StatusType = "Pending" | "Cancelled" | "Ongoing" | "Waiting" | "Completed";

interface TableRow {
  date: string;
  object: string;
  company: {
    name: string;
    image: string;
  };
  status: StatusType;
  amount: string;
}

const tableData: TableRow[] = [
  {
    date: "Jan. 24",
    object: "Product Design : Payme...",
    company: { name: "Stripe Inc.", image: "/images/Stripe.png" },
    status: "Pending",
    amount: "7.800 $USD",
  },
  {
    date: "Jan. 24",
    object: "App Redesign : Onboar...",
    company: { name: "Github Corp.", image: "/images/GitHub.png" },
    status: "Cancelled",
    amount: "12.800 $USD",
  },
  {
    date: "Dec. 23",
    object: "Pitch Deck B2B",
    company: { name: "Amazon", image: "/images/Amazon.png" },
    status: "Ongoing",
    amount: "14.000 $USD",
  },
  {
    date: "Oct. 23",
    object: "Mobile App, UX Audit",
    company: { name: "Steam", image: "/images/Steam.png" },
    status: "Waiting",
    amount: "2.000 $USD",
  },
  {
    date: "Oct. 23",
    object: "Splash Screen Illustrator",
    company: { name: "Adobe LLC.", image: "/images/Adobe.png" },
    status: "Completed",
    amount: "5.500 $USD",
  },
  {
    date: "Oct. 23",
    object: "Features Add",
    company: { name: "The Browser Company", image: "/images/Arc.png" },
    status: "Pending",
    amount: "14.500 $USD",
  },
  {
    date: "Sept. 23",
    object: "Brand Guidelines",
    company: { name: "Figma", image: "/images/Figma.png" },
    status: "Completed",
    amount: "21.500 $USD",
  },
  {
    date: "Sept. 23",
    object: "New messages UX",
    company: { name: "Slack", image: "/images/Slack.png" },
    status: "Ongoing",
    amount: "1.900 $USD",
  },
  {
    date: "Sept. 23",
    object: "Landing page",
    company: { name: "Opensea", image: "/images/Opensea.png" },
    status: "Pending",
    amount: "2.300 $USD",
  },
];

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("Completed (3)");

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <main className="bg-primary w-full flex-1 rounded-l-[12px] border pl-10 pt-8">
      <div className="flex flex-col gap-y-5">
        <h2>Deals</h2>
        <ul className="flex flex-row gap-x-5 text-[14px] border-b w-fit font-medium">
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
                <span className="space-x-1 flex flex-row items-center">
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
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={`flex flex-row justify-start ${
                  index !== tableData.length - 1 ? "border-b" : ""
                }`}
              >
                <td className="py-4 px-6 gap-x-3 flex flex-row items-center w-[152px]">
                  <Checkbox id="terms" /> <span>{row.date}</span>
                </td>
                <td className="py-4 px-6 w-[237px]">{row.object}</td>
                <td className="py-4 px-6 w-[237px] flex flex-row gap-x-2 items-center">
                  <Image
                    src={row.company.image}
                    alt={`${row.company.name} Img`}
                    height={28}
                    width={28}
                    className="rounded-full"
                  />
                  <span>{row.company.name}</span>
                </td>
                <td className="py-4 px-6 w-[237px] flex flex-row items-center gap-x-2.5">
                  <StatueCircle status={row.status} /> {row.status}
                </td>
                <td className="py-4 px-6 w-[237px]">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

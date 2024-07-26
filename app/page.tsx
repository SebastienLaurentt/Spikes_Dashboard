"use client";

import StatueCircle from "@/components/StatueCircle";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CommandDialogDemo } from "@/components/ui/commandDialogDemo";
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
import { tableData } from "@/lib/tableData";
import { ArrowDown, Download, FolderPlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedHeaderStatus, setSelectedHeaderStatus] =
    useState<string>("Completed (3)");
  const [selectedObject, setSelectedObject] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(
    "Completed"
  );
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(tableData.length).fill(false)
  );
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleFilterHeaderStatus = (filter: string) => {
    setSelectedHeaderStatus(filter);
    setSelectedStatus(filter === "All Deals" ? null : filter.split(" ")[0]);
  };

  const handleSelectAllChange = (checked: boolean | string) => {
    const isChecked = checked === true || checked === "true";
    setIsAllChecked(isChecked);
    setCheckedItems(new Array(tableData.length).fill(isChecked));
  };

  const handleCheckboxChange = (index: number, checked: boolean | string) => {
    const isChecked = checked === true || checked === "true";
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = isChecked;
    setCheckedItems(newCheckedItems);

    if (!isChecked) {
      setIsAllChecked(false);
    } else if (newCheckedItems.every((item) => item)) {
      setIsAllChecked(true);
    }
  };

  const objectsData = tableData
    .map((row) => row.object)
    .filter((value, index, self) => self.indexOf(value) === index);

  const companiesData = tableData
    .map((row) => row.company.name)
    .filter((value, index, self) => self.indexOf(value) === index);

  const statusData = tableData
    .map((row) => row.status)
    .filter((value, index, self) => self.indexOf(value) === index);

  // Reset filters
  const resetObjectFilter = () => setSelectedObject(null);
  const resetCompanyFilter = () => setSelectedCompany(null);
  const resetStatusFilter = () => setSelectedStatus(null);

  const filteredData = tableData.filter((row) => {
    const objectMatch = selectedObject ? row.object === selectedObject : true;
    const companyMatch = selectedCompany
      ? row.company.name === selectedCompany
      : true;
    const statusMatch = selectedStatus ? row.status === selectedStatus : true;
    const searchMatch = searchTerm
      ? row.object.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.status.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return objectMatch && companyMatch && statusMatch && searchMatch;
  });

  return (
    <main className="bg-primary w-full flex-1 rounded-l-[12px] border pl-10 pt-8">
      <div className="flex flex-col gap-y-5">
        <h2>Deals</h2>
        <ul className="flex flex-row gap-x-5 text-[14px] border-b w-fit font-medium">
          {[
            "All Deals",
            "Completed (3)",
            "Pending (10)",
            "Ongoing (10)",
            "Waiting (1)",
          ].map((item) => (
            <li
              key={item}
              className={`cursor-pointer px-2 hover:border-b hover:border-black hover:text-accent ${
                selectedHeaderStatus === item
                  ? "border-black border-b text-accent"
                  : "text-accent/20"
              }`}
              onClick={() => handleFilterHeaderStatus(item)}
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select
              onValueChange={(value) =>
                setSelectedObject(value === "All" ? null : value)
              }
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Object" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Objects</SelectLabel>
                  <SelectItem value="All">All</SelectItem>
                  {objectsData.map((object, index) => (
                    <SelectItem key={index} value={object}>
                      {object}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) =>
                setSelectedCompany(value === "All Deals" ? null : value)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Companies</SelectLabel>
                  <SelectItem value="All">All</SelectItem>
                  {companiesData.map((company, index) => (
                    <SelectItem key={index} value={company}>
                      {company}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              value={selectedStatus || "All Deals"}
              onValueChange={(value) => {
                setSelectedStatus(value === "All Deals" ? null : value);
                setSelectedHeaderStatus(
                  value === "All Deals" ? "All Deals" : `${value} (x)`
                ); 
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  {[
                    "All Deals",
                    "Completed",
                    "Pending",
                    "Ongoing",
                    "Waiting",
                  ].map((status, index) => (
                    <SelectItem key={index} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-row gap-x-2 ml-20 2xl:ml-60">
            <Button variant="primary" className="space-x-[5px]">
              <Download size={18} /> <span className="text-xs">Export</span>
            </Button>
            <Button className="space-x-[5px]">
              <FolderPlus size={18} /> <span className="text-xs">New Deal</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden">
        <CommandDialogDemo
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          objectsData={objectsData}
          companiesData={companiesData}
          statusData={statusData}
          onSelectObject={setSelectedObject}
          onSelectCompany={setSelectedCompany}
          onSelectStatus={setSelectedStatus}
          resetCompanyFilter={resetCompanyFilter}
          resetStatusFilter={resetStatusFilter}
          resetObjectFilter={resetObjectFilter}
        />
      </div>

      {/* Tableau */}
      <div className="mt-8">
        <table className="min-w-full">
          <thead>
            <tr className="bg-background border-b text-[12px] flex flex-row justify-start">
              <th className="py-3 px-6 font-medium w-[152px] 2xl:w-[200px] flex flex-row space-x-3 items-center">
                <Checkbox
                  id="select-all"
                  checked={isAllChecked}
                  onCheckedChange={(checked) => handleSelectAllChange(checked)}
                />
                <span className="space-x-1 flex flex-row items-center">
                  <span>Add</span> <ArrowDown size={16} />
                </span>
              </th>
              <th className="py-3 px-6 w-[237px] 2xl:w-[330px] text-left">
                Object
              </th>
              <th className="py-3 px-6 w-[237px] 2xl:w-[330px] text-left">
                Company
              </th>
              <th className="py-3 px-6 w-[237px] 2xl:w-[330px] text-left">
                Status
              </th>
              <th className="py-3 px-6 w-[237px] 2xl:w-[330px] text-left">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="text-[14px] font-medium">
            {filteredData.map((row, index) => (
              <tr
                key={index}
                className={`flex flex-row justify-start ${
                  index !== filteredData.length - 1 ? "border-b" : ""
                }`}
              >
                <td className="py-4 px-6 gap-x-3 flex flex-row items-center w-[152px] 2xl:w-[200px]">
                  <Checkbox
                    id={`row-${index}`}
                    checked={checkedItems[index]}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(index, checked)
                    }
                  />{" "}
                  <span>{row.date}</span>
                </td>
                <td className="py-4 px-6 w-[237px] 2xl:w-[330px]">
                  {row.object}
                </td>
                <td className="py-4 px-6 w-[237px] 2xl:w-[330px] flex flex-row gap-x-2 items-center">
                  <Image
                    src={row.company.image}
                    alt={`${row.company.name} Img`}
                    height={28}
                    width={28}
                    className="rounded-full"
                  />
                  <span>{row.company.name}</span>
                </td>
                <td className="py-4 px-6 w-[237px] 2xl:w-[330px] flex flex-row items-center gap-x-2.5">
                  <StatueCircle status={row.status} /> {row.status}
                </td>
                <td className="py-4 px-6 w-[237px] 2xl:w-[330px]">
                  {row.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

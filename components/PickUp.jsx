import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PickUp = () => {
  return (
    <div className="flex flex-col  h-auto bg-white mt-[32px]  p-4 space-y-4 rounded-xl">
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2 ml-3">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Pick-Up</Label>
        </div>
      </RadioGroup>

      <div className="flex space-x-4 ">
        <div className="flex flex-col border-r-2">
          <p className="text-sm  ml-3 font-bold text-gray-700">Locations</p>
          <Select>
            <SelectTrigger className=" w-[150px]">
              <SelectValue placeholder="Select your city" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col border-r-2">
          <p className="text-sm ml-3 font-bold text-gray-700">Date</p>
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select your date" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold ml-3 text-gray-700">Time</p>
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select your time" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PickUp;

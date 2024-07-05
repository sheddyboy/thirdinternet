"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Home() {
  return (
    <main className="container flex flex-col pt-[56px]">
      <nav className="">
        <Card className="rounded-full">
          <CardContent className="flex items-center justify-between px-[20px] py-[12px]">
            <Image src="/logo.svg" alt="" width={195} height={36} />
            <div className="relative flex items-center">
              <Image
                className="absolute left-[0.75vw]"
                src="/search.svg"
                alt=""
                width={16}
                height={16}
              />
              <Input
                placeholder="Search for book"
                className="h-[46px] w-[20vw] rounded-full border-0 bg-white/[0.04] pl-[2vw] text-xsm font-normal outline-none placeholder:text-[#E8E8E8]"
              />
            </div>
            <Card className="rounded-full">
              <CardContent className="px-[13px] py-[8px]">
                <Button className="h-[40px] rounded-full px-[20px]">
                  Login
                </Button>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </nav>
      <ToggleGroup
        type="single"
        defaultValue="All"
        className="sticky top-0 gap-[60px] bg-background pb-[40px] pt-[27px]"
      >
        <ToggleGroupItem
          className="rounded-full border-2 border-transparent px-[20px] py-[10px] text-white data-[state=on]:border-[#6c6c6c] data-[state=on]:bg-card/[0.17] data-[state=on]:text-white"
          value="All"
        >
          All
        </ToggleGroupItem>
        <ToggleGroupItem
          className="rounded-full border-2 border-transparent px-[20px] py-[10px] text-white data-[state=on]:border-[#6c6c6c] data-[state=on]:bg-card/[0.17] data-[state=on]:text-white"
          value="Mathematics"
        >
          Mathematics
        </ToggleGroupItem>
        <ToggleGroupItem
          className="rounded-full border-2 border-transparent px-[20px] py-[10px] text-white data-[state=on]:border-[#6c6c6c] data-[state=on]:bg-card/[0.17] data-[state=on]:text-white"
          value="Science"
        >
          Science
        </ToggleGroupItem>
        <ToggleGroupItem
          className="rounded-full border-2 border-transparent px-[20px] py-[10px] text-white data-[state=on]:border-[#6c6c6c] data-[state=on]:bg-card/[0.17] data-[state=on]:text-white"
          value="language"
        >
          language
        </ToggleGroupItem>
        <ToggleGroupItem
          className="rounded-full border-2 border-transparent px-[20px] py-[10px] text-white data-[state=on]:border-[#6c6c6c] data-[state=on]:bg-card/[0.17] data-[state=on]:text-white"
          value="Technology"
        >
          Technology
        </ToggleGroupItem>
        <ToggleGroupItem
          className="rounded-full border-2 border-transparent px-[20px] py-[10px] text-white data-[state=on]:border-[#6c6c6c] data-[state=on]:bg-card/[0.17] data-[state=on]:text-white"
          value="History"
        >
          History
        </ToggleGroupItem>
        <ToggleGroupItem
          className="rounded-full border-2 border-transparent px-[20px] py-[10px] text-white data-[state=on]:border-[#6c6c6c] data-[state=on]:bg-card/[0.17] data-[state=on]:text-white"
          value="Art & commercials"
        >
          Art & commercials
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="mb-[114px] grid grid-cols-3 gap-[10px]">
        {Array.from({ length: 9 }).map((_, index) => (
          <Card className="cursor-pointer rounded-[13px]" key={index}>
            <CardContent className="flex flex-col gap-[10px] px-[10px] pb-[25px] pt-[10px]">
              <Image
                key={index}
                alt=""
                src="/frog-image.png"
                width={379}
                height={366}
                className="w-full rounded-[10px]"
              />
              <div className="flex flex-col gap-[17px]">
                <span className="text-xlg">Science Shepherd Biology</span>
                <span className="text-md text-[#CBC4C4]">Science</span>
                <span className="text-lg">Read by 278 people</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <footer className="mx-auto flex flex-col justify-center gap-[26px] pb-[113px] text-center">
        <Image
          alt=""
          src="/footer-logo.svg"
          className="mx-auto"
          width={192}
          height={36}
        />
        <span>Bringing the younger next generation onchain</span>
        <div className="mx-auto flex items-center gap-[36px]">
          <Image src="/facebook-1.svg" alt="" width={40} height={40} />
          <Image src="/twitter-1.svg" alt="" width={40} height={40} />
          <Image src="/insta-1.svg" alt="" width={40} height={40} />
        </div>
        <span>
          All Rights Reserved © 2023 <strong>Thirdinternet</strong>
        </span>
        <div className="mx-auto flex items-center">
          <span className="text-lg font-bold">Contact us </span>
          <a href="mailto:support@thirdinternet.com">
            support@thirdinternet.com
          </a>
        </div>
      </footer>
    </main>
  );
}

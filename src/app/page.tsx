"use client";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { usePrivy } from "@privy-io/react-auth";
import { Separator } from "@/components/ui/separator";
import BookCard from "@/components/BookCard";
import bookData from "@/lib/books.json";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Home() {
  const [books, setBooks] = useState(bookData);
  const [bookNav, setBookNav] = useState("All");
  const [search, setSearch] = useState("");
  const { ready, authenticated, user, login, logout } = usePrivy();
  console.log("ready, authenticated,user,", ready, authenticated, user);
  const address = user?.wallet?.address;
  const shortenAddress = address
    ? address.slice(0, 3) + "..." + address.slice(-5)
    : null;

  return (
    <main className="container flex flex-col">
      <nav className="sticky top-0 z-[2] bg-background pt-[56px] max-lg:pt-[20px]">
        <Card className="rounded-full bg-background">
          <CardContent className="flex items-center justify-between px-[20px] py-[12px] max-lg:flex-col max-lg:gap-[12px] max-lg:p-0">
            <div className="flex items-center justify-between max-lg:w-full">
              <Sheet>
                <SheetTrigger asChild>
                  <Image
                    alt=""
                    src="/menu.svg"
                    width={26}
                    height={18}
                    className="hidden max-lg:flex"
                  />
                </SheetTrigger>
                <SheetContent
                  className="flex w-full flex-col gap-[28px] border-0 px-[25px] py-[27px]"
                  side="left"
                >
                  <SheetClose className="flex items-center gap-[12px] rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary">
                    <Image
                      alt=""
                      src="/close.svg"
                      width={24}
                      height={24}
                      className=""
                    />
                    <span className="text-md">Close</span>
                  </SheetClose>
                  <RadioGroup
                    defaultValue="All"
                    className="flex w-full flex-col justify-center gap-[16px] overflow-auto bg-background max-xl:justify-start"
                    value={bookNav}
                    onValueChange={(value) => {
                      setBookNav(value);
                      console.log("bookData", bookData);
                      setBooks(
                        bookData.filter((data) =>
                          value.toLowerCase().trim() === "all"
                            ? true
                            : data.category.toLowerCase().trim() ===
                              value.toLowerCase().trim(),
                        ),
                      );
                    }}
                  >
                    <SheetClose>
                      <RadioGroupItem
                        value="All"
                        className="inline-flex aspect-auto h-10 w-full shrink-0 items-center justify-start rounded-full border-2 border-transparent bg-transparent px-[20px] py-[10px] text-start text-sm font-medium text-white ring-offset-background transition-colors hover:bg-muted hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#6c6c6c] data-[state=checked]:bg-card/[0.17] data-[state=checked]:text-white"
                      >
                        All
                      </RadioGroupItem>
                    </SheetClose>
                    <SheetClose>
                      <RadioGroupItem
                        value="Mathematics"
                        className="inline-flex aspect-auto h-10 w-full shrink-0 items-center justify-start rounded-full border-2 border-transparent bg-transparent px-[20px] py-[10px] text-start text-sm font-medium text-white ring-offset-background transition-colors hover:bg-muted hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#6c6c6c] data-[state=checked]:bg-card/[0.17] data-[state=checked]:text-white"
                      >
                        Mathematics
                      </RadioGroupItem>
                    </SheetClose>
                    <SheetClose>
                      <RadioGroupItem
                        value="Science"
                        className="inline-flex aspect-auto h-10 w-full shrink-0 items-center justify-start rounded-full border-2 border-transparent bg-transparent px-[20px] py-[10px] text-start text-sm font-medium text-white ring-offset-background transition-colors hover:bg-muted hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#6c6c6c] data-[state=checked]:bg-card/[0.17] data-[state=checked]:text-white"
                      >
                        Science
                      </RadioGroupItem>
                    </SheetClose>
                    <SheetClose>
                      <RadioGroupItem
                        value="Language"
                        className="inline-flex aspect-auto h-10 w-full shrink-0 items-center justify-start rounded-full border-2 border-transparent bg-transparent px-[20px] py-[10px] text-start text-sm font-medium text-white ring-offset-background transition-colors hover:bg-muted hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#6c6c6c] data-[state=checked]:bg-card/[0.17] data-[state=checked]:text-white"
                      >
                        Language
                      </RadioGroupItem>
                    </SheetClose>
                    <SheetClose>
                      <RadioGroupItem
                        value="History"
                        className="inline-flex aspect-auto h-10 w-full shrink-0 items-center justify-start rounded-full border-2 border-transparent bg-transparent px-[20px] py-[10px] text-start text-sm font-medium text-white ring-offset-background transition-colors hover:bg-muted hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#6c6c6c] data-[state=checked]:bg-card/[0.17] data-[state=checked]:text-white"
                      >
                        History
                      </RadioGroupItem>
                    </SheetClose>
                    <SheetClose>
                      <RadioGroupItem
                        value="Art & commercials"
                        className="inline-flex aspect-auto h-10 w-full shrink-0 items-center justify-start rounded-full border-2 border-transparent bg-transparent px-[20px] py-[10px] text-start text-sm font-medium text-white ring-offset-background transition-colors hover:bg-muted hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#6c6c6c] data-[state=checked]:bg-card/[0.17] data-[state=checked]:text-white"
                      >
                        Art & commercials
                      </RadioGroupItem>
                    </SheetClose>
                  </RadioGroup>
                </SheetContent>
              </Sheet>
              <Image
                src="/logo.svg"
                alt=""
                width={195}
                height={36}
                className="max-lg:hidden"
              />
              <Image
                src="/mobile-logo.svg"
                alt=""
                width={107}
                height={16}
                className="hidden max-lg:flex"
              />

              {authenticated ? (
                <Popover>
                  <PopoverTrigger asChild className="hidden max-lg:flex">
                    <Avatar className="min-h-32px min-w-[32px]">
                      <AvatarImage
                        src="/user-icon.svg"
                        className="object-cover"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto bg-transparent">
                    <Button
                      className="h-[40px] rounded-full px-[20px]"
                      onClick={logout}
                    >
                      Log Out
                    </Button>
                  </PopoverContent>
                </Popover>
              ) : (
                <Button
                  className="hidden h-[40px] rounded-full px-[20px] max-lg:flex"
                  onClick={login}
                >
                  Login
                </Button>
              )}
            </div>
            <div className="relative flex items-center max-lg:w-full max-md:pb-[12px]">
              <Image
                className="absolute left-[14px]"
                src="/search.svg"
                alt=""
                width={16}
                height={16}
              />
              <Input
                placeholder="Search for book"
                className="h-[46px] w-[20vw] rounded-full border-0 bg-white/[0.04] pl-[42px] text-xsm font-normal outline-none placeholder:text-[#E8E8E8] max-lg:w-full"
                value={search}
                onChange={(e) => {
                  setBookNav("All");
                  setSearch(e.target.value);
                  setBooks(
                    bookData.filter(
                      (data) =>
                        data.name
                          .toLowerCase()
                          .trim()
                          .includes(e.target.value.toLowerCase().trim()) ||
                        data.category
                          .toLowerCase()
                          .trim()
                          .includes(e.target.value.toLowerCase().trim()),
                    ),
                  );
                }}
              />
            </div>
            <Card className="rounded-full bg-white/[0.04] max-lg:hidden">
              <CardContent className="px-[13px] py-[8px]">
                {authenticated ? (
                  <div className="flex items-center gap-[12px]">
                    <div className="flex items-stretch gap-[20px]">
                      <Avatar className="min-h-32px min-w-[32px]">
                        <AvatarImage
                          src="/user-icon.svg"
                          className="object-cover"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Separator orientation="vertical" className="h-auto" />
                      {shortenAddress && (
                        <span className="flex items-center">
                          {shortenAddress}
                        </span>
                      )}
                    </div>
                    <Button
                      className="h-[40px] rounded-full px-[20px]"
                      onClick={logout}
                    >
                      Log Out
                    </Button>
                  </div>
                ) : (
                  <Button
                    className="h-[40px] rounded-full px-[20px]"
                    onClick={login}
                  >
                    Login
                  </Button>
                )}
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </nav>
      <RadioGroup
        defaultValue="All"
        className="sticky top-[136px] z-[2] flex w-full justify-center gap-[30px] overflow-auto bg-background pb-[40px] pt-[27px] max-xl:justify-start max-lg:hidden"
        value={bookNav}
        onValueChange={(value) => {
          setBookNav(value);
          console.log("bookData", bookData);
          setBooks(
            bookData.filter((data) =>
              value.toLowerCase().trim() === "all"
                ? true
                : data.category.toLowerCase().trim() ===
                  value.toLowerCase().trim(),
            ),
          );
        }}
      >
        <RadioGroupItem
          value="All"
          className="inline-flex aspect-auto h-10 w-auto shrink-0 items-center justify-center rounded-full border-2 border-transparent bg-transparent px-[20px] py-[10px] text-sm font-medium text-white ring-offset-background transition-colors hover:bg-muted hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#6c6c6c] data-[state=checked]:bg-card/[0.17] data-[state=checked]:text-white"
        >
          All
        </RadioGroupItem>
        <RadioGroupItem
          value="Mathematics"
          className="inline-flex aspect-auto h-10 w-auto shrink-0 items-center justify-center rounded-full border-2 border-transparent bg-transparent px-[20px] py-[10px] text-sm font-medium text-white ring-offset-background transition-colors hover:bg-muted hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#6c6c6c] data-[state=checked]:bg-card/[0.17] data-[state=checked]:text-white"
        >
          Mathematics
        </RadioGroupItem>
        <RadioGroupItem
          value="Science"
          className="inline-flex aspect-auto h-10 w-auto shrink-0 items-center justify-center rounded-full border-2 border-transparent bg-transparent px-[20px] py-[10px] text-sm font-medium text-white ring-offset-background transition-colors hover:bg-muted hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#6c6c6c] data-[state=checked]:bg-card/[0.17] data-[state=checked]:text-white"
        >
          Science
        </RadioGroupItem>
        <RadioGroupItem
          value="Language"
          className="inline-flex aspect-auto h-10 w-auto shrink-0 items-center justify-center rounded-full border-2 border-transparent bg-transparent px-[20px] py-[10px] text-sm font-medium text-white ring-offset-background transition-colors hover:bg-muted hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#6c6c6c] data-[state=checked]:bg-card/[0.17] data-[state=checked]:text-white"
        >
          Language
        </RadioGroupItem>
        <RadioGroupItem
          value="History"
          className="inline-flex aspect-auto h-10 w-auto shrink-0 items-center justify-center rounded-full border-2 border-transparent bg-transparent px-[20px] py-[10px] text-sm font-medium text-white ring-offset-background transition-colors hover:bg-muted hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#6c6c6c] data-[state=checked]:bg-card/[0.17] data-[state=checked]:text-white"
        >
          History
        </RadioGroupItem>
        <RadioGroupItem
          value="Art & commercials"
          className="inline-flex aspect-auto h-10 w-auto shrink-0 items-center justify-center rounded-full border-2 border-transparent bg-transparent px-[20px] py-[10px] text-sm font-medium text-white ring-offset-background transition-colors hover:bg-muted hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#6c6c6c] data-[state=checked]:bg-card/[0.17] data-[state=checked]:text-white"
        >
          Art & commercials
        </RadioGroupItem>
      </RadioGroup>
      <motion.div
        layout
        className="mb-[114px] grid grid-cols-3 gap-[10px] max-lg:grid-cols-2 max-sm:grid-cols-2"
      >
        <AnimatePresence>
          {books.map((book) => (
            <motion.div layout key={book.name} exit={{ opacity: 0 }}>
              <BookCard
                category={book.category}
                isAuthenticated={authenticated}
                name={book.name}
                pdfUrl={book.link}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <motion.footer
        layout
        className="mx-auto flex flex-col justify-center gap-[26px] pb-[113px] text-center"
      >
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
      </motion.footer>
    </main>
  );
}

"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { usePrivy } from "@privy-io/react-auth";

interface BookCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  author: string;
  description: string;
  publishedDate: string;
  pdfUrl: string;
  category: string;
  readCount: number;
  thumbnail: string;
  isAuthenticated: boolean;
}

const BookCard = forwardRef<HTMLDivElement, BookCardProps>(
  (
    {
      author,
      isAuthenticated,
      category,
      description,
      name,
      pdfUrl,
      publishedDate,
      readCount,
      thumbnail,
      ...props
    },
    ref,
  ) => {
    const { login } = usePrivy();

    return (
      <Link
        href={isAuthenticated ? pdfUrl : ""}
        target={isAuthenticated ? "_blank" : "_self"}
        className="flex h-full flex-col"
      >
        <Card
          className="h-full cursor-pointer rounded-[13px]"
          ref={ref}
          {...props}
          onClick={() => {
            !isAuthenticated && login();
          }}
        >
          <CardContent className="flex h-full flex-col gap-[10px] px-[10px] pb-[25px] pt-[10px] max-sm:px-[7px] max-sm:pt-[7px]">
            <Image
              alt={name}
              src={"/frog-image.png"}
              width={379}
              height={366}
              className="w-full rounded-[10px]"
            />
            <div className="mt-auto flex flex-col gap-[17px] max-sm:gap-[12px]">
              <span className="text-xlg max-sm:text-sm">{name}</span>
              <span className="text-md text-[#CBC4C4] max-sm:text-xsm">
                {category}
              </span>
              <span className="text-lg max-sm:text-base">{`Read by ${readCount} people`}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  },
);
BookCard.displayName = "BookCard";
export default BookCard;

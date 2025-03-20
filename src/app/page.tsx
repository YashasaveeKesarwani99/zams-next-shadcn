"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDown, ArrowRight, Activity, Paperclip } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function ZamsChat() {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full h-screen max-w-3xl mx-auto p-6 flex justify-center items-center">
      <div className="h-full flex justify-center items-start flex-col w-full">
        <div className="flex items-center mb-8">
          <Activity className="h-5 w-5 mr-2 text-black" />
          <span className="text-xl font-medium">zams</span>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-1">
            Hey <span className="text-purple-600">there</span>,
          </h1>
          <h2 className="text-4xl font-bold">
            What&apos;d you like{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
              to ask today?
            </span>
          </h2>
        </div>

        <div className="border rounded-lg p-4 shadow-sm w-full bg-white">
          <Textarea
            placeholder="Ask whatever you want.."
            className="border-0 p-0 text-base focus-visible:ring-0 h-auto mb-6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="flex flex-col items-end w-full gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground gap-1"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1"
                    >
                      <path
                        d="M2 4H14M2 8H14M2 12H14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Response Type
                    <ArrowDown className="h-3 w-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Text</DropdownMenuItem>
                  <DropdownMenuItem>Code</DropdownMenuItem>
                  <DropdownMenuItem>Image</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground gap-1"
              >
                <Paperclip className="h-4 w-4 mr-1" />
                Add Attachment
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {message.length}/1000
              </span>
              <Button size="icon" className="rounded-full bg-black h-8 w-8">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 text-xs text-gray-400 w-[90%] sm:w-auto">
        Your chats aren't used to train our models. Obviously AI may make
        mistakes, so please double-check. Your privacy is our priority.
      </div>
    </div>
  );
}

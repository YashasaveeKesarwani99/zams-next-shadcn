"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Search,
  CirclePlus,
  EllipsisVertical,
  ArrowUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import AddDataDialog from "./form";
import { datasources } from "./data-source";
import { getTypeColor } from "./utils/get-type-color";

export type Sources = {
  id: number;
  name: string;
  type: string;
  status: string;
  createdAt: string;
  createdBy: string;
}[];

export default function Page() {
  const [sources, setSources] = useState<Sources>(datasources);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const toggleRow = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Datasources</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <h1 className="text-2xl font-semibold">Datasources</h1>
          <p className="text-muted-foreground mb-0 sm:mb-6">
            Upload files, connect to databases, or integrate with apps.
          </p>

          <div className="items-start flex-col sm:flex-row flex sm:items-center justify-between mb-0 sm:mb-6  gap-5 sm:gap-0">
            <div className="relative flex-col sm:flex-row flex gap-3">
              <div className="w-80">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-9" />
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 h-auto min-h-8"
                >
                  <CirclePlus className="h-4 w-4" />
                  Type
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 h-auto min-h-8"
                >
                  <CirclePlus className="h-4 w-4" />
                  Status
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <AddDataDialog setSources={setSources} />

              <Button variant="outline" size="icon" className="min-h-8">
                <EllipsisVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>Datasource</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="cursor-pointer">
                    <div className="flex items-center">
                      Created at
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer">
                    <div className="flex items-center">
                      Created by
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sources.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedRows.includes(item.id)}
                        onCheckedChange={() => toggleRow(item.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`${getTypeColor(item.type)} border-0`}
                      >
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`${
                          item.status === "Uploaded"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        } border-0`}
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.createdAt}</TableCell>
                    <TableCell>{item.createdBy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

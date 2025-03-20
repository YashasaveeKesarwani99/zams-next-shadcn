"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { Sources } from "./page";
import { Dispatch, SetStateAction, useState } from "react";

// Define Schema using Zod
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.enum(["PDF", "CSV", "DOCX"]),
  status: z.enum(["Uploaded", "Connected"]),
  createdBy: z.enum(["website-data", "user-data", "server-files", "products"]),
});

type FormData = z.infer<typeof formSchema>;

const AddDataDialog = ({
  setSources,
}: {
  setSources: Dispatch<SetStateAction<Sources>>;
}) => {
  // Predefined data sources
  const dataSources = ["website-data", "user-data", "server-files", "products"];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false); // Manage dialog state

  // Generate the createdAt and id
  const generateCreatedAt = () => format(new Date(), "MMM dd yyyy");
  const generateRandomId = () => Math.floor(Math.random() * 1000000); // Random number for id

  const onSubmit = (data: FormData) => {
    // Append the new data with createdAt and id to the existing sources
    const newData = {
      ...data,
      id: generateRandomId(),
      createdAt: generateCreatedAt(),
    };
    setSources((prevSources) => [...prevSources, newData]); // Append new data to the sources
    setIsDialogOpen(false); // Close the dialog
    reset(); // Reset form fields
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-2 bg-blue-600 min-h-8">
          <Plus className="h-4 w-4" />
          Add Data
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Data</DialogTitle>
          <DialogDescription>
            Fill out the details and click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          {/* Name Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" {...register("name")} className="col-span-3" />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm text-right">
              {errors.name.message}
            </p>
          )}

          {/* Type Select */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              Type
            </Label>
            <Select
              onValueChange={(value) =>
                setValue("type", value as "PDF" | "CSV" | "DOCX")
              }
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PDF">PDF</SelectItem>
                <SelectItem value="CSV">CSV</SelectItem>
                <SelectItem value="DOCX">DOCX</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {errors.type && (
            <p className="text-red-500 text-sm text-right">
              {errors.type.message}
            </p>
          )}

          {/* Status Select */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select
              onValueChange={(value) =>
                setValue("status", value as "Uploaded" | "Connected")
              }
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Uploaded">Uploaded</SelectItem>
                <SelectItem value="Connected">Connected</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {errors.status && (
            <p className="text-red-500 text-sm text-right">
              {errors.status.message}
            </p>
          )}

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="createdBy" className="text-right">
              Data Source
            </Label>
            <Select
              onValueChange={(value) =>
                setValue(
                  "createdBy",
                  value as
                    | "website-data"
                    | "user-data"
                    | "server-files"
                    | "products"
                )
              }
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select data source" />
              </SelectTrigger>
              <SelectContent>
                {dataSources.map((source) => (
                  <SelectItem key={source} value={source}>
                    {source}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {errors.createdBy && (
            <p className="text-red-500 text-right text-sm">
              {errors.createdBy.message}
            </p>
          )}

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddDataDialog;

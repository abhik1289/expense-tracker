import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

type InputFiledProps = {
  form: any;
  label: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
};

export function InputFiled({
  form,
  label,
  name,
  placeholder,
  disabled,
}: InputFiledProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      disabled={disabled}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
            className="w-full py-3 px-2 focus:border-blue-40 "
            placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function SelectFiled({
  form,
  label,
  name,
  options,
  disabled,
}: {
  form: any;
  label: string;
  name: string;
  options: { value: string; label: string }[];
  disabled?: boolean;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      disabled={disabled}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select {...field}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map((opt) => (
                    <SelectItem value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

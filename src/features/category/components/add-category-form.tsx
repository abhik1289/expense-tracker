import SubmitButton from "@/components/button/submit-button";
import React, { useState } from "react";
import { Form } from "@/components/ui/form";
import { categorySchema } from "@/lib/schema/category.schema";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputFiled, SelectFiled } from "@/components/inputs/input-filed";
import { HexColorPicker } from "react-colorful";
import ColorPicker from "@/components/color-picker/color-picker";
function AddCategoryForm() {
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
  });

  function onSubmit(data: z.infer<typeof categorySchema>) {}
  const [color, setColor] = useState("#aabbcc");
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
          <InputFiled
            placeholder="Foods and Drinks"
            form={form}
            label="Category Name"
            name="name"
          />
          <SelectFiled
            options={[
              { value: "income", label: "Income" },
              { value: "expense", label: "Expense" },
            ]}
            form={form}
            label="Category Type"
            name="type"
          />
          <ColorPicker />
          {/* <HexColorPicker color={color} onChange={setColor} /> */}
          <SubmitButton isWidthFull disabled={true} title="Submit" />
        </form>
      </Form>
    </div>
  );
}

export default AddCategoryForm;

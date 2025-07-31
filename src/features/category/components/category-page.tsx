"use client";

import AddButton from "@/components/button/add-button";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import AddCategoryDialog from "./add-category-dialog";

function CategoryPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <AddButton
        icon={<Plus className="w-4 h-4" />}
        label="Add Category"
        onClick={() => setOpen(true)}
      />

      <AddCategoryDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}

export default CategoryPage;

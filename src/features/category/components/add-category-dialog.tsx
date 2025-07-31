import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddCategoryForm from "./add-category-form";

type AddCategoryDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isEdit?: boolean; // optional flag for edit mode
};

function AddCategoryDialog({
  open,
  onOpenChange,
  isEdit = false,
}: AddCategoryDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Category" : "Add Category"}</DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Update the details of your category here."
              : "Create a new category to organize your items."}
          </DialogDescription>
        </DialogHeader>

        <AddCategoryForm />
      </DialogContent>
    </Dialog>
  );
}

export default AddCategoryDialog;

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Brush } from "lucide-react";
import { HexColorPicker } from "react-colorful";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function ColorPicker() {
  const [color, setColor] = useState<string>("#aabbcc");
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <label htmlFor="color_picker" className="block">
        Choose Color
      </label>
      {/* <Button
        onClick={() => setShow((prev) => !prev)}
        size={"icon"}
        variant={"outline"}
      >
        <Brush />
      </Button> */}
      <Popover >
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="">
          {/* <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="leading-none font-medium">Dimensions</h4>
              <p className="text-muted-foreground text-sm">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div> */}
          <HexColorPicker color={color} onChange={setColor} />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ColorPicker;

import * as LabelPrimitive from "@radix-ui/react-label";
import type { ComponentProps } from "react";

import { cn } from "~/utils/cn";

interface LabelProps extends ComponentProps<typeof LabelPrimitive.Root> {
  /** Additional class names to apply */
  className?: string;
}

export const Label = ({ className, ...props }: LabelProps) => {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
};

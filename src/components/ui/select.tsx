import * as React from "react";
import { cn } from "@/lib/utils";

interface SelectContextType {
  value: string;
  setValue: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SelectContext = React.createContext<SelectContextType | null>(null);

interface SelectProps {
  defaultValue?: string;
  children: React.ReactNode;
}

const Select = ({ defaultValue, children }: SelectProps) => {
  const [value, setValue] = React.useState(defaultValue || "");
  const [open, setOpen] = React.useState(false);

  return (
    <SelectContext.Provider value={{ value, setValue, open, setOpen }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
};

interface SelectTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  setValue?: (value: string) => void;
}

const SelectTrigger = React.forwardRef<HTMLDivElement, SelectTriggerProps>(
  ({ className, children, value, setValue, onClick, ...props }, ref) => {
    const context = React.useContext(SelectContext);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      context?.setOpen(!context.open);
      onClick?.(e);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between rounded-md text-white  px-2 py-1 text-sm    cursor-pointer",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(SelectContext);

  return (
    <span ref={ref} className={cn("block truncate", className)} {...props}>
      {context?.value || children}
    </span>
  );
});
SelectValue.displayName = "SelectValue";

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  setValue?: (value: string) => void;
}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, setValue, ...props }, ref) => {
    const context = React.useContext(SelectContext);
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          contentRef.current &&
          !contentRef.current.contains(event.target as Node)
        ) {
          context?.setOpen(false);
        }
      };

      if (context?.open) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [context?.open]);

    if (!context?.open) {
      return null;
    }

    return (
      <div
        ref={contentRef}
        className={cn(
          "absolute z-50 min-w-[8rem] overflow-hidden rounded-md    shadow-md",
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === SelectItem) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return React.cloneElement(child, {
              value: (child.props as any).value,
              setValue: context?.setValue,
            } as any);
          }
          return child;
        })}
      </div>
    );
  }
);
SelectContent.displayName = "SelectContent";

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  setValue?: (value: string) => void;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, value, setValue, onClick, ...props }, ref) => {
    const context = React.useContext(SelectContext);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      context?.setValue(value);
      context?.setOpen(false);
      onClick?.(e);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent/50",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };

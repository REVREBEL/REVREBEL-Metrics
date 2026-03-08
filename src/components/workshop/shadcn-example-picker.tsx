"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ShadcnExamplePickerProps {
  code: string;
  onReplaceCode: (nextCode: string) => void;
  registry: Record<string, any>; // Now using the local registry
}

export function ShadcnExamplePicker({
  code,
  onReplaceCode,
  registry,
}: ShadcnExamplePickerProps) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingSelection, setPendingSelection] = useState<{ name: string; type: string } | null>(null);

  // Group your local files into categories for the menu
  const categories = useMemo(() => {
    const items = Object.values(registry);
    return {
      widgets: items.filter(i => i.type === "widget"),
      ui: items.filter(i => i.type === "ui-primitive"),
      custom: items.filter(i => i.type === "custom-component")
    };
  }, [registry]);

  const generateTemplate = (name: string, type: string) => {
    const path = type === "widget" ? `@/widgets/${name}` : `@/components/ui/${name}`;
    return `import React from "react";
import { ${name} } from "${path}";

export default function Example() {
  return (
    <div className="p-10 flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-4xl">
        <${name} />
      </div>
    </div>
  );
}`;
  };

  const applyComponent = (name: string, type: string) => {
    const newCode = generateTemplate(name, type);
    onReplaceCode(newCode);
    toast.success(`Loaded ${name}`);
  };

  const handleSelect = (name: string, type: string) => {
    if (code.trim().length > 0 && !code.includes(name)) {
      setPendingSelection({ name, type });
      setConfirmOpen(true);
      return;
    }
    applyComponent(name, type);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <span className="truncate">Insert component</span>
            <HugeiconsIcon icon={ArrowDown01Icon} className="size-3.5" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="no-scrollbar max-h-[66vh] overflow-y-auto w-56">
          {/* Widgets Category */}
          {categories.widgets.length > 0 && (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Hotel Widgets</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {categories.widgets.map((item) => (
                    <DropdownMenuItem key={item.name} onClick={() => handleSelect(item.name, "widget")}>
                      {item.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          )}

          {/* UI Primitives Category (Standard shadcn) */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>UI Components</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="no-scrollbar max-h-[66vh] overflow-y-auto">
                {categories.ui.map((item) => (
                  <DropdownMenuItem key={item.name} onClick={() => handleSelect(item.name, "ui-primitive")}>
                    {item.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Replace current code?</AlertDialogTitle>
            <AlertDialogDescription>
              This will overwrite your current work in the editor with a fresh template for this component.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setPendingSelection(null)}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (pendingSelection) applyComponent(pendingSelection.name, pendingSelection.type);
                setPendingSelection(null);
                setConfirmOpen(false);
              }}
            >
              Replace
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

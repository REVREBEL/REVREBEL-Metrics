"use client";
import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  StarIcon,
  Share01Icon,
  Layout01Icon,
  LayoutRightIcon,
  GithubIcon,
  Loading02Icon,
} from "@hugeicons/core-free-icons";
import { ShadcnExamplePicker } from "@/components/workshop/shadcn-example-picker";

export type LayoutMode = "horizontal" | "preview-only";

interface NavbarProps {
  layoutMode: LayoutMode;
  onLayoutModeChange: (mode: LayoutMode) => void;
  code: string;
  globalCode: string;
  registry: Record<string, any>;
  onReplaceCode: (code: string) => void;
}

export function Navbar({ 
  registry,
  layoutMode,
  onLayoutModeChange,
  code,
  globalCode,
  onReplaceCode,
}: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = useCallback(async () => {
    setIsSharing(true);

    try {
      const res = await fetch("/api/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, globalCss: globalCode }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Failed to share");
      }

      const { id } = await res.json();
      const url = `${window.location.origin}/s/${id}`;

      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to share";
      toast.error(message);
    } finally {
      setIsSharing(false);
    }
  }, [code, globalCode]);

  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b border-border bg-background px-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="size-5"
            aria-hidden="true"
          >
            <rect width="256" height="256" fill="none" />
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
          <span className="text-base font-semibold text-foreground tracking-tight">
            shadcn/play
          </span>
        </div>
        <Separator orientation="vertical" className="mx-1 h-6 self-center" />
        {/* Pass the registry here so the picker can use local data */}
        <ShadcnExamplePicker 
          code={code} 
          onReplaceCode={onReplaceCode} 
          registry={registry} 
        />
      </div>

      <div className="flex items-center gap-1">
        <ToggleGroup
          type="single"
          value={layoutMode}
          onValueChange={(value) => {
            if (value) onLayoutModeChange(value as LayoutMode);
          }}
          variant="outline"
          size="sm"
        >
          <Tooltip>
            <ToggleGroupItem value="horizontal" aria-label="Side by side" asChild>
              <TooltipTrigger>
                <HugeiconsIcon icon={Layout01Icon} className="size-3.5" />
              </TooltipTrigger>
            </ToggleGroupItem>
            <TooltipContent>Side by side</TooltipContent>
          </Tooltip>
          <Tooltip>
            <ToggleGroupItem value="preview-only" aria-label="Preview only" asChild>
              <TooltipTrigger>
                <HugeiconsIcon icon={LayoutRightIcon} className="size-3.5" />
              </TooltipTrigger>
            </ToggleGroupItem>
            <TooltipContent>Preview only</TooltipContent>
          </Tooltip>
        </ToggleGroup>

        <Separator orientation="vertical" className="mx-1 self-stretch" />

        <Tooltip>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            asChild
          >
            <TooltipTrigger>
              <HugeiconsIcon icon={StarIcon} className="size-3.5 text-black dark:text-white" />
            </TooltipTrigger>
          </Button>
          <TooltipContent>Toggle theme</TooltipContent>
        </Tooltip>

        <Tooltip>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => window.open("https://github.com/ephraimduncan/shadcn-play", "_blank")}
            aria-label="GitHub"
            asChild
          >
            <TooltipTrigger>
              <HugeiconsIcon icon={GithubIcon} className="size-3.5" />
            </TooltipTrigger>
          </Button>
          <TooltipContent>View on GitHub</TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="mx-1 self-stretch" />

        <Button
          variant="default"
          size="sm"
          onClick={handleShare}
          disabled={isSharing}
          className="dark:!bg-white dark:!text-black dark:hover:!bg-white/90"
        >
          {isSharing ? (
            <HugeiconsIcon icon={Loading02Icon} className="size-3.5 animate-spin" />
          ) : (
            <HugeiconsIcon icon={Share01Icon} className="size-3.5" />
          )}
          {isSharing ? "Sharing…" : "Share"}
        </Button>
      </div>
    </header>
  );
}

// src/components/workshop/workshop.tsx
"use client";

import { useState, useCallback, useEffect } from "react";
import { useAtom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import type { ConsoleEntry } from "@/components/workshop/preview-iframe";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { Navbar, type LayoutMode } from "@/components/workshop/navbar";
import {
  EditorPanel,
  DEFAULT_TSX_CODE,
} from "@/components/workshop/editor-panel";
import { PreviewPanel } from "@/components/workshop/preview-panel";
import { StatusBar } from "@/components/workshop/status-bar";
import { useTranspile } from "@/hooks/use-transpile";
import { useTailwindWorker } from "@/hooks/use-tailwind-worker";
import { DEFAULT_GLOBALS_CSS } from "@/lib/workshop/theme";

// Import the registry directly here to avoid serialization errors
import { WORKSHOP_REGISTRY } from "@/lib/workshop/registry";

interface WorkshopProps {
  initialCode?: string;
  initialGlobalCSS?: string;
}

const codeStorage = createJSONStorage<string>(() => globalThis.localStorage);

const workshopCodeAtom = atomWithStorage<string>(
  "workshop.code",
  DEFAULT_TSX_CODE,
  codeStorage,
  { getOnInit: true },
);

const workshopGlobalCSSAtom = atomWithStorage<string>(
  "workshop.globalCSS",
  DEFAULT_GLOBALS_CSS,
  codeStorage,
  { getOnInit: true },
);

export function Workshop({ initialCode, initialGlobalCSS }: WorkshopProps) {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("horizontal");
  const [persistedCode, setPersistedCode] = useAtom(workshopCodeAtom);
  const [persistedGlobalCSS, setPersistedGlobalCSS] = useAtom(workshopGlobalCSSAtom);
  const [sharedCode, setSharedCode] = useState(initialCode ?? DEFAULT_TSX_CODE);
  const [sharedGlobalCSS, setSharedGlobalCSS] = useState(
    initialGlobalCSS ?? DEFAULT_GLOBALS_CSS,
  );
  
  const isSharedSnippet = initialCode !== undefined || initialGlobalCSS !== undefined;

  useEffect(() => {
    const search = window.location.search;
    if (
      (initialCode && search.includes("code=")) ||
      (initialGlobalCSS && search.includes("css=")) ||
      search.includes("open=")
    ) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [initialCode, initialGlobalCSS]);

  const code = isSharedSnippet ? sharedCode : persistedCode;
  const setCode = isSharedSnippet ? setSharedCode : setPersistedCode;
  const globalCSS = isSharedSnippet ? sharedGlobalCSS : persistedGlobalCSS;
  const setGlobalCSS = isSharedSnippet ? sharedGlobalCSS : setPersistedGlobalCSS;

  const compilationResult = useTranspile(code);
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme ?? "light";

  const candidates = compilationResult && !("error" in compilationResult)
      ? compilationResult.candidates
      : [];
  const tailwindCSS = useTailwindWorker(candidates);

  const transpileError = compilationResult && "error" in compilationResult
      ? compilationResult.error
      : null;
  const [runtimeError, setRuntimeError] = useState("");

  const [consoleLogs, setConsoleLogs] = useState<ConsoleEntry[]>([]);
  const handleConsoleMessage = useCallback((entry: ConsoleEntry) => {
    setConsoleLogs((prev) => {
      const next = [...prev, entry];
      return next.length > 500 ? next.slice(-500) : next;
    });
  }, []);
  const handleClearConsole = useCallback(() => setConsoleLogs([]), []);

  return (
    <div className={cn("flex h-dvh flex-col bg-background font-funnel")}>
      <Navbar
        layoutMode={layoutMode}
        onLayoutModeChange={setLayoutMode}
        code={code}
        globalCode={globalCSS}
        onReplaceCode={setCode}
        registry={WORKSHOP_REGISTRY} 
      />

      <div className="flex-1 min-h-0">
        {layoutMode === "preview-only" ? (
          <PreviewPanel
            compilationResult={compilationResult}
            tailwindCSS={tailwindCSS}
            globalCSS={globalCSS}
            transpileError={transpileError}
            theme={theme}
            runtimeError={runtimeError}
            onRuntimeError={setRuntimeError}
            consoleLogs={consoleLogs}
            onClearConsole={handleClearConsole}
            onConsoleMessage={handleConsoleMessage}
          />
        ) : (
          <ResizablePanelGroup orientation="horizontal" className="h-full">
            <ResizablePanel defaultSize={40} minSize={25}>
              <EditorPanel
                code={code}
                onCodeChange={setCode}
                globalCode={globalCSS}
                onGlobalCodeChange={setGlobalCSS}
                error={transpileError}
                runtimeError={runtimeError}
                onReset={() => setCode(DEFAULT_TSX_CODE)}
                onGlobalReset={() => setGlobalCSS(DEFAULT_GLOBALS_CSS)}
              />
            </ResizablePanel>
            <ResizableHandle withHandle className="focus-visible:ring-0 focus-visible:ring-offset-0" />
            <ResizablePanel defaultSize={60} minSize={25}>
              <PreviewPanel
                compilationResult={compilationResult}
                tailwindCSS={tailwindCSS}
                globalCSS={globalCSS}
                transpileError={transpileError}
                theme={theme}
                runtimeError={runtimeError}
                onRuntimeError={setRuntimeError}
                consoleLogs={consoleLogs}
                onClearConsole={handleClearConsole}
                onConsoleMessage={handleConsoleMessage}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </div>
      <StatusBar />
    </div>
  );
}

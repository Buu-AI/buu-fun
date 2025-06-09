import React, { useState } from "react";
import { ChevronDown, ChevronRight, Copy } from "lucide-react";

interface JsonViewerProps {
  data: any;
  maxHeight?: string;
  className?: string;
}

interface JsonValueProps {
  value: any;
  keyName: string;
  path?: string;
  level?: number;
}

type ValueType = "string" | "number" | "boolean" | "null" | "array" | "object";

export default function JsonViewer({
  data,
  maxHeight = "24rem",
  className = "",
}: JsonViewerProps) {
  const [copiedPath, setCopiedPath] = useState<string>("");

  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const copyToClipboard = async (text: string, path: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPath(path);
      setTimeout(() => setCopiedPath(""), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const getValueType = (val: any): ValueType => {
    if (val === null) return "null";
    if (Array.isArray(val)) return "array";
    return typeof val as ValueType;
  };

  const isUrl = (value: string): boolean => {
    return (
      typeof value === "string" &&
      (value.startsWith("http://") || value.startsWith("https://"))
    );
  };

  const isLongText = (value: string): boolean => {
    return typeof value === "string" && value.length > 50;
  };

  function JsonValue({ value, keyName, path = "", level = 0 }: JsonValueProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(level < 2);
    const currentPath: string = path ? `${path}.${keyName}` : keyName;

    const valueType: ValueType = getValueType(value);
    const indentClass: string = `ml-${Math.min(level * 4, 16)}`;

    if (valueType === "string") {
      const urlCheck: boolean = isUrl(value);
      const longTextCheck: boolean = isLongText(value);

      return (
        <div className={`${indentClass} mb-3`}>
          <div className="flex items-start justify-between group">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {capitalizeFirstLetter(keyName)}
              </p>
              {urlCheck ? (
                <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline text-sm break-all transition-colors"
                >
                  {value}
                </a>
              ) : (
                <p
                  className={`text-sm text-foreground ${longTextCheck ? "leading-relaxed" : ""}`}
                >
                  {value}
                </p>
              )}
            </div>
            <button
              onClick={() => copyToClipboard(String(value), currentPath)}
              className="opacity-0 group-hover:opacity-100 ml-2 p-1 hover:bg-accent rounded transition-opacity"
              title="Copy value"
            >
              <Copy className="w-3 h-3 text-muted-foreground" />
              {copiedPath === currentPath && (
                <span className="absolute -mt-8 -ml-6 bg-popover text-popover-foreground text-xs px-2 py-1 rounded border shadow-md">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      );
    }

    if (valueType === "number" || valueType === "boolean") {
      return (
        <div className={`${indentClass} mb-3`}>
          <div className="flex items-center justify-between group">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {capitalizeFirstLetter(keyName)}
              </p>
              <p
                className={`text-sm font-mono ${valueType === "boolean" ? "text-chart-4" : "text-chart-2"}`}
              >
                {String(value)}
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(String(value), currentPath)}
              className="opacity-0 group-hover:opacity-100 ml-2 p-1 hover:bg-accent rounded transition-opacity"
              title="Copy value"
            >
              <Copy className="w-3 h-3 text-muted-foreground" />
            </button>
          </div>
        </div>
      );
    }

    if (valueType === "null") {
      return (
        <div className={`${indentClass} mb-3`}>
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {capitalizeFirstLetter(keyName)}
          </p>
          <p className="text-sm font-mono text-muted-foreground/60">null</p>
        </div>
      );
    }

    if (valueType === "array") {
      const arrayValue = value as any[];

      return (
        <div className={`${indentClass} mb-3`}>
          <div className="flex items-center mb-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 mr-1" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-1" />
              )}
              {capitalizeFirstLetter(keyName)}
              <span className="ml-2 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                {arrayValue.length} item{arrayValue.length !== 1 ? "s" : ""}
              </span>
            </button>
          </div>

          {isExpanded && (
            <div className="border-l-2 border-border pl-4">
              {arrayValue.map((item: any, index: number) => (
                <JsonValue
                  key={index}
                  value={item}
                  keyName={`[${index}]`}
                  path={currentPath}
                  level={level + 1}
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    if (valueType === "object") {
      const objectValue = value as Record<string, any>;
      const keys: string[] = Object.keys(objectValue);

      return (
        <div className={`${indentClass} mb-3`}>
          <div className="flex items-center mb-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 mr-1" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-1" />
              )}
              {capitalizeFirstLetter(keyName)}
              <span className="ml-2 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                {keys.length} field{keys.length !== 1 ? "s" : ""}
              </span>
            </button>
          </div>

          {isExpanded && (
            <div className="border-l-2 border-border pl-4">
              {keys.map((key: string) => (
                <JsonValue
                  key={key}
                  value={objectValue[key]}
                  keyName={key}
                  path={currentPath}
                  level={level + 1}
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    return null;
  }

  if (!data) {
    return (
      <div className={`max-w-4xl mx-auto p-6 ${className}`}>
        <div className="bg-card rounded-lg border shadow-sm">
          <div className="px-6 py-4 text-center text-muted-foreground">
            No data provided
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-4xl mx-auto p-0 ${className}`}>
      <div className=" rounded-lg  shadow-sm">
        <div
          className={`px-0 py-0 overflow-y-auto scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-orange scrollbar-thumb-rounded`}
          style={{ maxHeight }}
        >
          {Object.keys(data).map((key: string) => (
            <JsonValue key={key} value={data[key]} keyName={key} level={0} />
          ))}
        </div>
      </div>
    </div>
  );
}

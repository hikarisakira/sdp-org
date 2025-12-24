// src/components/react/TinaContent.tsx
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

interface TinaContentProps {
  content: TinaMarkdownContent;
}

export default function TinaContent({ content }: TinaContentProps) {
  if (!content) {
    return null;
  }

  return <TinaMarkdown content={content} />;
}

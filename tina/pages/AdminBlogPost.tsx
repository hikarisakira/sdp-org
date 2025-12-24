import React from "react";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

interface AdminBlogPostProps {
  data: any;
  query: string;
  variables: {
    relativePath: string;
  };
}

export default function AdminBlogPost(props: AdminBlogPostProps) {
  // useTina 會啟用編輯模式
  const { data } = useTina(props);

  // 渲染文章內容，使用 tinaField 讓每個欄位可編輯
  return (
    <div>
      <TinaMarkdown content={data.news.body} />
    </div>
  );
}

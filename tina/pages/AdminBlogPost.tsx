import React from "react";
import { useTina } from "tinacms/dist/react";

interface AdminBlogPostProps {
  children: React.ReactNode;
  data: any;
  query: string;
  variables: {
    relativePath: string;
  };
}

export default function AdminBlogPost(props: AdminBlogPostProps) {
  // useTina 會啟用編輯模式
  const { data } = useTina(props);

  // 直接渲染 children，TinaCMS 會自動注入編輯功能
  return <>{props.children}</>;
}

// src/components/react/LatestNews.tsx
import { useState, useEffect } from 'react';

interface LatestNewsProps {
  posts: Array<{
    id: string;
    data: {
      title: string;
      description: string;
      pubDate: Date | string;
      heroImage: string | null;
      category: string;
      tags: string[];
    };
  }>;
}

export default function LatestNews({ posts }: LatestNewsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // 根據螢幕尺寸決定每頁顯示數量
  const postsPerPage = isMobile ? 1 : 3;
  const maxPages = isMobile ? 6 : 2;
  const totalPosts = Math.min(posts.length, postsPerPage * maxPages);
  const displayPosts = posts.slice(0, totalPosts);
  
  // 計算總頁數
  const totalPages = Math.ceil(displayPosts.length / postsPerPage);
  
  // 當前頁面的文章
  const currentPosts = displayPosts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );
  
  // 監聽螢幕尺寸變化
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="py-8 md:py-16 px-4 bg-base-100">
      <div className="max-w-7xl mx-auto">
        {/* 標題列 */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">最新消息</h2>
          <a 
            href="/news" 
            className="btn btn-outline btn-secondary btn-sm md:btn-md"
          >
            查看全部
          </a>
        </div>

        {/* 桌面版佈局：左右箭頭 */}
        <div className="hidden md:flex items-center gap-8 mb-8">
          {/* 左側箭頭按鈕 */}
          {totalPages > 1 && (
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 0}
              className="btn btn-circle btn-lg btn-secondary shrink-0 disabled:opacity-30"
              aria-label="上一頁"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>
          )}

          {/* 卡片網格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {currentPosts.map((post) => {
              const pubDate = post.data.pubDate instanceof Date 
                ? post.data.pubDate 
                : new Date(post.data.pubDate);

              return (
                <article 
                  key={post.id}
                  className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow flex flex-col h-full"
                >
                  {/* 圖片區域 */}
                  {post.data.heroImage && (
                    <figure className="h-48 overflow-hidden">
                      <img
                        src={post.data.heroImage}
                        alt={post.data.title}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  )}
                  
                  {/* 內容區域 */}
                  <div className="card-body flex flex-col justify-between flex-1 p-6">
                    <div>
                      {/* 標籤 - 最多顯示兩個 */}
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {post.data.tags?.slice(0, 2).map((tag, index) => (
                          <div key={index} className="badge badge-secondary badge-sm">
                            {tag}
                          </div>
                        ))}
                      </div>

                      {/* 標題 */}
                      <h3 className="card-title text-lg line-clamp-2 mb-2">
                        {post.data.title}
                      </h3>
                      
                      {/* 描述 */}
                      <p className="text-sm text-gray-600 line-clamp-1 mb-4">
                        {post.data.description}
                      </p>
                    </div>
                    
                    {/* 底部資訊 */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-base-200">
                      <time className="text-xs text-gray-500">
                        {pubDate.toLocaleDateString('zh-TW', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      
                      <a 
                        href={`/news/${post.id}`}
                        className="btn btn-sm btn-ghost gap-1"
                      >
                        閱讀更多 
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M13 7l5 5m0 0l-5 5m5-5H6" 
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* 右側箭頭按鈕 */}
          {totalPages > 1 && (
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1}
              className="btn btn-circle btn-lg btn-secondary shrink-0 disabled:opacity-30"
              aria-label="下一頁"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          )}
        </div>

        {/* 手機版佈局：左右箭頭 + 單張卡片 */}
        <div className="md:hidden mb-8">
          <div className="relative">
            {/* 卡片容器 */}
            <div className="overflow-hidden">
              {currentPosts.map((post) => {
                const pubDate = post.data.pubDate instanceof Date 
                  ? post.data.pubDate 
                  : new Date(post.data.pubDate);

                return (
                  <article 
                    key={post.id}
                    className="card bg-base-100 shadow-xl"
                  >
                    {/* 圖片區域 - 固定高度 */}
                    {post.data.heroImage && (
                      <figure className="h-48 overflow-hidden">
                        <img
                          src={post.data.heroImage}
                          alt={post.data.title}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                    )}
                    
                    {/* 內容區域 */}
                    <div className="card-body p-5">
                      {/* 標籤 - 最多顯示兩個 */}
                      <div className="flex gap-2 mb-2 flex-wrap">
                        {post.data.tags?.slice(0, 2).map((tag, index) => (
                          <div key={index} className="badge badge-secondary badge-sm">
                            {tag}
                          </div>
                        ))}
                      </div>

                      {/* 標題 - 限制 2 行 */}
                      <h3 className="card-title text-base line-clamp-2 mb-2">
                        {post.data.title}
                      </h3>
                      
                      {/* 描述 - 限制 1 行 */}
                      <p className="text-sm text-gray-600 line-clamp-1 mb-3">
                        {post.data.description}
                      </p>
                      
                      {/* 底部資訊 */}
                      <div className="flex items-center justify-between pt-3 border-t border-base-200">
                        <time className="text-xs text-gray-500">
                          {pubDate.toLocaleDateString('zh-TW', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        
                        <a 
                          href={`/news/${post.id}`}
                          className="btn btn-xs btn-ghost gap-1"
                        >
                          閱讀更多 →
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* 左右箭頭 - 絕對定位 */}
            {totalPages > 1 && (
              <>
                {/* 左箭頭 */}
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 btn btn-circle btn-sm btn-secondary z-10 disabled:opacity-30"
                  aria-label="上一張"
                >
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 19l-7-7 7-7" 
                    />
                  </svg>
                </button>

                {/* 右箭頭 */}
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages - 1}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 btn btn-circle btn-sm btn-secondary z-10 disabled:opacity-30"
                  aria-label="下一張"
                >
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        {/* 圓點指示器 - 在底部中央 */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentPage === i 
                    ? 'bg-secondary w-8' 
                    : 'bg-base-300 hover:bg-base-400'
                }`}
                aria-label={`前往第 ${i + 1} 頁`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
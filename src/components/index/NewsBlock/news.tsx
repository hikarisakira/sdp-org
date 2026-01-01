import { useState, useEffect } from "react";
import type { CollectionEntry } from "astro:content";

interface LatestNewsProps {
    posts: Array<{
        id: string;
        data: {
            title:string;
            description: string
            pubDate: Date | string;
            heroImage: string | null;
            category: string;
        };
    }>;
};

export default function LatestNews({posts}: LatestNewsProps) {
    return(
        <section className="py-16 px-4 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">最新消息</h2>
          <a 
            href="/news" 
            className="btn btn-outline btn-primary"
          >
            查看全部
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 6).map((post) => {
            const pubDate = post.data.pubDate instanceof Date 
              ? post.data.pubDate 
              : new Date(post.data.pubDate);

            return (
              <article 
                key={post.id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
              >
                {post.data.heroImage && (
                  <figure>
                    <img
                      src={post.data.heroImage}
                      alt={post.data.title}
                      className="w-full h-48 object-cover"
                    />
                  </figure>
                )}
                
                <div className="card-body">
                  <div className="badge badge-primary badge-sm mb-2">
                    {post.data.category}
                  </div>
                  
                  <h3 className="card-title text-lg line-clamp-2">
                    {post.data.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {post.data.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <time className="text-xs text-gray-500">
                      {pubDate.toLocaleDateString('zh-TW', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    
                    <a 
                      href={`/news/${post.id}`}
                      className="btn btn-sm btn-ghost"
                    >
                      閱讀更多 →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
    )
}

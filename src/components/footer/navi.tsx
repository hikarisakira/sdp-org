export default function FooterNavigation() {
    return(
        <>
            <nav>
                <div>
                    <h6 className="footer-title">最新消息</h6>
                </div>
                <div className="flex flex-col gap-2 text-white">
                    <a href="/news/press" className="link link-hover">新聞稿</a>
                    <a href="/news/events" className="link link-hover">活動資訊</a>
                    <a href="/news/issues" className="link link-hover">議題發言</a>
                    <a href="/news/clarification" className="link link-hover">闢謠專區</a>
                </div>
            </nav>

            <nav>
                <div>
                    <h6 className="footer-title">關於社民黨</h6>
                </div>
                <div className="flex flex-col gap-2 text-white">
                    <a href="/about" className="link link-hover">簡介</a>
                    <a href="/about/team" className="link link-hover">組織團隊</a>
                    <a href="/about/officials" className="link link-hover">黨公職</a>
                    <a href="/about/documents" className="link link-hover">黨務文件</a>
                    <a href="/about/finance" className="link link-hover">財報公開專區</a>
                </div>
            </nav>
        </>
    );
}
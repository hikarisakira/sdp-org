import FacebookIcon from './footer/icons/facebook.tsx';
import InstagramIcon from './footer/icons/instagram.tsx';
import YoutubeIcon from './footer/icons/youtube.tsx';
import ThreadsIcon from './footer/icons/threads';
import LineIcon from './footer/icons/line';

import LogoZone from './footer/logo';

export default function Footer() {
    return(
    <>
        <link rel="stylesheet" href="./node_modules/lineicons/dist/lineicons.css" />
        <footer className="footer lg:footer-horizontal text-white p-10" id='footer-color'>
            <LogoZone />
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

            <div className="footer-end">
                <div>
                    <span className="footer-title">聯絡我們</span>
                    <p className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path d="M21.51 5.77a2.25 2.25 0 0 0-2.88-2.88l-14 5.1a2.25 2.25 0 0 0-.07 4.2l5.17 2.07q.3.12.41.42l2.07 5.16a2.25 2.25 0 0 0 4.2-.07z" fill="#fff" />
                        </svg>
                        台北市中山區林森北路100號8樓之4
                    </p>

                    <p className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        sdparty.tw@gmail.com
                    </p>
                </div>
                <span className="footer-title mt-4">社群媒體</span>
                <div className="flex gap-4">
                    <a href="https://facebook.com/sdparty.tw" className="btn btn-circle btn-ghost">
                        <FacebookIcon />
                    </a>
                    <a href="https://instagram.com" className="btn btn-circle btn-ghost">
                        <InstagramIcon />
                    </a>
                    <a href="https://youtube.com" className="btn btn-circle btn-ghost">
                        <YoutubeIcon />
                    </a>
                    <a href="https://threads.com" className="btn btn-circle btn-ghost">
                        <ThreadsIcon />
                    </a>
                    <a href="https://threads.com" className="btn btn-circle btn-ghost">
                        <LineIcon />
                    </a>
                </div>
            </div>

        </footer>
    </>
    );
}
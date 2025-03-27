import FacebookIcon from './icons/facebook.tsx';
import InstagramIcon from './icons/instagram.tsx';
import YoutubeIcon from './icons/youtube.tsx';
import ThreadsIcon from './icons/threads';
import LineIcon from './icons/line';


export default function ContactButton() {
    return(
        <>
            <div className="footer-end">
                <div>
                    <span className="footer-title">聯絡我們</span>
                    <p className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path d="M21.51 5.77a2.25 2.25 0 0 0-2.88-2.88l-14 5.1a2.25 2.25 0 0 0-.07 4.2l5.17 2.07q.3.12.41.42l2.07 5.16a2.25 2.25 0 0 0 4.2-.07z" fill="#fff" />
                        </svg>
                        台北市中山區林森北路100號8樓之4
                    </p>

                    <p className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
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

        </>
    );
}
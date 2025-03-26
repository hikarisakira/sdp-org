export default function LogoZone() {
    return (
        <aside className="items-center sm:flex">
            <div className="flex items-center mb-4">
                <img loading="lazy" src="/footer-logo.min.svg" alt="社會民主黨" className="h-32" />
            </div>
            <div className="flex flex-col  mb-4">
                <span className="footer-title">支持社民 一同前進</span>
                <p className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" className="w-5 h-5">
                        <path d="M15.3 2c.42 0 .76.34.76.75v.17c.75.19 1.3.87 1.3 1.67a.75.75 0 0 1-1.5 0q-.02-.2-.23-.22h-.4a.48.48 0 0 0-.16.93l1 .38a1.98 1.98 0 0 1-.01 3.72v.23a.75.75 0 0 1-1.5 0v-.17a1.7 1.7 0 0 1-1.3-1.67.75.75 0 0 1 1.5 0q.02.21.22.23h.4a.48.48 0 0 0 .17-.94l-1-.37a1.98 1.98 0 0 1 0-3.72v-.24c0-.41.34-.75.76-.75" fill="#FFF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.43 11.08a1.58 1.58 0 0 1 2.22 2.22l-3.86 4.82a2 2 0 0 1-1.55.75h-6.17a1 1 0 0 0-.5.2l-.53.47c.1.32-.03.7-.34.87L6.12 21.9a.75.75 0 0 1-1.02-.27l-3-5.2a.75.75 0 0 1 .28-1.02l2.57-1.5a.8.8 0 0 1 .75 0l1.69-1.35a3.3 3.3 0 0 1 2.02-.75c.82 0 2.1.07 3.27.5h2.6c.65 0 1.23.35 1.54.89zM8.56 17.95l-.27.24-1.75-3.03 1.78-1.43q.54-.41 1.1-.42c.77 0 1.88.07 2.8.43q.18.06.37.06h2.68a.29.29 0 0 1 .23.47l-.07.06-.03.02-.13.03h-2.73a.75.75 0 0 0 0 1.5h2.73c.49 0 .93-.2 1.25-.5l3.85-3.13a.08.08 0 0 1 .11.1l-3.87 4.84a.5.5 0 0 1-.37.18h-6.17c-.56 0-1.1.2-1.51.58m-4.79-1.62 2.25 3.9 1.28-.74-2.25-3.9z" fill="#FFF" />
                    </svg>
                    <a href="/donate" className="link link-hover">捐款支持社民黨</a>
                </p>
                <br />
                <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke-width="1.5" className="w-5 h-5">
                        <path d="M21 16h2v2h-2zM9 16h8v2H9zm12-4h2v2h-2zM9 12h8v2H9zm0-4h14v2H9z" fill="#FFF" />
                        <path d="M25 2H7a2 2 0 0 0-2 2v25a1 1 0 0 0 1 1h1a1 1 0 0 0 .8-.4l2.2-3 2.2 3a1 1 0 0 0 1.6 0l2.2-3 2.2 3a1 1 0 0 0 1.6 0l2.2-3 2.2 3a1 1 0 0 0 .8.4h1a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2m0 25.3-2.2-2.9a1 1 0 0 0-1.6 0l-2.2 3-2.2-3a1 1 0 0 0-1.6 0l-2.2 3-2.2-3a1 1 0 0 0-1.6 0l-2.2 3V4h18Z" fill="#FFF" />
                        <path data-name="&lt;Transparent Rectangle&gt;" fill="none" d="M0 0h32v32H0z" />
                    </svg>
                    愛心碼：0329
                </p>
            </div>
        </aside>
    )
}
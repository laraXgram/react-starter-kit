import { Head } from '@laraxgram/react';
import '../../css/welcome.css';

interface WelcomeProps {
    version?: string;
    phpVersion?: string;
}

export default function Welcome({ version = '4.x', phpVersion = '8.x' }: WelcomeProps) {
    return (
        <>
            <Head title="Welcome" />

            <div className="lg-page">
                <div className="wrap">
                    <div className="topbar">
                        <div className="brand">
                            <span className="mark">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156 156">
                                    <path fill="#FE0102" transform="translate(108,15)" d="M0 0 C-0.99 3.3 -1.98 6.6 -3 10 C-5.44 9.26 -5.44 9.26 -7.94 8.5 C-20.83 5.3 -34.45 5.58 -46.19 12.19 C-54.16 17.58 -58.58 24.77 -61.59 33.75 C-63.27 42.89 -63.02 53.56 -59 62 C-56.05 68.61 -53.73 71.72 -50 75 C-40.38 82.3 -33.22 83.18 -24.56 83.19 C-19.16 83.24 -19.16 83.24 -10 81 C-9.67 71.43 -9.34 61.86 -9 52 C-15.27 52 -21.54 52 -28 52 C-28 48.7 -28 45.4 -28 42 C-17.77 42 -7.54 42 3 42 C3.67 67.59 3.67 67.59 -0.91 93.84 C-4.27 96.66 -7.68 99.69 -11.04 103.13 C-14.38 106.46 -17.79 109.85 -25 117 C-31.96 112.31 -36.2 108.02 -45.98 98.2 C-56.7 87.39 -65.35 77.58 -74 61 C-77.37 43.38 -76.17 28.91 -67.67 16.2 C-59.85 5.9 -48.84 -0.82 -36 -3 C-22.66 -5.14 -10.91 -3.48 0 0 Z" />
                                    <path fill="#0288FE" transform="translate(21,72)" d="M0 0 C9.7 8.64 18.59 17.38 32.31 30.75 C41.29 40.42 50.62 49.72 60 59 C66.59 54.62 71.62 49.42 82.5 38.28 C86.5 34.17 88.35 32.38 92 32 C93.65 33.98 95.3 35.96 97 38 C88.32 47.81 77.28 58.8 60 76 C50.9 68.04 40.91 58.02 24.24 41.31 C16.98 34.03 6.23 23.26 -8 9 C-4.05 4.37 -2.39 2.44 0 0 Z" />
                                </svg>
                            </span>
                            <span className="name">Lara<b>Gram</b></span>
                        </div>
                        <div className="chips">
                            <span className="chip"><span className="live"></span> RUNNING</span>
                            <span className="chip">v<b>{version}</b></span>
                            <span className="chip">PHP <b>{phpVersion}</b></span>
                        </div>
                    </div>

                    <div className="hero">
                        <h1><span className="grad">Hello LaraGram!</span></h1>
                        <p className="lede">
                            LaraGram is an expressive, elegant framework for the entire Telegram ecosystem;
                            write bots, Mini&nbsp;Apps (TMA) and MTProto clients with the same fluent, batteries-included toolkit.
                        </p>

                        <div className="actions">
                            <a className="btn btn-primary" href="https://laraxgram.githib.io" target="_blank" rel="noopener">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v12H5.2L4 17.2V4z" /><path d="M8 9h8M8 12h5" /></svg>
                                Read the docs
                            </a>
                            <a className="btn btn-ghost" href="https://github.com/laraxgram" target="_blank" rel="noopener">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" /></svg>
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="card">
                            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="7" width="16" height="12" rx="3" /><path d="M12 7V4M9 13h.01M15 13h.01M8 3h8" /></svg></div>
                            <h3>Bots</h3>
                            <p>Fluent listeners, keyboards, conversations and full Bot API coverage.</p>
                        </div>
                        <div className="card">
                            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="3" width="12" height="18" rx="3" /><path d="M11 18h2" /></svg></div>
                            <h3>Mini Apps</h3>
                            <p>TMA &amp; SPA support — auth, sessions and native Telegram bridges.</p>
                        </div>
                        <div className="card">
                            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18" /><path d="M4 7l8-4 8 4" /><path d="M4 7v10l8 4 8-4V7" /></svg></div>
                            <h3>MTProto Clients</h3>
                            <p>Drive full user-account clients with the same expressive API.</p>
                        </div>
                        <div className="card red">
                            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg></div>
                            <h3>Batteries included</h3>
                            <p>Routing, ORM, queues, cache, anti-flood, proxy pool and Surge async.</p>
                        </div>
                    </div>

                    <footer>
                        <div className="foot">
                            <span>© {new Date().getFullYear()} LaraGram <span className="dot">·</span> The LaraGram framework</span>
                            <span>
                                <a href="https://github.com/laraxgram" target="_blank" rel="noopener">github.com/laraxgram</a>
                                <span className="dot">·</span> LARAGRAM v{version}
                            </span>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

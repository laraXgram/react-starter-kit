import '../css/app.css';

import { createLunaApp, type ResolvedComponent } from '@laraxgram/react';
import { createRoot, hydrateRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'LaraGram';

createLunaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const pages = import.meta.glob<ResolvedComponent>('./pages/**/*.tsx', {
            eager: true,
        });
        return pages[`./pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
        if (el.hasAttribute('data-server-rendered')) {
            hydrateRoot(el, <App {...props} />);
            return;
        }
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#2aabee',
    },
});

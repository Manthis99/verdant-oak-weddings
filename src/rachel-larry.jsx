import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RachelLarryFilm from './pages/RachelLarryFilm';

// This page is unlisted, not authenticated.
const youtubeVideoId = 'ry8qJ6A2JDg';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RachelLarryFilm youtubeVideoId={youtubeVideoId} />
    </StrictMode>,
);

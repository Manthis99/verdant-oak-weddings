import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RachelLarryFilm from './pages/RachelLarryFilm';

// Pending the couple's uploaded video. This page is unlisted, not authenticated.
const youtubeVideoId = null;

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RachelLarryFilm youtubeVideoId={youtubeVideoId} />
    </StrictMode>,
);

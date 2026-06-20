/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'youtube', 'blog', 'tiktok'
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '▶',
        label: 'YouTube',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '📝',
        label: 'Blog',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '🎵',
        label: 'TikTok',
        shape: 'phone', // Vertical phone
    },
};

const RAW_CONTENT_DATA = [
    // ============ YouTube Videos ============
    {
        id: 'yt-001',
        platform: 'youtube',
        title: 'I Built a WebGL 3D Corridor Portfolio from Scratch',
        description: 'Take a deep dive into the architecture of an award-winning WebGL interactive website. I explain the React Three Fiber setup, custom shaders, and camera controllers.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2026-01-10',
        views: '15.2K',
        duration: '15:32',
    },
    {
        id: 'yt-002',
        platform: 'youtube',
        title: 'WebGL Mobile Optimization Secrets (60 FPS Guide)',
        description: 'How to optimize complex React Three Fiber and Three.js scenes to run smoothly on any mobile browser. Tips on texture compression and draw-call reduction.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-10-11',
        views: '12.4K',
        duration: '7:45',
    },
    {
        id: 'yt-003',
        platform: 'youtube',
        title: 'React Three Fiber Crash Course',
        description: 'Everything you need to know to get started with 3D graphics in modern React applications.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-12-28',
        views: '24.5K',
        duration: '22:10',
    },
    {
        id: 'yt-004',
        platform: 'youtube',
        title: 'Shaders for Beginners',
        description: 'An absolute beginner\'s introduction to GLSL fragment and vertex shaders in WebGL.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-12-15',
        views: '18.2K',
        duration: '18:33',
    },
    {
        id: 'yt-005',
        platform: 'youtube',
        title: 'GSAP + Three.js Integration',
        description: 'Choreographing complex 3D animations and camera movements using GSAP ScrollTrigger.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-12-01',
        views: '31.1K',
        duration: '20:15',
    },
    {
        id: 'yt-006',
        platform: 'youtube',
        title: 'Building Interactive 3D Scenes',
        description: 'Raycasting, hover effects, custom cursor interactions, and click events in Three.js.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-11-20',
        views: '28.9K',
        duration: '25:00',
    },
    {
        id: 'yt-007',
        platform: 'youtube',
        title: 'WebGL Performance Deep Dive',
        description: 'Optimizing draw calls, instanced rendering, geometry merging, and asset preloading.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-11-10',
        views: '15.3K',
        duration: '30:22',
    },
    {
        id: 'yt-008',
        platform: 'youtube',
        title: 'Procedural Textures Tutorial',
        description: 'Creating high-fidelity procedural materials and noise-based textures dynamically.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-10-28',
        views: '19.4K',
        duration: '18:45',
    },
 
    // ============ Blog Posts ============
    {
        id: 'blog-001',
        platform: 'blog',
        title: 'Behind the Scenes: Designing KRAFT Theme',
        description: 'An in-depth writeup discussing the aesthetic choices, visual direction, hand-drawn paper sketch models, and custom Reveal shaders used in KRAFT.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2026-01-08',
        readTime: '5 min',
    },
    {
        id: 'blog-002',
        platform: 'blog',
        title: 'The Hand-Drawn Sketch Aesthetic',
        description: 'How to achieve a unique sketch-like visual style using custom WebGL shaders and canvas maps.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-12-20',
        readTime: '8 min',
    },
    {
        id: 'blog-003',
        platform: 'blog',
        title: 'Optimizing 3D for the Web',
        description: 'Performance optimization checklists for achieving smooth, lag-free 60fps web animation.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-12-10',
        readTime: '6 min',
    },
    {
        id: 'blog-004',
        platform: 'blog',
        title: 'Creative Coding Journey',
        description: 'My shift from typical software engineering to building interactive, motion-heavy digital art.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-11-25',
        readTime: '10 min',
    },
    {
        id: 'blog-005',
        platform: 'blog',
        title: 'The Future of Web Experiences',
        description: 'Discussing the future of spatial computing, WebGPU, and interactive browser-based software.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-11-15',
        readTime: '7 min',
    },
    {
        id: 'blog-006',
        platform: 'blog',
        title: 'Design Systems for 3D UI',
        description: 'Developing consistent, accessible, and themeable 3D design systems inside canvases.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-11-01',
        readTime: '12 min',
    },
    {
        id: 'blog-007',
        platform: 'blog',
        title: 'Accessibility in 3D Web canvases',
        description: 'Using ARIA fallbacks, screen reader overlays, and semantic markup to make 3D accessible.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-10-20',
        readTime: '9 min',
    },
    {
        id: 'blog-008',
        platform: 'blog',
        title: 'Audio in Web Experiences',
        description: 'Leveraging HTML5 Audio and spatial Three.js audio triggers to design immersive soundscapes.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-10-10',
        readTime: '6 min',
    },
 
    // ============ TikToks ============
    {
        id: 'tt-001',
        platform: 'tiktok',
        title: 'Follow me on GitHub! ✨',
        description: 'I regularly share open-source UI libraries, custom React components, and cool Three.js experiments.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2026-01-09',
        views: '15.2K',
        likes: '1.2K',
    },
    {
        id: 'tt-002',
        platform: 'tiktok',
        title: 'Coding a door animation 🚪',
        description: 'POV: Creating a smooth spatial door transition in React Three Fiber.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2026-01-03',
        views: '8.5K',
        likes: '756',
    },
    {
        id: 'tt-003',
        platform: 'tiktok',
        title: 'When the shader finally works 🎉',
        description: 'The incredible satisfaction of compiling GLSL shaders correctly.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-12-25',
        views: '22.1K',
        likes: '3.4K',
    },
    {
        id: 'tt-004',
        platform: 'tiktok',
        title: 'Day in the life of a WebGL Developer',
        description: 'What a day of coding interactive websites and 3D scenes looks like.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-12-18',
        views: '12.3K',
        likes: '1.1K',
    },
    {
        id: 'tt-005',
        platform: 'tiktok',
        title: 'React state vs Canvas state 💀',
        description: 'Syncing React states with Three.js rendering loops.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-12-12',
        views: '45.2K',
        likes: '5.8K',
    },
    {
        id: 'tt-006',
        platform: 'tiktok',
        title: 'Building a 3D button mesh',
        description: 'Creating spatial buttons with hover reveal effects.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-12-05',
        views: '18.7K',
        likes: '2.1K',
    },
    {
        id: 'tt-007',
        platform: 'tiktok',
        title: 'This custom shader took 3 hours 💀',
        description: 'But the final brush-stroke transition effect was completely worth it.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-11-28',
        views: '33.4K',
        likes: '4.2K',
    },
    {
        id: 'tt-008',
        platform: 'tiktok',
        title: 'Micro-interactions showcase ✨',
        description: 'Compiling my absolute favorite hover transitions.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-11-20',
        views: '28.9K',
        likes: '3.6K',
    },
    {
        id: 'tt-009',
        platform: 'tiktok',
        title: 'Preloader design ideas 🔄',
        description: 'Designing custom asset preloaders that do not bore users.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-11-15',
        views: '19.3K',
        likes: '2.4K',
    },
    {
        id: 'tt-010',
        platform: 'tiktok',
        title: 'Custom mouse cursors 🖱️',
        description: 'Spanning cursor styles according to canvas hover positions.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-11-08',
        views: '41.2K',
        likes: '5.1K',
    },
    {
        id: 'tt-011',
        platform: 'tiktok',
        title: 'Parallax background scrolling 🪄',
        description: 'Depth layering techniques to maximize 3D feel.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-11-01',
        views: '25.6K',
        likes: '3.0K',
    },
    {
        id: 'tt-012',
        platform: 'tiktok',
        title: 'Torn-paper typography 📝',
        description: 'How to texture fonts to make them look hand-drawn and organic.',
        thumbnail: null,
        url: 'https://github.com/your-username',
        date: '2025-10-25',
        views: '31.8K',
        likes: '4.0K',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};

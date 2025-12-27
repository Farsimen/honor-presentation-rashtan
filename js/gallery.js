// Gallery system
const galleries = {
    'ilia-plus': {
        title: 'Ilia Plus Store Gallery',
        photos: [
            'images/ilia-plus/photo1.jpg',
            'images/ilia-plus/photo2.jpg',
            'images/ilia-plus/photo3.jpg',
            'images/ilia-plus/photo4.jpg'
        ],
        videos: [
            'images/ilia-plus/video1.mp4',
            'images/ilia-plus/video2.mp4'
        ]
    },
    'charsu-plus': {
        title: 'Charsu Plus Passage Gallery',
        photos: [
            'images/charsu-plus/photo1.jpg',
            'images/charsu-plus/photo2.jpg',
            'images/charsu-plus/photo3.jpg',
            'images/charsu-plus/photo4.jpg'
        ],
        videos: [
            'images/charsu-plus/video1.mp4',
            'images/charsu-plus/video2.mp4'
        ]
    },
    'puzzle': {
        title: 'Puzzle Store Gallery',
        photos: [
            'images/puzzle/photo1.jpg',
            'images/puzzle/photo2.jpg',
            'images/puzzle/photo3.jpg',
            'images/puzzle/photo4.jpg'
        ],
        videos: [
            'images/puzzle/video1.mp4',
            'images/puzzle/video2.mp4'
        ]
    },
    'xiaomi-center': {
        title: 'Xiaomi Center Rasht Gallery',
        photos: [
            'images/xiaomi-center/photo1.jpg',
            'images/xiaomi-center/photo2.jpg',
            'images/xiaomi-center/photo3.jpg',
            'images/xiaomi-center/photo4.jpg'
        ],
        videos: [
            'images/xiaomi-center/video1.mp4',
            'images/xiaomi-center/video2.mp4'
        ]
    },
    'sivan': {
        title: 'Sivan Store Gallery',
        photos: [
            'images/sivan/photo1.jpg',
            'images/sivan/photo2.jpg',
            'images/sivan/photo3.jpg',
            'images/sivan/photo4.jpg'
        ],
        videos: [
            'images/sivan/video1.mp4',
            'images/sivan/video2.mp4'
        ]
    },
    'glass-headers': {
        title: 'Glass Display Headers Gallery',
        photos: [
            'images/glass-headers/photo1.jpg',
            'images/glass-headers/photo2.jpg',
            'images/glass-headers/photo3.jpg',
            'images/glass-headers/photo4.jpg'
        ],
        videos: [
            'images/glass-headers/video1.mp4',
            'images/glass-headers/video2.mp4'
        ]
    }
};

function openGallery(locationId) {
    const modal = document.getElementById('gallery-modal');
    const title = document.getElementById('gallery-title');
    const grid = document.getElementById('gallery-grid');
    
    const gallery = galleries[locationId];
    if (!gallery) return;
    
    title.textContent = gallery.title;
    grid.innerHTML = '';
    
    // Add photos
    gallery.photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${photo}" alt="Photo ${index + 1}" onerror="this.src='images/placeholder.jpg'">
            <div class="gallery-item-label">Photo ${index + 1}</div>
        `;
        grid.appendChild(item);
    });
    
    // Add videos
    gallery.videos.forEach((video, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <video controls>
                <source src="${video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="gallery-item-label">Video ${index + 1}</div>
        `;
        grid.appendChild(item);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    const modal = document.getElementById('gallery-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Stop all videos
    const videos = modal.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('gallery-modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGallery();
        }
    });
});
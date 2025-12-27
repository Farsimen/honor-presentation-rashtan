// Map initialization
let map = null;
let markers = [];

const locations = [
    {
        name: 'Ilia Plus Store',
        code: 'RSH00011',
        lat: 37.275260,
        lng: 49.580277,
        slideIndex: 2
    },
    {
        name: 'Sivan Store',
        code: 'RSH00063',
        lat: 37.274390,
        lng: 49.580341,
        slideIndex: 6
    },
    {
        name: 'Puzzle Store',
        code: 'RSH00059',
        lat: 37.273602,
        lng: 49.579657,
        slideIndex: 4
    },
    {
        name: 'Charsu Plus Passage',
        code: '-',
        lat: 37.273313,
        lng: 49.580028,
        slideIndex: 3
    },
    {
        name: 'Xiaomi Center Rasht',
        code: 'RSH00164',
        lat: 37.271870,
        lng: 49.592535,
        slideIndex: 5
    },
    {
        name: 'Glass Display Headers',
        code: 'Passage',
        lat: 37.273313,
        lng: 49.580028,
        slideIndex: 7
    }
];

function initMap() {
    if (map !== null) return; // Already initialized
    
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    // Calculate center point (average of all locations)
    const centerLat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
    const centerLng = locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length;
    
    // Initialize map
    map = L.map('map').setView([centerLat, centerLng], 15);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Custom HONOR blue marker icon
    const blueIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            background: #1e90ff;
            width: 32px;
            height: 32px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        "><div style="
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: rotate(45deg);
            color: white;
            font-weight: bold;
            font-size: 16px;
        ">H</div></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    
    // Add markers
    locations.forEach((location, index) => {
        const marker = L.marker([location.lat, location.lng], { icon: blueIcon })
            .addTo(map);
        
        const popupContent = `
            <div style="min-width: 200px; font-family: 'Poppins', sans-serif;">
                <h3 style="margin: 0 0 8px 0; color: #1e90ff; font-size: 16px;">${location.name}</h3>
                <p style="margin: 0 0 4px 0; color: #64748b; font-size: 13px;"><strong>Code:</strong> ${location.code}</p>
                <button onclick="navigation.goToSlide(${location.slideIndex}); closeGallery();" style="
                    margin-top: 8px;
                    background: linear-gradient(135deg, #1e90ff 0%, #0ea5e9 100%);
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 13px;
                    font-weight: 600;
                    width: 100%;
                ">View Details →</button>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        markers.push(marker);
    });
}

// Initialize map when navigating to map slide
document.addEventListener('DOMContentLoaded', () => {
    // Map will be initialized when user navigates to slide 2
});
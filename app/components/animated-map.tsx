"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

export function AnimatedMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return;

    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);

    // Dynamically import Leaflet (since it's a client-side only library)
    const loadMap = async () => {
      try {
        // Only import if the map hasn't been created yet
        if (!mapInstanceRef.current && mapRef.current) {
          const L = await import('leaflet');
          
          // Define start and end locations
          const startLocation = {
            lat: 40.712776,
            lng: -74.005974,
            name: "Starting Point"
          };
          
          const endLocation = {
            lat: 40.758896,
            lng: -73.985130,
            name: "Destination"
          };

          // Create the map instance
          const map = L.map(mapRef.current).setView(
            [startLocation.lat, startLocation.lng], 
            13
          );
          
          // Add the OpenStreetMap tiles
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
          
          // Create custom icons
          const startIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: #3b82f6; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #1d4ed8;"></div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
          });
          
          const endIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: #a855f7; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #7e22ce;"></div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
          });
          
          // Add markers for start and end
          const startMarker = L.marker([startLocation.lat, startLocation.lng], {icon: startIcon})
            .addTo(map)
            .bindPopup("Starting Point");
            
          const endMarker = L.marker([endLocation.lat, endLocation.lng], {icon: endIcon})
            .addTo(map)
            .bindPopup("Destination");
          
          // Draw a simple line between the two points
          const routeLine = L.polyline(
            [
              [startLocation.lat, startLocation.lng],
              [endLocation.lat, endLocation.lng]
            ], 
            {
              color: '#6366f1',
              weight: 5,
              opacity: 0.8
            }
          ).addTo(map);
          
          // Fit the map to show both markers
          const bounds = L.latLngBounds(
            [startLocation.lat, startLocation.lng],
            [endLocation.lat, endLocation.lng]
          );
          map.fitBounds(bounds, { padding: [50, 50] });
          
          // Store the map instance for cleanup
          mapInstanceRef.current = map;
        }
      } catch (error) {
        console.error("Error loading map:", error);
      }
    };

    loadMap();

    // Cleanup on component unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden shadow-md">
      {/* Map Container */}
      <div ref={mapRef} className="w-full h-full"></div>
      
      {/* Simple Legend */}
      <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 rounded-md shadow-sm p-2 z-500">
        <div className="flex items-center text-xs">
          <div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
          <span className="mr-3">Start</span>
          <div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
          <span>Destination</span>
        </div>
      </div>
    </div>
  );
}
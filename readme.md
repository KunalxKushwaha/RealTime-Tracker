# 📍 Real-Time Location Tracker

A simple real-time location tracker built using **Socket.IO**, **Leaflet.js**, and **HTML5 Geolocation API**. This project allows multiple users to share and track each other's live location on an interactive map.

---

## 🚀 Features

- 🌍 Real-time location sharing
- 📡 Uses HTML5 Geolocation API
- 🗺️ Interactive map with Leaflet.js (OpenStreetMap tiles)
- 🔌 WebSocket-based communication with Socket.IO
- 🔴 Automatic marker removal on user disconnect

---

## 🛠️ Tech Stack

- **Frontend:** HTML, JavaScript, Leaflet.js, OpenStreetMap
- **Backend:** Node.js, Express.js, Socket.IO

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KunalxKushwaha/RealTime-Tracker.git
   cd RealTime-Tracker

**Install server dependencies**

npm install

**Start the server**

node index.js



## Open the app in browser
http://localhost:3000

## 🧩 Project Structure
pgsql
Copy
Edit
📁 realtime-location-tracker
├── public/
│   ├── index.html
│   ├── JS/
│   │   └── script.js        # Your client-side logic (shown above)
├── server/
│   └── index.js             # Node.js backend with Socket.IO
├── package.json
└── README.md

## ⚙️ Client-Side Script Summary
Requests user location using navigator.geolocation.watchPosition

Emits send-location events to server with latitude and longitude

Listens for receive-location from server and updates Leaflet map

Maintains a marker for each connected user

Removes marker on user-disconnects event

## 🔐 Permissions
Ensure your browser allows location access, or the geolocation API will not function.

## 🧪 Example Use Case
Personal location sharing with friends

Tracking delivery agents or employees

Real-time event crowd tracking

## 📝 License
This project is licensed under the MIT License — feel free to use, modify, and distribute.

 ## 🙋‍♂️ Author - Kunal Kushwaha✒️

Feel free to connect with me for collaboration or feedback!
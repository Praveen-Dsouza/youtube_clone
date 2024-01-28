# YouTube Clone
YouTube Clone - Elevating Your Online Video Experience 🎥

Welcome to React YouTube Clone project! 🚀 In this project, I have leveraged the power of ReactJS, Redux, and Tailwind CSS to create a high-performance web application that replicates the popular YouTube platform. Our focus goes beyond the basics – we've implemented advanced concepts like debouncing and caching to ensure a seamless and responsive user experience.

## Live Demo 🌐
- See the live demo of Youtube Clone: https://react-yt-clone.web.app/

## Key Features 🚀
🎬 YouTube-Like Experience: Explore a familiar interface with features like video playback, comments, and a sleek video recommendation system.

🚀 ReactJS & Redux Mastery: Dive into the world of ReactJS and Redux, witnessing a scalable and efficient application architecture.

✨ Tailwind CSS Styling: Experience the simplicity and power of Tailwind CSS for styling, creating a modern and visually appealing design.

🔄 Debouncing for Enhanced Interactions: Learn how we've used debouncing to optimize user interactions, ensuring a smooth and responsive application.

# DEBOUNCING EXAMPLE

- key = i
- render the component
- useEffect()
- start timer => make api call after 200ms
 
- key = ip
- destroy the component and call the useEffect return method
- re-render the component
- useEffect()
- start timer => make api call after 200ms 

- setTimeout(200) - clears when new key stroke and new timer is setup

📦 Caching Strategies: Discover our caching strategies, reducing server load and improving data retrieval times for a snappy user experience.

# CACHE EXAMPLE

- Time Complexity to search in an array = O(n)
- Time Complexity to search in an Object = O(1)

- [i, ip, iph, ipho, iphon, iphone]
- {
-     i:
-     ip:
-     iph:
-     ipho:
-     iphon:
-     iphone:
- }

- new Map() more optimised than Object

## Tech Stack 💻

- ReactJS ⚛: A popular JavaScript library for building user interfaces.

- Tailwind CSS 🎨: A utility-first CSS framework for building modern designs.

- Redux 🔄: A state management library for predictable state containers.

- Firebase 🔥: A platform for building web and mobile applications without server-side programming.

- Git 📂: A distributed version control system for tracking changes in source code.

## Getting Started
- Clone the repository: git clone https://github.com/Praveen-Dsouza/youtube_clone.git

## Install dependencies
- cd movie_minds
- npm install

## Run the application
- npm start

// Assume videos.json is in the same directory as index.html and script.js
// Structure of videos.json:
// [
//     { "id": 1, "title": "Sample Video 1", "description": "This is a sample video.", "src": "video1.mp4" },
//     { "id": 2, "title": "Sample Video 2", "description": "This is another sample video.", "src": "video2.mp4" },
//     // Add more videos as needed
// ]

document.addEventListener('DOMContentLoaded', function () {
    const videoList = document.getElementById('video-list');
    const uploadFormContainer = document.getElementById('upload-form-container');
    const uploadForm = document.getElementById('upload-form');

    // Function to fetch videos from JSON file
    function fetchVideos() {
        fetch('videos.json')
            .then(response => response.json())
            .then(videos => {
                videos.forEach(video => {
                    displayVideo(video);
                });
            })
            .catch(error => console.error('Error fetching videos:', error));
    }

    // Display videos from JSON file on page load
    fetchVideos();

    // Toggle upload form visibility
    function toggleUploadForm() {
        uploadFormContainer.style.display = uploadFormContainer.style.display === 'none' ? 'block' : 'none';
    }

    // Handle video upload (simulated)
    uploadForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.getElementById('video-title').value;
        const description = document.getElementById('video-description').value;
        const file = document.getElementById('video-file').files[0];
        const password = document.getElementById('password').value;

        // Simulate upload process (replace with actual upload logic)
        setTimeout(function () {
            // Generate an id for the new video (use a more robust method in production)
            const newVideoId = Math.max(...videos.map(video => video.id), 0) + 1;
            const newVideo = {
                id: newVideoId,
                title: title,
                description: description,
                src: 'video_placeholder.mp4' // Replace with actual video file path
            };
            videos.push(newVideo);
            displayVideo(newVideo);
            uploadForm.reset();
            toggleUploadForm();
        }, 1500);
    });

    // Display video in the UI
    function displayVideo(video) {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');
        videoElement.innerHTML = `
            <h2>${video.title}</h2>
            <video controls>
                <source src="${video.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p class="video-description">${video.description}</p>
        `;
        videoList.appendChild(videoElement);
    }
});

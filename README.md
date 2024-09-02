# Image Transition Project
This project implements an interactive image transition effect using HTML, CSS, and JavaScript. It allows users to see a transition between two images as they move their cursor across the screen, providing a dynamic and engaging visual experience.

<h2>Key Features</h2>
<h3>Interactive Image Transition</h3>
<h4>Real-Time Interaction</h4>
As users move their cursor over the image container, the project dynamically reveals the underlying image by adjusting the width of an overlaying image. This effect creates a seamless transition that is controlled by the user's cursor position, enhancing the interactive experience. 
<h4>Visual Cues</h4>
A vertical line, positioned where the two images meet, moves in sync with the cursor. This line is accompanied by an arrow, providing a clear visual indicator of the interactive nature of the image transition. 
<h2>Technical Overview</h2>
<h3>HTML Structure</h3>
The HTML structure consists of a container that holds two images — one displayed fully and the other partially. A line element is used as a visual marker to indicate the transition point. The container ensures that the images and transition elements are properly aligned for the effect. 
<h3>CSS Styling</h3>
<h4>Layout and Design</h4>
The project employs a centered layout, with the images placed within a container that is styled for responsiveness. The background color and images are carefully chosen to ensure a smooth and visually appealing transition effect. 
<h4>Dynamic Positioning</h4>
CSS is used to position the overlaying image and the line indicator, ensuring that they are responsive to user interaction. The layout is designed to be flexible, allowing for the transition to work seamlessly across different screen sizes. 
<h3>JavaScript Functionality</h3>
<h4>Cursor-Driven Transition</h4>
JavaScript is used to capture the user's cursor movements and dynamically adjust the width of the overlaying image and the position of the line. The script calculates the cursor's position relative to the image container, ensuring that the transition effect is smooth and responsive.

    imgBox.onmousemove = function (e) {
        let boxWidth = (e.pageX - leftSpace) + "px";
        imgWrap.style.width = boxWidth;
        line.style.left = boxWidth;
    }

<h2>In Summary</h2>
This image transition project offers an engaging and visually appealing way to showcase two images. By utilizing user interaction, the project creates a dynamic experience that is both intuitive and impressive. The project is built using HTML, CSS, and JavaScript, making it a versatile component that can be integrated into various web projects or enhanced with additional features.

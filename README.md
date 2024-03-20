# SpaceX Visualizer

Demo: https://recite-coding-challenge.vercel.app/

This project was done for the coding challenge for Recite Me. It was built using React, Next.js, and React-Query.

It retrieves data from SpaceX API endpoints and displays them on the screen. All GET requests were made using React-Query.

It utilizes 4 different endpoints:

- Info
- Missions
- Ships
- Rockets

Each page can be accessed using the sidebar, which also highlights the current page.

Ships and Rockets also have a filter to show only active objects - either ships or rockets. The same component is reused for these two objects.

## Next Steps

As the next steps for this project, there are a few features that could be implemented to make it more appealing:

- Ensure that accessibility is a top priority when preparing this project for production.
- Add a Google Maps integration to utilize the latitude and longitude from an object's response and display where it is on the map.
- Use styled-components to easily manage active classes.
- Add more endpoints, such as 'Dragons', 'Cores', and 'History'.
- Implement additional filters, e.g., by name, date, or location.
- Enhance the styles to make the project more visually engaging.
- Optimize the use of React-Query and utilize it for pagination or infinite scrolling.
- Create a modal to show when the user clicks on an image (either ship or rocket). This modal could contain more information from that image, adding a layout of interactivity to the application.

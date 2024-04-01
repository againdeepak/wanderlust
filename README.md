# Wanderlust [Deployed](https://wanderlust-i4kf.onrender.com/)

Wanderlust is a full-stack web application designed to help users explore and curate lists of places or valleys. Built using the MVC framework, Wanderlust incorporates various technologies to provide a seamless user experience.
## SnapShots
![Screenshot (1533)](https://github.com/againdeepak/wanderlust/assets/111180448/f807edd9-e511-4a16-be5f-2ee0397ff972)
![Screenshot (1534)](https://github.com/againdeepak/wanderlust/assets/111180448/ba82c069-d4cf-427e-b714-806169fd78c8)
![Screenshot (1535)](https://github.com/againdeepak/wanderlust/assets/111180448/283eaa7b-39be-4447-928f-3cb431205a3e)
![Screenshot 2024-04-01 225133](https://github.com/againdeepak/wanderlust/assets/111180448/47cef5ef-84b4-4c81-8a81-b2f0ac7cc89a)
![Screenshot 2024-04-01 225244](https://github.com/againdeepak/wanderlust/assets/111180448/1d88379f-a6de-426e-98ce-c844557aabc9)


## Features

- **User Account Creation**: Users can create accounts to curate personalized lists of places or valleys they wish to explore.
- **Authentication and Authorization**: Passport middleware is implemented for robust authentication and authorization functionalities, ensuring secure access to user accounts and features.
- **Comprehensive Validation**: Utilized Joi for comprehensive server-side validation to ensure data integrity and security.
- **File Handling and Storage**: Leveraged Cloudinary alongside Multer storage for seamless file handling and storage capabilities, enabling users to upload and manage images associated with their lists.
- **Geographical Visualization**: Integrated Mapbox to provide users with precise geographical locations of places of interest, enhancing the exploration experience.
- **Scalable Database Solution**: MongoDB is utilized as the backend database solution, ensuring scalability and efficiency in data management.
- **Server-side Logic**: Employed Node.js for server-side logic, providing a robust and scalable runtime environment.
- **Dynamic Page Rendering**: Utilized EJS for dynamic page rendering, enabling flexible and customizable user interfaces.
- **Responsive Styling**: Leveraged Bootstrap for responsive and visually appealing styling, enhancing the user experience across devices.

## Additional Features

- **User-Generated Reviews**: Authenticated users can create and manage reviews for listed places or valleys.
- **Review Deletion**: Authenticated users have the ability to delete their own lists or reviews, providing control over their contributed content.
- **Community Reviews**: Non-authenticated users can also contribute reviews on each listing or place, fostering community engagement and collaboration.
- **Flash Messages**: Implemented flash messages for enhanced user experience, providing real-time feedback and notifications.

## Technologies Used

- MongoDB
- Joi for validation
- Express.js
- JavaScript
- EJS for rendering
- Bootstrap
- Mapbox
- Cloudinary
- Geocoding API

## Installation

1. Clone the repository: `git clone https://github.com/againdeepak/wanderlust.git`
2. Install dependencies: `npm install`
3. Configure environment variables (e.g., MongoDB URI, Cloudinary API key)
4. Start the server: `node app.js`


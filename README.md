# MovFlix - Single Page Movie and Anime Database

Welcome to MovFlix, a single-page web application that showcases the top, most popular Foreign English Movies, Indian Movies, Animes, and Manga. This project is powered by the TMDb API for movie information and the Anilist API for anime and manga data. To enhance the user interface, I've incorporated the DaisyUI Tailwind CSS plugin and Material-UI. The project makes use of RESTful API methods to fetch and display movie, anime, and manga details. 

## Features

- **Movie Categories**: Explore popular Foreign English and Indian Movies in separate categories.
- **Anime and Manga**: Discover the world of anime and Manga with ease.
- **Detailed Information**: Get comprehensive details about each movie or anime, including cast, plot summary, and more.
- **Search Functionality**: Easily search for specific movies or anime titles.
- **User-Friendly Design**: The application boasts a visually appealing and responsive design.

## Technologies Used

- **Next.js**: This project is built on Next.js, a popular React framework that enables server-side rendering for improved performance.
- **Tailwind CSS with DaisyUI**: I utilized the DaisyUI Tailwind CSS plugin to streamline the design process and create a visually appealing user interface.
- **Material-UI**: Material-UI components were used to enhance the user experience and ensure a responsive design.
- **TMDb API**: The TMDb API provides movie details and allows us to fetch information about popular Foreign English Movies and Indian Movies.
- **Anilist API**: The Anilist API is used to fetch data about Anime and Manga, making it easy for users to explore these categories.
- **RESTful API**: RESTful API methods are employed to retrieve and display data from both TMDb and Anilist APIs.

## Getting Started

To run this project on your local machine, follow these steps:

1. **Clone the Repository**: Use the following command to clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/MovFlix.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm or yarn:
   ```bash
   cd MovFlix
   npm install
   ```

3. **API Configuration**: You'll need to obtain API keys for TMDb and Anilist. Once you have them, create a `.env.local` file in the project root and add your API keys as follows:

   ```env
   TMDB_API_KEY=your-tmdb-api-key
   ANILIST_API_KEY=your-anilist-api-key
   ```

4. **Run the Application**: Start the development server with the following command:
   ```bash
   npm run dev
   ```

## Demo

You can check out a live demo of MovFlix at [https://MovFlix.example.com](https://movflixweb.vercel.app/).

## Feedback and Contributions

If you have any feedback or suggestions for this project or would like to contribute, please feel free to open an issue or submit a pull request. Your contributions are greatly appreciated!

Thank you for using MovFlix to explore the world of movies and anime. Enjoy your cinematic journey! 🎬🍿🎉

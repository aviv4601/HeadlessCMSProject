## Next.js 13 Headless CMS Blog

This project is a headless CMS (WordPress) blog built with Next.js 13. It includes various features such as different routes, authentication (registration/login) platform, the capability to comment on posts, and search for a post by post's slug. The project's CSS is developed using Tailwind CSS, and OAuth is used for authentication.

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js
- npm
- WordPress instance running on port 8899 using Wamp/Mamp/other multiple services platform

### Installation

1. Clone the repository:

   `git clone https://github.com/yourusername/your-repository.git`

2. Navigate to the project directory:

   `cd your-repository`

3. Install dependencies:

   `npm install`

### Configuration

1. Open the .env file in the project root.

2. Update the following configurations:

   `WP_BASE_URL=http://localhost:8899/BlogsWebsite/BlogPosts/wp-json/wp/v2/`
   `JWT_AUTH_URL=http://localhost:8899/BlogsWebsite/BlogPosts/wp-json/jwt-auth/v1/`
   `AUTH_SECRET=your-auth-secret`
   `NEXTAUTH_SECRET=your-next-auth-secret`

Replace your-wordpress-site.com with the URL of your WordPress site and provide your OAuth client ID and client secret.

### Running the Project:

    `npm run start`

The project will start, and you can access it at http://localhost:3000.

### Usage

- Navigate to different routes and explore the blog posts.
- Register or log in using the authentication platform.
- Comment on posts to engage with the content.
- Utilize the search functionality to find posts by their slug.

### Contributing

Feel free to contribute to this project by submitting issues or pull requests.

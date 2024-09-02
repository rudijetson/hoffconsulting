# Brandon Z. Hoff - Interactive Resume Website

An interactive resume website showcasing Brandon Z. Hoff's professional experience, skills, and projects. Built with React and featuring an AI-powered demo section.

## Features

- Responsive design using Tailwind CSS
- Interactive sections: About, Skills, Experience, Projects, and Contact
- AI-powered demo section using OpenAI's GPT model
- Integration with Calendly for scheduling consultations

## Project Structure

- `frontend/`: React application
  - `src/`: Source files
    - `components/`: Reusable React components
    - `sections/`: Main content sections
    - `layouts/`: Page layouts
    - `pages/`: Main pages (currently only Resume)
  - `public/`: Static assets
- `backend/`: Express server for AI integration

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/brandon-hoff-resume.git
   cd brandon-hoff-resume
   ```

2. Install dependencies:
   ```
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory
   - Add your OpenAI API key: `OPENAI_API_KEY=your_api_key_here`

4. Start the development servers:
   - Frontend: `cd frontend && npm start`
   - Backend: `cd backend && npm run dev`

5. Open `http://localhost:3000` in your browser

## Deployment

- Frontend: Deploy the `frontend/build` directory to your preferred static hosting service (e.g., Netlify, Vercel)
- Backend: Deploy the `backend` directory to a Node.js hosting platform (e.g., Heroku, DigitalOcean)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

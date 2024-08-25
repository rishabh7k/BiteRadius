# BiteRadius

## Project Overview

BiteRadius is a full-stack web application with an Express.js backend and a Next.js frontend. The backend leverages Node.js and Express.js for efficient server-side operations, with Redis employed for request caching. On the frontend, Next.js is used for server-side rendering (SSR), with Zustand managing state. The application integrates the Google Maps JavaScript API for displaying maps and the Google Places API to fetch restaurant information.

## Project Description

BiteRadius is your go-to solution for discovering top-rated restaurants within your walkable distance. By utilizing your current location, BiteRadius not only identifies nearby dining options but also provides essential details such as location and contact information. Whether you're exploring a new neighborhood or just looking for a quick bite, BiteRadius ensures you're never far from a great meal.

## Tech Stack

**Frontend**:
- Next.js 14.2.5
- Zustand
- Google Maps JavaScript API

**Backend**:
- Express.js
- Redis (for caching)
- Google Places API (New)

## Demonstration

*Video demonstration coming soon.*

## Installation and Setup Instructions

### Common Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/rishabh7k/BiteRadius.git
   cd BiteRadius
## Frontend
1. Navigate to the frontend directory:
```bash
cd Frontend
```

2. Install the required dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
4. Configure environment variables:
An .env.example file is provided. Copy it to .env and add your keys as specified.

## Backend
1. Navigate to the backend directory:

```bash
cd Backend
```
2. Install the required dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev
```

4. Configure environment variables:
An .env.example file is provided. Copy it to .env and add your keys as specified.

## Redis Setup
Ensure Docker Desktop is installed.
1. Pull the Redis image:
```bash
docker pull redis
```
2. Run Redis using Docker:
```bash
docker run --name redis -d -p 6379:6379 redis
```

Redis will run on the default port 6379.

## Project Structure
BiteRadius is organized into separate frontend and backend modules. Each module functions as a self-contained component, centralizing all relevant activities. Common functionalities that are required across multiple modules are abstracted into shared components. Additionally, each module may contain submodules that are specific to that module's operations.

## License
This project is not currently licensed.

## Contact Information
For questions or support, feel free to reach out via [LinkedIn](https://www.linkedin.com/in/rishabh-verma-62385219b/)

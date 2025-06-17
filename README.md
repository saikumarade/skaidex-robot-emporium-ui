
# Skaidex Robotics E-Commerce Platform

A modern, responsive e-commerce application for selling advanced robotics products with beautiful UI and comprehensive product features.

## Features

- **Modern Design**: Beautiful gradient-based UI with smooth animations
- **Product Showcase**: Detailed robot specifications and pricing
- **Responsive Layout**: Works perfectly on desktop and mobile devices
- **Interactive Elements**: Hover effects, smooth transitions, and engaging user experience
- **Professional Branding**: Clean typography and consistent visual identity

## Robot Products

- **SkaiBot Pro X1**: Flagship autonomous robot with AI capabilities
- **SkaiBot Home Assistant**: Smart home automation and security
- **SkaiBot Industrial Max**: Heavy-duty industrial automation
- **SkaiBot Mini Explorer**: Educational and hobbyist programming robot

## Quick Start with Docker

### Prerequisites
- Docker installed on your system
- Docker Compose (optional, for easier management)

### Option 1: Using Docker Compose (Recommended)

1. Clone or download this repository
2. Navigate to the project directory
3. Run the application:

```bash
docker-compose up --build
```

The application will be available at http://localhost:3000

### Option 2: Using Docker directly

1. Build the Docker image:
```bash
docker build -t skaidex-robotics .
```

2. Run the container:
```bash
docker run -p 3000:3000 skaidex-robotics
```

### Stopping the Application

If using Docker Compose:
```bash
docker-compose down
```

If using Docker directly:
```bash
docker stop <container-id>
```

## Development

### Local Development Setup

If you want to run the application locally for development:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Technologies Used

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling and responsive design
- **Vite** - Build tool and development server
- **Lucide React** - Beautiful icons
- **Shadcn/ui** - Premium UI components

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Application pages
│   ├── hooks/         # Custom React hooks
│   └── lib/           # Utility functions
├── public/            # Static assets
├── Dockerfile         # Docker configuration
├── docker-compose.yml # Docker Compose configuration
└── package.json       # Project dependencies
```

## Customization

The application is built with modularity in mind. You can easily:

- Add new robot products by updating the robots array in `src/pages/Index.tsx`
- Customize colors and styling through Tailwind CSS classes
- Add new features by creating additional components
- Integrate with payment systems and backend APIs

## Production Deployment

For production deployment, the Docker container serves a built version of the application using the `serve` package, which provides optimal performance for static React applications.

## Support

For questions or support regarding Skaidex Robotics products and this e-commerce platform, please contact our development team.

---

© 2024 Skaidex Robotics. All rights reserved.
```

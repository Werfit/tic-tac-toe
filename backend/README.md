# Tic-Tac-Toe Backend

This is the backend service for a Tic-Tac-Toe game application built with NestJS. The service provides game logic, state management, and API endpoints for the game.

## Tech Stack

- NestJS - A progressive Node.js framework
- TypeScript - For type-safe code
- Jest - For testing
- ESLint & Prettier - For code quality and formatting

## Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (Package manager)

## Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

## Running the Application

### Development Mode

```bash
pnpm start:dev
```

### Production Mode

```bash
pnpm build
pnpm start:prod
```

### Debug Mode

```bash
pnpm start:debug
```

## Available Scripts

- `pnpm build` - Build the application
- `pnpm format` - Format code using Prettier
- `pnpm start` - Start the application
- `pnpm start:dev` - Start the application in development mode with hot-reload
- `pnpm start:debug` - Start the application in debug mode
- `pnpm start:prod` - Start the application in production mode
- `pnpm lint` - Lint the code
- `pnpm test` - Run unit tests
- `pnpm test:watch` - Run unit tests in watch mode
- `pnpm test:cov` - Run unit tests with coverage
- `pnpm test:e2e` - Run end-to-end tests

## Project Structure

```
src/
├── config/         # Configuration files
├── game/          # Game-related modules and logic
├── health-check/  # Health check endpoints
├── shared/        # Shared utilities and types
├── app.module.ts  # Root application module
└── main.ts        # Application entry point
```

## API Documentation

The API documentation will be available at `/api` when the application is running.

## Environment Variables

The application requires the following environment variables:

- `PORT` - Port number for the application
- `CORS` - CORS origin configuration

## Testing

The project uses Jest for testing. You can run tests using the following commands:

- `pnpm test` - Run all tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:cov` - Run tests with coverage report
- `pnpm test:e2e` - Run end-to-end tests

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is unlicensed.

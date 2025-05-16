# Tic-tac-toe Game

A modern implementation of the classic Tic-tac-toe game built with React, TypeScript, and Vite. This project features a clean, responsive UI with smooth animations and game state management.

## Features

- 🎮 Classic Tic-tac-toe gameplay
- 🎯 Responsive design that works on all devices
- ✨ Smooth animations for moves and winning lines
- 🔄 Undo move functionality
- 🔁 Game restart option
- 🎨 Modern UI with clean design
- 🎯 Visual indication of winning combinations

## Tech Stack

- React 19
- TypeScript
- Vite
- Lucide React (for icons)
- CSS Modules for styling

## Prerequisites

- Node.js (latest LTS version recommended)
- pnpm (package manager)

## Getting Started

1. Clone the repository:
2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173` by default.

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the project for production
- `pnpm preview` - Preview the production build locally
- `pnpm lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/     # Shared components
├── features/       # Feature-specific components and logic
│   └── tic-tac-toe/
│       ├── components/  # Game-specific components
│       ├── context/     # Game state management
│       ├── hooks/       # Custom hooks
│       └── types/       # TypeScript types
├── shared/        # Shared utilities and constants
└── assets/        # Static assets
```

## Game Rules

1. The game is played on a 3x3 grid
2. Players take turns placing their mark (X or O) in an empty cell
3. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins
4. If all cells are filled and no player has won, the game is a draw

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

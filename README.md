# Automatos AI Marketing Site

This is the marketing website for the Automatos AI platform. It's built with Next.js and Tailwind CSS.

## Requirements

- Node.js 18.18.0 or higher
- npm 9.8.1 or higher

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/automatos-maketing-site.git
   cd automatos-maketing-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Configuration Files

- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration
- `next.config.js`: Next.js configuration
- `tsconfig.json`: TypeScript configuration

## Dependencies

The project uses the following key dependencies:

- Next.js 13.5.1
- React 18.2.0
- Tailwind CSS 3.3.3
- Framer Motion for animations
- Recharts for charts and data visualization
- Radix UI components for accessible UI elements

## Troubleshooting

If you encounter dependency issues, make sure your Node.js version is 18.18.0 or higher. You can use nvm to manage Node.js versions:

```bash
nvm install 18.18.0
nvm use 18.18.0
```

Then clean and reinstall the dependencies:

```bash
rm -rf node_modules
npm install
```

## Building for Production

To build the site for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## License

This project is part of the Automatos AI platform. See the LICENSE file for details.

# The Scribbly

**The Scribbly** is a modern web application built with [Next.js](https://nextjs.org/) that provides a platform for sharing and exploring creative content. The project leverages server-side rendering (SSR), static site generation (SSG), dynamic routing, and a modular design system to deliver an optimized and seamless user experience.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Features

- **Dynamic Routing**: Full support for dynamic pages based on user-generated content and category filtering.
- **Image Optimization**: Uses Next.js's built-in image component for fast and responsive images.
- **Server-Side Rendering (SSR)**: Ensures fast initial page loads and SEO optimization.
- **Static Site Generation (SSG)**: Efficient pre-rendering of static content.
- **Theme Switching**: Built-in light/dark mode toggle with context-based state management.
- **Pagination and Filtering**: Easily navigate through posts and filter by category.
- **Responsive Design**: Optimized for all screen sizes, from mobile to desktop.

---

## Project Structure

```
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── app/                # Application routes (App Router)
│   ├── components/         # UI components (Card, Menu, etc.)
│   ├── context/            # React context for theming and state
│   ├── providers/          # Context providers and shared logic
├── .eslintrc.json          # ESLint configuration
├── jsconfig.json           # JS/TS config and path aliases
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

---

## Installation

To set up the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/the-scribbly.git
   cd the-scribbly
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Usage

### Development Mode

Start the dev server with hot reloading:

```bash
npm run dev
```

### Production Mode

Build and start a production-optimized server:

```bash
npm run build
npm start
```

---

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Starts the development server  |
| `npm run build` | Builds the app for production  |
| `npm start`     | Runs the production build      |
| `npm run lint`  | Lints the codebase with ESLint |

---

## Technologies Used

### Core Framework

- **[Next.js](https://nextjs.org/)** – React framework with support for SSR, SSG, routing, and performance optimization.

### UI and Styling

- **React** – Component-based UI development.
- **CSS Modules** – Locally scoped CSS for component styles.

### State and Context

- **React Context API** – For theme toggling and global state.

### Database and Backend

- **Prisma** – Modern ORM for type-safe database access.
- **NextAuth.js** – Authentication solution for Next.js.
- **Firebase** (optional) – Real-time database or auth if needed.

### Additional Tools

- **ESLint** – Linting and code quality checks.
- **React Quill** – Rich text editor for writing blog posts.

---

## Contributing

We welcome contributions of all kinds! To contribute:

1. Fork the repository.
2. Create a new branch:
   `git checkout -b feature/your-feature`
3. Make your changes and commit:
   `git commit -m "feat: add your feature"`
4. Push to your fork:
   `git push origin feature/your-feature`
5. Open a pull request.

Before submitting, please ensure your code passes linting and follows the project’s coding conventions.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- Built with [Next.js](https://nextjs.org/), [Prisma](https://www.prisma.io/), and [NextAuth.js](https://next-auth.js.org/).
- Inspired by content platforms like Medium and Hashnode.
- Thanks to the open-source community for tools and libraries that power this project.

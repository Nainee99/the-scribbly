# The Scribbly

![Next.js](public/next.svg)
![Prisma](public/prisma.svg)
![MongoDB](public/mongodb.svg)
![Cloudinary](public/cloudinary.svg)
![NextAuth.js](public/nextauth.svg)
![React](public/reactjs.svg)
![ESLint](public/eslint.svg)

**The Scribbly** is a full-featured **blogging web application** built with [Next.js](https://nextjs.org/). It allows users to publish, explore, and manage creative blog content. It supports dynamic content rendering, markdown-rich text editing, and image hosting with [Cloudinary](https://cloudinary.com/). The backend uses [Prisma ORM](https://www.prisma.io/) for robust and type-safe database interaction.

The application leverages modern web development practices, including server-side rendering (SSR), static site generation (SSG), and modular architecture for high performance and maintainability.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Prisma Commands](#prisma-commands)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Features

- **Rich Text Editor** using React Quill for creating blog posts.
- **Dynamic Routing** for individual post pages and category filtering.
- **Image Uploads with Cloudinary**, replacing Firebase for media storage and optimization.
- **Theme Toggle** with dark/light modes via React Context API.
- **Pagination and Filtering** for browsing posts efficiently.
- **Authentication** with Google OAuth using NextAuth.js.
- **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)** for fast performance and SEO.
- **Responsive Design** for seamless experience across all devices.

---

## Project Structure

```
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── app/                # Application routes (App Router)
│   ├── components/         # UI components (Card, Menu, etc.)
│   ├── context/            # React context for theming and state
│   ├── providers/          # Context providers and shared logic
├── prisma/                 # Prisma schema and migrations
├── .env.example            # Example environment configuration
├── .eslintrc.json          # ESLint configuration
├── jsconfig.json           # JS/TS config and path aliases
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/the-scribbly.git
cd the-scribbly
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

4. **Push and seed the database (optional)**

```bash
npx prisma db push
npx prisma db seed
```

5. **Start the development server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Usage

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

---

## Environment Variables

All environment-specific variables are stored in a `.env` file. An example file is provided as `.env.example`:

```env
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

DB_PASSWORD=your-db-password
DB_USER=your-db-username

DATABASE_URL=mongodb+srv://your-db-username:your-db-password@your-cluster.mongodb.net/your-db-name?retryWrites=true&w=majority&appName=your-app-name

NEXT_PUBLIC_CATEGORIES_API_URL=http://localhost:3000/api/categories
NEXT_PUBLIC_HOST_URL=http://localhost:3000

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

---

## Prisma Commands

- **Push schema changes to DB**:

  ```bash
  npx prisma db push
  ```

- **Open Prisma Studio** (visual DB interface):

  ```bash
  npx prisma studio
  ```

- **Generate Prisma Client**:

  ```bash
  npx prisma generate
  ```

- **Run a migration** (optional):

  ```bash
  npx prisma migrate dev --name init
  ```

---

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Starts the development server  |
| `npm run build` | Builds the app for production  |
| `npm start`     | Runs the production server     |
| `npm run lint`  | Lints the codebase with ESLint |

---

## Technologies Used

| Category             | Tool / Library                            |
| -------------------- | ----------------------------------------- |
| **Framework**        | [Next.js](https://nextjs.org)             |
| **Database ORM**     | [Prisma](https://www.prisma.io)           |
| **Authentication**   | [NextAuth.js](https://next-auth.js.org/)  |
| **Cloud Media**      | [Cloudinary](https://cloudinary.com)      |
| **Rich Text Editor** | [React Quill](https://react-quill.js.org) |
| **Linting**          | [ESLint](https://eslint.org)              |
| **Styling**          | CSS Modules                               |
| **React State**      | React Context API                         |

---

## Contributing

We welcome contributions! To contribute:

1. Fork the repo.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your changes and commit:

   ```bash
   git commit -m "feat: add your feature"
   ```

4. Push and create a pull request:

   ```bash
   git push origin feature/your-feature
   ```

Please ensure your code passes ESLint checks and follows the project's structure and naming conventions.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- Built using [Next.js](https://nextjs.org/), [Prisma](https://www.prisma.io/), [Cloudinary](https://cloudinary.com), and [NextAuth.js](https://next-auth.js.org/)
- Inspired by platforms like Medium and Hashnode
- Made possible by the open-source community

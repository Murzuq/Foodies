# Foodies 🍝🥘🍗🍴

Welcome to Foodies, a dynamic NextJS web application for food enthusiasts to share and discover delicious recipes. Built with modern web technologies, this platform provides a seamless and interactive user experience.

## ✨ Features

- **Browse Recipes**: Explore a wide variety of meals shared by the community.
- **Recipe Details**: Get complete details for each meal, including ingredients and step-by-step instructions.
- **Share Your Own Meals**: Contribute to the community by adding and sharing your own favorite recipes.
- **Responsive Design**: Enjoy a great user experience on any device, whether it's a desktop, tablet, or smartphone.
- **Server-Side Rendering (SSR)**: Fast initial page loads and great SEO thanks to Next.js.

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

This project is built using a modern and robust technology stack:

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: JavaScript
- **Database**: [SQLite](https://www.sqlite.org/index.html) via `better-sqlite3` for storing meal data.
- **Styling**: CSS Modules & Vanilla CSS
- **Linting**: ESLint for clean and consistent code.

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

Make sure you have Node.js installed on your machine (v18.x or later is recommended).

### Installation

1.  Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Murzuq/Foodies.git
    cd Foodies
    ```

2.  Install the necessary NPM packages:

    ```bash
    npm install
    ```

3.  Initialize the SQLite database. The project includes a script to set up the database schema and seed it with initial data.
    ```bash
    npm run initdb
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result. You can start editing the page by modifying the files in the `app/` or `pages/` directory. The page auto-updates as you edit the file.

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

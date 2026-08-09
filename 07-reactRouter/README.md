# React Router Project

A beginner-friendly React project built while learning **React**,
**React Router DOM**, **Tailwind CSS**, reusable components, route
parameters, nested routes, and React Router data loaders.

## 🚀 Features

-   React-based single-page application
-   Responsive navigation bar
-   Reusable `Header` and `Footer` components
-   Client-side routing with React Router DOM
-   Nested routes using `Outlet`
-   Active navigation links using `NavLink`
-   Dynamic user routes using URL parameters
-   GitHub user information fetched with a React Router loader
-   Tailwind CSS styling
-   About page
-   Contact page
-   Home page
-   User page
-   GitHub page

## 🛠️ Technologies Used

-   React
-   React Router DOM
-   Vite
-   Tailwind CSS
-   JavaScript
-   HTML
-   CSS
-   GitHub REST API

## 📁 Project Structure

``` text
src/
├── components/
│   ├── About/
│   │   └── About.jsx
│   ├── Contact/
│   │   └── Contact.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── Github/
│   │   └── Github.jsx
│   ├── Header/
│   │   └── Header.jsx
│   ├── Home/
│   │   └── Home.jsx
│   └── User/
│       └── User.jsx
│
├── App.jsx
├── Layout.jsx
├── index.css
└── main.jsx
```

## 🧭 Routing

The application uses `createBrowserRouter` and
`createRoutesFromElements`.

### Available Routes

  Route             Component   Purpose
  ----------------- ----------- -------------------------
  `/`               `Home`      Home page
  `/about`          `About`     About page
  `/contact`        `Contact`   Contact page
  `/user/:userid`   `User`      Dynamic user page
  `/github`         `Github`    GitHub information page

## 🧩 Layout and Nested Routing

The application uses a shared layout:

``` jsx
<Header />
<Outlet />
<Footer />
```

The `Header` and `Footer` remain visible while the component rendered by
`Outlet` changes according to the current route.

This avoids repeating the navigation bar and footer inside every page.

## 🔗 Navigation

`NavLink` is used for navigation because it provides access to the
`isActive` property.

Example:

``` jsx
<NavLink
    to="/about"
    className={({ isActive }) =>
        `${isActive ? "text-orange-700" : "text-gray-700"}`
    }
>
    About
</NavLink>
```

When the current URL is `/about`, the About link receives the active
styling.

## 👤 Dynamic Routes

The project contains a dynamic route:

``` text
/user/:userid
```

For example:

``` text
/user/subhajit
```

The `User` component reads the URL parameter using `useParams()`:

``` jsx
const { userid } = useParams();
```

The value can then be displayed inside the component.

## 🐙 GitHub Data Loader

The GitHub page demonstrates React Router's loader feature.

The route uses:

``` jsx
loader={githubInfoLoader}
```

The loader requests GitHub user data:

``` jsx
export const githubInfoLoader = async () => {
    const response = await fetch(
        "https://api.github.com/users/hiteshchoudhary"
    );

    return response.json();
};
```

The component receives the loader result using:

``` jsx
const data = useLoaderData();
```

The project then displays information such as the GitHub follower count
and avatar.

## 🖼️ Pages

### Home

The Home page contains a basic landing-page layout with text, buttons,
and images.

### About

The About page contains:

-   React development heading
-   Developer/team image
-   Description paragraphs
-   Responsive two-column layout

### Contact

The Contact page contains:

-   Company/contact information
-   Address
-   Telephone number
-   Email
-   Contact form
-   Submit button

### User

The User page demonstrates dynamic routing with `useParams()`.

Example:

``` text
http://localhost:5173/user/123
```

Output:

``` text
User : 123
```

### GitHub

The GitHub page demonstrates route loaders and API fetching.

## 🎨 Styling

The project uses Tailwind CSS utility classes for styling.

Examples:

``` jsx
className="text-3xl font-bold text-gray-900"
```

``` jsx
className="flex items-center justify-center"
```

``` jsx
className="bg-orange-700 text-white rounded-lg"
```

## ⚙️ Installation

Clone the project:

``` bash
git clone <your-repository-url>
```

Move into the project directory:

``` bash
cd <project-folder>
```

Install dependencies:

``` bash
npm install
```

Start the development server:

``` bash
npm run dev
```

Then open the local URL shown by Vite, usually:

``` text
http://localhost:5173
```

## 📦 Main React Router Concepts Practiced

This project was created to practice the following React Router
concepts:

-   `createBrowserRouter`
-   `createRoutesFromElements`
-   `Route`
-   `RouterProvider`
-   `Link`
-   `NavLink`
-   `Outlet`
-   `useParams`
-   `useLoaderData`
-   Route `loader`

## 🔄 React Router Flow

The basic application flow is:

``` text
main.jsx
   ↓
RouterProvider
   ↓
Layout
   ├── Header
   ├── Outlet
   │    ├── Home
   │    ├── About
   │    ├── Contact
   │    ├── User
   │    └── Github
   └── Footer
```

When the URL changes, React Router determines which component should be
rendered inside `Outlet`.

## 📚 Learning Purpose

This project is primarily a learning project for understanding React
Router and basic React application structure.

It focuses on understanding:

1.  Component-based development
2.  Reusable layouts
3.  Client-side routing
4.  Nested routing
5.  Dynamic URL parameters
6.  Active navigation links
7.  Data loading with React Router
8.  API requests
9.  Tailwind CSS styling

## 🔮 Possible Improvements

Future improvements could include:

-   Add a 404 / Not Found page
-   Add error handling for the GitHub API request
-   Add loading states
-   Add form validation to the Contact page
-   Replace placeholder content with real content
-   Move images into the local `assets` directory
-   Add authentication
-   Add responsive mobile navigation
-   Add more GitHub profile information
-   Deploy the project using Vercel or Netlify

## 👨‍💻 Author

**Subhajit Mondal**

This project was created as part of a React learning journey and focuses
on practicing React Router concepts and building a small
multi-page-style React application.

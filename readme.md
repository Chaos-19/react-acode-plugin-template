## React Acode Plugin Template

This template is designed to help developers create plugins for the **Acode** mobile code editor, using **React** as the frontend framework. The template is pre-configured with **Webpack**, **Babel**, and **React 18**, making it easy to set up, develop, and package plugins for the Acode editor.

### Table of Contents
- [About](#about)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building the Plugin](#building-the-plugin)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

### About

The React Acode Plugin Template provides a modern development environment for creating plugins for Acode using React. By leveraging the flexibility of React components and the power of Webpack, this template simplifies the plugin development workflow. This template includes all necessary configurations for JSX, React, and bundling, ensuring a seamless experience when developing Acode plugins.

### Features

- **React 18 Ready**: Fully compatible with React 18's new `createRoot` API.
- **Webpack & Babel**: A configured Webpack bundler with Babel for JSX and ES6+ support.
- **Hot Reload**: Fast iteration while developing your plugin.
- **Error Boundaries**: Example error handling for robust React applications.
- **Plugin Packaging**: Automatic packaging for Acode plugins.

---

### Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [NPM](https://www.npmjs.com/) (Comes with Node.js)
- Acode editor (Available on Android)

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-acode-plugin-template.git
   cd react-acode-plugin-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

### Development

To start developing the plugin, follow these steps:

1. **Modify Plugin ID**: Update the `plugin.json` file to reflect your plugin's unique ID and details.

2. **Run Development Server**:
   ```bash
   npm run start-dev
   ```

   This command starts the development server, watching for changes and rebuilding automatically.

3. **Edit Code**: 
   - The main entry point is located in `src/main.js`.
   - The main React component is in `src/App.jsx`.

4. **Live Preview**: Open the Acode editor on your Android device, load your plugin, and test changes.

---

### Building the Plugin

When you're ready to build the plugin for distribution, run:

```bash
npm run build
```

This command will bundle your code and generate the output in the `dist` folder. The `pack-zip.js` script will create a `.zip` file containing your plugin, ready to be uploaded to the Acode marketplace.

---

### Configuration

#### Webpack

The Webpack configuration (`webpack.config.js`) handles compiling JavaScript and JSX files. It includes:
- Babel loader for transpiling ES6+ and JSX.
- Support for `.js` and `.jsx` file extensions.

#### Babel

The Babel configuration (`.babelrc`) is set up to use:
- `@babel/preset-env`: For ES6+ support.
- `@babel/preset-react`: For JSX support.

You can modify this file if you need to customize the Babel transformation process.

#### Plugin Metadata

The `plugin.json` file contains metadata about the plugin:
- `id`: Unique plugin identifier.
- `name`: Plugin name.
- `version`: Version number.
- `main`: Entry point file (`main.js`).

---

### Example Usage

The `App.jsx` file contains a simple React component that interacts with Acode's API:

```jsx
const App = ({ cacheFile, cacheFileUrl }) => {
  return (
    <div>
      <h1>Hello from React inside Acode Plugin!</h1>
      <p>Cache File URL: {cacheFileUrl}</p>
    </div>
  );
};

export default App;
```

You can extend this component to add custom functionality based on the plugin's needs.

---

### Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to fork the repo and submit a pull request. Please make sure to test your changes before submitting.

---

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### Additional Notes

- The Acode editor allows plugin developers to interact with its API for file operations. This template provides a simple way to initialize a plugin and render React components within the editor.
- Customize the template as per your plugin requirements, such as adding new React components, managing state, and utilizing Acode's API for more complex interactions.

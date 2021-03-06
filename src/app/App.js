import React from 'react';

const App = () => {
  return (
    <div className="max-w-sm mx-auto flex p-6 bg-gray-100 rounded-lg shadow-2xl">
      <div className="ml-20 pt-10">
        <h4 className="text-xl text-gray-800 underline">Technologies I used</h4>
        <ui className="text-gray-700 list-decimal">
          <li className="bg-gray-300 hover:bg-blue-500 hover:text-white hover:rounded">
            <a
              className="pl-1 px-px pr-40"
              href="https://reactjs.org/"
              target="_blank">
              React
            </a>
          </li>
          <li className="bg-white hover:bg-teal-500 hover:text-white hover:rounded">
            <a
              className="pl-1 px-px pr-32"
              href="https://tailwindcss.com/"
              target="_blank">
              Tailwind
            </a>
          </li>
          <li className="bg-gray-300 hover:bg-blue-500 hover:text-white hover:rounded">
            <a
              className="pl-1 px-px pr-32"
              href="https://webpack.js.org/"
              target="_blank">
              Webpack
            </a>
          </li>
          <li className="bg-white hover:bg-teal-500 hover:text-white hover:rounded">
            <a
              className="pl-1 px-px pr-32"
              href="https://babeljs.io/"
              target="_blank">
              Babel
            </a>
          </li>
          <li className="bg-gray-300 hover:bg-blue-500 hover:text-white hover:rounded">
            <a
              className="pl-1 px-px pr-32"
              href="https://eslint.org/"
              target="_blank">
              ESLint
            </a>
          </li>
          <li className="bg-white hover:bg-teal-500 hover:text-white hover:rounded">
            <a
              className="pl-1 px-px pr-32"
              href="https://prettier.io/"
              target="_blank">
              Prettier
            </a>
          </li>
          <li className="bg-gray-300 hover:bg-blue-500 hover:text-white hover:rounded">
            <a
              className="pl-1 px-px pr-32"
              href="https://postcss.org/"
              target="_blank">
              PostCSS
            </a>
          </li>
          <li className="bg-white hover:bg-teal-500 hover:text-white hover:rounded">
            <a
              className="pl-1 px-px pr-32"
              href="https://purgecss.com/"
              target="_blank">
              PurgeCSS
            </a>
          </li>
        </ui>
      </div>
    </div>
  );
};

export default App;

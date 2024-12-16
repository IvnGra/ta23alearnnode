import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async () => {
  
  const fetchCharacters = async (page) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const json = await response.json();
    return json.results;
  };

  let response = await fetch('https://rickandmortyapi.com/api/character?page=5');

  
  let characters = [...charactersPage7].slice(0, 5);

  let pages = characters.map((character) => {
    return new HtmlWebpackPlugin({
      template: "./src/character.njk",
      filename: `character_${character.id}.html`,
      templateParameters: { character },
    });
  });

  return {
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  quietDeps: true,
                },
              },
            },
          ],
        },
        {
          test: /\.njk$/,
          use: [
            {
              loader: "simple-nunjucks-loader",
              options: {},
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.njk",
        templateParameters: {
          name: "Ivan",
          characters,
        },
      }),
      new HtmlWebpackPlugin({
        filename: "about.html",
        template: "./src/about.njk",
      }),
      ...pages,
    ],
  };
};
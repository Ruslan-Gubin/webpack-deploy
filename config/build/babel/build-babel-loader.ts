import { PluginItem } from "@babel/core";
import { BuildBabelLoader, BuildOptions } from "../types/types";
import { removeDataTestId } from "./removeDataTestId";



export function buildBabelLoader(options: BuildOptions): BuildBabelLoader {
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  const plugins: PluginItem[] = [];

  if (isProd) {
    plugins.push([
      removeDataTestId,
      {
        props: ['data-testid']
      }
    ])
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              runtime: isDev ? "automatic" : "classic",
            },
          ],
        ],
        plugins: plugins.length ? plugins : undefined,
      },
    },
  };
  
}

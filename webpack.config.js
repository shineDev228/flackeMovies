
import MiniCssExtractPlugin, { loader } from "mini-css-extract-plugin";

export const mode = "development";

const devMode = process.env.NODE_ENV !== "production";

export const module = {
    rules: [
        {
            test: /\.(sa|sc|c)ss$/i,
            use: [
                devMode ? "style-loader" : loader,
                "css-loader",
                "postcss-loader",
                "sass-loader",
            ],
        },
    ],
};
export const plugins = [].concat(devMode ? [] : [new MiniCssExtractPlugin()]);
import { Metadata } from "next";
import { Head, Html, Main, NextScript } from "next/document";

export const metadata: Metadata = {
    title: "Future Wave",
    description: "Formulário de funcionários"
};

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap"
                    rel="stylesheet"
                />
                <title>Future Wave</title>
                <meta name="description" content="Formulário de funcionários" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

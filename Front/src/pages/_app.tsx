import { Providers } from "@/context/providers";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Providers>
            <Component {...pageProps} />
        </Providers>
    );
}

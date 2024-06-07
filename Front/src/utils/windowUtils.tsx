"use client";

export class WindowUtils {
    static getLocalStorage = (): Storage | undefined => {
        let localStorage = undefined;
        if (typeof window !== "undefined") {
            localStorage = window.localStorage;
        }

        return localStorage;
    };

    static getLocation = (): Location | undefined => {
        let location = undefined;
        if (typeof window !== "undefined") {
            location = window.location;
        }

        return location;
    };

    static getInnerWidth = (): number | undefined => {
        let innerWidth = undefined;
        if (typeof window !== "undefined") {
            innerWidth = window.innerWidth;
        }

        return innerWidth;
    };

    static getInnerHeight = (): number | undefined => {
        let innerHeight = undefined;
        if (typeof window !== "undefined") {
            innerHeight = window.innerHeight;
        }

        return innerHeight;
    };
}

export interface Locales {
    [key: string]: RootObject;
}

interface RootObject {
    Navbar: Navbar;
    Footer: {
        credits: string;
    }
    Start: {
        title: string;
        job: string;
    }
}

interface Navbar {
    home: string;
    aboutme: string;
    projects: string;
    blog: string;
}
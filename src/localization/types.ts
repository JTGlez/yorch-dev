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
    ContactCard: {
        button: string;
        description: {
            par1: string;
            par2: string;
        }
    }
    ContactForm : {
        title: string;
        subtitle: string;
        subtitle2: string;
        form: {
            name: string;
            username: string;
            email: string;
            message: string;
            sent: string;
            sent2: string;
            error: string;
            error2: string;
        }
        recaptcha: {
            par1: string;
            par2: string;
            par3: string;
            par4: string;
            par5: string;
            error: string;
            error2: string;
        }
    }
}

interface Navbar {
    home: string;
    aboutme: string;
    projects: string;
    blog: string;
}
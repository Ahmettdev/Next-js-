"use server"


type FormState ={
    sucessful: boolean,
    message: {
        message: string,
        user?: string
    },
    error: string
};

export async function Action(preveState: FormState, formData: FormData): Promise<FormState> {

    const email = formData.get("email") as string;
    const Password = formData.get("password") as string;

    if (!email || !Password) {
        return {
            sucessful: false,
            message: {message: ''},
            error: 'Email and password are required.'
        };
    }

    return {
        sucessful: true,
        message: {
            message: 'Form submitted successfully! ' ,
            user: `Email: ${email}, Password: ${Password}`
        },
        error: ''
    }



}
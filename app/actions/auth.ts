"use server"
import { redirect } from "next/navigation"
import { headers } from "next/headers";
import { auth } from "@/auth"

export async function signUpAction (formData: FormData) {
    const email = formData.get("email") as  string;
    const password = formData.get("password") as  string;
    const name = formData.get("name") as string;

    await auth.api.signUpEmail({
        body: {
            email,
            password,
            name,
        }
    })   

    redirect("/")

    // await auth.api.signInMagicLink({
    // body: {
    //     email: "user@email.com", // required
    //     name: "my-name",
    //     callbackURL: "/dashboard",
    //     newUserCallbackURL: "/welcome",
    //     errorCallbackURL: "/error",
    //     metadata: { inviteId: "123" },
    // },
    // // This endpoint requires session cookies.
    // headers: await headers(),
    // });

}

export async function signInAction (formData: FormData) {
    const email = formData.get("email") as  string;
    const password = formData.get("password") as  string;

    await auth.api.signInEmail({
        body: {
            email,
            password
        }
    })   

    redirect("/")

    // await auth.api.magicLinkVerify({
    //     query: {
    //         token: "123456", // required
    //         callbackURL: "/dashboard",
    //     },
    //     // This endpoint requires session cookies.
    //     headers: await headers(),
    // });

}

export default async function signOutAction() {
    await auth.api.signOut({
        headers: await headers(),
    });

    redirect("/");
} 
import { signUpAction } from "@/app/actions/auth"

export default function Page() {
    return (
        <div>
            Sign Up for Emergence
            <form action={signUpAction}>
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" placeholder="Type in your name" required/>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" placeholder="Type in your email address" required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="email" name="email" placeholder="Type in your passwo rd" required/>
                </div>              
                <div>
                    <button type="submit">Sign Up</button>    
                </div>  
            </form>
        </div>
    )
}
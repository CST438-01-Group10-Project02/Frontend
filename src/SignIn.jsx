// Sign in page


export default function SignIn() {
    return (
        <div>
            <h1>Welcome</h1>
            <UsernameInput />
            <PasswordInput />
            <SignInButton />
            <SignUpButton />
            <OAuthButton />
        </div>
    )
}


// React component for username input
function UsernameInput() {
    return (
        <input>
            Username
        </input>
    )
}

// React component for password input
function PasswordInput() {
    return (
        <input>
            Password
        </input>
    )
}

// React component for sign in button
function SignInButton() {
    return (
        <button>
            Sign In
        </button>
    )
}

// React component for sign up button
function SignUpButton() {
    return (
        <button>
            Sign Up
        </button>
    )
}

// React component for OAuth button
function OAuthButton() {
    return (
        <button>
            OAuth will go here
        </button>
    )
}
import React from "react";
import { Page } from "../components/Page";
import { Input } from "../components/Input";
import { Field } from "../components/Field";
import { Button } from "../components/Button";
import { fetchJSON } from "../global/FetchAPI";
import { useRouter } from "next/router";

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [status, setStatus] = React.useState({
        loading: false, error: false
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus({ loading: true, error: false });
        try {
            const res = await fetchJSON("/api/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ email, password }),
            });
            setStatus({ loading: false, error: false });
            console.log("sign in:", res);
            router.push("/");
        } catch (error) {
            setStatus({ loading: false, error: true });
        }
    };

    return (
        <Page title="Sign In">
        <form onSubmit={handleSubmit}>
            <Field label="Email">
                <Input 
                    required
                    type="email" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </Field>
            <Field label="Password">
                <Input 
                    required
                    type="password" 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </Field>
            {status.error && (
                <p className="text-red-700">
                    Invalid credentials
                </p>
            )}
            {status.loading ? (
                <p>Loading...</p>
            ) : (
                <Button type="submit">
                    Sign In
                </Button>
            )}
        </form>
        </Page>
    );
};





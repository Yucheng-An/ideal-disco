import {useState} from "react";
import {login} from "../services/loginApi.js"

export default function Login({user, setUser}) {
    const [form, setForm] = useState({username: "", password: ""});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function onChange(e) {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    }

    async function handleLogin(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const response = await login(form)
            localStorage.setItem("token", response.data.token);
            setUser({username: response.data.username, name: response.data.name,});
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    if (user) {
        return (
            <div>
                <p>Welcome {user.name || user.username}</p>
                <button></button>
            </div>
        );
    }

    return (
        <div className="items-center text-center">
            <h1 className="font-mono font-medium text-red-500 text-2xl">Login</h1>
            <form onSubmit={handleLogin} className="mt-4 flex flex-col gap-3 w-full max-w-sm mx-auto">
                <input
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    type="text"
                    name="username"
                    placeholder="Username"
                    autoComplete="username"
                    value={form.username}
                    onChange={onChange}
                    required
                />
                <input
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={form.password}
                    onChange={onChange}
                    required
                />
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-orange-500 text-white p-2 rounded-md w-full disabled:opacity-60"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}

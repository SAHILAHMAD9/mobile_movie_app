
// this hook will take funstion as an input and that function returns promise .
// we are creating this hook insted just importing the function to use React-specific state management (useState, useEffect).
// and to avoid repeating boilerplate (loading/error handling, cleanup)
// THIKNGS TO KEEP IN MIND WHILE CREATING HOOKS
//          Use React hooks inside it (useState, useEffect, etc.).
//          Return values that your components need (data, functions, loading state, errors).
//          Make it flexible by accepting parameters.

import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            // console.log("Fetching data...");
            const result = await fetchFunction();
            // console.log("Fetch success:", result);
            setData(result);
        } catch (err) {
            console.error("Fetch error:", err);
            setError(err instanceof Error ? err : new Error("Unknown error"));
        } finally {
            setLoading(false);
        }
    };



    useEffect(() => {
        if (autoFetch) fetchData();
    }, []); // re-run if function changes

    const reset = () => {
        setLoading(false);
        setError(null);
        setData(null);
    };

    return {
        data,
        loading,
        error,
        refetch: fetchData,
        reset
    };
};

export default useFetch;


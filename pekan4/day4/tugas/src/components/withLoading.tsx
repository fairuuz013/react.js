import React, { useState, useEffect } from "react";

export function withLoading<P extends object>(
    WrappedComponent: React.ComponentType<P>
) {
    return function WithLoadingComponent(props: P) {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => setLoading(false), 1500);
            return () => clearTimeout(timer);
        }, []);

        if (loading) return <p>⏳ Loading...</p>;
        return <WrappedComponent {...props} />;
    };
}

// Komponen yang mau dikasih efek loading
function UserInfo() {
    return <p>👤 User Info: My Homie Ruz</p>;
}

// Ini yang kamu import di App.tsx
export const UserInfoWithLoading = withLoading(UserInfo);

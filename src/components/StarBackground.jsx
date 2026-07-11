import { useTheme } from "../hooks/useTheme";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export const StarBackground = () => {
    const isDark = useTheme() === "dark";

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <StarsBackground />
            <ShootingStars
                starColor={isDark ? "#9E00FF" : "#7C3AED"}
                trailColor={isDark ? "#2EB9DF" : "#A78BFA"}
            />
        </div>
    );
};

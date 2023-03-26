import { AuthProvider } from "./authContext";
import { BreakPointsProvider } from "./breakPointsContext";
import { SidebarProvider } from "./sidebarContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <BreakPointsProvider>
                <SidebarProvider>
                    {children}
                </SidebarProvider>
            </BreakPointsProvider>
        </AuthProvider>
    );
};
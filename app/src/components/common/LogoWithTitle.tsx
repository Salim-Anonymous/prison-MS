interface LogoWithTitleProps {
    title: string;
    subtitle?: string;
    logo: React.ReactNode;
    className?: string;
    row?: boolean;
}

const LogoWithTitle = ({ title, subtitle, logo, className, row }: LogoWithTitleProps) => {
    if (row){
        return (
            <div className={`flex flex-row items-center justify-center ${className}`}>
                <div className="flex flex-col items-center justify-center">
                    {logo}
                    <div className="text-xl font-bold">{title}</div>
                    <div className="text-sm">{subtitle}</div>
                </div>
            </div>
        )
    }
    return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            <div className="flex flex-row items-center justify-center">
                {logo}
                <div className="ml-1 text-sm font-bold">{title}</div>
            </div>
            <div className="text-sm">{subtitle}</div>
        </div>
    );
};

export default LogoWithTitle;

const MainArea = ({ children }: {children:React.ReactNode} ) => {
    return <div className="w-full h-full pt-20 pb-10 overflow-y-scroll">
        {children}
    </div>
}

export default MainArea;
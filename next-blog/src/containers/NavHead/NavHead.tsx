import SearchWithButton from "./components/SearchWithButton";
import LogoWithLink from "./components/LogoWithLink";

const NavHead = () => {
    
    return(
        <header className="bg-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                <LogoWithLink />
                <SearchWithButton />
            </div>
        </header>
    )
}

export default NavHead;
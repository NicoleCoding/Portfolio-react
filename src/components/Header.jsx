import Nav from "./Nav";

export default function Header() {

    return (
        <header className="bg-white sticky top-0 left-0 right-0 z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
            <h1 className="text-black">Le portfolio</h1>
            <Nav />
            </div>
        </header>

    );
}
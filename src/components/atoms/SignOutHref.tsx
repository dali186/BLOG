import { signOut } from "@/app/actions/auth";

const SignOutHref = () => {

    return(
        <form action={signOut}>
            <button type="submit" className="text-gray-700 hover:text-blue-500 font-noto">
                SignOut
            </button>
        </form>
    );
}

export default SignOutHref;
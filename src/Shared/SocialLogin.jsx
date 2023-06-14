import { FcGoogle } from 'react-icons/fc'
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { goggleLogin } = useAuth()
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleGoggle = () => {
        goggleLogin()
            .then((result) => {
                const user = result.user
                console.log(user)
                const savedUser =
                {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }
                fetch("https://summer-camp-server-steel.vercel.app/users", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    }
                    )

            })
            .catch(data => console.log(data.error))

    }
    return (
        <div>
            <div className='flex items-center pt-4 space-x-1'>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                <p className='px-3 text-sm dark:text-gray-400'>
                    Signup with social accounts
                </p>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            </div>
            <div onClick={handleGoggle} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                <FcGoogle size={32} />
                <p>Continue with Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;
'use client';
import { logout } from'../services/user';
import Button from '../../components/Button';
import { useRouter } from "next/navigation";

const Profile = ()=> {
  const router = useRouter();

  const logoutHandler = async () => {
    const response = await logout();
    if(response.status >= 200 && response.status < 300) {
      router.push('/login');
    }
  }
  return (
    <main className="min-h-screen items-center justify-center p-24">
      <Button onClick={logoutHandler}>
        Logout
      </Button>
      <div className="flex items-center justify-center">
        estás logueado pichon
      </div>
    </main>
  )
}

export default Profile;
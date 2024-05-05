'use client';
import { useState } from "react";
import Input from "../../../components/Input";
import { register, login } from "../../services/user";
import Button from "../../../components/Button";
import TabsHeader from "../../../components/TabsHeader";
import ErrorFormMessage from "../../../components/ErrorFormMessage";
import { useRouter } from "next/navigation";
import { isStatusOk, hasError } from "../../utils/utils";

const Form = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [statusError, setStatusError] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const loginError = (status) => {
    setStatusError(status);
    setLoading(false);
  };
  
  const loginOk = ()=> {
    router.push('/profile');
  };

  const submit = async (e) => {
    e.preventDefault();
    const error = hasError(email, password, name, activeTab === 1);
    if (error) {
      setStatusError(error);
      return null;
    }
    setLoading(true);

    const loginResponse = activeTab === 1
      ? await register(email, name, password)
      : await login(email, password);

    if (isStatusOk(loginResponse)) {
      loginOk();
    } else {
      loginError(loginResponse.status);
    }
  };

  return (
    <div className="border border-neutral bg-base-light p-6 rounded-md">
      <div>
        <TabsHeader
          tabs={['Signin', 'Signup']}
          activeTab={activeTab}
          callback={setActiveTab}
        />
      </div>
      <form className="w-80" onSubmit={submit}>
        <Input
          value={email}
          change={(e) => setEmail(e.target.value)}
          label="Email"
          placeholder="Example@example.com"
        />
        {
          activeTab === 1 ? (
            <Input
              value={name}
              change={(e) => setName(e.target.value)}
              type="text"
              label="name"
              placeholder="example123"
            />
          ) : null
        }
        <Input
          value={password}
          change={(e) => setPassword(e.target.value)}
          type="password"
          label="Password"
          placeholder="Insert password"
        />
        <ErrorFormMessage status={statusError} />
        <Button>
          {
            loading ?
            (
              <>
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
              </>

            ) :
            'Send'
          }
        </Button>
      </form>
    </div>
  );
}

export default Form;

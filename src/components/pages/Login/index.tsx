import React, { useState, useEffect, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { setError, signin } from '../../../store/actions/auth';
import { Button } from '../../UI/Button';
import Input from '../../UI/Input';
import Message from '../../UI/Message';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { error } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        return () => {
            if (error) {
                dispatch(setError(''));
            }
        }
    }, [error, dispatch]);

    const submitHandler = (e: FormEvent) => {
        console.debug("submitHandler");
        e.preventDefault();
        if (error) {
            dispatch(setError(''));
        }
        setLoading(true);
        dispatch(signin({ email, password }, () => setLoading(false)));
    }

    return (
        <div className="flex h-screen w-full">
            <div className="m-auto shadow-lg border-2 rounded p-5">
                <form onSubmit={submitHandler}>
                    <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        placeholder="example@gmail.com"
                        label="Email Address"
                    />
                    <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        placeholder="Password"
                        label="Password"
                    />
                    {error && (
                        <div className="text-center p-4">
                            <Message type="danger" msg={error} />
                        </div>
                    )}
                    <Button
                        className="mx-auto"
                        label={loading ? "Loading ..." : "Sign In"}
                        disabled={loading}
                    />
                </form>
            </div>
        </div>
    );
}

export default Login;
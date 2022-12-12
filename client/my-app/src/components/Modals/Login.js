import React from 'react';
import Input from '../Input';
import MainModal from './MainModal';
import { Link } from 'react-router-dom';

function Login({ modalOpen, setModalOpen }) {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-white shadow-xl rounded-2xl">
        <h2 className="text-3xl font-bold">Login</h2>
        <form className="flex flex-col gap-6 text-left">
          <Input label="Email" type="email" placeHolder="user@gmail.com" />
          <Input label="Password" type="password" placeHolder="*******" />
          <button type="button" className="text-end text-sm underline">
            Forgot password?
          </button>
          <Link
            to="/dashboard"
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
            className="w-full text-center py-3 rounded bg-main text-white hover:bg-subMain "
          >
            Login
          </Link>
        </form>
      </div>
    </MainModal>
  );
}

export default Login;

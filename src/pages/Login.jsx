import AuthLayout from "../components/layouts/AuthLayout";
import bgLogin from "../assets/login-background.jpg";
import Logo from "../components/atoms/Logo";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import googleIcon from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const dataCheck = localStorage.getItem("user_data");

    if (!dataCheck) {
      alert("Data not found");
      return;
    }

    const savedProfile = JSON.parse(dataCheck);

    if (
      formData.username !== savedProfile.username ||
      formData.password !== savedProfile.password
    ) {
      alert("Username or password incorrect");
      return;
    }

    alert("Login successful, welcome");

    navigate("/home");
  };

  return (
    <AuthLayout bgImage={bgLogin}>
      <Logo />

      <div className='text-white flex flex-col items-center gap-1 '>
        <h1 className='text-xl md:text-4xl font-bold'>Masuk</h1>
        <p className='text-xs md:text-lg font-normal'>
          Selamat datang kembali!
        </p>
      </div>

      <form onSubmit={handleLogin} className='w-full flex flex-col'>
        <Input
          labelInput='Username'
          type='text'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Masukkan username'
          className='mb-5'
        />
        <Input
          labelInput='Kata Sandi'
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Masukkan kata sandi'
          className='mb-2'
        />

        <div className='flex items-center justify-between text-xs md:text-lg'>
          <div className='flex gap-1'>
            <span className='text-secondary'>Belum punya akun?</span>
            <Link
              to='/register'
              className='text-white transition-transform duration-200 ease-in-out hover:text-blue-500'>
              Daftar
            </Link>
          </div>
          <a
            href='#'
            className='text-white transition-transform duration-200 ease-in-out hover:text-blue-500'>
            Lupa kata sandi?
          </a>
        </div>

        <div className='flex flex-col gap-2 mt-7'>
          <Button variant='secondary' type='submit'>
            Masuk
          </Button>

          <p className='text-secondary text-center text-xs md:text-lg'>Atau</p>

          <Button variant='transparent'>
            <img
              src={googleIcon}
              className='w-[12px] md:w-[18px]'
              alt='google icon'
            />
            <span>Masuk dengan Google</span>
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;

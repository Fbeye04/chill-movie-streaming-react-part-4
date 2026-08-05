import { MdOutlineUploadFile } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import MovieCard from "../components/molecules/MovieCard";
import ProfileInput from "../components/molecules/ProfileInput";
import avatarProfile from "../assets/avatar.png";
import warningStates from "../assets/warning.png";
import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/api/userApi";
import useFetchMyList from "../hooks/useFetchMyList";

const Profil = () => {
  const navigate = useNavigate();
  const { myListMovies } = useFetchMyList();

  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfileData(data);
        setIsLoading(false);
        setUsername(data.username);
        setEmail(data.email);
      } catch (error) {
        alert("silahkan login");
        console.error("Silahkan login:", error);
        navigate("/");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleSave = async () => {
    try {
      await updateProfile({ username, email, newPassword });
      setIsEditing(false);
      setNewPassword("");
      alert("User profil berhasil di update");
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  };

  // bisa tambahkan fungsi isSaving nanti untuk mendisable tombol save agar tidak bisa digunakan saat proses update belum selesai

  if (isLoading || !profileData) {
    return (
      <div className='w-full min-h-screen flex justify-center items-center text-white'>
        <h2>Memuat data profil...</h2>
      </div>
    );
  }

  return (
    <section className='text-white w-full flex-1 flex flex-col items-start p-5 md:py-5 lg:py-10 md:px-10 lg:px-20 lg:gap-8'>
      <div className='flex flex-col-reverse lg:flex-row w-full lg:items-center lg:justify-between gap-10 lg:gap-20'>
        <div className='w-full lg:w-1/2'>
          <h3 className='text-xl lg:text-3xl font-bold mb-5'>Profil Saya</h3>

          <div className='flex items-center gap-6'>
            <img
              src={avatarProfile}
              className='rounded-full w-[80px] lg:w-[140px]'
              alt='Avatar Profile'
            />

            <div className='flex flex-col gap-2'>
              <Button variant='secondary' className='md:text-base lg:text-lg'>
                Ubah Foto
              </Button>

              <div className='flex items-center gap-1 text-secondary'>
                <MdOutlineUploadFile className='lg:text-2xl' />
                <span className='lg:text-base'>Maksimal 2 MB</span>
              </div>
            </div>
          </div>

          <ProfileInput
            label='Nama Pengguna'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            canEdit={true}
            isEditing={isEditing}
            onEditClick={() => setIsEditing(true)}
          />
          <ProfileInput
            label='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            canEdit={true}
            isEditing={isEditing}
            onEditClick={() => setIsEditing(true)}
          />
          <ProfileInput
            label='Kata Sandi'
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder='Kosongkan jika tidak diganti'
            canEdit={true}
            isEditing={isEditing}
            onEditClick={() => setIsEditing(true)}
          />

          <Button onClick={handleSave} variant='primary' className='px-6 py-2'>
            Simpan
          </Button>
        </div>

        <div className='bg-surface-light rounded-xl w-full lg:w-1/2 flex flex-col p-6'>
          <div className='flex items-center gap-5'>
            <img
              src={warningStates}
              className='w-[78px]'
              alt='states/warning'
            />
            <div className='flex flex-col gap-3'>
              <p className='text-lg md:text-2xl font-semibold'>
                Saat ini anda belum berlangganan
              </p>
              <span className='text-sm md:text-base'>
                Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                Kamu!
              </span>
            </div>
          </div>

          <Button variant='transparent' className='self-end md:text-base mt-5'>
            Mulai Berlangganan
          </Button>
        </div>
      </div>

      <div className='w-full mt-8'>
        <div className='flex justify-between items-center'>
          <h3 className='text-xl lg:text-3xl font-bold'>Daftar Saya</h3>
          <Link to='/home/my-list' className='text-secondary lg:text-lg'>
            Lihat Semua
          </Link>
        </div>

        {myListMovies.length > 0 && (
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 w-full mt-5 justify-items-center'>
            {myListMovies.slice(0, 6).map((movie, index) => {
              let visibilityClass = "";

              if (index === 3) {
                visibilityClass = "hidden md:block";
              } else if (index >= 4) {
                visibilityClass = "hidden lg:block";
              }

              return (
                <div key={movie.id} className={`w-full ${visibilityClass}`}>
                  <MovieCard variant='grid' {...movie} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Profil;

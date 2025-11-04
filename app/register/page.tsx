"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState("dosen");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Password dan konfirmasi tidak cocok!");
      return;
    }
    console.log("Data register:", { ...form, role: selectedRole });
    alert(`Akun ${selectedRole} berhasil didaftarkan!`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-lg rounded-2xl overflow-hidden">
        {/* Kiri - Gambar */}
        <div className="md:w-1/2 w-full">
          <img
            src="/Register.png"
            alt="Register Illustration"
            className="object-cover w-full h-full rounded-l-2xl"
          />
        </div>

        {/* Kanan - Form */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-10 py-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Selamat Datang <br />
            <span className="text-teal-500">AutoGrade</span> !
          </h1>
          <p className="text-gray-600 mb-6 text-sm">
            Daftarkan akun Anda untuk mulai menggunakan sistem penilaian otomatis
          </p>

          {/* Toggle Role */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-6 w-64">
            <button
              type="button"
              onClick={() => setSelectedRole("dosen")}
              className={`w-1/2 py-2 rounded-full font-medium transition ${
                selectedRole === "dosen"
                  ? "bg-teal-500 text-white shadow"
                  : "text-gray-600 hover:text-teal-600"
              }`}
            >
              Dosen
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole("mahasiswa")}
              className={`w-1/2 py-2 rounded-full font-medium transition ${
                selectedRole === "mahasiswa"
                  ? "bg-teal-500 text-white shadow"
                  : "text-gray-600 hover:text-teal-600"
              }`}
            >
              Mahasiswa
            </button>
          </div>

          {/* Form Register */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 rounded-full px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Masukkan Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 rounded-full px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Buat Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 rounded-full px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Konfirmasi Password */}
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Konfirmasi Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 rounded-full px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute inset-y-0 right-4 flex items-center text-gray-500"
              >
                {showConfirm ? "🙈" : "👁️"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white rounded-full py-2 font-semibold hover:bg-gray-800 transition"
            >
              Daftar
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-teal-500 hover:underline">
              Masuk disini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
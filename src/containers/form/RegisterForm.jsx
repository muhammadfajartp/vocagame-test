import ButtonUI from "@/components/button/ButtonUI";
import InputUI from "@/components/input/InputUI";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { update } from "@/features/userSlice";

const RegisterForm = () => {
   const dispatch = useDispatch();

   const registerUser = (e) => {
      e.preventDefault();

      const { username, nomorhp, password } = formik.values;

      // Membaca cookie yang ada
      const cookies = parse(document.cookie);

      // Set cookie baru
      document.cookie = serialize("usernamenya", username, {
         path: "/", // opsional, tergantung kebutuhan Anda
         maxAge: 3600, // waktu kedaluwarsa dalam detik, opsional
         secure: process.env.NODE_ENV === "production", // pastikan true saat di produksi
         httpOnly: true, // opsional, tergantung kebutuhan Anda
      });

      // Dispatch ke Redux
      dispatch(update({ username, nomorhp, password }));

      // Tampilkan alert setelah semua operasi selesai
      alert("submit");
   };

   const formik = useFormik({
      initialValues: {
         username: "",
         nomorhp: "",
         password: "",
         repassword: "",
      },
      onSubmit: registerUser,
      validationSchema: yup.object().shape({
         username: yup.string().required("Minimal 3 Karakter").min(3).max(10),
         nomorhp: yup.string().required("Minimal 11 Angka").min(11).max(12),
         password: yup
            .string()
            .required("Mengandung Huruf Kapital dan Angka")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Kata sandi harus ada huruf besar, huruf kecil, angka, dan karakter spesial"),
         repassword: yup
            .string()
            .required("Konfirmasi Password")
            .oneOf([yup.ref("password")], "Password tidak cocok")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Kata sandi harus ada huruf besar, huruf kecil, angka, dan karakter spesial"),
      }),
   });

   const handleForm = (event) => {
      const { target } = event;
      formik.setFieldValue(target.name, target.value);
   };

   return (
      <>
         <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center items-center">
            <div isInvalid={formik.errors.username}>
               <InputUI title={"Nama Anda"} type="text" name="username" onChange={handleForm} />
               <p className="text-xs text-red-500">{formik.errors.username}</p>
            </div>
            <div isInvalid={formik.errors.nomorhp}>
               <InputUI title={"Nomor Handphone"} type="number" name="nomorhp" onChange={handleForm} />
               <p className="text-xs text-red-500">{formik.errors.nomorhp}</p>
            </div>
            <div isInvalid={formik.errors.password}>
               <InputUI title={"Password"} type="password" name="password" onChange={handleForm} />
               <p className="text-xs text-red-500">{formik.errors.password}</p>
            </div>
            <div isInvalid={formik.errors.repassword}>
               <InputUI title={"Password"} type="password" name="repassword" onChange={handleForm} />
               <p className="text-xs text-red-500">{formik.errors.repassword}</p>
            </div>

            <div className=" pt-10">
               <ButtonUI title={"Daftar Sekarang"} type="submit" />
            </div>
         </form>
      </>
   );
};

export default RegisterForm;

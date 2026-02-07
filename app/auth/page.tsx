import { Icon } from '@iconify/react'
import Image from "next/image"
import { loginController } from '../api/auth/LoginController';

export default function login()
{
    return (
        <>
        <section className="auth bg-base d-flex flex-wrap">
  <div className="auth-left d-lg-block d-none">
    <div className="d-flex align-items-center flex-column h-100 justify-content-center">
<Image
      src="/assets/img/auth.png"
      alt="Auth"
      width={800}
      height={800}
    />
        </div>
  </div>
  <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
    <div className="max-w-464-px mx-auto w-100">
      <div>
        <a href="index.html" className="mb-40 max-w-290-px">
          <img src="assets/images/logo.png" alt="" />
        </a>
        <h4 className="mb-12">Selamat Datang</h4>
        <p className="mb-32 text-secondary-light text-lg">
        Silahkan Masukan Username Dan Password Anda!
        </p>
      </div>
      <form action="#" onSubmit={loginController}>
        <div className="icon-field mb-16">
          <span className="icon top-50 translate-middle-y">
            <Icon icon="mage:email" />
          </span>
          <input
            type="email" name='email' required
            className="form-control h-56-px bg-neutral-50 radius-12"
            placeholder="Email"
          />
        </div>
        <div className="position-relative mb-20">
          <div className="icon-field">
            <span className="icon top-50 translate-middle-y">
              <Icon icon="solar:lock-password-outline" />
            </span>
            <input name='password' required
              type="password"
              className="form-control h-56-px bg-neutral-50 radius-12"
              id="your-password"
              placeholder="Password"
            />
          </div>
          <span
            className="toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light"
            data-toggle="#your-password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
        >
          {" "}
          Sign In
        </button>
      </form>
    </div>
  </div>
</section>

        </>
    );
}

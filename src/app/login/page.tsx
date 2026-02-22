"use client";

import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Lock,
  ArrowLeft,
  Chrome,
  Github,
} from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      {/* Background blur elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-[440px] animate-in slide-in-from-bottom-6 duration-500">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Quay lại trang chủ
        </Link>

        {/* Login Card */}
        <div className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-2xl shadow-primary/5">
          <div className="text-center mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-6 group"
            >
              <div className="bg-primary p-2 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-heading tracking-tight">
                Edu<span className="text-primary">Scale</span>
              </span>
            </Link>
            <h1 className="text-2xl font-bold mb-2">Chào mừng trở lại!</h1>
            <p className="text-secondary text-sm">
              Vui lòng đăng nhập để quản lý trung tâm của bạn
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Email</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-muted/50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-sm font-bold">Mật khẩu</label>
                <Link
                  href="#"
                  className="text-xs font-bold text-primary hover:underline"
                >
                  Quên mật khẩu?
                </Link>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-muted/50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
              </div>
            </div>

            <button
              onClick={() =>
                (window.location.href = "/app/demo-center/dashboard")
              }
              className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 transition-all duration-300 transform active:scale-[0.98] mt-2"
            >
              Đăng nhập
            </button>
          </form>

          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <span className="relative px-4 bg-white text-xs text-secondary font-medium uppercase tracking-wider">
              Hoặc đăng nhập với
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors font-semibold text-sm">
              <Chrome className="w-4 h-4" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors font-semibold text-sm">
              <Github className="w-4 h-4" />
              Github
            </button>
          </div>

          <p className="text-center mt-10 text-sm text-secondary">
            Chưa có tài khoản?{" "}
            <Link
              href="/register"
              className="font-bold text-primary hover:underline"
            >
              Đăng ký dùng thử
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

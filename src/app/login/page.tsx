"use client";

import Link from "next/link";
import { useState } from "react";
import {
        ArrowRight,
        Eye,
        EyeOff,
        Loader2,
        Sparkles,
        GraduationCap,
} from "lucide-react";

export default function LoginPage() {
        const [showPassword, setShowPassword] = useState(false);
        const [isLoading, setIsLoading] = useState(false);
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = (e: React.FormEvent) => {
                e.preventDefault();
                setIsLoading(true);
                setTimeout(() => {
                        window.location.href = "/app/demo-center/dashboard";
                }, 1200);
        };

        return (
                <>
                        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

        .font-friendly { font-family: 'Nunito', sans-serif; }

        /* Playful Bubble Background */
        .bg-bubbles {
          background-color: var(--background);
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(96, 165, 250, 0.08) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(96, 165, 250, 0.08) 0%, transparent 20%),
            radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.03) 0%, transparent 40%);
        }

        /* Floating Animation for decorative elements */
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-2deg); }
        }

        .animate-float {
          animation: gentle-float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }

        /* Soft Input styling */
        .soft-input {
          background-color: var(--card);
          border: 2px solid transparent;
          border-radius: var(--radius);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
          transition: all 0.2s ease;
        }
        .soft-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.15), inset 0 2px 4px rgba(0,0,0,0.02);
        }

        /* Clay/Soft Button */
        .btn-soft {
          background-color: var(--primary);
          color: var(--primary-foreground);
          border-radius: var(--radius);
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 0 rgba(0,0,0,0.1), 0 8px 16px rgba(96, 165, 250, 0.3);
          transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-soft:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 0 rgba(0,0,0,0.1), 0 12px 20px rgba(96, 165, 250, 0.4);
        }
        .btn-soft:active {
          transform: translateY(4px);
          box-shadow: 0 0 0 rgba(0,0,0,0.1), 0 2px 4px rgba(96, 165, 250, 0.2);
        }

        /* Soft floating card */
        .soft-card {
          background-color: var(--card);
          border-radius: calc(var(--radius) * 1.5);
          box-shadow: 0 20px 40px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02);
          border: 1px solid rgba(255,255,255,0.5);
        }

        /* Social Button */
        .social-btn {
          background-color: var(--card);
          color: var(--foreground);
          border: 2px solid var(--border);
          border-radius: var(--radius);
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .social-btn:hover {
          background-color: var(--muted);
          border-color: var(--muted-foreground);
          transform: translateY(-1px);
        }
      `}</style>

                        <main className="min-h-screen w-full flex items-center justify-center p-4 lg:p-8 bg-bubbles font-friendly text-foreground selection:bg-primary/20">
                                {/* Main interactive container */}
                                <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 relative">
                                        {/* Decorative Floating Elements (Background Layer) */}
                                        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />

                                        {/* LEFT SIDE - Value Proposition */}
                                        <section className="w-full lg:w-[45%] flex flex-col justify-center order-2 lg:order-1 relative z-10 px-4 lg:px-0">
                                                {/* Friendly floating badge */}
                                                <div className="animate-float-delayed inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-bold text-primary shadow-sm w-fit mb-6 border border-primary/10">
                                                        <Sparkles className="w-4 h-4" />
                                                        <span>
                                                                Nền tảng Giáo
                                                                dục #1
                                                        </span>
                                                </div>

                                                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-foreground leading-[1.1] tracking-tight mb-6">
                                                        Quản lý học viện{" "}
                                                        <br className="hidden lg:block" />
                                                        <span className="text-primary relative inline-block">
                                                                dễ dàng hơn
                                                                {/* Hand-drawn style underline */}
                                                                <svg
                                                                        className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30"
                                                                        viewBox="0 0 100 10"
                                                                        preserveAspectRatio="none"
                                                                >
                                                                        <path
                                                                                d="M0 5 Q 50 10 100 5"
                                                                                stroke="currentColor"
                                                                                strokeWidth="4"
                                                                                fill="none"
                                                                                strokeLinecap="round"
                                                                        />
                                                                </svg>
                                                        </span>
                                                </h1>

                                                <p className="text-lg text-muted-foreground font-medium mb-10 max-w-md leading-relaxed">
                                                        Chào mừng bạn quay trở
                                                        lại EduScale. Mọi thứ đã
                                                        sẵn sàng để bạn bắt đầu
                                                        một ngày làm việc tuyệt
                                                        vời!
                                                </p>

                                                {/* Floating avatars / Social proof card */}
                                                <div className="animate-float bg-card p-4 rounded-2xl shadow-lg border border-border/50 flex items-center gap-4 w-fit">
                                                        <div className="flex -space-x-3">
                                                                <div className="w-10 h-10 rounded-full border-2 border-background bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                                                        GV
                                                                </div>
                                                                <div className="w-10 h-10 rounded-full border-2 border-background bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">
                                                                        HS
                                                                </div>
                                                                <div className="w-10 h-10 rounded-full border-2 border-background bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">
                                                                        PH
                                                                </div>
                                                        </div>
                                                        <div>
                                                                <p className="text-sm font-bold text-foreground">
                                                                        +2,400
                                                                </p>
                                                                <p className="text-xs font-medium text-muted-foreground">
                                                                        Trung
                                                                        tâm tin
                                                                        dùng
                                                                </p>
                                                        </div>
                                                </div>
                                        </section>

                                        {/* RIGHT SIDE - Authentication Card */}
                                        <section className="w-full max-w-[440px] lg:w-[45%] order-1 lg:order-2 z-20">
                                                <div className="soft-card p-8 sm:p-10 w-full relative overflow-hidden">
                                                        {/* Subtle top accent line */}
                                                        <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-primary to-blue-400" />

                                                        {/* Brand Header */}
                                                        <div className="flex flex-col items-center justify-center mb-8">
                                                                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4 transition-transform hover:rotate-12 hover:scale-110 duration-300">
                                                                        <GraduationCap
                                                                                className="w-8 h-8"
                                                                                strokeWidth={
                                                                                        2.5
                                                                                }
                                                                        />
                                                                </div>
                                                                <h2 className="text-2xl font-black text-foreground mb-1">
                                                                        Đăng
                                                                        nhập tài
                                                                        khoản
                                                                </h2>
                                                                <p className="text-sm text-muted-foreground font-medium">
                                                                        Nhập
                                                                        thông
                                                                        tin đăng
                                                                        nhập của
                                                                        bạn
                                                                </p>
                                                        </div>

                                                        <form
                                                                onSubmit={
                                                                        handleSubmit
                                                                }
                                                                className="space-y-5"
                                                                noValidate
                                                        >
                                                                {/* Email Field */}
                                                                <div className="space-y-1.5">
                                                                        <label
                                                                                htmlFor="login-email"
                                                                                className="text-sm font-bold text-foreground"
                                                                        >
                                                                                Email
                                                                                đăng
                                                                                nhập
                                                                        </label>
                                                                        <input
                                                                                id="login-email"
                                                                                type="email"
                                                                                autoComplete="email"
                                                                                placeholder="name@eduscale.com"
                                                                                value={
                                                                                        email
                                                                                }
                                                                                onChange={(
                                                                                        e,
                                                                                ) =>
                                                                                        setEmail(
                                                                                                e
                                                                                                        .target
                                                                                                        .value,
                                                                                        )
                                                                                }
                                                                                className="soft-input w-full px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 transition-all font-medium"
                                                                                required
                                                                        />
                                                                </div>

                                                                {/* Password Field */}
                                                                <div className="space-y-1.5">
                                                                        <div className="flex justify-between items-center">
                                                                                <label
                                                                                        htmlFor="login-password"
                                                                                        className="text-sm font-bold text-foreground"
                                                                                >
                                                                                        Mật
                                                                                        khẩu
                                                                                </label>
                                                                                <Link
                                                                                        href="#"
                                                                                        className="text-sm font-bold text-primary hover:text-blue-500 transition-colors"
                                                                                >
                                                                                        Quên
                                                                                        mật
                                                                                        khẩu?
                                                                                </Link>
                                                                        </div>
                                                                        <div className="relative">
                                                                                <input
                                                                                        id="login-password"
                                                                                        type={
                                                                                                showPassword
                                                                                                        ? "text"
                                                                                                        : "password"
                                                                                        }
                                                                                        autoComplete="current-password"
                                                                                        placeholder="••••••••"
                                                                                        value={
                                                                                                password
                                                                                        }
                                                                                        onChange={(
                                                                                                e,
                                                                                        ) =>
                                                                                                setPassword(
                                                                                                        e
                                                                                                                .target
                                                                                                                .value,
                                                                                                )
                                                                                        }
                                                                                        className="soft-input w-full pl-4 pr-12 py-3.5 text-foreground placeholder:text-muted-foreground/60 transition-all font-medium"
                                                                                        required
                                                                                />
                                                                                <button
                                                                                        type="button"
                                                                                        onClick={() =>
                                                                                                setShowPassword(
                                                                                                        !showPassword,
                                                                                                )
                                                                                        }
                                                                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
                                                                                        aria-label={
                                                                                                showPassword
                                                                                                        ? "Ẩn mật khẩu"
                                                                                                        : "Hiện mật khẩu"
                                                                                        }
                                                                                >
                                                                                        {showPassword ? (
                                                                                                <EyeOff className="w-4 h-4" />
                                                                                        ) : (
                                                                                                <Eye className="w-4 h-4" />
                                                                                        )}
                                                                                </button>
                                                                        </div>
                                                                </div>

                                                                {/* Submit Button */}
                                                                <button
                                                                        type="submit"
                                                                        disabled={
                                                                                isLoading
                                                                        }
                                                                        className="btn-soft w-full mt-6 py-4 flex items-center justify-center gap-2 text-[15px] disabled:opacity-70 disabled:cursor-not-allowed group"
                                                                >
                                                                        {isLoading ? (
                                                                                <>
                                                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                                                        Đang
                                                                                        kết
                                                                                        nối...
                                                                                </>
                                                                        ) : (
                                                                                <>
                                                                                        Vào
                                                                                        Không
                                                                                        Gian
                                                                                        Làm
                                                                                        Việc
                                                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                                                </>
                                                                        )}
                                                                </button>
                                                        </form>

                                                        {/* Enhanced Divider */}
                                                        <div className="my-8 relative flex items-center justify-center">
                                                                <div className="absolute w-full h-px bg-border/60" />
                                                                <div className="relative bg-card px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                                                        hoặc
                                                                        tiếp tục
                                                                        với
                                                                </div>
                                                        </div>

                                                        {/* Social Login */}
                                                        <div className="grid grid-cols-2 gap-3">
                                                                <button
                                                                        type="button"
                                                                        className="social-btn py-3 flex justify-center items-center gap-2"
                                                                >
                                                                        <svg
                                                                                className="w-4 h-4"
                                                                                viewBox="0 0 24 24"
                                                                                aria-hidden="true"
                                                                        >
                                                                                <path
                                                                                        fill="#4285F4"
                                                                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                                                />
                                                                                <path
                                                                                        fill="#34A853"
                                                                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                                                />
                                                                                <path
                                                                                        fill="#FBBC05"
                                                                                        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.61z"
                                                                                />
                                                                                <path
                                                                                        fill="#EA4335"
                                                                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                                                />
                                                                        </svg>
                                                                        <span className="text-sm">
                                                                                Google
                                                                        </span>
                                                                </button>
                                                                <button
                                                                        type="button"
                                                                        className="social-btn py-3 flex justify-center items-center gap-2"
                                                                >
                                                                        <svg
                                                                                className="w-4 h-4"
                                                                                viewBox="0 0 24 24"
                                                                                fill="currentColor"
                                                                                aria-hidden="true"
                                                                        >
                                                                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                                                        </svg>
                                                                        <span className="text-sm">
                                                                                GitHub
                                                                        </span>
                                                                </button>
                                                        </div>

                                                        <div className="mt-8 text-center">
                                                                <p className="text-sm font-bold text-muted-foreground">
                                                                        Chưa có
                                                                        tài
                                                                        khoản
                                                                        đăng
                                                                        nhập?{" "}
                                                                        <Link
                                                                                href="/register"
                                                                                className="text-primary hover:text-blue-500 hover:underline underline-offset-4 transition-all drop-shadow-sm"
                                                                        >
                                                                                Đăng
                                                                                ký
                                                                                miễn
                                                                                phí
                                                                        </Link>
                                                                </p>
                                                        </div>
                                                </div>
                                        </section>
                                </div>
                        </main>
                </>
        );
}

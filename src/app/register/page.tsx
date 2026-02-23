"use client";

import Link from "next/link";
import { useState } from "react";
import {
        ArrowRight,
        Eye,
        EyeOff,
        Loader2,
        Rocket,
        Code,
        BookOpen,
} from "lucide-react";

export default function RegisterPage() {
        const [showPassword, setShowPassword] = useState(false);
        const [isLoading, setIsLoading] = useState(false);

        const handleSubmit = (e: React.FormEvent) => {
                e.preventDefault();
                setIsLoading(true);
                setTimeout(() => {
                        window.location.href = "/app/demo-center/dashboard";
                }, 1400);
        };

        return (
                <>
                        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

        .font-friendly { font-family: 'Nunito', sans-serif; }

        .bg-bubbles {
          background-color: var(--background);
          background-image: 
            radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.08) 0%, transparent 25%),
            radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.08) 0%, transparent 25%),
            radial-gradient(circle at 60% 50%, rgba(96, 165, 250, 0.03) 0%, transparent 40%);
        }

        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
        }
        .animate-float {
          animation: gentle-float 7s ease-in-out infinite;
        }

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

        .soft-card {
          background-color: var(--card);
          border-radius: calc(var(--radius) * 1.5);
          box-shadow: 0 20px 40px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02);
          border: 1px solid rgba(255,255,255,0.5);
        }
      `}</style>

                        <main className="min-h-screen w-full flex items-center justify-center p-4 lg:p-8 bg-bubbles font-friendly text-foreground selection:bg-primary/20">
                                <div className="w-full max-w-6xl flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-16 relative">
                                        {/* Decorative Background */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />

                                        {/* RIGHT SIDE - Value Proposition */}
                                        <section className="w-full lg:w-[45%] flex flex-col justify-center order-2 lg:order-1 relative z-10 px-4 lg:px-0">
                                                <div className="animate-float inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-bold text-primary shadow-sm w-fit mb-6 border border-primary/10">
                                                        <Rocket className="w-4 h-4" />
                                                        <span>
                                                                Dùng thử 14 ngày
                                                                miễn phí
                                                        </span>
                                                </div>

                                                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-foreground leading-[1.1] tracking-tight mb-6">
                                                        Nâng tầm{" "}
                                                        <br className="hidden lg:block" />
                                                        <span className="text-primary relative inline-block">
                                                                Tổ chức đào tạo
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

                                                <p className="text-lg text-muted-foreground font-medium mb-8 max-w-md leading-relaxed">
                                                        Tạo tài khoản học viện
                                                        của bạn ngay hôm nay.
                                                        Vận hành công tác giảng
                                                        dạy trơn tru chỉ với vài
                                                        click.
                                                </p>

                                                <div className="space-y-4">
                                                        <div className="flex items-center gap-4 bg-card p-4 rounded-(--radius) shadow-sm border border-border/50">
                                                                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                                                                        <Code className="w-5 h-5" />
                                                                </div>
                                                                <div>
                                                                        <h3 className="font-bold text-sm text-foreground">
                                                                                Không
                                                                                cần
                                                                                thẻ
                                                                                tín
                                                                                dụng
                                                                        </h3>
                                                                        <p className="text-xs text-muted-foreground font-medium">
                                                                                Bắt
                                                                                đầu
                                                                                ngay,
                                                                                không
                                                                                ràng
                                                                                buộc
                                                                                rườm
                                                                                rà.
                                                                        </p>
                                                                </div>
                                                        </div>
                                                        <div className="flex items-center gap-4 bg-card p-4 rounded-(--radius) shadow-sm border border-border/50">
                                                                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
                                                                        <BookOpen className="w-5 h-5" />
                                                                </div>
                                                                <div>
                                                                        <h3 className="font-bold text-sm text-foreground">
                                                                                Hỗ
                                                                                trợ
                                                                                thiết
                                                                                lập
                                                                                1-1
                                                                        </h3>
                                                                        <p className="text-xs text-muted-foreground font-medium">
                                                                                Đội
                                                                                ngũ
                                                                                chúng
                                                                                tôi
                                                                                luôn
                                                                                đồng
                                                                                hành
                                                                                cùng
                                                                                bạn.
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </section>

                                        {/* LEFT SIDE - Registration Card */}
                                        <section className="w-full max-w-[460px] lg:w-[45%] order-1 lg:order-2 z-20">
                                                <div className="soft-card p-8 sm:p-10 w-full relative overflow-hidden">
                                                        <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-blue-400 to-primary" />

                                                        <div className="mb-8">
                                                                <h2 className="text-2xl font-black text-foreground mb-1">
                                                                        Đăng ký
                                                                        tài
                                                                        khoản
                                                                </h2>
                                                                <p className="text-sm text-muted-foreground font-medium">
                                                                        Hoàn tất
                                                                        vài
                                                                        thông
                                                                        tin cơ
                                                                        bản
                                                                </p>
                                                        </div>

                                                        <form
                                                                onSubmit={
                                                                        handleSubmit
                                                                }
                                                                className="space-y-4"
                                                                noValidate
                                                        >
                                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                        <div className="space-y-1.5">
                                                                                <label
                                                                                        htmlFor="reg-name"
                                                                                        className="text-sm font-bold text-foreground"
                                                                                >
                                                                                        Họ
                                                                                        và
                                                                                        tên
                                                                                </label>
                                                                                <input
                                                                                        id="reg-name"
                                                                                        type="text"
                                                                                        placeholder="Nguyễn Văn A"
                                                                                        className="soft-input w-full px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 transition-all font-medium"
                                                                                        required
                                                                                />
                                                                        </div>
                                                                        <div className="space-y-1.5">
                                                                                <label
                                                                                        htmlFor="reg-phone"
                                                                                        className="text-sm font-bold text-foreground"
                                                                                >
                                                                                        Số
                                                                                        điện
                                                                                        thoại
                                                                                </label>
                                                                                <input
                                                                                        id="reg-phone"
                                                                                        type="tel"
                                                                                        placeholder="09xx xxx xxx"
                                                                                        className="soft-input w-full px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 transition-all font-medium"
                                                                                        required
                                                                                />
                                                                        </div>
                                                                </div>

                                                                <div className="space-y-1.5">
                                                                        <label
                                                                                htmlFor="reg-center"
                                                                                className="text-sm font-bold text-foreground"
                                                                        >
                                                                                Tên
                                                                                trung
                                                                                tâm
                                                                        </label>
                                                                        <input
                                                                                id="reg-center"
                                                                                type="text"
                                                                                placeholder="EduScale Academy"
                                                                                className="soft-input w-full px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 transition-all font-medium"
                                                                                required
                                                                        />
                                                                </div>

                                                                <div className="space-y-1.5">
                                                                        <label
                                                                                htmlFor="reg-email"
                                                                                className="text-sm font-bold text-foreground"
                                                                        >
                                                                                Email
                                                                                công
                                                                                việc
                                                                        </label>
                                                                        <input
                                                                                id="reg-email"
                                                                                type="email"
                                                                                placeholder="name@eduscale.com"
                                                                                className="soft-input w-full px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 transition-all font-medium"
                                                                                required
                                                                        />
                                                                </div>

                                                                <div className="space-y-1.5">
                                                                        <label
                                                                                htmlFor="reg-password"
                                                                                className="text-sm font-bold text-foreground"
                                                                        >
                                                                                Mật
                                                                                khẩu
                                                                        </label>
                                                                        <div className="relative">
                                                                                <input
                                                                                        id="reg-password"
                                                                                        type={
                                                                                                showPassword
                                                                                                        ? "text"
                                                                                                        : "password"
                                                                                        }
                                                                                        placeholder="Ít nhất 8 ký tự"
                                                                                        className="soft-input w-full pl-4 pr-12 py-3.5 text-foreground placeholder:text-muted-foreground/60 transition-all font-medium"
                                                                                        required
                                                                                        minLength={
                                                                                                8
                                                                                        }
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

                                                                <button
                                                                        type="submit"
                                                                        disabled={
                                                                                isLoading
                                                                        }
                                                                        className="btn-soft w-full mt-6 py-4 flex items-center justify-center gap-2 text-[15px] disabled:opacity-70 disabled:cursor-not-allowed group"
                                                                >
                                                                        {isLoading ? (
                                                                                <>
                                                                                        <Loader2 className="w-5 h-5 animate-spin" />{" "}
                                                                                        Đang
                                                                                        tạo
                                                                                        tài
                                                                                        khoản...
                                                                                </>
                                                                        ) : (
                                                                                <>
                                                                                        Tạo
                                                                                        Tài
                                                                                        Khoản
                                                                                        Miễn
                                                                                        Phí{" "}
                                                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                                                </>
                                                                        )}
                                                                </button>
                                                        </form>

                                                        <div className="mt-8 text-center">
                                                                <p className="text-xs text-muted-foreground/80 font-medium mb-4">
                                                                        Bằng
                                                                        việc
                                                                        đăng ký,
                                                                        bạn đồng
                                                                        ý với{" "}
                                                                        <Link
                                                                                href="#"
                                                                                className="font-bold border-b border-border hover:border-muted-foreground transition-colors"
                                                                        >
                                                                                Điều
                                                                                khoản
                                                                        </Link>{" "}
                                                                        &{" "}
                                                                        <Link
                                                                                href="#"
                                                                                className="font-bold border-b border-border hover:border-muted-foreground transition-colors"
                                                                        >
                                                                                Bảo
                                                                                mật
                                                                        </Link>
                                                                </p>
                                                                <p className="text-sm font-bold text-muted-foreground">
                                                                        Đã có
                                                                        tài
                                                                        khoản?{" "}
                                                                        <Link
                                                                                href="/login"
                                                                                className="text-primary hover:text-blue-500 hover:underline underline-offset-4 transition-all drop-shadow-sm"
                                                                        >
                                                                                Đăng
                                                                                nhập
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

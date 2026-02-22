"use client";

import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Lock,
  ArrowLeft,
  User,
  Phone,
  BookOpen,
  Check,
} from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-muted/30 py-12 md:py-20">
      {/* Background blur elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[5%] right-[10%] w-[35%] h-[35%] bg-primary/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[5%] left-[10%] w-[35%] h-[35%] bg-accent/10 blur-[130px] rounded-full" />
      </div>

      <div className="w-full max-w-[560px] animate-in slide-in-from-bottom-6 duration-500">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Quay lại trang chủ
        </Link>

        {/* Register Card */}
        <div className="bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-2xl shadow-primary/5">
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
            <h1 className="text-2xl font-bold mb-2">
              Bắt đầu dùng thử 14 ngày
            </h1>
            <p className="text-secondary text-sm">
              Trải nghiệm đầy đủ tính năng, không cần thẻ tín dụng
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Họ và tên</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full pl-12 pr-5 py-4 rounded-2xl bg-muted/50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm"
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Số điện thoại</label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="09xx xxx xxx"
                    className="w-full pl-12 pr-5 py-4 rounded-2xl bg-muted/50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm"
                  />
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Tên Trung tâm</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Trung tâm Luyện thi EduScale"
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-muted/50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm"
                />
                <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Email công việc</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-muted/50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Mật khẩu</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Ít nhất 8 ký tự"
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-muted/50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-start gap-3 mb-6 ml-1">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 accent-primary"
                />
                <label
                  htmlFor="terms"
                  className="text-xs text-secondary leading-relaxed"
                >
                  Tôi đồng ý với{" "}
                  <Link
                    href="#"
                    className="font-bold text-primary hover:underline"
                  >
                    Điều khoản dịch vụ
                  </Link>{" "}
                  và{" "}
                  <Link
                    href="#"
                    className="font-bold text-primary hover:underline"
                  >
                    Chính sách bảo mật
                  </Link>{" "}
                  của EduScale.
                </label>
              </div>

              <button className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 transition-all duration-300 transform active:scale-[0.98]">
                Bắt đầu dùng thử miễn phí
              </button>
            </div>
          </form>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-100 pt-8">
            <div className="flex items-center gap-2 text-[10px] md:text-xs text-secondary">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              Không yêu cầu thẻ tín dụng
            </div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs text-secondary">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              Hủy bất cứ lúc nào
            </div>
          </div>

          <p className="text-center mt-10 text-sm text-secondary">
            Đã có tài khoản?{" "}
            <Link
              href="/login"
              className="font-bold text-primary hover:underline"
            >
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

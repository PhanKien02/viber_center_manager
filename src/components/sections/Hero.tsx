"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, PlayCircle, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-violet-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-4 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center -space-x-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full bg-primary border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-primary">
              Tin dùng bởi hơn 200+ trung tâm luyện thi
            </span>
            <div className="flex items-center gap-0.5 ml-2 border-l pl-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-bold">4.9/5</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 fill-mode-both text-slate-900">
            Nâng tầm quản lý <br />
            <span className="text-gradient">Trung tâm Luyện thi</span> của bạn
          </h1>

          {/* Subheader */}
          <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl font-medium animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 fill-mode-both leading-relaxed">
            Tự động hóa học phí, tối ưu lịch dạy và kết nối phụ huynh tức thì.
            Giải pháp toàn diện giúp bạn tập trung vào chất lượng giảng dạy.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
            <Link
              href="/register"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full text-xl font-extrabold shadow-2xl shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-500/40 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Dùng thử miễn phí 14 ngày
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="w-full sm:w-auto bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer hover:bg-slate-50 hover:-translate-y-1">
              <PlayCircle className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
              Xem Demo trực tiếp
            </button>
          </div>

          {/* Product Preview */}
          <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50 glass shadow-black/10 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-400 fill-mode-both">
            <Image
              src="/images/dashboard.png"
              alt="EduScale Dashboard Mockup"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

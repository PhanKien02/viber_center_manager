"use client";

import {
        User,
        Mail,
        Phone,
        Shield,
        Camera,
        Check,
        Lock,
        Bell,
        Globe,
        ChevronRight,
        ArrowLeft
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
export async function generateStaticParams() {
        return [
                { center: 'hn' },
                { center: 'hcm' },
                { center: 'dn' },
        ]
}
export default function ProfilePage() {
        const params = useParams();
        const centerSlug = params["center"] as string;
        const [activeTab, setActiveTab] = useState("general");
        const [isSaved, setIsSaved] = useState(false);

        const handleSave = () => {
                setIsSaved(true);
                setTimeout(() => setIsSaved(false), 3000);
        };

        return (
                <div className="min-h-screen bg-slate-50">
                        {/* Navbar */}
                        <header className="bg-white border-b sticky top-0 z-30">
                                <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                                <Link
                                                        href={`/app/${centerSlug}/dashboard`}
                                                        className="p-2.5 hover:bg-slate-50 rounded-2xl text-slate-400 hover:text-primary transition-all"
                                                >
                                                        <ArrowLeft className="w-6 h-6" />
                                                </Link>
                                                <div>
                                                        <h1 className="text-xl font-bold font-heading">Hồ sơ cá nhân</h1>
                                                        <p className="text-[10px] text-secondary uppercase font-bold tracking-widest">{centerSlug}</p>
                                                </div>
                                        </div>
                                        <button
                                                onClick={handleSave}
                                                className={`px-8 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95 ${isSaved ? 'bg-green-500 text-white shadow-green-100' : 'bg-primary text-white shadow-primary/20'
                                                        }`}
                                        >
                                                {isSaved ? <Check className="w-5 h-5" /> : null}
                                                {isSaved ? 'Đã lưu' : 'Lưu thay đổi'}
                                        </button>
                                </div>
                        </header>

                        <main className="max-w-[1200px] mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                                {/* Sidebar Menu */}
                                <aside className="lg:col-span-4 space-y-6">
                                        <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm overflow-hidden relative">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full" />

                                                <div className="relative group mb-6 flex flex-col items-center">
                                                        <div className="w-32 h-32 rounded-full bg-slate-100 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden relative group">
                                                                <User className="w-16 h-16 text-slate-300" />
                                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                                                                        <Camera className="w-8 h-8 text-white" />
                                                                </div>
                                                        </div>
                                                        <h2 className="mt-4 text-xl font-bold">Admin EduScale</h2>
                                                        <p className="text-sm text-secondary font-medium uppercase tracking-wider">Quản trị viên hệ thống</p>
                                                </div>

                                                <nav className="space-y-1">
                                                        <button
                                                                onClick={() => setActiveTab("general")}
                                                                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-sm ${activeTab === "general" ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'
                                                                        }`}
                                                        >
                                                                <div className="flex items-center gap-3">
                                                                        <User className="w-4 h-4" />
                                                                        Thông tin chung
                                                                </div>
                                                                <ChevronRight className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                                onClick={() => setActiveTab("security")}
                                                                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-sm ${activeTab === "security" ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'
                                                                        }`}
                                                        >
                                                                <div className="flex items-center gap-3">
                                                                        <Lock className="w-4 h-4" />
                                                                        Bảo mật & Mật khẩu
                                                                </div>
                                                                <ChevronRight className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                                onClick={() => setActiveTab("notifications")}
                                                                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-sm ${activeTab === "notifications" ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'
                                                                        }`}
                                                        >
                                                                <div className="flex items-center gap-3">
                                                                        <Bell className="w-4 h-4" />
                                                                        Thông báo
                                                                </div>
                                                                <ChevronRight className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                                onClick={() => setActiveTab("language")}
                                                                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-sm ${activeTab === "language" ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'
                                                                        }`}
                                                        >
                                                                <div className="flex items-center gap-3">
                                                                        <Globe className="w-4 h-4" />
                                                                        Ngôn ngữ & Vùng
                                                                </div>
                                                                <ChevronRight className="w-4 h-4" />
                                                        </button>
                                                </nav>
                                        </div>

                                        <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:rotate-0 transition-transform">
                                                        <Shield className="w-24 h-24" />
                                                </div>
                                                <h3 className="text-lg font-bold mb-2">Xác thực 2 lớp</h3>
                                                <p className="text-white/60 text-xs leading-relaxed mb-6">
                                                        Bảo vệ tài khoản của bạn bằng cách thêm một lớp bảo mật bổ sung.
                                                </p>
                                                <button className="w-full bg-white/10 hover:bg-white text-white hover:text-slate-900 py-3 rounded-xl font-bold text-xs transition-all">
                                                        Kích hoạt ngay
                                                </button>
                                        </div>
                                </aside>

                                {/* Content Area */}
                                <section className="lg:col-span-8">
                                        <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-200 shadow-sm h-full">
                                                {activeTab === "general" && (
                                                        <motion.div
                                                                initial={{ opacity: 0, x: 20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                className="space-y-8"
                                                        >
                                                                <div>
                                                                        <h2 className="text-2xl font-bold mb-2">Thông tin chung</h2>
                                                                        <p className="text-sm text-secondary">Cập nhật thông tin cá nhân của bạn để mọi người trong trung tâm có thể liên lạc.</p>
                                                                </div>

                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                                        <div className="space-y-2">
                                                                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                                                                                        <User className="w-3 h-3" /> Họ và tên
                                                                                </label>
                                                                                <input
                                                                                        type="text"
                                                                                        defaultValue="Admin EduScale"
                                                                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                                                                                />
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                                                                                        <Mail className="w-3 h-3" /> Địa chỉ Email
                                                                                </label>
                                                                                <input
                                                                                        type="email"
                                                                                        defaultValue="admin@eduscale.com"
                                                                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                                                                                />
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                                                                                        <Phone className="w-3 h-3" /> Số điện thoại
                                                                                </label>
                                                                                <input
                                                                                        type="tel"
                                                                                        defaultValue="0901 234 567"
                                                                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                                                                                />
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                                                                                        <Shield className="w-3 h-3" /> Vai trò hệ thống
                                                                                </label>
                                                                                <input
                                                                                        disabled
                                                                                        type="text"
                                                                                        defaultValue="Super Admin"
                                                                                        className="w-full px-6 py-4 rounded-2xl bg-slate-100 border border-slate-100 outline-none text-slate-400 text-sm font-bold opacity-70 cursor-not-allowed"
                                                                                />
                                                                        </div>
                                                                </div>

                                                                <div className="space-y-2">
                                                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Tiểu sử ngắn</label>
                                                                        <textarea
                                                                                rows={4}
                                                                                defaultValue="Phụ trách quản trị toàn diện hệ thống trung tâm đào tạo 5 Sao."
                                                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium resize-none"
                                                                        />
                                                                </div>
                                                        </motion.div>
                                                )}

                                                {activeTab === "security" && (
                                                        <motion.div
                                                                initial={{ opacity: 0, x: 20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                className="space-y-8"
                                                        >
                                                                <div>
                                                                        <h2 className="text-2xl font-bold mb-2">Bảo mật</h2>
                                                                        <p className="text-sm text-secondary">Thay đổi mật khẩu và quản lý các thiết bị đã đăng nhập.</p>
                                                                </div>

                                                                <div className="space-y-6">
                                                                        <div className="space-y-2">
                                                                                <label className="text-xs font-bold text-slate-600">Mật khẩu hiện tại</label>
                                                                                <input
                                                                                        type="password"
                                                                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm"
                                                                                />
                                                                        </div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                                <div className="space-y-2">
                                                                                        <label className="text-xs font-bold text-slate-600">Mật khẩu mới</label>
                                                                                        <input
                                                                                                type="password"
                                                                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm"
                                                                                        />
                                                                                </div>
                                                                                <div className="space-y-2">
                                                                                        <label className="text-xs font-bold text-slate-600">Xác nhận mật khẩu</label>
                                                                                        <input
                                                                                                type="password"
                                                                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm"
                                                                                        />
                                                                                </div>
                                                                        </div>
                                                                </div>

                                                                <div className="pt-8 border-t border-slate-50">
                                                                        <h3 className="font-bold mb-4">Lịch sử đăng nhập</h3>
                                                                        <div className="space-y-4">
                                                                                {[
                                                                                        { id: 1, device: "Chrome / Windows 11", ip: "113.161.45.22", status: "Đang hoạt động", color: "text-green-500" },
                                                                                        { id: 2, device: "iPhone 15 Pro / Safari", ip: "27.72.3.15", status: "2 giờ trước", color: "text-slate-400" },
                                                                                ].map((login) => (
                                                                                        <div key={login.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                                                                                <div className="flex items-center gap-4">
                                                                                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                                                                                                                <Globe className="w-5 h-5 text-slate-400" />
                                                                                                        </div>
                                                                                                        <div>
                                                                                                                <p className="text-sm font-bold text-slate-900">{login.device}</p>
                                                                                                                <p className="text-xs text-secondary">{login.ip}</p>
                                                                                                        </div>
                                                                                                </div>
                                                                                                <span className={`text-[10px] font-bold uppercase tracking-widest ${login.color}`}>{login.status}</span>
                                                                                        </div>
                                                                                ))}
                                                                        </div>
                                                                </div>
                                                        </motion.div>
                                                )}
                                        </div>
                                </section>
                        </main>
                </div>
        );
}

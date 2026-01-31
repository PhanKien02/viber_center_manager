"use client";

import {
        Settings,
        Building2,
        Palette,
        Globe,
        CreditCard,
        Zap,
        Check,
        ArrowLeft,
        ShieldCheck,
        Database,
        User
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SystemSettingsPage() {
        const params = useParams();
        const centerSlug = params["center"] as string;
        const [activeSection, setActiveSection] = useState("center-info");
        const [isSaving, setIsSaving] = useState(false);

        const handleSave = () => {
                setIsSaving(true);
                setTimeout(() => setIsSaving(false), 2000);
        };

        return (
                <div className="min-h-screen bg-slate-50">
                        {/* Navbar */}
                        <header className="bg-white border-b sticky top-0 z-30 shadow-sm">
                                <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                                <Link
                                                        href={`/app/${centerSlug}/dashboard`}
                                                        className="p-2.5 hover:bg-slate-50 rounded-2xl text-slate-400 hover:text-primary transition-all"
                                                >
                                                        <ArrowLeft className="w-6 h-6" />
                                                </Link>
                                                <div>
                                                        <h1 className="text-xl font-bold font-heading">Cài đặt hệ thống</h1>
                                                        <p className="text-[10px] text-secondary uppercase font-bold tracking-widest leading-none">Cấu hình trung tâm <span className="text-primary">{centerSlug}</span></p>
                                                </div>
                                        </div>
                                        <button
                                                onClick={handleSave}
                                                className={`px-8 py-3.5 rounded-2xl font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95 ${isSaving ? 'bg-green-500 text-white shadow-green-200' : 'bg-slate-900 text-white shadow-slate-200 hover:bg-slate-800'
                                                        }`}
                                        >
                                                {isSaving ? <Check className="w-5 h-5 animate-in zoom-in duration-300" /> : <Zap className="w-5 h-5" />}
                                                {isSaving ? 'Đã lưu cấu hình' : 'Lưu cài đặt'}
                                        </button>
                                </div>
                        </header>

                        <main className="max-w-[1400px] mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8">
                                {/* Settings Navigation */}
                                <nav className="w-full lg:w-80 flex flex-col gap-2 shrink-0">
                                        {[
                                                { id: "center-info", label: "Thông tin trung tâm", icon: Building2, desc: "Tên, Logo, Địa chỉ" },
                                                { id: "branding", label: "Thương hiệu & Giao diện", icon: Palette, desc: "Màu sắc, Font chữ" },
                                                { id: "localization", label: "Vùng & Ngôn ngữ", icon: Globe, desc: "VN, USD, UTC+7" },
                                                { id: "payment", label: "Thanh toán & Học phí", icon: CreditCard, desc: "Cổng thanh toán, VAT" },
                                                { id: "roles", label: "Phân quyền & Bảo mật", icon: ShieldCheck, desc: "Admin, Giáo viên" },
                                                { id: "backup", label: "Dữ liệu & Sao lưu", icon: Database, desc: "Export, Import, Cloud" },
                                        ].map((item) => (
                                                <button
                                                        key={item.id}
                                                        onClick={() => setActiveSection(item.id)}
                                                        className={`flex items-center gap-4 p-5 rounded-[28px] text-left transition-all border-2 ${activeSection === item.id
                                                                        ? 'bg-white border-primary shadow-xl shadow-primary/5 pointer-events-none'
                                                                        : 'bg-transparent border-transparent hover:bg-white hover:border-slate-100 hover:shadow-sm'
                                                                }`}
                                                >
                                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${activeSection === item.id ? 'bg-primary text-white' : 'bg-slate-200/50 text-slate-400 group-hover:bg-slate-200'
                                                                }`}>
                                                                <item.icon className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                                <p className={`font-bold text-sm ${activeSection === item.id ? 'text-slate-900' : 'text-slate-500'}`}>{item.label}</p>
                                                                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{item.desc}</p>
                                                        </div>
                                                </button>
                                        ))}
                                </nav>

                                {/* Settings Content */}
                                <div className="flex-1">
                                        <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-200 shadow-sm min-h-[600px]">
                                                <AnimatePresence mode="wait">
                                                        {activeSection === "center-info" && (
                                                                <motion.div
                                                                        key="center-info"
                                                                        initial={{ opacity: 0, y: 10 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        exit={{ opacity: 0, y: -10 }}
                                                                        className="space-y-10"
                                                                >
                                                                        <div>
                                                                                <h2 className="text-3xl font-bold mb-3">Thông tin trung tâm</h2>
                                                                                <p className="text-slate-500">Cấu hình thông tin cơ bản của hệ thống trung tâm đào tạo của bạn.</p>
                                                                        </div>

                                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                                                <div className="space-y-4">
                                                                                        <div className="space-y-2">
                                                                                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Tên hệ thống trung tâm</label>
                                                                                                <input
                                                                                                        type="text"
                                                                                                        defaultValue="Hệ thống đào tạo 5 Sao"
                                                                                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-bold"
                                                                                                />
                                                                                        </div>
                                                                                        <div className="space-y-2">
                                                                                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Mã định danh (Slug)</label>
                                                                                                <div className="relative">
                                                                                                        <input
                                                                                                                disabled
                                                                                                                type="text"
                                                                                                                defaultValue={centerSlug}
                                                                                                                className="w-full px-6 py-4 rounded-2xl bg-slate-100 border border-slate-200 text-slate-400 text-sm font-bold opacity-70 cursor-not-allowed pl-20"
                                                                                                        />
                                                                                                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 font-bold text-sm">app /</span>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>

                                                                                <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-[32px] border-2 border-dashed border-slate-200 group hover:border-primary transition-colors cursor-pointer">
                                                                                        <div className="w-20 h-20 bg-white rounded-2xl shadow-sm mb-4 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                                                                <Building2 className="w-10 h-10" />
                                                                                        </div>
                                                                                        <p className="text-xs font-bold text-slate-500 mb-1 group-hover:text-primary transition-colors">Tải lên Logo trung tâm</p>
                                                                                        <p className="text-[10px] text-slate-400">Khuyến nghị: 512x512px, định dạng PNG</p>
                                                                                </div>
                                                                        </div>

                                                                        <div className="space-y-4">
                                                                                <div className="space-y-2">
                                                                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Văn phòng chính</label>
                                                                                        <input
                                                                                                type="text"
                                                                                                defaultValue="72 Lê Thánh Tôn, Bến Nghé, Quận 1, TP. Hồ Chí Minh"
                                                                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                                                                                        />
                                                                                </div>
                                                                                <div className="grid grid-cols-2 gap-6">
                                                                                        <div className="space-y-2">
                                                                                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email liên hệ</label>
                                                                                                <input
                                                                                                        type="email"
                                                                                                        defaultValue="contact@5sao.edu.vn"
                                                                                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                                                                                                />
                                                                                        </div>
                                                                                        <div className="space-y-2">
                                                                                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Hotline</label>
                                                                                                <input
                                                                                                        type="tel"
                                                                                                        defaultValue="028 1234 5678"
                                                                                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                                                                                                />
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </motion.div>
                                                        )}

                                                        {activeSection === "branding" && (
                                                                <motion.div
                                                                        key="branding"
                                                                        initial={{ opacity: 0, y: 10 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        exit={{ opacity: 0, y: -10 }}
                                                                        className="space-y-10"
                                                                >
                                                                        <div>
                                                                                <h2 className="text-3xl font-bold mb-3">Thương hiệu & Giao diện</h2>
                                                                                <p className="text-slate-500">Tùy chỉnh màu sắc cá nhân hóa cho thương hiệu của bạn.</p>
                                                                        </div>

                                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                                                <div className="space-y-6">
                                                                                        <div className="space-y-4">
                                                                                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Màu chủ đạo (Primary Color)</label>
                                                                                                <div className="flex flex-wrap gap-4">
                                                                                                        {['#6366f1', '#ec4899', '#f97316', '#22c55e', '#0ea5e9'].map((color) => (
                                                                                                                <div
                                                                                                                        key={color}
                                                                                                                        className="w-12 h-12 rounded-2xl cursor-pointer border-4 border-white shadow-sm ring-2 ring-transparent hover:ring-slate-200 transition-all flex items-center justify-center p-0.5"
                                                                                                                        style={{ backgroundColor: color }}
                                                                                                                >
                                                                                                                        {color === '#6366f1' && <Check className="w-5 h-5 text-white" />}
                                                                                                                </div>
                                                                                                        ))}
                                                                                                        <div className="w-12 h-12 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 cursor-pointer hover:border-primary hover:text-primary transition-all">
                                                                                                                <Settings className="w-4 h-4" />
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>

                                                                                        <div className="space-y-2">
                                                                                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Font chữ hệ thống</label>
                                                                                                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-bold">
                                                                                                        <option>Inter (Mặc định)</option>
                                                                                                        <option>Roboto</option>
                                                                                                        <option>Lexend</option>
                                                                                                        <option>Outfit</option>
                                                                                                </select>
                                                                                        </div>
                                                                                </div>

                                                                                <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
                                                                                        <div className="absolute top-0 right-0 p-4 opacity-5 translate-x-1/4 -translate-y-1/4 scale-150">
                                                                                                <Palette className="w-48 h-48" />
                                                                                        </div>
                                                                                        <h3 className="text-lg font-bold mb-4">Mẫu Dashboard</h3>
                                                                                        <div className="space-y-3 relative z-10">
                                                                                                <div className="bg-white/10 h-10 rounded-xl w-full border border-white/10" />
                                                                                                <div className="flex gap-3">
                                                                                                        <div className="bg-primary h-20 rounded-xl flex-1 shadow-lg shadow-primary/20" />
                                                                                                        <div className="bg-white/5 h-20 rounded-xl flex-1 border border-white/5" />
                                                                                                </div>
                                                                                                <div className="bg-white/10 h-6 rounded-lg w-2/3 border border-white/10" />
                                                                                        </div>
                                                                                        <p className="mt-6 text-[10px] text-white/50 uppercase font-bold tracking-widest">Xem trước giao diện</p>
                                                                                </div>
                                                                        </div>
                                                                </motion.div>
                                                        )}
                                                </AnimatePresence>
                                        </div>
                                </div>
                        </main>
                </div>
        );
}

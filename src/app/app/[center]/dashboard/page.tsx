"use client";

import { useState } from "react";
import {
        Plus,
        MapPin,
        Phone,
        Bell,
        Search,
        Edit2,
        Trash2,
        CheckCircle2,
        AlertCircle,
        Clock,
        User,
        GraduationCap,
        Users,
        BookOpen,
        ChevronRight,
        Settings,
        LogOut
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

interface Branch {
        id: number;
        name: string;
        slug: string;
        address: string;
        phone: string;
        students: number;
        teachers: number;
        status: string;
}

// Mock Data
const initialBranches: Branch[] = [
        {
                id: 1,
                name: "Cơ sở Quận 1 - EduScale",
                slug: "quan-1",
                address: "72 Lê Thánh Tôn, Bến Nghé, Quận 1, TP. HCM",
                phone: "028 1234 5678",
                students: 125,
                teachers: 12,
                status: "Hoạt động",
        },
        {
                id: 2,
                name: "Cơ sở Bình Thạnh",
                slug: "binh-thanh",
                address: "150 Điện Biên Phủ, Phường 25, Bình Thạnh, TP. HCM",
                phone: "028 8888 9999",
                students: 84,
                teachers: 8,
                status: "Hoạt động",
        },
];

const notifications = [
        {
                id: 1,
                type: "success",
                title: "Thu học phí thành công",
                time: "2 phút trước",
                desc: "Học viên Nguyễn An đã đóng phí khóa Luyện thi IELTS.",
        },
        {
                id: 2,
                type: "warning",
                title: "Lớp học chưa điểm danh",
                time: "15 phút trước",
                desc: "Lớp Toán 12-A1 chưa được giáo viên điểm danh.",
        },
        {
                id: 3,
                type: "info",
                title: "Lịch dạy mới",
                time: "1 giờ trước",
                desc: "Gv. Trần Bình đã cập nhật lịch dạy cho tuần sau.",
        },
        {
                id: 4,
                type: "success",
                title: "Báo cáo doanh thu tháng",
                time: "3 giờ trước",
                desc: "Hệ thống đã hoàn tất tính toán doanh thu tháng 1.",
        },
];

export default function CenterDashboardBranches() {
        const params = useParams();
        const centerSlug = params["center"] as string;

        const [branches, setBranches] = useState<Branch[]>(initialBranches);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [isProfileOpen, setIsProfileOpen] = useState(false);
        const router = useRouter();
        const [editingBranch, setEditingBranch] = useState<Branch | null>(null);
        const [formData, setFormData] = useState({ name: "", address: "", phone: "" });

        const handleOpenModal = (branch: Branch | null = null) => {
                if (branch) {
                        setEditingBranch(branch);
                        setFormData({ name: branch.name, address: branch.address, phone: branch.phone });
                } else {
                        setEditingBranch(null);
                        setFormData({ name: "", address: "", phone: "" });
                }
                setIsModalOpen(true);
        };

        const handleSave = (e: React.FormEvent) => {
                e.preventDefault();
                if (editingBranch) {
                        setBranches(branches.map(b => b.id === editingBranch.id ? { ...b, ...formData } : b));
                } else {
                        const newBranch = {
                                id: Date.now(),
                                slug: formData.name.toLowerCase().replace(/ /g, "-"),
                                ...formData,
                                students: 0,
                                teachers: 0,
                                status: "Đang khởi tạo",
                        };
                        setBranches([...branches, newBranch]);
                }
                setIsModalOpen(false);
        };

        return (
                <div className="min-h-screen bg-slate-50 flex flex-col">
                        {/* Dashboard Header */}
                        <header className="bg-white border-b sticky top-0 z-30">
                                <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
                                        <Link href="/" className="flex items-center gap-2">
                                                <div className="bg-primary p-1.5 rounded-lg">
                                                        <GraduationCap className="w-5 h-5 text-white" />
                                                </div>
                                                <span className="text-xl font-bold font-heading">
                                                        Edu<span className="text-primary">Scale</span>
                                                </span>
                                        </Link>

                                        <div className="flex items-center gap-4 md:gap-6">
                                                <button className="p-2 text-secondary hover:bg-muted rounded-full relative transition-colors">
                                                        <Bell className="w-5 h-5" />
                                                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                                                </button>
                                                <div className="h-8 w-[1px] bg-slate-200 hidden md:block"></div>

                                                <div className="relative">
                                                        <div
                                                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                                                className="flex items-center gap-3 cursor-pointer group"
                                                        >
                                                                <div className="text-right hidden sm:block">
                                                                        <p className="text-sm font-bold leading-none mb-1 group-hover:text-primary transition-colors">Quản trị viên</p>
                                                                        <p className="text-[10px] text-secondary font-medium uppercase tracking-wider">{centerSlug}</p>
                                                                </div>
                                                                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-primary transition-all overflow-hidden">
                                                                        <User className="w-6 h-6 text-slate-400" />
                                                                </div>
                                                        </div>

                                                        <AnimatePresence>
                                                                {isProfileOpen && (
                                                                        <>
                                                                                <div
                                                                                        className="fixed inset-0 z-10"
                                                                                        onClick={() => setIsProfileOpen(false)}
                                                                                />
                                                                                <motion.div
                                                                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                                                        className="absolute right-0 mt-3 w-64 bg-white rounded-3xl shadow-2xl border border-slate-100 p-2 z-20"
                                                                                >
                                                                                        <div className="p-4 border-b border-slate-50 mb-2">
                                                                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Hệ thống trung tâm</p>
                                                                                                <p className="text-sm font-bold text-slate-900 capitalize">{centerSlug.replace(/-/g, ' ')}</p>
                                                                                        </div>
                                                                                        <div className="space-y-1">
                                                                                                <button
                                                                                                        onClick={() => router.push(`/app/${centerSlug}/profile`)}
                                                                                                        className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 text-slate-600 hover:text-primary transition-all text-sm font-bold"
                                                                                                >
                                                                                                        <User className="w-4 h-4" />
                                                                                                        Hồ sơ trung tâm
                                                                                                </button>
                                                                                                <button
                                                                                                        onClick={() => router.push(`/app/${centerSlug}/settings`)}
                                                                                                        className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 text-slate-600 hover:text-primary transition-all text-sm font-bold"
                                                                                                >
                                                                                                        <Settings className="w-4 h-4" />
                                                                                                        Cài đặt chung
                                                                                                </button>
                                                                                                <div className="h-px bg-slate-50 mx-2 my-1" />
                                                                                                <button
                                                                                                        onClick={() => window.location.href = '/login'}
                                                                                                        className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-red-50 text-red-500 transition-all text-sm font-bold"
                                                                                                >
                                                                                                        <LogOut className="w-4 h-4" />
                                                                                                        Đăng xuất
                                                                                                </button>
                                                                                        </div>
                                                                                </motion.div>
                                                                        </>
                                                                )}
                                                        </AnimatePresence>
                                                </div>
                                        </div>
                                </div>
                        </header>

                        {/* Main Content Area */}
                        <main className="flex-1 max-w-[1600px] mx-auto w-full p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

                                {/* LEFT COLUMN: Branch Management */}
                                <section className="lg:col-span-8 order-2 lg:order-1 space-y-8">
                                        {/* Section Header */}
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div>
                                                        <h1 className="text-2xl font-bold font-heading mb-1">Cơ sở của bạn</h1>
                                                        <p className="text-secondary text-sm">Chào mừng trở lại! Bạn đang quản lý các cơ sở thuộc hệ thống trung tâm <span className="font-bold text-primary uppercase">{centerSlug}</span></p>
                                                </div>
                                                <button
                                                        onClick={() => handleOpenModal()}
                                                        className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                                                >
                                                        <Plus className="w-5 h-5" />
                                                        Đăng ký chi nhánh mới
                                                </button>
                                        </div>

                                        {/* Search & Filter */}
                                        <div className="flex gap-4">
                                                <div className="relative flex-1">
                                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                        <input
                                                                type="text"
                                                                placeholder="Tìm kiếm tên hoặc địa chỉ cơ sở..."
                                                                className="w-full pl-12 pr-5 py-3.5 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all shadow-sm"
                                                        />
                                                </div>
                                        </div>

                                        {/* Branch Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {branches.map((branch) => (
                                                        <motion.div
                                                                key={branch.id}
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                className="bg-white rounded-[32px] p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group relative"
                                                        >
                                                                <div className="flex items-start justify-between mb-6">
                                                                        <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                                                                                <MapPin className="w-7 h-7 text-primary" />
                                                                        </div>
                                                                        <div className="flex items-center gap-1">
                                                                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${branch.status === 'Hoạt động' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                                                                                        }`}>
                                                                                        {branch.status}
                                                                                </span>
                                                                                <button
                                                                                        onClick={() => handleOpenModal(branch)}
                                                                                        className="p-2 text-slate-400 hover:text-primary hover:bg-muted rounded-xl transition-all"
                                                                                >
                                                                                        <Edit2 className="w-4 h-4" />
                                                                                </button>
                                                                        </div>
                                                                </div>

                                                                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{branch.name}</h3>

                                                                <div className="space-y-3 mb-8">
                                                                        <div className="flex items-start gap-3 text-sm text-secondary">
                                                                                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                                                                                <span className="leading-snug">{branch.address}</span>
                                                                        </div>
                                                                        <div className="flex items-center gap-3 text-sm text-secondary">
                                                                                <Phone className="w-4 h-4 shrink-0 text-slate-400" />
                                                                                <span>{branch.phone}</span>
                                                                        </div>
                                                                </div>

                                                                <div className="grid grid-cols-2 gap-4 border-t pt-6 mb-6">
                                                                        <div>
                                                                                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Học viên</p>
                                                                                <p className="font-bold text-lg">{branch.students}</p>
                                                                        </div>
                                                                        <div>
                                                                                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Giáo viên</p>
                                                                                <p className="font-bold text-lg">{branch.teachers}</p>
                                                                        </div>
                                                                </div>

                                                                <Link
                                                                        href={`/app/${centerSlug}/dashboard/${branch.slug}`}
                                                                        className="w-full bg-slate-50 hover:bg-primary-600 hover:text-white text-primary py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group/btn border border-primary/10 hover:border-transparent active:scale-[0.98]"
                                                                >
                                                                        Vào Dashboard Cơ sở
                                                                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                                </Link>

                                                                <div className="absolute top-6 right-16 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                                                                        <button className="bg-white border rounded-lg p-1.5 shadow hover:border-red-500 hover:text-red-500 transition-all">
                                                                                <Trash2 className="w-3.5 h-3.5" />
                                                                        </button>
                                                                </div>
                                                        </motion.div>
                                                ))}
                                        </div>
                                </section>

                                {/* RIGHT COLUMN: Notifications & Stats */}
                                <aside className="lg:col-span-4 order-1 lg:order-2 space-y-6">
                                        {/* Quick Stats Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-primary rounded-3xl p-5 text-white shadow-lg shadow-primary/10 relative overflow-hidden group">
                                                        <div className="relative z-10">
                                                                <p className="text-white/70 text-[10px] font-bold uppercase tracking-wider mb-1">Tổng học viên</p>
                                                                <h3 className="text-2xl font-bold">209</h3>
                                                        </div>
                                                        <GraduationCap className="absolute -bottom-2 -right-2 w-16 h-16 text-white/10 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                                                </div>

                                                <div className="bg-slate-900 rounded-3xl p-5 shadow-lg shadow-slate-200 relative overflow-hidden group">
                                                        <div className="relative z-10">
                                                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Tổng chi nhánh</p>
                                                                <h3 className="text-2xl font-bold text-white">{branches.length}</h3>
                                                        </div>
                                                        <MapPin className="absolute -bottom-2 -right-2 w-16 h-16 text-white/10 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                                                </div>

                                                <div className="bg-emerald-600 rounded-3xl p-5 text-white shadow-lg shadow-emerald-200 relative overflow-hidden group">
                                                        <div className="relative z-10">
                                                                <p className="text-white/70 text-[10px] font-bold uppercase tracking-wider mb-1">Tổng giáo viên</p>
                                                                <h3 className="text-2xl font-bold">20</h3>
                                                        </div>
                                                        <Users className="absolute -bottom-2 -right-2 w-16 h-16 text-white/10 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                                                </div>

                                                <div className="bg-orange-500 rounded-3xl p-5 text-white shadow-lg shadow-orange-200 relative overflow-hidden group">
                                                        <div className="relative z-10">
                                                                <p className="text-white/70 text-[10px] font-bold uppercase tracking-wider mb-1">Tổng số lớp</p>
                                                                <h3 className="text-2xl font-bold">42</h3>
                                                        </div>
                                                        <BookOpen className="absolute -bottom-2 -right-2 w-16 h-16 text-white/10 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                                                </div>
                                        </div>

                                        {/* Notifications Card */}
                                        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-6">
                                                        <h2 className="font-bold flex items-center gap-2">
                                                                <Bell className="w-4 h-4 text-primary" />
                                                                Thông báo gần đây
                                                        </h2>
                                                        <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-full font-bold uppercase">Mới</span>
                                                </div>

                                                <div className="space-y-4">
                                                        {notifications.map((notif) => (
                                                                <div key={notif.id} className="group cursor-pointer">
                                                                        <div className="flex gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                                                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${notif.type === 'success' ? 'bg-green-50 text-green-600' :
                                                                                        notif.type === 'warning' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'
                                                                                        }`}>
                                                                                        {notif.type === 'success' && <CheckCircle2 className="w-5 h-5" />}
                                                                                        {notif.type === 'warning' && <AlertCircle className="w-5 h-5" />}
                                                                                        {notif.type === 'info' && <Clock className="w-5 h-5" />}
                                                                                </div>
                                                                                <div>
                                                                                        <h4 className="text-sm font-bold mb-0.5 group-hover:text-primary transition-colors">{notif.title}</h4>
                                                                                        <p className="text-xs text-secondary leading-snug mb-1 line-clamp-2">{notif.desc}</p>
                                                                                        <span className="text-[10px] text-slate-400 font-medium">{notif.time}</span>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        ))}
                                                </div>

                                                <button className="w-full mt-6 py-2.5 text-xs font-bold text-secondary hover:text-primary border border-transparent hover:border-primary/20 rounded-xl transition-all">
                                                        Xem tất cả thông báo
                                                </button>
                                        </div>
                                </aside>
                        </main>

                        {/* Modal - Add / Update Branch */}
                        <AnimatePresence>
                                {isModalOpen && (
                                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                                                <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        onClick={() => setIsModalOpen(false)}
                                                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                                                />
                                                <motion.div
                                                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                                        className="relative w-full max-w-[500px] bg-white rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden"
                                                >
                                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full" />

                                                        <h2 className="text-2xl font-bold mb-2 relative z-10">
                                                                {editingBranch ? 'Cập nhật thông tin' : 'Đăng ký chi nhánh mới'}
                                                        </h2>
                                                        <p className="text-secondary text-sm mb-8 relative z-10">
                                                                Vui lòng điền đầy đủ các thông tin của chi nhánh bên dưới.
                                                        </p>

                                                        <form onSubmit={handleSave} className="space-y-6 relative z-10">
                                                                <div className="space-y-2">
                                                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Tên chi nhánh</label>
                                                                        <input
                                                                                required
                                                                                value={formData.name}
                                                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                                                type="text"
                                                                                placeholder="VD: Cơ sở Quận 1"
                                                                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                                                                        />
                                                                </div>
                                                                <div className="space-y-2">
                                                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Địa chỉ</label>
                                                                        <input
                                                                                required
                                                                                value={formData.address}
                                                                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                                                                type="text"
                                                                                placeholder="Địa chỉ số nhà, tên đường..."
                                                                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                                                                        />
                                                                </div>
                                                                <div className="space-y-2">
                                                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Số điện thoại liên hệ</label>
                                                                        <input
                                                                                required
                                                                                value={formData.phone}
                                                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                                                type="tel"
                                                                                placeholder="Số điện thoại bàn hoặc di động"
                                                                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                                                                        />
                                                                </div>

                                                                <div className="pt-4 grid grid-cols-2 gap-4">
                                                                        <button
                                                                                type="button"
                                                                                onClick={() => setIsModalOpen(false)}
                                                                                className="py-4 rounded-2xl font-bold text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all border border-transparent"
                                                                        >
                                                                                Hủy bỏ
                                                                        </button>
                                                                        <button
                                                                                type="submit"
                                                                                className="bg-primary hover:bg-primary-hover text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                                                                        >
                                                                                {editingBranch ? 'Cập nhật' : 'Tạo mới'}
                                                                        </button>
                                                                </div>
                                                        </form>
                                                </motion.div>
                                        </div>
                                )}
                        </AnimatePresence>
                </div>
        );
}

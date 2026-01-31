"use client";

import {
        GraduationCap,
        Users,
        BookOpen,
        TrendingUp,
        ArrowUpRight,
        Clock,
        Box,
        Calendar,
        UserCheck,
        CreditCard,
        Bell
} from "lucide-react";
import { motion } from "framer-motion";

export default function BranchDashboardOverview() {
        const stats = [
                { label: "Tổng học viên", value: "125", change: "+12%", icon: GraduationCap, color: "bg-blue-600" },
                { label: "Số lớp học", value: "24", change: "+4", icon: BookOpen, color: "bg-orange-500" },
                { label: "Giáo viên", value: "12", change: "0", icon: Users, color: "bg-emerald-600" },
                { label: "Doanh thu tháng", value: "128M", change: "+18%", icon: TrendingUp, color: "bg-indigo-600" },
        ];

        const recentActivities = [
                { id: 1, type: "checkin", user: "Nguyễn Văn A", action: "Đã điểm danh lớp Toán 12-A1", time: "10 phút trước", status: "success" },
                { id: 2, type: "payment", user: "Trần Thị B", action: "Đóng học phí IELTS 2 tháng", time: "25 phút trước", status: "success" },
                { id: 3, type: "warning", user: "Lớp Lý 11-B2", action: "Nghỉ quá 15% sỉ số", time: "45 phút trước", status: "warning" },
        ];

        return (
                <div className="p-4 lg:p-8 max-w-[1400px] mx-auto w-full space-y-8">
                        {/* Welcome Banner */}
                        <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 -mr-20 -mt-20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
                                <div className="relative z-10">
                                        <h2 className="text-2xl lg:text-3xl font-bold mb-2">Chào mừng trở lại! 👋</h2>
                                        <p className="text-slate-400 max-w-lg mb-6 text-sm lg:text-base">
                                                Hôm nay có <span className="text-primary font-bold">12 lớp học</span> và <span className="text-primary font-bold">4 học viên</span> đăng ký mới. Hãy xem các phân tích chi tiết bên dưới.
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                                <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary/20">
                                                        Báo cáo nhanh
                                                </button>
                                                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all border border-white/10">
                                                        Xuất dữ liệu
                                                </button>
                                        </div>
                                </div>
                                <Box className="absolute -bottom-8 -right-8 w-40 h-40 text-white/5 -rotate-12 group-hover:scale-110 transition-transform duration-700" />
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                                {stats.map((item, idx) => (
                                        <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm group hover:shadow-xl hover:shadow-primary/5 transition-all"
                                        >
                                                <div className="flex items-center justify-between mb-4">
                                                        <div className={`${item.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                                                                <item.icon className="w-6 h-6" />
                                                        </div>
                                                        <div className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                                                {item.change} <ArrowUpRight className="w-3 h-3" />
                                                        </div>
                                                </div>
                                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                                <h3 className="text-2xl lg:text-3xl font-bold">{item.value}</h3>
                                        </motion.div>
                                ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Realtime Activities */}
                                <div className="lg:col-span-2 space-y-6">
                                        <div className="bg-white rounded-[32px] p-6 lg:p-8 border border-slate-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-8">
                                                        <h3 className="text-lg font-bold flex items-center gap-2">
                                                                <Clock className="w-5 h-5 text-primary" />
                                                                Hoạt động thời gian thực
                                                        </h3>
                                                        <button className="text-sm font-bold text-primary hover:underline transition-all">Tất cả nhật ký</button>
                                                </div>

                                                <div className="space-y-6">
                                                        {recentActivities.map((act) => (
                                                                <div key={act.id} className="flex gap-4 group">
                                                                        <div className={`w-1.5 self-stretch rounded-full ${act.status === 'success' ? 'bg-green-500' : 'bg-orange-500'}`} />
                                                                        <div className="flex-1 py-1">
                                                                                <div className="flex items-center justify-between mb-1">
                                                                                        <span className="text-sm font-bold text-slate-800">{act.user}</span>
                                                                                        <span className="text-[10px] font-medium text-slate-400">{act.time}</span>
                                                                                </div>
                                                                                <p className="text-sm text-secondary line-clamp-1">{act.action}</p>
                                                                        </div>
                                                                </div>
                                                        ))}
                                                </div>
                                        </div>

                                        {/* Quick Actions Grid */}
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {[
                                                        { label: 'Điểm danh nhanh', icon: UserCheck },
                                                        { label: 'Thu học phí', icon: CreditCard },
                                                        { label: 'Tạo thông báo', icon: Bell },
                                                        { label: 'Xếp lịch dạy', icon: Calendar }
                                                ].map((btn, idx) => (
                                                        <button key={idx} className="bg-white border border-slate-100 hover:border-primary hover:text-primary p-4 rounded-2xl font-bold text-xs transition-all shadow-sm active:scale-95 flex flex-col items-center gap-3 group/btn">
                                                                <div className="p-2 bg-slate-50 group-hover/btn:bg-primary/5 rounded-xl transition-colors">
                                                                        <btn.icon className="w-5 h-5" />
                                                                </div>
                                                                {btn.label}
                                                        </button>
                                                ))}
                                        </div>
                                </div>

                                {/* Schedule Preview Sidebar Column */}
                                <div className="space-y-6">
                                        <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group h-full flex flex-col">
                                                <Calendar className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-700" />
                                                <h3 className="text-lg font-bold mb-6">Lớp học sắp bắt đầu</h3>
                                                <div className="space-y-4 relative z-10 flex-1">
                                                        {[
                                                                { class: "Toán 12-A1", time: "14:00 - 15:30", room: "302" },
                                                                { class: "IELTS Foundation", time: "15:45 - 17:15", room: "Lab 01" }
                                                        ].map((cls, idx) => (
                                                                <div key={idx} className="bg-white/5 p-4 rounded-2xl backdrop-blur-md border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                                                                        <p className="text-primary font-bold mb-1">{cls.class}</p>
                                                                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                                                                                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {cls.time}</span>
                                                                                <span className="bg-white/10 px-2 py-0.5 rounded-lg text-white">Phòng {cls.room}</span>
                                                                        </div>
                                                                </div>
                                                        ))}
                                                </div>
                                                <button className="w-full mt-8 py-3.5 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-primary hover:text-white transition-all transform active:scale-[0.98] relative z-10">
                                                        Xem toàn bộ lịch biểu
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}

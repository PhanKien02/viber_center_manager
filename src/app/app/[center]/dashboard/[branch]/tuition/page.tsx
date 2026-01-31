"use client";

import {
        CreditCard,
        TrendingUp,
        Search,
        Filter,
        MoreVertical,
        Download,
        AlertCircle,
        Clock,
        Wallet
} from "lucide-react";
import { useState } from "react";

const recentPayments = [
        { id: 1, student: "Nguyễn Văn An", course: "Toán 12-A1", amount: "1,200,000đ", date: "22/01/2024", method: "Chuyển khoản", status: "Thành công" },
        { id: 2, student: "Trần Thị Bình", course: "IELTS 6.5+", amount: "3,500,000đ", date: "21/01/2024", method: "Tiền mặt", status: "Thành công" },
        { id: 3, student: "Lê Hoàng Long", course: "Python Pro", amount: "2,000,000đ", date: "20/01/2024", method: "Ví điện tử", status: "Đang xử lý" },
        { id: 4, student: "Phạm Hải Yến", course: "Toán 12-A1", amount: "1,200,000đ", date: "15/01/2024", method: "Chuyển khoản", status: "Quá hạn" },
];

export default function TuitionPage() {
        const [payments] = useState(recentPayments);

        return (
                <div className="p-4 lg:p-8 max-w-[1400px] mx-auto w-full space-y-8">
                        {/* Page Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                        <h1 className="text-2xl font-bold font-heading mb-1">Quản lý Học phí</h1>
                                        <p className="text-secondary text-sm">Theo dõi doanh thu, công nợ và lịch sử thanh toán</p>
                                </div>
                                <div className="flex gap-2">
                                        <button className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                                                <Download className="w-5 h-5" />
                                                Xuất báo cáo
                                        </button>
                                        <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                                                <CreditCard className="w-5 h-5" />
                                                Lập phiếu thu
                                        </button>
                                </div>
                        </div>

                        {/* Finance Overview Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-slate-900 text-white rounded-[32px] p-8 relative overflow-hidden group">
                                        <Wallet className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-700" />
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Doanh thu tháng này</p>
                                        <h2 className="text-4xl font-bold mb-4 relative z-10">128.5M</h2>
                                        <div className="flex items-center gap-2 text-green-400 text-sm font-bold relative z-10">
                                                <TrendingUp className="w-4 h-4" />
                                                +18.2% so với tháng trước
                                        </div>
                                </div>

                                <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm relative group overflow-hidden">
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Học phí chờ xử lý</p>
                                        <h2 className="text-4xl font-bold mb-4">42.8M</h2>
                                        <div className="flex items-center gap-2 text-orange-500 text-sm font-bold">
                                                <Clock className="w-4 h-4" />
                                                15 giao dịch đang chờ
                                        </div>
                                </div>

                                <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm relative group overflow-hidden">
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Công nợ quá hạn</p>
                                        <h2 className="text-4xl font-bold mb-4 text-red-500">12.4M</h2>
                                        <div className="flex items-center gap-2 text-red-500 text-sm font-bold">
                                                <AlertCircle className="w-4 h-4" />
                                                8 học viên chưa đóng phí
                                        </div>
                                </div>
                        </div>

                        {/* Transactions List */}
                        <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden">
                                <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                                        <h3 className="text-lg font-bold">Lịch sử giao dịch gần đây</h3>
                                        <div className="flex flex-1 max-w-[500px] gap-3 w-full">
                                                <div className="relative flex-1">
                                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                        <input type="text" placeholder="Tìm tên học viên..." className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-2xl outline-none text-sm" />
                                                </div>
                                                <button className="p-2 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all"><Filter className="w-5 h-5 text-slate-400" /></button>
                                        </div>
                                </div>

                                <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                                <thead>
                                                        <tr className="border-b border-slate-50">
                                                                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Học viên / Khóa học</th>
                                                                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Số tiền</th>
                                                                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Ngày thu</th>
                                                                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Hình thức</th>
                                                                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Trạng thái</th>
                                                                <th className="px-8 py-5"></th>
                                                        </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-50">
                                                        {payments.map((p) => (
                                                                <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                                                                        <td className="px-8 py-6">
                                                                                <div className="flex flex-col gap-0.5">
                                                                                        <span className="text-sm font-bold text-slate-900">{p.student}</span>
                                                                                        <span className="text-xs text-slate-400">{p.course}</span>
                                                                                </div>
                                                                        </td>
                                                                        <td className="px-8 py-6">
                                                                                <span className="text-sm font-bold text-slate-900">{p.amount}</span>
                                                                        </td>
                                                                        <td className="px-8 py-6 text-sm text-slate-500">{p.date}</td>
                                                                        <td className="px-8 py-6 text-sm text-slate-500">{p.method}</td>
                                                                        <td className="px-8 py-6">
                                                                                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${p.status === 'Thành công' ? 'bg-green-50 text-green-600' :
                                                                                        p.status === 'Đang xử lý' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600'
                                                                                        }`}>
                                                                                        {p.status}
                                                                                </span>
                                                                        </td>
                                                                        <td className="px-8 py-6 text-right">
                                                                                <button className="p-2 text-slate-400 hover:text-primary transition-all"><MoreVertical className="w-5 h-5" /></button>
                                                                        </td>
                                                                </tr>
                                                        ))}
                                                </tbody>
                                        </table>
                                </div>
                        </div>
                </div>
        );
}

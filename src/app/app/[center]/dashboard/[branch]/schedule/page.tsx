"use client";

import {
        ChevronLeft,
        ChevronRight,
        Clock,
        MapPin,
        Users,
        MoreVertical,
        Plus
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const days = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"];
const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

const scheduleData = [
        { id: 1, day: "Thứ 2", time: "08:00 - 09:30", className: "Toán 12-A1", teacher: "Thầy Hùng", room: "302", color: "bg-blue-500" },
        { id: 2, day: "Thứ 2", time: "14:00 - 15:30", className: "IELTS Intensive", teacher: "Cô Vy", room: "Lab 01", color: "bg-orange-500" },
        { id: 3, day: "Thứ 3", time: "09:00 - 10:30", className: "Toán Tư Duy", teacher: "Cô Mai", room: "201", color: "bg-emerald-500" },
        { id: 4, day: "Thứ 4", time: "18:00 - 20:00", className: "Python Pro", teacher: "Thầy Nam", room: "CNTT 1", color: "bg-indigo-500" },
];

export default function SchedulePage() {
        const [currentWeek] = useState("Tuần 4: 22/01 - 28/01/2024");

        return (
                <div className="p-4 lg:p-8 max-w-[1400px] mx-auto w-full space-y-8">
                        {/* Page Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                        <h1 className="text-2xl font-bold font-heading mb-1">Lịch học & Lịch dạy</h1>
                                        <p className="text-secondary text-sm">Theo dõi thời khóa biểu và lịch làm việc của cơ sở</p>
                                </div>
                                <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                                        <Plus className="w-5 h-5" />
                                        Xếp lịch mới
                                </button>
                        </div>

                        {/* Calendar Navigation */}
                        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
                                <div className="flex items-center gap-2">
                                        <button className="p-2.5 hover:bg-slate-50 rounded-xl border border-slate-100 transition-all text-slate-500">
                                                <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <div className="px-6 py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-700">
                                                {currentWeek}
                                        </div>
                                        <button className="p-2.5 hover:bg-slate-50 rounded-xl border border-slate-100 transition-all text-slate-500">
                                                <ChevronRight className="w-5 h-5" />
                                        </button>
                                </div>
                                <div className="flex gap-2">
                                        <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-md shadow-primary/10">Tuần</button>
                                        <button className="px-4 py-2 bg-white text-slate-500 border border-slate-100 rounded-xl text-sm font-bold hover:bg-slate-50">Tháng</button>
                                        <button className="px-4 py-2 bg-white text-slate-500 border border-slate-100 rounded-xl text-sm font-bold hover:bg-slate-50">Danh sách</button>
                                </div>
                        </div>

                        {/* Weekly Schedule Grid */}
                        <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden">
                                <div className="grid grid-cols-8 divide-x divide-slate-100 min-w-[1000px]">
                                        {/* Time Sidebar */}
                                        <div className="col-span-1 bg-slate-50/50">
                                                <div className="h-16 border-b border-slate-100 flex items-center justify-center">
                                                        <Clock className="w-5 h-5 text-slate-300" />
                                                </div>
                                                {timeSlots.map(time => (
                                                        <div key={time} className="h-24 border-b border-slate-100 p-4 text-xs font-bold text-slate-400 text-right">
                                                                {time}
                                                        </div>
                                                ))}
                                        </div>

                                        {/* Days Columns */}
                                        {days.map(day => (
                                                <div key={day} className="col-span-1">
                                                        <div className="h-16 border-b border-slate-100 flex flex-col items-center justify-center bg-slate-50/30">
                                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{day}</span>
                                                                <span className="text-sm font-bold text-slate-900">22 Jan</span>
                                                        </div>
                                                        <div className="relative h-full bg-grid-slate-100">
                                                                {/* Render classes for this day */}
                                                                {scheduleData.filter(item => item.day === day).map(item => (
                                                                        <motion.div
                                                                                key={item.id}
                                                                                initial={{ scale: 0.9, opacity: 0 }}
                                                                                animate={{ scale: 1, opacity: 1 }}
                                                                                className={`absolute inset-x-2 top-2 rounded-2xl p-3 border-l-4 ${item.color} bg-white shadow-xl shadow-slate-200/50 space-y-2 group cursor-pointer hover:translate-y-[-2px] transition-all`}
                                                                                style={{ top: `${(parseInt(item.time.split(':')[0]) - 8) * 96 + 20}px`, height: '180px' }}
                                                                        >
                                                                                <div className="flex items-start justify-between">
                                                                                        <span className="text-xs font-bold text-slate-900 line-clamp-1">{item.className}</span>
                                                                                        <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                                                                <MoreVertical className="w-3.5 h-3.5 text-slate-400" />
                                                                                        </button>
                                                                                </div>
                                                                                <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400">
                                                                                        <Clock className="w-3 h-3" />
                                                                                        {item.time}
                                                                                </div>
                                                                                <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400">
                                                                                        <Users className="w-3 h-3" />
                                                                                        {item.teacher}
                                                                                </div>
                                                                                <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400">
                                                                                        <MapPin className="w-3 h-3" />
                                                                                        Phòng {item.room}
                                                                                </div>
                                                                                <div className="pt-2">
                                                                                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                                                                <div className="w-[85%] h-full bg-current opacity-20" style={{ backgroundColor: item.color.replace('bg-', '') }} />
                                                                                        </div>
                                                                                </div>
                                                                        </motion.div>
                                                                ))}
                                                        </div>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </div>
        );
}

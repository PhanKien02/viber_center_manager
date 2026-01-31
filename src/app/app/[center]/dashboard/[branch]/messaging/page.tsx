"use client";

import {
        MessageSquare,
        Search,
        Send,
        User,
        Phone,
        Video,
        Info,
        CheckCheck,
        Paperclip,
        Image as ImageIcon,
        Smile
} from "lucide-react";
import { useState } from "react";

const contacts = [
        { id: 1, name: "Nguyễn Văn An", lastMsg: "Em đã nhận bài tập về nhà rồi ạ.", time: "10:30", type: "Học viên", online: true, unread: 2 },
        { id: 2, name: "Thầy Lê Hùng", lastMsg: "Thầy đã cập nhật giáo án lớp Toán 12.", time: "09:45", type: "Giáo viên", online: true, unread: 0 },
        { id: 3, name: "Phụ huynh em Yến", lastMsg: "Ngày mai Yến có tiết học bù không ạ?", time: "Hôm qua", type: "Phụ huynh", online: false, unread: 0 },
        { id: 4, name: "Admin Tổng", lastMsg: "Có thông báo mới về hệ thống nội bộ.", time: "2 ngày trước", type: "Hệ thống", online: false, unread: 5 },
];

export default function MessagingPage() {
        const [activeChat, setActiveChat] = useState(contacts[0]);

        return (
                <div className="h-[calc(100vh-80px)] overflow-hidden flex flex-col lg:flex-row bg-white border-t border-slate-100">
                        {/* Sidebar - Chat List */}
                        <aside className="w-full lg:w-96 border-r border-slate-100 flex flex-col shrink-0">
                                <div className="p-6">
                                        <div className="flex items-center justify-between mb-6">
                                                <h2 className="text-xl font-bold font-heading">Tin nhắn</h2>
                                                <button className="p-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all">
                                                        <MessageSquare className="w-5 h-5" />
                                                </button>
                                        </div>
                                        <div className="relative">
                                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input
                                                        type="text"
                                                        placeholder="Tìm kiếm hội thoại..."
                                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary/20 outline-none text-sm transition-all"
                                                />
                                        </div>
                                </div>

                                <div className="flex-1 overflow-y-auto px-3 space-y-1">
                                        {contacts.map((contact) => (
                                                <button
                                                        key={contact.id}
                                                        onClick={() => setActiveChat(contact)}
                                                        className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${activeChat.id === contact.id ? "bg-primary/5 ring-1 ring-primary/10" : "hover:bg-slate-50"
                                                                }`}
                                                >
                                                        <div className="relative">
                                                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold border border-slate-200 overflow-hidden">
                                                                        <User className="w-6 h-6" />
                                                                </div>
                                                                {contact.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full shadow-sm" />}
                                                        </div>
                                                        <div className="flex-1 text-left min-w-0">
                                                                <div className="flex items-center justify-between mb-0.5">
                                                                        <span className={`text-sm font-bold ${activeChat.id === contact.id ? "text-primary" : "text-slate-900"}`}>{contact.name}</span>
                                                                        <span className="text-[10px] text-slate-400 font-medium">{contact.time}</span>
                                                                </div>
                                                                <div className="flex items-center justify-between">
                                                                        <p className="text-xs text-secondary truncate pr-2">{contact.lastMsg}</p>
                                                                        {contact.unread > 0 && (
                                                                                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">{contact.unread}</span>
                                                                        )}
                                                                </div>
                                                        </div>
                                                </button>
                                        ))}
                                </div>
                        </aside>

                        {/* Main Chat View */}
                        <div className="flex-1 flex flex-col min-w-0 bg-slate-50/30">
                                {/* Chat Header */}
                                <div className="h-20 bg-white border-b border-slate-100 px-6 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border border-primary/20 overflow-hidden">
                                                        <User className="w-5 h-5" />
                                                </div>
                                                <div>
                                                        <h3 className="text-sm font-bold leading-none mb-1">{activeChat.name}</h3>
                                                        <div className="flex items-center gap-1.5">
                                                                <div className={`w-1.5 h-1.5 rounded-full ${activeChat.online ? 'bg-green-500' : 'bg-slate-300'}`} />
                                                                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                                                                        {activeChat.online ? 'Trực tuyến' : 'Ngoại tuyến'}
                                                                </span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                                <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-xl transition-all"><Phone className="w-5 h-5" /></button>
                                                <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-xl transition-all"><Video className="w-5 h-5" /></button>
                                                <div className="h-6 w-px bg-slate-100 mx-1" />
                                                <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-xl transition-all"><Info className="w-5 h-5" /></button>
                                        </div>
                                </div>

                                {/* Message Bubble Area */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                        <div className="flex justify-center">
                                                <span className="px-3 py-1 bg-slate-100 text-slate-400 text-[10px] font-bold rounded-full uppercase tracking-widest">Hôm nay</span>
                                        </div>

                                        <div className="flex gap-3 max-w-[80%]">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden shrink-0"><User className="w-4 h-4" /></div>
                                                <div className="space-y-1">
                                                        <div className="bg-white border border-slate-100 p-4 rounded-[24px] rounded-tl-none text-sm text-slate-700 shadow-sm leading-relaxed">
                                                                Xin chào Admin, cho em hỏi bài tập chương 2 đã có trên hệ thống chưa ạ?
                                                        </div>
                                                        <span className="text-[10px] text-slate-400 font-medium px-1">10:25 AM</span>
                                                </div>
                                        </div>

                                        <div className="flex gap-3 flex-row-reverse max-w-[80%] ml-auto">
                                                <div className="space-y-1 text-right">
                                                        <div className="bg-primary text-white p-4 rounded-[24px] rounded-tr-none text-sm shadow-lg shadow-primary/10 leading-relaxed">
                                                                Chào An nhé, bài tập vừa được Thầy Hùng tải lên mục Lớp học của em rồi đấy. Em kiểm tra lại giúp anh nhé!
                                                        </div>
                                                        <div className="flex items-center justify-end gap-1.5 text-[10px] text-slate-400 font-medium px-1">
                                                                <span>10:30 AM</span>
                                                                <CheckCheck className="w-3.5 h-3.5 text-primary" />
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                {/* Chat Input Area */}
                                <div className="bg-white p-6 border-t border-slate-100">
                                        <div className="max-w-[1000px] mx-auto bg-slate-50 border border-slate-100 rounded-[28px] p-2 flex items-center gap-2">
                                                <button className="p-2 text-slate-400 hover:text-primary transition-all"><Paperclip className="w-5 h-5" /></button>
                                                <button className="p-2 text-slate-400 hover:text-primary transition-all"><ImageIcon className="w-5 h-5" /></button>
                                                <input
                                                        type="text"
                                                        placeholder="Nhập nội dung tin nhắn..."
                                                        className="flex-1 bg-transparent border-none outline-none text-sm py-2 px-2"
                                                />
                                                <button className="p-2 text-slate-400 hover:text-primary transition-all"><Smile className="w-5 h-5" /></button>
                                                <button className="p-3 bg-primary text-white rounded-full shadow-lg shadow-primary/20 hover:scale-110 active:scale-95 transition-all">
                                                        <Send className="w-5 h-5" />
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}

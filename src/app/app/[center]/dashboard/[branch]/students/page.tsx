"use client";

import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  Mail,
  Phone,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const initialStudents = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    code: "SV2024001",
    class: "Toán 12-A1",
    email: "an.nv@gmail.com",
    phone: "0901 234 567",
    joinDate: "12/01/2024",
    status: "Đang học",
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    code: "SV2024002",
    class: "IELTS 6.5+",
    email: "binh.tt@gmail.com",
    phone: "0902 345 678",
    joinDate: "15/01/2024",
    status: "Đang học",
  },
  {
    id: 3,
    name: "Lê Hoàng Long",
    code: "SV2024003",
    class: "Python Pro",
    email: "long.lh@gmail.com",
    phone: "0903 456 789",
    joinDate: "20/01/2024",
    status: "Bảo lưu",
  },
  {
    id: 4,
    name: "Phạm Hải Yến",
    code: "SV2024004",
    class: "Toán 12-A1",
    email: "yen.ph@gmail.com",
    phone: "0904 567 890",
    joinDate: "25/01/2024",
    status: "Đang học",
  },
];

export default function StudentsPage() {
  const [students] = useState(initialStudents);

  return (
    <div className="p-4 lg:p-8 max-w-[1400px] mx-auto w-full space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading mb-1">
            Học sinh & Học viên
          </h1>
          <p className="text-secondary text-sm">
            Quản lý thông tin hồ sơ và quá trình học tập
          </p>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
          <Plus className="w-5 h-5" />
          Tiếp nhận học viên mới
        </button>
      </div>

      {/* Toolbar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 lg:col-span-9 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex items-center px-4">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            placeholder="Tìm theo tên, mã số hoặc số điện thoại..."
            className="flex-1 bg-transparent border-none outline-none text-sm py-2"
          />
        </div>
        <button className="md:col-span-4 lg:col-span-3 bg-white border border-slate-200 p-3 rounded-2xl font-bold text-sm text-slate-600 flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
          <Filter className="w-4 h-4" />
          Lọc nâng cao
        </button>
      </div>

      {/* Students List Table/Cards View */}
      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Thông tin học viên
                </th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Mã Số
                </th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Lớp Đang Học
                </th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Liên Hệ
                </th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Ngày Tham Gia
                </th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-500 text-center">
                  Trạng Thái
                </th>
                <th className="px-6 py-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((student, idx) => (
                <tr
                  key={student.id}
                  className="hover:bg-slate-50/50 transition-colors group cursor-pointer animate-in fade-in duration-300 fill-mode-both"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold overflow-hidden border border-primary/20">
                        {student.name.charAt(0)}
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-primary transition-colors">
                        {student.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">
                      {student.code}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-medium text-slate-700">
                      {student.class}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs text-secondary">
                        <Mail className="w-3 h-3 text-slate-300" />
                        {student.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-secondary">
                        <Phone className="w-3 h-3 text-slate-300" />
                        {student.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-300" />
                      {student.joinDate}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      <span
                        className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                          student.status === "Đang học"
                            ? "bg-green-50 text-green-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {student.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-primary hover:bg-white rounded-xl transition-all shadow-none hover:shadow-sm">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-slate-300 hover:text-slate-600">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination/Footer */}
        <div className="bg-slate-50/50 p-6 flex items-center justify-between border-t border-slate-100 text-sm text-secondary">
          <div>
            Hiển thị <span className="font-bold text-slate-900">4</span> trong{" "}
            <span className="font-bold text-slate-900">125</span> học viên
          </div>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-white border border-slate-200 rounded-xl font-bold hover:bg-slate-50 disabled:opacity-50"
              disabled
            >
              Trước
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl font-bold hover:bg-slate-50">
              Sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

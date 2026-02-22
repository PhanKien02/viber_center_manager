"use client";

import {
  BookOpen,
  Plus,
  Search,
  Clock,
  GraduationCap,
  MoreVertical,
  Edit2,
  Trash2,
  Filter,
  Users,
  X,
  Check,
} from "lucide-react";
import { useState } from "react";

interface Course {
  id: number;
  name: string;
  category: string;
  students: number;
  duration: string;
  level: string;
  price: string;
  status: string;
}

const initialCourses: Course[] = [
  {
    id: 1,
    name: "IELTS Intensive 6.5+",
    category: "Tiếng Anh",
    students: 45,
    duration: "3 tháng",
    level: "Nâng cao",
    price: "8,500,000",
    status: "Đang mở",
  },
  {
    id: 2,
    name: "Toán tư duy Primary",
    category: "Tư duy",
    students: 32,
    duration: "6 tháng",
    level: "Cơ bản",
    price: "4,200,000",
    status: "Đang mở",
  },
  {
    id: 3,
    name: "Lập trình Python Pro",
    category: "CNTT",
    students: 18,
    duration: "4 tháng",
    level: "Trung cấp",
    price: "6,800,000",
    status: "Sắp mở",
  },
];

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "Tiếng Anh",
    duration: "",
    level: "Cơ bản",
    price: "",
    status: "Đang mở",
  });

  const handleOpenModal = (course: Course | null = null) => {
    if (course) {
      setEditingCourse(course);
      setFormData({
        name: course.name,
        category: course.category,
        duration: course.duration,
        level: course.level,
        price: course.price,
        status: course.status,
      });
    } else {
      setEditingCourse(null);
      setFormData({
        name: "",
        category: "Tiếng Anh",
        duration: "",
        level: "Cơ bản",
        price: "",
        status: "Đang mở",
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCourse) {
      setCourses(
        courses.map((c) =>
          c.id === editingCourse.id ? { ...c, ...formData } : c,
        ),
      );
    } else {
      const newCourse: Course = {
        id: Date.now(),
        students: 0,
        ...formData,
      };
      setCourses([...courses, newCourse]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Bạn có chắc chắn muốn xóa khóa học này?")) {
      setCourses(courses.filter((c) => c.id !== id));
    }
  };

  const filteredCourses = courses.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="p-4 lg:p-8 max-w-[1400px] mx-auto w-full space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading mb-1">
            Quản lý Khóa học
          </h1>
          <p className="text-secondary text-sm">
            Xây dựng và quản lý danh mục khóa học của cơ sở
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
        >
          <Plus className="w-5 h-5" />
          Thêm khóa học mới
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm khóa học..."
            className="w-full pl-12 pr-5 py-3 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <Filter className="w-4 h-4" />
            Lọc
          </button>
          <select className="px-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all outline-none">
            <option>Tất cả danh mục</option>
            <option>Tiếng Anh</option>
            <option>Tư duy</option>
            <option>CNTT</option>
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCourses.map((course, idx) => (
          <div
            key={course.id}
            className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-200/60 shadow-lg shadow-slate-200/20 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Top Pattern/Gradient Banner */}
            <div
              className={`h-28 w-full bg-linear-to-br ${
                idx % 3 === 0
                  ? "from-violet-500 to-fuchsia-500"
                  : idx % 3 === 1
                    ? "from-emerald-400 to-teal-500"
                    : "from-orange-400 to-rose-500"
              } relative overflow-hidden shrink-0`}
            >
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,100 C30,70 70,70 100,100 L100,0 L0,0 Z"
                  fill="currentColor"
                />
              </svg>

              {/* Floating badges on banner */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="text-[10px] font-bold px-3 py-1.5 bg-white/95 text-slate-700 backdrop-blur-md rounded-full uppercase tracking-widest shadow-sm">
                  {course.category}
                </span>
                <span
                  className={`text-[10px] font-bold px-3 py-1.5 backdrop-blur-md rounded-full uppercase tracking-widest shadow-sm ${
                    course.status === "Đang mở"
                      ? "bg-green-500/90 text-white"
                      : "bg-orange-500/90 text-white"
                  }`}
                >
                  {course.status}
                </span>
              </div>

              {/* Icon avatar bleeding over edge */}
              <div className="absolute -bottom-6 left-6 w-14 h-14 bg-white rounded-2xl p-1 shadow-md">
                <div className="w-full h-full bg-slate-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
              </div>

              {/* Actions dropdown top right */}
              <button className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-xl backdrop-blur-sm transition-colors cursor-pointer">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Course Content */}
            <div className="px-6 pt-10 pb-6 flex-1 flex flex-col">
              <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 mb-6 leading-tight">
                {course.name}
              </h3>

              <div className="space-y-4 mb-2 mt-auto">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-slate-400" />
                  </div>
                  <span>
                    Thời lượng:{" "}
                    <strong className="text-slate-900">
                      {course.duration}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-slate-400" />
                  </div>
                  <span>
                    Trình độ:{" "}
                    <strong className="text-slate-900">{course.level}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-slate-400" />
                  </div>
                  <span>
                    Học viên:{" "}
                    <strong className="text-slate-900">
                      {course.students}
                    </strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Course Card Footer */}
            <div className="p-2 mx-4 gap-2 mb-4 bg-slate-50/80 rounded-3xl flex items-center justify-between border border-slate-100">
              <div className="pl-4">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">
                  Học phí
                </p>
                <div className="text-lg font-black text-primary leading-none">
                  {parseFloat(course.price).toLocaleString()}đ
                </div>
              </div>
              <div className="flex gap-1 pr-1">
                <button
                  onClick={() => handleOpenModal(course)}
                  className="p-2.5 bg-white shadow-sm border border-slate-200/60 rounded-xl text-slate-600 hover:text-primary hover:border-primary/30 transition-all cursor-pointer"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="p-2.5 bg-white shadow-sm border border-slate-200/60 rounded-xl text-slate-600 hover:text-red-500 hover:border-red-200 transition-all cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Empty Card Placeholder */}
        <button
          onClick={() => handleOpenModal()}
          className="border-2 border-dashed border-slate-200 rounded-4xl p-8 flex flex-col items-center justify-center gap-4 text-slate-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all group min-h-75"
        >
          <div className="w-14 h-14 rounded-full border-2 border-dashed border-slate-300 group-hover:border-primary flex items-center justify-center transition-all">
            <Plus className="w-6 h-6" />
          </div>
          <span className="font-bold text-sm">Thêm khóa học mới</span>
        </button>
      </div>

      {/* Modal - Add / Update Course */}
      <>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
            />
            <div className="relative w-full max-w-[600px] bg-white rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  {editingCourse ? "Cập nhật khóa học" : "Thêm khóa học mới"}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-50 rounded-xl transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                    Tên khóa học
                  </label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    type="text"
                    placeholder="VD: IELTS Intensive 6.5+"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Danh mục
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                    >
                      <option>Tiếng Anh</option>
                      <option>Tư duy</option>
                      <option>CNTT</option>
                      <option>Năng khiếu</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Trạng thái
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                    >
                      <option>Đang mở</option>
                      <option>Sắp mở</option>
                      <option>Tạm dừng</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Thời lượng
                    </label>
                    <input
                      required
                      value={formData.duration}
                      onChange={(e) =>
                        setFormData({ ...formData, duration: e.target.value })
                      }
                      type="text"
                      placeholder="VD: 3 tháng"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Trình độ
                    </label>
                    <select
                      value={formData.level}
                      onChange={(e) =>
                        setFormData({ ...formData, level: e.target.value })
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                    >
                      <option>Cơ bản</option>
                      <option>Trung cấp</option>
                      <option>Nâng cao</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                    Học phí (VND)
                  </label>
                  <input
                    required
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        price: e.target.value.replace(/[^0-9]/g, ""),
                      })
                    }
                    type="text"
                    placeholder="VD: 8500000"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                  />
                </div>

                <div className="pt-4 flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary-hover text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    {editingCourse ? "Lưu thay đổi" : "Tạo khóa học"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

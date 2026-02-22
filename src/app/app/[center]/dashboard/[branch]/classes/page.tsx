"use client";

import {
  Plus,
  Search,
  BookOpen,
  Calendar,
  MapPin,
  ChevronRight,
  UserCheck,
  X,
  Check,
  Edit2,
  Trash2,
  ArrowLeft,
  Users as UsersIcon,
  ShieldCheck,
  Clock,
  AlertCircle,
  GraduationCap,
  Crown,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Teacher {
  id: number;
  name: string;
  role: "main" | "assistant";
  avatar?: string;
}

interface Classroom {
  id: number;
  name: string;
  course: string;
  teachers: Teacher[];
  studentsCount: number;
  maxStudents: number;
  schedule: string;
  room: string;
  status: string;
}

interface Student {
  id: number;
  name: string;
  code: string;
  present: boolean;
  note: string;
}

const AVAILABLE_TEACHERS = [
  { id: 1, name: "Thầy Hùng" },
  { id: 2, name: "Cô Vy" },
  { id: 3, name: "Thầy Nam" },
  { id: 4, name: "Cô Mai" },
  { id: 5, name: "Thầy Phong" },
  { id: 6, name: "Cô Linh" },
  { id: 7, name: "Thầy Đức" },
  { id: 8, name: "Cô Hà" },
];

const initialClasses: Classroom[] = [
  {
    id: 1,
    name: "Lớp Toán 12-A1",
    course: "Toán ôn thi Đại học",
    teachers: [
      { id: 1, name: "Thầy Hùng", role: "main" },
      { id: 4, name: "Cô Mai", role: "assistant" },
    ],
    studentsCount: 25,
    maxStudents: 30,
    schedule: "T2, T4, T6 (14:00)",
    room: "302",
    status: "Đang học",
  },
  {
    id: 2,
    name: "IELTS Summer 01",
    course: "IELTS Intensive 6.5+",
    teachers: [
      { id: 2, name: "Cô Vy", role: "main" },
      { id: 6, name: "Cô Linh", role: "main" },
      { id: 8, name: "Cô Hà", role: "assistant" },
    ],
    studentsCount: 12,
    maxStudents: 15,
    schedule: "T3, T5 (08:00)",
    room: "Lab 01",
    status: "Đang học",
  },
  {
    id: 3,
    name: "Python Kids 05",
    course: "Lập trình Python",
    teachers: [
      { id: 3, name: "Thầy Nam", role: "main" },
      { id: 5, name: "Thầy Phong", role: "assistant" },
      { id: 7, name: "Thầy Đức", role: "assistant" },
    ],
    studentsCount: 8,
    maxStudents: 12,
    schedule: "CN (09:00)",
    room: "CNTT 1",
    status: "Chờ khai giảng",
  },
];

const studentsInClass: Student[] = [
  {
    id: 101,
    name: "Nguyễn Văn An",
    code: "SV2024001",
    present: true,
    note: "",
  },
  {
    id: 102,
    name: "Trần Thị Bình",
    code: "SV2024002",
    present: true,
    note: "",
  },
  {
    id: 103,
    name: "Lê Hoàng Long",
    code: "SV2024003",
    present: false,
    note: "Nghỉ có phép",
  },
  { id: 104, name: "Phạm Hải Yến", code: "SV2024004", present: true, note: "" },
];

function getInitials(name: string) {
  const parts = name
    .replace(/^(Thầy|Cô)\s+/, "")
    .trim()
    .split(" ");
  return parts[parts.length - 1]?.charAt(0).toUpperCase() ?? "?";
}

const AVATAR_COLORS = [
  "bg-amber-500",
  "bg-teal-500",
  "bg-rose-500",
  "bg-sky-500",
  "bg-violet-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-cyan-500",
];

function TeacherAvatar({
  teacher,
  size = "md",
  index = 0,
}: {
  teacher: Teacher;
  size?: "sm" | "md" | "lg";
  index?: number;
}) {
  const color = AVATAR_COLORS[teacher.id % AVATAR_COLORS.length];
  const sizeClass =
    size === "sm"
      ? "w-7 h-7 text-[10px]"
      : size === "lg"
        ? "w-10 h-10 text-sm"
        : "w-8 h-8 text-xs";
  return (
    <div
      className={`${sizeClass} ${color} rounded-full flex items-center justify-center font-bold text-white ring-2 ring-white shrink-0`}
      style={{ zIndex: 10 - index }}
      title={`${teacher.name} (${teacher.role === "main" ? "GV Chính" : "Trợ giảng"})`}
    >
      {getInitials(teacher.name)}
    </div>
  );
}

function TeacherPill({
  teacher,
  onRemove,
}: {
  teacher: Teacher;
  onRemove?: () => void;
}) {
  const isMain = teacher.role === "main";
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
        isMain
          ? "bg-amber-50 text-amber-700 border-amber-200"
          : "bg-teal-50 text-teal-700 border-teal-200"
      }`}
    >
      {isMain ? (
        <Crown className="w-3 h-3" />
      ) : (
        <GraduationCap className="w-3 h-3" />
      )}
      {teacher.name}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:text-red-500 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </div>
  );
}

interface TeacherPickerProps {
  teachers: Teacher[];
  onChange: (teachers: Teacher[]) => void;
}

function TeacherPicker({ teachers, onChange }: TeacherPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const addTeacher = (teacherId: number, role: "main" | "assistant") => {
    const found = AVAILABLE_TEACHERS.find((t) => t.id === teacherId);
    if (!found) return;
    if (teachers.some((t) => t.id === teacherId)) return;
    onChange([...teachers, { id: found.id, name: found.name, role }]);
  };

  const removeTeacher = (id: number) => {
    onChange(teachers.filter((t) => t.id !== id));
  };

  const toggleRole = (id: number) => {
    onChange(
      teachers.map((t) =>
        t.id === id
          ? { ...t, role: t.role === "main" ? "assistant" : "main" }
          : t,
      ),
    );
  };

  const availableToAdd = AVAILABLE_TEACHERS.filter(
    (t) => !teachers.some((tt) => tt.id === t.id),
  );

  return (
    <div className="space-y-3">
      {/* Current Teachers */}
      {teachers.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Đội ngũ giảng dạy
            </span>
          </div>
          {teachers.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-between bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100"
            >
              <div className="flex items-center gap-2.5">
                <TeacherAvatar teacher={t} size="sm" />
                <span className="text-sm font-bold text-slate-700">
                  {t.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleRole(t.id)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border transition-all cursor-pointer ${
                    t.role === "main"
                      ? "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
                      : "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100"
                  }`}
                >
                  {t.role === "main" ? (
                    <Crown className="w-2.5 h-2.5" />
                  ) : (
                    <GraduationCap className="w-2.5 h-2.5" />
                  )}
                  {t.role === "main" ? "GV Chính" : "Trợ giảng"}
                </button>
                <button
                  type="button"
                  onClick={() => removeTeacher(t.id)}
                  className="p-1.5 hover:bg-red-50 hover:text-red-500 text-slate-300 rounded-lg transition-all"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Teacher Dropdown */}
      {availableToAdd.length > 0 && (
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 border border-dashed border-slate-300 rounded-xl text-sm font-medium text-slate-500 hover:border-primary hover:text-primary transition-all cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Thêm giáo viên...
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/60 z-20 overflow-hidden"
              >
                {availableToAdd.map((t) => (
                  <div
                    key={t.id}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 ${AVATAR_COLORS[t.id % AVATAR_COLORS.length]} rounded-full flex items-center justify-center text-white text-[10px] font-bold`}
                      >
                        {getInitials(t.name)}
                      </div>
                      <span className="text-sm font-bold text-slate-700">
                        {t.name}
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          addTeacher(t.id, "main");
                          setIsOpen(false);
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-[10px] font-bold hover:bg-amber-100 transition-colors cursor-pointer"
                      >
                        <Crown className="w-2.5 h-2.5" />
                        GV Chính
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          addTeacher(t.id, "assistant");
                          setIsOpen(false);
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-teal-50 text-teal-700 border border-teal-200 rounded-full text-[10px] font-bold hover:bg-teal-100 transition-colors cursor-pointer"
                      >
                        <GraduationCap className="w-2.5 h-2.5" />
                        Trợ giảng
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {teachers.length === 0 && (
        <p className="text-xs text-slate-400 text-center py-2">
          Chưa có giáo viên nào. Nhấn &quot;Thêm giáo viên&quot; để bắt đầu.
        </p>
      )}
    </div>
  );
}

export default function ClassesPage() {
  const [classes, setClasses] = useState<Classroom[]>(initialClasses);
  const [searchQuery, setSearchQuery] = useState("");

  // CRUD Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClass, setEditingClass] = useState<Classroom | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    course: "Toán ôn thi Đại học",
    teachers: [] as Teacher[],
    maxStudents: 30,
    schedule: "",
    room: "",
    status: "Đang học",
  });

  // Detail & Attendance State
  const [viewingClass, setViewingClass] = useState<Classroom | null>(null);
  const [students, setStudents] = useState<Student[]>(studentsInClass);
  const [isAttendanceSaved, setIsAttendanceSaved] = useState(false);

  const handleOpenModal = (cls: Classroom | null = null) => {
    if (cls) {
      setEditingClass(cls);
      setFormData({
        name: cls.name,
        course: cls.course,
        teachers: [...cls.teachers],
        maxStudents: cls.maxStudents,
        schedule: cls.schedule,
        room: cls.room,
        status: cls.status,
      });
    } else {
      setEditingClass(null);
      setFormData({
        name: "",
        course: "Toán ôn thi Đại học",
        teachers: [],
        maxStudents: 30,
        schedule: "",
        room: "",
        status: "Đang học",
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingClass) {
      setClasses(
        classes.map((c) =>
          c.id === editingClass.id ? { ...c, ...formData } : c,
        ),
      );
    } else {
      const newClass: Classroom = {
        id: Date.now(),
        studentsCount: 0,
        ...formData,
      };
      setClasses([...classes, newClass]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Bạn có chắc chắn muốn xóa lớp học này?")) {
      setClasses(classes.filter((c) => c.id !== id));
    }
  };

  const handleToggleAttendance = (studentId: number) => {
    setStudents(
      students.map((s) =>
        s.id === studentId ? { ...s, present: !s.present } : s,
      ),
    );
    setIsAttendanceSaved(false);
  };

  const filteredClasses = classes.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.teachers.some((t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  const mainTeacherCount = classes.reduce(
    (acc, c) => acc + c.teachers.filter((t) => t.role === "main").length,
    0,
  );
  const assistantCount = classes.reduce(
    (acc, c) => acc + c.teachers.filter((t) => t.role === "assistant").length,
    0,
  );

  return (
    <div className="p-4 lg:p-8 max-w-350 mx-auto w-full space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading mb-1">
            Quản lý Lớp học
          </h1>
          <p className="text-secondary text-sm">
            Tổ chức lớp học, xếp lịch và phân công đội ngũ giáo viên
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98] cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          Mở lớp học mới
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group cursor-default">
          <div className="absolute top-0 right-0 p-3 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-transform">
            <UsersIcon className="w-12 h-12 text-primary" />
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">
            Đang hoạt động
          </p>
          <h3 className="text-2xl font-bold text-slate-900">
            {classes.filter((c) => c.status === "Đang học").length} Lớp
          </h3>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group cursor-default">
          <div className="absolute top-0 right-0 p-3 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-transform text-orange-500">
            <Clock className="w-12 h-12" />
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">
            Sắp khai giảng
          </p>
          <h3 className="text-2xl font-bold text-slate-900">
            {classes.filter((c) => c.status === "Chờ khai giảng").length} Lớp
          </h3>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group cursor-default">
          <div className="absolute top-0 right-0 p-3 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-transform text-amber-500">
            <Crown className="w-12 h-12" />
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">
            Giáo viên Chính
          </p>
          <h3 className="text-2xl font-bold text-slate-900">
            {mainTeacherCount} GV
          </h3>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group cursor-default">
          <div className="absolute top-0 right-0 p-3 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-transform text-teal-500">
            <GraduationCap className="w-12 h-12" />
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">
            Trợ giảng
          </p>
          <h3 className="text-2xl font-bold text-slate-900">
            {assistantCount} GV
          </h3>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-3 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm tên lớp, khóa học hoặc giáo viên..."
            className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-primary/50 transition-all text-sm font-medium"
          />
        </div>
        <button className="hidden md:flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer">
          <Calendar className="w-4 h-4" />
          Lịch biểu
        </button>
      </div>

      {/* Teacher Role Legend */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-xs text-slate-400 font-medium">Phân loại:</span>
        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full">
          <Crown className="w-3.5 h-3.5" />
          Giáo viên Chính
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1.5 rounded-full">
          <GraduationCap className="w-3.5 h-3.5" />
          Trợ giảng
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredClasses.map((cls, idx) => {
          const mainTeachers = cls.teachers.filter((t) => t.role === "main");
          const assistants = cls.teachers.filter((t) => t.role === "assistant");
          return (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[4xl] p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/5 w-12 h-12 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {cls.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium tracking-wide flex items-center gap-1.5 uppercase">
                      <Clock className="w-3.5 h-3.5" /> {cls.schedule}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shrink-0 ${cls.status === "Đang học" ? "bg-green-50 text-green-600" : "bg-orange-50 text-orange-600"}`}
                >
                  {cls.status}
                </span>
              </div>

              {/* Teachers Section */}
              <div className="mb-6 space-y-3">
                {/* Main Teachers */}
                {mainTeachers.length > 0 && (
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-2 flex items-center gap-1.5">
                      <Crown className="w-3 h-3 text-amber-500" />
                      Giáo viên chính ({mainTeachers.length})
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {mainTeachers.map((t, i) => (
                        <div key={t.id} className="flex items-center gap-1.5">
                          <TeacherAvatar teacher={t} size="sm" index={i} />
                          <span className="text-xs font-bold text-slate-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">
                            {t.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Assistants */}
                {assistants.length > 0 && (
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-2 flex items-center gap-1.5">
                      <GraduationCap className="w-3 h-3 text-teal-500" />
                      Trợ giảng ({assistants.length})
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {assistants.map((t, i) => (
                        <div key={t.id} className="flex items-center gap-1.5">
                          <TeacherAvatar teacher={t} size="sm" index={i} />
                          <span className="text-xs font-bold text-slate-600 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-full">
                            {t.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">
                    Sỉ số / Tối đa
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">
                      {cls.studentsCount}/{cls.maxStudents}
                    </span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full max-w-15 overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{
                          width: `${(cls.studentsCount / cls.maxStudents) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">
                    Phòng học
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-slate-300" />
                    {cls.room}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <button
                  onClick={() => setViewingClass(cls)}
                  className="flex items-center gap-2 text-sm font-bold text-primary cursor-pointer hover:underline group/link"
                >
                  Xem chi tiết & điểm danh
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleOpenModal(cls)}
                    className="p-2.5 bg-slate-50 hover:bg-primary/5 rounded-xl text-slate-400 hover:text-primary transition-all cursor-pointer"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(cls.id)}
                    className="p-2.5 bg-slate-50 hover:bg-red-50 rounded-xl text-slate-400 hover:text-red-500 transition-all cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal - CRUD Class */}
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
              className="relative w-full max-w-[640px] bg-white rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  {editingClass ? "Cập nhật lớp học" : "Mở lớp học mới"}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-50 rounded-xl transition-all cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-6">
                {/* Class Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                    Tên lớp học
                  </label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    type="text"
                    placeholder="VD: Lớp Toán 12-A1"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                  />
                </div>

                {/* Course & Status */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Thuộc khóa học
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                    >
                      <option>Toán ôn thi Đại học</option>
                      <option>IELTS Intensive 6.5+</option>
                      <option>Lập trình Python Pro</option>
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
                      <option>Đang học</option>
                      <option>Chờ khai giảng</option>
                      <option>Đã kết thúc</option>
                    </select>
                  </div>
                </div>

                {/* Teachers Picker */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                    Đội ngũ giảng dạy
                  </label>
                  <div className="px-4 py-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <TeacherPicker
                      teachers={formData.teachers}
                      onChange={(teachers) =>
                        setFormData({ ...formData, teachers })
                      }
                    />
                  </div>
                  {formData.teachers.length === 0 && (
                    <p className="text-xs text-amber-600 ml-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Cần ít nhất 1 giáo viên chính
                    </p>
                  )}
                </div>

                {/* Schedule & Room */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Lịch học
                    </label>
                    <input
                      required
                      value={formData.schedule}
                      onChange={(e) =>
                        setFormData({ ...formData, schedule: e.target.value })
                      }
                      type="text"
                      placeholder="VD: T2, T4, T6 (14:00)"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Phòng học
                    </label>
                    <input
                      required
                      value={formData.room}
                      onChange={(e) =>
                        setFormData({ ...formData, room: e.target.value })
                      }
                      type="text"
                      placeholder="VD: 302"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Max Students */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                    Sỉ số tối đa
                  </label>
                  <input
                    required
                    value={formData.maxStudents}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        maxStudents: parseInt(e.target.value),
                      })
                    }
                    type="number"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Check className="w-5 h-5" />
                    {editingClass ? "Cập nhật" : "Tạo lớp học"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Detailed View & Attendance */}
      <AnimatePresence>
        {viewingClass && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-slate-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-white border-b px-4 lg:px-10 h-auto py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setViewingClass(null)}
                  className="p-3 hover:bg-slate-100 rounded-2xl transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-6 h-6 text-slate-600" />
                </button>
                <div>
                  <h2 className="text-lg lg:text-xl font-bold">
                    {viewingClass.name}
                  </h2>
                  <p className="text-xs text-slate-400 flex items-center gap-2">
                    <BookOpen className="w-3 h-3" /> {viewingClass.course}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex flex-col items-end px-4 border-r">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-none">
                    Cập nhật lúc
                  </span>
                  <span className="text-xs font-bold text-slate-600">
                    09:15 AM - Hôm nay
                  </span>
                </div>
                <button
                  onClick={() => {
                    setIsAttendanceSaved(true);
                    setTimeout(() => setIsAttendanceSaved(false), 3000);
                  }}
                  className={`px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer ${
                    isAttendanceSaved
                      ? "bg-green-500 text-white shadow-green-200"
                      : "bg-primary text-white shadow-primary/20"
                  }`}
                >
                  {isAttendanceSaved ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <ShieldCheck className="w-5 h-5" />
                  )}
                  {isAttendanceSaved ? "Đã lưu" : "Lưu điểm danh"}
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 lg:p-10">
              <div className="max-w-[1000px] mx-auto space-y-8">
                {/* Teachers Detail */}
                <div className="bg-white rounded-[28px] border border-slate-200 shadow-sm p-6 space-y-4">
                  <h3 className="font-bold flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-primary" />
                    Đội ngũ giảng dạy
                  </h3>

                  {/* Main Teachers */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-3 flex items-center gap-1.5">
                      <Crown className="w-3.5 h-3.5" />
                      Giáo viên chính (
                      {
                        viewingClass.teachers.filter((t) => t.role === "main")
                          .length
                      }
                      )
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {viewingClass.teachers
                        .filter((t) => t.role === "main")
                        .map((t) => (
                          <div
                            key={t.id}
                            className="flex items-center gap-2.5 bg-amber-50 border border-amber-100 rounded-2xl px-4 py-3"
                          >
                            <TeacherAvatar teacher={t} size="md" />
                            <div>
                              <p className="text-sm font-bold text-slate-800">
                                {t.name}
                              </p>
                              <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wide">
                                Giáo viên chính
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Assistants */}
                  {viewingClass.teachers.filter((t) => t.role === "assistant")
                    .length > 0 && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-teal-600 mb-3 flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5" />
                        Trợ giảng (
                        {
                          viewingClass.teachers.filter(
                            (t) => t.role === "assistant",
                          ).length
                        }
                        )
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {viewingClass.teachers
                          .filter((t) => t.role === "assistant")
                          .map((t) => (
                            <div
                              key={t.id}
                              className="flex items-center gap-2.5 bg-teal-50 border border-teal-100 rounded-2xl px-4 py-3"
                            >
                              <TeacherAvatar teacher={t} size="md" />
                              <div>
                                <p className="text-sm font-bold text-slate-800">
                                  {t.name}
                                </p>
                                <p className="text-[10px] font-bold text-teal-600 uppercase tracking-wide">
                                  Trợ giảng
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Class Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-widest">
                      Hiện diện
                    </p>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-green-500">
                        {students.filter((s) => s.present).length}
                      </span>
                      <span className="text-slate-400 font-bold mb-1">
                        / {students.length}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-widest">
                      Vắng mặt
                    </p>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-red-500">
                        {students.filter((s) => !s.present).length}
                      </span>
                      <span className="text-slate-400 font-bold mb-1">
                        học viên
                      </span>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm flex flex-col justify-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-widest text-center">
                      Tình trạng chung
                    </p>
                    <div className="flex justify-center gap-1.5 overflow-hidden rounded-full h-2 bg-slate-100">
                      <div
                        className="bg-green-500 h-full"
                        style={{
                          width: `${(students.filter((s) => s.present).length / students.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Attendance Table */}
                <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
                    <h3 className="font-bold flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-primary" />
                      Danh sách điểm danh hôm nay
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                      <AlertCircle className="w-4 h-4" />
                      Click để đánh dấu vắng/có mặt
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-slate-50">
                          <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            STT
                          </th>
                          <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            Mã Số
                          </th>
                          <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            Họ và Tên
                          </th>
                          <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">
                            Trạng thái
                          </th>
                          <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            Ghi chú
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {students.map((student, index) => (
                          <tr
                            key={student.id}
                            onClick={() => handleToggleAttendance(student.id)}
                            className="group hover:bg-slate-50 transition-colors cursor-pointer"
                          >
                            <td className="px-8 py-6 text-sm text-slate-400 font-medium">
                              {index + 1}
                            </td>
                            <td className="px-8 py-6">
                              <span className="text-xs font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-lg">
                                {student.code}
                              </span>
                            </td>
                            <td className="px-8 py-6">
                              <span
                                className={`text-sm font-bold ${student.present ? "text-slate-900" : "text-slate-400 line-through decoration-red-400/50"}`}
                              >
                                {student.name}
                              </span>
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex justify-center">
                                {student.present ? (
                                  <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center border border-green-200">
                                    <Check className="w-5 h-5" />
                                  </div>
                                ) : (
                                  <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center border border-red-200">
                                    <X className="w-5 h-5" />
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <input
                                type="text"
                                value={student.note}
                                onChange={(e) => {
                                  e.stopPropagation();
                                  setStudents(
                                    students.map((s) =>
                                      s.id === student.id
                                        ? { ...s, note: e.target.value }
                                        : s,
                                    ),
                                  );
                                }}
                                onClick={(e) => e.stopPropagation()}
                                placeholder="Ghi chú nhanh..."
                                className="bg-transparent border-none outline-none text-xs text-slate-500 w-full focus:bg-slate-100 px-2 py-1 rounded transition-all"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

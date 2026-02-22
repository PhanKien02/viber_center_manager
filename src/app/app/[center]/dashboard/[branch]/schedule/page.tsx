"use client";

import {
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  Plus,
  Crown,
  GraduationCap,
  BookOpen,
  X,
  Calendar,
} from "lucide-react";
import { useState } from "react";

const days = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"];
const timeSlots = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

interface ScheduleTeacher {
  id: number;
  name: string;
  role: "main" | "assistant";
}

interface ScheduleItem {
  id: number;
  day: string;
  startHour: number; // e.g. 8 for "08:00"
  durationHours: number; // e.g. 1.5 for 90 minutes
  className: string;
  course: string;
  teachers: ScheduleTeacher[];
  room: string;
  accentColor: string;
  bgColor: string;
  textColor: string;
  students: number;
}

const scheduleData: ScheduleItem[] = [
  {
    id: 1,
    day: "Thứ 2",
    startHour: 8,
    durationHours: 1.5,
    className: "Toán 12-A1",
    course: "Toán ôn thi ĐH",
    teachers: [
      { id: 1, name: "Thầy Hùng", role: "main" },
      { id: 4, name: "Cô Mai", role: "assistant" },
    ],
    room: "302",
    accentColor: "border-l-sky-500",
    bgColor: "bg-sky-50",
    textColor: "text-sky-700",
    students: 25,
  },
  {
    id: 2,
    day: "Thứ 2",
    startHour: 14,
    durationHours: 1.5,
    className: "IELTS Intensive",
    course: "IELTS 6.5+",
    teachers: [
      { id: 2, name: "Cô Vy", role: "main" },
      { id: 6, name: "Cô Linh", role: "main" },
      { id: 8, name: "Cô Hà", role: "assistant" },
    ],
    room: "Lab 01",
    accentColor: "border-l-orange-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    students: 12,
  },
  {
    id: 3,
    day: "Thứ 3",
    startHour: 9,
    durationHours: 1.5,
    className: "Toán Tư Duy",
    course: "Toán phân tích",
    teachers: [
      { id: 4, name: "Cô Mai", role: "main" },
      { id: 7, name: "Thầy Đức", role: "assistant" },
    ],
    room: "201",
    accentColor: "border-l-emerald-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    students: 18,
  },
  {
    id: 4,
    day: "Thứ 4",
    startHour: 18,
    durationHours: 2,
    className: "Python Pro",
    course: "Lập trình Python",
    teachers: [
      { id: 3, name: "Thầy Nam", role: "main" },
      { id: 5, name: "Thầy Phong", role: "assistant" },
      { id: 7, name: "Thầy Đức", role: "assistant" },
    ],
    room: "CNTT 1",
    accentColor: "border-l-violet-500",
    bgColor: "bg-violet-50",
    textColor: "text-violet-700",
    students: 8,
  },
  {
    id: 5,
    day: "Thứ 5",
    startHour: 14,
    durationHours: 1.5,
    className: "IELTS Intensive",
    course: "IELTS 6.5+",
    teachers: [
      { id: 2, name: "Cô Vy", role: "main" },
      { id: 6, name: "Cô Linh", role: "main" },
    ],
    room: "Lab 01",
    accentColor: "border-l-orange-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    students: 12,
  },
  {
    id: 6,
    day: "Thứ 6",
    startHour: 8,
    durationHours: 1.5,
    className: "Toán 12-A1",
    course: "Toán ôn thi ĐH",
    teachers: [
      { id: 1, name: "Thầy Hùng", role: "main" },
      { id: 4, name: "Cô Mai", role: "assistant" },
    ],
    room: "302",
    accentColor: "border-l-sky-500",
    bgColor: "bg-sky-50",
    textColor: "text-sky-700",
    students: 25,
  },
  {
    id: 7,
    day: "Chủ Nhật",
    startHour: 9,
    durationHours: 2,
    className: "Python Kids 05",
    course: "Lập trình Python",
    teachers: [
      { id: 3, name: "Thầy Nam", role: "main" },
      { id: 5, name: "Thầy Phong", role: "assistant" },
    ],
    room: "CNTT 1",
    accentColor: "border-l-rose-500",
    bgColor: "bg-rose-50",
    textColor: "text-rose-700",
    students: 8,
  },
];

const AVATAR_COLORS = [
  "bg-amber-500",
  "bg-teal-500",
  "bg-rose-500",
  "bg-sky-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-cyan-500",
  "bg-fuchsia-500",
];

function getInitials(name: string) {
  const parts = name
    .replace(/^(Thầy|Cô)\s+/, "")
    .trim()
    .split(" ");
  return parts[parts.length - 1]?.charAt(0).toUpperCase() ?? "?";
}

const CELL_HEIGHT = 80; // px per hour
const START_HOUR = 7;

function getEndTimeStr(startHour: number, durationHours: number): string {
  const totalMinutes = startHour * 60 + Math.round(durationHours * 60);
  const endHour = Math.floor(totalMinutes / 60);
  const endMin = totalMinutes % 60;
  return `${String(endHour).padStart(2, "0")}:${String(endMin).padStart(2, "0")}`;
}

function ScheduleCard({
  item,
  onClick,
}: {
  item: ScheduleItem;
  onClick: (item: ScheduleItem) => void;
}) {
  const top = (item.startHour - START_HOUR) * CELL_HEIGHT + 4;
  const height = item.durationHours * CELL_HEIGHT - 8;
  const mainTeachers = item.teachers.filter((t) => t.role === "main");
  const assistants = item.teachers.filter((t) => t.role === "assistant");
  const endTimeStr = getEndTimeStr(item.startHour, item.durationHours);

  return (
    <div
      onClick={() => onClick(item)}
      className={`absolute inset-x-1 rounded-2xl border-l-4 ${item.accentColor} ${item.bgColor} shadow-sm group cursor-pointer hover:-translate-y-0.5 hover:shadow-md transition-all overflow-hidden animate-in zoom-in-95 fade-in duration-200`}
      style={{ top: `${top}px`, height: `${height}px` }}
    >
      <div className="p-2.5 h-full flex flex-col justify-between">
        <div>
          <p className="text-[11px] font-bold text-slate-800 leading-tight line-clamp-1">
            {item.className}
          </p>
          <div
            className={`text-[9px] font-bold ${item.textColor} flex items-center gap-1 mt-0.5`}
          >
            <Clock className="w-2.5 h-2.5" />
            {String(item.startHour).padStart(2, "0")}:00 – {endTimeStr}
          </div>
        </div>

        {height >= 100 && (
          <div className="space-y-1">
            {/* Teacher Avatars */}
            <div className="flex items-center gap-0.5">
              <div className="flex -space-x-1">
                {mainTeachers.slice(0, 2).map((t, i) => (
                  <div
                    key={t.id}
                    className={`w-5 h-5 rounded-full ${AVATAR_COLORS[t.id % AVATAR_COLORS.length]} flex items-center justify-center text-white text-[8px] font-bold ring-1 ring-white shrink-0`}
                    style={{ zIndex: 10 - i }}
                  >
                    {getInitials(t.name)}
                  </div>
                ))}
                {assistants.slice(0, 2).map((t, i) => (
                  <div
                    key={t.id}
                    className={`w-5 h-5 rounded-full ${AVATAR_COLORS[t.id % AVATAR_COLORS.length]} flex items-center justify-center text-white text-[8px] font-bold ring-1 ring-white ring-offset-0 opacity-75 shrink-0`}
                    style={{ zIndex: 10 - i }}
                  >
                    {getInitials(t.name)}
                  </div>
                ))}
                {item.teachers.length > 4 && (
                  <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-[8px] font-bold ring-1 ring-white">
                    +{item.teachers.length - 4}
                  </div>
                )}
              </div>
              <span
                className={`text-[9px] font-bold ${item.textColor} opacity-70 ml-1`}
              >
                {item.teachers.length} GV
              </span>
            </div>

            <div
              className={`text-[9px] font-bold ${item.textColor} opacity-70 flex items-center gap-1`}
            >
              <MapPin className="w-2.5 h-2.5" />
              {item.room}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Popup Detail for a schedule item
function ScheduleDetailPopup({
  item,
  onClose,
}: {
  item: ScheduleItem;
  onClose: () => void;
}) {
  const mainTeachers = item.teachers.filter((t) => t.role === "main");
  const assistants = item.teachers.filter((t) => t.role === "assistant");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-white rounded-[32px] p-8 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${item.bgColor} ${item.textColor} border ${item.accentColor.replace("border-l-", "border-")} mb-2`}
            >
              <BookOpen className="w-3 h-3" />
              {item.course}
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {item.className}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-50 rounded-2xl p-3 text-center">
            <Clock className="w-4 h-4 text-slate-400 mx-auto mb-1" />
            <p className="text-xs font-bold text-slate-700">
              {String(item.startHour).padStart(2, "0")}:00
            </p>
            <p className="text-[10px] text-slate-400">Bắt đầu</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-3 text-center">
            <MapPin className="w-4 h-4 text-slate-400 mx-auto mb-1" />
            <p className="text-xs font-bold text-slate-700">{item.room}</p>
            <p className="text-[10px] text-slate-400">Phòng học</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-3 text-center">
            <Users className="w-4 h-4 text-slate-400 mx-auto mb-1" />
            <p className="text-xs font-bold text-slate-700">{item.students}</p>
            <p className="text-[10px] text-slate-400">Học viên</p>
          </div>
        </div>

        {/* Teachers Section */}
        <div className="space-y-4">
          {/* Main Teachers */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-2 flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5" />
              Giáo viên chính ({mainTeachers.length})
            </p>
            <div className="flex flex-wrap gap-2">
              {mainTeachers.map((t) => (
                <div
                  key={t.id}
                  className="flex items-center gap-2 bg-amber-50 border border-amber-100 px-3 py-2 rounded-xl"
                >
                  <div
                    className={`w-7 h-7 ${AVATAR_COLORS[t.id % AVATAR_COLORS.length]} rounded-full flex items-center justify-center text-white text-[10px] font-bold`}
                  >
                    {getInitials(t.name)}
                  </div>
                  <span className="text-sm font-bold text-slate-700">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Assistants */}
          {assistants.length > 0 && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-teal-600 mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                Trợ giảng ({assistants.length})
              </p>
              <div className="flex flex-wrap gap-2">
                {assistants.map((t) => (
                  <div
                    key={t.id}
                    className="flex items-center gap-2 bg-teal-50 border border-teal-100 px-3 py-2 rounded-xl"
                  >
                    <div
                      className={`w-7 h-7 ${AVATAR_COLORS[t.id % AVATAR_COLORS.length]} rounded-full flex items-center justify-center text-white text-[10px] font-bold`}
                    >
                      {getInitials(t.name)}
                    </div>
                    <span className="text-sm font-bold text-slate-700">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// List view mode
function ListView({
  items,
  onSelect,
}: {
  items: ScheduleItem[];
  onSelect: (item: ScheduleItem) => void;
}) {
  return (
    <div className="space-y-3">
      {days.map((day) => {
        const dayItems = items
          .filter((i) => i.day === day)
          .sort((a, b) => a.startHour - b.startHour);
        if (dayItems.length === 0) return null;
        return (
          <div key={day}>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 px-1">
              {day}
            </p>
            <div className="space-y-2">
              {dayItems.map((item) => {
                const mainTeachers = item.teachers.filter(
                  (t) => t.role === "main",
                );
                const assistants = item.teachers.filter(
                  (t) => t.role === "assistant",
                );
                return (
                  <div
                    key={item.id}
                    onClick={() => onSelect(item)}
                    className={`flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-md transition-all cursor-pointer group border-l-4 ${item.accentColor}`}
                  >
                    <div className="text-center min-w-[52px]">
                      <p className="text-sm font-bold text-slate-900">
                        {String(item.startHour).padStart(2, "0")}:00
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {item.durationHours}h
                      </p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {item.className}
                      </p>
                      <p className="text-xs text-slate-400">{item.course}</p>
                    </div>
                    <div className="hidden sm:flex flex-col gap-1 items-end">
                      {/* Main teachers */}
                      <div className="flex items-center gap-1">
                        <Crown className="w-3 h-3 text-amber-500" />
                        <span className="text-[10px] font-bold text-amber-700 truncate max-w-[120px]">
                          {mainTeachers.map((t) => t.name).join(", ")}
                        </span>
                      </div>
                      {assistants.length > 0 && (
                        <div className="flex items-center gap-1">
                          <GraduationCap className="w-3 h-3 text-teal-500" />
                          <span className="text-[10px] font-bold text-teal-700 truncate max-w-[120px]">
                            {assistants.map((t) => t.name).join(", ")}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="hidden md:flex items-center gap-1 text-[10px] font-bold text-slate-500 min-w-[70px]">
                      <MapPin className="w-3 h-3" />
                      {item.room}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

type ViewMode = "week" | "list";

export default function SchedulePage() {
  const currentWeek = "Tuần 4: 22/01 – 28/01/2024";
  const [viewMode, setViewMode] = useState<ViewMode>("week");
  const [selectedItem, setSelectedItem] = useState<ScheduleItem | null>(null);

  const totalClasses = scheduleData.length;
  const totalTeachingSlots = scheduleData.reduce(
    (acc, s) => acc + s.teachers.length,
    0,
  );

  return (
    <div className="p-4 lg:p-8 max-w-[1400px] mx-auto w-full space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading mb-1">
            Lịch học & Lịch dạy
          </h1>
          <p className="text-secondary text-sm">
            Theo dõi thời khóa biểu và phân công giáo viên
          </p>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98] cursor-pointer">
          <Plus className="w-5 h-5" />
          Xếp lịch mới
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">
            Buổi học/tuần
          </p>
          <p className="text-2xl font-bold text-slate-900">{totalClasses}</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">
            Lượt GV/tuần
          </p>
          <p className="text-2xl font-bold text-slate-900">
            {totalTeachingSlots}
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase text-slate-400 mb-1 flex items-center gap-1">
            <Crown className="w-3 h-3 text-amber-500" /> GV Chính
          </p>
          <p className="text-2xl font-bold text-slate-900">
            {scheduleData.reduce(
              (acc, s) =>
                acc + s.teachers.filter((t) => t.role === "main").length,
              0,
            )}
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase text-slate-400 mb-1 flex items-center gap-1">
            <GraduationCap className="w-3 h-3 text-teal-500" /> Trợ giảng
          </p>
          <p className="text-2xl font-bold text-slate-900">
            {scheduleData.reduce(
              (acc, s) =>
                acc + s.teachers.filter((t) => t.role === "assistant").length,
              0,
            )}
          </p>
        </div>
      </div>

      {/* Calendar Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2">
          <button className="p-2.5 hover:bg-slate-50 rounded-xl border border-slate-100 transition-all text-slate-500 cursor-pointer">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="px-6 py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-700 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400" />
            {currentWeek}
          </div>
          <button className="p-2.5 hover:bg-slate-50 rounded-xl border border-slate-100 transition-all text-slate-500 cursor-pointer">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("week")}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${viewMode === "week" ? "bg-primary text-white shadow-md shadow-primary/10" : "bg-white text-slate-500 border border-slate-100 hover:bg-slate-50"}`}
          >
            Tuần
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${viewMode === "list" ? "bg-primary text-white shadow-md shadow-primary/10" : "bg-white text-slate-500 border border-slate-100 hover:bg-slate-50"}`}
          >
            Danh sách
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-xs text-slate-400 font-medium">
          Phân loại giáo viên:
        </span>
        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full">
          <Crown className="w-3.5 h-3.5" />
          Giáo viên Chính
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1.5 rounded-full">
          <GraduationCap className="w-3.5 h-3.5" />
          Trợ giảng
        </div>
      </div>

      {/* Views */}
      {viewMode === "list" ? (
        <ListView items={scheduleData} onSelect={setSelectedItem} />
      ) : (
        /* Weekly Grid */
        <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <div
              className="grid min-w-[900px]"
              style={{ gridTemplateColumns: `72px repeat(7, 1fr)` }}
            >
              {/* Header Row */}
              <div className="h-14 border-b border-slate-100 bg-slate-50/50 flex items-center justify-center">
                <Clock className="w-4 h-4 text-slate-300" />
              </div>
              {days.map((day, i) => (
                <div
                  key={day}
                  className={`h-14 border-b border-l border-slate-100 flex flex-col items-center justify-center ${i === new Date().getDay() - 1 ? "bg-primary/5" : "bg-slate-50/30"}`}
                >
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    {day}
                  </span>
                </div>
              ))}

              {/* Time Column + Day Columns */}
              <div className="col-span-1 border-r border-slate-100">
                {timeSlots.map((time) => (
                  <div
                    key={time}
                    className="border-b border-slate-50 flex items-start justify-end pr-3 pt-1.5"
                    style={{ height: `${CELL_HEIGHT}px` }}
                  >
                    <span className="text-[10px] font-bold text-slate-400">
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              {days.map((day) => {
                const dayItems = scheduleData.filter(
                  (item) => item.day === day,
                );
                const totalRows = timeSlots.length;
                return (
                  <div
                    key={day}
                    className="relative border-l border-slate-100"
                    style={{ height: `${totalRows * CELL_HEIGHT}px` }}
                  >
                    {/* Hour lines */}
                    {timeSlots.map((_, hi) => (
                      <div
                        key={hi}
                        className="absolute left-0 right-0 border-b border-slate-50"
                        style={{
                          top: `${hi * CELL_HEIGHT}px`,
                          height: `${CELL_HEIGHT}px`,
                        }}
                      />
                    ))}
                    {/* Schedule items */}
                    {dayItems.map((item) => (
                      <ScheduleCard
                        key={item.id}
                        item={item}
                        onClick={setSelectedItem}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Detail Popup */}
      <>
        {selectedItem && (
          <ScheduleDetailPopup
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </>
    </div>
  );
}

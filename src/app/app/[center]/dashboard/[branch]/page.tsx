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
  Bell,
  MoreVertical,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BranchDashboardOverview() {
  const stats = [
    {
      label: "Tổng học viên",
      value: "125",
      change: "+12%",
      icon: GraduationCap,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: "Số lớp học",
      value: "24",
      change: "+4",
      icon: BookOpen,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      label: "Giáo viên",
      value: "12",
      change: "0",
      icon: Users,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      label: "Doanh thu tháng",
      value: "128M",
      change: "+18%",
      icon: TrendingUp,
      color: "text-violet-500",
      bg: "bg-violet-500/10",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "checkin",
      user: "Nguyễn Văn A",
      action: "Đã điểm danh lớp Toán 12-A1",
      time: "10 phút trước",
      status: "success",
    },
    {
      id: 2,
      type: "payment",
      user: "Trần Thị B",
      action: "Đóng học phí IELTS 2 tháng",
      time: "25 phút trước",
      status: "success",
    },
    {
      id: 3,
      type: "warning",
      user: "Lớp Lý 11-B2",
      action: "Nghỉ quá 15% sỉ số",
      time: "45 phút trước",
      status: "destructive",
    },
  ];

  const upcomingClasses = [
    {
      class: "Toán 12-A1",
      time: "14:00 - 15:30",
      room: "302",
      teacher: "Thầy Hưng",
    },
    {
      class: "IELTS Foundation",
      time: "15:45 - 17:15",
      room: "Lab 01",
      teacher: "Cô Mai",
    },
  ];

  const quickActions = [
    { label: "Điểm danh", icon: UserCheck },
    { label: "Thu học phí", icon: CreditCard },
    { label: "Thông báo", icon: Bell },
    { label: "Xếp lịch", icon: Calendar },
  ];

  return (
    <div className="p-4 lg:p-6 max-w-[1600px] mx-auto w-full space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* 🚀 Hero Section - Featured Banner */}
      <div className="relative overflow-hidden rounded-4xl bg-primary scale-[0.99] hover:scale-100 transition-transform duration-500 shadow-xl shadow-primary/20 p-8 lg:p-12 text-primary-foreground">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 -mr-32 -mt-32 rounded-full blur-[80px]" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
              Chào mừng trở lại! 👋
            </h2>
            <p className="text-primary-foreground/80 text-base lg:text-lg leading-relaxed">
              Hôm nay trung tâm có{" "}
              <span className="font-bold text-white">12 lớp học</span> sắp diễn
              ra và <span className="font-bold text-white">4 học viên</span> chờ
              duyệt đăng ký mới.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold rounded-xl"
              >
                Lập báo cáo nhanh
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold rounded-xl bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-white"
              >
                Cập nhật dữ liệu
              </Button>
            </div>
          </div>
          <div
            className="hidden lg:block relative z-10 animate-in zoom-in-75 fade-in duration-500 fill-mode-both"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-32 h-32 bg-white/20 rounded-3xl backdrop-blur-md flex items-center justify-center rotate-[-10deg] shadow-2xl">
              <TrendingUp className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* 📊 KPI Dashboard with asymmetric layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <Card className="rounded-3xl border-0 shadow-sm hover:shadow-md transition-shadow h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.bg} ${item.color}`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700 hover:bg-green-100 rounded-full font-bold px-2.5"
                  >
                    {item.change}{" "}
                    <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <h3 className="text-3xl font-extrabold text-foreground">
                    {item.value}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* ⚡ Main Content: Quick Actions & Live Feed (Spans 8 cols) */}
        <div className="lg:col-span-8 space-y-6 lg:space-y-8">
          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickActions.map((action, idx) => (
              <Button
                key={idx}
                variant="outline"
                className="h-28 flex flex-col items-center justify-center gap-3 rounded-3xl bg-card hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all shadow-sm"
              >
                <div className="p-3 rounded-2xl bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <action.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm">{action.label}</span>
              </Button>
            ))}
          </div>

          {/* Activity Feed */}
          <Card className="rounded-4xl border-0 shadow-sm overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between px-6 lg:px-8 pt-6 pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Feed Hoạt động
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary font-semibold"
              >
                Xem tất cả
              </Button>
            </CardHeader>
            <CardContent className="px-6 lg:px-8 pb-8 pt-4">
              <div className="space-y-6">
                {recentActivities.map((act) => (
                  <div key={act.id} className="flex gap-4 items-start group">
                    <div className="relative mt-1">
                      <div
                        className={`w-3 h-3 rounded-full ring-4 ring-background z-10 relative
                        ${act.status === "success" ? "bg-green-500" : "bg-destructive"}
                      `}
                      />
                      <div className="absolute top-3 left-1/2 -ml-px w-[2px] h-12 bg-border group-last:hidden" />
                    </div>
                    <div className="flex-1 bg-muted/30 p-4 rounded-2xl transition-colors hover:bg-muted/60">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-foreground">
                          {act.user}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground">
                          {act.time}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/70">{act.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 📅 Sidebar Column: Schedule (Spans 4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="rounded-4xl border-0 bg-slate-900 text-slate-50 shadow-xl overflow-hidden relative min-h-[400px] flex flex-col">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />

            <CardHeader className="relative z-10 pb-4">
              <CardTitle className="flex items-center gap-2 text-xl font-bold">
                <Calendar className="w-5 h-5 text-primary" />
                Lớp học sắp tới
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10 space-y-4 flex-1">
              {upcomingClasses.map((cls, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 hover:bg-slate-800/80 transition-colors p-4 rounded-2xl border border-slate-700/50 backdrop-blur-sm cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-primary group-hover:text-blue-400 transition-colors">
                        {cls.class}
                      </h4>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" /> {cls.time}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-slate-600 text-slate-300"
                    >
                      Phòng {cls.room}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-700/50">
                    <Avatar className="w-6 h-6 border border-slate-600">
                      <AvatarFallback className="bg-slate-700 text-[10px]">
                        {cls.teacher[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium text-slate-300">
                      {cls.teacher}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>

            <CardFooter className="relative z-10 pt-4 pb-6 px-6">
              <Button className="w-full rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold">
                Mở Lịch tuần
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

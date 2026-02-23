"use client";

import {
  CreditCard,
  Smartphone,
  Calendar,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    title: "Quản lý học phí tự động",
    description:
      "Tự động hóa việc nhắc phí, thu phí qua mã QR và xuất hóa đơn điện tử chỉ trong 1 giây.",
    icon: CreditCard,
    color: "bg-blue-500",
    benefits: [
      "Nhắc nợ tự động qua Zalo/SMS",
      "Đối soát ngân hàng tức thì",
      "Lịch sử thanh toán minh bạch",
    ],
  },
  {
    title: "Kết nối phụ huynh qua App",
    description:
      "Phụ huynh theo dõi điểm danh, kết quả học tập và thông báo từ trung tâm mọi lúc mọi nơi.",
    icon: Smartphone,
    color: "bg-indigo-500",
    benefits: [
      "Số liên lạc điện tử",
      "Báo cáo chuyên cần",
      "Trao đổi 1-1 với giáo viên",
    ],
  },
  {
    title: "Quản lý lịch dạy thông minh",
    description:
      "Sắp xếp thời khóa biểu, quản lý phòng học và tính lương giáo viên tự động theo tiết dạy.",
    icon: Calendar,
    color: "bg-cyan-500",
    benefits: [
      "Xử lý trùng lịch học",
      "Chấm công bằng QR-Code",
      "Quản lý giáo viên thỉnh giảng",
    ],
  },
  {
    title: "Báo cáo tài chính & Doanh thu",
    description:
      "Hệ thống biểu đồ trực quan giúp bạn nắm bắt dòng tiền, lợi nhuận và dự báo tăng trưởng.",
    icon: BarChart3,
    color: "bg-blue-600",
    benefits: [
      "Báo cáo lỗ lãi P&L",
      "Phân tích nguồn học viên",
      "Quản lý chi phí vận hành",
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white relative">
      {/* Background Gradient */}
      <div className="absolute inset-x-0 top-0 h-96 bg-linear-to-b from-slate-50 to-white -z-10 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-orange-500 font-black tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
            Tính Năng Ưu Việt
          </h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Mọi công cụ bạn cần để quản lý trung tâm chuyên nghiệp
          </p>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            EduScale được thiết kế chuyên biệt cho các trung tâm luyện thi, giải
            quyết triệt để những khó khăn trong vận hành hàng ngày.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-md hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-300 group animate-in slide-in-from-bottom-8 duration-700 hover:-translate-y-2 fill-mode-both"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col gap-8 md:flex-row md:gap-8">
                <div
                  className={`${feature.color} w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 shadow-lg shadow-${feature.color.split("-")[1]}-500/30 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-4">
                    {feature.benefits.map((benefit, bIndex) => (
                      <li
                        key={bIndex}
                        className="flex items-center gap-3 text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors"
                      >
                        <div className="bg-green-100 p-1 rounded-full">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

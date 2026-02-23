"use client";

import { Check } from "lucide-react";

const plans = [
  {
    name: "Cơ bản",
    price: "499k",
    period: "/tháng",
    description: "Phù hợp cho trung tâm dưới 100 học viên.",
    features: [
      "Quản lý 100 học viên",
      "Thông báo App cơ bản",
      "Quản lý học phí",
      "Báo cáo cơ bản",
      "Hỗ trợ qua Zalo",
    ],
    cta: "Bắt đầu ngay",
    popular: false,
  },
  {
    name: "Chuyên nghiệp",
    price: "999k",
    period: "/tháng",
    description: "Giải pháp tối ưu cho hầu hết các trung tâm.",
    features: [
      "Quản lý 500 học viên",
      "Tất cả tính năng Premium",
      "Quản lý lương giáo viên",
      "Báo cáo tài chính chi tiết",
      "Ưu tiên hỗ trợ 24/7",
      "Tùy chỉnh thương hiệu",
    ],
    cta: "Dùng thử miễn phí",
    popular: true,
  },
  {
    name: "Doanh nghiệp",
    price: "Liên hệ",
    period: "",
    description: "Dành cho hệ thống nhiều chi nhánh.",
    features: [
      "Không giới hạn học viên",
      "Quản lý đa chi nhánh",
      "API tích hợp riêng",
      "Đào tạo trực tiếp tại trung tâm",
      "Cam kết chất lượng (SLA)",
    ],
    cta: "Chuyên gia tư vấn",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-slate-50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-orange-500 font-black tracking-widest uppercase text-sm mb-4">
            Bảng Giá Đầu Tư
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Linh hoạt cho mọi quy mô
          </h3>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            Chọn gói dịch vụ phù hợp với quy mô trung tâm của bạn. Không có phí
            ẩn, nâng cấp hoặc hủy bất cứ lúc nào.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 md:p-10 rounded-[2.5rem] border animate-in zoom-in-95 duration-700 fill-mode-both transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                plan.popular
                  ? "border-orange-200 bg-white shadow-2xl shadow-orange-500/10 ring-4 ring-orange-500/10"
                  : "border-slate-200 bg-white/60 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-orange-400 to-rose-500 text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
                  Phổ biến nhất
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black mb-2 text-slate-900">
                  {plan.name}
                </h3>
                <p className="text-slate-500 text-sm font-medium">
                  {plan.description}
                </p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-5xl font-black text-slate-900">
                  {plan.price}
                </span>
                <span className="text-slate-500 font-medium">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-5 mb-10 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                  >
                    <div
                      className={`p-1 rounded-full shrink-0 ${plan.popular ? "bg-orange-100 text-orange-600" : "bg-primary/10 text-primary"}`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-extrabold transition-all duration-300 mt-auto cursor-pointer flex justify-center items-center ${
                  plan.popular
                    ? "bg-orange-500 text-white hover:bg-orange-600 shadow-xl shadow-orange-500/25 hover:-translate-y-1"
                    : "bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 hover:-translate-y-1"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

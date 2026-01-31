"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

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
                        "Hỗ trợ qua Zalo"
                ],
                cta: "Bắt đầu ngay",
                popular: false
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
                        "Tùy chỉnh thương hiệu"
                ],
                cta: "Dùng thử miễn phí",
                popular: true
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
                        "Cam kết chất lượng (SLA)"
                ],
                cta: "Chuyên gia tư vấn",
                popular: false
        }
];

export default function Pricing() {
        return (
                <section id="pricing" className="py-24">
                        <div className="container mx-auto px-4">
                                <div className="text-center max-w-2xl mx-auto mb-16">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Bảng giá linh hoạt</h2>
                                        <p className="text-secondary text-lg">
                                                Chọn gói dịch vụ phù hợp với quy mô trung tâm của bạn.
                                                Không có phí ẩn, nâng cấp hoặc hủy bất cứ lúc nào.
                                        </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                        {plans.map((plan, index) => (
                                                <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                                        className={`relative p-8 rounded-3xl border ${plan.popular
                                                                        ? "border-primary bg-primary/5 shadow-2xl shadow-primary/10"
                                                                        : "border-gray-100 bg-white"
                                                                }`}
                                                >
                                                        {plan.popular && (
                                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                                                        Phổ biến nhất
                                                                </div>
                                                        )}

                                                        <div className="mb-8">
                                                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                                                <p className="text-secondary text-sm">{plan.description}</p>
                                                        </div>

                                                        <div className="mb-8 flex items-baseline gap-1">
                                                                <span className="text-4xl font-bold">{plan.price}</span>
                                                                <span className="text-secondary">{plan.period}</span>
                                                        </div>

                                                        <ul className="space-y-4 mb-8">
                                                                {plan.features.map((feature, fIndex) => (
                                                                        <li key={fIndex} className="flex items-center gap-3 text-sm">
                                                                                <div className={`p-1 rounded-full ${plan.popular ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                                                                                        <Check className="w-3 h-3" />
                                                                                </div>
                                                                                {feature}
                                                                        </li>
                                                                ))}
                                                        </ul>

                                                        <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${plan.popular
                                                                        ? "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25"
                                                                        : "bg-white border border-gray-200 hover:border-primary/50 text-foreground"
                                                                }`}>
                                                                {plan.cta}
                                                        </button>
                                                </motion.div>
                                        ))}
                                </div>
                        </div>
                </section>
        );
}

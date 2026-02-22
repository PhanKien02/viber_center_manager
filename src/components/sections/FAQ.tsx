"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Phần mềm có khó sử dụng cho giáo viên lớn tuổi không?",
    answer:
      "Không hề. EduScale được thiết kế với giao diện tối giản, các nút bấm to rõ ràng và quy trình thao tác cực kỳ đơn giản, chỉ cần 15 phút làm quen là giáo viên có thể sử dụng được ngay.",
  },
  {
    question: "Dữ liệu của học sinh có được bảo mật an toàn không?",
    answer:
      "Chúng tôi sử dụng tiêu chuẩn mã hóa AES-256 và lưu trữ trên hạ tầng cloud của Google, đảm bảo dữ liệu luôn được sao lưu hàng ngày và không bao giờ bị rò rỉ.",
  },
  {
    question:
      "Tôi có thể sử dụng logo và tên trung tâm của mình trên App phụ huynh không?",
    answer:
      "Hoàn toàn được. Gói 'Chuyên nghiệp' hỗ trợ tùy chỉnh bộ nhận diện thương hiệu để phụ huynh thấy được sự chuyên nghiệp và uy tín của trung tâm bạn.",
  },
  {
    question: "Nếu tôi gặp sự cố trong lúc sử dụng thì liên hệ ai?",
    answer:
      "Đội ngũ kỹ thuật của chúng tôi luôn trực chiến 24/7 qua Zalo và Hotline. Các gói Premium còn được chỉ định một nhân viên tư vấn riêng để hỗ trợ 1-1.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Câu hỏi thường gặp
          </h2>
          <p className="text-secondary text-lg">
            Giải đáp những thắc mắc phổ biến nhất để bạn yên tâm bắt đầu hành
            trình chuyển đổi số.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-secondary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <>
                {openIndex === index && (
                  <div className="animate-in fade-in zoom-in-95 duration-300">
                    <div className="p-6 pt-0 text-secondary leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

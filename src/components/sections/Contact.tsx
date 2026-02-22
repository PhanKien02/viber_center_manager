"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Info Side */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">
              Liên Hệ
            </h2>
            <p className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Sẵn sàng để bắt đầu chưa?
            </p>
            <p className="text-secondary text-lg mb-8">
              Chúng tôi luôn ở đây để hỗ trợ bạn. Hãy để lại thông tin hoặc liên
              hệ trực tiếp qua các kênh dưới đây.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary font-medium">
                    Hotline 24/7
                  </p>
                  <p className="font-bold">1900 123 456</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary font-medium">
                    Email hỗ trợ
                  </p>
                  <p className="font-bold">contact@eduscale.vn</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary font-medium">
                    Địa chỉ trụ sở
                  </p>
                  <p className="font-bold">72 Lê Thánh Tôn, Quận 1, TP. HCM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3 bg-muted/30 p-8 md:p-12 rounded-3xl border border-muted animate-in slide-in-from-right-8 duration-500">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Số điện thoại</label>
                <input
                  type="tel"
                  placeholder="0901 xxx xxx"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold ml-1">Tên Trung tâm</label>
                <input
                  type="text"
                  placeholder="Trung tâm Luyện thi ABC"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold ml-1">
                  Nội dung tư vấn
                </label>
                <textarea
                  rows={4}
                  placeholder="Bạn quan tâm đến tính năng nào của chúng tôi?"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-primary hover:bg-primary-hover text-white py-5 rounded-2xl font-bold shadow-xl shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Gửi yêu cầu tư vấn
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

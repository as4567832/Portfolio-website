import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { testimonials } from '../data/testimonials';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Kind Words" title="What People" highlight="Say" />

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="testimonials-swiper pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="glass-card p-10 text-center mx-2">
                <FaQuoteLeft className="text-3xl text-primary/50 mx-auto mb-6" />
                <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">"{t.quote}"</p>
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-primary/50"
                />
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

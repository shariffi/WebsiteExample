import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: 'Sarah Johnson',
		company: 'Bloom Florist',
		quote: 'WebStudio transformed our outdated website into a beautiful, functional online presence that perfectly represents our brand. Since the redesign, we\'ve seen a 40% increase in inquiries!',
		avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
	},
	{
		id: 2,
		name: 'Mark Williams',
		company: 'Williams Law Firm',
		quote: 'As a small law firm, we needed a professional website that built trust with potential clients. WebStudio delivered exactly what we needed, and we\'re now ranking on the first page of Google for our target keywords.',
		avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
	},
	{
		id: 3,
		name: 'Emma Thompson',
		company: 'Coastal Cafe',
		quote: 'Our new website not only looks amazing but has also significantly improved our online ordering system. The team at WebStudio was responsive, professional, and a pleasure to work with.',
		avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
	},
	{
		id: 4,
		name: 'David Chen',
		company: 'Precision Dental',
		quote: 'WebStudio created a website that has helped us attract new patients and streamline our appointment booking process. Their attention to detail and understanding of our industry was impressive.',
		avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
	},
];

const TestimonialsSection: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const nextTestimonial = () => {
		setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
	};

	const prevTestimonial = () => {
		setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
	};

	useEffect(() => {
		if (!isPaused) {
			const interval = setInterval(() => {
				nextTestimonial();
			}, 5000);
			return () => clearInterval(interval);
		}
	}, [isPaused]);

	return (
		<section id="testimonials" className="relative py-24 bg-[#0a192f] overflow-hidden">
			{/* Static and Animated Stars */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="stars"></div>
				<div className="twinkling"></div>
			</div>

			<div className="container relative mx-auto px-4 z-10">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto">
						Don't just take our word for it—see what our clients have to say about working with us.
					</p>
				</div>

				<div
					className="max-w-4xl mx-auto mb-20 relative"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					{/* Testimonial Carousel */}
					<div className="bg-[#112240] rounded-xl p-8 md:p-10 border border-gray-800 shadow-lg">
						<div className="flex justify-center mb-6">
							{[...Array(5)].map((_, i) => (
								<Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
							))}
						</div>
						<p className="text-gray-300 text-lg md:text-xl italic mb-8 text-center">
							"{testimonials[activeIndex].quote}"
						</p>
						<div className="flex items-center justify-center">
							<img
								src={testimonials[activeIndex].avatar}
								alt={testimonials[activeIndex].name}
								className="w-12 h-12 rounded-full object-cover mr-4"
							/>
							<div>
								<h4 className="text-white font-semibold">{testimonials[activeIndex].name}</h4>
								<p className="text-gray-400">{testimonials[activeIndex].company}</p>
							</div>
						</div>
					</div>

					{/* Navigation buttons */}
					<button
						onClick={prevTestimonial}
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300"
						aria-label="Previous testimonial"
					>
						<ChevronLeft size={20} />
					</button>
					<button
						onClick={nextTestimonial}
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300"
						aria-label="Next testimonial"
					>
						<ChevronRight size={20} />
					</button>

					{/* Testimonial indicators */}
					<div className="flex justify-center mt-6 space-x-2">
						{testimonials.map((_, i) => (
							<button
								key={i}
								onClick={() => setActiveIndex(i)}
								className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
									i === activeIndex ? 'bg-indigo-500 w-8' : 'bg-gray-700'
								}`}
								aria-label={`Go to testimonial ${i + 1}`}
							/>
						))}
					</div>
				</div>

				{/* Success metrics */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
					<div className="bg-[#112240] border border-gray-800 rounded-xl p-8 text-center">
						<div className="text-4xl font-bold text-indigo-500 mb-2">40%</div>
						<p className="text-gray-300">Average increase in leads after website launch</p>
					</div>
					<div className="bg-[#112240] border border-gray-800 rounded-xl p-8 text-center">
						<div className="text-4xl font-bold text-indigo-500 mb-2">5-7</div>
						<p className="text-gray-300">Days average delivery time</p>
					</div>
					<div className="bg-[#112240] border border-gray-800 rounded-xl p-8 text-center">
						<div className="text-4xl font-bold text-indigo-500 mb-2">97%</div>
						<p className="text-gray-300">Client satisfaction rate</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
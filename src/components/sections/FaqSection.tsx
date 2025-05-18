import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Faq } from '../../types';

const faqs: Faq[] = [
	{
		id: 1,
		question: 'How long does it take to build a website?',
		answer: 'We typically deliver websites within 5-7 business days from the time we receive all your content and information. For more complex projects with custom functionality, the timeline may be slightly longer, but we\'ll always provide you with a clear timeframe before we begin.',
		category: 'process',
	},
	{
		id: 2,
		question: 'Do I need to supply my own content?',
		answer: 'While you can provide your own content, we also offer content creation services as part of our Growth and Premium packages. For other packages, we can provide guidance on what content works best and can recommend professional copywriters if needed.',
		category: 'content',
	},
	{
		id: 3,
		question: 'Can you take over my existing site?',
		answer: 'Yes, we can take over maintenance, updates, and redesigns of existing websites. We\'ll start with an audit of your current site to identify areas for improvement and then provide recommendations based on your goals and budget.',
		category: 'services',
	},
	{
		id: 4,
		question: 'What\'s included in the monthly care plans?',
		answer: 'Our monthly care plans include security updates, regular backups, uptime monitoring, software updates, and technical support. Higher-tier plans also include content updates, SEO improvements, and regular strategy calls.',
		category: 'services',
	},
	{
		id: 5,
		question: 'Will my website be mobile-friendly?',
		answer: 'Absolutely! All our websites are fully responsive and optimized for mobile devices. We test on multiple screen sizes to ensure your site looks great and functions perfectly regardless of the device your visitors are using.',
		category: 'technical',
	},
	{
		id: 6,
		question: 'How do you handle website hosting?',
		answer: 'Website hosting is included in all our monthly care plans. We use premium, high-performance hosting services with excellent uptime records. If you\'re on the Starter plan, we can recommend reliable hosting providers or manage your hosting for a small additional fee.',
		category: 'technical',
	},
];

const categories = ['all', 'process', 'content', 'services', 'technical'];

const FaqSection: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [activeCategory, setActiveCategory] = useState('all');

	const toggleQuestion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const filteredFaqs =
		activeCategory === 'all'
			? faqs
			: faqs.filter((faq) => faq.category === activeCategory);

	return (
		<section id="faq" className="relative py-24 bg-[#0a192f] overflow-hidden">
			{/* Static and Animated Stars */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="stars"></div>
				<div className="twinkling"></div>
			</div>

			<div className="container relative mx-auto px-4 z-10">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto">
						Having a question? Find quick answers to common questions about our
						services.
					</p>
				</div>

				{/* Category filter */}
				<div className="flex justify-center flex-wrap gap-2 mb-10">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
								activeCategory === category
									? 'bg-indigo-600 text-white'
									: 'bg-gray-800 text-gray-300 hover:bg-gray-700'
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* FAQ accordion */}
				<div className="max-w-3xl mx-auto">
					{filteredFaqs.map((faq, index) => (
						<div
							key={faq.id}
							className="mb-4 border border-gray-800 rounded-xl overflow-hidden"
						>
							<button
								onClick={() => toggleQuestion(index)}
								className="flex justify-between items-center w-full p-6 text-left bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
							>
								<span className="text-lg font-medium text-white">
									{faq.question}
								</span>
								{openIndex === index ? (
									<ChevronUp className="h-5 w-5 text-indigo-400" />
								) : (
									<ChevronDown className="h-5 w-5 text-indigo-400" />
								)}
							</button>
							<div
								className={`overflow-hidden transition-all duration-300 ${
									openIndex === index ? 'max-h-96' : 'max-h-0'
								}`}
							>
								<div className="p-6 bg-gray-800 text-gray-300">
									{faq.answer}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Still have questions CTA */}
				<div className="text-center mt-12">
					<p className="text-white text-lg mb-4">Still have questions?</p>
					<a
						href="#contact"
						className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-medium"
					>
						Contact Us Today
					</a>
				</div>
			</div>
		</section>
	);
};

export default FaqSection;
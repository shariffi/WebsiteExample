import React from 'react';
import { Clock, Award, CheckCircle, Trophy } from 'lucide-react';
import { ValueProp } from '../../types';

const valueProps: ValueProp[] = [
	{
		id: 1,
		title: 'Fast Delivery',
		description: 'Get your new website up and running in just 5-7 days, not weeks or months.',
		icon: 'Clock',
	},
	{
		id: 2,
		title: 'Quality Guaranteed',
		description: '100% custom-built sites that perfectly match your brand and business goals.',
		icon: 'Award',
	},
	{
		id: 3,
		title: 'Client-Focused Approach',
		description: 'We work closely with you to ensure your vision comes to life exactly as you imagined.',
		icon: 'CheckCircle',
	},
	{
		id: 4,
		title: 'UK-Based Support',
		description: 'Get quick, reliable support from our UK-based team whenever you need it.',
		icon: 'Trophy',
	},
];

const IconComponent: React.FC<{ icon: string }> = ({ icon }) => {
	switch (icon) {
		case 'Clock':
			return <Clock className="h-10 w-10 text-[#64ffda]" />;
		case 'Award':
			return <Award className="h-10 w-10 text-[#64ffda]" />;
		case 'CheckCircle':
			return <CheckCircle className="h-10 w-10 text-[#64ffda]" />;
		case 'Trophy':
			return <Trophy className="h-10 w-10 text-[#64ffda]" />;
		default:
			return <Award className="h-10 w-10 text-[#64ffda]" />;
	}
};

const ValuePropsSection: React.FC = () => {
	return (
		<section id="value-props" className="relative py-24 bg-[#0a192f] overflow-hidden">
			{/* Static and Animated Stars */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="stars"></div>
				<div className="twinkling"></div>
			</div>

			<div className="container relative mx-auto px-4 z-10">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Us</h2>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto">
						We deliver exceptional value through our focused approach and attention to detail.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{valueProps.map((prop) => (
						<div
							key={prop.id}
							className="text-center p-6 rounded-xl border border-[#64ffda]/20 bg-[#112240] transition-all duration-300 hover:bg-[#1d3a6d] glow-border"
						>
							<div className="flex justify-center mb-4">
								<IconComponent icon={prop.icon} />
							</div>
							<h3 className="text-xl font-semibold text-white mb-3">{prop.title}</h3>
							<p className="text-gray-300">{prop.description}</p>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<div className="inline-flex flex-wrap justify-center gap-6 bg-[#112240] py-6 px-8 rounded-2xl border border-[#64ffda]/20 glow-border">
						<div className="flex items-center">
							<span className="text-[#64ffda] font-bold mr-2">✓</span>
							<span className="text-gray-300">Google Partner</span>
						</div>
						<div className="flex items-center">
							<span className="text-[#64ffda] font-bold mr-2">✓</span>
							<span className="text-gray-300">Certified Web Developers</span>
						</div>
						<div className="flex items-center">
							<span className="text-[#64ffda] font-bold mr-2">✓</span>
							<span className="text-gray-300">SEO Specialists</span>
						</div>
						<div className="flex items-center">
							<span className="text-[#64ffda] font-bold mr-2">✓</span>
							<span className="text-gray-300">UK-Based Support</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ValuePropsSection;
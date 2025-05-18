import React from 'react';
import { Monitor, Code, Database, BarChart3 } from 'lucide-react';
import { Service } from '../../types';

const services: Service[] = [
	{
		id: 1,
		title: 'Web Design & Development',
		description:
			'Custom-designed websites that perfectly match your brand and business goals.',
		icon: 'Monitor',
		href: '/services/web-design',
	},
	{
		id: 2,
		title: 'Monthly Website Care & Hosting',
		description:
			'Keep your site secure, updated, and performing at its best with our managed care.',
		icon: 'Code',
		href: '/services/website-care',
	},
	{
		id: 3,
		title: 'Local SEO & Marketing',
		description:
			'Get found by local customers with targeted SEO strategies designed to increase visibility.',
		icon: 'BarChart3',
		href: '/services/local-seo',
	},
	{
		id: 4,
		title: 'E-commerce Solutions',
		description:
			'Sell products online with a beautifully designed and easy-to-use online store.',
		icon: 'Database',
		href: '/services/ecommerce',
	},
];

const IconComponent: React.FC<{ icon: string }> = ({ icon }) => {
	switch (icon) {
		case 'Monitor':
			return <Monitor className="h-8 w-8 text-[#64ffda]" />;
		case 'Code':
			return <Code className="h-8 w-8 text-[#64ffda]" />;
		case 'Database':
			return <Database className="h-8 w-8 text-[#64ffda]" />;
		case 'BarChart3':
			return <BarChart3 className="h-8 w-8 text-[#64ffda]" />;
		default:
			return <Monitor className="h-8 w-8 text-[#64ffda]" />;
	}
};

const ServicesSection: React.FC = () => {
	return (
		<section
			id="services"
			className="relative py-24 bg-[#0a192f] overflow-hidden"
		>
			{/* Static and Animated Stars */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="stars"></div>
				<div className="twinkling"></div>
			</div>

			<div className="container relative mx-auto px-4 z-10">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Our Services
					</h2>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto">
						We provide comprehensive web solutions to help your business thrive
						online.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service) => (
						<div
							key={service.id}
							className="rounded-xl p-8 border border-[#64ffda]/20 shadow-lg traglow-border-64ffdansition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
							style={{
								background: '#112240', // Match card background to section
							}}
						>
							<div className="p-4 bg-[#0a192f]/50 rounded-lg inline-block mb-5">
								<IconComponent icon={service.icon} />
							</div>
							<h3 className="text-xl font-semibold text-white mb-3">
								{service.title}
							</h3>
							<p className="text-gray-300">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
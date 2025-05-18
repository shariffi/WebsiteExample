import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../../types';

const pricingTiers: PricingTier[] = [
	{
		id: 1,
		name: 'Starter',
		description: 'Perfect for small businesses just getting started online.',
		monthlyPrice: 1250,
		annualPrice: 1250,
		features: [
			'Custom website design',
			'5 pages included',
			'Mobile responsive',
			'Contact form',
			'Basic SEO setup',
			'One-time payment',
		],
		ctaText: 'Get Started',
	},
	{
		id: 2,
		name: 'Essential',
		description: 'Our most popular plan for growing businesses.',
		monthlyPrice: 1250 + 49,
		annualPrice: 1250 + 39 * 12,
		features: [
			'Everything in Starter',
			'Up to 10 pages',
			'Monthly website care',
			'Security updates',
			'Weekly backups',
			'Basic analytics',
			'24/7 support',
		],
		recommended: true,
		ctaText: 'Choose Essential',
	},
	{
		id: 3,
		name: 'Growth',
		description: 'Advanced features for businesses ready to expand.',
		monthlyPrice: 1250 + 149,
		annualPrice: 1250 + 129 * 12,
		features: [
			'Everything in Essential',
			'Up to 20 pages',
			'Advanced SEO package',
			'Content creation',
			'Monthly performance report',
			'E-commerce functionality',
			'Social media integration',
		],
		ctaText: 'Choose Growth',
	},
	{
		id: 4,
		name: 'Premium',
		description: 'Complete solution for established businesses.',
		monthlyPrice: 1250 + 299,
		annualPrice: 1250 + 269 * 12,
		features: [
			'Everything in Growth',
			'Unlimited pages',
			'Custom functionality',
			'Priority support',
			'Advanced analytics',
			'Conversion optimization',
			'Monthly strategy call',
		],
		ctaText: 'Choose Premium',
	},
];

const PricingSection: React.FC = () => {
	const [isAnnual, setIsAnnual] = useState(false);

	const formatPrice = (price: number): string => {
		if (isAnnual && price > 1250) {
			return `£${Math.floor(price / 100)}${price % 100 ? `.${price % 100}` : ''}/mo`;
		}
		return `£${Math.floor(price / 100)}${price % 100 ? `.${price % 100}` : ''}`;
	};

	const getDescription = (tier: PricingTier): string => {
		if (tier.id === 1) return tier.description;
		return isAnnual
			? `${tier.description} Save £${Math.floor((tier.monthlyPrice * 12 - tier.annualPrice) / 100)} with annual billing.`
			: tier.description;
	};

	return (
		<section id="pricing" className="relative py-24 bg-[#0a192f] overflow-hidden">
			{/* Static and Animated Stars */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="stars"></div>
				<div className="twinkling"></div>
			</div>

			<div className="container relative mx-auto px-4 z-10">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Simple, Transparent Pricing
					</h2>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
						Choose the perfect plan for your business needs
					</p>

					<div className="flex items-center justify-center mb-8">
						<span
							className={`mr-4 ${
								!isAnnual ? 'text-white font-medium' : 'text-gray-400'
							}`}
						>
							Monthly
						</span>
						<button
							onClick={() => setIsAnnual(!isAnnual)}
							className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-700"
							aria-pressed={isAnnual}
						>
							<span className="sr-only">Toggle billing frequency</span>
							<span
								className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
									isAnnual ? 'translate-x-7' : 'translate-x-1'
								}`}
							/>
						</button>
						<span
							className={`ml-4 ${
								isAnnual ? 'text-white font-medium' : 'text-gray-400'
							}`}
						>
							Annual{' '}
							<span className="text-indigo-400 text-sm font-normal">
								(Save 20%)
							</span>
						</span>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{pricingTiers.map((tier) => (
						<div
							key={tier.id}
							className={`rounded-xl overflow-hidden border ${
								tier.recommended
									? 'border-indigo-500 shadow-lg shadow-indigo-500/20'
									: 'border-gray-800'
							} bg-[#112240] transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 relative`}
						>
							{tier.recommended && (
								<div className="absolute top-0 left-0 right-0 bg-indigo-600 text-white text-center py-1 text-sm font-medium">
									Recommended
								</div>
							)}
							<div className={`p-8 ${tier.recommended ? 'pt-10' : ''}`}>
								<h3 className="text-xl font-bold text-white mb-2">
									{tier.name}
								</h3>
								<p className="text-gray-400 text-sm mb-6 h-12">
									{getDescription(tier)}
								</p>
								<div className="mb-6">
									<span className="text-4xl font-bold text-white">
										{formatPrice(
											isAnnual
												? Math.round(tier.annualPrice / 12)
												: tier.monthlyPrice
										)}
									</span>
									{tier.id !== 1 && (
										<span className="text-gray-400 ml-2">
											{isAnnual ? '/mo' : '/mo'}
											<span className="block text-sm mt-1">
												{tier.id === 1
													? 'One-time payment'
													: `£${
															tier.id === 1 ? '0' : '1,250'
													  } setup fee`}
											</span>
										</span>
									)}
								</div>
								<a
									href="#contact"
									className={`block text-center py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg ${
										tier.recommended
											? 'bg-indigo-600 hover:bg-indigo-700 text-white'
											: 'bg-gray-800 hover:bg-gray-700 text-white'
									} mb-8 font-medium`}
								>
									{tier.ctaText}
								</a>
								<ul className="space-y-3">
									{tier.features.map((feature, idx) => (
										<li key={idx} className="flex items-start">
											<Check
												size={18}
												className="text-indigo-400 shrink-0 mt-0.5 mr-2"
											/>
											<span className="text-gray-300">{feature}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PricingSection;
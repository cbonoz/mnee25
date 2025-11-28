'use client';

export const HeroAnimation = () => {
	return (
		<>
			<div style={{ textAlign: 'center', position: 'relative' }}>
				{/* Animated Visual Container */}
				<div
					style={{
						background: 'linear-gradient(135deg, #6b9eff 0%, #cceaf4 100%)',
						borderRadius: '20px',
						padding: '32px',
						position: 'relative',
						overflow: 'hidden',
						minHeight: '300px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					{/* Background Pattern */}
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
							opacity: 0.2
						}}
					/>
					
					{/* Main Visual Content */}
					<div style={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center' }}>
						{/* Title */}
						<div style={{ marginBottom: '20px' }}>
							<div style={{ fontSize: '14px', fontWeight: '500', opacity: 0.9 }}>
								Smart Contract Flow
							</div>
						</div>

						{/* Animated Smart Contract Flow */}
						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
							{/* Form Icon */}
							<div
								style={{
									width: '60px',
									height: '60px',
									background: 'rgba(255, 255, 255, 0.1)',
									borderRadius: '12px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									animation: 'slideIn 1s ease-out',
									border: '2px solid rgba(255, 255, 255, 0.2)'
								}}
							>
								<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 2H15V6H9V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M6 8H18C19.1 8 20 8.9 20 10V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V10C4 8.9 4.9 8 6 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M8 12H16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
									<path d="M8 16H16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
								</svg>
							</div>
							<div style={{ fontSize: '12px', fontWeight: '500', opacity: 0.8, minWidth: '50px' }}>Create</div>

							{/* Arrow */}
							<div style={{ fontSize: '20px', animation: 'float 2s ease-in-out infinite' }}>→</div>

							{/* Lock/Security Icon */}
							<div
								style={{
									width: '60px',
									height: '60px',
									background: 'rgba(255, 255, 255, 0.1)',
									borderRadius: '12px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									animation: 'slideIn 1.2s ease-out',
									border: '2px solid rgba(255, 255, 255, 0.2)'
								}}
							>
								<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 1C7 1 3 4 3 9V15C3 18.3 4.5 21.2 6.8 23H17.2C19.5 21.2 21 18.3 21 15V9C21 4 17 1 12 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M12 13V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
									<circle cx="12" cy="10" r="1.5" fill="white"/>
								</svg>
							</div>
							<div style={{ fontSize: '12px', fontWeight: '500', opacity: 0.8, minWidth: '50px' }}>Secure</div>

							{/* Arrow */}
							<div style={{ fontSize: '20px', animation: 'float 2s ease-in-out infinite', animationDelay: '0.5s' }}>→</div>

							{/* Payment Icon */}
							<div
								style={{
									width: '60px',
									height: '60px',
									background: 'rgba(255, 255, 255, 0.1)',
									borderRadius: '12px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									animation: 'slideIn 1.4s ease-out',
									border: '2px solid rgba(255, 255, 255, 0.2)'
								}}
							>
								<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2 6C2 5.45 2.45 5 3 5H21C21.55 5 22 5.45 22 6V8H2V6Z" fill="white" opacity="0.8"/>
									<path d="M2 8V18C2 18.55 2.45 19 3 19H21C21.55 19 22 18.55 22 18V8H2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
									<circle cx="12" cy="13" r="2" fill="white" opacity="0.6"/>
								</svg>
							</div>
							<div style={{ fontSize: '12px', fontWeight: '500', opacity: 0.8, minWidth: '50px' }}>Pay</div>
						</div>

						{/* Feature Pills */}
						<div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
							<div
								style={{
									background: 'rgba(255, 255, 255, 0.15)',
									padding: '6px 12px',
									borderRadius: '16px',
									fontSize: '11px',
									fontWeight: '500',
									animation: 'fadeInUp 1s ease-out',
									border: '1px solid rgba(255, 255, 255, 0.2)'
								}}
							>
								📝 Smart Forms
							</div>
							<div
								style={{
									background: 'rgba(255, 255, 255, 0.15)',
									padding: '6px 12px',
									borderRadius: '16px',
									fontSize: '11px',
									fontWeight: '500',
									animation: 'fadeInUp 1.2s ease-out',
									border: '1px solid rgba(255, 255, 255, 0.2)'
								}}
							>
								🔐 Escrow
							</div>
							<div
								style={{
									background: 'rgba(255, 255, 255, 0.15)',
									padding: '6px 12px',
									borderRadius: '16px',
									fontSize: '11px',
									fontWeight: '500',
									animation: 'fadeInUp 1.4s ease-out',
									border: '1px solid rgba(255, 255, 255, 0.2)'
								}}
							>
								💰 MNEE
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes float {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-8px); }
				}
				@keyframes slideIn {
					0% { transform: translateY(20px); opacity: 0; }
					100% { transform: translateY(0); opacity: 1; }
				}
				@keyframes fadeInUp {
					0% { transform: translateY(10px); opacity: 0; }
					100% { transform: translateY(0); opacity: 1; }
				}
			`}</style>
		</>
	);
};

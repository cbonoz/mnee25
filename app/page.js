'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Spin, Row, Col, Space } from 'antd';
import { APP_DESC, APP_NAME, siteConfig } from './constants';
import { CheckCircleTwoTone } from '@ant-design/icons';
import Logo from './lib/Logo';
import { HeroAnimation } from './lib/HeroAnimation';
import { useRouter } from 'next/navigation';
import { colors } from './theme/colors';

const CHECKLIST_ITEMS = [
	'One-click form collection and payments for anyone',
	'Decentralized, trustless payments using MNEE tokens',
	'Wallet-based authentication - no separate accounts needed'
];

const Home = () => {
	const router = useRouter();

	return (
		<div
			style={{
				minHeight: '100vh',
				background: 'linear-gradient(135deg, #f0f6fb 0%, #cceaf4 100%)'
			}}
		>
			{/* Hero Section */}
			<div style={{ padding: '80px 48px', marginTop: '56px' }}>
				<Row
					gutter={[64, 48]}
					align="middle"
					justify="center"
					style={{ minHeight: '60vh', maxWidth: '1800px', margin: '0 auto' }}
				>
					{/* Left Side - Content */}
					<Col xs={24} lg={12}>
						<div style={{ textAlign: 'left' }}>
							<Space direction="vertical" size="large" style={{ width: '100%' }}>
								{/* Hero Title */}
								<div>
									<h1
										style={{
											fontSize: '52px',
											fontWeight: 'bold',
											color: '#1f2937',
											lineHeight: '1.1',
											marginBottom: '24px',
											margin: 0
										}}
									>
										Trustless quotes, instant payments
										<span style={{ color: '#6b9eff', display: 'block' }}>for any service</span>
									</h1>
									{/* Temp removal */}
									{/* <p
										style={{
											fontSize: '22px',
											color: '#6b7280',
											lineHeight: '1.6',
											marginBottom: '32px',
											maxWidth: '500px'
										}}
									>
										{APP_DESC}
									</p> */}
								</div>

								{/* Feature List */}
								<div style={{ marginBottom: '32px' }}>
									{CHECKLIST_ITEMS.map((item, i) => (
										<div key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
											<CheckCircleTwoTone
												twoToneColor="#6b9eff"
												style={{ fontSize: '20px', marginTop: '4px', marginRight: '12px' }}
											/>
											<span
												style={{
													color: '#4b5563',
													fontSize: '16px',
													lineHeight: '1.6'
												}}
											>
												{item}
											</span>
										</div>
									))}
								</div>

								{/* CTA Buttons */}
								<Space size="middle" style={{ marginTop: '32px' }}>
									<Button
										size="large"
										type="primary"
										onClick={() => router.push('/create')}
									style={{
										height: '48px',
										padding: '0 32px',
										fontSize: '18px',
										fontWeight: '600',
										borderRadius: '8px'
									}}
								>
									{siteConfig.cta.primary}
								</Button>
								<Button
									size="large"
									onClick={() => router.push('/about')}
									style={{
										height: '48px',
										padding: '0 32px',
										fontSize: '18px',
										fontWeight: '600',
										borderRadius: '8px'
									}}
								>
									Learn More
								</Button>
							</Space>
						</Space>
						</div>
					</Col>

				{/* Right Side - Visual */}
				<Col xs={24} lg={12}>
					<HeroAnimation />
				</Col>
			</Row>
						

				{/* Features Section */}
				<div style={{ padding: '80px 0', maxWidth: '1800px', margin: '0 auto' }}>
					<div style={{ textAlign: 'center', marginBottom: '64px' }}>
						<h2
							style={{
								fontSize: '36px',
								fontWeight: 'bold',
								color: '#1f2937',
								marginBottom: '16px'
							}}
						>
							Why Choose {APP_NAME}?
						</h2>
						<p
							style={{
								fontSize: '20px',
								color: '#6b7280',
								maxWidth: '900px',
								margin: '0 auto'
							}}
						>
							Streamline client onboarding and payments with blockchain technology and AI-assisted smart contracts
						</p>
					</div>

					<Row gutter={[48, 32]}>
						<Col xs={24} md={8}>
							<div
								style={{
									textAlign: 'center',
									padding: '32px',
									background: 'white',
									borderRadius: '16px',
									boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
									height: '100%'
								}}
							>
								<div
									style={{
										width: '64px',
										height: '64px',
										background: '#e0f2ff',
										borderRadius: '50%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										margin: '0 auto 24px'
									}}
								>
									<CheckCircleTwoTone twoToneColor="#6b9eff" style={{ fontSize: '24px' }} />
								</div>
								<h3
									style={{
										fontSize: '20px',
										fontWeight: '600',
										color: '#1f2937',
										marginBottom: '16px'
									}}
								>
									Smart Contract Automation
								</h3>
								<p style={{ color: '#6b7280', lineHeight: '1.6' }}>
									Hardhat-powered smart contracts automate form submissions, offers, and payments with transparent on-chain logic
								</p>
							</div>
						</Col>

						<Col xs={24} md={8}>
							<div
								style={{
									textAlign: 'center',
									padding: '32px',
									background: 'white',
									borderRadius: '16px',
									boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
									height: '100%'
								}}
							>
								<div
									style={{
										width: '64px',
										height: '64px',
										background: '#f6ffed',
										borderRadius: '50%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										margin: '0 auto 24px'
									}}
								>
									<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '24px' }} />
								</div>
								<h3
									style={{
										fontSize: '20px',
										fontWeight: '600',
										color: '#1f2937',
										marginBottom: '16px'
									}}
								>
									MNEE Token Payments
								</h3>
								<p style={{ color: '#6b7280', lineHeight: '1.6' }}>
									Accept stable payments for deposits, milestones, or offers without volatility or banking fees
								</p>
							</div>
						</Col>

						<Col xs={24} md={8}>
							<div
								style={{
									textAlign: 'center',
									padding: '32px',
									background: 'white',
									borderRadius: '16px',
									boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
									height: '100%'
								}}
							>
								<div
									style={{
										width: '64px',
										height: '64px',
										background: '#e0f2ff',
										borderRadius: '50%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										margin: '0 auto 24px'
									}}
								>
									<CheckCircleTwoTone twoToneColor="#cceaf4" style={{ fontSize: '24px' }} />
								</div>
								<h3
									style={{
										fontSize: '20px',
										fontWeight: '600',
										color: '#1f2937',
										marginBottom: '16px'
									}}
								>
									Wallet-Based Authentication
								</h3>
								<p style={{ color: '#6b7280', lineHeight: '1.6' }}>
									Dynamic authentication via wallet connection - no accounts, passwords, or vendor agreements required
								</p>
							</div>
						</Col>
					</Row>
				</div>

				{/* Use Cases Section */}
				<div style={{ padding: '80px 0', maxWidth: '1800px', margin: '0 auto', backgroundColor: '#f8fafc' }}>
					<div style={{ textAlign: 'center', marginBottom: '64px' }}>
						<h2
							style={{
								fontSize: '36px',
								fontWeight: 'bold',
								color: '#1f2937',
								marginBottom: '16px'
							}}
						>
							Perfect for any service
						</h2>
						<p
							style={{
								fontSize: '20px',
								color: '#6b7280',
								maxWidth: '900px',
								margin: '0 auto'
							}}
						>
							From creative work to home services, OpenQuote streamlines client onboarding and payments
						</p>
					</div>

					<Row gutter={[48, 32]}>
						<Col xs={24} md={8}>
							<div
								style={{
									textAlign: 'center',
									padding: '32px',
									background: 'white',
									borderRadius: '16px',
									boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
									height: '100%',
									border: '1px solid #e5e7eb'
								}}
							>
								<div
									style={{
										fontSize: '48px',
										marginBottom: '24px'
									}}
								>
									🎨
								</div>
								<h3
									style={{
										fontSize: '20px',
										fontWeight: '600',
										color: '#1f2937',
										marginBottom: '16px'
									}}
								>
									Creative Services
								</h3>
								<p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '20px' }}>
									Graphic designers, web developers, photographers, and content creators can collect project requirements and secure deposits before starting work.
								</p>
								<div style={{ fontSize: '14px', color: '#6b9eff', fontWeight: '500' }}>
									"Logo Design - $500 MNEE" → Client pays upfront → Work begins
								</div>
							</div>
						</Col>

						<Col xs={24} md={8}>
							<div
								style={{
									textAlign: 'center',
									padding: '32px',
									background: 'white',
									borderRadius: '16px',
									boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
									height: '100%',
									border: '1px solid #e5e7eb'
								}}
							>
								<div
									style={{
										fontSize: '48px',
										marginBottom: '24px'
									}}
								>
									🌿
								</div>
								<h3
									style={{
										fontSize: '20px',
										fontWeight: '600',
										color: '#1f2937',
										marginBottom: '16px'
									}}
								>
									Home & Landscaping
								</h3>
								<p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '20px' }}>
									Landscapers, contractors, and home service providers can collect site details, photos, and secure project deposits through smart contracts.
								</p>
								<div style={{ fontSize: '14px', color: '#6b9eff', fontWeight: '500' }}>
									"Garden Redesign - $2000 MNEE" → Site survey paid → Project starts
								</div>
							</div>
						</Col>

						<Col xs={24} md={8}>
							<div
								style={{
									textAlign: 'center',
									padding: '32px',
									background: 'white',
									borderRadius: '16px',
									boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
									height: '100%',
									border: '1px solid #e5e7eb'
								}}
							>
								<div
									style={{
										fontSize: '48px',
										marginBottom: '24px'
									}}
								>
									🤝
								</div>
								<h3
									style={{
										fontSize: '20px',
										fontWeight: '600',
										color: '#1f2937',
										marginBottom: '16px'
									}}
								>
									Peer-to-Peer Services
								</h3>
								<p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '20px' }}>
									Tutoring, consulting, coaching, and personal services can collect client info and secure session payments without platform fees.
								</p>
								<div style={{ fontSize: '14px', color: '#6b9eff', fontWeight: '500' }}>
									"Math Tutoring Package - $300 MNEE" → Student pays → Sessions begin
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Home;

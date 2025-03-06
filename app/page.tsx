import { CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { Github, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
					<div className="flex gap-6 md:gap-10">
						<a href="#" className="flex items-center space-x-2">
							<span className="font-bold text-xl">
								Sabin Neupane
							</span>
						</a>
					</div>
					<div className="flex flex-1 items-center justify-end space-x-4">
						<nav className="flex items-center space-x-1">
							<Button variant="ghost" size="sm" asChild>
								<a href="#about">About</a>
							</Button>
							<Button variant="ghost" size="sm" asChild>
								<a href="#education">Education</a>
							</Button>
							<Button variant="ghost" size="sm" asChild>
								<a href="#projects">Projects</a>
							</Button>
							<Button variant="ghost" size="sm" asChild>
								<a href="#components">Components</a>
							</Button>
							<Button variant="ghost" size="sm" asChild>
								<a href="#contributions">Contributions</a>
							</Button>
							<Button variant="ghost" size="sm" asChild>
								<a href="#contact">Contact</a>
							</Button>
							<Button variant="ghost" size="sm" asChild>
								<a
									href="https://github.com/sabin26"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="h-5 w-5" />
									<span className="sr-only">GitHub</span>
								</a>
							</Button>
						</nav>
					</div>
				</div>
			</header>

			<main className="container py-10">
				{/* Hero Section */}
				<section
					id="about"
					className="py-10 md:py-16 flex flex-col md:flex-row items-center gap-8"
				>
					<div className="md:w-1/3 flex justify-center">
						<div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
							<Image
								src="/profile.jpg"
								alt="Sabin Neupane"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>
					<div className="md:w-2/3 space-y-4">
						<h1 className="text-4xl font-bold tracking-tight">
							Sabin Neupane
						</h1>
						<h2 className="text-2xl text-muted-foreground">
							Software Developer
						</h2>
						<p className="text-muted-foreground max-w-prose">
							Experienced in developing{' '}
							<strong>
								<em>
									web, desktop, and mobile applications with
									Flutter
								</em>
							</strong>
							. I'm deliberately shifting away from frontend
							development, as AI can now handle that efficiently,
							allowing me to focus on building the core of
							products where real value is created.
						</p>
						<p className="text-muted-foreground max-w-prose">
							I specialize in developing{' '}
							<strong>
								<em>
									realtime multi-tenant systems with custom
									authentication and file storage APIs with
									caching mechanisms
								</em>
							</strong>
							. I use CRON jobs, Background Asynchronous Queues
							for efficient processing and follow best practices
							including soft deletion, not exposing integer
							primary keys, and the 3-2-1 Backup strategy with
							offsite backup. I approach development with minimal
							project dependencies and am a natural problem solver
							who builds custom components when existing solutions
							don't meet specific requirements.
						</p>
						<div className="flex gap-3 pt-2">
							<Button asChild>
								<a href="#contact">Get in touch</a>
							</Button>
							<Button variant="outline" asChild>
								<a
									href="https://github.com/sabin26"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-4 w-4" />
									GitHub
								</a>
							</Button>
						</div>
					</div>
				</section>

				{/* Education Section */}
				<section id="education" className="py-10 space-y-6">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tight">
							Education
						</h2>
						<p className="text-muted-foreground">
							Academic background and qualifications
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<Card>
							<CardHeader>
								<CardTitle>
									MSc Data Science and Computational
									Intelligence
								</CardTitle>
								<CardDescription>
									Coventry University (2025 - Present)
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Currently pursuing advanced studies in data
									science, machine learning, and AI
									applications.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>
									Bachelor of Science (Hons.) Computing
								</CardTitle>
								<CardDescription>
									London Metropolitan University (2018 - 2021)
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Graduated with First Class Honors, achieving
									80.61% overall.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Projects Section */}
				<section id="projects" className="py-10 space-y-6">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tight">
							Projects
						</h2>
						<p className="text-muted-foreground">
							A showcase of my recent development work across
							different platforms.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Project 1 */}
						<Card className="flex flex-col h-full">
							<CardHeader>
								<div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
									<Image
										src="/Pandav Dairy Software.PNG?height=200&width=400"
										alt="Pandav Dairy Software"
										fill
										className="object-contain"
									/>
								</div>
								<CardTitle>Pandav Dairy Software</CardTitle>
								<CardDescription>
									Windows Software for milk collection centers
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-grow">
								<p className="text-muted-foreground">
									A comprehensive solution for dairy
									collection centers to manage milk
									collection, payments, and reporting. Built
									with a user-friendly interface for efficient
									operations.
								</p>
								<div className="flex flex-wrap gap-2 mt-4">
									<Badge>.NET Framework</Badge>
									<Badge>C#</Badge>
									<Badge>WPF</Badge>
								</div>
							</CardContent>
							<CardFooter>
								<Button
									variant="outline"
									className="w-full"
									asChild
								>
									<a
										href="https://pandav-software.sabin-neupane.com.np"
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="mr-2 h-4 w-4" />
										View Project
									</a>
								</Button>
							</CardFooter>
						</Card>

						{/* Project 2 */}
						<Card className="flex flex-col h-full">
							<CardHeader>
								<div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
									<Image
										src="/Lekha Sahayak.png?height=200&width=400"
										alt="Lekha Sahayak"
										fill
										className="object-cover"
									/>
								</div>
								<CardTitle>Lekha Sahayak</CardTitle>
								<CardDescription>
									Bookkeeping and accounting software
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-grow">
								<p className="text-muted-foreground">
									A cross-platform solution for bookkeeping
									and accounting, available on Web and
									Android. Simplifies financial management for
									small to medium businesses.
								</p>
								<div className="flex flex-wrap gap-2 mt-4">
									<Badge>Flutter</Badge>
									<Badge>Dart</Badge>
									<Badge>Cloudflare</Badge>
									<Badge>Planetscale</Badge>
								</div>
							</CardContent>
							<CardFooter>
								<Button
									variant="outline"
									className="w-full"
									asChild
								>
									<a
										href="https://lekha-software.sabin-neupane.com.np"
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="mr-2 h-4 w-4" />
										View Project
									</a>
								</Button>
							</CardFooter>
						</Card>

						{/* Project 3 */}
						<Card className="flex flex-col h-full">
							<CardHeader>
								<div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
									<Image
										src="/kurakani-profile.jpg?height=200&width=400"
										alt="Kurakani (ChitChat)"
										fill
										className="object-contain"
									/>
								</div>
								<CardTitle>Kurakani (ChitChat)</CardTitle>
								<CardDescription>
									Social Media Android App
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-grow">
								<p className="text-muted-foreground">
									An Instagram-like social media application
									for Android that allows users to share
									photos, connect with friends, and engage
									with content through likes and comments.
								</p>
								<div className="flex flex-wrap gap-2 mt-4">
									<Badge>Flutter</Badge>
									<Badge>Dart</Badge>
									<Badge>Firebase</Badge>
									<Badge>NodeJS</Badge>
									<Badge>GraphQL</Badge>
								</div>
							</CardContent>
							<CardFooter>
								<Button
									variant="outline"
									className="w-full"
									asChild
								>
									<a
										href="https://kurakani.sabin-neupane.com.np"
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="mr-2 h-4 w-4" />
										View Project
									</a>
								</Button>
							</CardFooter>
						</Card>
					</div>
				</section>

				{/* Custom Components Section */}
				<section id="components" className="py-10 space-y-6">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tight">
							Custom Components
						</h2>
						<p className="text-muted-foreground">
							When existing solutions fall short, I build my own.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Component 1 */}
						<Card className="flex flex-col h-full">
							<CardHeader>
								<CardTitle>Nepali Calendar Widget</CardTitle>
								<CardDescription>
									Flutter UI Component
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-grow">
								<p className="text-muted-foreground">
									Built a custom Nepali Calendar Widget for
									Flutter with the added benefit of reliably
									converting between English dates and Bikram
									Sambat.
								</p>
								<div className="flex flex-wrap gap-2 mt-4">
									<Badge>Flutter</Badge>
									<Badge>Dart</Badge>
									<Badge>AD TO BS</Badge>
									<Badge>BS TO AD</Badge>
								</div>
							</CardContent>
							<CardFooter>
								<Button
									variant="outline"
									className="w-full"
									asChild
								>
									<a
										href="https://github.com/sabin26/nepali_date_picker"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="mr-2 h-4 w-4" />
										View on GitHub
									</a>
								</Button>
							</CardFooter>
						</Card>

						{/* Component 2 */}
						<Card className="flex flex-col h-full">
							<CardHeader>
								<CardTitle>Async Paginated Table</CardTitle>
								<CardDescription>
									Flutter UI Component
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-grow">
								<p className="text-muted-foreground">
									Developed an asynchronous paginated data
									table for Flutter when the standard
									solutions couldn't handle complex data
									loading patterns.
								</p>
								<div className="flex flex-wrap gap-2 mt-4">
									<Badge>Flutter</Badge>
									<Badge>Dart</Badge>
									<Badge>Async</Badge>
									<Badge>Pagination</Badge>
									<Badge>Table</Badge>
								</div>
							</CardContent>
							<CardFooter>
								<Button
									variant="outline"
									className="w-full"
									asChild
								>
									<a
										href="https://github.com/sabin26/paginated_table_view"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="mr-2 h-4 w-4" />
										View on GitHub
									</a>
								</Button>
							</CardFooter>
						</Card>

						{/* Component 3 */}
						<Card className="flex flex-col h-full">
							<CardHeader>
								<CardTitle>Async Search Dropdown</CardTitle>
								<CardDescription>
									Flutter UI Component
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-grow">
								<p className="text-muted-foreground">
									Built a reliable asynchronous search
									dropdown menu from scratch after finding
									existing Flutter solutions were buggy and
									unreliable.
								</p>
								<div className="flex flex-wrap gap-2 mt-4">
									<Badge>Flutter</Badge>
									<Badge>Dart</Badge>
									<Badge>Async</Badge>
									<Badge>WebSockets</Badge>
									<Badge>Search</Badge>
								</div>
							</CardContent>
							<CardFooter>
								<Button
									variant="outline"
									className="w-full"
									asChild
								>
									<a
										href="https://github.com/sabin26/auto_complete"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="mr-2 h-4 w-4" />
										View on GitHub
									</a>
								</Button>
							</CardFooter>
						</Card>
					</div>
				</section>

				{/* Open Source Contributions */}
				<section id="contributions" className="py-10 space-y-6">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tight">
							Open Source Contributions
						</h2>
						<p className="text-muted-foreground">
							My contributions to the open source community.
						</p>
					</div>

					<Card className="mb-6">
						<CardHeader>
							<CardTitle className="flex items-center">
								<Github className="mr-2 h-5 w-5" />
								<span>flutter/flutter</span>
							</CardTitle>
							<CardDescription>
								<a
									href="https://github.com/flutter/flutter/blob/master/AUTHORS#L119"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:underline"
								>
									Listed as an Author in the Flutter
									repository
								</a>
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Recognized as an official contributor to the
								Flutter framework, which is used by developers
								worldwide to build natively compiled
								applications for mobile, web, and desktop from a
								single codebase.
							</p>
						</CardContent>
					</Card>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Additional contributions would be listed here based on GitHub profile */}
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">
									alexmercerind/window_plus
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Contributed bug fixes and feature
									improvements refining window management
									functionality to this project.
								</p>
							</CardContent>
							<CardFooter>
								<Button variant="ghost" size="sm" asChild>
									<a
										href="https://github.com/alexmercerind/window_plus/issues?q=is%3Apr%20author%3Asabin26%20"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="mr-2 h-4 w-4" />
										View Contributions
									</a>
								</Button>
							</CardFooter>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="text-lg">
									plugfox/ws
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Helped in making this websocket plugin
									WebAssembly (WASM) compatible in dart.
								</p>
							</CardContent>
							<CardFooter>
								<Button variant="ghost" size="sm" asChild>
									<a
										href="https://github.com/PlugFox/ws/pulls?q=is%3Apr++author%3Asabin26+"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="mr-2 h-4 w-4" />
										View Contributions
									</a>
								</Button>
							</CardFooter>
						</Card>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="py-10 space-y-6">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tight">
							Contact
						</h2>
						<p className="text-muted-foreground">
							Get in touch for business inquiries or collaboration
							opportunities.
						</p>
					</div>

					<Card>
						<CardContent className="pt-6">
							<div className="flex flex-col md:flex-row gap-6 items-center">
								<div className="flex-grow space-y-4">
									<h3 className="text-xl font-semibold">
										Let's work together
									</h3>
									<p className="text-muted-foreground">
										I'm open to freelance opportunities,
										consulting, and full-time positions.
										Feel free to reach out if you have a
										project in mind or want to discuss
										potential collaboration.
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<Button size="lg" asChild>
										<a href="mailto:business@sabin-neupane.com.np">
											<Mail className="mr-2 h-4 w-4" />
											business@sabin-neupane.com.np
										</a>
									</Button>
									<Button variant="outline" size="lg" asChild>
										<a
											href="https://github.com/sabin26"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="mr-2 h-4 w-4" />
											GitHub
										</a>
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</section>
			</main>

			{/* Footer */}
			<footer className="border-t py-6 md:py-0">
				<div className="container flex flex-col md:flex-row items-center justify-center gap-4 md:h-16">
					<p className="text-center text-sm text-muted-foreground">
						© {new Date().getFullYear()} Sabin Neupane. All rights
						reserved.
					</p>
				</div>
			</footer>
		</div>
	)
}

"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { JSX, SVGProps } from "react";

export function Website() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="bg-primary py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-primary-foreground">
                Sameer Khan
              </h1>
              <p className="text-sm text-primary-foreground/80">
                Software Engineer
              </p>
            </div>
          </div>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="#"
              className="text-lg font-medium text-primary-foreground hover:underline"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#education"
              className="text-lg font-medium text-primary-foreground hover:underline"
              prefetch={false}
            >
              Education
            </Link>
            <Link
              href="#portfolio"
              className="text-lg font-medium text-primary-foreground hover:underline"
              prefetch={false}
            >
              Portfolio
            </Link>
            <Link
              href="#experience"
              className="text-lg font-medium text-primary-foreground hover:underline"
              prefetch={false}
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium text-primary-foreground hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex text-sm font-medium text-primary-foreground hover:underline"
          >
            Buy me a coffee
          </a>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="bg-background py-12 md:py-24">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Hello, I&apos; m Sameer Khan
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                I&apos; m a passionate software engineering student with a
                strong interest in building innovative and user-friendly
                applications. My goal is to leverage my technical skills and
                problem-solving abilities to contribute to the development of
                cutting-edge technologies.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg bg-muted p-4">
                <h3 className="text-lg font-semibold">Skills</h3>

                {/* Languages */}
                <div className="mt-2">
                  <h4 className="text-md font-semibold">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">C</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">HTML/CSS</Badge>
                    <Badge variant="secondary">Bash</Badge>
                  </div>
                </div>

                {/* Databases */}
                <div className="mt-4">
                  <h4 className="text-md font-semibold">Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </div>

                {/* Libraries */}
                <div className="mt-4">
                  <h4 className="text-md font-semibold">Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">NumPy</Badge>
                    <Badge variant="secondary">Pandas</Badge>
                    <Badge variant="secondary">OpenCV</Badge>
                  </div>
                </div>

                {/* Frameworks */}
                <div className="mt-4">
                  <h4 className="text-md font-semibold">Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Flask</Badge>
                    <Badge variant="secondary">Django</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Keras</Badge>
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">Bootstrap</Badge>
                    <Badge variant="secondary">Apache Beam</Badge>
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div className="mt-4">
                  <h4 className="text-md font-semibold">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">GCP</Badge>
                    <Badge variant="secondary">Heroku</Badge>
                    <Badge variant="secondary">JIRA</Badge>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h3 className="text-lg font-semibold">Interests</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="secondary">Web Development</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Open Source</Badge>
                  <Badge variant="secondary">Software Engineering</Badge>
                  <Badge variant="secondary">Artificial Intelligence</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="education" className="bg-muted py-12 md:py-24">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Education
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-muted-foreground">
                    Sonoma State University, Rohnert Park, CA
                  </p>
                  <p className="text-muted-foreground">
                    Expected Graduation: May 2025
                  </p>
                  <p className="text-muted-foreground">GPA: 3.525</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Relevant Coursework</h3>
                  <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
                    <li>Data Structures and Algorithms</li>
                    <li>Software Engineering</li>
                    <li>Machine Learning</li>
                    <li>Database Systems</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg bg-background p-4">
                <h3 className="text-lg font-semibold">Achievements</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="secondary"> MESA Idea Accelerator@UBER</Badge>
                  <Badge variant="secondary">Dean&apos;s List</Badge>
                  <Badge variant="secondary">HackUCI Finalist</Badge>
                  <Badge variant="secondary">
                    International Student Scholarship Recipient
                  </Badge>
                </div>
              </div>
              <div className="rounded-lg bg-background p-4">
                <h3 className="text-lg font-semibold">Extracurricular</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="secondary">Computer Science Club</Badge>
                  <Badge variant="secondary">
                    Associated Students Senator - Student Resources
                  </Badge>
                  <Badge variant="secondary">Volunteer:Code Tenderlion</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="bg-background py-12 md:py-24">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Portfolio
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Check out some of my recent projects and applications I&apos;ve
                built. I&apos;m always striving to create innovative and
                user-friendly solutions.
              </p>
            </div>
            <div className="relative">
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  <CarouselItem>
                    <Card>
                      <CardHeader>
                        <CardTitle>Web Application</CardTitle>
                        <CardDescription>
                          A full-stack web application built with React,
                          Node.js, and MongoDB.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <img
                          src="/placeholder.svg"
                          alt="Portfolio Project 1"
                          width={600}
                          height={400}
                          className="rounded-lg object-cover"
                        />
                      </CardContent>
                      <CardFooter>
                        <Link
                          href="#"
                          className="text-primary hover:underline"
                          prefetch={false}
                        >
                          View Project
                        </Link>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card>
                      <CardHeader>
                        <CardTitle>Mobile App</CardTitle>
                        <CardDescription>
                          A cross-platform mobile app built with React Native
                          and Firebase.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <img
                          src="/placeholder.svg"
                          alt="Portfolio Project 2"
                          width={600}
                          height={400}
                          className="rounded-lg object-cover"
                        />
                      </CardContent>
                      <CardFooter>
                        <Link
                          href="#"
                          className="text-primary hover:underline"
                          prefetch={false}
                        >
                          View Project
                        </Link>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section id="experience" className="bg-muted py-12 md:py-24">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Experience
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                While doing my undergraduate degree, I&apos;ve had the privilege
                of diving into collaborations with both esteemed companies and
                exciting startups. Here are some of the roles that have ignited
                my passion and fueled my journey.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg bg-background p-4">
                <h3 className="text-lg font-semibold">Software Engineer</h3>
                <p className="text-muted-foreground">
                  <strong>Company:</strong> PomJuice (Startup)
                </p>
                <p className="text-muted-foreground">
                  <strong>Location:</strong> San Francisco, CA
                </p>
                <p className="text-muted-foreground">
                  <strong>Duration:</strong> Mar 2024 - Present
                </p>
                <p className="text-muted-foreground">
                  <strong>Role:</strong> Full Stack Developer
                </p>
                <p>
                  <strong>Technologies:</strong> React, TypeScript, CSS, AWS
                  Elastic Beanstalk, Netlify
                </p>
                <p>
                  <strong>Description:</strong> Developing a founder-investor
                  platform with features for user authentication, protected
                  routes, and dynamic forms for onboarding using TypeScript.
                  Integrated AWS and automated CI/CD pipelines using
                  CodePipeline. Additionally, created backend in Django and
                  deployed it on AWS Elastic Beanstalk.
                </p>
              </div>
              <div className="rounded-lg bg-background p-4">
                <h3 className="text-lg font-semibold">
                  Software Engineering Intern
                </h3>
                <p className="text-muted-foreground">Company: Facebook</p>
                <p className="text-muted-foreground">
                  Location: Menlo Park, CA
                </p>
                <p className="text-muted-foreground">Duration: Summer 2022</p>
                <p className="text-muted-foreground">Role: Backend Developer</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-background py-12 md:py-24">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                I &apos; m always excited to connect with new people and explore
                potential opportunities. Feel free to reach out to me using the
                contact information below.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2">
                  <MailIcon className="h-6 w-6 text-muted-foreground" />
                  <a href="#" className="text-muted-foreground hover:underline">
                    khansam@sonoma.edu
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-6 w-6 text-muted-foreground" />
                  <a href="#" className="text-muted-foreground hover:underline">
                    +1 (415) 410-3335
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="h-6 w-6 text-muted-foreground" />
                  <a
                    href="https://www.linkedin.com/in/sameer-khan-4b8696223/"
                    target="_blank"
                    className="text-muted-foreground hover:underline"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <GitlabIcon className="h-6 w-6 text-muted-foreground" />
                  <a
                    href="https://github.com/sameerkhansf"
                    className="text-muted-foreground hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h3 className="text-lg font-semibold">Send me a message</h3>
              <form className="mt-4 space-y-4">
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="w-full"
                  required
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full"
                  required
                />
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full"
                  required
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Sameer Khan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/sameer-khan-4b8696223/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/sameerkhansf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GitlabIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function LinkedinIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

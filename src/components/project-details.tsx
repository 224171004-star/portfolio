"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import GlassmorphismCard from "@/components/glassmorphism-card";
import {
    ArrowLeft,
    Play,
    Clock,
    User,
    Calendar,
    Quote,
    ExternalLink,
} from "lucide-react";
import type { VideoProject } from "@/types/videos";

interface ProjectDetailsProps {
    project: VideoProject;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {

    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <m.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Button
                        asChild
                        variant="outline"
                        className="pl-4 pr-6 py-2 h-auto text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-xl group"
                    >
                        <Link href="/">
                            <ArrowLeft className="mr-2" size={16} />
                            Back to Projects
                        </Link>
                    </Button>
                </m.div>

                {/* Video Player Section */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <GlassmorphismCard className="p-4 md:p-6">
                        <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-900">
                            {project.is_instagram_reel ? (
                                // Instagram Reel - Direct link to Instagram
                                <div className="relative w-full h-full">
                                    <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <svg className="w-20 h-20 mx-auto mb-6 opacity-90" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                            </svg>
                                            <h3 className="text-2xl font-bold mb-4">Instagram Reel</h3>
                                            <p className="text-lg mb-6 opacity-90">{project.video_title}</p>
                                            <Button
                                                asChild
                                                size="lg"
                                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                            >
                                                <a
                                                    href={project.video_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                                    </svg>
                                                    Watch on Instagram
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // YouTube Video - Keep existing embed functionality
                                <div className="relative w-full h-full">
                                    <Image
                                        src={
                                            project.cover_image
                                                ? `https://img.youtube.com/vi/${project.cover_image}/maxresdefault.jpg`
                                                : "/placeholder.svg"
                                        }
                                        alt={project.video_title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-red-600 hover:bg-red-700 cursor-pointer"
                                        >
                                            <a
                                                href={project.video_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center"
                                            >
                                                <Play className="mr-2" size={24} />
                                                Watch on YouTube
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </GlassmorphismCard>
                </m.div>

                {/* Project Details Section */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <GlassmorphismCard className="p-6 md:p-8">
                        <div className="mb-6">
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-end mb-4 gap-4">
                                {project.duration && (
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <Clock className="mr-1" size={14} />
                                        {project.duration}
                                    </div>
                                )}
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                                {project.video_title}
                            </h1>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                {project.video_description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-white">
                                    Project Details
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center text-gray-400">
                                        <Calendar className="mr-2" size={14} />
                                        <span>
                                            Published:{" "}
                                            {new Date(project.publish_date).toLocaleDateString(
                                                "en-US",
                                                {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                }
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-gray-400">
                                        <User className="mr-2" size={14} />
                                        <span>Client: {project.client_name}</span>
                                    </div>
                                </div>
                            </div>

                            {project.software_used && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-white">
                                        Software Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.software_used.map((software) => (
                                            <Badge
                                                key={software}
                                                variant="outline"
                                                className="border-gray-600 text-gray-300"
                                            >
                                                {software}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-3 text-white">
                                Categories
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.category.map((category) => (
                                    <Badge
                                        key={category}
                                        variant="outline"
                                        className="border-gray-600 text-gray-300"
                                    >
                                        {category}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {!project.is_instagram_reel && (
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild className="bg-red-600 hover:bg-red-700">
                                    <a
                                        href={project.video_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="mr-2" size={16} />
                                        Watch on YouTube
                                    </a>
                                </Button>
                            </div>
                        )}
                    </GlassmorphismCard>
                </m.div>

                {/* Project Gallery */}
                {project.project_images && project.project_images.length > 0 && (
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-16"
                    >
                        <GlassmorphismCard className="p-8">
                            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
                                Project Gallery
                            </h3>
                            <Carousel className="w-full max-w-4xl mx-auto">
                                <CarouselContent>
                                    {project.project_images.map((image, index) => (
                                        <CarouselItem key={index} className="basis-1/2">
                                            <div className="p-1">
                                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                                    <Image
                                                        src={image || "/placeholder.svg"}
                                                        alt={`Project image ${index + 1}`}
                                                        fill
                                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="cursor-pointer" />
                                <CarouselNext className="cursor-pointer" />
                            </Carousel>
                        </GlassmorphismCard>
                    </m.div>
                )}

                {/* Client Feedback */}
                {project.client_feedback && (
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-16"
                    >
                        <GlassmorphismCard className="p-8">
                            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
                                Client Feedback
                            </h3>
                            <div className="max-w-3xl mx-auto">
                                <div className="flex items-center justify-center space-x-4 mb-6">
                                    <Image
                                        src={project.client_image || "/placeholder.svg"}
                                        alt={project.client_name}
                                        width={64}
                                        height={64}
                                        className="rounded-full"
                                    />
                                    <div className="text-center">
                                        <p className="font-medium text-white text-lg">
                                            {project.client_name}
                                        </p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <Quote
                                        className="absolute -top-4 -left-4 text-blue-400 opacity-50"
                                        size={32}
                                    />
                                    <blockquote className="text-gray-300 italic text-lg text-center leading-relaxed pl-8">
                                        "{project.client_feedback}"
                                    </blockquote>
                                </div>
                            </div>
                        </GlassmorphismCard>
                    </m.div>
                )}
            </div>
        </div>
    );
}

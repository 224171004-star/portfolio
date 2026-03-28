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
    ExternalLink,
} from "lucide-react";
import type { VideoProject } from "@/types/videos";

interface ProjectDetailsProps {
    project: VideoProject;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {

    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-5xl mx-auto">
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
                            Back
                        </Link>
                    </Button>
                </m.div>

                {/* Title Section */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
                        {project.video_title}
                    </h1>
                    <p className="text-gray-400 text-lg">
                        {project.video_description}
                    </p>
                </m.div>

                {/* Video Player Section */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-12"
                >
                    <GlassmorphismCard className="p-1">
                        <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-900">
                            {project.is_instagram_reel ? (
                                <div className="relative w-full h-full">
                                    <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/30"
                                        >
                                            <a
                                                href={project.video_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <Play size={18} fill="white" />
                                                Watch
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            ) : (
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
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/30"
                                        >
                                            <a
                                                href={project.video_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <Play size={18} fill="white" />
                                                Watch
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </GlassmorphismCard>
                </m.div>

                {/* Project Metadata */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-12"
                >
                    <GlassmorphismCard className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Category */}
                            <div>
                                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-3">
                                    Category
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.category.map((category) => (
                                        <Badge
                                            key={category}
                                            variant="outline"
                                            className="border-gray-600 text-gray-300 bg-white/5"
                                        >
                                            {category}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Software */}
                            {project.software_used && (
                                <div>
                                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-3">
                                        Tools
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.software_used.map((software) => (
                                            <Badge
                                                key={software}
                                                variant="outline"
                                                className="border-gray-600 text-gray-300 bg-white/5"
                                            >
                                                {software}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Info */}
                            <div>
                                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-3">
                                    Details
                                </p>
                                <div className="space-y-1 text-sm text-gray-400">
                                    <p>
                                        {new Date(project.publish_date).toLocaleDateString(
                                            "en-US",
                                            {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            }
                                        )}
                                    </p>
                                    <p>{project.client_name}</p>
                                </div>
                            </div>
                        </div>
                    </GlassmorphismCard>
                </m.div>

                {/* Project Gallery */}
                {project.project_images && project.project_images.length > 0 && (
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-12"
                    >
                        <GlassmorphismCard className="p-8">
                            <h2 className="text-2xl font-bold text-white mb-8">
                                Gallery
                            </h2>
                            <Carousel className="w-full">
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
                    >
                        <GlassmorphismCard className="p-8">
                            <div className="max-w-3xl mx-auto">
                                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-4">
                                    Feedback
                                </p>
                                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                                    "{project.client_feedback}"
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={project.client_image || "/placeholder.svg"}
                                        alt={project.client_name}
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                    <p className="font-medium text-white">
                                        {project.client_name}
                                    </p>
                                </div>
                            </div>
                        </GlassmorphismCard>
                    </m.div>
                )}
            </div>
        </div>
    );
}

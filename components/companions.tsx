import { Companion } from "@prisma/client";
import Image from "next/image";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
import { MessagesSquare } from "lucide-react";

interface CompanionProps {
    data: (Companion)[];
    // Message count functionality not implemented
}

export const Companions = ({
    data
}: CompanionProps) => {
    if (data.length === 0) {
        return (
            <div className="pt-10 flex flex-col items-center justify-center space-y-3">
                <div className="relative w-60 h-60">
                    <Image
                        fill
                        alt="Empty"
                        src="/empty.png"
                    />
                </div>
                <p className="text-sm text-muted-foreground">
                    No companions found.
                </p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 pb-10">
            {data.map((item) => (
                <Card
                    key={TemplateContext.id}
                    className="bg-primary/10 rounded-xl cursor-pointer hover:opacity-75 transition border-0"
                >
                    <Link href={`/chat/${item.id}`}>
                        <CardHeader className="flex items-center justify-center text-center text-muted-foreground">
                            <div className="relative w-32 h-32">
                                <Image
                                    src={item.src}
                                    fill
                                    className="rounded-xl object-cover"
                                    alt="Companion"
                                />
                            </div>
                            <p className="font-bold">
                                {item.name}
                            </p>
                            <p className="text-xs">
                                {item.description}
                            </p>
                        </CardHeader>
                        <CardFooter className="flex items-center justify-center text-xs text-muted-foreground">
                            <p className="lowercase">
                                @{item.userName}
                            </p>
                        </CardFooter>
                    </Link>
                </Card>
            ))}
        </div>
    )
}
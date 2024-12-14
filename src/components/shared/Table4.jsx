"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function Table4() {
    const [progress, setProgress] = React.useState(23);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(46), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="">
            <div className="">
                <h1>Total Deposit</h1>
                <h1 className="font-semibold">20</h1>
            </div>
            <div className=" flex gap-3 text-[15px] text-[#828690]">
                <p>Tasks Not Finished</p>
                <p>20/28</p>
            </div>
            <Progress
                value={progress}
                className="w-[90%] h-2 bg-blue-600"
                style={{ "--progress-bar-color" : progress > 50 ? "red" : "blue" }}
            />
        </div>
    );
}

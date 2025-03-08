import { Palette, PanelLeft, MousePointer, Layers } from "lucide-react"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4">
            <main className="flex flex-col items-center text-center max-w-[800px]">
                <div className="flex items-center justify-center space-x-2 mb-10">
                    <div className="rounded-full bg-primary/10 p-2">
                        <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <h1 className="text-2xl font-bold">Website Builder</h1>
                </div>

                <h2 className="text-3xl font-bold tracking-tight mb-6">Welcome to your new project</h2>

                <p className="text-muted-foreground mb-10">
                    This is your blank canvas. Start building your website by adding elements from the sidebar.
                </p>

                <div className="border border-border rounded-lg p-6 w-full max-w-[600px] bg-card">
                    <h3 className="font-medium mb-2">Getting Started</h3>
                    <p className="text-sm text-muted-foreground mb-4">Here are some tips to help you build your website:</p>
                    <ul className="text-sm space-y-3 text-left">
                        <li className="flex items-start">
                            <div className="mr-3 bg-primary/10 p-1 rounded-full">
                                <PanelLeft className="h-4 w-4 text-primary" />
                            </div>
                            <span>Open the sidebar to access elements you can add to your page</span>
                        </li>
                        <li className="flex items-start">
                            <div className="mr-3 bg-primary/10 p-1 rounded-full">
                                <MousePointer className="h-4 w-4 text-primary" />
                            </div>
                            <span>Drag and drop elements onto your page to build your layout</span>
                        </li>
                        <li className="flex items-start">
                            <div className="mr-3 bg-primary/10 p-1 rounded-full">
                                <Layers className="h-4 w-4 text-primary" />
                            </div>
                            <span>Customize each element by clicking on it and using the properties panel</span>
                        </li>
                    </ul>
                </div>
            </main>

            <footer className="mt-auto pt-8">
                <p className="text-sm text-muted-foreground text-center">Start building something amazing</p>
            </footer>
        </div>
    )
}
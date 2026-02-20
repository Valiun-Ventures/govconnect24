import { c as createIcon, j as jsxRuntime, L as Link } from "./index-CVq230AZ.js";
import { B as Button, M as MapPin } from "./Footer-CJq_2FbU.js";
import { B as Building2 } from "./building-2-CYrFHNmg.js";
import { C as Calendar } from "./blog-JEKXeGjH.js";
import { A as ArrowRight } from "./arrow-right-CD-kH-1_.js";

const IndianRupee = createIcon("IndianRupee", [
    ["path", { d: "M6 3h12", key: "ggurg9" }],
    ["path", { d: "M6 8h12", key: "6g4wlu" }],
    ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
    ["path", { d: "M6 13h3", key: "wdp6ag" }],
    ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
]);

const tendersData = [
    {
        id: "aai-goa-led-sitc",

        title: "SITC of LED Lights at Goa International Airport",
        department: "Airports Authority of India (AAI)",
        location: "Goa International Airport",
        value: "Rs 83.90 Lakh",
        deadline: "Refer to tender",
        category: "Electrical Works",
        status: "Live"
    },
    {
        id: "kukshi-stp-project",
        title: "Interception & Diversion + Sewage Treatment Plant (STP) Setup",
        department: "Nagar Parishad Kukshi, Dist. Dhar (M.P.)",
        location: "Kukshi, Dhar, Madhya Pradesh",
        value: "Rs 7.77 Cr",
        deadline: "Mar 04, 2026",
        category: "Civil Construction",
        status: "Live"
    },
    {
        id: "forest-dept-solar-project",
        title: "Solar Street Light + High Mast Installation (Social Forestry)",
        department: "Forest Department (Social Forestry Circle), Jabalpur",
        location: "Jabalpur Division, MP",
        value: "Rs 1 Cr+ (Est.)",
        deadline: "Feb 25, 2026, 02:00 PM",
        category: "Solar Power",
        status: "Live"
    },
    {
        id: "bhopal-furniture-supply",
        title: "Furniture Supply for Govt. Law Colleges in Narmadapuram and Sehore",
        department: "Govt. Law College, Narmadapuram & Ichhawar",
        location: "Sehore & Narmadapuram, MP",
        value: "Rs 49.81 Lakh",
        deadline: "Feb 25, 2026, 05:30 PM",
        category: "Procurement",
        status: "Live"
    },
    {
        id: "uda-creative-agency-empanelment",
        title: "Empanelment for Creative Content & 3D Visualization - UDA",
        department: "Ujjain Development Authority (UDA)",
        location: "Ujjain, Madhya Pradesh",
        value: "Rs 3.86 Cr",
        deadline: "Feb 20, 2026, 05:30 PM",
        category: "IT Services",
        status: "Live"
    },
    {
        id: "pwd-division-1-indore",
        title: "Center Divider and Central Lighting on Niranjanpur Chauraha to Mangaliya Road (Old AB Road)",
        department: "PWD Division No. 1, Indore (Govt. of Madhya Pradesh)",
        location: "Indore, Madhya Pradesh",
        value: "Rs 6.39 Cr",
        deadline: "Refer to portal",
        category: "Civil Construction",
        status: "Live"
    },
    {
        id: "rspcb-lab-equipment",
        title: "Procurement of Laboratory Equipment",
        department: "Rajasthan State Pollution Control Board (RSPCB), Jaipur",
        location: "Jaipur, Rajasthan",
        value: "Rs 14.51 Cr",
        deadline: "Feb 23, 2026, 6:00 PM",
        category: "Procurement",
        status: "Live"
    }
];

function TendersSection() {
    return jsxRuntime.jsxs("section", {
        className: "py-14 sm:py-16 lg:py-20 bg-secondary/30",
        children: [
            jsxRuntime.jsx("div", {
                className: "section-container",
                children: jsxRuntime.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-end mb-12 gap-6",
                    children: [
                        jsxRuntime.jsxs("div", {
                            children: [
                                jsxRuntime.jsx("span", { className: "inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4", children: "Live Opportunities" }),
                                jsxRuntime.jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold mt-2", children: "Latest Government Tenders" }),
                                jsxRuntime.jsx("p", { className: "text-muted-foreground mt-4 max-w-2xl", children: "Discover the most recent tender opportunities across various sectors and regions. Stay ahead with real-time updates." })
                            ]
                        }),
                        jsxRuntime.jsx(Button, { className: "bg-brand-purple text-primary-foreground hover:brightness-110", asChild: !0, children: jsxRuntime.jsxs(Link, { to: "/tenders", children: ["View All Tenders", jsxRuntime.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })] }) })
                    ]
                })
            }),
            jsxRuntime.jsx("div", {
                className: "section-container",
                children: jsxRuntime.jsx("div", {
                    className: "space-y-4",
                    children: tendersData.map((tender) => jsxRuntime.jsx("div", {
                        className: "p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group",
                        children: jsxRuntime.jsxs("div", {
                            className: "flex flex-col lg:flex-row lg:items-center gap-6",
                            children: [
                                jsxRuntime.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                        jsxRuntime.jsxs("div", {
                                            className: "flex flex-wrap items-center gap-3 mb-3",
                                            children: [
                                                jsxRuntime.jsx("span", { className: "px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full", children: tender.status }),
                                                jsxRuntime.jsx("span", { className: "px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full", children: tender.category }),
                                                jsxRuntime.jsxs("span", { className: "text-xs text-muted-foreground", children: ["ID: ", tender.id] })
                                            ]
                                        }),
                                        jsxRuntime.jsx("h3", { className: "font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors", children: tender.title }),
                                        jsxRuntime.jsxs("div", {
                                            className: "flex flex-wrap items-center gap-4 text-sm text-muted-foreground",
                                            children: [
                                                jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [jsxRuntime.jsx(Building2, { className: "w-4 h-4" }), tender.department] }),
                                                jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [jsxRuntime.jsx(MapPin, { className: "w-4 h-4" }), tender.location] })
                                            ]
                                        })
                                    ]
                                }),
                                jsxRuntime.jsxs("div", {
                                    className: "flex flex-wrap lg:flex-col gap-4 lg:items-end lg:min-w-[200px]",
                                    children: [
                                        jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx(IndianRupee, { className: "w-4 h-4 text-primary" }), jsxRuntime.jsx("span", { className: "font-bold text-xl text-primary", children: tender.value })] }),
                                        jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [jsxRuntime.jsx(Calendar, { className: "w-4 h-4 text-destructive" }), jsxRuntime.jsxs("span", { className: "text-destructive", children: ["Deadline: ", tender.deadline] })] }),
                                        jsxRuntime.jsxs("div", {
                                            className: "flex flex-wrap items-center gap-2",
                                            children: [
                                                jsxRuntime.jsx(Link, { to: `/tenders/${tender.id}`, children: jsxRuntime.jsxs(Button, { className: "bg-gradient-gold hover:opacity-90 text-primary-foreground", children: ["View Details", jsxRuntime.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })] }) }),
                                                jsxRuntime.jsx(Link, { to: "/contact", children: jsxRuntime.jsx(Button, { variant: "outline", className: "border-primary/30 text-primary hover:bg-primary/10", children: "Apply Now" }) })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }, tender.id))
                })
            })
        ]
    });
}

export { TendersSection as T };

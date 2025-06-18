import React from "react"
import { AgentIcon, ArticleIcon, ContactIcon, IdeaIcon, OverviweIcon, SettingsIcon,  SubIcon,  TiscketIcon } from "../assets/icons"
import Subscription from "../pages/Subscription"
import Overview from "../pages/Overview"
import Tickets from "../pages/Tickets"
import Ideas from "../pages/Ideas"
import Contacts from "../pages/Contacts"
import Agents from "../pages/Agents"
import Articles from "../pages/Articles"
import Settings from "../pages/Settings"
export const paths = {
    overviwe: "/",
    tickets: "/tickets",
    ideas: "/ideas",
    contacts: "/contacts",
    agents: "/agents",
    articles: "/articles",
    settings: "/settings",
    subscription: "/subscription"
}


export const navList = [
    {
        id: 1,
        title: "Overview",
        path: paths.overviwe,
        icon: <OverviweIcon />
    },
    {
        id: 2,
        title: "Tickets",
        path: paths.tickets,
        icon: <TiscketIcon />
    },
    {
        id: 3,
        title: "Ideas",
        path: paths.ideas,
        icon: <IdeaIcon />
    },
    {
        id: 4,
        title: "Contacts",
        path: paths.contacts,
        icon: <ContactIcon />
    },
    {
        id: 5,
        title: "Agents",
        path: paths.agents,
        icon: <AgentIcon />
    },
    {
        id: 6,
        title: "Articles",
        path: paths.articles,
        icon: <ArticleIcon />
    },
    {
        id: 7,
        title: "Settings",
        path: paths.settings,
        icon: < SettingsIcon/>
    },
    {
        id: 8,
        title: "Subscription",
        path: paths.subscription,
        icon: <SubIcon />
    },
]


export const pageRouteList = [

    {
        id: 1,
        title: "Overview",
        path: paths.overviwe,
        element: <Overview />
    },
    {
        id: 2,
        title: "Tickets",
        path: paths.tickets,
        element: <Tickets />
    },
    {
        id: 3,
        title: "Ideas",
        path: paths.ideas,
        element: <Ideas />
    },
    {
        id: 4,
        title: "Contacts",
        path: paths.contacts,
        element: <Contacts />
    },
    {
        id: 5,
        title: "Agents",
        path: paths.agents,
        element: <Agents />
    },
    {
        id: 6,
        title: "Articles",
        path: paths.articles,
        element: <Articles />
    },
    {
        id: 7,
        title: "Settings",
        path: paths.settings,
        element: <Settings />
    },
    {
        id: 8,
        title: "Subscription",
        path: paths.subscription,
        element: <Subscription />
    },

]
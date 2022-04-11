const config = {
    baseURL: "https://google.com",
    siteName: "Der Casino Profi",
    title: "The coolest website ever",
    apiUrl: "http://localhost:3002",
    slotsUrl: 'http://localhost:3002/slots',
    slotUrl: 'http://localhost:3002/slot',
    metaCharset: 'utf-8',
    meta: {
        htmlLang: "de",
        title: "Online Casinos und Boni Vergleicher - CasinoVergleicher.com",
        description: "Online Casinos auf dem Prüfstand. Nur bei CasinoVergleicher.com findest du so schnell das Top Casino, welches zu dir passt. Sicher. Zuverlässig. Kostenlos.",
        keywords: "online, casino, slots, bonus",
    },
    tags: {
        includeTags: ["sometag"],
        excludeTags: ["anothertag"]
    },
    slots: {
        numberOfSlots: 20,
        limit: 20,
        maximalPaginationSize: 100
    },
    navigationLinks: [
        { name: 'Start', title: 'Online Casinos', url: '/', publish: true },
        { name: 'Casinos', title: 'Casinos', url: '/online-casinos/', publish: false },
        { name: 'Bonus', title: 'Casino Bonus', url: '/casino-bonus/', publish: false },
        { name: 'Slots', title: 'Online Slots', url: '/slots/', publish: true },
        { name: 'Mobile', title: 'Mobile Casinos', url: '/mobile-casinos/', publish: false },
        { name: 'Paypal Casinos', title: 'Paypal Casino', url: '/paypal-casino/', publish: false },
        { name: 'Zahlungsmethoden', title: 'Casino Zahlungsmethoden', url: '/casino-zahlungsmoeglichkeiten/', publish: false },
        { name: 'Spielregeln', title: 'Casinos Spielregeln', url: '/casino-spielregeln/', publish: false },
        { name: 'Software', title: 'Casino Software', url: '/casino-software/', publish: false },
        { name: 'Ratgeber', title: 'Casino Ratgeber', url: '/casino-ratgeber/', publish: false },
        { name: 'News', title: 'Casino News', url: '/casino-news/', publish: false },
        { name: 'Gütesiegel', title: 'online casino betrugstest', url: '/online-casino-betrugstest/', publish: false },
    ],
    categories: [
        { name: 'Electronic', tag: 'electronic', title: 'Electronics', image: 'electronic.jpg', publish: true, metaDescription: 'Buy cheap Electronic here.' },


    ],
}

module.exports = config
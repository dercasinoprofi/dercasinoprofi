const config = {
    baseURL: "https://google.com",
    siteName: "Der Casino Profi",
    title: "The coolest website ever",
    apiUrl: "http://localhost:3002",
    metaCharset: 'utf-8',
    meta: {
        htmlLang: "de",
        title: "Website Title",
        description: "Meta Description",
        keywords: "meta keywords",
    },
    tags: {
        includeTags: ["sometag"],
        excludeTags: ["anothertag"]
    },
    videos: {
        limit: 40,
        maximalPaginationSize: 100
    },
    navigationLinks: [
        { name: 'Start', title: 'Online Casinos', url: '/' },
        { name: 'Casinos', title: 'Casinos', url: '/online-casinos/' },
        { name: 'Bonus', title: 'Casino Bonus', url: '/casino-bonus/' },
        { name: 'Slots', title: 'Online Slots', url: '/online-slots/' },
        { name: 'Mobile', title: 'Mobile Casinos', url: '/mobile-casinos/' },
        { name: 'Paypal Casinos', title: 'Paypal Casino', url: '/paypal-casino/' },
        { name: 'Zahlungsmethoden', title: 'Casino Zahlungsmethoden', url: '/casino-zahlungsmoeglichkeiten/' },
        { name: 'Spielregeln', title: 'Casinos Spielregeln', url: '/casino-spielregeln/' },
        { name: 'Software', title: 'Casino Software', url: '/casino-software/' },
        { name: 'Ratgeber', title: 'Casino Ratgeber', url: '/casino-ratgeber/' },
        { name: 'News', title: 'Casino News', url: '/casino-news/' },
        { name: 'Gütesiegel', title: 'online casino betrugstest', url: '/online-casino-betrugstest/' },
    ],
    categories: [
        { name: 'Electronic', tag: 'electronic', title: 'Electronics', image: 'electronic.jpg', publish: true, metaDescription: 'Buy cheap Electronic here.' },


    ],
}

module.exports = config
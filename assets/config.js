const config = {
    baseURL: "https://google.com",
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
    categories: [
        { name: 'Elektronik', tag: 'electronic', title: 'Electronics', image: 'eletronig.jpg', publish: true, metaDescription: 'Some category' },


    ]
}

module.exports = config
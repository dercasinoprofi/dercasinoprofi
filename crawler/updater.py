from bs4 import BeautifulSoup
from pymongo import MongoClient
import requests
import wget
from bson import ObjectId


url = "https://www.pragmaticplay.com/de/spiele/?ajax=1&cats=undefined&lang=de&cur=EUR&device=undefined&search=&page="
client = MongoClient('mongodb://127.0.0.1:27017/casinoapi')
db = client['casinoapi']


for x in db.slots.find():
    slug = x['thumbnail']
    y = slug.split('.png')[0]

    x['slug'] = y
    db.slots.update_one(
        {
            '_id': ObjectId(x['_id'])
        },
        {
            '$set': {
                'slug': y
            }
        }
    )

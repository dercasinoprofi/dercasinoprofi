from bs4 import BeautifulSoup
from pymongo import MongoClient
import requests
import wget


url = "https://www.pragmaticplay.com/de/spiele/?ajax=1&cats=undefined&lang=de&cur=EUR&device=undefined&search=&page="
client = MongoClient('mongodb://127.0.0.1:27017/casinoapi')
db = client['casinoapi']


def get_iframe_src(url):
    r = requests.get(url, headers={
                     'User-agent': 'Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0'})
    soup = BeautifulSoup(r.text, 'html.parser')
    iframe = soup.find('iframe')

    return iframe['data-game-src']


def download_image(url, name, provider):
    image_filename = wget.download(
        url, out='thumbs/' + provider.lower().strip() + '-' + name.replace(' ', '-').replace('™', '').lower().strip() + '.png')

    return image_filename.split('/')[1]


with open('slots.html', 'r') as f:
    provider = 'pragmaticplay'
    contents = f.read()

    soup = BeautifulSoup(contents, 'html.parser')
    games = soup.findAll('div', {'class': 'game'})

    for game in games:

        game = game.find('a', href=True)
        if game:
            try:
                name = game['title'].strip()
                url = game['href']
                thumbnail = game.find('img', src=True)['src']
                iframe_src = get_iframe_src(url)

                print(url)

                image_name = download_image(thumbnail, name, provider)

                db.slots.insert_one(
                    {
                        'provider': provider,
                        'name': name,
                        'url': url,
                        'thumbnail': thumbnail,
                        'iframeSrc': iframe_src,
                        'thumbnail': image_name
                    }
                )

                print(url, name, thumbnail, iframe_src)
            except Exception as e:
                print(url, str(e))

from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import urllib2

app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app)

githubURL = "https://www.github.com/"

@app.route('/scrape', methods=['POST'])
def scrape():
    page = urllib2.urlopen(getPage(request.data))
    soup = BeautifulSoup(page, 'html.parser')

    repositories = []
    name = soup.find('span', attrs={'class': 'p-name'}).text
    username = soup.find('span', attrs={'class': 'p-nickname'}).text
    avatar = soup.find('a', attrs={'class': 'u-photo'}).get("href")
    popularRepositories = soup.find("ol", { "class" : "gutter-condensed" }).findAll("li", recursive=False)
    repositorieCounter = soup.find("nav", attrs={'class': 'UnderlineNav-body'}).select_one("a:nth-of-type(2)").find("span", attrs={"class": "Counter"}).text
    followersCounter = soup.find("nav", attrs={'class': 'UnderlineNav-body'}).select_one("a:nth-of-type(5)").find("span", attrs={"class": "Counter"}).text
    followingCounter = soup.find("nav", attrs={'class': 'UnderlineNav-body'}).select_one("a:last-child").find("span", attrs={"class": "Counter"}).text

    for repository in popularRepositories:
        link = githubURL + repository.find('a').get('href').encode('utf-8').strip("\n").strip()
        title = repository.find('span', attrs={'class': 'repo'}).text.encode('utf-8').strip("\n").strip()
        description = repository.find('p', attrs={'class': 'pinned-item-desc'}).text.encode('utf-8').strip("\n").strip()
        repositories.append([str(title), str(link), str(description)])

    githubData = {
        "name": name,
        "username": username,
        "avatar": avatar,
        "repositorieCounter": repositorieCounter,
        "followersCounter": followersCounter,
        "followingCounter": followingCounter,
        "repositories": repositories,
    }

    return jsonify(githubData)
    
def getPage(url):
    return githubURL + url

app.run()
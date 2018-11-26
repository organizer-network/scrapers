import urllib2, bs4
import unicodecsv as csv

url = 'https://www.nytimes.com/'
page = urllib2.urlopen(url)
soup = bs4.BeautifulSoup(page, features="html.parser")

out = open('nytimes.csv', 'wb')
writer = csv.writer(out)

h2s = soup.find_all('h2')
for h2 in h2s:
	title = h2.text
	links = h2.find_parents('a')
	if len(links) == 0:
		continue
	href = "https://www.nytimes.com%s" % links[0]['href']
	print(title)
	print(href)

	writer.writerow([href, title])

out.close()

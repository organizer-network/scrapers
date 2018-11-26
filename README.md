# Scrapers

*yeah that's right, I just went and made my own data.*

## nytimes.py

Outputs a CSV file containing the headline and URL of each `<h2>` heading on the front page of nytimes.com.

Here's how to run `nytimes.py`

```
$ pip install bs4 unicodecsv --user
$ curl -O https://raw.githubusercontent.com/organizer-network/scrapers/master/nytimes.py
$ python nytimes.py
```

The underlying library used here is called [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/).

Note: if these commands give you trouble, you may want to try SSHing into the server before you run it. The Python package manager, `pip`, is rather cranky.

## instagram.js

Outputs a list of Instagram post URLs from a specific Instagram account.

Here's how to install and run `instagram.js`

```
$ cd instagram
$ npm install
$ node instagram.js @user
```

The underlying library used here is called [Puppeteer](https://pptr.dev/).

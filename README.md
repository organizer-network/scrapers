# Scrapers

*yeah that's right, I just went and made my own data.*

## nytimes.py

Outputs a CSV file containing the headline and URL of each `<h2>` heading on the front page of nytimes.com.

Here's how to run `nytimes.py`:

```
$ pip install bs4 unicodecsv
$ curl -O https://raw.githubusercontent.com/organizer-network/scrapers/master/nytimes.py
$ python nytimes.py
```

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

Note: if these commands give you trouble, you may want to try SSHing into the server before you run it. The Python package manager, `pip`, is rather cranky.

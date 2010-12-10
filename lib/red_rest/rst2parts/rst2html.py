#!/usr/bin/env python

try:
    import locale
    locale.setlocale(locale.LC_ALL, '')
except:
    pass

from transform import transform
from docutils.writers.html4css1 import Writer

try:
    __import__('sourcecode-directive')
except ImportError:
    pass

def main():
    return transform(writer=Writer(), part='html_body')

if __name__ == '__main__':
    print(main())

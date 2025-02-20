from setuptools import setup
from Cython.Build import cythonize

setup(
    name = 'alpha',
    ext_modules = cythonize('stack.py')
)
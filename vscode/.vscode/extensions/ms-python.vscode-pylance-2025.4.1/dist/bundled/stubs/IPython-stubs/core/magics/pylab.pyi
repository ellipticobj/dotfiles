"""
This type stub file was generated by pyright.
"""

from IPython.core import magic_arguments
from IPython.core.magic import Magics, line_magic, magics_class
from IPython.testing.skipdoctest import skip_doctest

"""Implementation of magic functions for matplotlib/pylab support.
"""
magic_gui_arg = ...
@magics_class
class PylabMagics(Magics):
    """Magics related to matplotlib's pylab support"""
    @skip_doctest
    @line_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument('-l', '--list', action='store_true', help='Show available matplotlib backends')
    @magic_gui_arg
    def matplotlib(self, line=...): # -> None:
        """Set up matplotlib to work interactively.

        This function lets you activate matplotlib interactive support
        at any point during an IPython session. It does not import anything
        into the interactive namespace.

        If you are using the inline matplotlib backend in the IPython Notebook
        you can set which figure formats are enabled using the following::

            In [1]: from matplotlib_inline.backend_inline import set_matplotlib_formats

            In [2]: set_matplotlib_formats('pdf', 'svg')

        The default for inline figures sets `bbox_inches` to 'tight'. This can
        cause discrepancies between the displayed image and the identical
        image created using `savefig`. This behavior can be disabled using the
        `%config` magic::

            In [3]: %config InlineBackend.print_figure_kwargs = {'bbox_inches':None}

        In addition, see the docstrings of
        `matplotlib_inline.backend_inline.set_matplotlib_formats` and
        `matplotlib_inline.backend_inline.set_matplotlib_close` for more information on
        changing additional behaviors of the inline backend.

        Examples
        --------
        To enable the inline backend for usage with the IPython Notebook::

            In [1]: %matplotlib inline

        In this case, where the matplotlib default is TkAgg::

            In [2]: %matplotlib
            Using matplotlib backend: TkAgg

        But you can explicitly request a different GUI backend::

            In [3]: %matplotlib qt

        You can list the available backends using the -l/--list option::

           In [4]: %matplotlib --list
           Available matplotlib backends: ['osx', 'qt4', 'qt5', 'gtk3', 'gtk4', 'notebook', 'wx', 'qt', 'nbagg',
           'gtk', 'tk', 'inline']
        """
        ...
    
    @skip_doctest
    @line_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument('--no-import-all', action='store_true', default=None, help="""Prevent IPython from performing ``import *`` into the interactive namespace.

        You can govern the default behavior of this flag with the
        InteractiveShellApp.pylab_import_all configurable.
        """)
    @magic_gui_arg
    def pylab(self, line=...): # -> None:
        """Load numpy and matplotlib to work interactively.

        This function lets you activate pylab (matplotlib, numpy and
        interactive support) at any point during an IPython session.

        %pylab makes the following imports::

            import numpy
            import matplotlib
            from matplotlib import pylab, mlab, pyplot
            np = numpy
            plt = pyplot

            from IPython.display import display
            from IPython.core.pylabtools import figsize, getfigs

            from pylab import *
            from numpy import *

        If you pass `--no-import-all`, the last two `*` imports will be excluded.

        See the %matplotlib magic for more details about activating matplotlib
        without affecting the interactive namespace.
        """
        ...
    



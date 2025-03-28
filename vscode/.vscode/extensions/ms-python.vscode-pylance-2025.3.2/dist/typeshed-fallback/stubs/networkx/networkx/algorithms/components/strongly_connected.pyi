from collections.abc import Generator, Hashable, Iterable

from networkx.classes.digraph import DiGraph
from networkx.classes.graph import Graph, _Node
from networkx.utils.backends import _dispatchable

@_dispatchable
def strongly_connected_components(G: Graph[_Node]) -> Generator[set[_Node], None, None]: ...
@_dispatchable
def kosaraju_strongly_connected_components(G: Graph[_Node], source: _Node | None = None) -> Generator[set[_Node], None, None]: ...
@_dispatchable
def number_strongly_connected_components(G: Graph[Hashable]) -> int: ...
@_dispatchable
def is_strongly_connected(G: Graph[Hashable]) -> bool: ...
@_dispatchable
def condensation(G: DiGraph[_Node], scc: Iterable[Iterable[_Node]] | None = None) -> DiGraph[int]: ...

from ...classes.graph import Graph

FORWARD: str = ...
REVERSE: str = ...

__all__ = ["edge_dfs"]

def edge_dfs(G: Graph, source=None, orientation=None): ...

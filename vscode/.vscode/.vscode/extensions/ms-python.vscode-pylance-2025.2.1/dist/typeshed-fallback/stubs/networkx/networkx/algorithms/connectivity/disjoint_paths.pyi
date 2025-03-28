from _typeshed import Incomplete
from collections.abc import Generator

from networkx.algorithms.flow import edmonds_karp
from networkx.utils.backends import _dispatchable

__all__ = ["edge_disjoint_paths", "node_disjoint_paths"]

default_flow_func = edmonds_karp

@_dispatchable
def edge_disjoint_paths(
    G,
    s,
    t,
    flow_func: Incomplete | None = None,
    cutoff: Incomplete | None = None,
    auxiliary: Incomplete | None = None,
    residual: Incomplete | None = None,
) -> Generator[Incomplete, None, None]: ...
@_dispatchable
def node_disjoint_paths(
    G,
    s,
    t,
    flow_func: Incomplete | None = None,
    cutoff: Incomplete | None = None,
    auxiliary: Incomplete | None = None,
    residual: Incomplete | None = None,
) -> Generator[Incomplete, None, None]: ...

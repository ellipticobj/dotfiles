# COMPLETE

import typing_extensions
from pathlib import Path
from typing import Any, Dict, List, Mapping, Union

_Style: typing_extensions.TypeAlias = Union[str, Path, Mapping[str, Any]]
_StyleOrList: typing_extensions.TypeAlias = Union[_Style, List[_Style]]

def context(style: _StyleOrList, after_reset: bool = ...) -> None: ...
def reload_library() -> None: ...
def use(style: _StyleOrList) -> None: ...

library: Dict[str, Any]
available: List[str]

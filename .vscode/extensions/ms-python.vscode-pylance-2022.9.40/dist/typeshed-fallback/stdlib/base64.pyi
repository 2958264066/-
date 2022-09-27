import sys
from _typeshed import ReadableBuffer
from typing import IO

__all__ = [
    "encode",
    "decode",
    "encodebytes",
    "decodebytes",
    "b64encode",
    "b64decode",
    "b32encode",
    "b32decode",
    "b16encode",
    "b16decode",
    "b85encode",
    "b85decode",
    "a85encode",
    "a85decode",
    "standard_b64encode",
    "standard_b64decode",
    "urlsafe_b64encode",
    "urlsafe_b64decode",
]

if sys.version_info >= (3, 10):
    __all__ += ["b32hexencode", "b32hexdecode"]

def b64encode(s: ReadableBuffer, altchars: ReadableBuffer | None = ...) -> bytes: ...
def b64decode(s: str | ReadableBuffer, altchars: ReadableBuffer | None = ..., validate: bool = ...) -> bytes: ...
def standard_b64encode(s: ReadableBuffer) -> bytes: ...
def standard_b64decode(s: str | ReadableBuffer) -> bytes: ...
def urlsafe_b64encode(s: ReadableBuffer) -> bytes: ...
def urlsafe_b64decode(s: str | ReadableBuffer) -> bytes: ...
def b32encode(s: ReadableBuffer) -> bytes: ...
def b32decode(s: str | ReadableBuffer, casefold: bool = ..., map01: bytes | None = ...) -> bytes: ...
def b16encode(s: ReadableBuffer) -> bytes: ...
def b16decode(s: str | ReadableBuffer, casefold: bool = ...) -> bytes: ...

if sys.version_info >= (3, 10):
    def b32hexencode(s: ReadableBuffer) -> bytes: ...
    def b32hexdecode(s: str | ReadableBuffer, casefold: bool = ...) -> bytes: ...

def a85encode(b: ReadableBuffer, *, foldspaces: bool = ..., wrapcol: int = ..., pad: bool = ..., adobe: bool = ...) -> bytes: ...
def a85decode(b: str | ReadableBuffer, *, foldspaces: bool = ..., adobe: bool = ..., ignorechars: str | bytes = ...) -> bytes: ...
def b85encode(b: ReadableBuffer, pad: bool = ...) -> bytes: ...
def b85decode(b: str | ReadableBuffer) -> bytes: ...
def decode(input: IO[bytes], output: IO[bytes]) -> None: ...
def encode(input: IO[bytes], output: IO[bytes]) -> None: ...
def encodebytes(s: ReadableBuffer) -> bytes: ...
def decodebytes(s: ReadableBuffer) -> bytes: ...

if sys.version_info < (3, 9):
    def encodestring(s: ReadableBuffer) -> bytes: ...
    def decodestring(s: ReadableBuffer) -> bytes: ...

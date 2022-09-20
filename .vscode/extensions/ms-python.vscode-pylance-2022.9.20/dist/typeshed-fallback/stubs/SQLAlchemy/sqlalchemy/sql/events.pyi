from .. import event

class DDLEvents(event.Events):
    def before_create(self, target, connection, **kw) -> None: ...
    def after_create(self, target, connection, **kw) -> None: ...
    def before_drop(self, target, connection, **kw) -> None: ...
    def after_drop(self, target, connection, **kw) -> None: ...
    def before_parent_attach(self, target, parent) -> None: ...
    def after_parent_attach(self, target, parent) -> None: ...
    def column_reflect(self, inspector, table, column_info) -> None: ...
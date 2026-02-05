import React, { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  SortingState,
  ColumnFiltersState,
  RowSelectionState,
} from '@tanstack/react-table';
import { ChevronLeft, ChevronRight, Search, Trash2, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchColumn?: string;
  searchPlaceholder?: string;
  isLoading?: boolean;
  onBulkDelete?: (selectedRows: TData[]) => void;
  renderBulkActions?: (selectedRows: TData[]) => React.ReactNode;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchColumn,
  searchPlaceholder = "Search...",
  isLoading = false,
  onBulkDelete,
  renderBulkActions
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  const selectedRows = table.getFilteredSelectedRowModel().rows.map(row => row.original);

  if (isLoading) {
      return (
          <div className="w-full h-64 flex items-center justify-center border border-border rounded-xl bg-card">
              <div className="loader"></div>
          </div>
      )
  }

  return (
    <div className="w-full space-y-4 relative">
      {/* Floating Bulk Action Bar */}
      {Object.keys(rowSelection).length > 0 && (
        <div className="absolute top-0 left-0 right-0 z-10 mx-auto w-full max-w-2xl transform -translate-y-2 animate-in slide-in-from-top-4 fade-in duration-200">
            <div className="bg-primary text-primary-foreground rounded-full shadow-xl px-6 py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 px-2 py-0.5 rounded text-sm font-bold">
                        {selectedRows.length}
                    </div>
                    <span className="text-sm font-medium">Selected</span>
                </div>

                <div className="flex items-center gap-2">
                    {renderBulkActions && renderBulkActions(selectedRows)}

                    {onBulkDelete && (
                        <button
                            onClick={() => {
                                onBulkDelete(selectedRows);
                                setRowSelection({});
                            }}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
                            title="Delete Selected"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    )}

                    <div className="h-4 w-px bg-white/20 mx-2"></div>

                    <button
                        onClick={() => setRowSelection({})}
                        className="text-xs hover:underline opacity-80 hover:opacity-100"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
      )}

      {searchColumn && (
        <div className="flex items-center py-4 bg-card px-4 border border-border rounded-xl">
            <Search className="w-5 h-5 text-muted-foreground mr-2" />
          <input
            placeholder={searchPlaceholder}
            value={(table.getColumn(searchColumn)?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn(searchColumn)?.setFilterValue(event.target.value)
            }
            className="max-w-sm w-full bg-transparent border-none outline-none text-foreground placeholder-muted-foreground"
          />
        </div>
      )}

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 border-b border-border uppercase text-muted-foreground font-semibold">
                {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                    return (
                        <th key={header.id} className="px-6 py-4 font-medium">
                        {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                        </th>
                    );
                    })}
                </tr>
                ))}
            </thead>
            <tbody className="divide-y divide-border">
                {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                    <tr
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="hover:bg-muted/30 transition-colors group data-[state=selected]:bg-primary/5"
                    >
                    {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-6 py-4 align-middle">
                        {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                        )}
                        </td>
                    ))}
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                    No results.
                    </td>
                </tr>
                )}
            </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-2">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="p-2 border border-input rounded-md hover:bg-muted disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="p-2 border border-input rounded-md hover:bg-muted disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

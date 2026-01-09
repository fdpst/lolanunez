<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Carbon\Carbon;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;

class FacturasExport implements FromCollection, ShouldAutoSize, WithHeadings, WithColumnFormatting
{
    protected $data;
    protected $total;

    public function __construct($data, $total)
    {
        $this->data = $data;
        $this->total = $total;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $collection = collect($this->data)->map(function ($item) {
            $cliente = isset($item['cliente']) ? $item['cliente']['nombre'] : '';
            return [
                $item['nro_factura'],
                Carbon::parse($item['fecha'])->format('d-m-Y'),
                $cliente,
                $item['total'],
            ];
        });
        $collection->push([
            'total',
            '',
            '',
            $this->total, 
        ]);
        return $collection;
    }

    public function columnFormats(): array
    {
        $formats = [
            'D' => NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED2,
        ];
        return $formats;
    }

    public function headings(): array
    {
        return ['Nº Factura', 'Fecha','Cliente','Total'];
    }
}

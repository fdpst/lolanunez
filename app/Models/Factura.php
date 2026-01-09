<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\ModelsApp\AppUsuario;
class Factura extends Model
{
    use HasFactory;
    protected $table ="factura";
    
    protected $fillable = ['id_cliente','descuento','fecha','comentario'];

    public $appends = ['total'];

    public function getTotalAttribute(){
        $total = 0;
        foreach($this->Items as $item){
            $total +=$item->total;
        }
        //return $total*(1-$this->descuento)*(1.21);
        $subtotal = $total / 1.21;
        $descuentoNeto = ($subtotal * $this->descuento) / 100;
        $total = $subtotal - $descuentoNeto;
        $iva = ($subtotal * 21) / 100;
        return $total + $iva;
    }
    public function Cliente(){
        return $this->hasOne(AppUsuario::class,'id','id_cliente');
    }
    public function Items(){
        return $this->hasMany(ItemFacturas::class,'id_factura','id');
    }
}
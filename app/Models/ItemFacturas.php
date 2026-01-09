<?php

namespace App\Models;
use App\ModelsApp\AppServicio;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemFacturas extends Model
{
    use HasFactory;
    protected $table = 'item_factura';
    protected $fillable = ['descripcion','id_factura','id_articulo','cantidad','precio'];
    public $appends = ['total'];
    public function Servicio(){
        return $this->hasOne(AppServicio::class,'id','id_articulo');
    }
    public function getTotalAttribute(){
        return $this->cantidad*$this->precio;
    }
    public function Factura(){
        return $this->hasOne(Factura::class,'id','id_factura');
    }
}

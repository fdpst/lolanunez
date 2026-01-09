<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('factura', function (Blueprint $table) {
            $table->id();
            $table->integer('nro_factura')->nullable();
            $table->integer('id_cliente');
            $table->double('descuento');
            $table->tinyInteger('irpf')->nullable();
            $table->date('fecha');
            $table->string('comentario', 300)->nullable();
            $table->string('forma_pago', 100)->nullable();
            $table->text('file_name')->nullable();
            $table->text('url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('factura');
    }
};

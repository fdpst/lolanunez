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
        Schema::create('fecha_app_empleado', function (Blueprint $table) {
            $table->id();
            $table->integer('app_empleado_id');
            $table->timestamp('fecha')->useCurrentOnUpdate()->useCurrent();
            $table->string('entrada', 5)->nullable();
            $table->string('salida', 5)->nullable();
            $table->integer('app_tienda_id');
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
        Schema::dropIfExists('fecha_app_empleado');
    }
};

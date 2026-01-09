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
        Schema::create('horario_app_empleado', function (Blueprint $table) {
            $table->id();
            $table->integer('app_empleado_id');
            $table->integer('dia');
            $table->string('entrada', 5);
            $table->string('salida', 5);
            $table->timestamps();
            $table->integer('app_tienda_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('horario_app_empleado');
    }
};

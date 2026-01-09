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
        Schema::create('app_event', function (Blueprint $table) {
            $table->id();
            $table->integer('tipo_id')->default(0);
            $table->integer('app_empleado_id');
            $table->integer('app_usuario_id');
            $table->integer('app_mascota_id')->nullable();
            $table->string('color');
            $table->dateTime('start');
            $table->dateTime('end');
            $table->integer('tiempo_real')->default(0);
            $table->integer('app_tienda_id')->nullable();
            $table->integer('duracion')->nullable();
            $table->integer('confirmada')->nullable();
            $table->integer('cancelada')->nullable();
            $table->boolean('recogida')->nullable();
            $table->bigInteger('direccion_recogida')->nullable();
            $table->bigInteger('direccion_entrega')->nullable();
            $table->string('pago', 20)->nullable();
            $table->double('precio')->nullable();
            $table->string('token_cancelar', 20)->nullable();
            $table->string('status', 50)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('app_event');
    }
};

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
        Schema::create('solicitud', function (Blueprint $table) {
            $table->id();
            $table->integer('seccion_id');
            $table->integer('empleado_id')->nullable();
            $table->integer('web_user_id')->nullable();
            $table->string('nombre_cliente', 80);
            $table->string('status', 20);
            $table->timestamp('hora_inicio')->nullable();
            $table->timestamp('hora_progreso')->nullable();
            $table->timestamp('hora_final')->nullable();
            $table->double('tiempo_espera', 8, 2)->nullable();
            $table->double('tiempo_consulta', 8, 2)->nullable();
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
        Schema::dropIfExists('solicitud');
    }
};
